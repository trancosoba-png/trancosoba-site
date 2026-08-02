// Cadastro da Casa Coqueiral 5 (TBA-289).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/coqueiral5 — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-casadei (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'coqueiral5-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-coqueiral-5')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-coqueiral5: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(COQUEIRAL5, ');
  if (!src.includes('COQUEIRAL5,')) throw new Error('apply-coqueiral5: falha ao registrar COQUEIRAL5');
  writeFileSync(propsPath, src);
  console.log('apply-coqueiral5: imóvel Casa Coqueiral 5 cadastrado em properties.ts');
} else {
  console.log('apply-coqueiral5: imóvel já cadastrado, nada a fazer');
}
