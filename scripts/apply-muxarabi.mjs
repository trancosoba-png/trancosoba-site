// Cadastro da Casa Muxarabi - Altos de Trancoso (TBA-287).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/muxarabi — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-casilla (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'muxarabi-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-muxarabi-altos-de-trancoso')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-muxarabi: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(MUXARABI, ');
  if (!src.includes('MUXARABI,')) throw new Error('apply-muxarabi: falha ao registrar MUXARABI');
  writeFileSync(propsPath, src);
  console.log('apply-muxarabi: imóvel Casa Muxarabi cadastrado em properties.ts');
} else {
  console.log('apply-muxarabi: imóvel já cadastrado, nada a fazer');
}
