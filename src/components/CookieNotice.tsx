import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useLang } from '../i18n';

const KEY = 'tba-cookie-ok';

export default function CookieNotice() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch { /* sem storage */ }
  }, []);

  if (!show) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, '1'); } catch { /* ignora */ }
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[95] bg-green-deep text-ivory px-5 py-4 shadow-xl">
      <p className="text-[13px] leading-relaxed text-ivory/85">
        {lang === 'pt'
          ? 'Usamos cookies para medir a audiência e melhorar sua experiência. Saiba mais na nossa '
          : 'We use cookies to measure traffic and improve your experience. Learn more in our '}
        <Link to="/privacidade" className="underline decoration-ivory/40 underline-offset-2 hover:text-gold transition-colors">
          {lang === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
        </Link>
        .
      </p>
      <button onClick={accept}
        className="mt-3 bg-ivory text-green-deep text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 hover:bg-gold hover:text-ivory transition-colors">
        {lang === 'pt' ? 'Entendi' : 'Got it'}
      </button>
    </div>
  );
}
