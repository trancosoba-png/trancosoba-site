import { PROPERTIES, type Property } from './properties';

/**
 * Coleções curadas exibidas na Home e no topo de Nossas Casas.
 * Cada coleção é um recorte editorial do portfólio (não edita os imóveis)
 * e tem URL própria (/casas/<id>) para SEO.
 */
export interface Collection {
  id: string;
  title: { pt: string; en: string };
  sub: { pt: string; en: string };
  /** Texto introdutório da página da coleção (SEO). */
  seo: { pt: string; en: string };
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
    seo: {
      pt: 'Casas pé na areia em Trancoso: saia da varanda direto para a praia. Nossa seleção inclui propriedades em Itapororoca, Rio da Barra, Praia do Espelho e outras praias do sul da Bahia, todas com concierge TrancosoBA.',
      en: 'Beachfront houses in Trancoso: step from your veranda straight onto the sand. Our selection includes properties in Itapororoca, Rio da Barra, Praia do Espelho and other beaches of southern Bahia, all with TrancosoBA concierge.',
    },
    cover: '/img/sublime/04.webp',
    match: (p) => Boolean(p.features?.includes('pe-na-areia')),
  },
  {
    id: 'vista-mar',
    title: { pt: 'Vista Mar', en: 'Sea View' },
    sub: { pt: 'O oceano como horizonte', en: 'The ocean on the horizon' },
    seo: {
      pt: 'Casas com vista para o mar em Trancoso: varandas, piscinas e salas de estar de frente para o oceano, em condomínios como Terravista, Altos de Trancoso e Outeiro das Brisas.',
      en: 'Sea view houses in Trancoso: verandas, pools and living rooms facing the ocean, in communities such as Terravista, Altos de Trancoso and Outeiro das Brisas.',
    },
    cover: '/img/helena/03.webp',
    match: (p) => Boolean(p.features?.includes('vista-mar')),
  },
  {
    id: 'quadrado',
    title: { pt: 'Perto do Quadrado', en: 'Near the Quadrado' },
    sub: { pt: 'A poucos passos do coração de Trancoso', en: 'Steps from the heart of Trancoso' },
    seo: {
      pt: 'Casas perto do Quadrado, o coração histórico de Trancoso: a poucos passos dos restaurantes, das lojas e da igreja de São João Batista, com a tranquilidade de ruas arborizadas.',
      en: 'Houses near the Quadrado, the historic heart of Trancoso: steps from restaurants, shops and the São João Batista church, on quiet tree-lined streets.',
    },
    cover: '/img/tempo07/01.jpg',
    match: (p) => loc(p).includes('quadrado') || Boolean(p.features?.includes('quadrado')),
  },
  {
    id: 'terravista-golf',
    title: { pt: 'Terravista & Golf', en: 'Terravista & Golf' },
    sub: { pt: 'Campo de golfe, lagoas e mata atlântica', en: 'Golf course, lagoons and Atlantic forest' },
    seo: {
      pt: 'Casas no condomínio Terravista, em Trancoso: campo de golfe premiado, aeroporto privativo, teatro, beach club e apoio de praia. Seleção de casas no Terravista Golf e no Terravista Vilas para temporada e venda.',
      en: 'Houses in the Terravista community, Trancoso: award-winning golf course, private airport, theatre, beach club and beach service. A selection of houses in Terravista Golf and Terravista Vilas for rent and sale.',
    },
    cover: '/img/golf28/03.webp',
    match: (p) => loc(p).startsWith('terravista'),
  },
  {
    id: 'fasano',
    title: { pt: 'Fasano', en: 'Fasano' },
    sub: { pt: 'Casas no condomínio Fasano', en: 'Houses in the Fasano community' },
    seo: {
      pt: 'Casas no condomínio Fasano em Trancoso: o padrão de hospitalidade Fasano em um dos condomínios mais exclusivos do Brasil, com praia praticamente privativa e serviços de alto padrão.',
      en: 'Houses in the Fasano community in Trancoso: Fasano hospitality standards in one of Brazil\'s most exclusive communities, with a nearly private beach and high-end services.',
    },
    cover: '/img/fasanoJ2/01.jpg',
    match: (p) => loc(p).includes('fasano'),
  },
  {
    id: 'grandes-grupos',
    title: { pt: 'Grandes Grupos', en: 'Large Groups' },
    sub: { pt: 'Casas a partir de 12 hóspedes', en: 'Houses from 12 guests' },
    seo: {
      pt: 'Casas para grandes grupos em Trancoso: propriedades a partir de 12 hóspedes, ideais para famílias grandes, celebrações e retiros, com staff completo e áreas de convivência amplas.',
      en: 'Houses for large groups in Trancoso: properties from 12 guests, ideal for big families, celebrations and retreats, with full staff and generous living areas.',
    },
    cover: '/img/sanmarco/01.jpg',
    match: (p) => p.guests >= 12,
  },
  {
    id: 'condominios',
    title: { pt: 'Condomínios Fechados', en: 'Gated Communities' },
    sub: { pt: 'Privacidade e segurança 24 horas', en: 'Privacy and 24-hour security' },
    seo: {
      pt: 'Casas em condomínios fechados em Trancoso: privacidade e segurança 24 horas no Terravista, Fasano, Altos de Trancoso, Itapororoca, Outeiro das Brisas e outros endereços exclusivos.',
      en: 'Houses in gated communities in Trancoso: privacy and 24-hour security in Terravista, Fasano, Altos de Trancoso, Itapororoca, Outeiro das Brisas and other exclusive addresses.',
    },
    cover: '/img/coqueiral23/01.jpg',
    match: (p) => Boolean(p.features?.includes('condominio')),
  },
];

export const collectionById = (id: string | null | undefined) =>
  COLLECTIONS.find((c) => c.id === id) ?? null;

export const collectionProperties = (c: Collection) => PROPERTIES.filter(c.match);

/** Capa da coleção: foto editorial definida na coleção (c.cover). */
export const collectionCover = (c: Collection) => c.cover;
