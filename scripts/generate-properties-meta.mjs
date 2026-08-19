// Gera src/data/properties-meta.json: versão enxuta do catálogo (sem descrições,
// galerias, amenities e notas) para as páginas de listagem e o TitleManager.
// Roda no prebuild — nunca edite o JSON à mão.
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tmp = join(mkdtempSync(join(tmpdir(), 'props-')), 'properties.mjs');

// esbuild (dependência do Vite) compila o TS para um módulo importável
execFileSync(join(root, 'node_modules', '.bin', 'esbuild'), [
  join(root, 'src/data/properties.ts'),
  '--bundle', '--format=esm', '--platform=node', `--outfile=${tmp}`,
], { stdio: 'inherit' });

const { PROPERTIES } = await import(pathToFileURL(tmp).href);

const slim = PROPERTIES.map((p) => ({
  id: p.id,
  code: p.code,
  name: p.name,
  purpose: p.purpose,
  location: p.location,
  suites: p.suites,
  guests: p.guests,
  image: p.image,
  price: p.price,
  priceLow: p.priceLow ?? null,
  salePrice: p.salePrice ?? null,
  featured: p.featured ?? false,
  features: p.features ?? [],
  // primeira linha da descrição — usada no og:description das páginas de imóvel
  desc1pt: p.description.pt.split('\n')[0].slice(0, 140),
}));

const out = join(root, 'src/data/properties-meta.json');
writeFileSync(out, JSON.stringify(slim));
console.log(`properties-meta.json: ${slim.length} imóveis (${Math.round(JSON.stringify(slim).length / 1024)} KB)`);
