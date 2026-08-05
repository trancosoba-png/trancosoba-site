import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router';
import { ArrowLeft, MessageCircle, BedDouble, Users, Bath, Maximize, X, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
import { useLang, txt } from '../i18n';
import { PROPERTIES, WHATSAPP } from '../data/properties';
import { usd } from '../data/price';
import { trackWhatsApp } from '../data/analytics';
import { Reveal } from '../components/Layout';
import HeartButton from '../components/HeartButton';
import Especificacoes, { SUITE_PAR } from '../components/Especificacoes';

export default function Imovel() {
  const { id } = useParams();
  const { t, lang, rate } = useLang();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const p = PROPERTIES.find(x => x.id === id);
  const [active, setActive] = useState(() => {
    if (!p) return 0;
    const i = p.gallery.indexOf(p.image);
    return i >= 0 ? i : 0;
  });
  const [open, setOpen] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const total = p?.gallery.length ?? 0;
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive(a => (a + 1) % total), [total]);
  const stripRef = useRef<HTMLDivElement | null>(null);

  // Pré-carrega a foto anterior e a próxima para troca instantânea
  useEffect(() => {
    if (!p || total < 2) return;
    [1, -1, 2].forEach(d => {
      const img = new Image();
      img.src = p.gallery[(active + d + total) % total];
    });
  }, [active, p, total]);

  // Mantém a miniatura atual visível na faixa do lightbox
  useEffect(() => {
    if (!open || !stripRef.current) return;
    const el = stripRef.current.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [active, open]);

  // Navegação por teclado + trava de scroll no lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) { dx < 0 ? next() : prev(); }
  };

  if (!p) return <Navigate to="/casas" replace />;

  const waMsg = encodeURIComponent(`Olá, tenho interesse no imóvel ${p.name.pt} (${p.code}) — ${p.location}.`);
  const shareUrl = `${window.location.origin}/p/${p.id}`;
  const doShare = async () => {
    const data = { title: `${p.name.pt} — TrancosoBA`, text: `${p.name.pt}: ${p.suites} suítes, até ${p.guests} hóspedes, em ${p.location}, Trancoso.`, url: shareUrl };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* cancelado */ }
    } else {
      try { await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 2500); }
      catch { window.prompt('Link:', shareUrl); }
    }
  };
  const stats = [
    { icon: BedDouble, v: `${p.suites} ${t.imovel.suites}` },
    { icon: Users, v: `${p.guests} ${t.imovel.guests}` },
    { icon: Bath, v: `${p.baths} ${t.imovel.baths}` },
    ...(p.area.includes('m²') ? [{ icon: Maximize, v: p.area }] : []),
  ];

  return (
    <div className="pt-16 md:pt-20" style={p.id === 'casa-coqueiral-02' ? { backgroundColor: '#EFE7D8', minHeight: '100vh' } : undefined}>
      {/* Galeria protagonista */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8" onContextMenu={(e) => e.preventDefault()}>
        <button type="button" onClick={() => { if ((window.history.state?.idx ?? 0) > 0) navigate(-1); else navigate('/casas'); }} className="inline-flex items-center gap-2 text-sm text-green-e/70 hover:text-gold transition-colors mb-6">
          <ArrowLeft size={15} /> {t.imovel.back}
        </button>
        <div className="img-zoom overflow-hidden relative cursor-zoom-in select-none group/gal" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={() => setOpen(true)}>
          <img src={p.gallery[active]} alt={`${txt(p.name, lang)} — ${t.imovel.gallery}`} fetchPriority="high" decoding="async" className="w-full aspect-[16/9] object-cover" draggable={false} />
          <span className="photo-shield" aria-hidden="true" />
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Foto anterior"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-deep/55 text-ivory backdrop-blur-sm transition-all hover:bg-gold hover:text-green-deep opacity-90 md:opacity-0 md:group-hover/gal:opacity-100">
            <ChevronLeft size={26} />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Próxima foto"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-deep/55 text-ivory backdrop-blur-sm transition-all hover:bg-gold hover:text-green-deep opacity-90 md:opacity-0 md:group-hover/gal:opacity-100">
            <ChevronRight size={26} />
          </button>
          <span className="absolute bottom-3 right-3 bg-green-deep/70 text-ivory text-xs tracking-widest px-3 py-1.5 pointer-events-none">
            {active + 1} / {total}
          </span>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-3">
          {p.gallery.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`${t.imovel.gallery} ${i + 1}`}
              className={`overflow-hidden border-2 transition-colors relative ${i === active ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}>
              <img src={g.replace(/\.webp$/, '-thumb.webp')} alt="" loading="lazy" decoding="async" draggable={false} onError={(e) => { (e.currentTarget as HTMLImageElement).src = g; }} className="w-full aspect-[3/2] object-cover" />
              <span className="photo-shield" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox premium */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label={`${txt(p.name, lang)} — ${t.imovel.gallery}`}
          className="fixed inset-0 z-[90] bg-green-deep/95 backdrop-blur-md flex flex-col" onClick={() => setOpen(false)} onContextMenu={(e) => e.preventDefault()}>
          <button onClick={() => setOpen(false)} aria-label="Fechar"
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-ivory/25 bg-green-deep/60 text-ivory/90 backdrop-blur-sm transition-all hover:bg-gold hover:text-green-deep hover:border-gold">
            <X size={24} />
          </button>
          <span className="absolute top-6 left-6 z-20 text-ivory/70 text-sm tracking-[0.25em]">{active + 1} / {total}</span>

          {/* Área da imagem */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center px-16 md:px-28 pt-14 pb-4">
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Foto anterior"
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-ivory/25 bg-green-deep/60 text-ivory backdrop-blur-sm transition-all hover:bg-gold hover:text-green-deep hover:border-gold hover:scale-105">
              <ChevronLeft size={30} />
            </button>
            <div className="max-w-[min(1100px,100%)] max-h-full flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <span className="relative inline-block">
                <img src={p.gallery[active]} alt={`${txt(p.name, lang)} — ${active + 1}`}
                  className="max-w-full max-h-[calc(100vh-240px)] md:max-h-[calc(100vh-260px)] w-auto h-auto object-contain shadow-2xl" draggable={false} />
                <span className="photo-shield" aria-hidden="true" />
              </span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Próxima foto"
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-ivory/25 bg-green-deep/60 text-ivory backdrop-blur-sm transition-all hover:bg-gold hover:text-green-deep hover:border-gold hover:scale-105">
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Faixa de miniaturas */}
          <div ref={stripRef} onClick={(e) => e.stopPropagation()}
            className="shrink-0 flex gap-2 overflow-x-auto px-6 pb-5 pt-1 mx-auto max-w-full [scrollbar-width:thin]">
            {p.gallery.map((g, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`${t.imovel.gallery} ${i + 1}`} aria-current={i === active}
                className={`shrink-0 overflow-hidden border-2 transition-all ${i === active ? 'border-gold opacity-100 scale-[1.03]' : 'border-ivory/15 opacity-50 hover:opacity-90'}`}>
                <img src={g.replace(/\.webp$/, '-thumb.webp')} alt="" loading="lazy" decoding="async" draggable={false}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = g; }}
                  className="w-20 h-14 md:w-24 md:h-16 object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dados */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-3 gap-14">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="eyebrow text-gold">{p.location} · {p.code}</p>
            <h1 className="font-serif-e text-4xl md:text-6xl text-green-e mt-3">{txt(p.name, lang)}</h1>
            <div className="relative inline-block mt-4"><HeartButton id={p.id} className="!static !bg-ivory-deep !text-green-e hover:!bg-gold hover:!text-ivory border border-green-e/20" /></div>
            <div className="flex flex-wrap gap-8 mt-8 pb-8 border-b border-black/10">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 text-ink/70">
                  <s.icon size={19} className="text-gold" />
                  <span className="text-sm tracking-wide">{s.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-[#404040] font-medium leading-relaxed text-lg font-serif-e space-y-5">
              {txt(p.description, lang).split('\n\n').filter(par => !SUITE_PAR.test(par)).map((par, i) => <p key={i}>{par}</p>)}
            </div>

            <Especificacoes p={p} />
          </Reveal>
        </div>

        {/* Card de conversão */}
        <Reveal className="lg:sticky lg:top-28 h-fit">
          <div className="text-ivory p-6 md:p-8" style={{ backgroundColor: '#182b23' }}>
            <p className="font-serif-e uppercase text-[#b08d57] text-base" style={{ letterSpacing: '3px' }}>{lang === 'pt' ? 'Tarifário' : 'Rates'}</p>
            <div className="mt-5">
              <div className="flex items-baseline justify-between gap-4 border-b border-[#b08d57]/40 pb-4 mb-4">
                <span className="font-serif-e uppercase text-base tracking-[1px]">{lang === 'pt' ? 'Alta Temporada' : 'High Season'}</span>
                <span className="font-serif-e text-lg text-right">{lang === 'pt' ? p.price.pt : usd(p.price.pt, rate)}</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-[#b08d57]/40 pb-4 mb-4">
                <span className="font-serif-e uppercase text-base tracking-[1px]">{lang === 'pt' ? 'Baixa Temporada' : 'Low Season'}</span>
                <span className="font-serif-e text-lg text-right">{lang === 'pt' ? (p.priceLow ?? p.price).pt : usd((p.priceLow ?? p.price).pt, rate)}</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-[#b08d57]/40 pb-4 mb-4">
                <span className="font-serif-e uppercase text-base tracking-[1px] leading-snug">Réveillon<br /><span className="text-[12px] text-ivory/70 normal-case tracking-normal">({lang === 'pt' ? 'Pacote 10 diárias' : '10-night package'})</span></span>
                <span className="font-serif-e text-lg text-right">{p.reveillon ? (lang === 'pt' ? p.reveillon.pt : usd(p.reveillon.pt, rate)) : (lang === 'pt' ? 'Sob consulta' : 'Upon request')}</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-[#b08d57]/40 pb-4">
                <span className="font-serif-e uppercase text-base tracking-[1px] leading-snug">Carnaval*<br /><span className="text-[12px] text-ivory/70 normal-case tracking-normal">({lang === 'pt' ? 'Pacote 5 dias' : '5-day package'})</span></span>
                <span className="font-serif-e text-lg text-right">{p.carnaval ? (lang === 'pt' ? p.carnaval.pt : usd(p.carnaval.pt, rate)) : (lang === 'pt' ? 'Sob consulta' : 'Upon request')}</span>
              </div>
              {p.salePrice && (
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif-e uppercase text-base tracking-[1px] leading-snug">{lang === 'pt' ? 'Valor de Venda' : 'Sale Price'}</span>
                  <span className="font-serif-e text-lg text-right">{lang === 'pt' ? p.salePrice.pt : p.salePrice.en}</span>
                </div>
              )}
            </div>
            <div className="mt-6 space-y-3 text-[13px] leading-relaxed">
              <div>
                <p className="text-[#b08d57] italic">{lang === 'pt' ? 'Diária Alta:' : 'High season:'}</p>
                <p className="text-ivory/85">{p.seasonHigh ? (lang === 'pt' ? p.seasonHigh.pt : p.seasonHigh.en) : (lang === 'pt' ? 'Dez, Jan, Fev, Jul e feriados' : 'Dec, Jan, Feb, Jul and holidays')}</p>
              </div>
              <div className="border-b border-[#b08d57]/40 pb-4">
                <p className="text-[#b08d57] italic">{lang === 'pt' ? 'Diária Baixa:' : 'Low season:'}</p>
                <p className="text-ivory/85">{p.seasonLow ? (lang === 'pt' ? p.seasonLow.pt : p.seasonLow.en) : (lang === 'pt' ? 'Mar, Abr, Mai, Jun, Ago, Set, Out e Nov' : 'Mar, Apr, May, Jun, Aug, Sep, Oct and Nov')}</p>
              </div>
              <p className="text-ivory/70 italic pt-1">ⓘ {lang === 'pt' ? 'Preços não incluem 10% de taxa de serviço.' : 'Prices do not include 10% service fee.'}</p>
              <p className="text-ivory/60 text-[12px] pt-1">*{lang === 'pt' ? 'Pacote mínimo, datas sob consulta' : 'Minimum package, dates upon request'}</p>
              {lang !== 'pt' && <p className="text-ivory/55 text-[12px] italic pt-1">{t.home.fxNote}</p>}
              <p className="text-ivory/45 text-[11px] leading-relaxed pt-2">
                {lang === 'pt'
                  ? 'Valores por diária, sujeitos a confirmação de disponibilidade e ao período da estadia. Não incluem a taxa de serviço de 10%.'
                  : 'Nightly rates, subject to availability confirmation and length of stay. They do not include the 10% service fee.'}
              </p>
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${waMsg}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('imovel', p.id)}
              className="mt-6 flex items-center justify-center gap-2 py-4 text-sm uppercase transition-colors hover:opacity-90" style={{ backgroundColor: '#f7f2e9', color: '#182b23', letterSpacing: '1px' }}>
              <MessageCircle size={16} /> {t.imovel.ask}
            </a>
            <button type="button" onClick={doShare}
              className="mt-3 w-full flex items-center justify-center gap-2 py-4 text-sm uppercase transition-colors border border-ivory/40 text-ivory hover:bg-ivory/10" style={{ letterSpacing: '1px' }}>
              {copied ? <Check size={16} /> : <Share2 size={16} />} {copied ? t.imovel.copied : t.imovel.share}
            </button>
            <Link to="/contato" className="mt-3 flex items-center justify-center py-4 text-sm uppercase transition-colors border border-[#b08d57] text-white hover:bg-[#b08d57]/15" style={{ letterSpacing: '1px' }}>
              {t.home.ctaForm}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
