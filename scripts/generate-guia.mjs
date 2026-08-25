// GUIA TRANCOSOBA — gera a infraestrutura do blog editorial a partir dos
// artigos em Markdown de src/content/guia/*.md.
//
// Dois modos (ver package.json):
//   node scripts/generate-guia.mjs content  → roda no prebuild, ANTES do tsc:
//       gera src/data/guia.generated.ts (metadados + markdown de cada artigo,
//       tipado e pronto para o React — sem import.meta.glob, compatível com o
//       esbuild do pré-render SSG).
//   node scripts/generate-guia.mjs pages    → roda depois do vite build:
//       gera dist/guia/index.html e dist/guia/{slug}/index.html com <title>,
//       meta description, canonical, Open Graph e JSON-LD próprios de cada
//       artigo. Os marcadores <!--SSR-START--> fazem o prerender-ssg.mjs
//       renderizar o conteúdo completo de React dentro dessas páginas —
//       o HTML servido ao Google já traz o artigo montado.
//
// Para adicionar um artigo novo basta criar src/content/guia/meu-artigo.md
// com os metadados no topo (ver exemplo-teste.md) — nenhum código muda.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { renderArticleHtml } from './guia-md.mjs';

const SITE = process.env.SITE_URL || 'https://www.trancosoba.com';
const root = new URL('..', import.meta.url).pathname;
const CONTENT_DIR = join(root, 'src/content/guia');

