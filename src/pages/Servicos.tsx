import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';
import { PageHero, Reveal } from '../components/Layout';
import { WHATSAPP } from '../data/contact';
import { trackWhatsApp } from '../data/analytics';

export default function Servicos() {
  const { t } = useLang();
  const cards = t.servicos.cards;
  return (
    <>
      <PageHero title={t.servicos.title} sub={t.servicos.sub} image="/img/servicos/10-suporte.webp" />

      <section className="pt-16 md:pt-24 pb-6">
        <Reveal className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-ink/70 text-base md:text-lg leading-relaxed">{t.servicos.intro}</p>
        </Reveal>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 9).map(c => (
            <Reveal key={c.t} className="bg-ivory group">
              <div className="overflow-hidden aspect-[4/3]">
                <img draggable={false} src={c.img} alt={c.t} loading="lazy" decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="p-6 md:p-7">
                <h2 className="font-serif-e text-2xl md:text-[26px] text-green-e leading-tight">{c.t}</h2>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}

          {/* Card 10 — largura total */}
          <Reveal className="bg-ivory group sm:col-span-2 lg:col-span-3">
            <div className="grid md:grid-cols-2">
              <div className="overflow-hidden aspect-[4/3] md:aspect-auto">
                <img draggable={false} src={cards[9].img} alt={cards[9].t} loading="lazy" decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="p-7 md:p-12 flex flex-col justify-center">
                <p className="eyebrow text-gold mb-3">TrancosoBA</p>
                <h2 className="font-serif-e text-3xl md:text-4xl text-green-e leading-tight">{cards[9].t}</h2>
                <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">{cards[9].d}</p>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.servicos.wa)}`}
                  target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('servicos')}
                  className="mt-8 inline-flex items-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors self-start">
                  <MessageCircle size={16} /> {t.servicos.waBtn}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
