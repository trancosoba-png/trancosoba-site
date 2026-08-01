// Cadastro da Casa João Vieira 12 (TBA-281).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá)
// e baixa as fotos hospedadas externamente para public/img/joaovieira12.
// Roda automaticamente no predev/prebuild (ver package.json).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'jv12-property.ts');

// 1) Insere o imóvel no cadastro, se ausente
let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-joao-vieira-12')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-jv12: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(IANDE,', 'PROPERTIES.unshift(CASAJV12, IANDE,');
  if (!src.includes('CASAJV12, IANDE')) throw new Error('apply-jv12: falha ao registrar CASAJV12');
  writeFileSync(propsPath, src);
  console.log('apply-jv12: imóvel Casa João Vieira 12 cadastrado em properties.ts');
} else {
  console.log('apply-jv12: imóvel já cadastrado, nada a fazer');
}

// 2) Baixa as fotos (só o que falta)
const outDir = join(root, 'public', 'img', 'joaovieira12');
const manifest = JSON.parse(readFileSync(join(root, 'scripts', 'jv12-manifest.json'), 'utf8'));
mkdirSync(outDir, { recursive: true });
let downloaded = 0;
for (const [name, url] of Object.entries(manifest)) {
  const out = join(outDir, name);
  if (existsSync(out)) continue;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha ao baixar ${name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) throw new Error(`Arquivo suspeito/inválido: ${name} (${buf.length} bytes)`);
  writeFileSync(out, buf);
  downloaded++;
}
const stillMissing = Object.keys(manifest).filter((n) => !existsSync(join(outDir, n)));
if (stillMissing.length) {
  console.error('apply-jv12: arquivos ausentes:', stillMissing.join(', '));
  process.exit(1);
}
console.log(`apply-jv12: fotos ok (${downloaded} baixadas, ${Object.keys(manifest).length} no total)`);
