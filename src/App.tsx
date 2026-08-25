import { lazy, Suspense, useEffect, type ComponentType } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router';
import { LangProvider } from './i18n';
import { PROPERTIES_META } from './data/meta';
import { collectionById } from './data/collections';
import { guiaBySlug } from './data/guia';
import { Header, Footer, WhatsAppFloat } from './components/Layout';
import { FavoritesProvider } from './data/favorites';
import { initAnalytics, hasConsent } from './data/analytics';
import CookieNotice from './components/CookieNotice';

// Code splitting: páginas secundárias carregam sob demanda
const Home = lazy(() => import('./pages/Home'));
const Casas = lazy(() => import('./pages/Casas'));
const Imovel = lazy(() => import('./pages/Imovel'));
const Trancoso = lazy(() => import('./pages/Trancoso'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Nos = lazy(() => import('./pages/Nos'));
const Contato = lazy(() => import('./pages/Contato'));
const Privacidade = lazy(() => import('./pages/Privacidade'));
const Favoritos = lazy(() => import('./pages/Favoritos'));
const Anuncie = lazy(() => import('./pages/Anuncie'));
const Faq = lazy(() => import('./pages/Faq'));
const Reveillon = lazy(() => import('./pages/Reveillon'));
const Carnaval = lazy(() => import('./pages/Carnaval'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Guia = lazy(() => import('./pages/Guia'));
const GuiaArtigo = lazy(() => import('./pages/GuiaArtigo'));

// Conjunto de páginas usado por <App/>. No navegador são os lazy() acima
// (code splitting por rota); no pré-render SSG (entry-server.tsx) o build
// injeta componentes síncronos, porque renderToString não resolve Suspense.
// Durante a hidratação o React 19 preserva o HTML do servidor dentro do
// <Suspense> até o chunk da rota chegar — sem flash nem mismatch.
export interface Pages {
  Home: ComponentType; Casas: ComponentType; Imovel: ComponentType;
  Trancoso: ComponentType; Servicos: ComponentType; Nos: ComponentType;
  Contato: ComponentType; Privacidade: ComponentType; Favoritos: ComponentType;
  Anuncie: ComponentType; Faq: ComponentType; Reveillon: ComponentType;
  Carnaval: ComponentType; NotFound: ComponentType;
  Guia: ComponentType; GuiaArtigo: ComponentType;
}
const lazyPages: Pages = { Home, Casas, Imovel, Trancoso, Servicos, Nos, Contato, Privacidade, Favoritos, Anuncie, Faq, Reveillon, Carnaval, NotFound, Guia, GuiaArtigo };

const SITE_URL = 'https://www.trancosoba.com';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function TitleManager() {
  const { pathname: rawPath } = useLocation();
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  useEffect(() => {
    const names: Record<string, string> = {
      '/': 'TrancosoBA — Casas extraordinárias em Trancoso',
      '/casas': 'Casas — TrancosoBA',
      '/trancoso': 'Trancoso — TrancosoBA',
      '/servicos': 'Concierge — TrancosoBA',
      '/nos': 'Quem Somos — TrancosoBA',
      '/contato': 'Contato — TrancosoBA',
      '/favoritos': 'Minhas Favoritas — TrancosoBA',
      '/anuncie': 'Anuncie sua casa — TrancosoBA',
      '/privacidade': 'Política de Privacidade — TrancosoBA',
      '/faq': 'Perguntas Frequentes — TrancosoBA',
      '/reveillon-trancoso': 'Réveillon em Trancoso — Pacotes 10 diárias | TrancosoBA',
      '/carnaval-trancoso': 'Carnaval em Trancoso — Pacotes 5 dias | TrancosoBA',
      '/guia': 'Guia TrancosoBA — dicas de quem nasceu em Trancoso',
    };
    const descs: Record<string, string> = {
      '/guia': 'Guia TrancosoBA: onde ficar, praias, gastronomia, hotéis e pousadas, planejamento, experiências, casamentos, Réveillon e condomínios de Trancoso.',
      '/faq': 'Perguntas frequentes sobre aluguel de casas em Trancoso: taxa de serviço, Réveillon, Carnaval, staff, concierge e reservas.',
      '/reveillon-trancoso': 'Casas de alto padrão para o Réveillon em Trancoso: pacotes de 10 diárias com valores publicados, staff e concierge TrancosoBA.',
      '/carnaval-trancoso': 'Casas de alto padrão para o Carnaval em Trancoso: pacotes de 5 dias com valores publicados, staff e concierge TrancosoBA.',
    };
    const defaultDesc = 'Curadoria de casas de alto padrão em Trancoso, Bahia. Aluguel de temporada e venda, com concierge dedicado.';
    let title = names[pathname];
    let desc = descs[pathname] ?? defaultDesc;
    let image = `${SITE_URL}/img/hero.jpg`;
    if (!title && pathname.startsWith('/imovel/')) {
      const p = PROPERTIES_META.find(x => x.id === pathname.split('/imovel/')[1]);
      if (p) {
        title = `${p.name.pt} — ${p.location} | TrancosoBA`;
        desc = `${p.name.pt}: ${p.suites} suítes, até ${p.guests} hóspedes, em ${p.location}, Trancoso. ${p.desc1pt}`;
        image = `${SITE_URL}${p.image}`;
      }
    }
    if (!title && pathname.startsWith('/guia/')) {
      const a = guiaBySlug(pathname.split('/guia/')[1]);
      if (a) {
        title = a.seoTitle || `${a.title} | Guia TrancosoBA`;
        desc = a.seoDescription || a.description;
        if (a.image) image = `${SITE_URL}${a.image}`;
      }
    }
    if (!title && pathname.startsWith('/casas/')) {
      const c = collectionById(pathname.split('/casas/')[1]);
      if (c) {
        title = `Casas ${c.seoName.pt} em Trancoso | TrancosoBA`;
        desc = c.seo.pt;
        image = `${SITE_URL}${c.cover}`;
      }
    }
    const finalTitle = title ?? 'TrancosoBA — Casas extraordinárias em Trancoso';
    const url = `${SITE_URL}${pathname}`;
    document.title = finalTitle;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', finalTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'TrancosoBA');
    setMeta('property', 'og:locale', 'pt_BR');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', finalTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', image);
    setCanonical(url);
  }, [pathname]);
  return null;
}

function ScrollTop() {
  const { pathname } = useLocation();
  const action = useNavigationType();
  useEffect(() => {
    // no voltar (POP) para listagens, a restauração fica a cargo do ScrollRestorer
    if (action === 'POP' && (pathname === '/' || pathname.startsWith('/casas'))) return;
    window.scrollTo(0, 0);
    if (pathname === '/' || pathname.startsWith('/casas')) {
      sessionStorage.removeItem('scroll:' + pathname);
    }
  }, [pathname, action]);
  return null;
}

function ScrollRestorer() {
  const { pathname } = useLocation();
  const action = useNavigationType();
  // salva posição ao sair das páginas de lista
  useEffect(() => {
    if (pathname !== '/' && !pathname.startsWith('/casas')) return;
    const key = 'scroll:' + pathname;
    const save = () => sessionStorage.setItem(key, String(window.scrollY));
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, [pathname]);
  // restaura somente no POP (voltar do navegador)
  useEffect(() => {
    if (pathname !== '/' && !pathname.startsWith('/casas')) return;
    if (action !== 'POP') return;
    const y = Number(sessionStorage.getItem('scroll:' + pathname) ?? 0);
    if (!y) return;
    const tryRestore = (attempts: number) => {
      if (document.documentElement.scrollHeight > y + window.innerHeight * 0.5 || attempts <= 0) {
        window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
      } else {
        setTimeout(() => tryRestore(attempts - 1), 150);
      }
    };
    setTimeout(() => tryRestore(20), 50);
  }, [pathname, action]);
  return null;
}

export default function App({ pages = lazyPages }: { pages?: Pages }) {
  const P = pages;
  useEffect(() => { if (hasConsent()) initAnalytics(); }, []);
  // Proteção global de fotos: bloqueia o menu de contexto (botão direito no desktop,
  // toque longo no Android) sobre qualquer imagem ou vídeo do site — inclusive onde o
  // .photo-shield cobre a foto e o alvo do clique é o span, não o <img>.
  // No iOS o bloqueio equivalente é o -webkit-touch-callout: none do CSS global.
  useEffect(() => {
    const block = (e: MouseEvent) => {
      if ((e.target as HTMLElement | null)?.closest?.('img, video, .photo-shield')) e.preventDefault();
    };
    document.addEventListener('contextmenu', block);
    return () => document.removeEventListener('contextmenu', block);
  }, []);
  return (
    <LangProvider>
      <FavoritesProvider>
      <ScrollTop />
      <ScrollRestorer />
      <TitleManager />
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-green-deep focus:text-ivory focus:px-4 focus:py-2 focus:text-sm">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/casas" element={<P.Casas />} />
          <Route path="/casas/:colecao" element={<P.Casas />} />
          <Route path="/imovel/:id" element={<P.Imovel />} />
          <Route path="/trancoso" element={<P.Trancoso />} />
          <Route path="/servicos" element={<P.Servicos />} />
          <Route path="/nos" element={<P.Nos />} />
          <Route path="/contato" element={<P.Contato />} />
          <Route path="/privacidade" element={<P.Privacidade />} />
          <Route path="/favoritos" element={<P.Favoritos />} />
          <Route path="/anuncie" element={<P.Anuncie />} />
          <Route path="/faq" element={<P.Faq />} />
          <Route path="/reveillon-trancoso" element={<P.Reveillon />} />
          <Route path="/carnaval-trancoso" element={<P.Carnaval />} />
          <Route path="/guia" element={<P.Guia />} />
          <Route path="/guia/:slug" element={<P.GuiaArtigo />} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <CookieNotice />
      <Footer />
      <WhatsAppFloat />
      </FavoritesProvider>
    </LangProvider>
  );
}
