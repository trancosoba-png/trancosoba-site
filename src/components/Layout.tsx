import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Search, MessageCircle, Mail, MapPin, Instagram, Heart } from 'lucide-react';
import { useLang } from '../i18n';
import { WHATSAPP, WHATSAPP_DISPLAY } from '../data/properties';
import { trackWhatsApp } from '../data/analytics';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Logo({ dark }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 md:gap-3" aria-label="TrancosoBA — Início">
      <img src={dark ? '/logo-igreja-branca.svg' : '/logo-igreja.svg'} alt="" width="1910" height="1406"
        className="h-9 md:h-[60px] w-auto shrink-0" draggable={false} />
      <span className={`font-serif-e text-xl md:text-3xl tracking-wide ${dark ? 'text-ivory' : 'text-green-e'}`}>
        Trancoso<span className="text-gold">BA</span>
      </span>
    </Link>
  );
}

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const onDarkHero = loc.pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/casas', label: t.nav.houses },
    { to: '/trancoso', label: t.nav.trancoso },
    { to: '/servicos', label: t.nav.services },
    { to: '/nos', label: t.nav.about },
    { to: '/contato', label: t.nav.contact },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${onDarkHero ? 'bg-transparent' : 'bg-ivory-95 backdrop-blur border-b border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Logo dark={onDarkHero} />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `text-[13px] tracking-[0.14em] uppercase transition-colors ${onDarkHero ? 'text-ivory/90 hover:text-ivory' : 'text-ink/70 hover:text-green-e'} ${isActive ? 'text-gold' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/casas" aria-label="Buscar" className={`${onDarkHero ? 'text-ivory' : 'text-green-e'} hover:text-gold transition-colors`}>
            <Search size={18} />
          </Link>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" onClick={() => trackWhatsApp('header')}
            className={`${onDarkHero ? 'text-ivory' : 'text-green-e'} hover:text-gold transition-colors`}>
            <MessageCircle size={18} />
          </a>
          <Link to="/favoritos" aria-label="Minhas Favoritas" className={`${onDarkHero ? 'text-ivory' : 'text-green-e'} hover:text-gold transition-colors`}>
            <Heart size={18} />
          </Link>
          <button onClick={() => setLang(lang === 'pt' ? 'en' : lang === 'en' ? 'es' : 'pt')}
            aria-label="Idioma / Language / Idioma"
            className={`text-[12px] tracking-[0.14em] uppercase border px-2.5 py-1 transition-colors ${onDarkHero ? 'border-ivory/40 text-ivory hover:bg-ivory/10' : 'border-green-e/30 text-green-e hover:bg-green-e hover:text-ivory'}`}>
            {lang === 'pt' ? 'EN' : lang === 'en' ? 'ES' : 'PT'}
          </button>
          <button className={`lg:hidden ${onDarkHero ? 'text-ivory' : 'text-green-e'}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="menu-movel">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movel" className="lg:hidden bg-ivory border-t border-black/5 px-6 py-4 flex flex-col gap-4" aria-label="Menu móvel">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-sm tracking-[0.14em] uppercase ${isActive ? 'text-gold' : 'text-ink/80'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  const socialBtn = 'w-11 h-11 rounded-full border border-ivory/25 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors';
  return (
    <footer className="bg-green-deep text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10 text-center">
        {/* Marca */}
        <div className="flex items-center justify-center gap-3">
          <img src="/logo-igreja-branca.svg" alt="" width="1910" height="1406" className="h-14 md:h-16 w-auto shrink-0" draggable={false} />
          <span className="font-serif-e text-4xl md:text-5xl text-ivory">Trancoso<span className="text-gold">BA</span></span>
        </div>

        {/* Contato essencial */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-4 text-[15px] text-ivory">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-gold transition-colors" onClick={() => trackWhatsApp('footer')}>
            <MessageCircle size={17} className="text-gold shrink-0" /> {WHATSAPP_DISPLAY}
          </a>
          <a href="mailto:contato@trancosoba.com.br" className="flex items-center gap-2.5 hover:text-gold transition-colors">
            <Mail size={17} className="text-gold shrink-0" /> contato@trancosoba.com.br
          </a>
          <a href="https://maps.google.com/?q=Quadrado,Trancoso,Bahia" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-gold transition-colors">
            <MapPin size={17} className="text-gold shrink-0" /> Quadrado, Trancoso — Bahia
          </a>
        </div>

        {/* Social */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="https://instagram.com/trancosoba" target="_blank" rel="noreferrer" aria-label="Instagram" className={socialBtn}>
            <Instagram size={17} />
          </a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={socialBtn} onClick={() => trackWhatsApp('footer')}>
            <MessageCircle size={17} />
          </a>
        </div>

        {/* Institucional */}
        <div className="border-t border-white/[0.12] mt-12 pt-7">
          <p className="text-[13px] text-ivory/60 tracking-wide">{t.footer.legal}</p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2.5 text-[13px] text-ivory/55">
            <p>© {new Date().getFullYear()} TrancosoBA</p>
            <Link to="/privacidade" className="underline decoration-ivory/30 underline-offset-2 hover:text-gold transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="mailto:contato@trancosoba.com.br" aria-label="Enviar e-mail"
        className="bg-ivory border border-green-e/25 text-green-e p-3.5 rounded-full shadow-lg hover:bg-green-e hover:text-ivory transition-colors">
        <Mail size={20} />
      </a>
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" onClick={() => trackWhatsApp('footer')}
        className="bg-green-e text-ivory p-3.5 rounded-full shadow-lg hover:bg-gold transition-colors">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

export function PageHero({ title, sub, image }: { title: string; sub: string; image: string }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end">
      <img draggable={false} src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/45 to-green-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-deep/60 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-14 w-full">
        <h1 className="font-serif-e text-5xl md:text-7xl text-ivory">{title}</h1>
        <p className="mt-3 text-ivory font-serif-e italic text-xl md:text-2xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>{sub}</p>
      </div>
    </section>
  );
}
