// Guia TrancosoBA — acesso aos artigos (dados gerados por scripts/generate-guia.mjs
// a partir de src/content/guia/*.md; ver src/data/guia.generated.ts).
import { GUIA_ARTICLES, type GuiaArticleData } from './guia.generated';

export type GuiaArticle = GuiaArticleData;

/** Categorias editoriais oficiais do Guia (mesma lista de scripts/generate-guia.mjs). */
export const GUIA_CATEGORIES = [
  'Onde ficar', 'Praias', 'Gastronomia', 'Hotéis e pousadas', 'Planejamento',
  'Experiências', 'Casamentos', 'Réveillon', 'Condomínios e regiões', 'Destinos próximos',
] as const;

/** Todos os artigos, mais recentes primeiro. */
export const guiaArticles: GuiaArticle[] = GUIA_ARTICLES;

export function guiaBySlug(slug: string): GuiaArticle | undefined {
  return GUIA_ARTICLES.find((a) => a.slug === slug);
}

/** Destaques (featured: true); se nenhum marcado, os 3 mais recentes. */
export function guiaFeatured(): GuiaArticle[] {
  const f = GUIA_ARTICLES.filter((a) => a.featured);
  return (f.length ? f : GUIA_ARTICLES).slice(0, 3);
}

/** Artigos relacionados: mesma categoria primeiro, depois os mais recentes. */
export function guiaRelated(article: GuiaArticle, count = 3): GuiaArticle[] {
  const others = GUIA_ARTICLES.filter((a) => a.slug !== article.slug);
  const sameCat = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...sameCat, ...rest].slice(0, count);
}

/** Categorias que têm pelo menos um artigo (para os filtros da página /guia). */
export function guiaUsedCategories(): string[] {
  const used = new Set(GUIA_ARTICLES.map((a) => a.category));
  return GUIA_CATEGORIES.filter((c) => used.has(c));
}

/** dd/mm/aaaa a partir de ISO aaaa-mm-dd (determinístico: igual no SSG e no cliente). */
export function guiaDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : iso;
}
