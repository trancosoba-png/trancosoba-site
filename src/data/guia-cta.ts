// Guia TrancosoBA — CTA contextual dos artigos.
//
// MAPEAMENTO CENTRALIZADO: cada entrada liga um artigo a uma região/coleção
// do catálogo e define a mensagem de WhatsApp pré-preenchida que menciona o
// assunto que o leitor acabava de ler. Regra editorial: só criar entrada
// quando houver relação real entre o artigo e as casas — o CTA nunca deve
// parecer banner publicitário.
//
// Artigos sem entrada recebem o CTA final genérico (viagem para Trancoso),
// sem bloco no meio do texto.
import { WHATSAPP } from './contact';

export interface GuiaCtaRule {
  /** Trecho do título do CTA, com preposição: "nos Altos de Trancoso". */
  region: string;
  /** Destino do botão de casas (filtro do catálogo ou coleção). */
  housesHref: string;
  /** Mensagem contextual pré-preenchida no WhatsApp. */
  waMessage: string;
}

export const GUIA_CTA_RULES: Record<string, GuiaCtaRule> = {
  'altos-de-trancoso': {
    region: 'nos Altos de Trancoso',
    housesHref: '/casas?local=Cond. Altos de Trancoso',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa nos Altos de Trancoso.',
  },
  'condominio-jacaranda-trancoso': {
    region: 'no Condomínio Jacarandá',
    housesHref: '/casas?local=Cond. Jacarandá',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Condomínio Jacarandá.',
  },
  'condominio-coqueiral-trancoso': {
    region: 'no Condomínio Coqueiral',
    housesHref: '/casas?local=Cond. Coqueiral',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Condomínio Coqueiral.',
  },
  'bairro-colina-trancoso': {
    region: 'na Colina',
    housesHref: '/casas?local=Bairro da Colina',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Bairro da Colina, em Trancoso.',
  },
  'bairro-joao-vieira-trancoso': {
    region: 'em João Vieira',
    housesHref: '/casas?local=Bairro João Vieira',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa em João Vieira, Trancoso.',
  },
  'pedro-grande-trancoso': {
    region: 'no Pedro Grande',
    housesHref: '/casas?local=Cond. Pedro Grande',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Condomínio Pedro Grande.',
  },
  'estancias-fasano-trancoso': {
    region: 'nas Estâncias Fasano',
    housesHref: '/casas?local=Fasano',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa nas Estâncias Fasano.',
  },
  'fazenda-rio-da-barra-trancoso': {
    region: 'no Rio da Barra',
    housesHref: '/casas?local=Rio da Barra',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa na Fazenda Rio da Barra.',
  },
  'itapororoca-trancoso': {
    region: 'em Itapororoca',
    housesHref: '/casas?local=Praia de Itapororoca',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa em Itapororoca.',
  },
  'terravista-golf-trancoso': {
    region: 'no Terravista Golf',
    housesHref: '/casas?local=Terravista Golf',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Terravista Golf.',
  },
  'terravista-vilas-trancoso': {
    region: 'no Terravista Vilas',
    housesHref: '/casas?local=Terravista Vilas',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa no Terravista Vilas.',
  },
  'beach-clubs-e-barracas-de-praia-em-trancoso': {
    region: 'pé na areia em Trancoso',
    housesHref: '/casas/pe-na-areia',
    waMessage: 'Olá, vim pelo Guia TrancosoBA e estou procurando uma casa pé na areia em Trancoso.',
  },
  'praias-de-trancoso-a-caraiva': {
    region: 'perto das praias de Trancoso',
    housesHref: '/casas/pe-na-areia',
    waMessage: 'Olá, vim pelo Guia TrancosoBA (artigo sobre as praias) e estou procurando uma casa perto da praia em Trancoso.',
  },
  'onde-ficar-em-trancoso': {
    region: 'em Trancoso',
    housesHref: '/casas',
    waMessage: 'Olá, vim pelo Guia TrancosoBA (onde ficar) e estou procurando uma casa em Trancoso.',
  },
};

export interface GuiaCtaData {
  title: string;
  text: string;
  housesLabel: string;
  housesHref: string;
  whatsLabel: string;
  whatsHref: string;
}

/** CTA genérico (artigos sem região associada) — aparece só no final. */
export function guiaCtaGeneric(t: {
  ctaGenericTitle: string; ctaGenericText: string; ctaHousesAll: string; ctaWhats: string; ctaWaGeneric: string;
}): GuiaCtaData {
  return {
    title: t.ctaGenericTitle,
    text: t.ctaGenericText,
    housesLabel: t.ctaHousesAll,
    housesHref: '/casas',
    whatsLabel: t.ctaWhats,
    whatsHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.ctaWaGeneric)}`,
  };
}

/** CTA final de região (foco em WhatsApp — o botão de casas já aparece no meio e no bloco de casas). */
export function guiaCtaRegionFinal(slug: string, t: {
  ctaRegionFinalTitle: string; ctaRegionFinalText: string; ctaWhats: string;
}): GuiaCtaData | null {
  const rule = GUIA_CTA_RULES[slug];
  if (!rule) return null;
  return {
    title: t.ctaRegionFinalTitle,
    text: t.ctaRegionFinalText.replace('{regiao}', rule.region),
    housesLabel: '',
    housesHref: rule.housesHref,
    whatsLabel: t.ctaWhats,
    whatsHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(rule.waMessage)}`,
  };
}

/** CTA de região; null quando o artigo não tem associação editorial. */
export function guiaCtaRegion(slug: string, t: {
  ctaRegionTitle: string; ctaRegionText: string; ctaHousesRegion: string; ctaWhats: string;
}): GuiaCtaData | null {
  const rule = GUIA_CTA_RULES[slug];
  if (!rule) return null;
  return {
    title: t.ctaRegionTitle.replace('{regiao}', rule.region),
    text: t.ctaRegionText,
    housesLabel: t.ctaHousesRegion,
    housesHref: rule.housesHref,
    whatsLabel: t.ctaWhats,
    whatsHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(rule.waMessage)}`,
  };
}
