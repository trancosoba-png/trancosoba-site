// Guia TrancosoBA — associação editorial entre artigos e casas do catálogo.
//
// MAPEAMENTO CENTRALIZADO: para exibir um bloco de casas ao final de um
// artigo, adicione UMA entrada aqui — nada no componente, nada no markdown.
//   kind: 'location'   → filtra o catálogo pelo rótulo canônico de
//                        src/data/locations.ts (ex.: 'Cond. Jacarandá').
//   kind: 'collection' → reutiliza uma coleção existente de
//                        src/data/collections.ts (ex.: 'pe-na-areia').
//   kind: 'ids'        → lista explícita de imóveis (quando o catálogo ainda
//                        não tem um rótulo de localização próprio).
// Regra editorial: só criar entrada quando houver relação real entre o
// artigo e o grupo de imóveis. Sem entrada (ou sem casas correspondentes),
// o bloco simplesmente não aparece.
import { PROPERTIES_META, type PropertyMeta } from './meta';
import { canonicalLocation } from './locations';
import { collectionById, collectionProperties } from './collections';

type L10n = { pt: string; en: string; es: string };

export interface GuiaHousesRule {
  kind: 'location' | 'collection' | 'ids';
  key: string;
  /** Título contextual do bloco, por idioma. */
  title: L10n;
  /** Rótulo do link "ver todas" (padrão: "…nesta região"). */
  viewAllLabel?: L10n;
  /** Em coleções que cobrem várias regiões, escolhe 1 imóvel por
   *  localização antes de completar a grade — os cards nunca parecem
   *  representar regiões diferentes sendo todos da mesma praia. */
  diverse?: boolean;
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
  // Ponta da Barra é um trecho da Praia do Rio da Barra. Os imóveis do
  // catálogo estão cadastrados como Rio da Barra — o título deixa a
  // correspondência explícita em vez de fingir um filtro que não existe.
  'ponta-da-barra-trancoso': {
    kind: 'location', key: 'Rio da Barra',
    title: {
      pt: 'Casas em Rio da Barra, na região da Ponta da Barra',
      en: 'Houses in Rio da Barra, in the Ponta da Barra area',
      es: 'Casas en Rio da Barra, en la zona de Ponta da Barra',
    },
  },
  // O catálogo ainda não tem rótulo "Cond. Tempo" — as casas do condomínio
  // estão cadastradas como "Quadrado". Bloco montado com a lista exata dos
  // 5 imóveis do Tempo, sem usar o filtro geral do Quadrado. Sem link
  // "ver todas": não existe listagem filtrada só do Tempo.
  'condominio-tempo-trancoso': {
    kind: 'ids',
    key: 'casa-tempo-03-quadrado,casa-tempo-04,casa-tempo-06,casa-tempo-07,casa-tempo-08',
    title: { pt: 'Casas no Condomínio Tempo', en: 'Houses in Condomínio Tempo', es: 'Casas en Condomínio Tempo' },
  },
  'beach-clubs-e-barracas-de-praia-em-trancoso': {
    kind: 'collection', key: 'pe-na-areia',
    title: { pt: 'Casas pé na areia', en: 'Beachfront houses', es: 'Casas frente al mar' },
    viewAllLabel: { pt: 'Ver todas as casas pé na areia', en: 'See all beachfront houses', es: 'Ver todas las casas frente al mar' },
  },
  // O artigo percorre todo o litoral até Caraíva: a coleção pé na areia
  // cobre esse mesmo litoral, e a seleção diversificada garante cards de
  // regiões diferentes (centro, Rio da Barra, Itapororoca…).
  'praias-de-trancoso-a-caraiva': {
    kind: 'collection', key: 'pe-na-areia', diverse: true,
    title: { pt: 'Casas pé na areia ao longo desse litoral', en: 'Beachfront houses along this coast', es: 'Casas frente al mar a lo largo de este litoral' },
    viewAllLabel: { pt: 'Ver todas as casas pé na areia', en: 'See all beachfront houses', es: 'Ver todas las casas frente al mar' },
  },
  // Artigo sobre pousadas — a abordagem é editorial (alternativa à pousada),
  // não "casas nesta região".
  'melhores-pousadas-no-quadrado-de-trancoso': {
    kind: 'collection', key: 'quadrado',
    title: {
      pt: 'Prefere uma casa perto do Quadrado?',
      en: 'Prefer a house near the Quadrado?',
      es: '¿Prefiere una casa cerca del Quadrado?',
    },
    viewAllLabel: { pt: 'Ver todas as casas perto do Quadrado', en: 'See all houses near the Quadrado', es: 'Ver todas las casas cerca del Quadrado' },
  },
  'casamento-em-trancoso-guia-completo': {
    kind: 'collection', key: 'grandes-grupos',
    title: {
      pt: 'Casas para hospedar família e convidados',
      en: 'Houses to host family and guests',
      es: 'Casas para alojar a la familia y los invitados',
    },
    viewAllLabel: { pt: 'Ver todas as casas para grupos', en: 'See all houses for groups', es: 'Ver todas las casas para grupos' },
  },
  // Sem sugerir disponibilidade para as datas do Réveillon — o título fala
  // do perfil (grupos) e a disponibilidade é sempre consulta direta.
  'reveillon-em-trancoso-guia-completo': {
    kind: 'collection', key: 'grandes-grupos',
    title: {
      pt: 'Casas para grupos em Trancoso (disponibilidade sob consulta)',
      en: 'Houses for groups in Trancoso (availability on request)',
      es: 'Casas para grupos en Trancoso (disponibilidad bajo consulta)',
    },
    viewAllLabel: { pt: 'Ver todas as casas para grupos', en: 'See all houses for groups', es: 'Ver todas las casas para grupos' },
  },
};

