// Renderização BUILD-TIME do Markdown dos artigos do Guia.
//
// Por que existe: rodar react-markdown no navegador custava ~1–1,6 s de thread
// principal por artigo (parse do Markdown na hidratação) e carregava um chunk
// de ~49 KB gzip em todas as páginas de artigo. Aqui o mesmo react-markdown,
// com o MESMO mapeamento de componentes, roda no prebuild (Node) e o HTML
// pronto vai embutido em src/data/guia.generated.ts. No navegador a página só
// injeta o HTML — zero parse, zero chunk extra, saída idêntica.
//
// ATENÇÃO: se mudar as classes aqui, mude também a casca estática de
// staticBodyFromMarkdown em generate-guia.mjs NÃO — aquela é só fallback para
// crawlers sem JS e usa marcação própria, mais simples. O que precisa ficar
// igual é o visual, então qualquer mudança de estilo do corpo do artigo é feita
// SOMENTE aqui.
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const e = React.createElement;
// react-markdown passa uma prop `node` (AST) aos componentes; não pode vazar
// para o DOM (viraria atributo node="[object Object]" no HTML).
const clean = (p) => { const { node, ...rest } = p || {}; return rest; };
const LINK_CLS = 'text-green-e underline decoration-gold/60 underline-offset-2 hover:text-gold transition-colors';

// Dimensões conhecidas das imagens (src → {w,h}), passadas por generate-guia.mjs.
// Emitir width/height no <img> reserva o espaço antes do carregamento e evita
// CLS (layout shift) nas imagens internas dos artigos.
let IMG_SIZES = {};
export function setImageSizes(map) { IMG_SIZES = map || {}; }

// Mesma tipografia/paleta que src/pages/GuiaArtigo.tsx usava em runtime.
// Links internos viram <a href="/..."> comum; a navegação SPA é restaurada no
// cliente por um interceptador de clique em GuiaArtigo.tsx (sem full reload).
const md = {
  h1: (p) => e('h1', { ...clean(p), className: 'font-serif-e text-4xl md:text-5xl text-green-e leading-tight' }),
  h2: (p) => e('h2', { ...clean(p), className: 'mt-12 mb-4 font-serif-e text-3xl text-green-e' }),
  h3: (p) => e('h3', { ...clean(p), className: 'mt-8 mb-3 font-serif-e text-2xl text-green-e' }),
  p: (p) => e('p', { ...clean(p), className: 'mb-5 text-ink/80 leading-relaxed' }),
  ul: (p) => e('ul', { ...clean(p), className: 'mb-5 list-disc pl-6 space-y-2 text-ink/80' }),
  ol: (p) => e('ol', { ...clean(p), className: 'mb-5 list-decimal pl-6 space-y-2 text-ink/80' }),
  li: (p) => e('li', { ...clean(p), className: 'leading-relaxed' }),
  strong: (p) => e('strong', { ...clean(p), className: 'font-medium text-ink' }),
  blockquote: (p) => e('blockquote', {
    ...clean(p),
    className: 'my-8 border-l-2 border-gold pl-5 font-serif-e italic text-xl md:text-2xl text-green-e/90 leading-relaxed',
  }),
  hr: () => e('hr', { className: 'my-10 border-green-e/15' }),
  // Imagens internas do artigo: quantidade e posição são definidas no próprio
  // markdown (![alt](caminho) entre as seções) — 0, 1, 2 ou 3, sem regra fixa
  // no componente. Sempre lazy (estão abaixo da dobra) e com a mesma
  // proteção de fotos do restante do site.
  img: ({ src, alt }) => {
    // srcSet responsivo quando existem variantes -400/-1200 ao lado da base
    // (padrão das imagens editoriais do guia). Só entra no HTML se a variante
    // realmente existir no mapa de tamanhos (ou seja, está em public/).
    const hasV = (s) => Object.prototype.hasOwnProperty.call(IMG_SIZES, s);
    const v400 = src.replace(/\.webp$/, '-400.webp');
    const v1200 = src.replace(/\.webp$/, '-1200.webp');
    const srcSet = hasV(v400) && hasV(v1200)
      ? `${v400} 400w, ${src} 800w, ${v1200} 1200w`
      : undefined;
    return e('div', { className: 'relative overflow-hidden my-8' },
      e('img', {
        src, alt: alt ?? '', loading: 'lazy', decoding: 'async', draggable: false,
        ...(srcSet ? { srcSet, sizes: '(min-width: 768px) 672px, 100vw' } : {}),
        ...(IMG_SIZES[src] ? { width: IMG_SIZES[src].w, height: IMG_SIZES[src].h } : {}),
        className: 'w-full object-cover',
      }),
      e('span', { className: 'photo-shield', 'aria-hidden': true }));
  },
  a: ({ href = '', children }) => {
    if (href.startsWith('/')) return e('a', { href, className: LINK_CLS }, children);
    return e('a', { href, target: '_blank', rel: 'noreferrer', className: LINK_CLS }, children);
  },
  table: (p) => e('div', { className: 'my-8 overflow-x-auto' },
    e('table', { ...clean(p), className: 'w-full text-sm text-ink/80' })),
  th: (p) => e('th', {
    ...clean(p),
    className: 'border-b border-green-e/25 py-2.5 pr-4 text-left text-[12px] tracking-[0.12em] uppercase text-green-e/70 font-medium',
  }),
  td: (p) => e('td', { ...clean(p), className: 'border-b border-green-e/10 py-2.5 pr-4 align-top' }),
};

/** Markdown → HTML estático (string), com os componentes/estilos do site. */
export function renderArticleHtml(markdown) {
  return renderToStaticMarkup(
    e(ReactMarkdown, { remarkPlugins: [remarkGfm], components: md }, markdown)
  );
}
