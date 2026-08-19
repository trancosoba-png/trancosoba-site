// PRÉ-RENDER SSG: depois de generate-imovel-pages.mjs, renderiza cada rota do
// site com React no build (renderToString) e grava o HTML completo e estilizado
// dentro de #root — o visitante recebe a página montada, sem tela intermediária.
// O cliente hidrata esse HTML (main.tsx, hydrateRoot) em vez de remontar.
//
// Resiliência: este script só altera arquivos que contêm os marcadores
// <!--SSR-START-->...<!--SSR-END--> dentro de #root. Se ele falhar no build,
// as páginas mantêm o comportamento anterior (splash + conteúdo estático SEO).
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdtempSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');

// 1. Empacota o entry-server (React + todas as páginas, síncrono) com esbuild.
const tmp = join(mkdtempSync(join(tmpdir(), 'ssg-')), 'entry-server.mjs');
execFileSync(join(root, 'node_modules', '.bin', 'esbuild'), [
  join(root, 'src', 'entry-server.tsx'),
  '--bundle', '--format=esm', '--platform=node', '--jsx=automatic',
  // react-dom/server.node.js usa require() interno; o banner recria o
  // createRequire no bundle ESM para esses requires dinâmicos funcionarem.
  `--banner:js=import { createRequire as __ssgCreateRequire } from 'node:module'; const require = __ssgCreateRequire(import.meta.url);`,
  `--outfile=${tmp}`,
], { stdio: 'inherit' });
const { renderRoute } = await import(pathToFileURL(tmp).href);

// 2. Percorre o dist atrás de páginas com os marcadores SSR.
function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (name === 'index.html' || name === '404.html') yield p;
  }
}

function routeFor(file) {
  const rel = relative(dist, file).split(sep).join('/');
  if (rel === '404.html') return '/404';
  const dir = rel.slice(0, -'/index.html'.length);
  return dir === '' ? '/' : '/' + dir;
}

let done = 0;
const failures = [];
for (const file of walk(dist)) {
  let html = readFileSync(file, 'utf8');
  if (!html.includes('<!--SSR-START-->')) continue; // ex.: stubs OG de dist/p/
  const route = routeFor(file);

  // Página de imóvel: injeta a ficha completa para o HTML sair montado e a
  // hidratação não refazer o fetch (Imovel.tsx lê globalThis.__IMOVEL_DATA__).
  let dataScript = '';
  let imovelData;
  const imovelMatch = route.match(/^\/imovel\/([^/]+)$/);
  if (imovelMatch) {
    const jsonPath = join(root, 'public', 'data', 'imovel', `${imovelMatch[1]}.json`);
    if (!existsSync(jsonPath)) { failures.push(`${route}: ficha JSON ausente`); continue; }
    const raw = readFileSync(jsonPath, 'utf8').replace(/</g, '\\u003c');
    dataScript = `<script>window.__IMOVEL_DATA__=${raw};</script>`;
    imovelData = JSON.parse(readFileSync(jsonPath, 'utf8'));
  }

  let appHtml;
  try {
    appHtml = renderRoute(route, imovelData);
    // React 19 não lança erro de render dentro de <Suspense>: grava um marcador
    // e deixa o boundary para o cliente. Para o SSG isso é falha — a página
    // ficaria sem conteúdo pré-renderizado.
    if (appHtml.includes('Switched to client rendering')) throw new Error('erro de render dentro de <Suspense> (boundary caiu para o cliente)');
    if (appHtml.includes('min-h-screen pt-16') && imovelMatch) throw new Error('página de imóvel renderizou estado de carregamento — ficha não injetada?');
  } catch (e) {
    failures.push(`${route}: ${e.message}`);
    continue;
  }

  html = html.replace(
    /<div id="root"><!--SSR-START-->[\s\S]*?<!--SSR-END--><\/div>/,
    () => `<div id="root" data-ssg>${appHtml}</div>`,
  );
  html = html.replace('<html lang="pt-BR">', '<html lang="pt-BR" class="ssg">');
  if (dataScript) {
    // Antes do bundle module (defer): o global já existe quando o JS rodar.
    html = html.replace('<script type="module"', () => `${dataScript}<script type="module"`);
  }
  writeFileSync(file, html);
  done++;
}

console.log(`prerender-ssg: ${done} páginas pré-renderizadas com HTML completo`);
if (failures.length) {
  console.error('prerender-ssg: FALHAS em ' + failures.length + ' rota(s):');
  for (const f of failures.slice(0, 20)) console.error('  - ' + f);
  process.exit(1);
}
if (done === 0) { console.error('prerender-ssg: nenhuma página processada — marcadores ausentes?'); process.exit(1); }
