// Cadastro da Casilla del Mare - Altos de Trancoso (TBA-286).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/casilla — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-aroeira (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'casilla-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casilla-del-mare-altos-de-trancoso')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-casilla: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(CASILLA, ');
  if (!src.includes('CASILLA,')) throw new Error('apply-casilla: falha ao registrar CASILLA');
  writeFileSync(propsPath, src);
  console.log('apply-casilla: imóvel Casilla del Mare cadastrado em properties.ts');
} else {
  console.log('apply-casilla: imóvel já cadastrado, nada a fazer');
}
