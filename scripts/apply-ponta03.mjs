// Cadastro da Casa da Ponta 03 - Rio da Barra (TBA-291).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/ponta03 — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-noa (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'ponta03-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-da-ponta-03')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-ponta03: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(PONTA03, ');
  if (!src.includes('PONTA03,')) throw new Error('apply-ponta03: falha ao registrar PONTA03');
  writeFileSync(propsPath, src);
  console.log('apply-ponta03: imóvel Casa da Ponta 03 cadastrado em properties.ts');
} else {
  console.log('apply-ponta03: imóvel já cadastrado, nada a fazer');
}
