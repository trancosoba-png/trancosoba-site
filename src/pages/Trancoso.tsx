import { Link } from 'react-router';
import { ArrowRight, MapPin } from 'lucide-react';
import { PageHero, Reveal } from '../components/Layout';

function Divider() {
  return <span className="block w-10 h-px bg-gold my-6" />;
}

const RESTAURANTS: { n: string; img?: string; d: string }[] = [
  { n: 'Capim Santo', img: '/img/lugares/capim-santo.webp', d: 'Ícone de Trancoso desde 1985. Pratos típicos brasileiros com toque moderno, como o bobó de camarão e sobremesas com capim-santo.' },
  { n: 'O Cacau', img: '/img/lugares/o-cacau.webp', d: 'Mais de 20 anos de história e alma baiana. Destaque para as moquecas e o bobó de camarão em um lindo jardim.' },
  { n: 'Jacaré do Brasil', img: '/img/lugares/jacare.webp', d: 'O Jacaré do Brasil é um famoso e sofisticado bar e restaurante localizado na entrada do Quadrado, conhecido por sua atmosfera rústica-chique, drinks elaborados e culinária refinada.' },
  { n: 'Cantinho Doce', img: '/img/lugares/cantinho-doce.webp', d: 'Mais de 30 anos de história. Strogonoff de lagosta no abacaxi, camarão no coco verde e cachaças artesanais imperdíveis.' },
  { n: 'Tasca', img: '/img/lugares/tasca.webp', d: 'Um pedaço de Portugal em Trancoso. Bacalhau à brás, polvo à lagareiro e uma carta de vinhos especial.' },
  { n: 'Favoritto', img: '/img/lugares/favoritto.webp', d: 'Culinária mediterrânea com ingredientes frescos e técnicas tradicionais. Ambiente sofisticado que lembra as ilhas gregas.' },
  { n: 'Allegria', img: '/img/lugares/allegria.webp', d: 'O Allegria Trancoso é voltado para a culinária fusion (fusion cuisine), misturando pratos inspirados na cozinha asiática, toques contemporâneos e elementos de culinária natural e fresca, como peixes crus, sushis e massas/pizzas.' },
  { n: 'Bonitto', img: '/img/lugares/bonitto.webp', d: 'O Bonitto Trancoso é focado em parrilla contemporânea, destacando-se por carnes nobres, frutos do mar e legumes preparados de forma primitiva ao fogo, valorizando a cultura e os ingredientes da Costa do Descobrimento.' },
  { n: 'Maritaca', img: '/img/lugares/maritaca.webp', d: 'O Maritaca é voltado principalmente para a culinária contemporânea e mediterrânea, com forte destaque para suas famosas pizzas artesanais de massa fina e crocante assadas no forno a lenha.' },
  { n: 'Flô Trancoso', img: '/img/lugares/flo-trancoso.webp', d: 'O Flô Trancoso é um restaurante voltado para a cozinha contemporânea e autoral com foco em cozinha de brasa/fogo. O tipo de comida principal destaca frutos do mar frescos, peixes da estação e cortes nobres de carne.' },
];

