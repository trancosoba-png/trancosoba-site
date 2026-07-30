import { PageHero, Reveal } from '../components/Layout';
import { useLang } from '../i18n';

function Divider() {
  return <span className="block w-10 h-px bg-gold my-8" />;
}

export default function Nos() {
  const { t } = useLang();
  return (
    <>
      <PageHero title="Nós" sub="Trancoso, BA" image="/img/ponta/01.jpg" />
      <section className="py-20 md:py-28">
        <Reveal className="max-w-3xl mx-auto px-5">
          <h2 className="font-serif-e text-3xl md:text-5xl text-green-e leading-snug">
            Mais do que uma imobiliária, somos parte da história de Trancoso.
          </h2>
          <Divider />
          <div className="space-y-6 text-ink/75 leading-relaxed text-lg">
            <p>Nasci em Trancoso e acompanhei de perto a transformação desta pequena vila de pescadores em um dos destinos mais desejados do Brasil.</p>
            <p>Muito antes de trabalhar com o mercado imobiliário, eu já conhecia as praias, os condomínios, as histórias e as pessoas que fazem deste lugar um destino tão especial. Cresci vendo Trancoso evoluir, preservando aquilo que sempre o tornou único: sua natureza, sua autenticidade e seu estilo de vida.</p>
            <p>Em 2012, decidi transformar esse conhecimento em profissão. Percebi que quem chegava a Trancoso buscava muito mais do que uma casa para alugar ou comprar. Buscava viver a experiência certa.</p>
            <p className="font-serif-e text-2xl text-green-e">Foi assim que nasceu a TrancosoBA.</p>
            <p>Nosso propósito sempre foi oferecer um atendimento verdadeiramente personalizado, reunindo uma seleção criteriosa dos melhores imóveis da região e um atendimento da equipe TrancosoBA pensado para que cada cliente aproveite Trancoso da melhor forma possível.</p>
            <p>Ser nativo significa conhecer lugares que não aparecem nos mapas, entender cada condomínio, saber indicar a praia ideal para cada momento e estar presente para resolver qualquer necessidade durante a estadia.</p>
            <p>Hoje, depois de mais de uma década atuando no mercado de alto padrão, seguimos com o mesmo compromisso: oferecer segurança, transparência e uma experiência que reflita tudo o que Trancoso tem de melhor.</p>
            <p>Mais do que vender ou alugar imóveis, nosso trabalho é apresentar Trancoso através do olhar de quem nasceu aqui.</p>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-24 grid gap-10">
          <Reveal className="bg-green-e text-ivory p-10 max-w-2xl mx-auto w-full">
            <p className="eyebrow text-gold">{t.nos.legalTitle}</p>
            <ul className="mt-5 space-y-2.5">
              {t.nos.legal.map(l => (
                <li key={l} className="text-sm text-ivory/75 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
