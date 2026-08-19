import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';
import { WHATSAPP } from '../data/contact';

export default function NotFound() {
  const { lang } = useLang();
  return (
    <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <p className="eyebrow text-gold mb-6">404</p>
        <h1 className="font-serif-e text-4xl md:text-6xl text-green-e leading-tight">
          {lang === 'pt' ? 'Esta página não existe.' : 'This page does not exist.'}
        </h1>
        <p className="mt-6 text-ink/60 leading-relaxed">
          {lang === 'pt'
            ? 'O endereço pode ter mudado ou sido digitado errado. Que tal conhecer nossas casas?'
            : 'The address may have changed or been mistyped. How about discovering our houses?'}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/casas"
            className="bg-green-e text-ivory text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-green-deep transition-colors">
            {lang === 'pt' ? 'Ver todas as casas' : 'View all houses'}
          </Link>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 border border-green-e/30 text-green-e text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors">
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