const BEACH_CLUBS = [
  { n: 'Praia das Tartarugas', img: '/img/lugares/tartarugas.webp', d: 'Culinária baiana e mediterrânea, drinks variados e bangalôs nas falésias. O lugar perfeito para relaxar e viver o melhor da beira-mar.', l: 'Praia das Tartarugas' },
  { n: 'Praia Flô', img: '/img/lugares/praia-flo.webp', d: 'Fusão de sabores e culturas à beira-mar. Cardápio assinado pelo chef Yuri Escobar, música ao vivo e ambiente descontraído em sintonia com a natureza.', l: 'Praia dos Nativos' },
  { n: 'Pousada Estrela d\'Água', img: '/img/lugares/estrela-dagua.webp', d: 'Conforto e tranquilidade na Praia dos Nativos. Bar da Costa pé na areia, estrutura de praia e deck com vista incrível para o mar.', l: 'Praia dos Nativos' },
  { n: 'UXUA Praia Bar', img: '/img/lugares/uxua.webp', d: 'Lounge em um antigo bar de pescadores. Cozinha baiana inovadora, drinques tropicais e atividades na charmosa Praia dos Coqueiros. Dica da equipe TrancosoBA: ceviche vegano.', l: 'Praia dos Coqueiros' },
  { n: 'Tutabar', img: '/img/lugares/tutabar.webp', d: 'À beira-mar, em um dos lugares mais paradisíacos de Trancoso. Bangalôs para grupos, drinks e petiscos com ingredientes nativos e orgânicos.', l: 'Praia de Itapororoca' },
  { n: 'Alma Trancoso', img: '/img/lugares/alma-trancoso.webp', d: 'Arquitetura única e experiência sensorial no Bistrô e no bar de mixologia "da semente ao gole". Frescor, sustentabilidade e sabor em cada detalhe. Dica da equipe TrancosoBA: sanduíche de polvo em pão brioche com emulsão de kimchi, tomate confit e manjericão.', l: 'Praia dos Coqueiros' },
  { n: 'Zé Barbudo', img: '/img/lugares/ze-barbudo.webp', d: 'Beach club que leva o nome de um dos moradores mais icônicos de Trancoso. Quadra de Beach Tennis, restaurante e DJ de quinta a domingo. Culinária refinada e ambiente super acolhedor.', l: 'Praia dos Nativos' },
  { n: 'Awê Praia', img: '/img/lugares/awe.webp', d: 'Novo conceito de beach club em meio à natureza exuberante. Palco de grandes eventos, como a festa de Iemanjá. Sofisticação e rusticidade a apenas 900m do Quadrado.', l: 'Praia dos Nativos' },
];

const ADVENTURES: { n: string; img: string; d: string; headline?: string; subs?: { t: string; d: string }[] }[] = [
  { n: 'UTV', img: '/img/lugares/utv.webp', d: 'Descubra cenários paradisíacos de Trancoso a bordo de um UTV. Uma experiência única entre praias, falésias e a cultura local.' },
  { n: 'Quadriciclo', img: '/img/lugares/quadriciclo.webp', d: 'Adrenalina e liberdade para explorar paisagens únicas de Trancoso.' },
  { n: 'Canoa Havaiana', img: '/img/lugares/canoa.webp', d: 'Remada em equipe, conexão e energia boa no mar de Trancoso.' },
  { n: 'Caiaque', img: '/img/lugares/caiaque.webp', d: 'Navegue por rios e manguezais em meio à natureza exuberante.' },
  { n: 'Lancha', img: '/img/lugares/lancha.webp', d: 'Navegue pelas águas cristalinas, conheça praias paradisíacas e viva o mar de perto.' },
  { n: 'Cavalo na Praia', img: '/img/lugares/cavalo.webp', d: 'Um passeio tranquilo e inesquecível à beira-mar, em meio à natureza.' },
  { n: 'Bike', img: '/img/lugares/bike.webp', d: 'Pedale entre praias, vilarejos, rios e mata nativa em um ritmo leve e prazeroso.' },
  { n: 'Helicóptero', img: '/img/lugares/helicoptero.webp', d: '', headline: 'Trancoso de cima é incrível.', subs: [
    { t: 'Passeios panorâmicos', d: 'Veja Trancoso de cima e descubra praias, falésias, rios e vilarejos por uma perspectiva inesquecível.' },
    { t: 'Transfer privativo', d: 'Do Aeroporto de Porto Seguro para Trancoso com conforto, agilidade e segurança.' },
  ] },
];

