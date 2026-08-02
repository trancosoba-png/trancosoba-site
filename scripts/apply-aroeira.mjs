// Cadastro da Casa Aroeira - Itapororoca (TBA-285).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/aroeira — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-casa11 (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'aroeira-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-aroeira-itapororoca')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-aroeira: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  src = src.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(AROEIRA, ');
  if (!src.includes('AROEIRA,')) throw new Error('apply-aroeira: falha ao registrar AROEIRA');
  writeFileSync(propsPath, src);
  console.log('apply-aroeira: imóvel Casa Aroeira cadastrado em properties.ts');
} else {
  console.log('apply-aroeira: imóvel já cadastrado, nada a fazer');
}
