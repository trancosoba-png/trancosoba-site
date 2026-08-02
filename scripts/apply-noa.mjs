// Cadastro da Casa Noa - Altos de Trancoso (TBA-290).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/noa — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-coqueiral5 (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'noa-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-noa-altos-de-trancoso')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-noa: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(NOA, ');
  if (!src.includes('NOA,')) throw new Error('apply-noa: falha ao registrar NOA');
  writeFileSync(propsPath, src);
  console.log('apply-noa: imóvel Casa Noa cadastrado em properties.ts');
} else {
  console.log('apply-noa: imóvel já cadastrado, nada a fazer');
}