/** Quantidade máxima de imóveis exibidos no bloco (3 mantém a grade cheia). */
export const GUIA_HOUSES_MAX = 3;

/** Seleção diversificada: 1 imóvel por localização antes de completar. */
function diversify(list: PropertyMeta[], max: number): PropertyMeta[] {
  const sorted = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  const seen = new Set<string>();
  const picked: PropertyMeta[] = [];
  for (const p of sorted) {
    if (picked.length >= max) break;
    if (seen.has(p.location)) continue;
    seen.add(p.location);
    picked.push(p);
  }
  for (const p of sorted) {
    if (picked.length >= max) break;
    if (!picked.includes(p)) picked.push(p);
  }
  return picked;
}

/**
 * Resolve as casas de um artigo. Retorna null quando o artigo não tem
 * associação ou quando o filtro não encontra imóveis — o bloco não renderiza.
 */
export function guiaHouses(
  slug: string,
  lang: 'pt' | 'en' | 'es',
  max = GUIA_HOUSES_MAX,
): { title: string; houses: PropertyMeta[]; total: number; viewAllHref: string | null; viewAllLabel: string } | null {
  const rule = GUIA_HOUSES_RULES[slug];
  if (!rule) return null;
  let list: PropertyMeta[];
  let viewAllHref: string | null;
  if (rule.kind === 'location') {
    list = PROPERTIES_META.filter((p) => canonicalLocation(p.location) === rule.key);
    viewAllHref = `/casas?local=${encodeURIComponent(rule.key)}`;
  } else if (rule.kind === 'ids') {
    const ids = rule.key.split(',');
    list = ids.map((id) => PROPERTIES_META.find((p) => p.id === id)).filter((p): p is PropertyMeta => Boolean(p));
    viewAllHref = null; // sem listagem filtrada própria — não linkar o catálogo geral
  } else {
    const c = collectionById(rule.key);
    if (!c) return null;
    list = collectionProperties(c);
    viewAllHref = `/casas/${c.id}`;
  }
  const houses = rule.diverse
    ? diversify(list, max)
    : [...list].sort((a, b) => Number(b.featured) - Number(a.featured)).slice(0, max);
  if (!houses.length) return null;
  const viewAllLabel = rule.viewAllLabel?.[lang] ?? rule.viewAllLabel?.pt ?? '';
  return { title: rule.title[lang] ?? rule.title.pt, houses, total: list.length, viewAllHref, viewAllLabel };
}