const FESTIVITIES = [
  { n: 'Réveillon', date: '31 de dezembro', d: 'O réveillon mais desejado do Brasil. Entre festas exclusivas, praias paradisíacas e experiências inesquecíveis, Trancoso recebe visitantes do mundo inteiro para celebrar a chegada do novo ano em um cenário onde sofisticação, natureza e charme se encontram de forma única.' },
  { n: 'Iemanjá', date: '2 de fevereiro', d: 'Logo ao amanhecer, moradores e visitantes seguem até a praia para homenagear Iemanjá com flores, perfumes, cantos e oferendas lançadas ao mar. Um momento de fé, respeito e gratidão que transforma o litoral de Trancoso em um cenário de profunda emoção e espiritualidade.' },
  { n: 'São Brás', date: '3 de fevereiro', d: 'Uma das tradições mais autênticas de Trancoso. A celebração reúne fé, música e o encontro de toda a comunidade, com missa, procissão, Samba de Couro, busca e troca do mastro e os festejos no Quadrado. Entre a devoção e a alegria, a festa segue com dança, forró, bebidas tradicionais e momentos que atravessam gerações.' },
  { n: 'São Sebastião', date: '20 de janeiro', d: 'Uma das celebrações mais queridas do vilarejo. Os festejos de São Sebastião movimentam Trancoso com missas, procissões, música, Samba de Couro, preparação e troca dos mastros e encontros que reúnem moradores e visitantes. É uma tradição marcada pela fé, pela alegria e pela participação de famílias que mantêm viva a cultura local.' },
  { n: 'São João Batista', date: '24 de junho', d: 'Padroeiro de Trancoso, São João Batista é celebrado com uma das festas mais importantes do calendário local. O Quadrado ganha bandeirolas, fogueira, forró, quadrilha, comidas típicas, batidas e muita música. A programação também preserva os rituais ligados ao mastro e reúne toda a comunidade em uma celebração que mistura religiosidade, cultura e alegria.' },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div>
      <p className="eyebrow text-gold">{children}</p>
      <span className="block w-10 h-px bg-gold mt-4" />
    </div>
  );
}

