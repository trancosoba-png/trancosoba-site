// Cadastro da Casa Lua - Itapororoca (TBA-282).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá)
// e materializa as fotos em public/img/casalua a partir dos base64 commitados
// em scripts/casalua-images (o GitHub MCP não aceita push de binário).
// Roda automaticamente no predev/prebuild, após apply-jv12 (ver package.json).
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
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

// Materializa as fotos a partir dos base64 (só o que falta)
const b64Dir = join(root, 'scripts', 'casalua-images');
const outDir = join(root, 'public', 'img', 'casalua');
mkdirSync(outDir, { recursive: true });
let written = 0;
for (const f of readdirSync(b64Dir)) {
  if (!f.endsWith('.b64')) continue;
  const out = join(outDir, f.slice(0, -4));
  if (existsSync(out)) continue;
  const buf = Buffer.from(readFileSync(join(b64Dir, f), 'utf8').trim(), 'base64');
  if (buf.length < 1000) throw new Error(`Imagem suspeita/inválida: ${f} (${buf.length} bytes)`);
  writeFileSync(out, buf);
  written++;
}
// Garante que todas as 59 imagens (29 webp + 29 thumbs + capa) existem
const expected = ['01.jpg'];
for (let i = 1; i <= 29; i++) {
  const n = String(i).padStart(2, '0');
  expected.push(`${n}.webp`, `${n}-thumb.webp`);
}
const missing = expected.filter((f) => !existsSync(join(outDir, f)));
if (missing.length) {
  console.error('apply-casalua: fotos ausentes:', missing.join(', '));
  process.exit(1);
}
console.log(`apply-casalua: fotos ok (${written} geradas, ${expected.length} no total)`);
