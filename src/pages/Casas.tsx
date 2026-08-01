import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useLang } from '../i18n';
import { PROPERTIES, dailyPrice, type Feature } from '../data/properties';
import { FILTER_LOCATIONS, canonicalLocation } from '../data/locations';
import { PageHero, Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';

type PurposeFilter = '' | 'aluguel' | 'venda';

export default function Casas() {
  const { t, lang } = useLang();
  const [params] = useSearchParams();
  const [purpose, setPurpose] = useState<PurposeFilter>((params.get('finalidade') as PurposeFilter) ?? '');
  const [location, setLocation] = useState(canonicalLocation(params.get('local') ?? ''));
  const [suites, setSuites] = useState(params.get('suites') ?? '');
  const [guests, setGuests] = useState(params.get('hospedes') ?? '');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [feats, setFeats] = useState<Feature[]>([]);
  const [query, setQuery] = useState('');

  const toggleFeat = (f: Feature) => setFeats((fs) => (fs.includes(f) ? fs.filter((x) => x !== f) : [...fs, f]));

  const results = useMemo(() => PROPERTIES.filter(p => {
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
      if (!p.name.pt.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q)) return false;
    }
    return true;
  }), [purpose, location, suites, guests, priceMin, priceMax, feats, query]);

  const clear = () => { setPurpose(''); setLocation(''); setSuites(''); setGuests(''); setPriceMin(''); setPriceMax(''); setFeats([]); setQuery(''); };

  const isFiltering = Boolean(purpose || location || suites || guests || priceMin || priceMax || feats.length || query);
  const colecao = results.filter(p => p.featured);
  const portfolio = results.filter(p => !p.featured);

  const renderCard = (p: (typeof results)[number]) => <PropertyCard key={p.id} p={p} showView />;

  const sel ="w-full bg-transparent border border-green-e/25 px-3 py-2.5 text-sm outline-none focus:border-gold";

  return (
    <>
      <PageHero title={t.casas.title} sub={t.casas.sub} image="/img/vilas75/01.jpg" />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Busca rápida + filtros */}
          <Reveal className="bg-ivory-deep p-6 md:p-8 mb-12">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.casas.textSearch}
              aria-label={t.casas.textSearch}
              className="w-full bg-transparent border border-green-e/25 px-4 py-3 mb-5 text-sm outline-none focus:border-gold transition-colors" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
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
            <div className="flex flex-wrap items-center gap-5 mt-5">
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
              <button onClick={clear} className="text-xs tracking-[0.16em] uppercase text-gold hover:text-green-e transition-colors ml-auto">
                {t.casas.clear}
              </button>
            </div>
          </Reveal>

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
            {(isFiltering ? results : portfolio).map(renderCard)}
          </div>
          {lang !== 'pt' && <p className="mt-10 text-center text-xs text-ink/45 italic">{t.home.fxNote}</p>}
        </div>
      </section>
    </>
  );
}
