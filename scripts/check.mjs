// Validação pré-build: fotos existem, ids únicos, sitemap completo (npm run check)
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/data/properties.ts'), 'utf8');

let fail = 0;

// (b) ids duplicados
const ids = [...src.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((m) => m[1]);
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) {
  console.error(`ERRO: ids duplicados: ${[...new Set(dup)].join(', ')}`);
  fail = 1;
}

// (a) fotos referenciadas existem em public/
const photos = [...src.matchAll(/'(\/img\/[^']+\.(?:jpg|jpeg|png|webp))'/g)].map((m) => m[1]);
const missing = [...new Set(photos.filter((p) => !existsSync(join(root, 'public', p))))];
if (missing.length) {
  console.error(`ERRO: ${missing.length} foto(s) referenciada(s) não existe(m):`);
  missing.forEach((p) => console.error(`  - ${p}`));
  fail = 1;
}

// (c) sitemap cobre todas as casas
const sitemapPath = join(root, 'public/sitemap.xml');
if (!existsSync(sitemapPath)) {
  console.error('ERRO: public/sitemap.xml não existe (rode npm run prebuild)');
  fail = 1;
} else {
  const sm = readFileSync(sitemapPath, 'utf8');
  const absent = ids.filter((id) => !sm.includes(`/imovel/${id}<`));
  if (absent.length) {
    console.error(`ERRO: sitemap desatualizado, faltam ${absent.length} casa(s): ${absent.join(', ')}`);
    fail = 1;
  }
}

if (fail) process.exit(1);
console.log(`OK: ${ids.length} imóveis, ${new Set(photos).size} fotos verificadas, sitemap completo.`);
