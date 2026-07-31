import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { useLang } from '../i18n';
import { PROPERTIES, LOCATIONS, WHATSAPP } from '../data/properties';
import { imgSources } from '../data/imgset';
import { trackWhatsApp } from '../data/analytics';
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

  const field = "w-full flex items-center px-5 py-4 border-b border-black/10";
  const select = "w-full bg-transparent text-base md:text-lg text-ink outline-none cursor-pointer appearance-none";

  return (
    <form
      className="bg-ivory-95 shadow-2xl w-full max-w-md flex flex-col"
      onSubmit={e => { e.preventDefault(); nav(`/casas?finalidade=${purpose}&local=${encodeURIComponent(location)}&hospedes=${guests}&suites=${suites}`); }}
    >
      <label className={field}>
        <select value={purpose} onChange={e => setPurpose(e.target.value)} aria-label={t.hero.type} className={select}>
          <option value="">{t.hero.rent} / {t.hero.sale}</option>
          <option value="aluguel">{t.hero.rent}</option>
          <option value="venda">{t.hero.sale}</option>
        </select>
        <ChevronDown size={18} className="text-ink/40 shrink-0 pointer-events-none" />
      </label>
      <label className={field}>
        <select value={location} onChange={e => setLocation(e.target.value)} aria-label={t.hero.location} className={select}>
          <option value="">{lang === 'pt' ? 'Localização' : 'Location'}</option>
          {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <ChevronDown size={18} className="text-ink/40 shrink-0 pointer-events-none" />
      </label>

      {more && (
        <>
          <label className={field}>
            <select value={guests} onChange={e => setGuests(e.target.value)} aria-label={t.casas.guests} className={select}>
              <option value="">{lang === 'pt' ? 'Hóspedes' : 'Guests'}</option>
              {[6, 8, 10, 12].map(n => <option key={n} value={n}>{n}+</option>)}
            </select>
            <ChevronDown size={18} className="text-ink/40 shrink-0 pointer-events-none" />
          </label>
          <label className={field}>
            <select value={suites} onChange={e => setSuites(e.target.value)} aria-label={t.casas.suites} className={select}>
              <option value="">{lang === 'pt' ? 'Suítes' : 'Suites'}</option>
              {[3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n}+</option>)}
            </select>
            <ChevronDown size={18} className="text-ink/40 shrink-0 pointer-events-none" />
          </label>
        </>
      )}

      <button type="button" onClick={() => setMore(!more)}
        className="self-center py-3.5 text-sm text-ink/55 hover:text-gold transition-colors tracking-wide">
        {more ? (lang === 'pt' ? 'Menos filtros' : 'Fewer filters') : (lang === 'pt' ? 'Mais filtros...' : 'More filters...')}
      </button>

      <button type="submit"
        className="w-full bg-green-e text-ivory font-serif-e text-xl tracking-wide hover:bg-gold transition-colors py-5">
        {lang === 'pt' ? 'Buscar' : 'Search'}
      </button>
    </form>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const featured = useMemo(() => PROPERTIES.filter(p => p.featured).slice(0, 5), []);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] flex flex-col">
        <picture>
          <source type="image/webp" srcSet={imgSources('/img/hero.jpg').webpSrcSet} sizes="100vw" />
          <img draggable={false} src="/img/hero.jpg" alt="Praias, falésias e natureza de Trancoso" fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover lg:hidden" />
        </picture>
        <video autoPlay muted loop playsInline poster="/img/hero.jpg" aria-label="Praias, falésias e natureza de Trancoso"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block">
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-green-deep/40 via-transparent to-green-deep/60" />
        <div className="relative flex-1" aria-hidden="true" />
        <div className="relative px-5 pb-8 md:pb-12 w-full max-w-4xl mx-auto">
          <HeroSearch />
        </div>
      </section>

      {/* 2. Apresentação */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif-e font-light italic text-[46px] md:text-[76px] leading-[1.08] tracking-[0.005em] text-[#4a3b2c]">
              <span className="block">{t.home.introTitleA}</span>
              <span className="block not-italic font-normal text-[26px] md:text-[40px] tracking-[0.08em] text-[#8a6f4d] mt-5 md:mt-7">{t.home.introTitleB}</span>
            </h2>
            <span className="block w-12 h-px bg-gold mt-10 mx-auto" />
            <p className="mt-8 font-sans font-light text-lg md:text-xl text-ink/65 leading-[1.75] tracking-[0.01em] max-w-2xl mx-auto">{t.home.introText}</p>
            <Link to="/nos" className="inline-flex items-center gap-2 mt-10 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              {t.home.introCta} <ArrowRight size={15} />
            </Link>
          </Reveal>
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
        <img draggable={false} src="/img/lugares/falesia-v3.jpg" alt="Vista aérea das falésias de Trancoso" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
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
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('home')}
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
