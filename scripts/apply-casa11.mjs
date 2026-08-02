// Cadastro da Casa 11 - Aldeia de Itapororoca (TBA-284).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/aldeia11 — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-casasol (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'casa11-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('aldeia-itapororoca-casa-11')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-casa11: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(CASA11ALDEIA, ');
  if (!src.includes('CASA11ALDEIA,')) throw new Error('apply-casa11: falha ao registrar CASA11ALDEIA');
  writeFileSync(propsPath, src);
  console.log('apply-casa11: imóvel Casa 11 Aldeia Itapororoca cadastrado em properties.ts');
} else {
  console.log('apply-casa11: imóvel já cadastrado, nada a fazer');
}
