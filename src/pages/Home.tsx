import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { useLang, txt } from '../i18n';
import { PROPERTIES_META } from '../data/meta';
import { WHATSAPP } from '../data/contact';
import { COLLECTIONS, collectionCover, collectionProperties } from '../data/collections';
import { FILTER_LOCATIONS } from '../data/locations';
import { trackWhatsAppClick } from '../data/analytics';
import { Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';

function HeroSearch() {
  const { t, lang } = useLang();
  const nav = useNavigate();
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [suites, setSuites] = useState('');
  const [more, setMore] = useState(false);

  const field = "w-full flex items-center px-5 py-4 md:py-5 bg-black/45 backdrop-blur-sm border-b md:border-b-0 md:border-r border-ivory/15";
  const select = "w-full bg-transparent text-base md:text-lg text-ivory outline-none cursor-pointer appearance-none [&>option]:text-ink";
  const chevron = <ChevronDown size={18} className="text-ivory/60 shrink-0 pointer-events-none" />;

  return (
    <form
      className="relative w-full flex flex-col md:flex-row md:items-stretch shadow-2xl"
      onSubmit={e => { e.preventDefault(); nav(`/casas?finalidade=${purpose}&local=${encodeURIComponent(location)}&hospedes=${guests}&suites=${suites}`); }}
    >
      <label className={`${field} md:flex-1`}>
        <select value={purpose} onChange={e => setPurpose(e.target.value)} aria-label={t.hero.type} className={select}>
          <option value="">{lang === 'pt' ? 'Selecionar' : 'Select'}</option>
          <option value="aluguel">{t.hero.rent}</option>
          <option value="venda">{t.hero.sale}</option>
        </select>
        {chevron}
      </label>
      <label className={`${field} md:flex-1`}>
        <select value={location} onChange={e => setLocation(e.target.value)} aria-label={t.hero.location} className={select}>
          <option value="">{lang === 'pt' ? 'Localização' : 'Location'}</option>
          {FILTER_LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        {chevron}
      </label>

      <button type="button" onClick={() => setMore(!more)}
        className="w-full md:w-auto md:px-8 flex items-center justify-center gap-2 px-5 py-4 md:py-5 bg-black/45 backdrop-blur-sm border-b md:border-b-0 md:border-r border-ivory/15 text-base md:text-lg text-ivory/85 hover:text-ivory transition-colors whitespace-nowrap">
        {more ? (lang === 'pt' ? 'Menos filtros' : 'Fewer filters') : (lang === 'pt' ? 'Mais filtros…' : 'More filters…')}
        {chevron}
      </button>

      <button type="submit"
        className="w-full md:w-auto md:px-14 bg-[#2e6b4f] text-ivory font-serif-e text-lg md:text-xl tracking-wide hover:bg-gold transition-colors py-4 md:py-5 whitespace-nowrap">
        {lang === 'pt' ? 'Buscar' : 'Search'}
      </button>

      {more && (
        <div className="w-full md:absolute md:left-0 md:top-full flex flex-col md:flex-row md:mt-px shadow-2xl">
          <label className={`${field} md:flex-1`}>
            <select value={guests} onChange={e => setGuests(e.target.value)} aria-label={t.casas.guests} className={select}>
              <option value="">{lang === 'pt' ? 'Hóspedes' : 'Guests'}</option>
              {[6, 8, 10, 12].map(n => <option key={n} value={n}>{n}+</option>)}
            </select>
            {chevron}
          </label>
          <label className={`${field} md:flex-1 md:border-r-0`}>
            <select value={suites} onChange={e => setSuites(e.target.value)} aria-label={t.casas.suites} className={select}>
              <option value="">{lang === 'pt' ? 'Suítes' : 'Suites'}</option>
              {[3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n}+</option>)}
            </select>
            {chevron}
          </label>
        </div>
      )}
    </form>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const featured = useMemo(() => PROPERTIES_META.filter(p => p.featured).slice(0, 5), []);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] flex flex-col">
        <video autoPlay muted loop playsInline poster="/img/hero-fallback.webp" aria-label="Praias, falésias e natureza de Trancoso"
          className="absolute inset-0 w-full h-full object-cover">
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-green-deep/40 via-transparent to-green-deep/60" />
        <div className="relative flex-1" aria-hidden="true" />
        <div className="relative px-5 pb-8 md:pb-14 w-full max-w-6xl mx-auto">
          <HeroSearch />
        </div>
      </section>

      {/* 2. Apresentação */}
      <section className="bg-[#F6F2EA] pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            {/* H1 da página: é o título principal visível da home (a hero é vídeo,
                sem texto). Troca apenas de tag — classes idênticas, visual intacto. */}
            <h1 className="font-serif-e font-light italic text-[46px] md:text-[76px] leading-[1.08] tracking-[0.005em] text-[#4a3b2c]">
              <span className="block">{t.home.introTitleA}</span>
              <span className="block not-italic font-normal text-[26px] md:text-[40px] tracking-[0.08em] text-[#8a6f4d] mt-3 md:mt-4">{t.home.introTitleB}</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-8 mx-auto" />
            <p className="mt-6 font-sans font-light text-lg md:text-xl text-ink/65 leading-[1.75] tracking-[0.01em] max-w-2xl mx-auto">{t.home.introText}</p>
            <Link to="/nos" className="inline-flex items-center gap-2 mt-8 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              {t.home.introCta} <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2.5 Coleções curadas */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-12">
            <p className="eyebrow text-gold">{t.home.collectionsEyebrow}</p>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-4">{t.home.collectionsTitle}</h2>
            <p className="mt-3 text-ink/60 font-serif-e italic text-xl">{t.home.collectionsSub}</p>
          </Reveal>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
            {COLLECTIONS.map((c) => {
              const count = collectionProperties(c).length;
              return (
                <Link key={c.id} to={`/casas/${c.id}`}
                  className="group relative block overflow-hidden shrink-0 w-[78vw] sm:w-[55vw] md:w-auto aspect-[4/3] snap-start shadow-md">
                  <img src={collectionCover(c)} alt={txt(c.title, lang)} loading="lazy" decoding="async" draggable={false}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-green-deep/85 via-green-deep/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="font-serif-e text-2xl md:text-[28px] text-ivory leading-tight">{txt(c.title, lang)}</h3>
                    <p className="text-ivory/80 text-sm mt-1.5 font-light">{txt(c.sub, lang)}</p>
                    <p className="eyebrow text-gold mt-4">{count} {lang === 'pt' ? (count === 1 ? 'casa' : 'casas') : (count === 1 ? 'house' : 'houses')}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Casas em destaque */}
      <section className="py-24 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-gold">{t.home.featuredEyebrow}</p>
              <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-4">{t.home.featuredTitle}</h2>
              <p className="mt-3 text-ink/60 font-serif-e italic text-xl">{t.home.featuredSub}</p>
            </div>
            <Link to="/casas" className="inline-flex items-center gap-2 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors whitespace-nowrap">
              {t.home.viewAll} <ArrowRight size={15} />
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} p={p} variant="featured" featuredLarge={i === 0} />
            ))}
          </div>
          {lang !== 'pt' && <p className="mt-8 text-center text-xs text-ink/45 italic">{t.home.fxNote}</p>}
        </div>
      </section>

      {/* 4. Trancoso */}
      <section className="relative flex flex-col min-h-[100vh] md:min-h-[118vh] overflow-hidden">
        <img draggable={false} src="/img/lugares/falesia-v3.webp" alt="Vista aérea das falésias de Trancoso" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-x-0 top-0 h-[52vh] bg-gradient-to-b from-[#f7f2e9]/60 via-[#f7f2e9]/25 to-transparent" />
        <Reveal className="relative max-w-3xl mx-auto px-5 text-center pt-20 md:pt-24">
          <p className="text-[14px] font-semibold uppercase text-ivory" style={{ letterSpacing: '0.2em', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}>{t.home.trancosoEyebrow}</p>
          <h2 className="font-serif-e font-normal text-[#22392f] mt-6 text-5xl md:text-[64px] leading-[1.1]" style={{ letterSpacing: '-0.01em' }}>{t.home.trancosoTitle}</h2>
          <div className="mx-auto mt-8 h-[2px] w-[60px] bg-[#b08d57]" />
          <p className="mt-8 text-[#22392f] text-base md:text-[18px] leading-[1.6]">{t.home.trancosoText}</p>
        </Reveal>
        <Reveal className="relative mt-auto pb-12 md:pb-16 text-center px-5">
          <Link to="/trancoso" className="inline-flex items-center gap-2 bg-[#f7f2e9] text-[#22392f] text-[16px] font-semibold uppercase px-10 py-4 hover:bg-[#b08d57] hover:text-[#f7f2e9] transition-colors shadow-lg" style={{ letterSpacing: '0.15em' }}>
            {t.home.trancosoCta} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* 5. Convite Concierge */}
      <section className="py-24 md:py-32 bg-ivory-deep/40">
        <Reveal className="max-w-3xl mx-auto px-5 text-center">
          <p className="eyebrow text-gold">{t.home.conciergeEyebrow}</p>
          <h2 className="font-serif-e text-3xl md:text-[40px] text-green-e mt-5 leading-snug">{t.home.conciergeTitle}</h2>
          <Link to="/servicos" className="inline-flex items-center gap-2 mt-9 bg-green-e text-ivory px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
            {t.home.conciergeCta} <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>

      {/* 7. Conversão */}
      <section className="py-28 md:py-36 text-center">
        <Reveal className="max-w-3xl mx-auto px-5">
          <p className="eyebrow text-gold">{t.home.ctaEyebrow}</p>
          <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-4 leading-tight">{t.home.ctaTitle}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('conteudo')}
              className="inline-flex items-center justify-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
              <MessageCircle size={16} /> {t.home.ctaWhatsapp}
            </a>
            <Link to="/contato"
              className="inline-flex items-center justify-center gap-2 border border-[#b08d57] bg-[#b08d57] text-white px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#96794a] hover:border-[#96794a] transition-colors">
              {t.home.ctaForm}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
