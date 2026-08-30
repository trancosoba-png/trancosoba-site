import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';
import { PROPERTIES } from '../data/properties';
import { WHATSAPP } from '../data/contact';
import { PageHero, Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { trackWhatsAppClick } from '../data/analytics';

export default function Carnaval() {
  const { lang } = useLang();
  const pt = lang === 'pt';
  const casas = PROPERTIES.filter(p => p.purpose.includes('aluguel') && p.carnaval && p.carnaval.pt !== 'Sob consulta');
  const sobConsulta = PROPERTIES.filter(p => p.purpose.includes('aluguel') && (!p.carnaval || p.carnaval.pt === 'Sob consulta'));
  return (
    <>
      <PageHero
        title={pt ? 'Carnaval em Trancoso' : 'Carnival in Trancoso'}
        sub={pt ? 'Pacotes de 5 dias em casas de alto padrão' : '5-day packages in high-end houses'}
        image="/img/helena/03.webp" />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="space-y-6 text-ink/80 leading-relaxed text-base md:text-lg mb-14">
            <p>{pt
              ? 'O Carnaval de Trancoso é charmoso e familiar: bloquinhos no Quadrado, festas nas praias e o ritmo tranquilo da vila. As casas da TrancosoBA são oferecidas em pacote de 5 dias, com valor fechado publicado em cada página de imóvel.'
              : 'Carnival in Trancoso is charming and family-friendly: street bands on the Quadrado, beach parties and the village\'s laid-back rhythm. TrancosoBA houses are offered as 5-day packages, with a fixed price published on each property page.'}</p>
            <p>{pt
              ? 'Valores não incluem taxa de serviço de 10%. Datas exatas e disponibilidade são confirmadas sob consulta — o Carnaval tem pacote mínimo e datas variam a cada ano.'
              : 'Prices do not include the 10% service fee. Exact dates and availability are confirmed on request — Carnival has a minimum package and dates vary each year.'}</p>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="eyebrow text-gold mb-8">{pt ? 'Casas com pacote de Carnaval publicado' : 'Houses with published Carnival packages'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-16">
            {casas.map(p => <PropertyCard key={p.id} p={p} showView />)}
          </div>
          <h2 className="eyebrow text-gold mb-8">{pt ? 'Outras casas — Carnaval sob consulta' : 'More houses — Carnival on request'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {sobConsulta.map(p => <PropertyCard key={p.id} p={p} showView />)}
          </div>
          <div className="mt-16 text-center">
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(pt ? 'Olá! Quero disponibilidade e valores de Carnaval em Trancoso.' : 'Hello! I would like Carnival availability and rates in Trancoso.')}`}
              target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('conteudo')}
              className="inline-flex items-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
              <MessageCircle size={16} /> {pt ? 'Consultar Carnaval' : 'Ask about Carnival'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
