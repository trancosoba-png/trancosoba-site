// Gera páginas estáticas /imovel/{id}/index.html com meta tags Open Graph
// próprias de cada casa (para preview de link no WhatsApp/redes sociais).
// O visitante humano é redirecionado imediatamente para a rota da SPA.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SITE = process.env.SITE_URL || 'https://www.trancosoba.com';
const root = new URL('..', import.meta.url).pathname;
const src = readFileSync(join(root, 'src/data/properties.ts'), 'utf8');

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const re = /id: '([^']+)',[\s\S]*?name: \{ pt: '((?:[^'\\]|\\.)*)'[\s\S]*?location: '([^']+)',\s*suites: (\d+),\s*guests: (\d+)[\s\S]*?image: '([^']+)'/g;
let m, count = 0;
for (m of src.matchAll(re)) {
  const [, id, nameRaw, location, suites, guests, image] = m;
  const name = nameRaw.replace(/\\'/g, "'").replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
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

function unesc(s) { return s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\\\/g, '\\'); }
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
  const carnaval = unesc(get(/carnaval: \{ pt: '((?:[^'\\]|\\.)*)'/));
  const reveillon = unesc(get(/reveillon: \{ pt: '((?:[^'\\]|\\.)*)'/));
  const priceLowPt = unesc(get(/priceLow: \{ pt: '((?:[^'\\]|\\.)*)'/));
  const gallery = parseArray(/gallery: \[([^\]]*)\]/, b);
  const amenities = parseArray(/amenities: \{\s*pt: \[([^\]]*)\]/, b);
  const features = parseArray(/features: \[([^\]]*)\]/, b);
  props.push({ id, code, namePt, location, suites, guests, baths, image, pricePt, priceLowPt, carnaval, reveillon, descPt, gallery, amenities, features });
}

const template = readFileSync(join(root, 'dist/index.html'), 'utf8');
const assetRe = /<script type="module" crossorigin src="[^"]+"><\/script>|<link rel="stylesheet"[^>]+>/g;
const assets = (template.match(assetRe) || []).join('\n    ');

const ORG_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'TrancosoBA',
  url: 'https://www.trancosoba.com',
  logo: 'https://www.trancosoba.com/favicon.svg',
  description: 'Curadoria de casas de alto padrão em Trancoso, Bahia. Aluguel de temporada e venda, com concierge dedicado.',
  email: 'contato@trancosoba.com.br',
  telephone: '+55-73-99971-8799',
  address: { '@type': 'PostalAddress', addressLocality: 'Trancoso', addressRegion: 'BA', addressCountry: 'BR' },
  sameAs: ['https://instagram.com/trancosoba'],
});
// Preload da imagem hero correta de cada página (antes: sempre hero-fallback,
// que roubava banda do LCP real nas rotas internas). srcSet idêntico ao PageHero.
const heroPreload = (hero) => {
  const stem = hero.replace(/\.(jpe?g|webp)$/i, '');
  return `<link rel="preload" as="image" href="${stem}-800.webp" imagesrcset="${stem}-800.webp 800w, ${stem}-1600.webp 1600w" imagesizes="100vw" type="image/webp" />`;
};

