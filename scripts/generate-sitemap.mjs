// Gera public/sitemap.xml a partir de src/data/properties.ts (roda no prebuild)
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/data/properties.ts', import.meta.url), 'utf8');
const ids = [...src.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((m) => m[1]);
if (ids.length === 0) throw new Error('Nenhum id de imóvel encontrado');
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) throw new Error(`IDs duplicados: ${dup.join(', ')}`);

const BASE = 'https://www.trancosoba.com';
const TODAY = new Date().toISOString().slice(0, 10);
const staticPages = ['', 'casas', 'trancoso', 'servicos', 'nos', 'contato', 'favoritos', 'anuncie', 'privacidade', 'faq', 'reveillon-trancoso', 'carnaval-trancoso'];
const collections = ['pe-na-areia', 'vista-mar', 'quadrado', 'terravista-golf', 'fasano', 'grandes-grupos', 'condominios'];

const urls = [
  ...staticPages.map((p) => `  <url><loc>${BASE}/${p}</loc><lastmod>${TODAY}</lastmod></url>`),
  ...collections.map((c) => `  <url><loc>${BASE}/casas/${c}</loc><lastmod>${TODAY}</lastmod></url>`),
  ...ids.map((id) => `  <url><loc>${BASE}/imovel/${id}</loc><lastmod>${TODAY}</lastmod></url>`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml gerado com ${urls.length} URLs (${ids.length} imóveis, ${collections.length} coleções)`);
