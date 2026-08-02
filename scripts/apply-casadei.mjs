// Cadastro da Casa Casadei - Altos de Trancoso (TBA-288).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/casadei — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-muxarabi (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'casadei-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-casadei-altos-de-trancoso')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-casadei: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(CASADEI, ');
  if (!src.includes('CASADEI,')) throw new Error('apply-casadei: falha ao registrar CASADEI');
  writeFileSync(propsPath, src);
  console.log('apply-casadei: imóvel Casa Casadei cadastrado em properties.ts');
} else {
  console.log('apply-casadei: imóvel já cadastrado, nada a fazer');
}
