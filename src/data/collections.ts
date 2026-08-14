import { PROPERTIES, type Property } from './properties';

/**
 * Coleções curadas exibidas na Home e no topo de Nossas Casas.
 * Cada coleção é um recorte editorial do portfólio (não edita os imóveis).
 */
export interface Collection {
  id: string;
  title: { pt: string; en: string };
  sub: { pt: string; en: string };
  /** Capa editorial fixa da coleção (foto real do portfólio que representa a categoria). */
  cover: string;
  match: (p: Property) => boolean;
}

const loc = (p: Property) => p.location.toLowerCase();

export const COLLECTIONS: Collection[] = [
  {
    id: 'pe-na-areia',
    title: { pt: 'Pé na Areia', en: 'Beachfront' },
    sub: { pt: 'Casas com a areia aos pés', en: 'Houses right on the sand' },
    cover: '/img/sublime/04.webp',
    match: (p) => Boolean(p.features?.includes('pe-na-areia')),
  },
  {
    id: 'vista-mar',
    title: { pt: 'Vista Mar', en: 'Sea View' },
    sub: { pt: 'O oceano como horizonte', en: 'The ocean on the horizon' },
    cover: '/img/helena/03.webp',
    match: (p) => Boolean(p.features?.includes('vista-mar')),
  },
  {
    id: 'quadrado',
    title: { pt: 'Perto do Quadrado', en: 'Near the Quadrado' },
    sub: { pt: 'A poucos passos do coração de Trancoso', en: 'Steps from the heart of Trancoso' },
    cover: '/img/tempo07/01.jpg',
    match: (p) => loc(p).includes('quadrado') || Boolean(p.features?.includes('quadrado')),
  },
  {
    id: 'terravista-golf',
    title: { pt: 'Terravista & Golf', en: 'Terravista & Golf' },
    sub: { pt: 'Campo de golfe, lagoas e mata atlântica', en: 'Golf course, lagoons and Atlantic forest' },
    cover: '/img/golf28/03.webp',
    match: (p) => loc(p).startsWith('terravista'),
  },
  {
    id: 'grandes-grupos',
    title: { pt: 'Grandes Grupos', en: 'Large Groups' },
    sub: { pt: 'Casas a partir de 12 hóspedes', en: 'Houses from 12 guests' },
    cover: '/img/sanmarco/01.jpg',
    match: (p) => p.guests >= 12,
  },
  {
    id: 'condominios',
    title: { pt: 'Condomínios Fechados', en: 'Gated Communities' },
    sub: { pt: 'Privacidade e segurança 24 horas', en: 'Privacy and 24-hour security' },
    cover: '/img/coqueiral23/01.jpg',
    match: (p) => Boolean(p.features?.includes('condominio')),
  },
];

export const collectionById = (id: string | null | undefined) =>
  COLLECTIONS.find((c) => c.id === id) ?? null;

export const collectionProperties = (c: Collection) => PROPERTIES.filter(c.match);

/** Capa da coleção: foto editorial definida na coleção (c.cover). */
export const collectionCover = (c: Collection) => c.cover;
