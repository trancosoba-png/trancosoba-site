// Cadastro da Casa Sol - Itapororoca (TBA-283).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/casasol — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-casalua (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'casasol-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-sol')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-casasol: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  const alvos = [
    'PROPERTIES.unshift(CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(CASAJV12, IANDE,',
    'PROPERTIES.unshift(IANDE,',
  ];
  const alvo = alvos.find((a) => src.includes(a));
  if (!alvo) throw new Error('apply-casasol: lista PROPERTIES.unshift não reconhecida');
  src = src.replace(alvo, alvo.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(CASASOL, '));
  if (!src.includes('CASASOL,')) throw new Error('apply-casasol: falha ao registrar CASASOL');
  writeFileSync(propsPath, src);
  console.log('apply-casasol: imóvel Casa Sol cadastrado em properties.ts');
} else {
  console.log('apply-casasol: imóvel já cadastrado, nada a fazer');
}
