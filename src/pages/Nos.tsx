import { PageHero, Reveal } from '../components/Layout';

// Textura sutil de papel/linho (ruído SVG inline, sem asset externo)
const TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

function Divider() {
  return <span className="block w-10 h-px bg-gold my-8" />;
}

export default function Nos() {
  return (
    <>
      <PageHero title="Nós" sub="Trancoso, BA" image="/img/ponta/01.jpg" />
      <section
        className="relative py-24 md:py-32 border-y border-[#b08d57]/25"
        style={{ backgroundColor: '#eee2c8' }}
      >
        {/* textura de pergaminho/linho */}
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-multiply"
          style={{ backgroundImage: TEXTURE }}
        />
        {/* vinheta suave de papel envelhecido */}
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(120, 96, 60, 0.10) 100%)' }}
        />

        <Reveal className="relative max-w-3xl mx-auto px-5">
          <h2 className="font-serif-e text-3xl md:text-5xl text-green-e leading-snug">
            Mais do que uma imobiliária, somos parte da história de Trancoso.
          </h2>
          <Divider />
          <div className="space-y-8 text-ink/85 leading-relaxed text-lg">
            <p>Nasci em Trancoso e acompanhei de perto a transformação desta pequena vila de pescadores em um dos destinos mais desejados do Brasil.</p>
            <p>Muito antes de trabalhar com o mercado imobiliário, eu já conhecia as praias, os condomínios, as histórias e as pessoas que fazem deste lugar um destino tão especial. Cresci vendo Trancoso evoluir, preservando aquilo que sempre o tornou único: sua natureza, sua autenticidade e seu estilo de vida.</p>
            <p>Em 2012, decidi transformar esse conhecimento em profissão. Percebi que quem chegava a Trancoso buscava muito mais do que uma casa para alugar ou comprar. Buscava viver a experiência certa.</p>
          </div>

          {/* pull-quote editorial */}
          <div className="my-12 md:my-14 text-center">
            <span className="block w-14 h-px bg-[#b08d57]/70 mx-auto mb-6" aria-hidden="true" />
            <p className="font-serif-e text-3xl md:text-4xl text-green-e leading-snug">Foi assim que nasceu a TrancosoBA.</p>
            <span className="block w-14 h-px bg-[#b08d57]/70 mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="space-y-8 text-ink/85 leading-relaxed text-lg">
            <p>Nosso propósito sempre foi oferecer um atendimento verdadeiramente personalizado, reunindo uma seleção criteriosa dos melhores imóveis da região e um atendimento da equipe TrancosoBA pensado para que cada cliente aproveite Trancoso da melhor forma possível.</p>
            <p>Ser nativo significa conhecer lugares que não aparecem nos mapas, entender cada condomínio, saber indicar a praia ideal para cada momento e estar presente para resolver qualquer necessidade durante a estadia.</p>
            <p>Hoje, depois de mais de uma década atuando no mercado de alto padrão, seguimos com o mesmo compromisso: oferecer segurança, transparência e uma experiência que reflita tudo o que Trancoso tem de melhor.</p>
            <p>Mais do que vender ou alugar imóveis, nosso trabalho é apresentar Trancoso através do olhar de quem nasceu aqui.</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
