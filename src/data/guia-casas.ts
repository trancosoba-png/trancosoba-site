// Guia TrancosoBA — associação editorial entre artigos e casas do catálogo.
//
// MAPEAMENTO CENTRALIZADO: para exibir um bloco de casas ao final de um
// artigo, adicione UMA entrada aqui — nada no componente, nada no markdown.
//   kind: 'location'   → filtra o catálogo pelo rótulo canônico de
//                        src/data/locations.ts (ex.: 'Cond. Jacarandá').
//   kind: 'collection' → reutiliza uma coleção existente de
//                        src/data/collections.ts (ex.: 'pe-na-areia').
// Regra editorial: só criar entrada quando houver relação real entre o
// artigo e o grupo de imóveis. Sem entrada (ou sem casas correspondentes),
// o bloco simplesmente não aparece.
import { PROPERTIES_META, type PropertyMeta } from './meta';
import { canonicalLocation } from './locations';
import { collectionById, collectionProperties } from './collections';

export interface GuiaHousesRule {
  kind: 'location' | 'collection';
  key: string;
  /** Título discreto e contextual do bloco, por idioma. */
  title: { pt: string; en: string; es: string };
}

export const GUIA_HOUSES_RULES: Record<string, GuiaHousesRule> = {
  'itapororoca-trancoso': {
    kind: 'location', key: 'Praia de Itapororoca',
    title: { pt: 'Casas em Itapororoca', en: 'Houses in Itapororoca', es: 'Casas en Itapororoca' },
  },
  'terravista-golf-trancoso': {
    kind: 'location', key: 'Terravista Golf',
    title: { pt: 'Casas no Terravista Golf', en: 'Houses in Terravista Golf', es: 'Casas en Terravista Golf' },
  },
  'terravista-vilas-trancoso': {
    kind: 'location', key: 'Terravista Vilas',
    title: { pt: 'Casas no Terravista Vilas', en: 'Houses in Terravista Vilas', es: 'Casas en Terravista Vilas' },
  },
  'condominio-jacaranda-trancoso': {
    kind: 'location', key: 'Cond. Jacarandá',
    title: { pt: 'Casas no Cond. Jacarandá', en: 'Houses in Cond. Jacarandá', es: 'Casas en Cond. Jacarandá' },
  },
  'condominio-coqueiral-trancoso': {
    kind: 'location', key: 'Cond. Coqueiral',
    title: { pt: 'Casas no Cond. Coqueiral', en: 'Houses in Cond. Coqueiral', es: 'Casas en Cond. Coqueiral' },
  },
  'altos-de-trancoso': {
    kind: 'location', key: 'Cond. Altos de Trancoso',
    title: { pt: 'Casas nos Altos de Trancoso', en: 'Houses in Altos de Trancoso', es: 'Casas en Altos de Trancoso' },
  },
  'bairro-colina-trancoso': {
    kind: 'location', key: 'Bairro da Colina',
    title: { pt: 'Casas na Colina', en: 'Houses in Colina', es: 'Casas en Colina' },
  },
  'bairro-joao-vieira-trancoso': {
    kind: 'location', key: 'Bairro João Vieira',
    title: { pt: 'Casas em João Vieira', en: 'Houses in João Vieira', es: 'Casas en João Vieira' },
  },
  'pedro-grande-trancoso': {
    kind: 'location', key: 'Cond. Pedro Grande',
    title: { pt: 'Casas no Cond. Pedro Grande', en: 'Houses in Cond. Pedro Grande', es: 'Casas en Cond. Pedro Grande' },
  },
  'estancias-fasano-trancoso': {
    kind: 'location', key: 'Fasano',
    title: { pt: 'Casas nas Estâncias Fasano', en: 'Houses in Estâncias Fasano', es: 'Casas en Estâncias Fasano' },
  },
  'fazenda-rio-da-barra-trancoso': {
    kind: 'location', key: 'Rio da Barra',
    title: { pt: 'Casas no Rio da Barra', en: 'Houses in Rio da Barra', es: 'Casas en Rio da Barra' },
  },
  'beach-clubs-e-barracas-de-praia-em-trancoso': {
    kind: 'collection', key: 'pe-na-areia',
    title: { pt: 'Casas pé na areia', en: 'Beachfront houses', es: 'Casas frente al mar' },
  },
};

/** Quantidade máxima de imóveis exibidos no bloco (3 mantém a grade cheia). */
export const GUIA_HOUSES_MAX = 3;

/**
 * Resolve as casas de um artigo. Retorna null quando o artigo não tem
 * associação ou quando o filtro não encontra imóveis — o bloco não renderiza.
 */
export function guiaHouses(
  slug: string,
  lang: 'pt' | 'en' | 'es',
  max = GUIA_HOUSES_MAX,
): { title: string; houses: PropertyMeta[] } | null {
  const rule = GUIA_HOUSES_RULES[slug];
  if (!rule) return null;
  let list: PropertyMeta[];
  if (rule.kind === 'location') {
    list = PROPERTIES_META.filter((p) => canonicalLocation(p.location) === rule.key);
  } else {
    const c = collectionById(rule.key);
    if (!c) return null;
    list = collectionProperties(c);
  }
  const houses = [...list]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, max);
  if (!houses.length) return null;
  return { title: rule.title[lang] ?? rule.title.pt, houses };
}
