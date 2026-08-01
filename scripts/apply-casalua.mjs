// Cadastro da Casa Lua - Itapororoca (TBA-282).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá)
// e baixa as fotos para public/img/casalua.
// Fonte das fotos: 1) o próprio site já publicado (www.trancosoba.com) — deploys
// subsequentes; 2) temp.sh (upload temporário usado apenas no primeiro deploy).
// Roda automaticamente no predev/prebuild, após apply-jv12 (ver package.json).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'casalua-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-lua')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-casalua: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  if (src.includes('PROPERTIES.unshift(CASAJV12, IANDE,')) {
    src = src.replace('PROPERTIES.unshift(CASAJV12, IANDE,', 'PROPERTIES.unshift(CASALUA, CASAJV12, IANDE,');
  } else if (src.includes('PROPERTIES.unshift(IANDE,')) {
    src = src.replace('PROPERTIES.unshift(IANDE,', 'PROPERTIES.unshift(CASALUA, IANDE,');
  } else {
    throw new Error('apply-casalua: lista PROPERTIES.unshift não reconhecida');
  }
  if (!src.includes('CASALUA,')) throw new Error('apply-casalua: falha ao registrar CASALUA');
  writeFileSync(propsPath, src);
  console.log('apply-casalua: imóvel Casa Lua cadastrado em properties.ts');
} else {
  console.log('apply-casalua: imóvel já cadastrado, nada a fazer');
}

// Baixa as fotos (só o que falta)
const outDir = join(root, 'public', 'img', 'casalua');
const manifest = JSON.parse(readFileSync(join(root, 'scripts', 'casalua-manifest.json'), 'utf8'));
mkdirSync(outDir, { recursive: true });

function isValidImage(name, buf) {
  if (buf.length < 1000) return false;
  if (name.endsWith('.webp')) return buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WEBP';
  if (name.endsWith('.jpg') || name.endsWith('.jpeg')) return buf[0] === 0xff && buf[1] === 0xd8;
  return false;
}

let downloaded = 0;
for (const [name, tempUrl] of Object.entries(manifest)) {
  const out = join(outDir, name);
  if (existsSync(out)) continue;
  let buf = null;
  // 1) tenta o próprio site já publicado (deploys subsequentes ao primeiro)
  try {
    const res = await fetch(`https://www.trancosoba.com/img/casalua/${name}`);
    if (res.ok) {
      const b = Buffer.from(await res.arrayBuffer());
      if (isValidImage(name, b)) buf = b;
    }
  } catch {}
  // 2) fallback: temp.sh (download via POST)
  if (!buf) {
    const res = await fetch(tempUrl, { method: 'POST' });
    if (!res.ok) throw new Error(`Falha ao baixar ${name}: HTTP ${res.status}`);
    const b = Buffer.from(await res.arrayBuffer());
    if (!isValidImage(name, b)) throw new Error(`Arquivo suspeito/inválido: ${name} (${b.length} bytes)`);
    buf = b;
  }
  writeFileSync(out, buf);
  downloaded++;
}
const stillMissing = Object.keys(manifest).filter((n) => !existsSync(join(outDir, n)));
if (stillMissing.length) {
  console.error('apply-casalua: arquivos ausentes:', stillMissing.join(', '));
  process.exit(1);
}
console.log(`apply-casalua: fotos ok (${downloaded} baixadas, ${Object.keys(manifest).length} no total)`);
