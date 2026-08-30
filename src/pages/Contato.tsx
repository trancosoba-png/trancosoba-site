import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Mail, Instagram, MapPin, CheckCircle2 } from 'lucide-react';
import { useLang } from '../i18n';
import { WHATSAPP } from '../data/contact';
import { trackWhatsAppClick, trackContact } from '../data/analytics';
import { PageHero, Reveal, WhatsAppIcon } from '../components/Layout';

export default function Contato() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', interest: '', dates: '', guests: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Nome: ${form.name}`,
      `Interesse: ${form.interest}`,
      form.dates && `Datas: ${form.dates}`,
      form.guests && `Hóspedes: ${form.guests}`,
      `Mensagem: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    trackContact({ form: 'contato', page_type: 'contato' });
    setSent(true);
  };

  const channels = [
    { icon: WhatsAppIcon, label: t.contato.whatsapp, value: '+55 73 99971-8799', href: `https://wa.me/${WHATSAPP}` },
    { icon: Phone, label: t.contato.phone, value: '+55 73 99971-8799', href: 'tel:+5573999718799' },
    { icon: Mail, label: t.contato.email, value: 'contato@trancosoba.com', href: 'mailto:contato@trancosoba.com' },
    { icon: Instagram, label: t.contato.instagram, value: '@trancosoba', href: 'https://instagram.com/trancosoba' },
    { icon: MapPin, label: 'Trancoso', value: t.contato.address, href: 'https://maps.app.goo.gl/aGrSSnaWqyeiUP6x8' },
  ];

  const input = "w-full bg-transparent border border-green-e/25 px-4 py-3.5 text-base outline-none focus:border-gold transition-colors";

  return (
    <>
      <PageHero title={t.contato.title} sub={t.contato.sub} image="/img/hero.webp" />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div className="space-y-6">
              {channels.map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={() => { if (c.href.includes('wa.me')) trackWhatsAppClick('conteudo'); }}
                  className="flex items-center gap-5 group">
                  <span className="bg-ivory-deep p-3.5 text-green-e group-hover:bg-green-e group-hover:text-ivory transition-colors">
                    <c.icon size={20} />
                  </span>
                  <span>
                    <span className="block eyebrow text-green-e/50">{c.label}</span>
                    <span className="text-ink/85 group-hover:text-gold transition-colors">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-ivory-deep p-8 md:p-10">
              <h2 className="font-serif-e text-3xl text-green-e">{t.contato.formTitle}</h2>
              {sent ? (
                <div className="mt-8 flex items-start gap-3 text-green-e" role="status">
                  <CheckCircle2 size={22} className="shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{t.contato.sent}</p>
                </div>
              ) : (
                <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                  <input required placeholder={t.contato.name} className={input} aria-label={t.contato.name}
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <div className="grid grid-cols-2 gap-4">
                    <select required className={input} aria-label={t.contato.interest} value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}>
                      <option value="" disabled>{t.contato.interest}</option>
                      <option>{t.contato.interestRent}</option>
                      <option>{t.contato.interestSale}</option>
                    </select>
                    <input placeholder={t.contato.dates} className={input} aria-label={t.contato.dates}
                      value={form.dates} onChange={e => setForm({ ...form, dates: e.target.value })} />
                  </div>
                  <input type="number" min="1" placeholder={t.contato.guests} className={input} aria-label={t.contato.guests}
                    value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} />
                  <textarea required rows={4} placeholder={t.contato.message} className={input} aria-label={t.contato.message}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" className="w-full bg-green-e text-ivory py-4 text-sm tracking-[0.22em] uppercase hover:bg-gold transition-colors">
                    {t.contato.send}
                  </button>
                  <p className="text-xs text-ink/50 leading-relaxed">
                    {t.contato.privacy}{' '}
                    <Link to="/privacidade" className="underline decoration-ink/30 underline-offset-2 hover:text-gold transition-colors">
                      {t.footer.privacy}
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
