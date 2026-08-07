import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const FAV_KEY = 'trancosoba-favoritas';

interface FavCtx {
  favs: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

const Ctx = createContext<FavCtx>({ favs: [], toggle: () => {}, has: () => false });

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]'); } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch { /* ignora */ }
  }, [favs]);
  const toggle = useCallback((id: string) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])), []);
  const has = useCallback((id: string) => favs.includes(id), [favs]);
  const value = useMemo<FavCtx>(() => ({ favs, toggle, has }), [favs, toggle, has]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useFavorites = () => useContext(Ctx);
