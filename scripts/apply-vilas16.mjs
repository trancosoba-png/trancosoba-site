// Cadastro da Casa 16 - Vilas Altos de Trancoso (TBA-293).
// Idempotente: insere o imóvel em src/data/properties.ts (se ainda não estiver lá).
// As fotos estão versionadas no repositório em public/img/vilas16 — nenhum download
// externo é necessário. Roda no predev/prebuild, após apply-selva (ver package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const propsPath = join(root, 'src', 'data', 'properties.ts');
const snippetPath = join(root, 'scripts', 'vilas16-property.ts');

let src = readFileSync(propsPath, 'utf8');
if (!src.includes('vilas-altos-de-trancoso-casa-16')) {
  const snippet = readFileSync(snippetPath, 'utf8');
  if (!src.includes('PROPERTIES.unshift(')) throw new Error('apply-vilas16: PROPERTIES.unshift não encontrado');
  src = src.replace('PROPERTIES.unshift(', snippet + '\nPROPERTIES.unshift(');
  const alvos = [
    'PROPERTIES.unshift(SELVA, PONTA03, NOA, COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(PONTA03, NOA, COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(NOA, COQUEIRAL5, CASADEI, MUXARABI, CASILLA, AROEIRA, CASA11ALDEIA, CASASOL, CASALUA, CASAJV12, IANDE,',
    'PROPERTIES.unshift(IANDE,',
  ];
  const alvo = alvos.find((a) => src.includes(a));
  if (!alvo) throw new Error('apply-vilas16: lista PROPERTIES.unshift não reconhecida');
  src = src.replace(alvo, alvo.replace('PROPERTIES.unshift(', 'PROPERTIES.unshift(VILAS16, '));
  if (!src.includes('VILAS16,')) throw new Error('apply-vilas16: falha ao registrar VILAS16');
  writeFileSync(propsPath, src);
  console.log('apply-vilas16: imóvel Casa 16 cadastrado em properties.ts');
} else {
  console.log('apply-vilas16: imóvel já cadastrado, nada a fazer');
}
