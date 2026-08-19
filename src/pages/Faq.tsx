import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';
import { PageHero, Reveal } from '../components/Layout';
import { WHATSAPP } from '../data/contact';
import { trackWhatsApp } from '../data/analytics';

interface QA { q: { pt: string; en: string }; a: { pt: string; en: string } }

const FAQS: QA[] = [
  {
    q: { pt: 'Como faço para reservar uma casa?', en: 'How do I book a house?' },
    a: {
      pt: 'Todas as reservas começam com uma conversa pelo WhatsApp (+55 73 99971-8799) ou pelo formulário de contato. Nossa equipe confirma disponibilidade, envia uma proposta personalizada com todas as condições e acompanha você até a assinatura do contrato.',
      en: 'Every booking starts with a conversation via WhatsApp (+55 73 99971-8799) or the contact form. Our team confirms availability, sends a personalized proposal with all conditions and assists you until the contract is signed.',
    },
  },
  {
    q: { pt: 'Os preços incluem taxa de serviço?', en: 'Do prices include a service fee?' },
    a: {
      pt: 'Não. Os valores publicados não incluem a taxa de serviço de 10%, informada em todas as páginas de imóveis.',
      en: 'No. Published rates do not include the 10% service fee, which is stated on all property pages.',
    },
  },
  {
    q: { pt: 'Como funciona o Réveillon em Trancoso?', en: 'How does New Year\'s Eve in Trancoso work?' },
    a: {
      pt: 'O Réveillon é vendido em pacote de 10 diárias, com valor fechado por casa, publicado na página de cada imóvel. Algumas casas incluem serviços como arrumação diária, cozinheira e concierge no pacote. As datas exatas e a disponibilidade são confirmadas sob consulta.',
      en: 'New Year\'s Eve is sold as a 10-night package, with a fixed price per house published on each property page. Some houses include services such as daily housekeeping, cook and concierge in the package. Exact dates and availability are confirmed on request.',
    },
  },
  {
    q: { pt: 'E o Carnaval?', en: 'And Carnival?' },
    a: {
      pt: 'O Carnaval é vendido em pacote de 5 dias, também com valor fechado por casa. Datas e disponibilidade sob consulta.',
      en: 'Carnival is sold as a 5-day package, also with a fixed price per house. Dates and availability on request.',
    },
  },
  {
    q: { pt: 'Qual é a diferença entre alta e baixa temporada?', en: 'What is the difference between high and low season?' },
    a: {
      pt: 'Alta temporada: dezembro, janeiro, fevereiro, julho e feriados. Baixa temporada: março, abril, maio, junho, agosto, setembro, outubro e novembro. Cada imóvel publica suas diárias de alta e baixa na página de tarifário.',
      en: 'High season: December, January, February, July and holidays. Low season: March, April, May, June, August, September, October and November. Each property publishes its high and low season daily rates on its rates section.',
    },
  },
  {
    q: { pt: 'As casas têm staff incluído?', en: 'Do the houses include staff?' },
    a: {
      pt: 'A maioria das casas inclui ao menos uma arrumadeira ou camareira diária. A equipe exata de cada casa (cozinheira, caseiro, jardineiro, piscineiro) está descrita na página do imóvel. Serviços adicionais, como chef particular, podem ser contratados pelo concierge.',
      en: 'Most houses include at least one daily housekeeper. The exact staff of each house (cook, caretaker, gardener, pool attendant) is described on the property page. Additional services, such as a private chef, can be arranged by the concierge.',
    },
  },
  {
    q: { pt: 'Quais serviços de concierge a TrancosoBA oferece?', en: 'What concierge services does TrancosoBA offer?' },
    a: {
      pt: 'Transfer do aeroporto, motorista particular, compras e abastecimento da casa, chef e cozinheira, reservas em restaurantes e beach clubs, passeios de lancha, helicóptero, bem-estar (yoga, massagens) e suporte completo durante toda a estadia.',
      en: 'Airport transfers, private driver, grocery shopping and house stocking, chef and cook, restaurant and beach club reservations, boat trips, helicopter, wellness (yoga, massages) and full support throughout your stay.',
    },
  },
  {
    q: { pt: 'Existe um número mínimo de diárias?', en: 'Is there a minimum number of nights?' },
    a: {
      pt: 'Sim, e varia por casa e por período do ano. Réveillon e Carnaval são sempre pacotes fechados (10 e 5 diárias). Para os demais períodos, consulte a disponibilidade de cada imóvel.',
      en: 'Yes, and it varies by house and time of year. New Year\'s Eve and Carnival are always fixed packages (10 and 5 nights). For other periods, check availability for each property.',
    },
  },
  {
    q: { pt: 'Quais são as condições de pagamento e cancelamento?', en: 'What are the payment and cancellation terms?' },
    a: {
      pt: 'As condições de pagamento e a política de cancelamento são definidas em contrato para cada reserva e apresentadas na proposta, antes de qualquer compromisso.',
      en: 'Payment terms and the cancellation policy are defined in a contract for each booking and presented in the proposal before any commitment.',
    },
  },
  {
    q: { pt: 'A TrancosoBA também vende imóveis?', en: 'Does TrancosoBA also sell properties?' },
    a: {
      pt: 'Sim. Além do aluguel de temporada, temos uma seleção de casas à venda em Trancoso e região, identificadas com o preço de venda na página de cada imóvel. Proprietários interessados em anunciar podem falar conosco pela página Anuncie sua casa.',
      en: 'Yes. In addition to vacation rentals, we have a selection of houses for sale in Trancoso and the region, identified with the sale price on each property page. Owners interested in listing can reach us through the "List your house" page.',
    },
  },
];

export default function Faq() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number>(0);
  const pt = lang === 'pt';
  return (
    <>
      <PageHero
        title={pt ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
        sub={pt ? 'Tudo sobre reservas, tarifas e estadias' : 'All about bookings, rates and stays'}
        image="/img/servicos/10-suporte.webp" />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-12 text-center">
              {pt
                ? 'Reunimos as dúvidas mais comuns de quem aluga uma casa em Trancoso com a TrancosoBA. Se a sua pergunta não estiver aqui, fale com a gente pelo WhatsApp.'
                : 'We gathered the most common questions from guests renting a house in Trancoso with TrancosoBA. If your question is not here, talk to us on WhatsApp.'}
            </p>
          </Reveal>
          <div className="divide-y divide-green-e/15 border-y border-green-e/15">
            {FAQS.map((f, i) => (
              <div key={i}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left">
                  <span className="font-serif-e text-lg md:text-xl text-green-e">{pt ? f.q.pt : f.q.en}</span>
                  <ChevronDown size={18} className={`shrink-0 text-gold transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <p className="pb-6 text-ink/75 text-[15px] leading-relaxed">{pt ? f.a.pt : f.a.en}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-ink/60 text-sm mb-6">
              {pt ? 'Não encontrou sua resposta?' : 'Didn\'t find your answer?'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(pt ? 'Olá! Tenho uma dúvida sobre as casas em Trancoso.' : 'Hello! I have a question about the houses in Trancoso.')}`}
                target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('faq')}
                className="inline-flex items-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link to="/casas" className="text-xs tracking-[0.16em] uppercase text-gold hover:text-green-e transition-colors">
                {pt ? 'Ver todas as casas' : 'View all houses'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