function pageShell({ title, desc, url, img, extraHead = '', body = '', hero = '' }) {
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
    ${hero ? heroPreload(hero) : ''}
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
    <script type="application/ld+json">${ORG_LD}</script>
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
  const title = `${p.namePt} — ${p.location} | TrancosoBA`;
  const desc = `${p.namePt} (${p.code}): ${p.suites} suítes, até ${p.guests} hóspedes, em ${p.location}, Trancoso. ${p.pricePt}. ${p.descPt.split('\n')[0]}`;
  const priceNum = p.pricePt.replace(/\./g, '').match(/R\$\s*(\d+)/)?.[1];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: `${p.namePt} — ${p.location}`,
    identifier: p.code,
    description: p.descPt.split('\n')[0],
    url,
    image: p.gallery.slice(0, 6).map((g) => `${SITE}${g}`),
    address: { '@type': 'PostalAddress', addressLocality: 'Trancoso', addressRegion: 'BA', addressCountry: 'BR' },
    numberOfRooms: Number(p.suites),
    numberOfBathroomsTotal: Number(p.baths) || undefined,
    occupancy: { '@type': 'QuantitativeValue', maxValue: Number(p.guests) },
    amenityFeature: p.amenities.slice(0, 12).map((a) => ({ '@type': 'LocationFeatureSpecification', name: a })),
    ...(priceNum ? { offers: { '@type': 'Offer', price: Number(priceNum), priceCurrency: 'BRL', availability: 'https://schema.org/InStock' } } : {}),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Nossas Casas', item: `${SITE}/casas` },
      { '@type': 'ListItem', position: 3, name: p.namePt, item: url },
    ],
  };
  const photos = p.gallery.slice(0, 8).map((g) => `      <img src="${g}" alt="${esc(p.namePt)} — ${esc(p.location)}, Trancoso" loading="lazy" style="max-width:100%;" />`).join('\n');
  const amen = p.amenities.slice(0, 12).map((a) => `<li>${esc(a)}</li>`).join('');
  const paras = p.descPt.split('\n\n').map((t) => `<p>${esc(t)}</p>`).join('\n      ');
  const body = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/casas">TrancosoBA — Nossas Casas</a></p>
    <h1>${esc(p.namePt)} — ${esc(p.location)}</h1>
    <p><strong>${esc(p.location)}</strong> · ${p.code} · ${p.suites} suítes · até ${p.guests} hóspedes · ${p.baths} banheiros</p>
    <p><strong>Alta temporada: ${esc(p.pricePt)}</strong>${p.priceLowPt ? ` · Baixa temporada: ${esc(p.priceLowPt)}` : ''}</p>
    <p>Réveillon (pacote 10 diárias): ${esc(p.reveillon || 'Sob consulta')} · Carnaval (pacote 5 dias): ${esc(p.carnaval || 'Sob consulta')}</p>
    ${photos}
    ${paras}
    <h2>Facilidades</h2>
    <ul>${amen}</ul>
    <p>Reservas e disponibilidade: <a href="/imovel/${p.id}">TrancosoBA</a> — WhatsApp <a href="https://wa.me/5573999718799?text=${encodeURIComponent(`Olá! Tenho interesse em ${p.namePt} (${p.code}). Gostaria de saber a disponibilidade.`)}" target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a> · <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a></p>
  </main>`;
  const extraHead = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n    <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`;
  mkdirSync(join(root, 'dist/imovel', p.id), { recursive: true });
  writeFileSync(join(root, 'dist/imovel', p.id, 'index.html'), pageShell({ title, desc, url, img, extraHead, body, hero: p.image }));
  pre++;
}

