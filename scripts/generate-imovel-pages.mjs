// Gera páginas estáticas /imovel/{id}/index.html com meta tags Open Graph
// próprias de cada casa (para preview de link no WhatsApp/redes sociais).
// O visitante humano é redirecionado imediatamente para a rota da SPA.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://www.trancosoba.com';
const root = new URL('..', import.meta.url).pathname;
const src = readFileSync(join(root, 'src/data/properties.ts'), 'utf8');

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const re = /id: '([^']+)',[\s\S]*?name: \{ pt: '((?:[^'\\]|\\')*)'[\s\S]*?location: '([^']+)', suites: (\d+), guests: (\d+)[\s\S]*?image: '([^']+)'/g;
let m, count = 0;
for (m of src.matchAll(re)) {
  const [, id, nameRaw, location, suites, guests, image] = m;
  const name = nameRaw.replace(/\\'/g, "'");
  const title = `${name} — TrancosoBA`;
  const desc = `${name}: ${suites} suítes, até ${guests} hóspedes, em ${location}, Trancoso. Curadoria TrancosoBA.`;
  const url = `${SITE}/p/${id}`;
  const img = `${SITE}${image}`;
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${SITE}/imovel/${id}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="TrancosoBA" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${img}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${img}" />
<meta http-equiv="refresh" content="0; url=/imovel/${id}" />
</head>
<body><script>location.replace('/imovel/${id}');</script><p><a href="/imovel/${id}">${esc(title)}</a></p></body>
</html>
`;
  mkdirSync(join(root, 'dist/p', id), { recursive: true });
  writeFileSync(join(root, 'dist/p', id, 'index.html'), html);
  count++;
}
console.log(`generate-imovel-pages: ${count} páginas OG geradas em dist/p/`);
if (count === 0) process.exit(1);

// ---------------------------------------------------------------------------
// PRÉ-RENDER SEO: gera dist/imovel/{id}/index.html e páginas estáticas das
// rotas principais, cada uma com <title>, meta description, canonical,
// Open Graph, JSON-LD (VacationRental) e conteúdo HTML visível para o Google.
// O conteúdo dentro de #root é substituído pela SPA no carregamento.
// ---------------------------------------------------------------------------

function unesc(s) { return s.replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\\\/g, '\\'); }
function metaDesc(s) { return esc(unesc(s).replace(/\s+/g, ' ').trim().slice(0, 300)); }
function parseArray(re, block) {
  const m = block.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((x) => unesc(x[1]));
}

const blocks = src.split(/(?=^const \w+: Property = \{)/m).filter((b) => b.includes(': Property = {'));
const props = [];
for (const b of blocks) {
  const get = (re, i = 1) => (b.match(re)?.[i] ?? '');
  const id = get(/id: '([^']+)'/);
  if (!id) continue;
  const namePt = unesc(get(/name: \{ pt: '((?:[^'\\]|\\.)*)'/, 1));
  const location = get(/location: '((?:[^'\\]|\\.)*)'/);
  const suites = get(/suites: (\d+)/);
  const guests = get(/guests: (\d+)/);
  const baths = get(/baths: (\d+)/);
  const image = get(/image: '([^']+)'/);
  const pricePt = unesc(get(/price: \{ pt: '((?:[^'\\]|\\.)*)'/));
  const code = get(/code: '([^']+)'/);
  const descPt = unesc(get(/description: \{\s*pt: '((?:[^'\\]|\\.)*)'/, 1));
  const gallery = parseArray(/gallery: \[([^\]]*)\]/, b);
  const amenities = parseArray(/amenities: \{\s*pt: \[([^\]]*)\]/, b);
  props.push({ id, code, namePt, location, suites, guests, baths, image, pricePt, descPt, gallery, amenities });
}

const template = readFileSync(join(root, 'dist/index.html'), 'utf8');
const assetRe = /<script type="module" crossorigin src="[^"]+"><\/script>|<link rel="stylesheet"[^>]+>/g;
const assets = (template.match(assetRe) || []).join('\n    ');

function pageShell({ title, desc, url, img, extraHead = '', body = '' }) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${metaDesc(desc)}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="TrancosoBA" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${metaDesc(desc)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${metaDesc(desc)}" />
    <meta name="twitter:image" content="${img}" />
    ${extraHead}
    ${assets}
  </head>
  <body>
    <div id="root">${body}</div>
  </body>
</html>
`;
}

const DEFAULT_IMG = `${SITE}/img/hero.jpg`;

// Páginas das casas
let pre = 0;
for (const p of props) {
  const url = `${SITE}/imovel/${p.id}`;
  const img = `${SITE}${p.image}`;
  const title = `${p.namePt} — ${p.location}, Trancoso | TrancosoBA`;
  const desc = `${p.namePt} (${p.code}): ${p.suites} suítes, até ${p.guests} hóspedes, em ${p.location}, Trancoso. ${p.pricePt}. ${p.descPt.split('\n')[0]}`;
  const priceNum = p.pricePt.replace(/\./g, '').match(/R\$\s*(\d+)/)?.[1];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: p.namePt,
    identifier: p.code,
    description: p.descPt.split('\n')[0],
    url,
    image: p.gallery.slice(0, 6).map((g) => `${SITE}${g}`),
    address: { '@type': 'PostalAddress', addressLocality: 'Trancoso', addressRegion: 'BA', addressCountry: 'BR' },
    numberOfRooms: Number(p.suites),
    occupancy: { '@type': 'QuantitativeValue', maxValue: Number(p.guests) },
    ...(priceNum ? { offers: { '@type': 'Offer', price: Number(priceNum), priceCurrency: 'BRL', availability: 'https://schema.org/InStock' } } : {}),
  };
  const photos = p.gallery.slice(0, 8).map((g) => `      <img src="${g}" alt="${esc(p.namePt)} — ${esc(p.location)}, Trancoso" loading="lazy" style="max-width:100%;" />`).join('\n');
  const amen = p.amenities.slice(0, 12).map((a) => `<li>${esc(a)}</li>`).join('');
  const paras = p.descPt.split('\n\n').map((t) => `<p>${esc(t)}</p>`).join('\n      ');
  const body = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/casas">TrancosoBA — Nossas Casas</a></p>
    <h1>${esc(p.namePt)}</h1>
    <p><strong>${esc(p.location)}</strong> · ${p.code} · ${p.suites} suítes · até ${p.guests} hóspedes · ${p.baths} banheiros</p>
    <p><strong>${esc(p.pricePt)}</strong></p>
    ${photos}
    ${paras}
    <h2>Facilidades</h2>
    <ul>${amen}</ul>
  </main>`;
  const extraHead = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  mkdirSync(join(root, 'dist/imovel', p.id), { recursive: true });
  writeFileSync(join(root, 'dist/imovel', p.id, 'index.html'), pageShell({ title, desc, url, img, extraHead, body }));
  pre++;
}

// Páginas institucionais
const statics = [
  { path: '', title: 'TrancosoBA — Casas extraordinárias em Trancoso', desc: 'Casas de alto padrão para temporada em Trancoso, Bahia. Aluguel de vilas com concierge, staff e atendimento via WhatsApp.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>TrancosoBA — Casas extraordinárias em Trancoso</h1><p>Imobiliária boutique em Trancoso, Bahia. Portfólio com mais de 70 casas de alto padrão para temporada e venda, com concierge e staff completo.</p><p><a href="/casas">Ver todas as casas</a></p></main>' },
  { path: 'casas', title: 'Nossas Casas — Portfólio completo | TrancosoBA', desc: `Portfólio TrancosoBA: ${props.length} casas de alto padrão em Trancoso — Quadrado, Altos, Itapororoca, Terravista, Rio da Barra e mais. Aluguel de temporada e venda.`, body: `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Nossas Casas</h1><p>Um portfólio escolhido a dedo: ${props.length} casas em Trancoso, Bahia.</p><ul>${props.map((p) => `<li><a href="/imovel/${p.id}">${esc(p.namePt)} — ${esc(p.location)}</a></li>`).join('')}</ul></main>` },
  { path: 'trancoso', title: 'Trancoso — História, praias e gastronomia | TrancosoBA', desc: 'Tudo sobre Trancoso: o Quadrado, as praias de Nativos, Coqueiros e Itapororoca, gastronomia, cultura e como chegar.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Trancoso</h1><p>Uma vila de pescadores que virou destino internacional sem perder a alma. Igreja branca, casas coloridas, falésias cor de terra e um mar que muda de verde a cada hora do dia.</p></main>' },
  { path: 'servicos', title: 'Serviços de Concierge | TrancosoBA', desc: 'Concierge TrancosoBA: transfers, chef, reservas, passeios de lancha, helicóptero, bem-estar e suporte completo durante a estadia.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Serviços de Concierge</h1><p>Um único time cuida de tudo: da chegada ao aeroporto ao último dia na casa.</p></main>' },
  { path: 'nos', title: 'Nós — A TrancosoBA | TrancosoBA', desc: 'Uma imobiliária boutique com alma local: curadoria rigorosa, poucas casas e hospitalidade de verdade em Trancoso.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Nós — A TrancosoBA</h1><p>A TrancosoBA nasceu do amor por esta vila: poucas casas, curadoria rigorosa e hospitalidade de verdade.</p></main>' },
  { path: 'contato', title: 'Contato | TrancosoBA', desc: 'Fale com a TrancosoBA: WhatsApp, e-mail e formulário. Resposta humana, sem atrito. Quadrado, Trancoso — Bahia.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Contato</h1><p>Fale com a TrancosoBA pelo WhatsApp ou envie sua mensagem. Quadrado, Trancoso — Bahia, Brasil.</p></main>' },
  { path: 'favoritos', title: 'Minhas Favoritas | TrancosoBA', desc: 'Sua seleção de casas favoritas em Trancoso — envie pelo WhatsApp e receba uma proposta personalizada.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Minhas Favoritas</h1><p>Sua seleção de casas em Trancoso.</p></main>' },
  { path: 'anuncie', title: 'Anuncie sua casa | TrancosoBA', desc: 'Proprietário em Trancoso? Anuncie sua casa com a TrancosoBA: curadoria, fotos profissionais, concierge e gestão completa da locação.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Anuncie sua casa</h1><p>Coloque sua casa no portfólio TrancosoBA: curadoria, fotos, tarifário e gestão completa.</p></main>' },
  { path: 'privacidade', title: 'Política de Privacidade | TrancosoBA', desc: 'Política de privacidade da TrancosoBA: como tratamos seus dados.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Política de Privacidade</h1></main>' },
];
for (const s of statics) {
  const url = `${SITE}/${s.path}`;
  const dir = s.path ? join(root, 'dist', s.path) : join(root, 'dist');
  if (s.path) mkdirSync(join(root, 'dist', s.path), { recursive: true });
  writeFileSync(join(dir, 'index.html'), pageShell({ title: s.title, desc: s.desc, url, img: DEFAULT_IMG, body: s.body }));
}
console.log(`prerender: ${pre} páginas de imóveis + ${statics.length} páginas estáticas geradas`);
