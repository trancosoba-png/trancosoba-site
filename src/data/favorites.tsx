import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

const FAV_KEY = 'trancosoba-favoritas';

interface FavCtx {
  favs: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

const Ctx = createContext<FavCtx>({ favs: [], toggle: () => {}, has: () => false });

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // SSG: começa sempre vazio para o primeiro render do cliente bater com o
  // HTML pré-renderizado; o localStorage é lido num effect logo após a
  // hidratação (corações preenchem um instante depois do carregamento).
  const [favs, setFavs] = useState<string[]>([]);
  const loaded = useRef(false);
  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]');
      if (Array.isArray(v)) setFavs(v.filter((x) => typeof x === 'string'));
    } catch { /* ignora */ }
    loaded.current = true;
  }, []);
  useEffect(() => {
    if (!loaded.current) return; // não grava antes de ler — preserva favoritos salvos
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch { /* ignora */ }
  }, [favs]);
  const toggle = useCallback((id: string) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])), []);
  const has = useCallback((id: string) => favs.includes(id), [favs]);
  const value = useMemo<FavCtx>(() => ({ favs, toggle, has }), [favs, toggle, has]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useFavorites = () => useContext(Ctx);
