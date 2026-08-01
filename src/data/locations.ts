import { LOCATIONS } from './properties';

// Unifica subdivisões em uma única localização principal para o filtro
// (ex.: "Praia de Itapororoca", "Aldeia Itapororoca", "Altos de Itapororoca"
// viram apenas "Itapororoca"; idem para as variações de Terravista).
export function canonicalLocation(loc: string): string {
  const l = loc.toLowerCase();
  if (l.includes('itapororoca')) return 'Itapororoca';
  if (l.includes('terravista')) return 'Terravista';
  return loc;
}

export const FILTER_LOCATIONS = [...new Set(LOCATIONS.map(canonicalLocation))]
  .sort((a, b) => a.localeCompare(b, 'pt'));