export default function Trancoso() {
  return (
    <>
      <PageHero title="Trancoso" sub="A página que conta histórias." image="/img/lugares/trancoso-hero-v2.webp" />
      <section className="py-20 md:py-28 space-y-28 md:space-y-36">

        {/* Intro */}
        <Reveal className="max-w-3xl mx-auto px-5 text-center">
          <p className="font-serif-e text-2xl md:text-3xl text-ink/85 leading-relaxed">
            Uma vila de pescadores que virou destino internacional sem perder a alma. Igreja branca, casas coloridas, falésias cor de terra e um mar que muda de verde a cada hora do dia.
          </p>
          <p className="mt-6 font-serif-e text-lg text-ink/60 leading-relaxed">
            Trancoso é tradição e autenticidade. É natureza preservada, hospitalidade genuína e um estilo de vida que conquista quem chega e transforma quem fica.
          </p>
        </Reveal>

        {/* História — origens */}
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/pataxo.webp" alt="O Quadrado de Trancoso em preto e branco" className="w-full aspect-[16/9] object-cover" />
          </Reveal>
          <Reveal className="mt-12 max-w-3xl">
            <Eyebrow>História</Eyebrow>
            <p className="mt-8 text-ink/75 leading-relaxed text-lg">Antes de se tornar um dos destinos mais encantadores do Brasil, Trancoso já era território do povo Pataxó.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed text-lg">Em 1586, os jesuítas fundaram a aldeia que cresceu ao redor do Quadrado e da Igreja de São João Batista.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed text-lg">Séculos depois, a vila preserva sua arquitetura, suas tradições e um jeito único de viver.</p>
            <Link to="/nos" className="inline-flex items-center gap-2 mt-10 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              Conheça a história de Trancoso <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* Trancoso nos anos 70 */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal className="bg-ivory-deep p-8 md:p-14">
            <Eyebrow>História</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">Trancoso nos anos 70</h2>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/anos70.webp" alt="Trancoso nos anos 70" className="w-full aspect-[16/9] object-cover mt-8 rounded-sm" />
            <p className="mt-8 text-ink/75 leading-relaxed">Nos anos 70, Trancoso recebeu viajantes e artistas que buscavam algo simples e verdadeiro. Encantados pela beleza natural e pela energia do lugar, eles decidiram ficar.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Esses "biribandos" trouxeram novas ideias, cores e formas de viver, sem perder o respeito pelas tradições locais. Foi desse encontro entre diferentes olhares que nasceu o Trancoso que conhecemos hoje: autêntico, acolhedor e cheio de alma.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Mais do que um destino, Trancoso é o resultado de encontros que, até hoje, continuam inspirando e transformando a vila.</p>
            <Link to="/casas" className="inline-flex items-center gap-2 mt-10 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              Conheça mais sobre Trancoso <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* O Quadrado */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>História</Eyebrow>
            <h2 className="font-serif-e text-5xl md:text-6xl text-green-e mt-6">O Quadrado</h2>
            <p className="font-serif-e text-2xl text-ink/70 mt-5">Muito mais do que o centro da vila, o Quadrado é onde Trancoso revela sua essência.</p>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/quadrado-pg.webp" alt="O Quadrado de Trancoso" className="w-full aspect-[16/10] object-cover mt-8" />
            <Divider />
            <p className="text-ink/75 leading-relaxed text-lg">Entre fachadas coloridas, árvores antigas e a Igreja de São João Batista, o tempo parece seguir outro ritmo.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed text-lg">Durante o dia, o cenário convida à calma. Ao entardecer, restaurantes, lojas, ateliês e galerias ganham vida, sem apagar a simplicidade que tornou o lugar tão especial.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed text-lg">Mais do que visitar, estar no Quadrado é sentir de perto a história, a cultura e o jeito único de Trancoso.</p>
          </Reveal>
        </div>

        {/* Gastronomia — intro */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="font-serif-e text-5xl md:text-6xl text-green-e">Gastronomia</h2>
            <p className="text-ink/75 leading-relaxed text-lg mt-5">A culinária em Trancoso vai do tradicional ao contemporâneo e é, sem dúvidas, um dos grandes destaques.</p>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/gastronomia.webp" alt="Moqueca baiana de Trancoso" className="w-full aspect-[16/8] object-cover mt-8 rounded-sm" />
            <p className="mt-8 text-ink/75 leading-relaxed">Aqui você encontra sabores que contam histórias. Da moqueca tradicional feita no fogo de lenha aos pratos autorais que valorizam ingredientes frescos e locais, cada refeição é uma celebração da Bahia e de suas raízes.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Peixes e frutos do mar, temperos regionais, frutas tropicais e o toque criativo dos chefs dão vida a experiências autênticas, em ambientes acolhedores que traduzem o espírito de Trancoso.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Mais do que comer bem, é se conectar com a cultura, a natureza e as pessoas que fazem de Trancoso um lugar único.</p>
            <Link to="/casas" className="inline-flex items-center gap-2 mt-10 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              Conheça mais sobre Trancoso <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* Gastronomia — restaurantes */}
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Gastronomia</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">Sabores que ficam na memória</h2>
            <p className="text-ink/70 mt-4 max-w-2xl leading-relaxed">Do Quadrado aos arredores, Trancoso oferece experiências gastronômicas que combinam tradição, criatividade e ingredientes frescos. Conheça alguns dos restaurantes mais queridos da região.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
            {RESTAURANTS.map((r, i) => (
              <Reveal key={r.n} className="border border-black/10 bg-ivory overflow-hidden">
                {r.img && (
                  <div className="relative">
                    <img draggable={false} loading="lazy" decoding="async" src={r.img} alt={r.n} className="w-full aspect-[4/3] object-cover" />
                    <span className="absolute bottom-2 left-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold text-ivory text-[11px] font-medium">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                )}
                <div className="p-6">
                  {!r.img && <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ivory text-xs font-medium">{String(i + 1).padStart(2, '0')}</span>}
                  <h3 className="font-serif-e text-2xl text-green-e mt-4">{r.n}</h3>
                  <span className="block w-6 h-px bg-gold my-3" />
                  <p className="text-sm text-ink/65 leading-relaxed">{r.d}</p>
                  <p className="flex items-center gap-1.5 text-xs text-green-e/70 mt-4"><MapPin size={12} /> Quadrado</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 bg-ivory-deep p-6 flex items-start gap-4">
            <span className="text-gold font-serif-e text-3xl leading-none">✦</span>
            <p className="text-sm text-ink/70"><strong className="text-green-e">Dica TrancosoBA:</strong> Faça reservas com antecedência, especialmente na alta temporada. Alguns dos melhores lugares são pequenos e muito disputados.</p>
          </Reveal>
        </div>

        {/* Beach Clubs */}
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Beach Clubs</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">À beira-mar, experiências que marcam</h2>
            <p className="text-ink/70 mt-4 max-w-2xl leading-relaxed">De praias paradisíacas à gastronomia impecável, os beach clubs de Trancoso oferecem estrutura completa para viver o melhor da Bahia com os pés na areia.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {BEACH_CLUBS.map((b, i) => (
              <Reveal key={b.n} className="border border-black/10 bg-ivory overflow-hidden">
                <img src={b.img} alt={b.n} loading="lazy" className="w-full aspect-[3/2] object-cover" />
                <div className="p-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ivory text-xs font-medium">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif-e text-2xl text-green-e mt-4">{b.n}</h3>
                  <span className="block w-6 h-px bg-gold my-3" />
                  <p className="text-sm text-ink/65 leading-relaxed">{b.d}</p>
                  <p className="flex items-center gap-1.5 text-xs text-green-e/70 mt-4"><MapPin size={12} /> {b.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Reveal className="bg-ivory-deep p-6">
              <p className="eyebrow text-gold mb-2">Dica TrancosoBA</p>
              <p className="text-sm text-ink/70">Chegue cedo para aproveitar as melhores posições à beira-mar e viva o dia perfeito em Trancoso.</p>
            </Reveal>
            <Reveal className="bg-ivory-deep p-6">
              <p className="eyebrow text-gold mb-2">Reserve com antecedência</p>
              <p className="text-sm text-ink/70">Em alta temporada, os beach clubs costumam lotar rapidamente. Garanta sua experiência.</p>
            </Reveal>
          </div>
        </div>

        {/* Aventuras */}
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Aventuras</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">Trancoso é para viver intensamente</h2>
            <p className="text-ink/70 mt-4 max-w-2xl leading-relaxed">Entre o mar e a mata, cada passeio revela um lado único deste paraíso. Aventuras que conectam você com a natureza, a cultura e momentos inesquecíveis.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ADVENTURES.map(a => (
              <Reveal key={a.n} className="border border-black/10 bg-ivory overflow-hidden">
                <img draggable={false} loading="lazy" decoding="async" src={a.img} alt={a.n} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="eyebrow text-gold">{a.n}</h3>
                  {a.headline && <p className="font-serif-e text-2xl text-green-e mt-3">{a.headline}</p>}
                  {a.d && <p className="text-sm text-ink/65 leading-relaxed mt-3">{a.d}</p>}
                  {a.subs && (
                    <div className="mt-3 space-y-4">
                      {a.subs.map(s => (
                        <div key={s.t}>
                          <p className="eyebrow text-green-e/80">{s.t}</p>
                          <p className="text-sm text-ink/65 leading-relaxed mt-2">{s.d}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-ink/70 leading-relaxed">Nossas experiências são personalizadas para que você aproveite o melhor de Trancoso com conforto, segurança e exclusividade.</p>
          </Reveal>
        </div>

        {/* Bem-estar */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Bem-estar</Eyebrow>
            <p className="font-serif-e text-2xl md:text-3xl text-ink/85 mt-8 leading-relaxed">Trancoso é um convite à pausa contemplativa e ao autocuidado para renovação das energias.</p>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/bem-estar.webp" alt="Bem-estar em Trancoso" className="w-full aspect-[16/9] object-cover mt-8 rounded-sm" />
            <p className="mt-8 text-ink/75 leading-relaxed">Cuide do corpo e da mente explorando as opções de ioga, terapias holísticas e massagens que são oferecidas com excelência em meio à natureza.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Muitos de nossos refúgios permitem que você desfrute destes tratamentos e serviços privados no conforto de sua hospedagem, com toda a privacidade e conexão que você merece.</p>
            <Divider />
            <p className="text-ink/75 leading-relaxed">Encontre o seu equilíbrio no ritmo da Bahia.</p>
            <Link to="/casas" className="inline-flex items-center gap-2 mt-10 text-green-e tracking-[0.18em] uppercase text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
              Conheça mais sobre Trancoso <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* Festas e Tradições */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Festas e Tradições</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">Tradições que atravessam gerações</h2>
            <p className="text-ink/70 mt-4 leading-relaxed">Muito além das praias, Trancoso preserva um calendário de celebrações que mistura fé, cultura e identidade. Ao longo do ano, procissões, rituais, música, dança e encontros comunitários mantêm vivas tradições que fazem parte da alma do vilarejo.</p>
            <img draggable={false} loading="lazy" decoding="async" src="/img/lugares/festas.webp" alt="Festas no Quadrado" className="w-full aspect-[16/9] object-cover mt-8" />
          </Reveal>
          <div className="mt-10 divide-y divide-black/10">
            {FESTIVITIES.map(f => (
              <Reveal key={f.n} className="py-7 flex gap-6 items-start">
                <span className="text-gold font-serif-e text-3xl leading-none mt-1 shrink-0 w-10 text-center">✦</span>
                <div>
                  <h3 className="font-serif-e text-2xl text-green-e">{f.n} <span className="text-gold text-lg">– {f.date}</span></h3>
                  <p className="text-sm text-ink/65 leading-relaxed mt-2">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Sua jornada até Trancoso */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Como chegar</Eyebrow>
            <h2 className="font-serif-e text-4xl md:text-5xl text-green-e mt-6">Sua jornada até Trancoso</h2>
            <p className="text-ink/70 mt-4 leading-relaxed">Chegar aqui já faz parte da experiência. Trancoso está a cerca de 1h30min do Aeroporto Internacional de Porto Seguro (BPS), com rotas que revelam logo no início as belezas da região.</p>
          </Reveal>
          <div className="mt-10 space-y-8">
            <Reveal className="border-l-2 border-gold pl-6">
              <h3 className="eyebrow text-gold">Opção 01 · Rota mais cênica</h3>
              <p className="text-ink/70 leading-relaxed mt-3">O trajeto pode ser feito pela Arraial d'Ajuda, passando por balsa e estrada de terra — um caminho charmoso e cheio de paisagens, com paradas para fotos à beira-mar. A travessia é rápida e faz parte do charme de chegar.</p>
            </Reveal>
            <Reveal className="border-l-2 border-gold pl-6">
              <h3 className="eyebrow text-gold">Opção 02 · Rota mais rápida</h3>
              <p className="text-ink/70 leading-relaxed mt-3">Seguindo direto pela BA-987, a estrada é totalmente asfaltada. É a opção mais prática para quem quer chegar rápido e já começar a aproveitar.</p>
            </Reveal>
            <Reveal className="border-l-2 border-gold pl-6">
              <h3 className="eyebrow text-gold">Chegada exclusiva</h3>
              <p className="text-ink/70 leading-relaxed mt-3">Para quem busca ainda mais conforto, o heliponto do Terravista recebe voos privados e charters. Uma chegada que já começa com uma vista inesquecível do litoral.</p>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <p className="font-serif-e italic text-xl text-green-e">Coordene tudo com a equipe TrancosoBA e chegue sem preocupações.</p>
          </Reveal>
        </div>

        <Reveal className="text-center">
          <Link to="/casas" className="inline-flex items-center gap-2 bg-green-e text-ivory px-9 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
            Conheça mais sobre Trancoso <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