// Páginas institucionais
const statics = [
  { path: '', title: 'TrancosoBA — Casas de alto padrão em Trancoso, Bahia', desc: `Aluguel de temporada e venda de casas de alto padrão em Trancoso, Bahia. ${props.length} casas curadas, concierge dedicado e atendimento de quem nasceu em Trancoso.`, body: `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>TrancosoBA — Casas extraordinárias em Trancoso</h1><p>Imobiliária boutique em Trancoso, Bahia. Portfólio com ${props.length} casas de alto padrão para aluguel de temporada e venda — pé na areia, vista mar, Quadrado, Altos de Trancoso, Itapororoca, Terravista e Fasano — com concierge, staff completo e atendimento via WhatsApp.</p><p><a href="/casas">Ver todas as casas</a> · <a href="/trancoso">Guia de Trancoso</a> · <a href="/servicos">Concierge</a> · <a href="/nos">Quem somos</a></p></main>` },
  { path: 'casas', title: 'Nossas Casas — Portfólio completo | TrancosoBA', desc: `Portfólio TrancosoBA: ${props.length} casas de alto padrão em Trancoso — Quadrado, Altos, Itapororoca, Terravista, Rio da Barra e mais. Aluguel de temporada e venda.`, body: `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Nossas Casas</h1><p>Um portfólio escolhido a dedo: ${props.length} casas em Trancoso, Bahia.</p><ul>${props.map((p) => `<li><a href="/imovel/${p.id}">${esc(p.namePt)} — ${esc(p.location)}</a></li>`).join('')}</ul></main>` },
  { path: 'trancoso', title: 'Guia de Trancoso: praias, Quadrado, gastronomia e como chegar | TrancosoBA', desc: 'Guia completo de Trancoso, Bahia: o Quadrado histórico, praias de Nativos, Coqueiros, Itapororoca e Espelho, gastronomia, cultura, melhor época e como chegar.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Guia de Trancoso</h1><p>Uma vila de pescadores que virou destino internacional sem perder a alma. Igreja branca do século XVI, casas coloridas, falésias cor de terra e um mar que muda de verde a cada hora do dia.</p><h2>O Quadrado</h2><p>O coração histórico de Trancoso: um gramado cercado de casinhas coloridas, restaurantes e lojas, com a Igreja de São João Batista ao fundo e vista para o mar.</p><h2>Praias</h2><p>Praia dos Nativos, Praia dos Coqueiros, Itapororoca, Rio da Barra, Praia do Espelho e Itaquena — cada uma com sua maré, sua luz e seu público.</p><h2>Gastronomia</h2><p>Da cozinha baiana de raiz aos restaurantes autorais do Quadrado, Trancoso é um dos polos gastronômicos mais celebrados do litoral brasileiro.</p><h2>Como chegar</h2><p>Aeroporto de Porto Seguro (BPS) a cerca de 1h30 de carro, incluindo a balsa, ou pouso direto no Aeroporto Terravista para aviação executiva.</p><p><a href="/casas">Casas em Trancoso — TrancosoBA</a></p></main>' },
  { path: 'servicos', title: 'Concierge TrancosoBA — serviços completos em Trancoso | TrancosoBA', desc: 'Concierge TrancosoBA: transfers, motorista particular, chef e cozinheira, compras, reservas, passeios de lancha, helicóptero, bem-estar e suporte completo durante a estadia.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Concierge TrancosoBA</h1><p>Um único time cuida de tudo: da chegada ao aeroporto ao último dia na casa.</p><ul><li>Transfer e transporte — recepção no aeroporto de Porto Seguro e traslado privativo</li><li>Motorista particular durante a estadia</li><li>Compras e abastecimento da casa antes da chegada</li><li>Chef e cozinheira na casa</li><li>Reservas em restaurantes e beach clubs</li><li>Passeios de lancha e experiências no mar</li><li>Helicóptero e aviação executiva (Aeroporto Terravista)</li><li>Bem-estar: yoga, massagens e personal</li><li>Equipe de casa: camareiras, cozinheira, jardineiro e piscineiro</li><li>Suporte completo durante toda a estadia</li></ul><p><a href="/contato">Falar com o concierge</a></p></main>' },
  { path: 'nos', title: 'Quem somos — Luciano e a TrancosoBA | TrancosoBA', desc: 'A TrancosoBA é uma imobiliária boutique fundada por Luciano, nativo de Trancoso, com mais de uma década no mercado de alto padrão. CRECI BA 37.447.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Quem somos — Luciano e a TrancosoBA</h1><p>A TrancosoBA nasceu do amor por esta vila: poucas casas, curadoria rigorosa e hospitalidade de verdade.</p><p>Luciano nasceu em Trancoso e acompanhou de perto a transformação da vila de pescadores em um dos destinos mais desejados do Brasil. Em 2012, transformou esse conhecimento em profissão, fundando a TrancosoBA para oferecer atendimento verdadeiramente personalizado no mercado imobiliário de alto padrão.</p><p>Ser nativo significa conhecer lugares que não aparecem nos mapas, entender cada condomínio, saber indicar a praia ideal para cada momento e estar presente para resolver qualquer necessidade durante a estadia.</p><p>TrancosoBA · CRECI BA 37.447 · CNPJ 68.351.727/0001-57 · Quadrado, Trancoso — Bahia · WhatsApp <a href="https://wa.me/5573999718799" target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a> · <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a></p></main>' },
  { path: 'contato', title: 'Contato | TrancosoBA', desc: 'Fale com a TrancosoBA: WhatsApp, e-mail e formulário. Resposta humana, sem atrito. Quadrado, Trancoso — Bahia.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Contato</h1><p>Fale com a TrancosoBA — resposta humana, sem atrito.</p><p>WhatsApp: <a href="https://wa.me/5573999718799?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20TrancosoBA." target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a><br />E-mail: <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a><br />Endereço: Quadrado, Trancoso — Bahia, Brasil<br />CNPJ 68.351.727/0001-57 · CRECI BA 37.447</p></main>' },
  { path: 'favoritos', title: 'Minhas Favoritas | TrancosoBA', desc: 'Sua seleção de casas favoritas em Trancoso — envie pelo WhatsApp e receba uma proposta personalizada.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Minhas Favoritas</h1><p>Sua seleção de casas em Trancoso.</p></main>' },
  { path: 'anuncie', title: 'Anuncie sua casa | TrancosoBA', desc: 'Proprietário em Trancoso? Anuncie sua casa com a TrancosoBA: curadoria, fotos profissionais, concierge e gestão completa da locação.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Anuncie sua casa</h1><p>Coloque sua casa no portfólio TrancosoBA: curadoria, fotos, tarifário e gestão completa.</p></main>' },
  { path: 'privacidade', title: 'Política de Privacidade | TrancosoBA', desc: 'Política de privacidade da TrancosoBA: como tratamos seus dados.', body: '<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;"><h1>Política de Privacidade</h1></main>' },
];
const HERO_BY_PATH = {
  '': '/img/hero-fallback.webp',
  casas: '/img/vilas75/01.webp',
  trancoso: '/img/lugares/trancoso-hero-v2.webp',
  servicos: '/img/servicos/10-suporte.webp',
  nos: '/img/ponta/01.webp',
  contato: '/img/hero.webp',
  favoritos: '/img/vilas75/01.webp',
  anuncie: '/img/hero.webp',
  privacidade: '/img/vilas75/01.webp',
};
for (const s of statics) {
  const url = `${SITE}/${s.path}`;
  const dir = s.path ? join(root, 'dist', s.path) : join(root, 'dist');
  if (s.path) mkdirSync(join(root, 'dist', s.path), { recursive: true });
  writeFileSync(join(dir, 'index.html'), pageShell({ title: s.title, desc: s.desc, url, img: DEFAULT_IMG, body: s.body, hero: HERO_BY_PATH[s.path] || '' }));
}

