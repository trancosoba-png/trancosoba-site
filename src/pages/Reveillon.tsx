import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';
import { PROPERTIES, WHATSAPP } from '../data/properties';
import { PageHero, Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { trackWhatsApp } from '../data/analytics';

export default function Reveillon() {
  const { lang } = useLang();
  const pt = lang === 'pt';
  const casas = PROPERTIES.filter(p => p.purpose.includes('aluguel') && p.reveillon && p.reveillon.pt !== 'Sob consulta');
  const sobConsulta = PROPERTIES.filter(p => p.purpose.includes('aluguel') && (!p.reveillon || p.reveillon.pt === 'Sob consulta'));
  return (
    <>
      <PageHero
        title={pt ? 'Réveillon em Trancoso' : 'New Year\'s Eve in Trancoso'}
        sub={pt ? 'Pacotes de 10 diárias em casas de alto padrão' : '10-night packages in high-end houses'}
        image="/img/vilas75/01.webp" />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="space-y-6 text-ink/80 leading-relaxed text-base md:text-lg mb-14">
            <p>{pt
              ? 'O Réveillon é o momento mais especial do ano em Trancoso: o Quadrado iluminado, festas na praia e uma atmosfera que mistura sofisticação e simplicidade baiana. As casas da TrancosoBA são oferecidas em pacote de 10 diárias, com valor fechado publicado em cada página de imóvel.'
              : 'New Year\'s Eve is the most special time of the year in Trancoso: the Quadrado lit up, beach parties and an atmosphere that blends sophistication with Bahian simplicity. TrancosoBA houses are offered as 10-night packages, with a fixed price published on each property page.'}</p>
            <p>{pt
              ? 'Muitas casas incluem serviços no pacote — arrumação diária, cozinheira, ajudante de cozinha e concierge. Os detalhes de cada imóvel estão na respectiva página. Valores não incluem taxa de serviço de 10%. Datas exatas e disponibilidade são confirmadas sob consulta.'
              : 'Many houses include services in the package — daily housekeeping, cook, kitchen assistant and concierge. The details of each property are on its page. Prices do not include the 10% service fee. Exact dates and availability are confirmed on request.'}</p>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="eyebrow text-gold mb-8">{pt ? 'Casas com pacote de Réveillon publicado' : 'Houses with published New Year packages'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-16">
            {casas.map(p => <PropertyCard key={p.id} p={p} showView />)}
          </div>
          <h2 className="eyebrow text-gold mb-8">{pt ? 'Outras casas — Réveillon sob consulta' : 'More houses — New Year on request'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {sobConsulta.map(p => <PropertyCard key={p.id} p={p} showView />)}
          </div>
          <div className="mt-16 text-center">
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(pt ? 'Olá! Quero disponibilidade e valores de Réveillon em Trancoso.' : 'Hello! I would like New Year availability and rates in Trancoso.')}`}
              target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('reveillon')}
              className="inline-flex items-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
              <MessageCircle size={16} /> {pt ? 'Consultar Réveillon' : 'Ask about New Year'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
