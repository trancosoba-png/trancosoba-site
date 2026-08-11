import { PROPERTIES, type Property } from './properties';

/**
 * Coleções curadas exibidas na Home e no topo de Nossas Casas.
 * Cada coleção é um recorte editorial do portfólio (não edita os imóveis).
 */
export interface Collection {
  id: string;
  title: { pt: string; en: string };
  sub: { pt: string; en: string };
  match: (p: Property) => boolean;
}

const loc = (p: Property) => p.location.toLowerCase();

export const COLLECTIONS: Collection[] = [
  {
    id: 'pe-na-areia',
    title: { pt: 'Pé na Areia', en: 'Beachfront' },
    sub: { pt: 'Casas com a areia aos pés', en: 'Houses right on the sand' },
    match: (p) => Boolean(p.features?.includes('pe-na-areia')),
  },
  {
    id: 'vista-mar',
    title: { pt: 'Vista Mar', en: 'Sea View' },
    sub: { pt: 'O oceano como horizonte', en: 'The ocean on the horizon' },
    match: (p) => Boolean(p.features?.includes('vista-mar')),
  },
  {
    id: 'quadrado',
    title: { pt: 'Perto do Quadrado', en: 'Near the Quadrado' },
    sub: { pt: 'A poucos passos do coração de Trancoso', en: 'Steps from the heart of Trancoso' },
    match: (p) => loc(p).includes('quadrado') || Boolean(p.features?.includes('quadrado')),
  },
  {
    id: 'terravista-golf',
    title: { pt: 'Terravista & Golf', en: 'Terravista & Golf' },
    sub: { pt: 'Campo de golfe, lagoas e mata atlântica', en: 'Golf course, lagoons and Atlantic forest' },
    match: (p) => loc(p).startsWith('terravista'),
  },
  {
    id: 'grandes-grupos',
    title: { pt: 'Grandes Grupos', en: 'Large Groups' },
    sub: { pt: 'Casas a partir de 12 hóspedes', en: 'Houses from 12 guests' },
    match: (p) => p.guests >= 12,
  },
  {
    id: 'condominios',
    title: { pt: 'Condomínios Fechados', en: 'Gated Communities' },
    sub: { pt: 'Privacidade e segurança 24 horas', en: 'Privacy and 24-hour security' },
    match: (p) => Boolean(p.features?.includes('condominio')),
  },
];

export const collectionById = (id: string | null | undefined) =>
  COLLECTIONS.find((c) => c.id === id) ?? null;

export const collectionProperties = (c: Collection) => PROPERTIES.filter(c.match);

/** Capa da coleção: primeiro imóvel em destaque que participa dela (ou o primeiro da lista). */
export const collectionCover = (c: Collection) => {
  const list = collectionProperties(c);
  return (list.find((p) => p.featured) ?? list[0])?.image ?? '/img/hero.jpg';
};