// ---------------------------------------------------------------------------
// PÁGINAS DE COLEÇÃO (/casas/<id>) — mesmas regras de src/data/collections.ts
// ---------------------------------------------------------------------------
const low = (s) => (s || '').toLowerCase();
const COLS = [
  { id: 'pe-na-areia', name: 'Pé na Areia', sub: 'Casas com a areia aos pés',
    seo: 'Casas pé na areia em Trancoso: saia da varanda direto para a praia. Nossa seleção inclui propriedades em Itapororoca, Rio da Barra, Praia do Espelho e outras praias do sul da Bahia, todas com concierge TrancosoBA.',
    match: (p) => p.features.includes('pe-na-areia') },
  { id: 'vista-mar', name: 'com Vista Mar', sub: 'O oceano como horizonte',
    seo: 'Casas com vista para o mar em Trancoso: varandas, piscinas e salas de estar de frente para o oceano, em condomínios como Terravista, Altos de Trancoso e Outeiro das Brisas.',
    match: (p) => p.features.includes('vista-mar') },
  { id: 'quadrado', name: 'Perto do Quadrado', sub: 'A poucos passos do coração de Trancoso',
    seo: 'Casas perto do Quadrado, o coração histórico de Trancoso: a poucos passos dos restaurantes, das lojas e da igreja de São João Batista, com a tranquilidade de ruas arborizadas.',
    match: (p) => low(p.location).includes('quadrado') || p.features.includes('quadrado') },
  { id: 'terravista-golf', name: 'no Terravista & Golf', sub: 'Campo de golfe, lagoas e mata atlântica',
    seo: 'Casas no condomínio Terravista, em Trancoso: campo de golfe premiado, aeroporto privativo, teatro, beach club e apoio de praia. Seleção de casas no Terravista Golf e no Terravista Vilas para temporada e venda.',
    match: (p) => low(p.location).startsWith('terravista') },
  { id: 'fasano', name: 'no Fasano', sub: 'Casas no condomínio Fasano',
    seo: 'Casas no condomínio Fasano em Trancoso: o padrão de hospitalidade Fasano em um dos condomínios mais exclusivos do Brasil, com praia praticamente privativa e serviços de alto padrão.',
    match: (p) => low(p.location).includes('fasano') },
  { id: 'grandes-grupos', name: 'para Grandes Grupos', sub: 'Casas a partir de 12 hóspedes',
    seo: 'Casas para grandes grupos em Trancoso: propriedades a partir de 12 hóspedes, ideais para famílias grandes, celebrações e retiros, com staff completo e áreas de convivência amplas.',
    match: (p) => Number(p.guests) >= 12 },
  { id: 'condominios', name: 'em Condomínios Fechados', sub: 'Privacidade e segurança 24 horas',
    seo: 'Casas em condomínios fechados em Trancoso: privacidade e segurança 24 horas no Terravista, Fasano, Altos de Trancoso, Itapororoca, Outeiro das Brisas e outros endereços exclusivos.',
    match: (p) => p.features.includes('condominio') },
];