// Categorias editoriais do Guia. Artigo com categoria fora da lista gera aviso
// no build (não quebra) — a tag aparece como foi escrita no frontmatter.
export const CATEGORIES = [
  'Onde ficar', 'Praias', 'Gastronomia', 'Hotéis e pousadas', 'Planejamento',
  'Experiências', 'Casamentos', 'Réveillon', 'Condomínios e regiões', 'Destinos próximos',
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const metaDesc = (s) => esc(String(s).replace(/\s+/g, ' ').trim().slice(0, 300));

// ---------------------------------------------------------------------------
// Frontmatter: parser de subconjunto YAML — `chave: valor` por linha, valores
// entre aspas (simples/duplas) ou nus, booleanos true/false. Suficiente para o
// formato documentado em src/content/guia/exemplo-teste.md.
// ---------------------------------------------------------------------------
function parseFrontmatter(raw, file) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: frontmatter ausente (o arquivo deve começar com ---)`);
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const kv = line.match(/^([A-Za-z][A-Za-z0-9_]*):\s*(.*)$/);
    if (!kv) throw new Error(`${file}: linha de frontmatter inválida: "${line}"`);
    let v = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    else if (v === 'true') v = true;
    else if (v === 'false') v = false;
    meta[kv[1]] = v;
  }
  return { meta, markdown: m[2].trim() };
}

function loadArticles() {
  if (!existsSync(CONTENT_DIR)) return [];
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).sort();
  const articles = [];
  const slugs = new Set();
  for (const f of files) {
    const { meta, markdown } = parseFrontmatter(readFileSync(join(CONTENT_DIR, f), 'utf8'), f);
    const required = ['title', 'slug', 'description', 'category', 'publishedAt'];
    for (const k of required) if (!meta[k]) throw new Error(`${f}: metadado obrigatório ausente: ${k}`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(meta.slug)) throw new Error(`${f}: slug inválido "${meta.slug}" (use minúsculas, números e hífens)`);
    if (slugs.has(meta.slug)) throw new Error(`${f}: slug duplicado "${meta.slug}"`);
    slugs.add(meta.slug);
    if (!CATEGORIES.includes(meta.category)) console.warn(`generate-guia: AVISO — ${f}: categoria "${meta.category}" não está na lista oficial`);
    articles.push({
      title: String(meta.title),
      slug: String(meta.slug),
      description: String(meta.description),
      category: String(meta.category),
      image: meta.image ? String(meta.image) : '',
      publishedAt: String(meta.publishedAt),
      updatedAt: meta.updatedAt ? String(meta.updatedAt) : '',
      featured: meta.featured === true,
      seoTitle: meta.seoTitle ? String(meta.seoTitle) : '',
      seoDescription: meta.seoDescription ? String(meta.seoDescription) : '',
      // location: rótulo canônico de região/condomínio (ver src/data/locations.ts).
      // Quando presente, a página do artigo mostra ao final um bloco de casas
      // do catálogo filtradas por essa região — sem seleção manual por artigo.
      location: meta.location ? String(meta.location) : '',
      markdown,
    });
  }
  // Mais recentes primeiro
  articles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return articles;
}

// ---------------------------------------------------------------------------
// MODO content → src/data/guia.generated.ts
// ---------------------------------------------------------------------------
function genContent(articles) {
  const lit = (s) => JSON.stringify(s);
  // O Markdown é compilado para HTML aqui, no prebuild (ver scripts/guia-md.mjs):
  // o navegador recebe o HTML pronto e não precisa do react-markdown em runtime.
  const body = `// ARQUIVO GERADO por scripts/generate-guia.mjs (npm run prebuild).
// Não edite à mão — os artigos vivem em src/content/guia/*.md.
export interface GuiaArticleData {
  title: string; slug: string; description: string; category: string;
  image: string; publishedAt: string; updatedAt: string; featured: boolean;
  seoTitle: string; seoDescription: string; location: string;
  html: string; htmlRelated: string;
}
export const GUIA_ARTICLES: GuiaArticleData[] = [
${articles.map((a) => {
    // O bloco "Conteúdos relacionados" é separado do corpo: a página renderiza
    // o bloco de casas da região ENTRE o texto e os relacionados.
    const REL = '## Conteúdos relacionados';
    const idx = a.markdown.indexOf(REL);
    const bodyMd = idx >= 0 ? a.markdown.slice(0, idx).trim() : a.markdown;
    const relMd = idx >= 0 ? a.markdown.slice(idx).trim() : '';
    return `  { title: ${lit(a.title)}, slug: ${lit(a.slug)}, description: ${lit(a.description)}, category: ${lit(a.category)}, image: ${lit(a.image)}, publishedAt: ${lit(a.publishedAt)}, updatedAt: ${lit(a.updatedAt)}, featured: ${a.featured}, seoTitle: ${lit(a.seoTitle)}, seoDescription: ${lit(a.seoDescription)}, location: ${lit(a.location)}, html: ${lit(renderArticleHtml(bodyMd))}, htmlRelated: ${lit(relMd ? renderArticleHtml(relMd) : '')} },`;
  }).join('\n')}
];
`;
  writeFileSync(join(root, 'src/data/guia.generated.ts'), body);
  console.log(`generate-guia: ${articles.length} artigo(s) → src/data/guia.generated.ts`);
}

// ---------------------------------------------------------------------------
// MODO pages → dist/guia/... (mesma casca de generate-imovel-pages.mjs: os
// marcadores SSR fazem o prerender montar a página completa em React)
// ---------------------------------------------------------------------------
function pageShell({ title, desc, url, img, extraHead = '', body = '' }) {
  const template = readFileSync(join(root, 'dist/index.html'), 'utf8');
  const assets = (template.match(/<script type="module" crossorigin src="[^"]+"><\/script>|<link rel="stylesheet"[^>]+>/g) || []).join('\n    ');
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${metaDesc(desc)}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="TrancosoBA" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${metaDesc(desc)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${metaDesc(desc)}" />
    <meta name="twitter:image" content="${img}" />
    <script>
      // Mesma proteção de fotos do restante do site (ver generate-imovel-pages.mjs).
      document.addEventListener('contextmenu', function (e) {
        var t = e.target;
        if (t && t.closest && t.closest('img, video, .photo-shield')) e.preventDefault();
      }, true);
    </script>
    <style>
      html, body { margin: 0; background: #f7f2e9; }
      #root > .ssr-static { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); visibility: hidden; }
      .boot-splash { min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: Georgia, 'Times New Roman', serif; font-size: 2rem; letter-spacing: 0.02em; color: #182b23; }
      .boot-splash b { color: #b08d57; font-weight: normal; }
    </style>
    ${extraHead}
    ${assets}
  </head>
  <body>
    <div id="root"><!--SSR-START--><div class="ssr-static">${body}</div><div class="boot-splash" aria-hidden="true">Trancoso<b>BA</b></div><!--SSR-END--></div>
  </body>
</html>
`;
}

