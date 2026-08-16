import { PageHero } from '../components/Layout';
import { useLang } from '../i18n';

export default function Privacidade() {
  const { lang } = useLang();
  const pt = lang === 'pt';
  return (
    <>
      <PageHero
        title={pt ? 'Política de Privacidade' : 'Privacy Policy'}
        sub={pt ? 'Como tratamos seus dados' : 'How we handle your data'}
        image="/img/vilas75/01.jpg" />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 space-y-8 text-ink/70 leading-relaxed text-[15px]">
          {pt ? (
            <>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">1. Dados coletados</h2>
                <p>Ao entrar em contato pelos nossos formulários ou pelo WhatsApp, coletamos os dados que você nos fornece diretamente: nome, telefone, e-mail, datas desejadas da estadia, número de hóspedes e o conteúdo da sua mensagem.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">2. Finalidade</h2>
                <p>Utilizamos esses dados exclusivamente para responder à sua solicitação, elaborar propostas de hospedagem ou de compra de imóveis e prestar o atendimento contratado. Não utilizamos seus dados para envio de publicidade não solicitada.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">3. Compartilhamento</h2>
                <p>Os dados são acessados apenas pela equipe TrancosoBA. Quando necessário à concretização de uma reserva, informações estritamente operacionais podem ser compartilhadas com os proprietários dos imóveis e prestadores de serviço envolvidos na estadia. Não vendemos nem cedemos dados a terceiros para fins comerciais.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">4. Armazenamento e prazo</h2>
                <p>Os dados são guardados em ambiente seguro pelo tempo necessário ao atendimento e às obrigações legais aplicáveis. Mensagens de consulta que não resultem em contratação podem ser eliminadas após 12 meses.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">5. Cookies e medição</h2>
                <p>O site utiliza ferramentas de medição de audiência (Google Analytics e pixel da Meta) para entender como os visitantes usam o site e melhorar nossos serviços. Você pode desativar os cookies no seu navegador a qualquer momento.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">6. Seus direitos (LGPD)</h2>
                <p>Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a confirmação, o acesso, a correção, a anonimização, a portabilidade ou a exclusão dos seus dados pessoais, bem como a revogação do consentimento.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">7. Contato do responsável</h2>
                <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política, escreva para o nosso responsável pelo tratamento de dados pelo e-mail de contato informado na página de Contato, ou pelo WhatsApp oficial da TrancosoBA.</p>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-ink/50 italic">Legal text under client review before final publication.</p>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">1. Data we collect</h2>
                <p>When you contact us through our forms or WhatsApp, we collect the data you provide directly: name, phone, e-mail, desired stay dates, number of guests and the content of your message.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">2. Purpose</h2>
                <p>We use this data exclusively to respond to your request, prepare accommodation or property purchase proposals and provide the contracted service. We do not use your data for unsolicited advertising.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">3. Sharing</h2>
                <p>Data is accessed only by the TrancosoBA team. When necessary to complete a booking, strictly operational information may be shared with property owners and service providers involved in the stay. We do not sell or transfer data to third parties for commercial purposes.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">4. Storage and retention</h2>
                <p>Data is kept in a secure environment for as long as needed for the service and applicable legal obligations. Inquiries that do not result in a booking may be deleted after 12 months.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">5. Cookies and analytics</h2>
                <p>The site uses audience measurement tools (Google Analytics and Meta pixel) to understand how visitors use the site and improve our services. You can disable cookies in your browser at any time.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">6. Your rights (LGPD)</h2>
                <p>Under the Brazilian General Data Protection Law (Law No. 13,709/2018), you may request confirmation, access, correction, anonymization, portability or deletion of your personal data, as well as revocation of consent.</p>
              </div>
              <div>
                <h2 className="font-serif-e text-2xl text-green-e mb-3">7. Data controller contact</h2>
                <p>To exercise your rights or ask questions about this policy, write to our data controller via the contact e-mail shown on the Contact page, or through the official TrancosoBA WhatsApp.</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
