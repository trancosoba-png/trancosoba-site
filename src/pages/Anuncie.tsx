import { useState } from 'react';
import { useLang } from '../i18n';
import { WHATSAPP } from '../data/properties';
import { trackWhatsApp } from '../data/analytics';
import { PageHero, Reveal } from '../components/Layout';

export default function Anuncie() {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [suites, setSuites] = useState('');

  const waText = [
    t.anuncie.waMsg,
    `${t.anuncie.name}: ${name}`,
    `${t.anuncie.whatsapp}: ${phone}`,
    `${t.anuncie.location}: ${location}`,
    `${t.anuncie.suites}: ${suites}`,
  ].join('\n');
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;
  const ready = name.trim() && phone.trim() && location.trim();

  const input = 'w-full bg-transparent border border-green-e/25 px-4 py-3 text-sm outline-none focus:border-gold transition-colors';

  return (
    <>
      <PageHero title={t.anuncie.title} sub={t.anuncie.sub} image="/img/hero.jpg" />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-lg text-ink/70 leading-relaxed">{t.anuncie.text}</p>
            <form className="mt-10 space-y-5" onSubmit={(e) => { e.preventDefault(); if (ready) { trackWhatsApp('anuncie'); window.open(waLink, '_blank'); } }}>
              <label className="flex flex-col gap-1.5">
                <span className="eyebrow text-green-e/60">{t.anuncie.name}</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className={input} required maxLength={100} autoComplete="name" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="eyebrow text-green-e/60">{t.anuncie.whatsapp}</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className={input} inputMode="tel" required maxLength={30} autoComplete="tel" />
              </label>
              <div className="grid md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="eyebrow text-green-e/60">{t.anuncie.location}</span>
                  <input value={location} onChange={(e) => setLocation(e.target.value)} className={input} placeholder="Ex.: Altos de Trancoso" required maxLength={80} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="eyebrow text-green-e/60">{t.anuncie.suites}</span>
                  <input value={suites} onChange={(e) => setSuites(e.target.value.replace(/\D/g, '').slice(0, 2))} className={input} inputMode="numeric" />
                </label>
              </div>
              <button type="submit" disabled={!ready}
                className="bg-green-e text-ivory text-xs tracking-[0.18em] uppercase px-10 py-4 hover:bg-green-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                {t.anuncie.send}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