let colCount = 0;
for (const c of COLS) {
  const list = props.filter(c.match);
  const url = `${SITE}/casas/${c.id}`;
  const title = `Casas ${c.name} em Trancoso | TrancosoBA`;
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Casas ${c.name} em Trancoso — TrancosoBA`,
    numberOfItems: list.length,
    itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.namePt, url: `${SITE}/imovel/${p.id}` })),
  };
  const items = list.map((p) => `<li><a href="/imovel/${p.id}">${esc(p.namePt)}</a> — ${esc(p.location)}, ${p.suites} suítes, até ${p.guests} hóspedes. ${esc(p.pricePt)}</li>`).join('\n      ');
  const body = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/casas">TrancosoBA — Nossas Casas</a></p>
    <h1>Casas ${esc(c.name)} em Trancoso</h1>
    <p>${esc(c.seo)}</p>
    <p>${list.length} ${list.length === 1 ? 'casa' : 'casas'} nesta seleção:</p>
    <ul>
      ${items}
    </ul>
    <p>Reservas: WhatsApp <a href="https://wa.me/5573999718799" target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a> · <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a></p>
  </main>`;
  const extraHead = `<script type="application/ld+json">${JSON.stringify(itemListLd)}</script>`;
  mkdirSync(join(root, 'dist/casas', c.id), { recursive: true });
  writeFileSync(join(root, 'dist/casas', c.id, 'index.html'), pageShell({ title, desc: c.seo, url, img: DEFAULT_IMG, extraHead, body }));
  colCount++;
}

// ---------------------------------------------------------------------------
// PÁGINAS SAZONAIS — Réveillon e Carnaval
// ---------------------------------------------------------------------------
function seasonalPage({ path, h1, intro, field, pacote }) {
  const com = props.filter((p) => p[field] && p[field] !== 'Sob consulta');
  const sem = props.filter((p) => !p[field] || p[field] === 'Sob consulta');
  const li = (arr, showPrice) => arr.map((p) => `<li><a href="/imovel/${p.id}">${esc(p.namePt)}</a> — ${esc(p.location)}, ${p.suites} suítes, até ${p.guests} hóspedes.${showPrice ? ` ${pacote}: <strong>${esc(p[field])}</strong>` : ''}</li>`).join('\n      ');
  const url = `${SITE}/${path}`;
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${h1} — TrancosoBA`,
    numberOfItems: com.length + sem.length,
    itemListElement: [...com, ...sem].map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.namePt, url: `${SITE}/imovel/${p.id}` })),
  };
  const body = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/casas">TrancosoBA — Nossas Casas</a></p>
    <h1>${esc(h1)}</h1>
    <p>${esc(intro)}</p>
    <p>Valores não incluem taxa de serviço de 10%. Datas exatas e disponibilidade sob consulta.</p>
    <h2>Casas com pacote publicado</h2>
    <ul>
      ${li(com, true)}
    </ul>
    <h2>Outras casas — valores sob consulta</h2>
    <ul>
      ${li(sem, false)}
    </ul>
    <p>Reservas: WhatsApp <a href="https://wa.me/5573999718799" target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a> · <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a></p>
  </main>`;
  mkdirSync(join(root, 'dist', path), { recursive: true });
  writeFileSync(join(root, 'dist', path, 'index.html'), pageShell({ title: `${h1} | TrancosoBA`, desc: intro, url, img: DEFAULT_IMG, extraHead: `<script type="application/ld+json">${JSON.stringify(itemListLd)}</script>`, body, hero: field === 'carnaval' ? '/img/helena/03.webp' : '/img/vilas75/01.webp' }));
}
seasonalPage({ path: 'reveillon-trancoso', h1: 'Réveillon em Trancoso', field: 'reveillon', pacote: 'Réveillon (pacote 10 diárias)',
  intro: 'Casas de alto padrão para o Réveillon em Trancoso: pacotes de 10 diárias com valores fechados publicados em cada imóvel, staff e concierge TrancosoBA.' });
seasonalPage({ path: 'carnaval-trancoso', h1: 'Carnaval em Trancoso', field: 'carnaval', pacote: 'Carnaval (pacote 5 dias)',
  intro: 'Casas de alto padrão para o Carnaval em Trancoso: pacotes de 5 dias com valores fechados publicados em cada imóvel, staff e concierge TrancosoBA.' });