// Extrai do markdown um corpo estático simples para SEO (títulos, parágrafos,
// listas). O HTML final servido ao Google vem do pré-render React — este corpo
// só cobre crawlers sem JavaScript.
function staticBodyFromMarkdown(md, a) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inList = false;
  for (const line of lines) {
    const t = line.trim();
    const h = t.match(/^(#{1,3})\s+(.*)$/);
    const li = t.match(/^[-*]\s+(.*)$/) || t.match(/^\d+\.\s+(.*)$/);
    if (li) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${esc(li[1])}</li>`);
      continue;
    }
    if (inList) { out.push('</ul>'); inList = false; }
    if (h) out.push(`<h${h[1].length}>${esc(h[2])}</h${h[1].length}>`);
    else if (t && !t.startsWith('|') && !t.startsWith('![')) {
      out.push(`<p>${esc(t.replace(/^>\s?/, ''))}</p>`);
    }
  }
  if (inList) out.push('</ul>');
  return `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/guia">Guia TrancosoBA</a> · ${esc(a.category)}</p>
    ${out.join('\n    ')}
    <p><em>Publicado em ${a.publishedAt} — TrancosoBA, Quadrado, Trancoso, Porto Seguro — Bahia.</em></p>
  </main>`;
}

function genPages(articles) {
  const DEFAULT_IMG = `${SITE}/img/hero.jpg`;
  const breadcrumbLd = (a) => JSON.stringify({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Guia TrancosoBA', item: `${SITE}/guia` },
      { '@type': 'ListItem', position: 3, name: a.title, item: `${SITE}/guia/${a.slug}` },
    ],
  });
  const articleLd = (a) => JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Article',
    headline: a.title, description: a.description,
    image: a.image ? `${SITE}${a.image}` : DEFAULT_IMG,
    datePublished: a.publishedAt, dateModified: a.updatedAt || a.publishedAt,
    inLanguage: 'pt-BR',
    author: { '@type': 'Organization', name: 'TrancosoBA', url: SITE },
    publisher: { '@type': 'Organization', name: 'TrancosoBA', url: SITE, logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` } },
    mainEntityOfPage: `${SITE}/guia/${a.slug}`,
  });

  // Índice /guia
  const indexDesc = 'Guia TrancosoBA: onde ficar, praias, gastronomia, hotéis e pousadas, planejamento, experiências, casamentos, Réveillon e condomínios de Trancoso — por quem nasceu aqui.';
  const indexBody = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <h1>Guia TrancosoBA</h1>
    <p>${esc(indexDesc)}</p>
    <ul>${articles.map((a) => `<li><a href="/guia/${a.slug}">${esc(a.title)}</a> — ${esc(a.description)}</li>`).join('')}</ul>
  </main>`;
  mkdirSync(join(root, 'dist/guia'), { recursive: true });
  writeFileSync(join(root, 'dist/guia/index.html'), pageShell({ title: 'Guia TrancosoBA — dicas de quem nasceu em Trancoso', desc: indexDesc, url: `${SITE}/guia`, img: DEFAULT_IMG, body: indexBody }));

  // Artigos /guia/{slug}
  for (const a of articles) {
    const title = a.seoTitle || `${a.title} | Guia TrancosoBA`;
    const desc = a.seoDescription || a.description;
    const extraHead = `<script type="application/ld+json">${articleLd(a)}</script>\n    <script type="application/ld+json">${breadcrumbLd(a)}</script>`;
    mkdirSync(join(root, 'dist/guia', a.slug), { recursive: true });
    writeFileSync(join(root, 'dist/guia', a.slug, 'index.html'), pageShell({
      title, desc, url: `${SITE}/guia/${a.slug}`,
      img: a.image ? `${SITE}${a.image}` : DEFAULT_IMG,
      extraHead, body: staticBodyFromMarkdown(a.markdown, a),
    }));
  }
  console.log(`generate-guia: /guia + ${articles.length} artigo(s) gerados em dist/guia/`);
}

const mode = process.argv[2];
const articles = loadArticles();
if (mode === 'content') genContent(articles);
else if (mode === 'pages') genPages(articles);
else { console.error('uso: node scripts/generate-guia.mjs [content|pages]'); process.exit(1); }
