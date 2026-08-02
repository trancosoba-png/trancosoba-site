// Cadastro da Casa Selva - Altos de Patimirim (TBA-292).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/selva — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-ponta03 (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'selva-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('casa-selva-altos-de-patimirim')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-selva: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  const alvos = [
    'PROPERTIES.unshift(PONTA03, NOA, COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(NOA, COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(IANDE,',
  ];
  const alvo = alvos.find((a) => src.includes(a));
  if (!alvo) throw new Error('apply-selva: lista PROPERTIES.unshift não reconhecida');
  src = src.replace(alvo, alvo.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(SELVA, '));
  if (!src.includes('SELVA,')) throw new Error('apply-selva: falha ao registrar SELVA');
  writeFileSync(propsPath, src);
  console.log('apply-selva: imóvel Casa Selva cadastrado em properties.ts');
} else {
  console.log('apply-selva: imóvel já cadastrado, nada a fazer');
}