// ---------------------------------------------------------------------------
// FAQ — página estática com FAQPage JSON-LD
// ---------------------------------------------------------------------------
const FAQS = [
  ['Como faço para reservar uma casa em Trancoso?', 'Todas as reservas começam com uma conversa pelo WhatsApp (+55 73 99971-8799) ou pelo formulário de contato. A TrancosoBA confirma disponibilidade, envia uma proposta personalizada e acompanha até a assinatura do contrato.'],
  ['Os preços incluem taxa de serviço?', 'Não. Os valores publicados não incluem a taxa de serviço de 10%.'],
  ['Como funciona o Réveillon em Trancoso?', 'O Réveillon é vendido em pacote de 10 diárias, com valor fechado por casa, publicado na página de cada imóvel. Datas e disponibilidade sob consulta.'],
  ['Como funciona o Carnaval em Trancoso?', 'O Carnaval é vendido em pacote de 5 dias, com valor fechado por casa. Datas e disponibilidade sob consulta.'],
  ['Qual é a diferença entre alta e baixa temporada?', 'Alta temporada: dezembro, janeiro, fevereiro, julho e feriados. Baixa temporada: março, abril, maio, junho, agosto, setembro, outubro e novembro.'],
  ['As casas têm staff incluído?', 'A maioria das casas inclui ao menos uma arrumadeira diária. A equipe exata de cada casa está descrita na página do imóvel. Serviços adicionais, como chef particular, podem ser contratados pelo concierge.'],
  ['Quais serviços de concierge a TrancosoBA oferece?', 'Transfer do aeroporto, motorista particular, compras e abastecimento da casa, chef e cozinheira, reservas em restaurantes e beach clubs, passeios de lancha, helicóptero, bem-estar e suporte completo durante a estadia.'],
  ['Existe número mínimo de diárias?', 'Sim, e varia por casa e período. Réveillon e Carnaval são sempre pacotes fechados (10 e 5 diárias).'],
  ['Quais são as condições de pagamento e cancelamento?', 'As condições de pagamento e a política de cancelamento são definidas em contrato para cada reserva e apresentadas na proposta.'],
  ['A TrancosoBA também vende imóveis?', 'Sim. Além do aluguel de temporada, há uma seleção de casas à venda em Trancoso e região, com preço de venda publicado na página de cada imóvel.'],
];
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
const faqBody = `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:24px;">
    <p><a href="/">TrancosoBA — Início</a></p>
    <h1>Perguntas Frequentes — Aluguel de casas em Trancoso</h1>
    ${FAQS.map(([q, a]) => `<h2>${esc(q)}</h2>\n    <p>${esc(a)}</p>`).join('\n    ')}
    <p>Dúvidas: WhatsApp <a href="https://wa.me/5573999718799" target="_blank" rel="noopener noreferrer">+55 73 99971-8799</a> · <a href="mailto:contato@trancosoba.com.br">contato@trancosoba.com.br</a></p>
  </main>`;
mkdirSync(join(root, 'dist/faq'), { recursive: true });
writeFileSync(join(root, 'dist/faq', 'index.html'), pageShell({
  title: 'Perguntas Frequentes — TrancosoBA',
  desc: 'Perguntas frequentes sobre aluguel de casas em Trancoso: taxa de serviço, Réveillon, Carnaval, staff, concierge e reservas.',
  url: `${SITE}/faq`, img: DEFAULT_IMG,
  extraHead: `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`,
  body: faqBody,
}));

console.log(`prerender extra: ${colCount} coleções + 2 sazonais + FAQ geradas`);

console.log(`prerender: ${pre} páginas de imóveis + ${statics.length} páginas estáticas geradas`);

// ---------------------------------------------------------------------------
// 404 personalizada — a Vercel serve dist/404.html para rotas desconhecidas
// ---------------------------------------------------------------------------
writeFileSync(join(root, 'dist', '404.html'), pageShell({
  title: 'Página não encontrada — TrancosoBA',
  desc: 'A página que você procurou não existe ou foi movida. Veja nossas casas em Trancoso.',
  url: `${SITE}/404`, img: DEFAULT_IMG,
  extraHead: '<meta name="robots" content="noindex" />',
  body: `<main style="font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:48px 24px;text-align:center;">
    <h1>Página não encontrada</h1>
    <p>A página que você procurou não existe ou foi movida.</p>
    <p><a href="/">Início</a> · <a href="/casas">Nossas Casas</a> · <a href="/contato">Contato</a></p>
  </main>`,
}));
console.log('404.html gerada');
