import { LOCATIONS } from './properties';

// Opções de exibição do filtro de localização (barra de pesquisa e página /casas).
// As variações cadastradas nos imóveis são unificadas nestes rótulos de exibição.
const GROUPS: [string, (l: string) => boolean][] = [
  ['Praia de Itapororoca', (l) => l.includes('itapororoca')],
  ['Terravista Boutique', (l) => l === 'terravista' || l.includes('terravista boutique')],
  ['Terravista Golf', (l) => l.includes('terravista golf')],
  ['Terravista Vilas', (l) => l.includes('terravista vilas')],
  ['Altos Segredos', (l) => l.includes('altos do segredo')],
  ['Bairro da Colina', (l) => l.includes('bairro colina')],
  ['Bairro João Vieira', (l) => l.includes('joão vieira')],
  ['Cond. Altos de Trancoso', (l) => l.includes('altos de trancoso')],
  ['Cond. Coqueiral', (l) => l.includes('condomínio coqueiral')],
  ['Cond. Jacarandá', (l) => l.includes('condomínio jacarandá')],
  ['Cond. Pedro Grande', (l) => l.includes('condomínio pedro grande')],
  ['Fasano', (l) => l.includes('fasano')],
];

// Lista oficial de opções do filtro, na forma exibida ao cliente.
const ALLOWED = new Set([
  'Altos Segredos',
  'Altos de Patimirim',
  'Bairro da Colina',
  'Bairro João Vieira',
  'Cond. Altos de Trancoso',
  'Cond. Coqueiral',
  'Cond. Jacarandá',
  'Cond. Pedro Grande',
  'Fasano',
  'Praia de Itapororoca',
  'Praia de Itaquena',
  'Praia do Rio Verde',
  'Praia dos Nativos',
  'Quadrado',
  'Rio da Barra',
  'Terravista Boutique',
  'Terravista Golf',
  'Terravista Vilas',
]);

export function canonicalLocation(loc: string): string {
  if (ALLOWED.has(loc)) return loc;
  const l = loc.toLowerCase();
  for (const [label, match] of GROUPS) if (match(l)) return label;
  return loc;
}

export const FILTER_LOCATIONS = [...new Set(LOCATIONS.map(canonicalLocation))]
  .filter((l) => ALLOWED.has(l))
  .sort((a, b) => a.localeCompare(b, 'pt'));
