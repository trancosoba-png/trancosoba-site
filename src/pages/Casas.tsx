import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useSearchParams, useNavigationType } from 'react-router';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useLang, txt } from '../i18n';
import { PROPERTIES, dailyPrice, type Feature } from '../data/properties';
import { COLLECTIONS, collectionById } from '../data/collections';
import { FILTER_LOCATIONS, canonicalLocation } from '../data/locations';
import { PageHero } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';

type PurposeFilter = '' | 'aluguel' | 'venda';

export default function Casas() {
  const { t, lang } = useLang();
  const [params] = useSearchParams();
  const { colecao: routeCol } = useParams();
  const [purpose, setPurpose] = useState<PurposeFilter>((params.get('finalidade') as PurposeFilter) ?? '');
  const [location, setLocation] = useState(canonicalLocation(params.get('local') ?? ''));
  const [suites, setSuites] = useState(params.get('suites') ?? '');
  const [guests, setGuests] = useState(params.get('hospedes') ?? '');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [feats, setFeats] = useState<Feature[]>([]);
  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  // Coleção ativa vem da URL (/casas/:colecao ou ?colecao=) — URLs reais para SEO
  const colId = routeCol ?? params.get('colecao') ?? '';
  const activeCollection = collectionById(colId);

  const toggleFeat = (f: Feature) => setFeats((fs) => (fs.includes(f) ? fs.filter((x) => x !== f) : [...fs, f]));

  const results = useMemo(() => PROPERTIES.filter(p => {
    if (activeCollection && !activeCollection.match(p)) return false;
    if (purpose && !p.purpose.includes(purpose) && !(purpose === 'venda' && p.salePrice)) return false;
    if (location && canonicalLocation(p.location) !== location) return false;
    if (suites && p.suites < Number(suites)) return false;
    if (guests && p.guests < Number(guests)) return false;
    const dp = dailyPrice(p);
    if (priceMin && (dp === null || dp < Number(priceMin))) return false;
    if (priceMax && (dp === null || dp > Number(priceMax))) return false;
    if (feats.length && !feats.every((f) => p.features?.includes(f))) return false;
    if (query) {
      const q = query.toLowerCase();
      if (!p.name.pt.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q) && !p.code.toLowerCase().includes(q)) return false;
    }
    return true;
  }), [activeCollection, purpose, location, suites, guests, priceMin, priceMax, feats, query]);

  const clear = () => { setPurpose(''); setLocation(''); setSuites(''); setGuests(''); setPriceMin(''); setPriceMax(''); setFeats([]); setQuery(''); };

  const isFiltering = Boolean(colId || purpose || location || suites || guests || priceMin || priceMax || feats.length || query);
  const activeCount = (purpose ? 1 : 0) + (location ? 1 : 0) + (suites ? 1 : 0) + (guests ? 1 : 0)
    + (priceMin ? 1 : 0) + (priceMax ? 1 : 0) + feats.length;
  const colecao = results.filter(p => p.featured);
  const portfolio = results.filter(p => !p.featured);

  const renderCard = (p: (typeof results)[number]) => <PropertyCard key={p.id} p={p} showView />;

  // Grade progressiva (performance mobile): renderiza 24 cards e carrega +24 ao rolar,
  // em vez de montar os ~187 de uma vez.
  const PAGE = 24;
  const [visible, setVisible] = useState(PAGE);
  const skipReset = useRef(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fullList = isFiltering ? results : portfolio;
  const listKey = [colId, purpose, location, suites, guests, priceMin, priceMax, feats.join(','), query].join('|');
  useEffect(() => {
    if (skipReset.current) { skipReset.current = false; return; }
    setVisible(PAGE);
  }, [listKey]);

  // Voltar da página de imóvel (POP): restaura filtros, nº de cards visíveis e posição.
  // O estado é salvo continuamente em sessionStorage enquanto a lista é usada.
  const navType = useNavigationType();
  const didRestore = useRef(false);
  useEffect(() => {
    if (didRestore.current) return;
    didRestore.current = true;
    if (navType !== 'POP') return;
    try {
      const raw = sessionStorage.getItem('casas:state');
      if (!raw) return;
      const st = JSON.parse(raw);
      skipReset.current = true;
      if (st.purpose) setPurpose(st.purpose);
      if (st.location) setLocation(st.location);
      if (st.suites) setSuites(st.suites);
      if (st.guests) setGuests(st.guests);
      if (st.priceMin) setPriceMin(st.priceMin);
      if (st.priceMax) setPriceMax(st.priceMax);
      if (Array.isArray(st.feats) && st.feats.length) setFeats(st.feats);
      if (st.query) setQuery(st.query);
      if (st.visible) setVisible(st.visible);
    } catch { /* estado inválido: ignora */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Salva o estado da listagem para o retorno (POP)
  useEffect(() => {
    try {
      sessionStorage.setItem('casas:state', JSON.stringify({
        purpose, location, suites, guests, priceMin, priceMax, feats, query, visible,
      }));
    } catch { /* storage cheio/bloqueado: ignora */ }
  }, [purpose, location, suites, guests, priceMin, priceMax, feats, query, visible]);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) setVisible((v) => v + PAGE);
    }, { rootMargin: '800px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sel = "w-full bg-transparent border border-green-e/25 px-3 py-2.5 text-sm outline-none focus:border-gold";

  // Trava o scroll da página enquanto o painel de filtros está aberto
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [filtersOpen]);

  // Fecha o painel com a tecla Esc
  useEffect(() => {
    if (!filtersOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFiltersOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [filtersOpen]);

  const filtersBody = (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.hero.type}</span>
          <select value={purpose} onChange={e => setPurpose(e.target.value as PurposeFilter)} className={sel}>
            <option value="">{t.casas.any}</option>
            <option value="aluguel">{t.hero.rent}</option>
            <option value="venda">{t.hero.sale}</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.hero.location}</span>
          <select value={location} onChange={e => setLocation(e.target.value)} className={sel}>
            <option value="">{t.hero.all}</option>
            {FILTER_LOCATIONS.map(l => <option key={l}>{l}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.casas.suites}</span>
          <select value={suites} onChange={e => setSuites(e.target.value)} className={sel}>
            <option value="">{t.casas.any}</option>
            {[3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n}+</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.casas.guests}</span>
          <select value={guests} onChange={e => setGuests(e.target.value)} className={sel}>
            <option value="">{t.casas.any}</option>
            {[6, 8, 10, 12].map(n => <option key={n} value={n}>{n}+</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.casas.priceFrom}</span>
          <input value={priceMin} onChange={e => setPriceMin(e.target.value.replace(/\D/g, ''))} inputMode="numeric" placeholder="2.000" className={sel} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-green-e/60">{t.casas.priceTo}</span>
          <input value={priceMax} onChange={e => setPriceMax(e.target.value.replace(/\D/g, ''))} inputMode="numeric" placeholder="10.000" className={sel} />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6">
        {([
          ['pe-na-areia', t.casas.beachfront],
          ['vista-mar', t.casas.seaView],
          ['quadrado', t.casas.quadrado],
          ['condominio', t.casas.condominium],
          ['piscina', t.casas.pool],
        ] as [Feature, string][]).map(([f, label]) => (
          <label key={f} className="flex items-center gap-2 text-sm text-ink/75 cursor-pointer">
            <input type="checkbox" checked={feats.includes(f)} onChange={() => toggleFeat(f)} className="accent-[#22392f] w-4 h-4" />
            {label}
          </label>
        ))}
      </div>
    </>
  );

  return (
    <>
      <PageHero
        title={activeCollection ? txt(activeCollection.title, lang) : t.casas.title}
        sub={activeCollection ? txt(activeCollection.sub, lang) : t.casas.sub}
        image={activeCollection ? activeCollection.cover : '/img/vilas75/01.webp'} />
      {activeCollection && (
        <section className="pt-10 md:pt-14 -mb-6">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <p className="text-ink/70 text-base md:text-lg leading-relaxed">{txt(activeCollection.seo, lang)}</p>
          </div>
        </section>
      )}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Barra de busca + botão de filtros (painel recolhido por padrão) */}
          <div className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-e/40 pointer-events-none" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.casas.textSearch}
                aria-label={t.casas.textSearch}
                className="w-full bg-ivory-deep border border-green-e/15 pl-11 pr-4 py-3.5 text-sm outline-none focus:border-gold transition-colors" />
            </div>
            <button type="button" onClick={() => setFiltersOpen(true)}
              className="relative flex items-center gap-2.5 bg-ivory-deep border border-green-e/15 px-5 md:px-7 text-sm uppercase tracking-[0.14em] hover:border-gold transition-colors"
              aria-label={t.casas.filters}>
              <SlidersHorizontal size={16} className="text-gold" />
              <span className="hidden sm:inline">{t.casas.filters}</span>
              {activeCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[11px] w-5 h-5 rounded-full flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
          </div>

          {/* Coleções curadas — atalhos editoriais do portfólio */}
          <div className="flex gap-2.5 overflow-x-auto pb-2 mb-8 [scrollbar-width:none] -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
            {COLLECTIONS.map((c) => {
              const active = colId === c.id;
              return (
                <Link key={c.id} to={active ? '/casas' : `/casas/${c.id}`}
                  aria-pressed={active}
                  className={`shrink-0 px-4 py-2 text-[12px] uppercase tracking-[0.12em] border transition-colors whitespace-nowrap ${active ? 'bg-green-e text-ivory border-green-e' : 'bg-transparent text-green-e/70 border-green-e/25 hover:border-gold hover:text-green-e'}`}>
                  {txt(c.title, lang)}
                </Link>
              );
            })}
          </div>

          <p className="text-sm text-ink/55 mb-8" role="status">
            {results.length} {results.length === 1 ? t.casas.foundOne : t.casas.found}
          </p>

          {!isFiltering && colecao.length > 0 && (
            <>
              <h2 className="eyebrow text-gold mb-8">{t.casas.collection}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-16">
                {colecao.map(renderCard)}
              </div>
              <h2 className="eyebrow text-gold mb-8">{t.casas.portfolio}</h2>
            </>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {fullList.slice(0, visible).map(renderCard)}
          </div>
          {visible < fullList.length && <div ref={sentinelRef} className="h-1" aria-hidden="true" />}
          {lang !== 'pt' && <p className="mt-10 text-center text-xs text-ink/45 italic">{t.home.fxNote}</p>}
        </div>
      </section>

      {/* Painel de filtros — abre por cima da página (drawer no mobile, modal no desktop) */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={t.casas.filters}>
          <div className="absolute inset-0 bg-green-e/70 backdrop-blur-[2px]" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 md:inset-0 md:m-auto md:max-w-2xl md:h-fit md:max-h-[85vh] bg-ivory flex flex-col max-h-[88vh] shadow-2xl">
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-green-e/15">
              <span className="eyebrow text-green-e">{t.casas.filters}</span>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label={t.casas.closeFilters}
                className="p-2 -m-2 text-green-e/60 hover:text-green-e transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 md:px-8 py-6 overflow-y-auto flex-1">
              {filtersBody}
            </div>
            <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 border-t border-green-e/15 bg-ivory-deep/60">
              <button type="button" onClick={clear}
                className="text-xs tracking-[0.16em] uppercase text-gold hover:text-green-e transition-colors">
                {t.casas.clear}
              </button>
              <button type="button" onClick={() => setFiltersOpen(false)}
                className="bg-green-e text-ivory px-8 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-green-e/90 transition-colors">
                {t.casas.showResults} ({results.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
