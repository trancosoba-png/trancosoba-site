import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import type { PluginOption } from "vite"

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  // inspectAttr só em desenvolvimento local — import dinâmico com fallback
  // para o build/deploy não depender de pacote fora do npm público.
  // O nome vem de variável para o TypeScript não resolver o módulo em
  // tempo de compilação (ele não existe no npm público).
  let devPlugins: PluginOption[] = [];
  if (command === 'serve') {
    const inspectPkg = 'kimi-plugin-inspect-react';
    try {
      const mod: any = await import(/* @vite-ignore */ inspectPkg);
      devPlugins = [mod.inspectAttr()];
    } catch {
      devPlugins = [];
    }
  }

  return {
  base: '/',
  build: {
    copyPublicDir: false,
    // Chunk separado para as libs React: melhor cache e carregamento paralelo
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
        },
      },
    },
  },
  plugins: [...devPlugins, react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
