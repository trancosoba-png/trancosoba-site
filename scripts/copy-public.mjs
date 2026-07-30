// Copia public/ para dist/ com retry por arquivo (o Vite falha com EIO em cópia única).
import { cpSync, existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public');
const DST = join(root, 'dist');

function copyFile(src, dst) {
  mkdirSync(dirname(dst), { recursive: true });
  for (let a = 0; a < 8; a++) {
    try {
      copyFileSync(src, dst);
      return;
    } catch {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
    }
  }
  throw new Error(`falha ao copiar ${src}`);
}

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(SRC);
let ok = 0;
for (const f of files) {
  const rel = f.slice(SRC.length);
  const dst = join(DST, rel);
  copyFile(f, dst);
  ok++;
}
console.log(`copy-public: ${ok} arquivos copiados para dist/`);
