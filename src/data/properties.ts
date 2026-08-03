export type Purpose = 'aluguel' | 'venda';

export type Feature = 'pe-na-areia' | 'vista-mar' | 'quadrado' | 'condominio' | 'piscina';

export interface Property {
  id: string;
  code: string;
  name: { pt: string; en: string };
  purpose: Purpose[];
  location: string;
  suites: number;
  guests: number;
  baths: number;
  area: string;
  price: { pt: string; en: string };
  priceLow?: { pt: string; en: string };
  carnaval?: { pt: string; en: string };
  reveillon?: { pt: string; en: string };
  salePrice?: { pt: string; en: string };
  /** Nota de temporada exibida no tarifário (ex.: meses de alta/baixa). */
  seasonHigh?: { pt: string; en: string };
  seasonLow?: { pt: string; en: string };
  image: string;
  gallery: string[];
  featured?: boolean;
  amenities: { pt: string[]; en: string[] };
  description: { pt: string; en: string };
  /** Staff específico do imóvel (conforme PDF). Se ausente, usa o padrão do site. */
  staff?: { pt: string[]; en: string[] };
  /** Informações operacionais (regras, taxas, staff descrito em texto) exibidas em "Informações". */
  notes?: { pt: string[]; en: string[] };
  /** Detalhes de localização em texto (condomínio, rua, quadra, lote etc.) exibidos na seção "Localização". */
  locationDetail?: { pt: string; en: string };
  /** Características usadas nas caixinhas do filtro "Mais filtros". Se ausente, são derivadas automaticamente. */
  features?: Feature[];
}

export const PROPERTIES: Property[] = [];


// Casas com cadastro completo validado pelo proprietário
const NAOCA: Property = {
  id: 'casa-naoca', code: 'TBA-200', name: { pt: 'Casa Naoca', en: 'Casa Naoca' },
  purpose: ['aluguel'], location: 'Praia de Itapororoca', suites: 6, guests: 12, baths: 6, area: '—',
  price: { pt: 'R$ 31.000 / diária', en: 'R$ 31,000 / night' },
  priceLow: { pt: 'R$ 19.500 / diária', en: 'R$ 19,500 / night' },
  reveillon: { pt: 'R$ 605.000', en: 'R$ 605,000' },
  image: '/img/naoca/01.jpg',
  gallery: ['/img/naoca/01.webp','/img/naoca/02.webp','/img/naoca/03.webp','/img/naoca/04.webp','/img/naoca/05.webp','/img/naoca/06.webp','/img/naoca/07.webp','/img/naoca/08.webp','/img/naoca/09.webp','/img/naoca/10.webp','/img/naoca/11.webp','/img/naoca/12.webp','/img/naoca/13.webp','/img/naoca/14.webp','/img/naoca/15.webp','/img/naoca/16.webp','/img/naoca/17.webp','/img/naoca/18.webp','/img/naoca/19.webp','/img/naoca/20.webp','/img/naoca/21.webp','/img/naoca/22.webp','/img/naoca/23.webp','/img/naoca/24.webp','/img/naoca/25.webp','/img/naoca/26.webp','/img/naoca/27.webp','/img/naoca/28.webp','/img/naoca/29.webp','/img/naoca/30.webp'], featured: true,
  amenities: {
    pt: ['Pé na areia', 'Piscina', 'Deck de madeira', 'Espaços para massagem e relaxamento', 'Jardim tropical', 'Sala de estar e TV', 'Cozinha equipada', 'Wi-Fi', 'Ar-condicionado e ventiladores', 'Estacionamento', 'Lavanderia', 'Roupa de cama, banho e praia', 'Espreguiçadeiras e ombrelones', 'Sky', 'Lavabo'],
    en: ['Beachfront', 'Pool', 'Wooden deck', 'Massage and relaxation areas', 'Tropical garden', 'Living and TV rooms', 'Equipped kitchen', 'Wi-Fi', 'Air conditioning and ceiling fans', 'Parking', 'Laundry', 'Bed, bath and beach linen', 'Loungers and umbrellas', 'Sky TV', 'Guest bathroom'],
  },
  description: {
    pt: 'Entre o mar cristalino de Itapororoca e a exuberância da Mata Atlântica, a Casa Naoca oferece uma experiência rara de privacidade, natureza e autenticidade. Implantada em um amplo terreno à beira-mar, a propriedade foi concebida para integrar arquitetura, paisagem e bem-estar em perfeita harmonia.\n\nCom capacidade para até 12 hóspedes em 6 suítes, a casa convida a viver Trancoso de forma leve e desconectada do ritmo cotidiano. A poucos passos da areia, proporciona o privilégio de despertar com o som do mar e caminhar por uma das praias mais preservadas da região. A piscina, cercada pela vegetação nativa, é um refúgio perfeito para os dias de sol.\n\nA decoração valoriza elementos naturais, materiais nobres e referências da cultura brasileira, criando ambientes acolhedores e atemporais. Ideal para famílias e grupos de amigos que desejam vivenciar Trancoso em sua essência.',
    en: 'Between the crystal-clear sea of Itapororoca and the exuberance of the Atlantic Forest, Casa Naoca offers a rare experience of privacy, nature and authenticity. Set on a wide beachfront plot, the property was designed to integrate architecture, landscape and well-being in perfect harmony.\n\nHosting up to 12 guests in 6 suites, the house invites you to live Trancoso lightly, away from the everyday rhythm. A few steps from the sand, it offers the privilege of waking to the sound of the sea and walking along one of the region\'s most preserved beaches. The pool, surrounded by native vegetation, is a perfect retreat on sunny days.\n\nThe décor values natural elements, noble materials and references to Brazilian culture, creating welcoming and timeless spaces. Ideal for families and groups of friends who want to experience Trancoso at its essence.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha, 1 barman e 1 caseiro/jardineiro.','Observações: não é permitida a entrada de animais de estimação. Locação mínima de 5 diárias. Réveillon: pacote de 10 dias R$ 605.000. Taxa de serviço: 10%.'], en: ['Staff: 2 housekeepers, 1 cook, 1 kitchen assistant, 1 bartender and 1 caretaker/gardener.','Notes: no pets allowed. Minimum stay of 5 nights. New Year\'s Eve: 10-day package R$ 605,000. Service fee: 10%.'] },
};

const CASA71: Property = {
  id: 'casa-71', code: 'TBA-201', name: { pt: 'Casa 71', en: 'Casa 71' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Golf', suites: 7, guests: 14, baths: 7, area: '1.200 m²',
  price: { pt: 'R$ 16.000 / diária', en: 'R$ 16,000 / night' },
  priceLow: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'De abril a novembro', en: 'April to November' },
  carnaval: { pt: 'R$ 120.000', en: 'R$ 120,000' },
  salePrice: { pt: 'R$ 28.000.000', en: 'R$ 28,000,000' },
  image: '/img/casa71/02.jpg',
  gallery: ['/img/casa71/02.webp','/img/casa71/01.webp','/img/casa71/03.webp','/img/casa71/04.webp','/img/casa71/05.webp','/img/casa71/06.webp','/img/casa71/07.webp','/img/casa71/08.webp','/img/casa71/09.webp','/img/casa71/10.webp','/img/casa71/11.webp','/img/casa71/12.webp','/img/casa71/13.webp','/img/casa71/14.webp','/img/casa71/15.webp','/img/casa71/16.webp','/img/casa71/17.webp','/img/casa71/18.webp','/img/casa71/19.webp','/img/casa71/20.webp','/img/casa71/21.webp','/img/casa71/22.webp'], featured: true,
  amenities: {
    pt: ['Duas piscinas (uma aquecida)', 'Lounge com vista para o mar', 'Espaço gourmet completo', 'Churrasqueira', 'Academia equipada', 'Adega e cervejeira', 'Cozinha equipada', 'Wi-Fi', 'Ar-condicionado em todas as suítes', 'Frigobar nas suítes', 'Lavanderia', 'Roupa de cama, banho e praia', 'Apoio de praia', 'Condomínio fechado com segurança'],
    en: ['Two pools (one heated)', 'Lounge with ocean view', 'Full gourmet area', 'Barbecue', 'Equipped gym', 'Wine cellar and beer fridge', 'Equipped kitchen', 'Wi-Fi', 'Air conditioning in all suites', 'Minibar in suites', 'Laundry', 'Bed, bath and beach linen', 'Beach support', 'Gated community with security'],
  },
  description: {
    pt: 'Suspensa entre o verde do campo de golfe e o azul do mar, a Casa 71 foi concebida para quem valoriza espaço, privacidade e uma conexão constante com a paisagem de Trancoso. Localizada em uma das áreas mais privilegiadas do Terravista Golf, combina arquitetura marcante, ambientes amplos e uma atmosfera elegante.\n\nCom aproximadamente 1.200 m² de área construída e capacidade para até 14 hóspedes, a casa se destaca pela integração entre os espaços internos e externos. Os ambientes sociais se abrem para amplos decks, áreas de convivência e duas piscinas.\n\nInspirada na leveza das embarcações clássicas e assinada pela arquiteta Ana Paula Rohlfs, apresenta linguagem arquitetônica sofisticada, com materiais naturais e uma relação harmoniosa com a natureza. O grande destaque é o lounge com vista para o mar e para as falésias da região.',
    en: 'Suspended between the green of the golf course and the blue of the sea, Casa 71 was designed for those who value space, privacy and a constant connection with the Trancoso landscape. Located in one of the most privileged areas of Terravista Golf, it combines striking architecture, spacious rooms and an elegant atmosphere.\n\nWith approximately 1,200 m² of built area and capacity for up to 14 guests, the house stands out for its indoor-outdoor integration. Social areas open onto wide decks, living areas and two pools.\n\nInspired by the lightness of classic vessels and designed by architect Ana Paula Rohlfs, it presents a sophisticated architectural language with natural materials and a harmonious relationship with nature. The highlight is the lounge overlooking the sea and the region\'s cliffs.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha e serviço de apoio de praia.','Carnaval: pacote de 5 diárias R$ 120.000 — disponível para 2027. Réveillon: pacote de 10 diárias R$ 650.000 — indisponível. Taxa de serviço: 10%.'], en: ['Staff: 2 housekeepers, 1 cook, 1 kitchen assistant and beach support service.','Carnival: 5-night package R$ 120,000 — available for 2027. New Year\'s Eve: 10-night package R$ 650,000 — unavailable. Service fee: 10%.'] },
};

const CAJU: Property = {
  id: 'casa-caju', code: 'TBA-202', name: { pt: 'Casa Caju', en: 'Casa Caju' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 8, area: '1.090 m²',
  price: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  priceLow: { pt: 'R$ 11.000 / diária', en: 'R$ 11,000 / night' },
  reveillon: { pt: 'R$ 495.000', en: 'R$ 495,000' },
  image: '/img/caju/01.jpg',
  gallery: ['/img/caju/01.webp','/img/caju/02.webp','/img/caju/03.webp','/img/caju/04.webp','/img/caju/05.webp','/img/caju/06.webp','/img/caju/07.webp','/img/caju/08.webp','/img/caju/09.webp','/img/caju/10.webp','/img/caju/11.webp','/img/caju/12.webp','/img/caju/13.webp','/img/caju/14.webp','/img/caju/15.webp','/img/caju/16.webp','/img/caju/17.webp','/img/caju/18.webp','/img/caju/19.webp','/img/caju/20.webp','/img/caju/21.webp','/img/caju/22.webp'], featured: false,
  amenities: {
    pt: ['Piscina com deck de pedra', 'Sala de estar com pé-direito duplo', 'Cozinha gourmet integrada', 'Mezanino com sala de TV e jogos', 'Ampla varanda', 'Suítes com closet e banheira', 'Chuveiros interno e externo', 'Área de serviço completa', 'Estacionamento para 2 veículos', 'Condomínio fechado com segurança'],
    en: ['Pool with stone deck', 'Double-height living room', 'Integrated gourmet kitchen', 'Mezzanine with TV and games room', 'Wide veranda', 'Suites with walk-in closet and bathtub', 'Indoor and outdoor showers', 'Full service area', 'Parking for 2 vehicles', 'Gated community with security'],
  },
  description: {
    pt: 'Localizada no exclusivo condomínio Altos de Trancoso, a Casa Caju combina arquitetura contemporânea, elementos regionais e ambientes cuidadosamente integrados à natureza.\n\nCom seis suítes amplas e confortáveis, a residência foi pensada para receber famílias e grupos que valorizam privacidade, conforto e momentos de convivência. Os diferentes blocos garantem independência entre os ambientes, enquanto as áreas sociais amplas proporcionam uma experiência acolhedora e sofisticada.\n\nSuíte Master (Bloco 02): cama king-size, escritório, closet e banheira. Segunda Suíte Master (Bloco 04): cama king-size, escritório, closet, banheira e chuveiros interno e externo. Bloco 03: duas suítes com cama queen-size, closet e chuveiros interno e externo. Bloco 05: duas suítes com duas camas de solteiro, sofá-cama de casal, closet e chuveiros interno e externo.\n\nSituada em um dos condomínios mais desejados de Trancoso, oferece privacidade, segurança e fácil acesso ao Quadrado e às principais praias da região.',
    en: 'Located in the exclusive Altos de Trancoso condominium, Casa Caju combines contemporary architecture, regional elements and spaces carefully integrated into nature.\n\nWith six spacious and comfortable suites, the residence was designed to welcome families and groups who value privacy, comfort and moments together. The different blocks ensure independence between spaces, while the generous social areas offer a welcoming and sophisticated experience.\n\nMaster Suite (Block 02): king-size bed, office, walk-in closet and bathtub. Second Master Suite (Block 04): king-size bed, office, walk-in closet, bathtub and indoor and outdoor showers. Block 03: two suites with queen-size bed, walk-in closet and indoor and outdoor showers. Block 05: two suites with two single beds, double sofa bed, walk-in closet and indoor and outdoor showers.\n\nSet in one of Trancoso\'s most desired condominiums, it offers privacy, security and easy access to the Quadrado and the region\'s main beaches.',
  },
  notes: { pt: ['Staff: 1 cozinheira, 1 ajudante e 2 camareiras.'], en: ['Staff: 1 cook, 1 assistant and 2 housekeepers.'] },
};

const SANMARCO: Property = {
  id: 'casa-san-marco', code: 'TBA-203', name: { pt: 'Casa San Marco', en: 'Casa San Marco' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 9, guests: 18, baths: 9, area: '800 m² · terreno 15.000 m²',
  price: { pt: 'US$ 5.500 / diária', en: 'US$ 5,500 / night' },
  priceLow: { pt: 'US$ 3.500 / diária', en: 'US$ 3,500 / night' },
  carnaval: { pt: 'US$ 30.000', en: 'US$ 30,000' },
  image: '/img/sanmarco/01.jpg',
  gallery: ['/img/sanmarco/01.webp','/img/sanmarco/02.webp','/img/sanmarco/03.webp','/img/sanmarco/04.webp','/img/sanmarco/05.webp','/img/sanmarco/06.webp','/img/sanmarco/07.webp','/img/sanmarco/08.webp','/img/sanmarco/09.webp','/img/sanmarco/10.webp','/img/sanmarco/11.webp','/img/sanmarco/12.webp','/img/sanmarco/13.webp','/img/sanmarco/14.webp','/img/sanmarco/15.webp','/img/sanmarco/16.webp','/img/sanmarco/17.webp','/img/sanmarco/18.webp','/img/sanmarco/19.webp','/img/sanmarco/20.webp','/img/sanmarco/21.webp','/img/sanmarco/22.webp','/img/sanmarco/23.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia com acesso direto à praia', 'Piscina e hidromassagem', 'Sauna', 'Adega climatizada', 'Área gourmet com churrasqueira', 'Sala de estar e sala de TV', 'Deck', 'Máquina de gelo e cervejeira', 'Lavanderia', 'Cozinha totalmente equipada', 'Apoio completo de praia', 'Roupas de cama, mesa e banho', 'Toalhas para piscina', 'Caixa de som e TV Sky', 'Estacionamento'],
    en: ['Beachfront with direct beach access', 'Pool and hot tub', 'Sauna', 'Climate-controlled wine cellar', 'Gourmet area with barbecue', 'Living room and TV room', 'Deck', 'Ice maker and beer fridge', 'Laundry', 'Fully equipped kitchen', 'Full beach support', 'Bed, table and bath linen', 'Pool towels', 'Sound system and Sky TV', 'Parking'],
  },
  description: {
    pt: 'Em um dos trechos mais exclusivos do litoral de Trancoso, a Casa San Marco está localizada em frente ao mar, cercada por um extenso coqueiral e com acesso direto à praia, ao lado do Rio da Barra.\n\nAssinada pelo renomado arquiteto e designer Sig Bergamin, a residência combina arquitetura contemporânea, madeira natural e ambientes amplos que valorizam a integração com a paisagem. Cada espaço foi projetado para proporcionar conforto, privacidade e uma experiência de hospedagem única, onde o som do mar e a natureza fazem parte da rotina.\n\nCom nove suítes climatizadas distribuídas em uma propriedade de 15.000 m², a casa oferece uma estrutura completa para famílias e grupos que desejam desfrutar de Trancoso com exclusividade, serviço impecável e total privacidade.',
    en: 'In one of the most exclusive stretches of the Trancoso coastline, Casa San Marco sits oceanfront, surrounded by an extensive coconut grove and with direct beach access, next to the Rio da Barra.\n\nDesigned by renowned architect and designer Sig Bergamin, the residence combines contemporary architecture, natural wood and spacious rooms that value integration with the landscape. Every space was designed to provide comfort, privacy and a unique hosting experience, where the sound of the sea and nature are part of the routine.\n\nWith nine air-conditioned suites spread over a 15,000 m² property, the house offers a complete structure for families and groups who want to enjoy Trancoso with exclusivity, impeccable service and total privacy.',
  },
  notes: { pt: ['Staff incluído: 1 cozinheira, 2 arrumadeiras, 1 auxiliar de cozinha e piscineiro/jardineiro.','Taxa de serviço: 10%. Valores sujeitos a alterações sem aviso prévio.'], en: ['Staff included: 1 cook, 2 housekeepers, 1 kitchen assistant and pool attendant/gardener.','Service fee: 10%. Prices subject to change without prior notice.'] },
};

const CASA14: Property = {
  id: 'casa-14', code: 'TBA-204', name: { pt: 'Casa 14', en: 'Casa 14' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 7, area: '640 m²',
  price: { pt: 'R$ 15.000 / diária', en: 'R$ 15,000 / night' },
  priceLow: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  reveillon: { pt: 'R$ 650.000', en: 'R$ 650,000' },
  image: '/img/casa14/23.jpg',
  gallery: ['/img/casa14/01.webp','/img/casa14/02.webp','/img/casa14/03.webp','/img/casa14/04.webp','/img/casa14/05.webp','/img/casa14/06.webp','/img/casa14/07.webp','/img/casa14/08.webp','/img/casa14/09.webp','/img/casa14/10.webp','/img/casa14/11.webp','/img/casa14/12.webp','/img/casa14/13.webp','/img/casa14/14.webp','/img/casa14/15.webp','/img/casa14/16.webp','/img/casa14/17.webp','/img/casa14/18.webp','/img/casa14/19.webp','/img/casa14/20.webp','/img/casa14/21.webp','/img/casa14/22.webp','/img/casa14/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina com hidromassagem', 'Piscina com telão', 'Área gourmet', 'Churrasqueira a gás', 'Cozinha equipada', 'Adega e cervejeira', 'Ar-condicionado', 'Mosquiteiros', 'Lavanderia', 'Roupas de cama, mesa e banho', 'Toalhas de piscina', 'Caixa de som e TV Sky', 'Estrutura completa de praia (cadeiras, tenda e coolers)', 'Estacionamento', 'A 8 min a pé do elevador de acesso à praia'],
    en: ['Pool with hot tub', 'Pool with outdoor screen', 'Gourmet area', 'Gas barbecue', 'Equipped kitchen', 'Wine cellar and beer fridge', 'Air conditioning', 'Mosquito nets', 'Laundry', 'Bed, table and bath linen', 'Pool towels', 'Sound system and Sky TV', 'Full beach gear (chairs, tent and coolers)', 'Parking', '8 min walk to the beach elevator'],
  },
  description: {
    pt: 'Localizada no exclusivo condomínio Terravista Golf, em Trancoso, a Casa 14 combina arquitetura sofisticada, conforto e integração com a natureza. Com projeto assinado por David Bastos, a residência traduz a elegância contemporânea em uma atmosfera leve, acolhedora e genuinamente baiana.\n\nCom 640 m² de área construída, dispõe de 6 suítes amplas e acomoda até 12 hóspedes. Os ambientes foram planejados para proporcionar privacidade, bem-estar e uma experiência exclusiva.\n\nA sala de estar, sala de jantar, varanda e área gourmet integram-se ao deck e à piscina com hidromassagem, criando um ambiente ideal para descanso e confraternização.\n\nA casa está localizada a aproximadamente 8 minutos a pé do elevador do condomínio, que oferece acesso à praia.',
    en: 'Located in the exclusive Terravista Golf condominium in Trancoso, Casa 14 combines sophisticated architecture, comfort and integration with nature. Designed by David Bastos, the residence translates contemporary elegance into a light, welcoming and genuinely Bahian atmosphere.\n\nWith 640 m² of built area, it offers 6 spacious suites and accommodates up to 12 guests. The spaces were planned to provide privacy, well-being and an exclusive experience.\n\nThe living room, dining room, veranda and gourmet area integrate with the deck and the pool with hot tub, creating an ideal setting for rest and gathering.\n\nThe house is located approximately 8 minutes on foot from the condominium elevator, which provides beach access.',
  },
  notes: { pt: ['Staff: cozinheira, ajudante de cozinha, camareira, jardineiro e piscineiro. Taxa de serviço: 10%.'], en: ['Staff: cook, kitchen assistant, housekeeper, gardener and pool attendant. Service fee: 10%.'] },
};

const CASA09: Property = {
  id: 'casa-09-itapororoca', code: 'TBA-205', name: { pt: 'Casa 09 Aldeia Itapororoca', en: 'Casa 09 Aldeia Itapororoca' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 7, guests: 14, baths: 8, area: '550 m²',
  price: { pt: 'R$ 27.500 / diária', en: 'R$ 27,500 / night' },
  priceLow: { pt: 'R$ 19.500 / diária', en: 'R$ 19,500 / night' },
  reveillon: { pt: 'R$ 850.000', en: 'R$ 850,000' },
  image: '/img/casa09/01.jpg',
  gallery: ['/img/casa09/01.webp','/img/casa09/02.webp','/img/casa09/03.webp','/img/casa09/04.webp','/img/casa09/05.webp','/img/casa09/06.webp','/img/casa09/07.webp','/img/casa09/08.webp','/img/casa09/09.webp','/img/casa09/10.webp','/img/casa09/11.webp','/img/casa09/12.webp','/img/casa09/13.webp','/img/casa09/14.webp','/img/casa09/15.webp','/img/casa09/16.webp','/img/casa09/17.webp','/img/casa09/18.webp','/img/casa09/19.webp','/img/casa09/20.webp','/img/casa09/21.webp','/img/casa09/22.webp','/img/casa09/23.webp','/img/casa09/24.webp','/img/casa09/25.webp','/img/casa09/26.webp','/img/casa09/27.webp','/img/casa09/28.webp','/img/casa09/29.webp'], featured: false,
  amenities: {
    pt: ['Piscina com deck', 'Área gourmet com churrasqueira', 'Sala de estar ampla', 'Sala de TV', 'Cozinha completa', 'Lavabo', 'Ar-condicionado nas suítes', 'Ventiladores de teto', 'Wi-Fi', 'Varandas integradas', 'Acesso privativo à Praia de Itapororoca', 'Condomínio fechado com segurança'],
    en: ['Pool with deck', 'Gourmet area with barbecue', 'Spacious living room', 'TV room', 'Full kitchen', 'Guest bathroom', 'Air conditioning in suites', 'Ceiling fans', 'Wi-Fi', 'Integrated verandas', 'Private access to Itapororoca Beach', 'Gated community with security'],
  },
  description: {
    pt: 'Localizada no condomínio Aldeia Itapororoca, esta residência foi pensada para receber famílias e grupos que buscam conforto, privacidade e contato direto com a natureza. Com arquitetura acolhedora e ambientes bem distribuídos, a casa oferece uma experiência tranquila e funcional.\n\nCom 550 m² de área construída, dispõe de 7 suítes amplas com ar-condicionado e ventilador de teto, garantindo conforto em todos os ambientes. A casa possui sala de estar ampla, sala de TV, sala de jantar integrada e cozinha completa, além de área gourmet com churrasqueira, ideal para momentos de convivência.\n\nA piscina com deck se conecta harmoniosamente à área social, criando um espaço perfeito para relaxar e aproveitar o clima de Trancoso. O condomínio oferece segurança e acesso exclusivo à Praia de Itapororoca, uma das mais belas da região.',
    en: 'Located in the Aldeia Itapororoca condominium, this residence was designed to welcome families and groups seeking comfort, privacy and direct contact with nature. With welcoming architecture and well-distributed spaces, the house offers a peaceful and functional experience.\n\nWith 550 m² of built area, it offers 7 spacious suites with air conditioning and ceiling fans, ensuring comfort throughout. The house features a spacious living room, TV room, integrated dining room and full kitchen, plus a gourmet area with barbecue — ideal for moments together.\n\nThe pool with deck connects harmoniously to the social area, creating a perfect space to relax and enjoy the Trancoso climate. The condominium offers security and exclusive access to Itapororoca Beach, one of the most beautiful in the region.',
  },
  notes: { pt: ['Staff: cozinheira, ajudante de cozinha e camareira. Taxa de serviço: 10%.'], en: ['Staff: cook, kitchen assistant and housekeeper. Service fee: 10%.'] },
};

const BOSSA: Property = {
  id: 'casa-bossa-nova-alto', code: 'TBA-206', name: { pt: 'Casa Bossa Nova', en: 'Casa Bossa Nova' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 7, area: '680 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/bossa/01.jpg',
  gallery: ['/img/bossa/01.webp','/img/bossa/02.webp','/img/bossa/03.webp','/img/bossa/04.webp','/img/bossa/05.webp','/img/bossa/06.webp','/img/bossa/07.webp','/img/bossa/08.webp','/img/bossa/09.webp','/img/bossa/10.webp','/img/bossa/11.webp','/img/bossa/12.webp','/img/bossa/13.webp','/img/bossa/14.webp','/img/bossa/15.webp','/img/bossa/16.webp','/img/bossa/17.webp','/img/bossa/18.webp','/img/bossa/19.webp','/img/bossa/20.webp','/img/bossa/21.webp','/img/bossa/22.webp','/img/bossa/23.webp','/img/bossa/24.webp','/img/bossa/25.webp','/img/bossa/26.webp','/img/bossa/27.webp','/img/bossa/28.webp','/img/bossa/29.webp','/img/bossa/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Ofurô', 'Redário', 'Sala de massagem', 'Espaço gourmet', 'Vista para o mar', 'Sala de estar', 'Sala de TV', 'Cozinha completa', 'Ar-condicionado em todas as suítes', 'Mosquiteiro e secador', 'Varandas amplas', 'Condomínio fechado com segurança'],
    en: ['Pool', 'Hot tub', 'Hammock area', 'Massage room', 'Gourmet area', 'Ocean view', 'Living room', 'TV room', 'Full kitchen', 'Air conditioning in all suites', 'Mosquito net and hairdryer', 'Wide verandas', 'Gated community with security'],
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, a Casa Bossa Nova une arquitetura contemporânea, natureza e sofisticação. Assinada por Julia Bittencourt, com interiores de Luciana Lanna, oferece uma atmosfera acolhedora e elegante para até 14 hóspedes.\n\nSão 7 suítes distribuídas em 661,92 m² de área construída, em um terreno de 1.675 m², com piscina, ofurô, redário, sala de massagem, espaço gourmet, vista para o mar e amplas áreas de convivência.\n\nSuíte Master: cama Super King, TV Smart, frigobar, closet, varanda com spa, ofurô e lounge com vista para o mar. Suíte 02: cama King, closet e varanda com vista para o jardim. Suíte 03: cama King, frigobar, closet e varanda com vista para o jardim. Suíte 04: cama King e varanda integrada à piscina. Suíte 05 (Bangalô): cama King e varanda com vista para a piscina. Suítes 06 e 07 (Casinha): cama Queen e varanda para o jardim — a 07 com TV Smart e ofurô. Todas com ar-condicionado, mosquiteiro e secador de cabelo.',
    en: 'Located in the Altos de Trancoso condominium, Casa Bossa Nova combines contemporary architecture, nature and sophistication. Designed by Julia Bittencourt, with interiors by Luciana Lanna, it offers a welcoming and elegant atmosphere for up to 14 guests.\n\nIts 7 suites are spread over 661.92 m² of built area on a 1,675 m² plot, with pool, hot tub, hammock area, massage room, gourmet space, ocean view and generous living areas.\n\nMaster Suite: Super King bed, Smart TV, minibar, walk-in closet, veranda with spa, hot tub and lounge with ocean view. Suite 02: King bed, walk-in closet and garden-view veranda. Suite 03: King bed, minibar, walk-in closet and garden-view veranda. Suite 04: King bed and veranda integrated with the pool. Suite 05 (Bungalow): King bed and pool-view veranda. Suites 06 and 07 (Guest house): Queen bed and garden veranda — 07 with Smart TV and hot tub. All with air conditioning, mosquito net and hairdryer.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, cozinheira, ajudante de cozinha, gerente da casa e jardineiro. Taxa de serviço: 10%. Feriados: diária de alta temporada.'], en: ['Staff: 2 housekeepers, cook, kitchen assistant, house manager and gardener. Service fee: 10%. Holidays: high season nightly rate.'] },
};

const TUA: Property = {
  id: 'casa-tua', code: 'TBA-207', name: { pt: 'Casa Tua', en: 'Casa Tua' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 3, guests: 8, baths: 3, area: '980 m² · terreno 1.650 m²',
  price: { pt: 'R$ 3.400 / diária', en: 'R$ 3,400 / night' },
  priceLow: { pt: 'R$ 2.900 / diária', en: 'R$ 2,900 / night' },
  carnaval: { pt: 'R$ 30.000', en: 'R$ 30,000' },
  reveillon: { pt: 'R$ 120.000', en: 'R$ 120,000' },
  image: '/img/tua/01.jpg',
  gallery: ['/img/tua/01.webp','/img/tua/02.webp','/img/tua/03.webp','/img/tua/04.webp','/img/tua/05.webp','/img/tua/06.webp','/img/tua/07.webp','/img/tua/08.webp','/img/tua/09.webp','/img/tua/10.webp','/img/tua/11.webp','/img/tua/12.webp','/img/tua/13.webp','/img/tua/14.webp','/img/tua/15.webp','/img/tua/16.webp','/img/tua/17.webp','/img/tua/18.webp','/img/tua/19.webp','/img/tua/20.webp','/img/tua/21.webp','/img/tua/22.webp','/img/tua/23.webp','/img/tua/24.webp','/img/tua/25.webp','/img/tua/26.webp','/img/tua/27.webp','/img/tua/28.webp','/img/tua/29.webp','/img/tua/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Espaço gourmet', 'Churrasqueira', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Jardim', 'Espreguiçadeiras e ombrelones', 'Estacionamento', 'Lavanderia', 'Quarto de apoio'],
    en: ['Pool', 'Gourmet area', 'Barbecue', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Garden', 'Loungers and umbrellas', 'Parking', 'Laundry', 'Staff room'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Trancoso, a Casa Tua combina arquitetura contemporânea, simplicidade e conforto em perfeita sintonia com a natureza. A aproximadamente 15 minutos a pé do Quadrado, oferece privacidade, segurança e fácil acesso às principais atrações de Trancoso.\n\nCom projeto de Nadia Kaleses, paisagismo de Ulisse Baggi e decoração de Bianca Vilela, a residência possui 980 m² de área construída em um terreno de 1.650 m² e acomoda confortavelmente até 8 hóspedes em 3 suítes. A suíte master está localizada na casa principal, enquanto as outras duas suítes ocupam bangalôs independentes próximos à piscina.\n\nOs ambientes sociais integram sala de estar, sala de jantar, sala de TV, cozinha equipada e espaço gourmet, conectando-se à piscina e aos jardins em uma atmosfera acolhedora e sofisticada.',
    en: 'Located in the exclusive Altos de Trancoso condominium, Casa Tua combines contemporary architecture, simplicity and comfort in perfect harmony with nature. Approximately 15 minutes on foot from the Quadrado, it offers privacy, security and easy access to Trancoso\'s main attractions.\n\nDesigned by Nadia Kaleses, with landscaping by Ulisse Baggi and decoration by Bianca Vilela, the residence has 980 m² of built area on a 1,650 m² plot and comfortably accommodates up to 8 guests in 3 suites. The master suite is in the main house, while the other two suites occupy independent bungalows near the pool.\n\nThe social areas integrate living room, dining room, TV room, equipped kitchen and gourmet space, connecting to the pool and gardens in a welcoming and sophisticated atmosphere.',
  },
  notes: { pt: ['Staff: 1 arrumadeira e 1 caseiro. Observação: não são permitidos animais de estimação.'], en: ['Staff: 1 housekeeper and 1 caretaker. Note: no pets allowed.'] },
};

const IMBIRUCU: Property = {
  id: 'casa-imbirucu', code: 'TBA-208', name: { pt: 'Casa Imbiruçu', en: 'Casa Imbiruçu' },
  purpose: ['aluguel'], location: 'Praia de Itapororoca', suites: 5, guests: 10, baths: 5, area: 'terreno 10.000 m²',
  price: { pt: 'R$ 16.500 / diária', en: 'R$ 16,500 / night' },
  priceLow: { pt: 'R$ 13.500 / diária', en: 'R$ 13,500 / night' },
  carnaval: { pt: 'R$ 62.500', en: 'R$ 62,500' },
  image: '/img/imbirucu/01.jpg',
  gallery: ['/img/imbirucu/01.webp','/img/imbirucu/02.webp','/img/imbirucu/03.webp','/img/imbirucu/04.webp','/img/imbirucu/05.webp','/img/imbirucu/06.webp','/img/imbirucu/07.webp','/img/imbirucu/08.webp','/img/imbirucu/09.webp','/img/imbirucu/10.webp','/img/imbirucu/11.webp','/img/imbirucu/12.webp','/img/imbirucu/13.webp','/img/imbirucu/14.webp','/img/imbirucu/15.webp','/img/imbirucu/16.webp','/img/imbirucu/17.webp','/img/imbirucu/18.webp','/img/imbirucu/19.webp','/img/imbirucu/20.webp','/img/imbirucu/21.webp','/img/imbirucu/22.webp','/img/imbirucu/23.webp','/img/imbirucu/24.webp','/img/imbirucu/25.webp','/img/imbirucu/26.webp','/img/imbirucu/27.webp','/img/imbirucu/28.webp','/img/imbirucu/29.webp','/img/imbirucu/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia com acesso direto à praia', 'Piscina privativa', 'Sauna', 'Mirante exclusivo', 'Espaço gourmet', 'Churrasqueira', 'Sala de estar e jantar', 'Cozinha equipada', 'Lavanderia', 'Poço artesiano', 'Estacionamento', 'Mais de 100 m de frente para o mar'],
    en: ['Beachfront with direct beach access', 'Private pool', 'Sauna', 'Exclusive lookout', 'Gourmet area', 'Barbecue', 'Living and dining rooms', 'Equipped kitchen', 'Laundry', 'Artesian well', 'Parking', 'Over 100 m of ocean frontage'],
  },
  description: {
    pt: 'Com mais de 100 metros de frente para o mar, a Casa Imbiruçu é um refúgio pé na areia localizado em um dos trechos mais exclusivos da Praia de Itapororoca, em Trancoso. Construída sobre palafitas, integra-se perfeitamente à Mata Atlântica, oferecendo privacidade, sofisticação e contato direto com a natureza.\n\nA propriedade acomoda até 10 hóspedes em cinco dormitórios, em um terreno de 10.000 m², e conta com piscina, sauna, mirante exclusivo, espaço gourmet e acesso direto à praia.\n\nSuíte Master: 1 cama King Size, ar-condicionado e secador de cabelo. Suítes 02 e 03: 1 cama Queen Size cada, ar-condicionado e secador de cabelo. Quarto 01: 2 camas de solteiro conversíveis em cama de casal. Quarto 02: 2 bicamas de solteiro.',
    en: 'With more than 100 meters of ocean frontage, Casa Imbiruçu is a beachfront retreat located in one of the most exclusive stretches of Itapororoca Beach in Trancoso. Built on stilts, it integrates perfectly with the Atlantic Forest, offering privacy, sophistication and direct contact with nature.\n\nThe property accommodates up to 10 guests in five bedrooms, on a 10,000 m² plot, and features a pool, sauna, exclusive lookout, gourmet area and direct beach access.\n\nMaster Suite: 1 King Size bed, air conditioning and hairdryer. Suites 02 and 03: 1 Queen Size bed each, air conditioning and hairdryer. Bedroom 01: 2 single beds convertible into a double bed. Bedroom 02: 2 single trundle beds.',
  },
  notes: { pt: ['Staff: 1 cozinheira, 1 arrumadeira, 1 ajudante geral e 1 caseiro. Taxa de serviço: 10%.'], en: ['Staff: 1 cook, 1 housekeeper, 1 general assistant and 1 caretaker. Service fee: 10%.'] },
};

const CASA42: Property = {
  id: 'terravista-golf-casa-42', code: 'TBA-209', name: { pt: 'Terravista Golf — Casa 42', en: 'Terravista Golf — Casa 42' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 7, guests: 14, baths: 9, area: '920 m² · terreno 1.667 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'R$ 250.000 (7 diárias)', en: 'R$ 250,000 (7 nights)' },
  reveillon: { pt: 'R$ 980.000', en: 'R$ 980,000' },
  image: '/img/casa42/01.jpg',
  gallery: ['/img/casa42/01.webp','/img/casa42/02.webp','/img/casa42/03.webp','/img/casa42/04.webp','/img/casa42/05.webp','/img/casa42/06.webp','/img/casa42/07.webp','/img/casa42/08.webp','/img/casa42/09.webp','/img/casa42/10.webp','/img/casa42/11.webp','/img/casa42/12.webp','/img/casa42/13.webp','/img/casa42/14.webp','/img/casa42/15.webp','/img/casa42/16.webp','/img/casa42/17.webp','/img/casa42/18.webp','/img/casa42/19.webp','/img/casa42/20.webp','/img/casa42/21.webp','/img/casa42/22.webp','/img/casa42/23.webp','/img/casa42/24.webp','/img/casa42/25.webp','/img/casa42/26.webp','/img/casa42/27.webp','/img/casa42/28.webp','/img/casa42/29.webp','/img/casa42/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina aquecida com borda infinita', 'Jacuzzi', 'Sauna e chuveirão', 'Espaço gourmet em madeira Garapa', 'Churrasqueira, cervejeira, adega e máquina de gelo', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Deck e solário', 'Jardins exuberantes', 'Ar-condicionado nas 7 suítes', 'Smart TV e Wi-Fi', 'Estacionamento e lavanderia'],
    en: ['Heated infinity-edge pool', 'Jacuzzi', 'Sauna and outdoor shower', 'Gourmet area in Garapa wood', 'Barbecue, beer cooler, wine cellar and ice maker', 'Living, dining and TV rooms', 'Equipped kitchen', 'Deck and solarium', 'Lush gardens', 'Air conditioning in all 7 suites', 'Smart TV and Wi-Fi', 'Parking and laundry'],
  },
  description: {
    pt: 'Localizada no requintado Condomínio Villavista Golf, dentro do exclusivo Complexo Terravista, a Casa 42 é uma residência extraordinária projetada pelo renomado escritório David Bastos. A decoração e os quadros levam a assinatura de Valéria Calonge, enquanto o paisagismo foi concebido por Yapó, by Orsini. A propriedade ocupa um terreno de esquina com 1.667 m² e possui 920 m² de área construída, reunindo arquitetura contemporânea, materiais naturais, sofisticação e funcionalidade.\n\nDistribuída em dois pavimentos, a casa conta com sete suítes, incluindo duas suítes master — uma delas com aproximadamente 70 m². As áreas sociais integram sala de estar, sala de jantar e sala de TV, criando um ambiente amplo, acolhedor e harmônico para receber famílias e grupos de amigos.\n\nUm elegante corredor interno conduz ao amplo espaço gourmet, revestido em madeira Garapa, com mesa para 10 pessoas e ilha em Travertino com seis assentos. A cozinha gourmet é equipada com churrasqueira, cervejeira, frigobar, adega e máquina de gelo.\n\nNa área externa, a residência oferece piscina aquecida com borda infinita, jacuzzi, sauna, solário, deck e jardins exuberantes. Atrás da cozinha, um lavabo com detalhes em Pedra Moledo e pia esculpida em madeira Pequiá, além de sauna e chuveirão.\n\nConfiguração das suítes: Suítes 01 e 02 com 2 camas de solteiro cada; Suítes 03 e 04 com 1 cama de casal cada; Suítes 05 e 06 (Master) com 1 cama de casal, TV e varanda; Suíte 07 com 1 cama de casal, TV e varanda. Todas com ar-condicionado e secador de cabelo.',
    en: 'Located in the refined Villavista Golf Condominium, within the exclusive Terravista Complex, Casa 42 is an extraordinary residence designed by the renowned David Bastos studio. The decoration and artwork are signed by Valéria Calonge, while the landscaping was conceived by Yapó, by Orsini. The property occupies a 1,667 m² corner lot with 920 m² of built area, combining contemporary architecture, natural materials, sophistication and functionality.\n\nSpread over two floors, the house has seven suites, including two master suites — one of approximately 70 m². The social areas integrate living room, dining room and TV room, creating a spacious, welcoming and harmonious environment for families and groups of friends.\n\nAn elegant internal corridor leads to the generous gourmet space, clad in Garapa wood, with a table for 10 and a Travertine island with six seats. The gourmet kitchen is equipped with barbecue, beer cooler, minibar, wine cellar and ice maker.\n\nOutside, the residence offers a heated infinity-edge pool, jacuzzi, sauna, solarium, deck and lush gardens. Behind the kitchen, a guest bathroom with Moledo stone details and a sink carved in Pequiá wood, plus sauna and outdoor shower.\n\nSuite layout: Suites 01 and 02 with 2 single beds each; Suites 03 and 04 with 1 double bed each; Suites 05 and 06 (Master) with 1 double bed, TV and veranda; Suite 07 with 1 double bed, TV and veranda. All with air conditioning and hairdryer.',
  },
  notes: { pt: ['Staff: 1 cozinheira, 1 ajudante de cozinha, 1 camareira, 1 ajudante geral, jardineiro e piscineiro. Taxa de serviço: 10%.'], en: ['Staff: 1 cook, 1 kitchen assistant, 1 housekeeper, 1 general assistant, gardener and pool attendant. Service fee: 10%.'] },
};

const CASA61: Property = {
  id: 'terravista-golf-casa-61', code: 'TBA-210', name: { pt: 'Terravista Golf — Casa 61', en: 'Terravista Golf — Casa 61' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 7, area: '1.237 m² · terreno 2.793 m²',
  price: { pt: 'R$ 15.000 / diária', en: 'R$ 15,000 / night' },
  priceLow: { pt: 'R$ 14.000 / diária', en: 'R$ 14,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 550.000', en: 'R$ 550,000' },
  image: '/img/casa61/01.jpg',
  gallery: ['/img/casa61/01.webp','/img/casa61/02.webp','/img/casa61/03.webp','/img/casa61/04.webp','/img/casa61/05.webp','/img/casa61/06.webp','/img/casa61/07.webp','/img/casa61/08.webp','/img/casa61/09.webp','/img/casa61/10.webp','/img/casa61/11.webp','/img/casa61/12.webp','/img/casa61/13.webp','/img/casa61/14.webp','/img/casa61/15.webp','/img/casa61/16.webp','/img/casa61/17.webp','/img/casa61/18.webp','/img/casa61/19.webp','/img/casa61/20.webp','/img/casa61/21.webp','/img/casa61/22.webp','/img/casa61/23.webp','/img/casa61/24.webp','/img/casa61/25.webp','/img/casa61/26.webp','/img/casa61/27.webp','/img/casa61/28.webp','/img/casa61/29.webp','/img/casa61/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar do Rio da Barra', 'Piscina', 'Jacuzzi aquecida', 'Bar à beira da piscina', 'Área gourmet com forno de pizza e churrasqueira a gás', 'Deck de madeira com redes', 'Sala de estar e jantar', 'Cozinha equipada', 'Cervejeira, adega e máquina de gelo', 'Acesso exclusivo à praia pelo elevador do condomínio', 'Kit bebê completo', 'Gerador, Wi-Fi e TV Sky'],
    en: ['Ocean view over Rio da Barra', 'Pool', 'Heated jacuzzi', 'Poolside bar', 'Gourmet area with pizza oven and gas barbecue', 'Wooden deck with hammocks', 'Living and dining rooms', 'Equipped kitchen', 'Beer cooler, wine cellar and ice maker', 'Exclusive beach access via condominium elevator', 'Complete baby kit', 'Generator, Wi-Fi and Sky TV'],
  },
  description: {
    pt: 'Hospede-se em uma residência de alto padrão no exclusivo Terravista Golf Club, assinada pelo escritório MM Arquitetura, com decoração de Sara Afonso e projetada para integrar-se harmoniosamente à natureza de Trancoso. Recém-construída, possui vista para o mar do Rio da Barra, está ao lado do Teatro L\'Occitane e a poucos minutos da praia por acesso exclusivo do condomínio.\n\nImplantada em um terreno de 2.793 m², com 1.237 m² de área construída, reúne arquitetura contemporânea, ambientes amplos e iluminação natural. A área social integra sala de estar, sala de jantar, cozinha, área gourmet, bar e piscina. O amplo deck em madeira conta com sofás, redes e espaços de contemplação voltados para a mata e para o mar. A área gourmet, integrada à piscina, é ideal para reunir família e amigos.\n\nConfiguração das suítes: Suítes 01, 03 e 05 com 2 camas de solteiro conversíveis em cama de casal; Suítes 02, 04 e 06 com cama king size. Todas com mosquiteiro, armários, ar-condicionado e secador de cabelo.\n\nEstrutura de praia: 12 cadeiras de praia, tenda e coolers. Estrutura para crianças: kit bebê completo com berço, banheira e cadeira de alimentação, além de dois berços adicionais. Duas dependências para funcionários, sendo uma disponível para hóspedes mediante aviso prévio.',
    en: 'Stay in a high-end residence at the exclusive Terravista Golf Club, designed by MM Arquitetura, decorated by Sara Afonso and conceived to blend harmoniously into the nature of Trancoso. Newly built, it offers ocean views over Rio da Barra, sits next to the Teatro L\'Occitane and is just minutes from the beach via the condominium\'s exclusive access.\n\nSet on a 2,793 m² plot with 1,237 m² of built area, it combines contemporary architecture, generous spaces and natural light. The social area integrates living room, dining room, kitchen, gourmet area, bar and pool. The wide wooden deck features sofas, hammocks and contemplation spaces facing the forest and the sea. The gourmet area, connected to the pool, is ideal for gathering family and friends.\n\nSuite layout: Suites 01, 03 and 05 with 2 single beds convertible into a double bed; Suites 02, 04 and 06 with a king-size bed. All with mosquito net, wardrobes, air conditioning and hairdryer.\n\nBeach setup: 12 beach chairs, tent and coolers. For children: complete baby kit with crib, bathtub and high chair, plus two additional cribs. Two staff quarters, one available for guests upon prior notice.',
  },
  notes: { pt: ['Staff: 1 cozinheira, 1 ajudante de cozinha e 1 arrumadeira. Taxa de serviço: 10%.'], en: ['Staff: 1 cook, 1 kitchen assistant and 1 housekeeper. Service fee: 10%.'] },
};

const VILAS02: Property = {
  id: 'terravista-vilas-casa-02', code: 'TBA-211', name: { pt: 'Terravista Vilas — Casa 02', en: 'Terravista Vilas — Casa 02' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 3, guests: 6, baths: 3, area: '271 m² · terreno 550 m²',
  price: { pt: 'R$ 3.000 / diária', en: 'R$ 3,000 / night' },
  priceLow: { pt: 'R$ 2.800 / diária', en: 'R$ 2,800 / night' },
  carnaval: { pt: 'R$ 20.000', en: 'R$ 20,000' },
  reveillon: { pt: 'R$ 140.000', en: 'R$ 140,000' },
  image: '/img/casa02/01.jpg',
  gallery: ['/img/casa02/01.webp','/img/casa02/02.webp','/img/casa02/03.webp','/img/casa02/04.webp','/img/casa02/05.webp','/img/casa02/06.webp','/img/casa02/07.webp','/img/casa02/08.webp','/img/casa02/09.webp','/img/casa02/10.webp','/img/casa02/11.webp','/img/casa02/12.webp','/img/casa02/13.webp','/img/casa02/14.webp','/img/casa02/15.webp','/img/casa02/16.webp','/img/casa02/17.webp','/img/casa02/18.webp','/img/casa02/19.webp','/img/casa02/20.webp','/img/casa02/21.webp','/img/casa02/22.webp','/img/casa02/23.webp','/img/casa02/24.webp','/img/casa02/25.webp','/img/casa02/26.webp','/img/casa02/27.webp','/img/casa02/28.webp','/img/casa02/29.webp','/img/casa02/30.webp'], featured: false,
  amenities: {
    pt: ['Sala de estar integrada ao deck', 'Cozinha equipada', 'Espaço gourmet com churrasqueira', 'Adega, cervejeira e máquina de gelo', 'Piscina do condomínio', 'Apoio exclusivo na Praia do Rio da Barra com restaurante e bar', 'Acesso ao Terravista Golf', 'Ar-condicionado nas suítes', 'Wi-Fi e Netflix', 'Carrinho de golfe (locação)', 'Lavanderia', 'Estacionamento'],
    en: ['Living room integrated with deck', 'Equipped kitchen', 'Gourmet area with barbecue', 'Wine cellar, beer cooler and ice maker', 'Condominium pool', 'Exclusive support at Rio da Barra Beach with restaurant and bar', 'Terravista Golf access', 'Air conditioning in suites', 'Wi-Fi and Netflix', 'Golf cart (rental)', 'Laundry', 'Parking'],
  },
  description: {
    pt: 'Localizada no Condomínio Terravista Vilas, a Casa 02 foi projetada por Helena Gabardo Pellanda, com paisagismo da Flora Nativa e decoração assinada por Guilherme Auler. Em um terreno de 550 m² e 271 m² de área construída, oferece ambientes amplos, iluminados e integrados, perfeitos para quem busca conforto em Trancoso.\n\nA sala conecta-se ao deck e à cozinha, criando um espaço ideal para refeições ao ar livre e para apreciar o pôr do sol baiano. O condomínio oferece piscina, apoio exclusivo na Praia do Rio da Barra com restaurante, bar, espreguiçadeiras e serviço completo, além de acesso ao Terravista Golf.\n\nConfiguração das suítes: Suíte 01 com cama king size, armário, TV e varanda; Suíte 02 com duas camas de solteiro conversíveis em cama de casal, armário, TV e varanda; Suíte 03 com cama king size. Todas com ar-condicionado e secador de cabelo.',
    en: 'Located in the Terravista Vilas Condominium, Casa 02 was designed by Helena Gabardo Pellanda, with landscaping by Flora Nativa and decoration by Guilherme Auler. On a 550 m² plot with 271 m² of built area, it offers spacious, bright and integrated spaces, perfect for those seeking comfort in Trancoso.\n\nThe living room connects to the deck and kitchen, creating an ideal space for outdoor dining and enjoying the Bahian sunset. The condominium offers a pool, exclusive support at Rio da Barra Beach with restaurant, bar, loungers and full service, plus access to Terravista Golf.\n\nSuite layout: Suite 01 with king-size bed, wardrobe, TV and veranda; Suite 02 with two single beds convertible into a double bed, wardrobe, TV and veranda; Suite 03 with king-size bed. All with air conditioning and hairdryer.',
  },
  notes: { pt: ['Locação mínima de 4 diárias. Carrinho de golfe disponível para locação mediante consulta. Não são permitidos pets.','Staff: baixa temporada com 1 arrumadeira; Réveillon com 1 arrumadeira e 1 cozinheira. Taxa de serviço: 10%.'], en: ['Minimum stay of 4 nights. Golf cart available for rent upon request. Pets are not allowed.','Staff: low season with 1 housekeeper; New Year\'s with 1 housekeeper and 1 cook. Service fee: 10%.'] },
};

const CASA80: Property = {
  id: 'terravista-golf-casa-80', code: 'TBA-212', name: { pt: 'Terravista Golf — Casa 80', en: 'Terravista Golf — Casa 80' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 7, area: '590 m² · terreno 1.780 m²',
  price: { pt: 'R$ 11.400 / diária', en: 'R$ 11,400 / night' },
  priceLow: { pt: 'R$ 8.500 / diária', en: 'R$ 8,500 / night' },
  carnaval: { pt: 'R$ 80.000', en: 'R$ 80,000' },
  reveillon: { pt: 'R$ 370.000', en: 'R$ 370,000' },
  image: '/img/casa80/01.jpg',
  gallery: ['/img/casa80/01.webp','/img/casa80/02.webp','/img/casa80/03.webp','/img/casa80/04.webp','/img/casa80/05.webp','/img/casa80/06.webp','/img/casa80/07.webp','/img/casa80/08.webp','/img/casa80/09.webp','/img/casa80/10.webp','/img/casa80/11.webp','/img/casa80/12.webp','/img/casa80/13.webp','/img/casa80/14.webp','/img/casa80/15.webp','/img/casa80/16.webp','/img/casa80/17.webp','/img/casa80/18.webp','/img/casa80/19.webp','/img/casa80/20.webp','/img/casa80/21.webp','/img/casa80/22.webp','/img/casa80/23.webp','/img/casa80/24.webp','/img/casa80/25.webp','/img/casa80/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina de 15 x 3 metros', 'Deck de 117 m²', 'Redário', 'Área de fogueira', 'Espaço gourmet com churrasqueira', 'Mesa de sinuca', 'Escritório', 'Sala de estar e jantar', 'Cozinha equipada', 'Ar-condicionado e mosquiteiros', 'Smart TV e Wi-Fi', 'Acesso privativo à Praia das Tartarugas'],
    en: ['15 x 3 meter pool', '117 m² deck', 'Hammock area', 'Fire pit area', 'Gourmet area with barbecue', 'Pool table', 'Office', 'Living and dining rooms', 'Equipped kitchen', 'Air conditioning and mosquito nets', 'Smart TV and Wi-Fi', 'Private access to Tartarugas Beach'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Terravista Golf, a Casa 80 ocupa um terreno de 1.780 m² e oferece 590 m² de área construída. Projetada por Beatriz Regis Bittencourt, com decoração assinada por Viviana Figueiredo, a residência está posicionada à beira do campo de golfe do Terravista e integra arquitetura contemporânea, natureza e conforto.\n\nO amplo jardim, deck de 117,64 m², piscina de 15 x 3 metros, redário e área de fogueira criam ambientes ideais para relaxar ao ar livre. Os hóspedes ainda desfrutam de acesso ao campo de golfe, quadras de tênis e acesso privativo à Praia das Tartarugas.\n\nConfiguração das suítes — Piso térreo: Suíte 01 (Master) com cama king, mosquiteiro, ar-condicionado, cofre e secador; Suítes 02 e 03 com 2 camas de solteiro conversíveis em casal cada. Piso inferior: Suíte 04 (Master) com cama king, mosquiteiro, ar-condicionado, cofre e secador; Suítes 05 e 06 com 2 camas de solteiro conversíveis em casal cada.',
    en: 'Located in the exclusive Terravista Golf Condominium, Casa 80 sits on a 1,780 m² plot with 590 m² of built area. Designed by Beatriz Regis Bittencourt with decoration by Viviana Figueiredo, the residence is positioned on the edge of the Terravista golf course and combines contemporary architecture, nature and comfort.\n\nThe generous garden, 117.64 m² deck, 15 x 3 meter pool, hammock area and fire pit create ideal settings for outdoor relaxation. Guests also enjoy access to the golf course, tennis courts and private access to Tartarugas Beach.\n\nSuite layout — Ground floor: Suite 01 (Master) with king bed, mosquito net, air conditioning, safe and hairdryer; Suites 02 and 03 with 2 single beds convertible into a double each. Lower floor: Suite 04 (Master) with king bed, mosquito net, air conditioning, safe and hairdryer; Suites 05 and 06 with 2 single beds convertible into a double each.',
  },
  notes: { pt: ['Locação mínima de 3 diárias. Não é permitido pet.','Staff: 2 arrumadeiras, 1 cozinheira e 1 auxiliar de cozinha. Taxa de serviço: 10%.'], en: ['Minimum stay of 3 nights. Pets are not allowed.','Staff: 2 housekeepers, 1 cook and 1 kitchen assistant. Service fee: 10%.'] },
};

const ITAPO07: Property = {
  id: 'aldeia-itapororoca-casa-07', code: 'TBA-213', name: { pt: 'Aldeia de Itapororoca — Casa 07', en: 'Aldeia de Itapororoca — Casa 07' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 8, guests: 17, baths: 8, area: 'Praia de Itapororoca',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 605.000', en: 'R$ 605,000' },
  image: '/img/itapororoca07/01.jpg',
  gallery: ['/img/itapororoca07/01.webp','/img/itapororoca07/02.webp','/img/itapororoca07/03.webp','/img/itapororoca07/04.webp','/img/itapororoca07/05.webp','/img/itapororoca07/06.webp','/img/itapororoca07/07.webp','/img/itapororoca07/08.webp','/img/itapororoca07/09.webp','/img/itapororoca07/10.webp','/img/itapororoca07/11.webp','/img/itapororoca07/12.webp','/img/itapororoca07/13.webp','/img/itapororoca07/14.webp','/img/itapororoca07/15.webp','/img/itapororoca07/16.webp','/img/itapororoca07/17.webp','/img/itapororoca07/18.webp','/img/itapororoca07/19.webp','/img/itapororoca07/20.webp','/img/itapororoca07/21.webp','/img/itapororoca07/22.webp','/img/itapororoca07/23.webp','/img/itapororoca07/24.webp','/img/itapororoca07/25.webp','/img/itapororoca07/26.webp','/img/itapororoca07/27.webp','/img/itapororoca07/28.webp','/img/itapororoca07/29.webp','/img/itapororoca07/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia na Praia de Itapororoca', 'Piscina com deck de madeira', 'Ofurô', 'Sauna seca', 'Espaço gourmet com churrasqueira e forno a lenha', 'Adega e máquina de gelo', 'Sala de TV ampla', 'Cozinha equipada', 'Ar-condicionado e mosquiteiros nas suítes', 'Carrinho de golfe pick-up', 'Gerador', 'Apoio de praia do condomínio em frente às piscinas naturais'],
    en: ['Beachfront on Itapororoca Beach', 'Pool with wooden deck', 'Hot tub', 'Dry sauna', 'Gourmet area with barbecue and wood-fired oven', 'Wine cellar and ice maker', 'Spacious TV room', 'Equipped kitchen', 'Air conditioning and mosquito nets in suites', 'Pick-up golf cart', 'Generator', 'Condominium beach support facing the natural pools'],
  },
  description: {
    pt: 'Esta deslumbrante residência está localizada à beira da Praia de Itapororoca, uma das mais belas e preservadas de Trancoso. A arquitetura segue o estilo característico da região, com uso marcante de vidro e madeira, criando uma integração harmoniosa entre os ambientes internos, as áreas externas e a natureza ao redor.\n\nCom projeto assinado por David Bastos, a casa oferece espaços amplos, elegantes e acolhedores, pensados para proporcionar conforto, privacidade e uma experiência completa à beira-mar. Suas oito suítes acomodam até 17 hóspedes e estão distribuídas entre os pavimentos superior e térreo, todas com ar-condicionado, mosquiteiros e banheiros espaçosos.\n\nA área social reúne salas de estar e jantar, uma ampla sala de TV, cozinha equipada e espaço gourmet preparado para refeições e momentos de convivência. Na área externa, o ofurô, a piscina com deck de madeira, o lounge e a sauna seca criam o ambiente ideal para relaxar depois de um dia na praia. A propriedade dispõe ainda de adega, churrasqueira, forno a lenha, máquina de gelo, gerador e carrinho de golfe tipo pick-up para os deslocamentos dentro do condomínio.\n\nO apoio de praia do Condomínio Aldeia de Itapororoca está localizado em frente às piscinas naturais da região e oferece espreguiçadeiras, ombrelones e estrutura para aproveitar o mar com conforto.',
    en: 'This stunning residence is located on the edge of Itapororoca Beach, one of the most beautiful and preserved in Trancoso. The architecture follows the region\'s characteristic style, with striking use of glass and wood, creating a harmonious integration between indoor spaces, outdoor areas and the surrounding nature.\n\nDesigned by David Bastos, the house offers spacious, elegant and welcoming spaces, conceived to provide comfort, privacy and a complete seaside experience. Its eight suites accommodate up to 17 guests across the upper and ground floors, all with air conditioning, mosquito nets and spacious bathrooms.\n\nThe social area brings together living and dining rooms, a large TV room, equipped kitchen and gourmet space prepared for meals and gatherings. Outside, the hot tub, pool with wooden deck, lounge and dry sauna create the ideal setting to relax after a day at the beach. The property also features a wine cellar, barbecue, wood-fired oven, ice maker, generator and a pick-up golf cart for getting around the condominium.\n\nThe Aldeia de Itapororoca condominium beach support is located in front of the region\'s natural pools and offers loungers, umbrellas and structure to enjoy the sea in comfort.',
  },
  notes: { pt: ['Staff: 1 cozinheiro, 1 ajudante de cozinha e 2 arrumadeiras, com organização diária das suítes e das áreas sociais. Taxa de serviço: 10%.'], en: ['Staff: 1 cook, 1 kitchen assistant and 2 housekeepers, with daily organization of suites and social areas. Service fee: 10%.'] },
};

const CASA96: Property = {
  id: 'terravista-golf-casa-96', code: 'TBA-214', name: { pt: 'Terravista Golf — Casa 96', en: 'Terravista Golf — Casa 96' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 8, area: '1.100 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Indisponível', en: 'Unavailable' },
  image: '/img/casa96/01.jpg',
  gallery: ['/img/casa96/01.webp','/img/casa96/02.webp','/img/casa96/03.webp','/img/casa96/04.webp','/img/casa96/05.webp','/img/casa96/06.webp','/img/casa96/07.webp','/img/casa96/08.webp','/img/casa96/09.webp','/img/casa96/10.webp','/img/casa96/11.webp','/img/casa96/12.webp','/img/casa96/13.webp','/img/casa96/14.webp','/img/casa96/15.webp','/img/casa96/16.webp','/img/casa96/17.webp','/img/casa96/18.webp','/img/casa96/19.webp','/img/casa96/20.webp','/img/casa96/21.webp','/img/casa96/22.webp','/img/casa96/23.webp','/img/casa96/24.webp','/img/casa96/25.webp','/img/casa96/26.webp','/img/casa96/27.webp','/img/casa96/28.webp','/img/casa96/29.webp','/img/casa96/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o campo de golfe', 'Piscina aquecida', 'Área gourmet completa com churrasqueira a gás', 'Lounge fire pit com lareira a gás', 'Sala de estar, jantar e TV', 'Cozinha equipada com máquina de lavar louças', 'Deck e jardim', 'Ar-condicionado em todas as suítes e sala', 'Smart TV e Wi-Fi', 'Acesso à Praia das Tartarugas pelo elevador do condomínio', 'UTV exclusivo para hóspedes', 'Equipamentos de beach tennis, frescobol e pesca submarina'],
    en: ['Golf course view', 'Heated pool', 'Complete gourmet area with gas barbecue', 'Fire pit lounge with gas fireplace', 'Living, dining and TV rooms', 'Equipped kitchen with dishwasher', 'Deck and garden', 'Air conditioning in all suites and living room', 'Smart TV and Wi-Fi', 'Access to Tartarugas Beach via condominium elevator', 'Exclusive UTV for guests', 'Beach tennis, frescobol and spearfishing equipment'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Terravista Golf, a Casa 96 reúne arquitetura contemporânea, amplos ambientes e integração com a natureza. Possui seis suítes, sendo duas suítes-master, dois quartos de serviço, piscina aquecida, área gourmet completa, lounge com fire pit, jardim e vista privilegiada para o campo de golfe.\n\nO acesso à Praia das Tartarugas é feito pelo elevador do condomínio, a cerca de 6 minutos de caminhada. A estrutura inclui sala de estar, sala de jantar, sala de TV, cozinha equipada, deck, área gourmet equipada, lounge fire pit com lareira a gás, estacionamento, lavanderia, apoio de praia e portaria 24h.\n\nAs comodidades incluem ar-condicionado em todas as suítes e sala, Wi-Fi, Smart TV, máquina de gelo, máquina de lavar louças, roupas de cama, mesa e banho, toalhas de piscina, churrasqueira a gás e equipamentos de beach tennis, frescobol e pesca submarina.\n\nUTV disponível exclusivamente para transporte dos hóspedes até o elevador de acesso à praia, conduzido pelo caseiro.',
    en: 'Located in the exclusive Terravista Golf Condominium, Casa 96 combines contemporary architecture, generous spaces and integration with nature. It features six suites, including two master suites, two staff rooms, heated pool, complete gourmet area, fire pit lounge, garden and a privileged view of the golf course.\n\nAccess to Tartarugas Beach is via the condominium elevator, about a 6-minute walk. The structure includes living room, dining room, TV room, equipped kitchen, deck, equipped gourmet area, fire pit lounge with gas fireplace, parking, laundry, beach support and 24-hour gatehouse.\n\nAmenities include air conditioning in all suites and living room, Wi-Fi, Smart TV, ice maker, dishwasher, bed, table and bath linens, pool towels, gas barbecue and beach tennis, frescobol and spearfishing equipment.\n\nA UTV is available exclusively to transport guests to the beach access elevator, driven by the caretaker.',
  },
  notes: { pt: ['Staff: cozinheira, auxiliar de cozinha, arrumadeira e caseiro responsável pela piscina, jardim e churrasco, além de serviço completo de apoio de praia. Taxa de serviço: 10%.'], en: ['Staff: cook, kitchen assistant, housekeeper and caretaker responsible for the pool, garden and barbecue, plus full beach support service. Service fee: 10%.'] },
};

const CASA90: Property = {
  id: 'terravista-golf-casa-90', code: 'TBA-215', name: { pt: 'Terravista Golf Club 90', en: 'Terravista Golf Club 90' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 7, guests: 14, baths: 8, area: 'Pé no campo de golfe',
  price: { pt: 'R$ 19.500 / diária', en: 'R$ 19,500 / night' },
  priceLow: { pt: 'R$ 19.500 / diária', en: 'R$ 19,500 / night' },
  carnaval: { pt: 'R$ 42.500 / diária', en: 'R$ 42,500 / night' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/casa90/01.jpg',
  gallery: ['/img/casa90/01.webp','/img/casa90/02.webp','/img/casa90/03.webp','/img/casa90/04.webp','/img/casa90/05.webp','/img/casa90/06.webp','/img/casa90/07.webp','/img/casa90/08.webp','/img/casa90/09.webp','/img/casa90/10.webp','/img/casa90/11.webp','/img/casa90/12.webp','/img/casa90/13.webp','/img/casa90/14.webp','/img/casa90/15.webp','/img/casa90/16.webp','/img/casa90/17.webp','/img/casa90/18.webp','/img/casa90/19.webp','/img/casa90/20.webp','/img/casa90/21.webp','/img/casa90/22.webp','/img/casa90/23.webp','/img/casa90/24.webp','/img/casa90/25.webp','/img/casa90/26.webp','/img/casa90/27.webp','/img/casa90/28.webp','/img/casa90/29.webp','/img/casa90/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina e jacuzzi', 'Spa', 'Adega climatizada', 'Espaço gourmet e churrasqueira', 'Salas de estar e jantar integradas', 'Paisagismo de Alex de Sá', 'Apoio de praia com espreguiçadeiras e ombrelones', 'Quadra de tênis', 'Carrinho de golfe pick-up', 'Ar-condicionado, Wi-Fi e TV a cabo', 'Roupa de cama Trousseau na suíte master', 'Duchas de alta pressão e toalhas de algodão egípcio'],
    en: ['Pool and jacuzzi', 'Spa', 'Climate-controlled wine cellar', 'Gourmet area and barbecue', 'Integrated living and dining rooms', 'Landscaping by Alex de Sá', 'Beach support with loungers and umbrellas', 'Tennis court', 'Pick-up golf cart', 'Air conditioning, Wi-Fi and cable TV', 'Trousseau bedding in the master suite', 'High-pressure showers and Egyptian cotton towels'],
  },
  description: {
    pt: 'Assinada por David Bastos, esta residência de alto padrão foi concebida para proporcionar uma experiência completa de conforto, privacidade e bem-estar em meio à natureza de Trancoso. O projeto combina arquitetura contemporânea, materiais naturais e ambientes amplos, criando uma integração elegante entre os espaços internos, os jardins e o campo de golfe.\n\nDistribuída em dois pavimentos, a casa reúne sete suítes e acomoda confortavelmente até 14 hóspedes. No térreo estão duas suítes de casal e duas suítes triplas, que também podem ser configuradas para casal. No piso superior ficam a suíte master e outras duas suítes de casal.\n\nO paisagismo de Alex de Sá valoriza espécies nativas e flores tropicais, reforçando a conexão entre a arquitetura e a paisagem local. Os ambientes sociais são abertos e integrados, com peças de artistas da região que traduzem a essência cultural de Trancoso.\n\nA experiência é completada por spa, jacuzzi, adega climatizada, piscina, espaço gourmet e uma estrutura de serviço pensada para receber com excelência. Na suíte master, roupa de cama Trousseau em cetim italiano de 1000 fios; nas demais suítes, enxovais premium de 700 fios. Toalhas em algodão egípcio e duchas de alta pressão. A gastronomia conta com louças Tania Bulhões, guardanapos de linho e prataria para refeições especiais.\n\nLocalizada no alto das falésias do Rio da Barra, o condomínio oferece portaria 24h, aeroporto privativo, acesso exclusivo à Praia das Tartarugas, restaurante, quadras esportivas e o Terravista Golf Course. O Quadrado fica a cerca de 10 minutos de carro. Diária em feriados: R$ 25.500.',
    en: 'Designed by David Bastos, this high-end residence was conceived to provide a complete experience of comfort, privacy and well-being amid the nature of Trancoso. The project combines contemporary architecture, natural materials and generous spaces, creating an elegant integration between interiors, gardens and the golf course.\n\nSpread over two floors, the house has seven suites and comfortably accommodates up to 14 guests. On the ground floor there are two double suites and two triple suites, which can also be configured as doubles. Upstairs are the master suite and two more double suites.\n\nThe landscaping by Alex de Sá values native species and tropical flowers, reinforcing the connection between architecture and the local landscape. The social areas are open and integrated, featuring pieces by regional artists that translate the cultural essence of Trancoso.\n\nThe experience is completed by a spa, jacuzzi, climate-controlled wine cellar, pool, gourmet area and a service structure designed for excellence. In the master suite, Trousseau bedding in 1000-thread Italian satin; in the other suites, premium 700-thread linens. Egyptian cotton towels and high-pressure showers. Dining features Tania Bulhões tableware, linen napkins and silverware for special meals.\n\nLocated atop the cliffs of Rio da Barra, the condominium offers 24-hour gatehouse, private airport, exclusive access to Tartarugas Beach, restaurant, sports courts and the Terravista Golf Course. The Quadrado is about 10 minutes by car. Holiday rate: R$ 25,500.',
  },
  notes: { pt: ['Staff: 3 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha, 1 lavadeira e 2 garçons. Taxa de serviço: 10%.'], en: ['Staff: 3 housekeepers, 1 cook, 1 kitchen assistant, 1 laundress and 2 waiters. Service fee: 10%.'] },
};

const VILAS75: Property = {
  id: 'terravista-vilas-75', code: 'TBA-216', name: { pt: 'Terravista Vilas 75', en: 'Terravista Vilas 75' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 6, guests: 12, baths: 7, area: 'Vista para o mar e o golfe',
  price: { pt: 'R$ 30.000 / diária', en: 'R$ 30,000 / night' },
  priceLow: { pt: 'R$ 30.000 / diária', en: 'R$ 30,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 800.000', en: 'R$ 800,000' },
  image: '/img/vilas75/01.jpg',
  gallery: ['/img/vilas75/01.webp','/img/vilas75/02.webp','/img/vilas75/03.webp','/img/vilas75/04.webp','/img/vilas75/05.webp','/img/vilas75/06.webp','/img/vilas75/07.webp','/img/vilas75/08.webp','/img/vilas75/09.webp','/img/vilas75/10.webp','/img/vilas75/11.webp','/img/vilas75/12.webp','/img/vilas75/13.webp','/img/vilas75/14.webp','/img/vilas75/15.webp','/img/vilas75/16.webp','/img/vilas75/17.webp','/img/vilas75/18.webp','/img/vilas75/19.webp','/img/vilas75/20.webp','/img/vilas75/21.webp','/img/vilas75/22.webp','/img/vilas75/23.webp','/img/vilas75/24.webp','/img/vilas75/25.webp','/img/vilas75/26.webp','/img/vilas75/27.webp','/img/vilas75/28.webp','/img/vilas75/29.webp','/img/vilas75/30.webp'], featured: true,
  amenities: {
    pt: ['Vista para o mar e para o campo de golfe', 'Piscina privativa + piscina do condomínio', 'Elevador interno', 'Internet Starlink', 'Gerador', 'Sala de massagem', 'PlayStation 4', 'Rede de vôlei no jardim', 'Adega de vinhos e cervejeira', 'Espaço gourmet e churrasqueira', 'Apoio de praia', 'Kit bebê e kids friendly'],
    en: ['Ocean and golf course views', 'Private pool + condominium pool', 'Internal elevator', 'Starlink internet', 'Generator', 'Massage room', 'PlayStation 4', 'Volleyball net in the garden', 'Wine cellar and beer cooler', 'Gourmet area and barbecue', 'Beach support', 'Baby kit and kids friendly'],
  },
  description: {
    pt: 'Inserida no exclusivo Complexo Terravista, a Terravista Vilas 75 combina arquitetura contemporânea, amplitude e uma conexão privilegiada com a paisagem de Trancoso. A residência foi projetada para receber famílias e grupos de amigos com conforto absoluto, reunindo seis suítes generosas, ambientes integrados e uma atmosfera elegante, leve e acolhedora. Arquitetura de Caio Bandeira e paisagismo de Luiz Carlos Orsini.\n\nOs principais espaços da casa se abrem para uma vista marcante do campo de golfe e do mar, criando um cenário que acompanha os hóspedes ao longo de toda a estadia. A área social integra sala de estar, jantar, cozinha e espaço gourmet, enquanto a piscina e os ambientes externos convidam a aproveitar o clima de Trancoso com privacidade e tranquilidade.\n\nA casa também oferece elevador interno, gerador, internet Starlink, sala de massagem, PlayStation 4 e rede de vôlei no jardim — uma propriedade completa, sofisticada e funcional, pensada tanto para dias de descanso quanto para temporadas em família.\n\nConfiguração das suítes: Master 01 com 2 camas king, closet e varanda com vista para o mar; Suíte 02 com cama super king, closet e varanda com vista para o jardim; Suítes 03 e 05 com cama king, closet e varanda com vista para o mar; Suítes 04 e 06 com 2 camas de solteiro reversíveis em super king, closet e varanda com vista para o mar. Todas com mosquiteiro e ar-condicionado.\n\nO condomínio fica no topo das falésias do Rio da Barra, com acesso exclusivo à Praia das Tartarugas; o Quadrado fica a cerca de 10 minutos de carro. Locação mínima de 5 diárias.',
    en: 'Set within the exclusive Terravista Complex, Terravista Vilas 75 combines contemporary architecture, generous scale and a privileged connection with the landscape of Trancoso. The residence was designed to welcome families and groups of friends in absolute comfort, with six generous suites, integrated spaces and an elegant, light and welcoming atmosphere. Architecture by Caio Bandeira and landscaping by Luiz Carlos Orsini.\n\nThe main spaces of the house open onto a striking view of the golf course and the sea, a backdrop that accompanies guests throughout their stay. The social area integrates living room, dining room, kitchen and gourmet space, while the pool and outdoor areas invite guests to enjoy the Trancoso climate with privacy and tranquility.\n\nThe house also offers an internal elevator, generator, Starlink internet, massage room, PlayStation 4 and a volleyball net in the garden — a complete, sophisticated and functional property, designed both for days of rest and for family seasons.\n\nSuite layout: Master 01 with 2 king beds, walk-in closet and veranda with ocean view; Suite 02 with super king bed, closet and veranda with garden view; Suites 03 and 05 with king bed, closet and veranda with ocean view; Suites 04 and 06 with 2 single beds convertible into a super king, closet and veranda with ocean view. All with mosquito net and air conditioning.\n\nThe condominium sits atop the cliffs of Rio da Barra, with exclusive access to Tartarugas Beach; the Quadrado is about 10 minutes by car. Minimum stay of 5 nights.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, 1 cozinheira e 1 caseiro. Taxa de serviço: 10%.'], en: ['Staff: 2 housekeepers, 1 cook and 1 caretaker. Service fee: 10%.'] },
};

const LIMOEIRO: Property = {
  id: 'casa-limoeiro-altos-de-trancoso', code: 'TBA-217', name: { pt: 'Casa Limoeiro', en: 'Casa Limoeiro' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 8, guests: 16, baths: 8, area: '1.000 m² · terreno 3.600 m²',
  price: { pt: 'R$ 15.000 / diária', en: 'R$ 15,000 / night' },
  priceLow: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  carnaval: { pt: 'R$ 125.000', en: 'R$ 125,000' },
  reveillon: { pt: 'R$ 500.000', en: 'R$ 500,000' },
  image: '/img/limoeiro/01.jpg',
  gallery: ['/img/limoeiro/01.webp','/img/limoeiro/02.webp','/img/limoeiro/03.webp','/img/limoeiro/04.webp','/img/limoeiro/05.webp','/img/limoeiro/06.webp','/img/limoeiro/07.webp','/img/limoeiro/08.webp','/img/limoeiro/09.webp','/img/limoeiro/10.webp','/img/limoeiro/11.webp','/img/limoeiro/12.webp','/img/limoeiro/13.webp','/img/limoeiro/14.webp','/img/limoeiro/15.webp','/img/limoeiro/16.webp','/img/limoeiro/17.webp','/img/limoeiro/18.webp','/img/limoeiro/19.webp','/img/limoeiro/20.webp','/img/limoeiro/21.webp','/img/limoeiro/22.webp','/img/limoeiro/23.webp','/img/limoeiro/24.webp','/img/limoeiro/25.webp','/img/limoeiro/26.webp','/img/limoeiro/27.webp','/img/limoeiro/28.webp','/img/limoeiro/29.webp','/img/limoeiro/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina com paisagismo tropical', 'Ofurô', 'Forno de pizza e churrasqueira', 'Espaço gourmet', 'Mesa de sinuca', 'Academia ao ar livre', 'Quiosque com bar', 'Salas de estar e jantar integradas', 'Cozinha equipada', 'Ar-condicionado e mosquiteiros', 'Wi-Fi', 'Próxima às praias dos Nativos e dos Coqueiros'],
    en: ['Pool with tropical landscaping', 'Hot tub', 'Pizza oven and barbecue', 'Gourmet area', 'Pool table', 'Outdoor gym', 'Kiosk with bar', 'Integrated living and dining rooms', 'Equipped kitchen', 'Air conditioning and mosquito nets', 'Wi-Fi', 'Close to Nativos and Coqueiros beaches'],
  },
  description: {
    pt: 'No Condomínio Altos de Trancoso, a Casa Limoeiro reúne amplitude, conforto e uma atmosfera contemporânea com identidade local. Implantada em um terreno de 3.600 m², a residência possui 1.000 m² de área construída e foi pensada para receber famílias e grupos de amigos com privacidade, funcionalidade e muito espaço.\n\nO projeto assinado pelo escritório Vida de Vila combina linhas modernas, materiais naturais e referências da cultura de Trancoso. Os ambientes sociais são amplos e integrados, criando uma conexão fluida entre sala de estar, sala de jantar, cozinha, espaço gourmet, jardim e piscina.\n\nA área externa é um dos grandes destaques: a piscina é cercada por paisagismo tropical e diferentes espaços de descanso, enquanto o forno de pizza, a churrasqueira, o ofurô e a mesa de sinuca completam uma estrutura de lazer ideal para férias descontraídas, sem abrir mão de conforto e elegância.\n\nLocalizada próxima às praias dos Nativos e dos Coqueiros e a poucos minutos do Quadrado, a localização combina a segurança e a tranquilidade de um condomínio com acesso prático aos restaurantes, às lojas e à vida cultural do centro de Trancoso.',
    en: 'In the Altos de Trancoso Condominium, Casa Limoeiro brings together spaciousness, comfort and a contemporary atmosphere with local identity. Set on a 3,600 m² plot, the residence has 1,000 m² of built area and was designed to welcome families and groups of friends with privacy, functionality and plenty of space.\n\nThe project by the Vida de Vila studio combines modern lines, natural materials and references to the culture of Trancoso. The social areas are spacious and integrated, creating a fluid connection between living room, dining room, kitchen, gourmet space, garden and pool.\n\nThe outdoor area is one of the property\'s highlights: the pool is surrounded by tropical landscaping and different resting spaces, while the pizza oven, barbecue, hot tub and pool table complete a leisure structure ideal for relaxed vacations without giving up comfort and elegance.\n\nLocated near Nativos and Coqueiros beaches and a few minutes from the Quadrado, the location combines the security and tranquility of a condominium with practical access to restaurants, shops and the cultural life of central Trancoso.\n\nNote: on New Year\'s, the service fee is 5%; on other dates, 10%.',
  },
  notes: { pt: ['Observação: no Réveillon, a taxa de serviço é de 5%; nas demais datas, 10%.'], en: [] },
};

const BIRIBA: Property = {
  id: 'casa-biriba-altos-de-trancoso', code: 'TBA-218', name: { pt: 'Casa Biriba', en: 'Casa Biriba' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 7, area: '466 m²',
  price: { pt: 'R$ 6.800 / diária', en: 'R$ 6,800 / night' },
  priceLow: { pt: 'R$ 6.000 / diária', en: 'R$ 6,000 / night' },
  carnaval: { pt: 'R$ 50.000', en: 'R$ 50,000' },
  reveillon: { pt: 'R$ 220.000', en: 'R$ 220,000' },
  image: '/img/biriba/01.jpg',
  gallery: ['/img/biriba/01.webp','/img/biriba/02.webp','/img/biriba/03.webp','/img/biriba/04.webp','/img/biriba/05.webp','/img/biriba/06.webp','/img/biriba/07.webp','/img/biriba/08.webp','/img/biriba/09.webp','/img/biriba/10.webp','/img/biriba/11.webp','/img/biriba/12.webp','/img/biriba/13.webp','/img/biriba/14.webp','/img/biriba/15.webp','/img/biriba/16.webp','/img/biriba/17.webp','/img/biriba/18.webp','/img/biriba/19.webp','/img/biriba/20.webp','/img/biriba/21.webp','/img/biriba/22.webp','/img/biriba/23.webp','/img/biriba/24.webp','/img/biriba/25.webp','/img/biriba/26.webp','/img/biriba/27.webp','/img/biriba/28.webp','/img/biriba/29.webp','/img/biriba/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina cercada pelo jardim', 'Deck de madeira', 'Espaço gourmet', 'Mesa de sinuca e pingue-pongue', 'Salas de estar e jantar integradas', 'Cozinha equipada', 'Ar-condicionado nas suítes', 'Wi-Fi', 'Próxima às praias dos Nativos e dos Coqueiros', 'Disponível também para venda: R$ 7.200.000'],
    en: ['Pool surrounded by garden', 'Wooden deck', 'Gourmet area', 'Pool table and table tennis', 'Integrated living and dining rooms', 'Equipped kitchen', 'Air conditioning in suites', 'Wi-Fi', 'Close to Nativos and Coqueiros beaches', 'Also available for sale: R$ 7,200,000'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Trancoso, a Casa Biriba reúne arquitetura contemporânea, elementos naturais e a atmosfera descontraída que define o estilo de vida da região. Com aproximadamente 466 m² de área construída, a residência foi pensada para oferecer conforto, privacidade e uma experiência integrada ao verde.\n\nA casa dispõe de seis suítes amplas e acomoda até 12 hóspedes. Os ambientes sociais foram concebidos de forma fluida, conectando sala de estar, cozinha e espaço gourmet em uma área de convivência acolhedora, ideal para reunir família e amigos.\n\nNa área externa, a piscina cercada pelo jardim cria um cenário reservado para descanso, enquanto a mesa de sinuca e o pingue-pongue acrescentam opções de lazer para diferentes idades. A proximidade com as praias dos Nativos e dos Coqueiros reforça o privilégio da localização.\n\nDisponível para venda (R$ 7.200.000) e também para locação de temporada, a Casa Biriba é uma opção versátil para quem busca um imóvel de alto padrão em Trancoso, seja para uso próprio, investimento ou temporadas especiais.',
    en: 'Located in the exclusive Altos de Trancoso Condominium, Casa Biriba combines contemporary architecture, natural elements and the relaxed atmosphere that defines the region\'s lifestyle. With approximately 466 m² of built area, the residence was designed to offer comfort, privacy and an experience integrated with nature.\n\nThe house has six spacious suites and accommodates up to 12 guests. The social areas were conceived fluidly, connecting living room, kitchen and gourmet space into a welcoming gathering area, ideal for bringing family and friends together.\n\nOutside, the pool surrounded by the garden creates a private setting for relaxation, while the pool table and table tennis add leisure options for all ages. The proximity to Nativos and Coqueiros beaches reinforces the privilege of the location.\n\nAvailable for sale (R$ 7,200,000) and also for seasonal rental, Casa Biriba is a versatile option for those seeking a high-end property in Trancoso, whether for own use, investment or special seasons.',
  },
  notes: { pt: ['Taxa de serviço: 10%.'], en: ['Service fee: 10%.'] },
};

const VILAMAR: Property = {
  id: 'vila-mar-altos-de-trancoso', code: 'TBA-219', name: { pt: 'Vila Mar', en: 'Vila Mar' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 10, guests: 20, baths: 14, area: '1.800 m² · terreno 4.000 m²',
  price: { pt: 'R$ 60.000 / diária', en: 'R$ 60,000 / night' },
  priceLow: { pt: 'R$ 60.000 / diária', en: 'R$ 60,000 / night' },
  carnaval: { pt: 'R$ 400.000 (2027)', en: 'R$ 400,000 (2027)' },
  reveillon: { pt: 'Indisponível', en: 'Unavailable' },
  image: '/img/vilamar/01.jpg',
  gallery: ['/img/vilamar/01.webp','/img/vilamar/02.webp','/img/vilamar/03.webp','/img/vilamar/04.webp','/img/vilamar/05.webp','/img/vilamar/06.webp','/img/vilamar/07.webp','/img/vilamar/08.webp','/img/vilamar/09.webp','/img/vilamar/10.webp','/img/vilamar/11.webp','/img/vilamar/12.webp','/img/vilamar/13.webp','/img/vilamar/14.webp','/img/vilamar/15.webp','/img/vilamar/16.webp','/img/vilamar/17.webp','/img/vilamar/18.webp','/img/vilamar/19.webp','/img/vilamar/20.webp','/img/vilamar/21.webp','/img/vilamar/22.webp','/img/vilamar/23.webp','/img/vilamar/24.webp','/img/vilamar/25.webp','/img/vilamar/26.webp','/img/vilamar/27.webp','/img/vilamar/28.webp','/img/vilamar/29.webp','/img/vilamar/30.webp'], featured: true,
  amenities: {
    pt: ['Vista panorâmica para o mar', 'Piscina com vista para o oceano', 'Sauna', 'Sala de massagem', 'Home theater com mesa de sinuca', 'Espaço gourmet', 'Cozinha profissional', 'Decoração com peças de artistas brasileiros', 'Ar-condicionado e mosquiteiros', 'Wi-Fi', 'Equipe completa de staff incluída', 'Próxima às praias dos Nativos e dos Coqueiros'],
    en: ['Panoramic ocean view', 'Pool overlooking the sea', 'Sauna', 'Massage room', 'Home theater with pool table', 'Gourmet area', 'Professional kitchen', 'Decor with pieces by Brazilian artists', 'Air conditioning and mosquito nets', 'Wi-Fi', 'Full staff included', 'Close to Nativos and Coqueiros beaches'],
  },
  description: {
    pt: 'No alto das falésias do Condomínio Altos de Trancoso, a Vila Mar ocupa uma posição privilegiada diante do oceano e foi concebida para transformar a paisagem em parte da experiência. Com arquitetura de David Bastos e paisagismo da Licuri, a residência combina linhas contemporâneas, materiais naturais e uma leitura elegante da identidade de Trancoso.\n\nDistribuída em 1.800 m² de área construída sobre um terreno de 4.000 m², a casa oferece dez suítes e acomoda até 20 hóspedes com total conforto. Os ambientes são amplos e conectados entre si, favorecendo a convivência sem abrir mão da privacidade. A decoração reúne peças e mobiliário de artistas brasileiros, criando uma atmosfera sofisticada, autêntica e acolhedora.\n\nA área de lazer reúne piscina com vista para o mar, sauna, sala de massagem, home theater com mesa de sinuca, espaço gourmet e diferentes áreas de descanso. A diária inclui uma equipe completa de staff, permitindo que a estadia aconteça com tranquilidade, cuidado e serviço personalizado do início ao fim.\n\nA propriedade está próxima às praias dos Nativos e dos Coqueiros, além do Quadrado, unindo a segurança e a privacidade de um condomínio à conveniência de estar perto da principal infraestrutura do centro de Trancoso.',
    en: 'Atop the cliffs of the Altos de Trancoso Condominium, Vila Mar occupies a privileged position facing the ocean and was conceived to make the landscape part of the experience. With architecture by David Bastos and landscaping by Licuri, the residence combines contemporary lines, natural materials and an elegant reading of Trancoso\'s identity.\n\nSpread over 1,800 m² of built area on a 4,000 m² plot, the house offers ten suites and accommodates up to 20 guests in total comfort. The spaces are generous and connected, favoring togetherness without giving up privacy. The decoration brings together pieces and furniture by Brazilian artists, creating a sophisticated, authentic and welcoming atmosphere.\n\nThe leisure area features a pool overlooking the sea, sauna, massage room, home theater with pool table, gourmet space and different resting areas. The daily rate includes a complete staff team, allowing the stay to unfold with tranquility, care and personalized service from start to finish.\n\nThe property is close to Nativos and Coqueiros beaches, as well as the Quadrado, combining the security and privacy of a condominium with the convenience of being near the main infrastructure of central Trancoso.',
  },
  notes: { pt: ['Réveillon indisponível; Carnaval disponível para 2027. Taxa de serviço: 10%.'], en: ['New Year\'s unavailable; Carnival available for 2027. Service fee: 10%.'] },
};

const BETTONI: Property = {
  id: 'casa-bettoni-altos-de-trancoso', code: 'TBA-220', name: { pt: 'Casa Bettoni', en: 'Casa Bettoni' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 7, guests: 14, baths: 8, area: 'Aprox. 1.200 m²',
  price: { pt: 'R$ 12.500 / diária', en: 'R$ 12,500 / night' },
  priceLow: { pt: 'R$ 9.900 / diária', en: 'R$ 9,900 / night' },
  carnaval: { pt: 'R$ 150.000', en: 'R$ 150,000' },
  reveillon: { pt: 'R$ 550.000', en: 'R$ 550,000' },
  image: '/img/bettoni/01.jpg',
  gallery: ['/img/bettoni/01.webp','/img/bettoni/02.webp','/img/bettoni/03.webp','/img/bettoni/04.webp','/img/bettoni/05.webp','/img/bettoni/06.webp','/img/bettoni/07.webp','/img/bettoni/08.webp','/img/bettoni/09.webp','/img/bettoni/10.webp','/img/bettoni/11.webp','/img/bettoni/12.webp','/img/bettoni/13.webp','/img/bettoni/14.webp','/img/bettoni/15.webp','/img/bettoni/16.webp','/img/bettoni/17.webp','/img/bettoni/18.webp','/img/bettoni/19.webp','/img/bettoni/20.webp','/img/bettoni/21.webp','/img/bettoni/22.webp','/img/bettoni/23.webp','/img/bettoni/24.webp','/img/bettoni/25.webp','/img/bettoni/26.webp','/img/bettoni/27.webp','/img/bettoni/28.webp','/img/bettoni/29.webp','/img/bettoni/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina cercada por jardins', 'Jacuzzi privativa', 'Sauna', 'Salas de estar amplas e integradas', 'Sala de TV', 'Espaço gourmet', 'Cozinha equipada', 'Banheiros com ducha ao ar livre', 'Jardins tropicais', 'Ar-condicionado nas suítes', 'Wi-Fi', 'Condomínio com segurança 24h'],
    en: ['Pool surrounded by gardens', 'Private jacuzzi', 'Sauna', 'Spacious integrated living rooms', 'TV room', 'Gourmet area', 'Equipped kitchen', 'Bathrooms with outdoor shower', 'Tropical gardens', 'Air conditioning in suites', 'Wi-Fi', 'Condominium with 24-hour security'],
  },
  description: {
    pt: 'Localizada em um dos condomínios mais exclusivos de Trancoso, a Casa Bettoni reúne conforto, privacidade e uma localização privilegiada, a poucos minutos do Quadrado e das principais praias da região.\n\nCom arquitetura que valoriza a integração entre os ambientes internos e externos, a residência oferece espaços amplos, iluminados e cercados pelo verde, criando uma atmosfera elegante e acolhedora para receber famílias e grupos de amigos.\n\nSão 7 suítes distribuídas em aproximadamente 1.200 m², acomodando até 14 hóspedes com conforto. As áreas sociais se conectam ao jardim e aos espaços de lazer, proporcionando momentos de convivência em total privacidade.\n\nO Condomínio Altos de Trancoso conta com portaria e segurança 24 horas, ruas arborizadas e uma localização estratégica que permite fácil acesso ao Quadrado, às praias e aos principais restaurantes da vila.',
    en: 'Located in one of the most exclusive condominiums in Trancoso, Casa Bettoni combines comfort, privacy and a privileged location, just minutes from the Quadrado and the region\'s main beaches.\n\nWith architecture that values the integration between indoor and outdoor spaces, the residence offers spacious, bright spaces surrounded by greenery, creating an elegant and welcoming atmosphere for families and groups of friends.\n\nThere are 7 suites spread over approximately 1,200 m², accommodating up to 14 guests in comfort. The social areas connect to the garden and leisure spaces, providing moments of togetherness in total privacy.\n\nThe Altos de Trancoso Condominium features a 24-hour gatehouse and security, tree-lined streets and a strategic location with easy access to the Quadrado, beaches and the village\'s main restaurants.',
  },
  notes: { pt: ['Taxa de serviço: 10%.'], en: ['Service fee: 10%.'] },
};

const PINI: Property = {
  id: 'casa-pini-altos-de-trancoso', code: 'TBA-221', name: { pt: 'Casa Pini', en: 'Casa Pini' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 5, area: '500 m²',
  price: { pt: 'R$ 3.800 / diária', en: 'R$ 3,800 / night' },
  priceLow: { pt: 'R$ 2.850 / diária', en: 'R$ 2,850 / night' },
  carnaval: { pt: 'R$ 33.000', en: 'R$ 33,000' },
  reveillon: { pt: 'R$ 170.000', en: 'R$ 170,000' },
  image: '/img/pini/01.jpg',
  gallery: ['/img/pini/01.webp','/img/pini/02.webp','/img/pini/03.webp','/img/pini/04.webp','/img/pini/05.webp','/img/pini/06.webp','/img/pini/07.webp','/img/pini/08.webp','/img/pini/09.webp','/img/pini/10.webp','/img/pini/11.webp','/img/pini/12.webp','/img/pini/13.webp','/img/pini/14.webp','/img/pini/15.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Jardim amplo', 'Sala de estar', 'Sala de jantar', 'Cozinha equipada', 'Ambientes integrados', 'Ar-condicionado nas suítes', 'Wi-Fi', 'Varanda com redes'],
    en: ['Pool', 'Large garden', 'Living room', 'Dining room', 'Equipped kitchen', 'Integrated spaces', 'Air conditioning in suites', 'Wi-Fi', 'Veranda with hammocks'],
  },
  description: {
    pt: 'A Casa Pini é um refúgio elegante localizado no exclusivo Condomínio Altos de Trancoso, uma das regiões mais valorizadas do destino. Cercada pela tranquilidade e pela atmosfera única de Trancoso, a residência combina conforto, privacidade e praticidade em uma proposta acolhedora e sofisticada.\n\nCom aproximadamente 500 m² de área construída, a casa possui quatro suítes amplas, todas equipadas com cama queen-size, acomodando confortavelmente até oito hóspedes. Os ambientes foram cuidadosamente planejados para proporcionar bem-estar durante toda a estadia, com espaços integrados, decoração leve e agradável conexão com as áreas externas.',
    en: 'Casa Pini is an elegant retreat located in the exclusive Altos de Trancoso Condominium, one of the destination\'s most valued areas. Surrounded by tranquility and Trancoso\'s unique atmosphere, the residence combines comfort, privacy and practicality in a welcoming and sophisticated proposal.\n\nWith approximately 500 m² of built area, the house has four spacious suites, all equipped with queen-size beds, comfortably accommodating up to eight guests. The spaces were carefully planned to provide well-being throughout the stay, with integrated spaces, light decor and a pleasant connection with the outdoor areas.\n\nIncluded staff: 1 housekeeper, 1 cook and 1 gardener/pool attendant. Service fee: 10%.',
  },
  notes: { pt: ['Equipe incluída: 1 arrumadeira, 1 cozinheira e 1 jardineiro/piscineiro. Taxa de serviço: 10%.'], en: [] },
};

const AUREA: Property = {
  id: 'vila-aurea-altos-de-trancoso', code: 'TBA-222', name: { pt: 'Vila Áurea', en: 'Vila Áurea' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 7, area: '700 m² · terreno 1.620 m²',
  price: { pt: 'R$ 8.500 / diária', en: 'R$ 8,500 / night' },
  priceLow: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  carnaval: { pt: 'R$ 100.000', en: 'R$ 100,000' },
  reveillon: { pt: 'R$ 420.000', en: 'R$ 420,000' },
  image: '/img/aurea/01.jpg',
  gallery: ['/img/aurea/01.webp','/img/aurea/02.webp','/img/aurea/03.webp','/img/aurea/04.webp','/img/aurea/05.webp','/img/aurea/06.webp','/img/aurea/07.webp','/img/aurea/08.webp','/img/aurea/09.webp','/img/aurea/10.webp','/img/aurea/11.webp','/img/aurea/12.webp','/img/aurea/13.webp','/img/aurea/14.webp','/img/aurea/15.webp','/img/aurea/16.webp','/img/aurea/17.webp','/img/aurea/18.webp','/img/aurea/19.webp','/img/aurea/20.webp','/img/aurea/21.webp','/img/aurea/22.webp','/img/aurea/23.webp','/img/aurea/24.webp','/img/aurea/25.webp','/img/aurea/26.webp','/img/aurea/27.webp','/img/aurea/28.webp','/img/aurea/29.webp','/img/aurea/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina com deck', 'Academia climatizada', 'Espaço gourmet', 'Lounge externo e redários', 'Ducha externa', 'Sala de estar e jantar', 'Cozinha equipada', 'Churrasqueira', 'TV Sky e caixa de som', '10 min a pé da Praia dos Nativos', 'Não aceita pets'],
    en: ['Ocean view', 'Pool with deck', 'Air-conditioned gym', 'Gourmet area', 'Outdoor lounge and hammocks', 'Outdoor shower', 'Living and dining rooms', 'Equipped kitchen', 'Barbecue', 'Sky TV and sound system', '10 min walk to Nativos Beach', 'No pets allowed'],
  },
  description: {
    pt: 'A Vila Áurea está localizada no exclusivo Condomínio Altos de Trancoso, em uma área privilegiada que combina tranquilidade, natureza e fácil acesso aos principais pontos do destino — a aproximadamente 10 minutos de caminhada da Praia dos Nativos e a cerca de 12 minutos do Quadrado Histórico.\n\nCom vista para o mar e arquitetura integrada à paisagem tropical, a casa apresenta ambientes amplos, acolhedores e cuidadosamente planejados para proporcionar conforto, privacidade e bem-estar. A combinação de materiais naturais, elementos rústicos e acabamentos sofisticados traduz com elegância o estilo característico de Trancoso.\n\nA área externa é um dos grandes destaques: cercada por um jardim exuberante, conta com piscina, deck, redários, espreguiçadeiras, ducha e um agradável lounge ao ar livre. O espaço gourmet completa a estrutura, criando o cenário ideal para refeições e momentos especiais.',
    en: 'Vila Áurea is located in the exclusive Altos de Trancoso Condominium, in a privileged area that combines tranquility, nature and easy access to the destination\'s main points — about a 10-minute walk from Nativos Beach and around 12 minutes from the Historic Quadrado.\n\nWith ocean views and architecture integrated into the tropical landscape, the house offers spacious, welcoming and carefully planned spaces for comfort, privacy and well-being. The combination of natural materials, rustic elements and sophisticated finishes elegantly translates Trancoso\'s characteristic style.\n\nThe outdoor area is one of the highlights: surrounded by lush garden, it features a pool, deck, hammock areas, loungers, outdoor shower and a pleasant open-air lounge. The gourmet space completes the structure, creating the ideal setting for meals and special moments.\n\nThere are 6 air-conditioned suites, 6 bathrooms and a guest lavatory, in 700 m² of built area on a 1,620 m² plot. Staff: 1 cook, 1 kitchen assistant, 2 housekeepers and 1 gardener/pool attendant. Service fee: 10%.',
  },
  notes: { pt: ['São 6 suítes climatizadas, 6 banheiros e lavabo, em 700 m² de área construída sobre terreno de 1.620 m². Equipe: 1 cozinheira, 1 auxiliar de cozinha, 2 arrumadeiras e 1 jardineiro/piscineiro. Taxa de serviço: 10%.'], en: [] },
};

const SAOJORGE: Property = {
  id: 'casa-sao-jorge-altos-do-segredo', code: 'TBA-223', name: { pt: 'Casa São Jorge', en: 'Casa São Jorge' },
  purpose: ['aluguel'], location: 'Altos do Segredo', suites: 5, guests: 10, baths: 7, area: '585 m² · vista para o mar',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 380.000', en: 'R$ 380,000' },
  image: '/img/saojorge/01.jpg',
  gallery: ['/img/saojorge/01.webp','/img/saojorge/02.webp','/img/saojorge/03.webp','/img/saojorge/04.webp','/img/saojorge/05.webp','/img/saojorge/06.webp','/img/saojorge/07.webp','/img/saojorge/08.webp','/img/saojorge/09.webp','/img/saojorge/10.webp','/img/saojorge/11.webp','/img/saojorge/12.webp','/img/saojorge/13.webp','/img/saojorge/14.webp','/img/saojorge/15.webp','/img/saojorge/16.webp','/img/saojorge/17.webp','/img/saojorge/18.webp','/img/saojorge/19.webp','/img/saojorge/20.webp','/img/saojorge/21.webp','/img/saojorge/22.webp','/img/saojorge/23.webp','/img/saojorge/24.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar de todas as suítes', 'Piscina', 'Hidromassagem', 'Rooftop', 'Salão de jogos', 'Sala de estar', 'Cozinha equipada', 'Cervejeira e máquina de gelo', 'Ar-condicionado', 'Wi-Fi', 'Suíte master com varanda, closet e chuveiro duplo'],
    en: ['Ocean view from all suites', 'Pool', 'Hot tub', 'Rooftop', 'Game room', 'Living room', 'Equipped kitchen', 'Beer cooler and ice maker', 'Air conditioning', 'Wi-Fi', 'Master suite with veranda, walk-in closet and double shower'],
  },
  description: {
    pt: 'Localizada no bairro Altos do Segredo, a Casa São Jorge combina arquitetura autoral, conforto e uma vista privilegiada para o mar da Bahia. Assinada por um renomado arquiteto baiano, a residência une elegância, privacidade e a essência de Trancoso em ambientes amplos e acolhedores.\n\nCom 585 m² de área construída, a casa oferece cinco suítes climatizadas, todas com vista para o mar, acomodando até 10 hóspedes. A área de lazer conta com piscina, hidromassagem, rooftop e salão de jogos, proporcionando momentos inesquecíveis em um cenário exclusivo.\n\nConfiguração das suítes: Suíte Master com cama king-size, varanda privativa, closet, banheiro com chuveiro duplo e máquina de café; Suíte 2 com cama king-size; Suíte 3 com cama king-size (conversível em 2 solteiro) e sofá-cama; Suíte 4 com cama king-size (conversível em 2 solteiro), sofá-cama e entrada independente; Suíte 5 com cama de casal (conversível em 2 solteiro) e entrada independente.',
    en: 'Located in the Altos do Segredo neighborhood, Casa São Jorge combines signature architecture, comfort and a privileged view of the Bahian sea. Designed by a renowned Bahian architect, the residence brings together elegance, privacy and the essence of Trancoso in spacious and welcoming environments.\n\nWith 585 m² of built area, the house offers five air-conditioned suites, all with ocean views, accommodating up to 10 guests. The leisure area features a pool, hot tub, rooftop and game room, providing unforgettable moments in an exclusive setting.\n\nSuite layout: Master Suite with king-size bed, private veranda, walk-in closet, bathroom with double shower and coffee machine; Suite 2 with king-size bed; Suite 3 with king-size bed (convertible into 2 singles) and sofa bed; Suite 4 with king-size bed (convertible into 2 singles), sofa bed and independent entrance; Suite 5 with double bed (convertible into 2 singles) and independent entrance.',
  },
  notes: { pt: ['Equipe: 1 cozinheira, 2 ajudantes e 1 camareira. Taxa de serviço: 10%.'], en: ['Staff: 1 cook, 2 assistants and 1 chambermaid. Service fee: 10%.'] },
};

const CAZA: Property = {
  id: 'casa-caza-altos-de-trancoso', code: 'TBA-224', name: { pt: 'Casa Cazá', en: 'Casa Cazá' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 6, area: '590 m² · vista 180° para o mar',
  price: { pt: 'R$ 11.550 / diária', en: 'R$ 11,550 / night' },
  priceLow: { pt: 'R$ 9.900 / diária', en: 'R$ 9,900 / night' },
  carnaval: { pt: 'R$ 107.800', en: 'R$ 107,800' },
  reveillon: { pt: 'R$ 352.000', en: 'R$ 352,000' },
  image: '/img/caza/01.jpg',
  gallery: ['/img/caza/01.webp','/img/caza/02.webp','/img/caza/03.webp','/img/caza/04.webp','/img/caza/05.webp','/img/caza/06.webp','/img/caza/07.webp','/img/caza/08.webp','/img/caza/09.webp','/img/caza/10.webp','/img/caza/11.webp','/img/caza/12.webp','/img/caza/13.webp','/img/caza/14.webp','/img/caza/15.webp','/img/caza/16.webp','/img/caza/17.webp','/img/caza/18.webp','/img/caza/19.webp','/img/caza/20.webp','/img/caza/21.webp','/img/caza/22.webp','/img/caza/23.webp','/img/caza/24.webp','/img/caza/25.webp','/img/caza/26.webp','/img/caza/27.webp','/img/caza/28.webp','/img/caza/29.webp','/img/caza/30.webp'], featured: false,
  amenities: {
    pt: ['Vista panorâmica de 180° para o oceano', 'Piscina em pedras balinesas', 'Amplo gramado', 'Bar', 'Sala de estar e jantar', 'Cozinha equipada', 'Área externa para convivência', 'Closets e cofres', 'Mosquiteiros e ar-condicionado', 'Próxima ao Quadrado e às praias'],
    en: ['180° panoramic ocean view', 'Balinese stone pool', 'Large lawn', 'Bar', 'Living and dining rooms', 'Equipped kitchen', 'Outdoor gathering area', 'Walk-in closets and safes', 'Mosquito nets and air conditioning', 'Close to the Quadrado and beaches'],
  },
  description: {
    pt: 'A Casa Cazá está localizada no exclusivo Condomínio Altos de Trancoso e oferece uma experiência marcada por conforto, privacidade e uma vista panorâmica de 180° para o oceano. Em uma das regiões mais desejadas de Trancoso, a residência combina a tranquilidade do condomínio com a proximidade do Quadrado Histórico e das praias.\n\nCom 590 m² de área construída, a casa dispõe de cinco suítes climatizadas e acomoda confortavelmente até 10 hóspedes. Os ambientes amplos e integrados valorizam a luz natural e a vista para o mar, proporcionando uma estadia sofisticada e acolhedora.\n\nConfiguração das suítes: Suítes 1, 2 e 3 com cama king-size, closet, cofre, ar-condicionado e mosquiteiro; Suíte 4 com duas camas de solteiro reversíveis para king-size, closet, cofre, ar-condicionado e mosquiteiro; Suíte 5 com duas camas de solteiro reversíveis para king-size, cofre, ar-condicionado e mosquiteiro.',
    en: 'Casa Cazá is located in the exclusive Altos de Trancoso Condominium and offers an experience marked by comfort, privacy and a 180° panoramic ocean view. In one of Trancoso\'s most desired areas, the residence combines the tranquility of the condominium with proximity to the Historic Quadrado and the beaches.\n\nWith 590 m² of built area, the house has five air-conditioned suites and comfortably accommodates up to 10 guests. The spacious, integrated spaces value natural light and the sea view, providing a sophisticated and welcoming stay.\n\nSuite layout: Suites 1, 2 and 3 with king-size bed, walk-in closet, safe, air conditioning and mosquito net; Suite 4 with two single beds convertible to king-size, walk-in closet, safe, air conditioning and mosquito net; Suite 5 with two single beds convertible to king-size, safe, air conditioning and mosquito net.\n\nIncluded staff: 1 cook, 1 assistant and 1 housekeeper. Service fee: 10%.',
  },
  notes: { pt: ['Equipe incluída: 1 cozinheira, 1 ajudante e 1 arrumadeira. Taxa de serviço: 10%.'], en: [] },
};

const ITAPO06: Property = {
  id: 'aldeia-itapororoca-casa-06', code: 'TBA-225', name: { pt: 'Aldeia de Itapororoca — Casa 06', en: 'Aldeia de Itapororoca — Casa 06' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 4, guests: 8, baths: 5, area: 'Pé na areia',
  price: { pt: 'R$ 9.500 / diária', en: 'R$ 9,500 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'R$ 60.000', en: 'R$ 60,000' },
  reveillon: { pt: 'R$ 350.000', en: 'R$ 350,000' },
  image: '/img/itapororoca06/01.jpg',
  gallery: ['/img/itapororoca06/01.webp','/img/itapororoca06/02.webp','/img/itapororoca06/03.webp','/img/itapororoca06/04.webp','/img/itapororoca06/05.webp','/img/itapororoca06/06.webp','/img/itapororoca06/07.webp','/img/itapororoca06/08.webp','/img/itapororoca06/09.webp','/img/itapororoca06/10.webp','/img/itapororoca06/11.webp','/img/itapororoca06/12.webp','/img/itapororoca06/13.webp','/img/itapororoca06/14.webp','/img/itapororoca06/15.webp','/img/itapororoca06/16.webp','/img/itapororoca06/17.webp','/img/itapororoca06/18.webp','/img/itapororoca06/19.webp','/img/itapororoca06/20.webp','/img/itapororoca06/21.webp','/img/itapororoca06/22.webp','/img/itapororoca06/23.webp','/img/itapororoca06/24.webp','/img/itapororoca06/25.webp','/img/itapororoca06/26.webp','/img/itapororoca06/27.webp','/img/itapororoca06/28.webp','/img/itapororoca06/29.webp','/img/itapororoca06/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia na Praia de Itapororoca', 'Piscina com deck de madeira', 'Banheira de hidromassagem', 'Varanda com redes', 'Espaço gourmet', 'Sala de estar e jantar', 'Cozinha equipada', 'Jardim tropical', 'TV a cabo e ventiladores de teto', 'Toalhas de praia', 'Feriados: R$ 9.500/diária'],
    en: ['Beachfront on Itapororoca Beach', 'Pool with wooden deck', 'Hot tub', 'Veranda with hammocks', 'Gourmet area', 'Living and dining rooms', 'Equipped kitchen', 'Tropical garden', 'Cable TV and ceiling fans', 'Beach towels', 'Holidays: R$ 9,500/night'],
  },
  description: {
    pt: 'Naturalmente acolhedora, a Casa 06 é um refúgio de tranquilidade dentro do exclusivo Condomínio Aldeia de Itapororoca. Sua arquitetura valoriza a madeira, os tons quentes e os elementos inspirados na cultura local, criando ambientes elegantes, confortáveis e profundamente conectados à atmosfera de Trancoso.\n\nA residência possui quatro suítes e recebe confortavelmente até oito hóspedes. A ampla sala de estar se conecta a um agradável ambiente externo, que segue até o deck de madeira e a piscina. O jardim, cercado pela vegetação tropical, oferece diferentes espaços de descanso e convivência para aproveitar os dias com privacidade e contato com a natureza.\n\nBem iluminada e ventilada, a casa também conta com banheira de hidromassagem e uma charmosa varanda com redes. A localização pé na areia completa a experiência, permitindo desfrutar de uma das praias mais bonitas e reservadas de Trancoso.',
    en: 'Naturally welcoming, Casa 06 is a haven of tranquility within the exclusive Aldeia de Itapororoca Condominium. Its architecture values wood, warm tones and elements inspired by local culture, creating elegant, comfortable spaces deeply connected to the atmosphere of Trancoso.\n\nThe residence has four suites and comfortably accommodates up to eight guests. The spacious living room connects to a pleasant outdoor area, which leads to the wooden deck and pool. The garden, surrounded by tropical vegetation, offers different spaces for rest and gathering to enjoy the days with privacy and contact with nature.\n\nBright and airy, the house also features a hot tub and a charming veranda with hammocks. The beachfront location completes the experience, allowing guests to enjoy one of the most beautiful and secluded beaches in Trancoso.',
  },
  notes: { pt: ['Equipe: em períodos regulares, 1 arrumadeira, 1 cozinheira e 1 auxiliar de cozinha; no Réveillon, 2 arrumadeiras, 1 cozinheira e 1 auxiliar. Taxa de serviço: 10%.'], en: ['Staff: in regular periods, 1 housekeeper, 1 cook and 1 kitchen assistant; on New Year\'s, 2 housekeepers, 1 cook and 1 assistant. Service fee: 10%.'] },
};

const ITAPO04: Property = {
  id: 'aldeia-itapororoca-casa-04', code: 'TBA-226', name: { pt: 'Aldeia de Itapororoca — Casa 04', en: 'Aldeia de Itapororoca — Casa 04' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 6, guests: 14, baths: 7, area: '700 m² · terreno 2.000 m²',
  price: { pt: 'R$ 17.500 / diária', en: 'R$ 17,500 / night' },
  priceLow: { pt: 'R$ 14.500 / diária', en: 'R$ 14,500 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/itapororoca04/01.jpg',
  gallery: ['/img/itapororoca04/01.webp','/img/itapororoca04/02.webp','/img/itapororoca04/03.webp','/img/itapororoca04/04.webp','/img/itapororoca04/05.webp','/img/itapororoca04/06.webp','/img/itapororoca04/07.webp','/img/itapororoca04/08.webp','/img/itapororoca04/09.webp','/img/itapororoca04/10.webp','/img/itapororoca04/11.webp','/img/itapororoca04/12.webp','/img/itapororoca04/13.webp','/img/itapororoca04/14.webp','/img/itapororoca04/15.webp','/img/itapororoca04/16.webp','/img/itapororoca04/17.webp','/img/itapororoca04/18.webp','/img/itapororoca04/19.webp','/img/itapororoca04/20.webp','/img/itapororoca04/21.webp','/img/itapororoca04/22.webp','/img/itapororoca04/23.webp','/img/itapororoca04/24.webp','/img/itapororoca04/25.webp','/img/itapororoca04/26.webp','/img/itapororoca04/27.webp','/img/itapororoca04/28.webp','/img/itapororoca04/29.webp','/img/itapororoca04/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia na Praia de Itapororoca', 'Piscina privativa + piscina do condomínio', 'Mini academia', 'Espaço para massagens', 'Adega de vinhos', 'Espaço gourmet com forno de pizza', 'Churrasqueira', 'Apoio de praia', 'Jardim tropical', 'Suíte master com hidromassagem', 'Máquina de gelo', 'Reformada em 2026'],
    en: ['Beachfront on Itapororoca Beach', 'Private pool + condominium pool', 'Mini gym', 'Massage room', 'Wine cellar', 'Gourmet area with pizza oven', 'Barbecue', 'Beach support', 'Tropical garden', 'Master suite with hot tub', 'Ice maker', 'Renovated in 2026'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Aldeia de Itapororoca, a Casa 04 oferece uma experiência de alto padrão à beira-mar, reunindo privacidade, conforto e contato direto com uma das praias mais bonitas de Trancoso.\n\nA arquitetura segue a identidade natural da região, com ambientes amplos, estruturas em madeira e vidro e uma integração fluida entre os espaços internos e externos. Em 2026, a residência passou por uma reforma completa, recebendo melhorias que elevaram ainda mais seu padrão de conforto e lazer, incluindo uma mini academia e um ambiente dedicado a massagens.\n\nO jardim é um dos grandes destaques da propriedade. A área externa conta com piscina, espreguiçadeiras, espaço gourmet com forno de pizza e diferentes ambientes sociais, criando um cenário ideal para reunir familiares e amigos com vista para a natureza tropical.\n\nCom seis suítes, a casa acomoda confortavelmente até 14 hóspedes. A suíte master, no piso superior, tem cama king-size, closet, cofre, mosquiteiro, sofá, TV e banheira de hidromassagem. Locação mínima de 4 diárias; pé na areia, a cerca de 15 minutos de carro do Quadrado.',
    en: 'Located in the exclusive Aldeia de Itapororoca Condominium, Casa 04 offers a high-end seaside experience, combining privacy, comfort and direct contact with one of the most beautiful beaches in Trancoso.\n\nThe architecture follows the region\'s natural identity, with spacious environments, wood and glass structures and a fluid integration between indoor and outdoor spaces. In 2026, the residence underwent a complete renovation, receiving improvements that further elevated its standard of comfort and leisure, including a mini gym and a room dedicated to massages.\n\nThe garden is one of the property\'s highlights. The outdoor area features a pool, loungers, gourmet space with pizza oven and different social environments, creating an ideal setting to gather family and friends overlooking the tropical nature.\n\nWith six suites, the house comfortably accommodates up to 14 guests. The master suite, upstairs, has a king-size bed, walk-in closet, safe, mosquito net, sofa, TV and hot tub. Minimum stay of 4 nights; beachfront, about 15 minutes by car from the Quadrado.\n\nIncluded staff: 1 housekeeper, 1 cook, 1 kitchen assistant and 1 general helper. Service fee: 10% (5% on New Year\'s).',
  },
  notes: { pt: ['Equipe incluída: 1 arrumadeira, 1 cozinheira, 1 auxiliar de cozinha e 1 ajudante geral. Taxa de serviço: 10% (5% no Réveillon).'], en: [] },
};

const ALEGRIA: Property = {
  id: 'casa-alegria-itapororoca', code: 'TBA-227', name: { pt: 'Casa Alegria', en: 'Casa Alegria' },
  purpose: ['aluguel'], location: 'Itapororoca', suites: 6, guests: 14, baths: 7, area: '650 m² · terreno 5.000 m²',
  price: { pt: 'R$ 18.300 / diária', en: 'R$ 18,300 / night' },
  priceLow: { pt: 'R$ 12.900 / diária', en: 'R$ 12,900 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/alegria/01.jpg',
  gallery: ['/img/alegria/01.webp','/img/alegria/02.webp','/img/alegria/03.webp','/img/alegria/04.webp','/img/alegria/05.webp','/img/alegria/06.webp','/img/alegria/07.webp','/img/alegria/08.webp','/img/alegria/09.webp','/img/alegria/10.webp','/img/alegria/11.webp','/img/alegria/12.webp','/img/alegria/13.webp','/img/alegria/14.webp','/img/alegria/15.webp','/img/alegria/16.webp','/img/alegria/17.webp','/img/alegria/18.webp','/img/alegria/19.webp','/img/alegria/20.webp','/img/alegria/21.webp','/img/alegria/22.webp','/img/alegria/23.webp','/img/alegria/24.webp','/img/alegria/25.webp','/img/alegria/26.webp','/img/alegria/27.webp','/img/alegria/28.webp','/img/alegria/29.webp','/img/alegria/30.webp'], featured: true,
  amenities: {
    pt: ['Pé na areia na Praia de Itapororoca', 'Rio de águas tranquilas ao lado', 'Piscina com deck', 'Terraço da piscina', 'Sala de estar e jantar integradas', 'Cozinha gourmet', 'Bangalôs independentes no jardim', 'Suíte master com vista para o mar', 'Ar-condicionado e mosquiteiros', 'Não aceita pets'],
    en: ['Beachfront on Itapororoca Beach', 'Calm-water river alongside', 'Pool with deck', 'Pool terrace', 'Integrated living and dining rooms', 'Gourmet kitchen', 'Independent bungalows in the garden', 'Master suite with ocean view', 'Air conditioning and mosquito nets', 'No pets allowed'],
  },
  description: {
    pt: 'A Casa Alegria está localizada em uma das áreas mais preservadas de Trancoso, em um cenário pé na areia cercado pela Mata Atlântica e pelas águas cristalinas da Praia de Itapororoca. A poucos passos do mar e de um rio de águas tranquilas, a propriedade oferece uma experiência exclusiva em meio à natureza, com total privacidade e conforto.\n\nProjetada pela arquiteta Bia Régis Bittencourt, com direção arquitetônica de Ricardo Salem e interiores assinados pela NB Arquitetura, a residência combina elegância, autenticidade e elementos que valorizam a cultura local. Ambientes amplos e integrados conectam a sala de estar, sala de jantar, cozinha gourmet e terraço da piscina, criando espaços perfeitos para momentos de convivência.\n\nCom terreno de 5.000 m² e 650 m² de área construída, a casa acomoda até 14 hóspedes em seis suítes, distribuídas entre a residência principal e bangalôs independentes voltados para o jardim. A suíte master, no piso superior, tem cama king-size, closet e varanda com vista para o mar.',
    en: 'Casa Alegria is located in one of the most preserved areas of Trancoso, in a beachfront setting surrounded by the Atlantic Forest and the crystal-clear waters of Itapororoca Beach. A few steps from the sea and a calm-water river, the property offers an exclusive experience amid nature, with total privacy and comfort.\n\nDesigned by architect Bia Régis Bittencourt, with architectural direction by Ricardo Salem and interiors by NB Arquitetura, the residence combines elegance, authenticity and elements that value the local culture. Spacious, integrated environments connect the living room, dining room, gourmet kitchen and pool terrace, creating perfect spaces for moments of togetherness.\n\nWith a 5,000 m² plot and 650 m² of built area, the house accommodates up to 14 guests in six suites, distributed between the main residence and independent bungalows facing the garden. The master suite, upstairs, has a king-size bed, walk-in closet and veranda with ocean view.\n\nNo pets allowed. Service fee: 10% (5% on New Year\'s).',
  },
  notes: { pt: ['Não aceita pets. Taxa de serviço: 10% (5% no Réveillon).'], en: [] },
};

const PONTA: Property = {
  id: 'casa-da-ponta-altos-de-itapororoca', code: 'TBA-228', name: { pt: 'Casa da Ponta', en: 'Casa da Ponta' },
  purpose: ['aluguel'], location: 'Altos de Itapororoca', suites: 7, guests: 20, baths: 8, area: '1.500 m² · terreno 14.000 m²',
  price: { pt: 'R$ 22.000 / diária', en: 'R$ 22,000 / night' },
  priceLow: { pt: 'R$ 18.000 / diária', en: 'R$ 18,000 / night' },
  carnaval: { pt: 'R$ 150.000', en: 'R$ 150,000' },
  reveillon: { pt: 'R$ 800.000', en: 'R$ 800,000' },
  image: '/img/ponta/01.jpg',
  gallery: ['/img/ponta/01.webp','/img/ponta/02.webp','/img/ponta/03.webp','/img/ponta/04.webp','/img/ponta/05.webp','/img/ponta/06.webp','/img/ponta/07.webp','/img/ponta/08.webp','/img/ponta/09.webp','/img/ponta/10.webp','/img/ponta/11.webp','/img/ponta/12.webp','/img/ponta/13.webp','/img/ponta/14.webp','/img/ponta/15.webp','/img/ponta/16.webp','/img/ponta/17.webp','/img/ponta/18.webp','/img/ponta/19.webp','/img/ponta/20.webp','/img/ponta/21.webp','/img/ponta/22.webp','/img/ponta/23.webp','/img/ponta/24.webp','/img/ponta/25.webp','/img/ponta/26.webp','/img/ponta/27.webp','/img/ponta/28.webp','/img/ponta/29.webp','/img/ponta/30.webp'], featured: true,
  amenities: {
    pt: ['Vista para o mar', 'Piscina diante da vista', 'Amplo gramado', 'Bangalôs independentes', 'Sala de estar e jantar', 'Cozinha gourmet', 'Varandas com vista', 'Iluminação natural e ventilação cruzada', 'Ar-condicionado e mosquiteiros', 'Diária mínima de 3 noites'],
    en: ['Ocean view', 'Pool facing the view', 'Large lawn', 'Independent bungalows', 'Living and dining rooms', 'Gourmet kitchen', 'Verandas with views', 'Natural light and cross ventilation', 'Air conditioning and mosquito nets', 'Minimum stay of 3 nights'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Itapororoca, a Casa da Ponta foi concebida para integrar arquitetura e natureza de forma harmoniosa. Com 1.500 m² de área construída em um terreno de 14.000 m², a residência privilegia a iluminação natural, a ventilação cruzada e amplos ambientes voltados para a paisagem exuberante de Trancoso.\n\nAssinada por Ricardo Salem e Bia Bittencourt, com paisagismo de Ricardo Salem e interiores de Juliana Nicolay, a propriedade combina linhas contemporâneas, materiais naturais e acabamentos sofisticados. A piscina, posicionada diante da vista para o mar, torna-se um dos principais cenários da casa, cercada por espaços de convivência que convidam ao descanso e à contemplação.\n\nA residência acomoda até 20 hóspedes em sete suítes distribuídas entre a casa principal e dois bangalôs independentes, oferecendo conforto, privacidade e uma experiência exclusiva em Trancoso. As suítes 1 a 3 têm cama king-size, closet e varanda com vista para o mar; os bangalôs (suítes 4 a 7) têm cama king-size, bicama, closet e varanda com vista total ou parcial para o mar.',
    en: 'Located in the exclusive Altos de Itapororoca Condominium, Casa da Ponta was conceived to integrate architecture and nature harmoniously. With 1,500 m² of built area on a 14,000 m² plot, the residence privileges natural light, cross ventilation and generous spaces facing Trancoso\'s lush landscape.\n\nDesigned by Ricardo Salem and Bia Bittencourt, with landscaping by Ricardo Salem and interiors by Juliana Nicolay, the property combines contemporary lines, natural materials and sophisticated finishes. The pool, positioned facing the ocean view, becomes one of the house\'s main settings, surrounded by gathering spaces that invite rest and contemplation.\n\nThe residence accommodates up to 20 guests in seven suites distributed between the main house and two independent bungalows, offering comfort, privacy and an exclusive experience in Trancoso. Suites 1 to 3 have king-size bed, walk-in closet and veranda with ocean view; the bungalows (suites 4 to 7) have king-size bed, trundle bed, walk-in closet and veranda with full or partial ocean view.',
  },
  notes: { pt: ['Diária mínima de 3 noites. Taxa de serviço: 10%.'], en: ['Minimum stay of 3 nights. Service fee: 10%.'] },
};

const PG11: Property = {
  id: 'casa-11-pedro-grande', code: 'TBA-229', name: { pt: 'Casa 11 — Pedro Grande', en: 'Casa 11 — Pedro Grande' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 6, guests: 16, baths: 7, area: '1.047 m²',
  price: { pt: 'R$ 12.500 / diária', en: 'R$ 12,500 / night' },
  priceLow: { pt: 'R$ 12.500 / diária', en: 'R$ 12,500 / night' },
  reveillon: { pt: 'R$ 450.000', en: 'R$ 450,000' },
  image: '/img/pg11/01.jpg',
  gallery: ['/img/pg11/01.webp','/img/pg11/02.webp','/img/pg11/03.webp','/img/pg11/04.webp','/img/pg11/05.webp','/img/pg11/06.webp','/img/pg11/07.webp','/img/pg11/08.webp','/img/pg11/09.webp','/img/pg11/10.webp','/img/pg11/11.webp','/img/pg11/12.webp','/img/pg11/13.webp','/img/pg11/14.webp','/img/pg11/15.webp','/img/pg11/16.webp','/img/pg11/17.webp','/img/pg11/18.webp','/img/pg11/19.webp','/img/pg11/20.webp','/img/pg11/21.webp','/img/pg11/22.webp','/img/pg11/23.webp','/img/pg11/24.webp','/img/pg11/25.webp','/img/pg11/26.webp','/img/pg11/27.webp','/img/pg11/28.webp','/img/pg11/29.webp','/img/pg11/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Espaço gourmet e churrasqueira', 'Adega climatizada', 'Bangalô externo com 2 quartos', 'Sala de estar e jantar integradas', 'Cozinha equipada', 'Jardins com mata nativa', 'Apoio de praia', 'Gerador e poço artesiano', 'Locação mínima de 3 diárias'],
    en: ['Swimming pool', 'Gourmet area and barbecue', 'Climate-controlled wine cellar', 'External bungalow with 2 bedrooms', 'Integrated living and dining rooms', 'Equipped kitchen', 'Gardens with native forest', 'Beach support', 'Generator and artesian well', 'Minimum stay of 3 nights'],
  },
  description: {
    pt: 'No coração do Condomínio Pedro Grande, uma das localizações mais desejadas de Trancoso, a Casa 11 convida seus hóspedes a viver dias de absoluto conforto em um cenário onde natureza, arquitetura e sofisticação convivem em perfeita harmonia.\n\nCom projeto arquitetônico assinado por Julia Bittencourt, paisagismo do Licuri Paisagismo e interiores de Adriana Bozon, a residência foi concebida para valorizar a integração com a mata nativa, privilegiando iluminação natural, ventilação cruzada e amplos espaços de convivência.\n\nLocalizada a apenas 500 metros da Praia do Rio da Barra e a aproximadamente 2,5 km do Quadrado, acomoda confortavelmente até 16 hóspedes em 6 suítes e 2 quartos independentes em bangalô externo. Piscina, espaço gourmet, adega climatizada, jardins e ambientes integrados completam a experiência.',
    en: 'In the heart of Condomínio Pedro Grande, one of Trancoso\'s most desired locations, Casa 11 invites its guests to experience days of absolute comfort in a setting where nature, architecture and sophistication coexist in perfect harmony.\n\nWith architectural design by Julia Bittencourt, landscaping by Licuri Paisagismo and interiors by Adriana Bozon, the residence was conceived to value integration with the native forest, privileging natural light, cross ventilation and generous gathering spaces.\n\nLocated just 500 meters from Rio da Barra Beach and approximately 2.5 km from the Quadrado, it comfortably accommodates up to 16 guests in 6 suites and 2 independent bedrooms in an external bungalow. Pool, gourmet area, climate-controlled wine cellar, gardens and integrated spaces complete the experience.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha e 1 caseiro. Locação mínima de 3 diárias. Taxa de serviço: 10%.'], en: ['Staff: 2 housekeepers, 1 cook, 1 kitchen assistant and 1 caretaker. Minimum stay of 3 nights. Service fee: 10%.'] },
};

const PG111: Property = {
  id: 'casa-11-1-pedro-grande', code: 'TBA-230', name: { pt: 'Casa 11.1 — Pedro Grande', en: 'Casa 11.1 — Pedro Grande' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 4, guests: 8, baths: 4, area: '807 m²',
  price: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  image: '/img/pg111/01.jpg',
  gallery: ['/img/pg111/01.webp','/img/pg111/02.webp','/img/pg111/03.webp','/img/pg111/04.webp','/img/pg111/05.webp','/img/pg111/06.webp','/img/pg111/07.webp','/img/pg111/08.webp','/img/pg111/09.webp','/img/pg111/10.webp','/img/pg111/11.webp','/img/pg111/12.webp','/img/pg111/13.webp','/img/pg111/14.webp','/img/pg111/15.webp','/img/pg111/16.webp','/img/pg111/17.webp','/img/pg111/18.webp','/img/pg111/19.webp','/img/pg111/20.webp','/img/pg111/21.webp','/img/pg111/22.webp','/img/pg111/23.webp','/img/pg111/24.webp','/img/pg111/25.webp','/img/pg111/26.webp','/img/pg111/27.webp','/img/pg111/28.webp','/img/pg111/29.webp','/img/pg111/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Espaço gourmet e churrasqueira', 'Suíte inteiramente em madeira', 'Sala de estar e jantar', 'Cozinha equipada', 'Integração total com a natureza', 'Gerador e poço artesiano', 'Condomínio fechado', 'Não aceita animais de estimação', 'Locação mínima de 3 diárias'],
    en: ['Swimming pool', 'Gourmet area and barbecue', 'Suite built entirely in wood', 'Living and dining rooms', 'Equipped kitchen', 'Full integration with nature', 'Generator and artesian well', 'Gated community', 'No pets allowed', 'Minimum stay of 3 nights'],
  },
  description: {
    pt: 'Em meio à vegetação preservada do Condomínio Pedro Grande, a Casa 11.1 oferece uma estadia marcada por conforto, tranquilidade e total integração com a natureza. A poucos minutos da Praia do Rio da Barra e do Quadrado, a propriedade combina privacidade com fácil acesso aos principais pontos de Trancoso.\n\nO projeto arquitetônico, assinado por Julia Bittencourt, valoriza a luz natural, a ventilação e a conexão entre os ambientes internos e externos. O paisagismo do Licuri Paisagismo e a decoração de Adriana Bozon completam a atmosfera acolhedora da casa, com referências à cultura local, à natureza e às viagens da proprietária pelo mundo.\n\nCom 807 m² de área construída, a residência dispõe de 4 suítes e acomoda confortavelmente até 8 hóspedes. Uma das suítes, construída inteiramente em madeira, é um dos destaques do projeto, trazendo personalidade e aconchego à experiência.',
    en: 'Amid the preserved vegetation of Condomínio Pedro Grande, Casa 11.1 offers a stay marked by comfort, tranquility and full integration with nature. Just minutes from Rio da Barra Beach and the Quadrado, the property combines privacy with easy access to Trancoso\'s main attractions.\n\nThe architectural design, signed by Julia Bittencourt, values natural light, ventilation and the connection between indoor and outdoor spaces. Landscaping by Licuri Paisagismo and decoration by Adriana Bozon complete the house\'s welcoming atmosphere, with references to local culture, nature and the owner\'s travels around the world.\n\nWith 807 m² of built area, the residence has 4 suites and comfortably accommodates up to 8 guests. One of the suites, built entirely in wood, is one of the project\'s highlights, bringing personality and coziness to the experience.',
  },
  notes: { pt: ['Staff: 1 arrumadeira, 1 cozinheira e 1 copeiro. Locação mínima de 3 diárias. Não é permitida a hospedagem de animais de estimação. Taxa de serviço: 10%.'], en: ['Staff: 1 housekeeper, 1 cook and 1 waiter. Minimum stay of 3 nights. No pets allowed. Service fee: 10%.'] },
};

const PG104: Property = {
  id: 'casa-104-pedro-grande', code: 'TBA-231', name: { pt: 'Casa 104 — Pedro Grande', en: 'Casa 104 — Pedro Grande' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 4, guests: 8, baths: 4, area: 'Vista para o mar',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  carnaval: { pt: 'R$ 65.000 (2027)', en: 'R$ 65,000 (2027)' },
  reveillon: { pt: 'R$ 300.000', en: 'R$ 300,000' },
  image: '/img/pg104/01.jpg',
  gallery: ['/img/pg104/01.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina de formato orgânico sobre deck de madeira', 'Pergolado com sofá', 'Amplo gramado', 'Jardim tropical integrado à mata nativa', 'Quadra de tênis', 'Churrasqueira', 'Cozinha totalmente equipada', 'Condomínio com apenas 11 residências', '15 min a pé da Praia do Rio da Barra'],
    en: ['Ocean view', 'Organic-shaped pool over wooden deck', 'Pergola with sofa', 'Large lawn', 'Tropical garden integrated with native forest', 'Tennis court', 'Barbecue', 'Fully equipped kitchen', 'Condominium with only 11 residences', '15 min walk to Rio da Barra Beach'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Pedro Grande Casas, um condomínio com apenas 11 residências, a Casa 104 oferece uma experiência de privacidade, conforto e contato permanente com a natureza. Cercada por um exuberante jardim tropical integrado à mata nativa, a propriedade desfruta de uma bela vista para o mar e de ambientes planejados para proporcionar tranquilidade e bem-estar.\n\nAs amplas portas e janelas de vidro valorizam a iluminação natural e revelam a paisagem ao redor. A área externa reúne piscina de formato orgânico sobre deck de madeira, pergolado com sofá, amplo gramado e espaços perfeitos para relaxar. A Praia do Rio da Barra está a aproximadamente 15 minutos de caminhada.\n\nA casa dispõe de 4 suítes com ar-condicionado, sala de estar, cozinha totalmente equipada, varanda, churrasqueira, piscina, deck, estacionamento e quadra de tênis.',
    en: 'Located in the exclusive Condomínio Pedro Grande Casas, a condominium with only 11 residences, Casa 104 offers an experience of privacy, comfort and permanent contact with nature. Surrounded by a lush tropical garden integrated with the native forest, the property enjoys a beautiful ocean view and spaces designed to provide tranquility and well-being.\n\nWide glass doors and windows value natural light and reveal the surrounding landscape. The outdoor area features an organic-shaped pool over a wooden deck, a pergola with sofa, a large lawn and perfect spaces to relax. Rio da Barra Beach is approximately 15 minutes away on foot.\n\nThe house has 4 air-conditioned suites, living room, fully equipped kitchen, veranda, barbecue, pool, deck, parking and tennis court.',
  },
  notes: { pt: ['Staff: 1 arrumadeira, 1 cozinheira e 1 profissional de serviços gerais. Taxa de serviço: 10%.'], en: ['Staff: 1 housekeeper, 1 cook and 1 general services professional. Service fee: 10%.'] },
};

const MANDACARU: Property = {
  id: 'casa-mandacaru-altos-de-trancoso', code: 'TBA-232', name: { pt: 'Casa Mandacaru', en: 'Casa Mandacaru' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 7, guests: 14, baths: 8, area: '1.209 m² · terreno 7.236 m²',
  price: { pt: 'R$ 19.800 / diária', en: 'R$ 19,800 / night' },
  priceLow: { pt: 'R$ 14.800 / diária', en: 'R$ 14,800 / night' },
  carnaval: { pt: 'R$ 231.000', en: 'R$ 231,000' },
  reveillon: { pt: 'R$ 1.100.000', en: 'R$ 1,100,000' },
  image: '/img/mandacaru/01.jpg',
  gallery: ['/img/mandacaru/01.webp','/img/mandacaru/02.webp','/img/mandacaru/03.webp','/img/mandacaru/04.webp','/img/mandacaru/05.webp','/img/mandacaru/06.webp','/img/mandacaru/07.webp','/img/mandacaru/08.webp','/img/mandacaru/09.webp','/img/mandacaru/10.webp','/img/mandacaru/11.webp','/img/mandacaru/12.webp','/img/mandacaru/13.webp','/img/mandacaru/14.webp','/img/mandacaru/15.webp','/img/mandacaru/16.webp','/img/mandacaru/17.webp','/img/mandacaru/18.webp','/img/mandacaru/19.webp','/img/mandacaru/20.webp','/img/mandacaru/21.webp','/img/mandacaru/22.webp','/img/mandacaru/23.webp','/img/mandacaru/24.webp','/img/mandacaru/25.webp','/img/mandacaru/26.webp','/img/mandacaru/27.webp','/img/mandacaru/28.webp','/img/mandacaru/29.webp','/img/mandacaru/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar sobre as falésias', 'Piscina de 105 m² e jacuzzi', 'Mirante com área para fogueira', 'Academia e sala de massagem', 'Home theater com sinuca', 'Projeto sustentável Vida de Vila', 'Telhado verde e energia própria', 'Madeiras e telhas de demolição', 'Adega climatizada', 'Staff completo com gerente e barman'],
    en: ['Ocean view over the cliffs', '105 m² pool and jacuzzi', 'Lookout with fire pit area', 'Gym and massage room', 'Home theater with pool table', 'Sustainable project by Vida de Vila', 'Green roof and own energy generation', 'Reclaimed wood and tiles', 'Climate-controlled wine cellar', 'Full staff with manager and barman'],
  },
  description: {
    pt: 'A Casa Mandacaru é uma residência de alto padrão localizada no Condomínio Altos de Trancoso, marcada por um projeto arquitetônico sustentável e por uma conexão permanente com a natureza. Assinada pelo escritório Vida de Vila, a propriedade foi concebida para valorizar a paisagem, a cultura regional e o uso consciente dos recursos naturais.\n\nConstruída com madeiras e telhas de demolição, a casa utiliza mão de obra local e possui geração própria de energia. O telhado verde instalado sobre a suíte master contribui para o conforto térmico, enquanto a implantação do projeto acompanha a topografia natural do terreno e preserva a vegetação ao redor.\n\nCercada por um jardim tropical que se estende sobre as falésias, a Casa Mandacaru oferece uma vista privilegiada para o mar da Bahia. Um dos destaques é o mirante com área para fogueira, perfeito para apreciar o pôr do sol de Trancoso. A área de lazer conta ainda com piscina de 105 m², jacuzzi, churrasqueira, academia, sala de massagem e espaço social com mesa de sinuca e pingue-pongue.',
    en: 'Casa Mandacaru is a high-end residence located in the Altos de Trancoso Condominium, marked by a sustainable architectural project and a permanent connection with nature. Signed by the Vida de Vila studio, the property was conceived to value the landscape, regional culture and conscious use of natural resources.\n\nBuilt with reclaimed wood and tiles, the house uses local labor and has its own energy generation. The green roof installed over the master suite contributes to thermal comfort, while the project\'s implantation follows the natural topography of the land and preserves the surrounding vegetation.\n\nSurrounded by a tropical garden that extends over the cliffs, Casa Mandacaru offers a privileged view of the Bahia sea. One of the highlights is the lookout with a fire pit area, perfect for enjoying Trancoso\'s sunset. The leisure area also includes a 105 m² pool, jacuzzi, barbecue, gym, massage room and social space with pool and ping-pong tables.\n\nAccommodates up to 14 guests in 7 bedrooms. Staff: 2 housekeepers, 1 cook, 1 kitchen assistant, 1 barman, 1 gardener, 1 pool keeper and 1 manager. Minimum 3 nights (low season) and 4 nights (high season and holidays). Service fee: 10%.',
  },
  notes: { pt: ['Acomoda até 14 hóspedes em 7 quartos. Staff: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha, 1 barman, 1 jardineiro, 1 piscineiro e 1 gerente. Mínimo de 3 noites (baixa temporada) e 4 noites (alta temporada e feriados). Taxa de serviço: 10%.'], en: [] },
};

const PONTARB: Property = {
  id: 'casa-da-ponta-rio-da-barra', code: 'TBA-233', name: { pt: 'Casa da Ponta — Rio da Barra', en: 'Casa da Ponta — Rio da Barra' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 5, guests: 10, baths: 5, area: '1.200 m² · terreno 37.000 m²',
  price: { pt: 'R$ 20.000 / diária', en: 'R$ 20,000 / night' },
  priceLow: { pt: 'R$ 17.000 / diária', en: 'R$ 17,000 / night' },
  image: '/img/ponta-rio-da-barra/01.jpg',
  gallery: ['/img/ponta-rio-da-barra/01.webp','/img/ponta-rio-da-barra/02.webp','/img/ponta-rio-da-barra/03.webp','/img/ponta-rio-da-barra/04.webp','/img/ponta-rio-da-barra/05.webp','/img/ponta-rio-da-barra/06.webp','/img/ponta-rio-da-barra/07.webp','/img/ponta-rio-da-barra/08.webp','/img/ponta-rio-da-barra/09.webp','/img/ponta-rio-da-barra/10.webp','/img/ponta-rio-da-barra/11.webp','/img/ponta-rio-da-barra/12.webp','/img/ponta-rio-da-barra/13.webp','/img/ponta-rio-da-barra/14.webp','/img/ponta-rio-da-barra/15.webp','/img/ponta-rio-da-barra/16.webp','/img/ponta-rio-da-barra/17.webp','/img/ponta-rio-da-barra/18.webp','/img/ponta-rio-da-barra/19.webp','/img/ponta-rio-da-barra/20.webp','/img/ponta-rio-da-barra/21.webp','/img/ponta-rio-da-barra/22.webp','/img/ponta-rio-da-barra/23.webp','/img/ponta-rio-da-barra/24.webp','/img/ponta-rio-da-barra/25.webp','/img/ponta-rio-da-barra/26.webp','/img/ponta-rio-da-barra/27.webp','/img/ponta-rio-da-barra/28.webp','/img/ponta-rio-da-barra/29.webp','/img/ponta-rio-da-barra/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia na Praia do Rio da Barra', 'Piscina com vista para o mar', 'Academia e sauna', 'Sala de jogos e sala de massagem', 'Espaço gourmet com forno de pizza', 'Adega', 'Bangalôs independentes', 'Encontro do rio com o mar', 'Apoio de praia', 'Locação mínima de 5 noites'],
    en: ['Beachfront on Rio da Barra Beach', 'Pool with ocean view', 'Gym and sauna', 'Games room and massage room', 'Gourmet area with pizza oven', 'Wine cellar', 'Independent bungalows', 'Where the river meets the sea', 'Beach support', 'Minimum stay of 5 nights'],
  },
  staff: {
    pt: ['02 arrumadeiras', '01 cozinheira', '01 auxiliar de cozinha', '01 copeira', '01 serviços gerais/barman', '01 jardineiro', '01 vigia noturno'],
    en: ['02 housekeepers', '01 cook', '01 kitchen assistant', '01 waitress', '01 general services/barman', '01 gardener', '01 night watchman'],
  },
  description: {
    pt: 'A Casa da Ponta é um refúgio pé na areia na Praia do Rio da Barra, cercada pela Mata Atlântica e pelo encontro do rio com o mar. Com 37.000 m² de terreno e 1.200 m² de área construída, acomoda até 10 hóspedes em cinco suítes distribuídas entre a casa principal e bangalôs independentes.\n\nPiscina com vista para o mar, academia, sauna, sala de jogos, espaço gourmet e equipe completa proporcionam uma experiência exclusiva em Trancoso.\n\nA suíte master conta com cama king, closet, sala íntima e deck com vista para o mar; as demais suítes oferecem vistas para a lagoa, para o mar ou para o jardim.',
    en: 'Casa da Ponta is a beachfront retreat on Rio da Barra Beach, surrounded by the Atlantic Forest and the meeting of the river and the sea. With 37,000 m² of land and 1,200 m² of built area, it accommodates up to 10 guests in five suites distributed between the main house and independent bungalows.\n\nPool with ocean view, gym, sauna, games room, gourmet area and full staff provide an exclusive experience in Trancoso.\n\nThe master suite features a king bed, walk-in closet, private sitting room and deck with ocean view; the other suites offer lagoon, ocean or garden views.',
  },
  notes: { pt: ['Staff: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha, 1 copeira, 1 serviços gerais/barman, 1 jardineiro e 1 vigia noturno. Locação mínima de 5 noites. Taxa de serviço: 10%.'], en: ['Staff: 2 housekeepers, 1 cook, 1 kitchen assistant, 1 waitress, 1 general services/barman, 1 gardener and 1 night watchman. Minimum stay of 5 nights. Service fee: 10%.'] },
};

const FALESIA: Property = {
  id: 'casa-falesia-rio-da-barra', code: 'TBA-234', name: { pt: 'Casa Falésia', en: 'Casa Falésia' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 6, guests: 12, baths: 7, area: 'Pé na falésia, vista para o mar',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/falesia/01.jpg',
  gallery: ['/img/falesia/01.webp','/img/falesia/02.webp','/img/falesia/03.webp','/img/falesia/04.webp','/img/falesia/05.webp','/img/falesia/06.webp','/img/falesia/07.webp','/img/falesia/08.webp','/img/falesia/09.webp','/img/falesia/10.webp','/img/falesia/11.webp','/img/falesia/12.webp','/img/falesia/13.webp','/img/falesia/14.webp','/img/falesia/15.webp','/img/falesia/16.webp','/img/falesia/17.webp','/img/falesia/18.webp','/img/falesia/19.webp','/img/falesia/20.webp','/img/falesia/21.webp','/img/falesia/22.webp','/img/falesia/23.webp','/img/falesia/24.webp','/img/falesia/25.webp','/img/falesia/26.webp','/img/falesia/27.webp','/img/falesia/28.webp','/img/falesia/29.webp'], featured: false,
  amenities: {
    pt: ['Pergolado na falésia com vista para o mar', 'Piscina', 'Espaço gourmet com churrasqueira', '4 suítes internas + 2 suítes independentes', 'Sala de estar ampla e aconchegante', 'Copa com mesa para 10 lugares', 'Cozinha completa com fogão industrial', 'Som JBL 100', 'Lareira portátil no pergolado', 'Staff com cozinheira, camareira e gerente da casa'],
    en: ['Pergola on the cliff with ocean view', 'Swimming pool', 'Gourmet area with barbecue', '4 internal suites + 2 independent suites', 'Spacious and cozy living room', 'Breakfast room with table for 10', 'Full kitchen with industrial stove', 'JBL 100 sound system', 'Portable fireplace at the pergola', 'Staff with cook, chambermaid and house manager'],
  },
  description: {
    pt: 'A Casa Falésia foi projetada para oferecer conforto, privacidade e momentos inesquecíveis em Trancoso. Com ambientes amplos e integrados, combina áreas sociais acolhedoras com uma excelente estrutura de lazer, sendo ideal para reunir famílias e grupos de amigos em uma estadia exclusiva.\n\nA casa dispõe de 6 suítes, sendo 4 internas e 2 suítes independentes na área externa. Os ambientes internos incluem sala de estar ampla e aconchegante, lavabo, cozinha completa, copa com mesa para 10 lugares, lavanderia e dependência para funcionário.\n\nNa área externa, o espaço gourmet com churrasqueira, a piscina e o pergolado na falésia — com sofá, cadeiras e lareira portátil — criam cenários perfeitos para dias memoráveis diante da vista.',
    en: 'Casa Falésia was designed to offer comfort, privacy and unforgettable moments in Trancoso. With spacious and integrated spaces, it combines welcoming social areas with an excellent leisure structure, ideal for gathering families and groups of friends in an exclusive stay.\n\nThe house has 6 suites, 4 internal and 2 independent suites in the outdoor area. Indoor spaces include a spacious and cozy living room, powder room, full kitchen, breakfast room with a table for 10, laundry and staff quarters.\n\nOutdoors, the gourmet area with barbecue, the pool and the cliff-top pergola — with sofa, chairs and a portable fireplace — create perfect settings for memorable days facing the view.',
  },
  notes: { pt: ['Staff: 1 cozinheira, 1 camareira e 1 gerente da casa.'], en: ['Staff: 1 cook, 1 chambermaid and 1 house manager.'] },
};

const RAIZES: Property = {
  id: 'casa-raizes-itapororoca', code: 'TBA-235', name: { pt: 'Casa Raízes', en: 'Casa Raízes' },
  purpose: ['aluguel'], location: 'Altos de Itapororoca', suites: 7, guests: 14, baths: 8, area: '1.200 m² · terreno 22.000 m²',
  price: { pt: 'R$ 16.000 / diária', en: 'R$ 16,000 / night' },
  priceLow: { pt: 'R$ 14.000 / diária', en: 'R$ 14,000 / night' },
  carnaval: { pt: 'R$ 150.000', en: 'R$ 150,000' },
  reveillon: { pt: 'R$ 800.000', en: 'R$ 800,000' },
  image: '/img/raizes/01.jpg',
  gallery: ['/img/raizes/01.webp','/img/raizes/02.webp','/img/raizes/03.webp','/img/raizes/04.webp','/img/raizes/05.webp','/img/raizes/06.webp','/img/raizes/07.webp','/img/raizes/08.webp','/img/raizes/09.webp','/img/raizes/10.webp','/img/raizes/11.webp','/img/raizes/12.webp','/img/raizes/13.webp','/img/raizes/14.webp','/img/raizes/15.webp','/img/raizes/16.webp','/img/raizes/17.webp','/img/raizes/18.webp','/img/raizes/19.webp','/img/raizes/20.webp','/img/raizes/21.webp','/img/raizes/22.webp','/img/raizes/23.webp','/img/raizes/24.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina aquecida', 'Projeto em 4 blocos independentes', 'Academia, sauna e sala de massagem', 'Quadra de areia e meia quadra de basquete', 'Lago e 5 caiaques', 'Deck com churrasqueira e vista mar', 'Apoio de praia a 2 min', 'Arquitetura de Gabriela Gontijo', 'Locação mínima de 3 diárias'],
    en: ['Ocean view', 'Heated pool', 'Project in 4 independent blocks', 'Gym, sauna and massage room', 'Sand court and half basketball court', 'Lake and 5 kayaks', 'Deck with barbecue and ocean view', 'Beach support 2 min away', 'Architecture by Gabriela Gontijo', 'Minimum stay of 3 nights'],
  },
  description: {
    pt: 'A Casa Raízes é uma residência de alto padrão localizada em Itapororoca, uma das regiões mais exclusivas de Trancoso. Implantada em um terreno de 22.000 m² e cercada pela natureza, a propriedade foi projetada em quatro blocos independentes para proporcionar privacidade, conforto e integração com a paisagem.\n\nA casa principal reúne quatro suítes, cozinha equipada, espaço gourmet e mesa de bilhar. O bloco de hóspedes conta com três suítes, sala de TV e varanda. O espaço de bem-estar oferece academia, sala de massagem e sauna seca. Na área externa destacam-se a piscina aquecida, quadra de areia, meia quadra de basquete, lago e um amplo deck com churrasqueira e vista para o mar. O apoio de praia fica a apenas dois minutos de carro ou por uma charmosa escadaria.\n\nArquitetura de Gabriela Gontijo, com paisagismo e decoração de Paula Rocha Mello.',
    en: 'Casa Raízes is a high-end residence located in Itapororoca, one of Trancoso\'s most exclusive regions. Set on a 22,000 m² plot surrounded by nature, the property was designed in four independent blocks to provide privacy, comfort and integration with the landscape.\n\nThe main house brings together four suites, equipped kitchen, gourmet area and pool table. The guest block has three suites, TV room and veranda. The wellness space offers a gym, massage room and dry sauna. Outdoors, highlights include the heated pool, sand court, half basketball court, lake and a large deck with barbecue and ocean view. Beach support is just two minutes by car or via a charming staircase.\n\nArchitecture by Gabriela Gontijo, with landscaping and decoration by Paula Rocha Mello.',
  },
  notes: { pt: ['Staff: 1 arrumadeira, 1 cozinheira, 1 auxiliar de cozinha, 1 caseiro, 1 jardineiro e 1 piscineiro. Locação mínima de 3 diárias. No pacote de Réveillon, a taxa de serviço corresponde a 5% do valor total da locação.'], en: ['Staff: 1 housekeeper, 1 cook, 1 kitchen assistant, 1 caretaker, 1 gardener and 1 pool keeper. Minimum stay of 3 nights. For the New Year\'s package, the service fee is 5% of the total rental amount.'] },
};

const PONTABARRA: Property = {
  id: 'casa-ponta-da-barra', code: 'TBA-236', name: { pt: 'Casa Ponta da Barra', en: 'Casa Ponta da Barra' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 6, guests: 12, baths: 6, area: 'Pé na areia',
  price: { pt: 'R$ 20.000 / diária', en: 'R$ 20,000 / night' },
  priceLow: { pt: 'R$ 16.000 / diária', en: 'R$ 16,000 / night' },
  reveillon: { pt: 'R$ 670.000', en: 'R$ 670,000' },
  image: '/img/ponta-da-barra/01.jpg',
  gallery: ['/img/ponta-da-barra/01.webp','/img/ponta-da-barra/02.webp','/img/ponta-da-barra/03.webp','/img/ponta-da-barra/04.webp','/img/ponta-da-barra/05.webp','/img/ponta-da-barra/06.webp','/img/ponta-da-barra/07.webp','/img/ponta-da-barra/08.webp','/img/ponta-da-barra/09.webp','/img/ponta-da-barra/10.webp','/img/ponta-da-barra/11.webp','/img/ponta-da-barra/12.webp','/img/ponta-da-barra/13.webp','/img/ponta-da-barra/14.webp','/img/ponta-da-barra/15.webp','/img/ponta-da-barra/16.webp','/img/ponta-da-barra/17.webp','/img/ponta-da-barra/18.webp','/img/ponta-da-barra/19.webp','/img/ponta-da-barra/20.webp','/img/ponta-da-barra/21.webp','/img/ponta-da-barra/22.webp','/img/ponta-da-barra/23.webp','/img/ponta-da-barra/24.webp','/img/ponta-da-barra/25.webp','/img/ponta-da-barra/26.webp','/img/ponta-da-barra/27.webp','/img/ponta-da-barra/28.webp','/img/ponta-da-barra/29.webp','/img/ponta-da-barra/30.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia na Praia do Rio da Barra', 'Piscina emoldurada por palmeiras', 'Ofurô', 'Adega de vinhos', 'Sala de estar e sala de jantar', 'Cozinha equipada', 'Sistema de som', 'Espreguiçadeiras e ombrelones', 'Vista para o mar', 'Suíte master com spa e vista mar'],
    en: ['Beachfront on Rio da Barra Beach', 'Pool framed by palm trees', 'Hot tub', 'Wine cellar', 'Living room and dining room', 'Equipped kitchen', 'Sound system', 'Sun loungers and umbrellas', 'Ocean view', 'Master suite with spa and ocean view'],
  },
  staff: {
    pt: ['02 arrumadeiras', '01 cozinheira', '01 caseiro', '01 jardineiro/piscineiro', '01 guarda-noturno'],
    en: ['02 housekeepers', '01 cook', '01 caretaker', '01 gardener/pool keeper', '01 night guard'],
  },
  description: {
    pt: 'Rodeada pelos manguezais e com acesso direto à tranquila Praia do Rio da Barra, a Casa Ponta da Barra é um refúgio exclusivo para quem deseja viver Trancoso com conforto, privacidade e contato permanente com a natureza.\n\nSeus ambientes são amplos, arejados e marcados por uma estética rústica e sofisticada, típica das melhores casas de praia da região. A propriedade dispõe de quatro suítes e dois quartos, acomodando até 12 hóspedes com conforto. A suíte master possui vista para o mar, enquanto os demais dormitórios se voltam para o exuberante jardim tropical que contorna a residência.\n\nA poucos passos do mar, os hóspedes podem passar o dia na praia e, ao fim da tarde, aproveitar a piscina emoldurada por grandes palmeiras. É uma casa pensada para quem procura exclusividade, tranquilidade e uma conexão genuína com a paisagem natural de Trancoso.',
    en: 'Surrounded by mangroves and with direct access to the tranquil Rio da Barra Beach, Casa Ponta da Barra is an exclusive retreat for those who wish to experience Trancoso with comfort, privacy and permanent contact with nature.\n\nIts spaces are spacious, airy and marked by a rustic and sophisticated aesthetic, typical of the best beach houses in the region. The property has four suites and two bedrooms, comfortably accommodating up to 12 guests. The master suite overlooks the sea, while the other rooms face the lush tropical garden that surrounds the residence.\n\nJust steps from the sea, guests can spend the day at the beach and, in the late afternoon, enjoy the pool framed by tall palm trees. It is a house designed for those seeking exclusivity, tranquility and a genuine connection with Trancoso\'s natural landscape.',
  },
}

const FASANO10: Property = {
  id: 'estancia-fasano-10', code: 'TBA-237', name: { pt: 'Estância Fasano 10', en: 'Estância Fasano 10' },
  purpose: ['aluguel'], location: 'Estâncias Fasano', suites: 7, guests: 14, baths: 7, area: '959 m² · terreno 4.600 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/fasano10/01.jpg',
  gallery: ['/img/fasano10/01.webp','/img/fasano10/02.webp','/img/fasano10/03.webp','/img/fasano10/04.webp','/img/fasano10/05.webp','/img/fasano10/06.webp','/img/fasano10/07.webp','/img/fasano10/08.webp','/img/fasano10/09.webp','/img/fasano10/10.webp','/img/fasano10/11.webp','/img/fasano10/12.webp','/img/fasano10/13.webp','/img/fasano10/14.webp','/img/fasano10/15.webp','/img/fasano10/16.webp','/img/fasano10/17.webp','/img/fasano10/18.webp','/img/fasano10/19.webp','/img/fasano10/20.webp','/img/fasano10/21.webp','/img/fasano10/22.webp','/img/fasano10/23.webp','/img/fasano10/24.webp','/img/fasano10/25.webp','/img/fasano10/26.webp','/img/fasano10/27.webp','/img/fasano10/28.webp','/img/fasano10/29.webp','/img/fasano10/30.webp'], featured: false,
  amenities: {
    pt: ['Academia do condomínio', 'Adega climatizada', 'Amenities', 'Apoio de praia', 'Ar-condicionado', 'Beach tennis', 'Bicicletas', 'Carrinho de golfe', 'Cervejeira', 'Churrasqueira', 'Cofres nas suítes', 'Cozinha equipada', 'Espreguiçadeiras e ombrelones', 'Estacionamento', 'Extintor', 'Freezer', 'Frigobar', 'Geladeira de cerveja', 'Gerador', 'Internet Wi-Fi', 'Kids friendly', 'Lavabo', 'Lavanderia', 'Máquina de gelo', 'Máquina de lavar-louça', 'Mosquiteiros', 'Piscina de 20 m x 6 m', 'Poço artesiano', 'Quadra de tênis', 'Roupas de cama, mesa e banho', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Sauna', 'Secador de cabelo', 'Som ambiente', 'Toalhas de piscina e praia', 'TV', 'Ventilador de teto', 'Vista para o mar'],
    en: ['Condominium gym', 'Climate-controlled wine cellar', 'Amenities', 'Beach support', 'Air conditioning', 'Beach tennis', 'Bicycles', 'Golf cart', 'Beer fridge', 'Barbecue', 'Safes in the suites', 'Equipped kitchen', 'Sun loungers and parasols', 'Parking', 'Fire extinguisher', 'Freezer', 'Minibar', 'Beer cooler', 'Generator', 'Wi-Fi internet', 'Kids friendly', 'Guest bathroom', 'Laundry room', 'Ice machine', 'Dishwasher', 'Mosquito nets', '20 m x 6 m swimming pool', 'Artesian well', 'Tennis court', 'Bed, table and bath linens', 'Living room', 'Dining room', 'TV room', 'Sauna', 'Hairdryer', 'Ambient sound', 'Pool and beach towels', 'TV', 'Ceiling fan', 'Ocean view'],
  },
  staff: {
    pt: ['03 arrumadeiras', '01 cozinheira', '01 auxiliar de cozinha', '01 barman/copeiro', '01 profissional de serviços gerais'],
    en: ['03 housekeepers', '01 cook', '01 kitchen assistant', '01 barman/waiter', '01 general services professional'],
  },
  description: {
    pt: 'A Estância 10, localizada no exclusivo condomínio Estâncias Fasano Trancoso, é uma residência de luxo que traduz, de maneira contemporânea, a essência da Costa do Descobrimento. A casa carrega uma atmosfera leve, brasileira e sofisticada, conectada à identidade natural, solar e cultural da região e ao estilo singular de Trancoso.\n\nAssinada pelo arquiteto Lucas Padovani, a residência combina elegância, simplicidade sofisticada e integração total com a natureza. Sua volumetria horizontal se distribui em dois pavimentos, marcada por uma cobertura leve em madeira, grandes panos de vidro e uma escada escultural que conecta a área íntima ao jardim de forma fluida.\n\nImplantada em um terreno de 4.600 m², com 959 m² de área construída, a propriedade possui sete suítes voltadas para o mar, planejadas para oferecer privacidade, conforto e vistas privilegiadas para o oceano. Materiais naturais, tons neutros e texturas brasileiras reforçam a atmosfera acolhedora e atemporal da casa.\n\nO paisagismo de Daniel Nunes envolve a residência com um exuberante jardim tropical. Espécies nativas, palmeiras, árvores preservadas, caminhos orgânicos e áreas de convivência ao ar livre criam a sensação de um santuário particular.\n\nA piscina central, com 20 metros por 6 metros, é o coração da área externa. Ao seu redor, lounges, mesa para até 18 pessoas, mobiliário premium e vegetação abundante compõem um cenário ideal para dias de descanso, lazer e convivência.\n\nNos interiores, peças de grandes nomes do design brasileiro foram cuidadosamente selecionadas para expressar sofisticação, conforto e autenticidade. Entre os designers presentes estão Sergio Rodrigues, Jader Almeida, Zanini de Zanine, Carlos Motta, Jean Gillon e outros nomes de relevância nacional e internacional.',
    en: 'Estância 10, located in the exclusive Estâncias Fasano Trancoso condominium, is a luxury residence that translates, in a contemporary way, the essence of the Discovery Coast. The house carries a light, Brazilian and sophisticated atmosphere, connected to the natural, sunny and cultural identity of the region and to the singular style of Trancoso.\n\nDesigned by architect Lucas Padovani, the residence combines elegance, sophisticated simplicity and total integration with nature. Its horizontal volume is distributed over two floors, marked by a light wooden roof, large glass panels and a sculptural staircase that fluidly connects the private area to the garden.\n\nSet on a 4,600 m² plot, with 959 m² of built area, the property has seven ocean-facing suites, planned to offer privacy, comfort and privileged views of the ocean. Natural materials, neutral tones and Brazilian textures reinforce the welcoming and timeless atmosphere of the house.\n\nLandscaping by Daniel Nunes wraps the residence in a lush tropical garden. Native species, palm trees, preserved trees, organic paths and outdoor living areas create the feeling of a private sanctuary.\n\nThe central pool, 20 meters by 6 meters, is the heart of the outdoor area. Around it, lounges, a table for up to 18 people, premium furniture and abundant vegetation compose an ideal setting for days of rest, leisure and togetherness.\n\nIn the interiors, pieces by great names of Brazilian design were carefully selected to express sophistication, comfort and authenticity. Among the designers present are Sergio Rodrigues, Jader Almeida, Zanini de Zanine, Carlos Motta, Jean Gillon and other names of national and international relevance.',
  },
  locationDetail: {
    pt: 'Condomínio Estâncias Fasano Trancoso, em Trancoso, Bahia. A propriedade está inserida em um dos endereços mais exclusivos da região, cercada pela natureza e com estrutura de lazer e apoio de praia do condomínio.',
    en: 'Estâncias Fasano Trancoso condominium, in Trancoso, Bahia. The property is set in one of the most exclusive addresses in the region, surrounded by nature and with the condominium\'s leisure structure and beach support.',
  },
};

const FASANO16: Property = {
  id: 'estancia-fasano-16', code: 'TBA-238', name: { pt: 'Estância Fasano 16', en: 'Estância Fasano 16' },
  purpose: ['aluguel'], location: 'Estâncias Fasano', suites: 3, guests: 6, baths: 4, area: '460 m² · terreno 3.200 m²',
  price: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  priceLow: { pt: 'R$ 8.400 / diária', en: 'R$ 8,400 / night' },
  carnaval: { pt: 'R$ 80.000', en: 'R$ 80,000' },
  reveillon: { pt: 'R$ 290.000', en: 'R$ 290,000' },
  image: '/img/fasano16/01.jpg',
  gallery: ['/img/fasano16/01.webp','/img/fasano16/02.webp','/img/fasano16/03.webp','/img/fasano16/04.webp','/img/fasano16/05.webp','/img/fasano16/06.webp','/img/fasano16/07.webp','/img/fasano16/08.webp','/img/fasano16/09.webp','/img/fasano16/10.webp','/img/fasano16/11.webp','/img/fasano16/12.webp','/img/fasano16/13.webp','/img/fasano16/14.webp','/img/fasano16/15.webp','/img/fasano16/16.webp','/img/fasano16/17.webp','/img/fasano16/18.webp','/img/fasano16/19.webp','/img/fasano16/20.webp','/img/fasano16/21.webp','/img/fasano16/22.webp','/img/fasano16/23.webp','/img/fasano16/24.webp','/img/fasano16/25.webp','/img/fasano16/26.webp','/img/fasano16/27.webp','/img/fasano16/28.webp','/img/fasano16/29.webp','/img/fasano16/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa aquecida', 'Área gourmet com churrasqueira', 'Deck integrado à piscina', 'Cozinha totalmente equipada', 'Suíte master com dois banheiros independentes', 'Energia solar e gerador', 'Sistema de som Bluetooth', 'Garagem privativa', 'Infraestrutura do Hotel Fasano Trancoso', 'Arquitetura Galvez & Marton e Carol Daros'],
    en: ['Heated private pool', 'Gourmet area with barbecue', 'Deck integrated with the pool', 'Fully equipped kitchen', 'Master suite with two independent bathrooms', 'Solar energy and generator', 'Bluetooth sound system', 'Private garage', 'Hotel Fasano Trancoso infrastructure', 'Architecture by Galvez & Marton and Carol Daros'],
  },
  staff: {
    pt: ['Concierge', 'Camareira', 'Cozinheira', 'Jardineiro'],
    en: ['Concierge', 'Housekeeper', 'Cook', 'Gardener'],
  },
  description: {
    pt: 'Assinada pelos renomados arquitetos Galvez & Marton e Carol Daros, a Estância Fasano 16 é um refúgio de luxo em um dos condomínios mais exclusivos de Trancoso. Em um terreno de 3.200 m², com 460 m² de área construída, a casa foi projetada para proporcionar privacidade, conforto e uma conexão única com a natureza, sem abrir mão da sofisticação característica do Fasano.\n\nA residência acomoda confortavelmente até 6 adultos, com possibilidade de receber até 2 crianças ou adolescentes adicionais em cada quarto. No piso superior estão as três suítes climatizadas: a Suíte Master possui cama king size, TV de 60", home office, espaço para café da manhã, closet espelhado e dois banheiros independentes; as outras duas suítes possuem camas conversíveis, colchões extras, TV, bancada de trabalho e banheiro privativo.\n\nA área social integra sala de estar, cozinha e espaço gourmet, com piscina privativa aquecida, deck e churrasqueira. Além da exclusividade da casa, os hóspedes podem desfrutar da infraestrutura do Hotel Fasano Trancoso.',
    en: 'Signed by renowned architects Galvez & Marton and Carol Daros, Estância Fasano 16 is a luxury retreat in one of Trancoso\'s most exclusive condominiums. On a 3,200 m² plot with 460 m² of built area, the house was designed to provide privacy, comfort and a unique connection with nature, without giving up the characteristic Fasano sophistication.\n\nThe residence comfortably accommodates up to 6 adults, with the possibility of hosting up to 2 additional children or teenagers in each bedroom. Upstairs are the three air-conditioned suites: the Master Suite features a king-size bed, 60" TV, home office, breakfast nook, mirrored walk-in closet and two independent bathrooms; the other two suites have convertible beds, extra mattresses, TV, work desk and private bathroom.\n\nThe social area integrates living room, kitchen and gourmet space, with heated private pool, deck and barbecue. Beyond the exclusivity of the house, guests can enjoy the infrastructure of Hotel Fasano Trancoso.',
  },
};

const FASANO17: Property = {
  id: 'estancia-fasano-17', code: 'TBA-239', name: { pt: 'Estância Fasano 17', en: 'Estância Fasano 17' },
  purpose: ['aluguel', 'venda'], location: 'Estâncias Fasano', suites: 4, guests: 9, baths: 5, area: '420 m² · terreno 1.900 m²',
  price: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  priceLow: { pt: 'R$ 8.400 / diária', en: 'R$ 8,400 / night' },
  carnaval: { pt: 'R$ 80.000', en: 'R$ 80,000' },
  reveillon: { pt: 'R$ 290.000', en: 'R$ 290,000' },
  image: '/img/fasano17/01.jpg',
  gallery: ['/img/fasano17/01.webp','/img/fasano17/02.webp','/img/fasano17/03.webp','/img/fasano17/04.webp','/img/fasano17/05.webp','/img/fasano17/06.webp','/img/fasano17/07.webp','/img/fasano17/08.webp','/img/fasano17/09.webp','/img/fasano17/10.webp','/img/fasano17/11.webp','/img/fasano17/12.webp','/img/fasano17/13.webp','/img/fasano17/14.webp','/img/fasano17/15.webp','/img/fasano17/16.webp','/img/fasano17/17.webp','/img/fasano17/18.webp','/img/fasano17/19.webp','/img/fasano17/20.webp','/img/fasano17/21.webp','/img/fasano17/22.webp','/img/fasano17/23.webp','/img/fasano17/24.webp','/img/fasano17/25.webp','/img/fasano17/26.webp','/img/fasano17/27.webp','/img/fasano17/28.webp','/img/fasano17/29.webp','/img/fasano17/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet com churrasqueira', 'Quatro suítes climatizadas', 'Cozinha equipada', 'Sala de estar integrada aos jardins', 'Sistema de som', 'TV e Netflix', 'Estrutura kids friendly', 'Infraestrutura do Hotel Fasano Trancoso', 'Locação mínima de 3 diárias'],
    en: ['Private pool', 'Gourmet area with barbecue', 'Four air-conditioned suites', 'Equipped kitchen', 'Living room integrated with the gardens', 'Sound system', 'TV and Netflix', 'Kids friendly structure', 'Hotel Fasano Trancoso infrastructure', 'Minimum stay of 3 nights'],
  },
  staff: {
    pt: ['01 arrumadeira', '01 arrumadeira / auxiliar de cozinha', '01 cozinheira', '01 serviços gerais'],
    en: ['01 housekeeper', '01 housekeeper / kitchen assistant', '01 cook', '01 general services'],
  },
  description: {
    pt: 'Localizada no exclusivo condomínio Estância Fasano, em Trancoso, a Estância Fasano 17 reúne privacidade, arquitetura contemporânea e o padrão de excelência de um dos endereços mais desejados do Brasil.\n\nImplantada em um amplo terreno de 1.900 m² e cercada pela natureza, a casa foi concebida como uma vila privativa, oferecendo ambientes amplos, elegantes e perfeitamente integrados. São quatro suítes confortáveis, com capacidade para acomodar até nove hóspedes — uma escolha ideal para famílias e grupos que desejam desfrutar Trancoso com conforto, tranquilidade e total exclusividade.\n\nAs áreas sociais foram pensadas para proporcionar uma experiência acolhedora e sofisticada: a sala de estar se conecta aos ambientes externos, enquanto o espaço gourmet, a churrasqueira e a piscina criam o cenário perfeito para momentos de descanso, convivência e celebração.',
    en: 'Located in the exclusive Estância Fasano condominium in Trancoso, Estância Fasano 17 brings together privacy, contemporary architecture and the standard of excellence of one of Brazil\'s most desired addresses.\n\nSet on a generous 1,900 m² plot surrounded by nature, the house was conceived as a private villa, offering spacious, elegant and perfectly integrated spaces. It has four comfortable suites, accommodating up to nine guests — an ideal choice for families and groups who wish to enjoy Trancoso with comfort, tranquility and total exclusivity.\n\nThe social areas were designed to provide a welcoming and sophisticated experience: the living room connects to the outdoor spaces, while the gourmet area, barbecue and pool create the perfect setting for moments of rest, togetherness and celebration.\n\nOne of the property\'s great differentials is access to the infrastructure and experiences of Hotel Fasano Trancoso: spa, gym, pools, tennis courts, restaurant, common areas and beach structure, according to the hotel\'s and condominium\'s rules and availability. Service fee: 10%.',
  },
  notes: { pt: ['Um dos grandes diferenciais é o acesso à infraestrutura e às experiências do Hotel Fasano Trancoso: spa, academia, piscinas, quadras de tênis, restaurante, áreas de convivência e estrutura de praia, conforme as regras e a disponibilidade do hotel e do condomínio. Taxa de serviço: 10%.'], en: [] },
};

const VILAS26: Property = {
  id: 'casa-26-terravista-vilas', code: 'TBA-240', name: { pt: 'Casa 26 — Terravista Vilas', en: 'Casa 26 — Terravista Vilas' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Vilas', suites: 4, guests: 9, baths: 4, area: '344 m² · terreno 2.326 m²',
  price: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  priceLow: { pt: 'R$ 7.000 / diária', en: 'R$ 7,000 / night' },
  carnaval: { pt: 'R$ 100.000', en: 'R$ 100,000' },
  reveillon: { pt: 'R$ 300.000', en: 'R$ 300,000' },
  image: '/img/terravista-vilas-26/01.jpg',
  gallery: ['/img/terravista-vilas-26/01.webp','/img/terravista-vilas-26/02.webp','/img/terravista-vilas-26/03.webp','/img/terravista-vilas-26/04.webp','/img/terravista-vilas-26/05.webp','/img/terravista-vilas-26/06.webp','/img/terravista-vilas-26/07.webp','/img/terravista-vilas-26/08.webp','/img/terravista-vilas-26/09.webp','/img/terravista-vilas-26/10.webp','/img/terravista-vilas-26/11.webp','/img/terravista-vilas-26/12.webp','/img/terravista-vilas-26/13.webp','/img/terravista-vilas-26/14.webp','/img/terravista-vilas-26/15.webp','/img/terravista-vilas-26/16.webp','/img/terravista-vilas-26/17.webp','/img/terravista-vilas-26/18.webp','/img/terravista-vilas-26/19.webp','/img/terravista-vilas-26/20.webp','/img/terravista-vilas-26/21.webp','/img/terravista-vilas-26/22.webp','/img/terravista-vilas-26/23.webp','/img/terravista-vilas-26/24.webp','/img/terravista-vilas-26/25.webp','/img/terravista-vilas-26/26.webp','/img/terravista-vilas-26/27.webp','/img/terravista-vilas-26/28.webp','/img/terravista-vilas-26/29.webp','/img/terravista-vilas-26/30.webp','/img/terravista-vilas-26/31.webp','/img/terravista-vilas-26/32.webp','/img/terravista-vilas-26/33.webp','/img/terravista-vilas-26/34.webp','/img/terravista-vilas-26/35.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet e churrasqueira', 'Adega de vinhos', 'Sala de massagem e spa', 'Sala de TV com Netflix e Sky', 'Vista para o mar e para o campo de golfe', 'Sistema de som ambiente', 'Internet Wi-Fi', 'Gerador e cofres nos quartos', 'Acesso às comodidades do Complexo Terravista'],
    en: ['Private pool', 'Gourmet area and barbecue', 'Wine cellar', 'Massage room and spa', 'TV room with Netflix and Sky', 'Ocean and golf course views', 'Ambient sound system', 'Wi-Fi internet', 'Generator and bedroom safes', 'Access to Terravista Complex amenities'],
  },
  staff: {
    pt: ['01 cozinheira', '01 arrumadeira'],
    en: ['01 cook', '01 housekeeper'],
  },
  description: {
    pt: 'A Casa 26, localizada no condomínio Terravista Vilas, em Trancoso, oferece uma experiência de hospedagem que combina conforto, privacidade e elegância. Integrada à natureza e ao campo de golfe, possui ambientes amplos, decoração sofisticada e estrutura completa para famílias e grupos que buscam exclusividade no litoral baiano.\n\nCom 344 m² de área construída em um terreno de 2.326 m², a residência foi planejada para proporcionar uma estadia tranquila, elegante e acolhedora. Os ambientes valorizam a identidade baiana por meio de obras de artistas locais, materiais naturais e uma decoração equilibrada, que combina o estilo de praia de Trancoso com o conforto de uma casa de alto padrão.\n\nAs quatro suítes são espaçosas e bem equipadas. Os quartos do piso superior possuem varandas, e diferentes ambientes da casa desfrutam de vistas para o mar e para o campo de golfe do Terravista, criando uma paisagem marcada pelo verde, pela tranquilidade e pela beleza do litoral sul da Bahia.\n\nA experiência é complementada pelo atendimento discreto da equipe da casa, composta por uma cozinheira e uma arrumadeira. Ideal para quem deseja viver Trancoso com exclusividade e praticidade, a Casa 26 oferece uma combinação especial de localização privilegiada, estrutura completa e acesso às comodidades do Complexo Terravista.',
    en: 'Casa 26, located in the Terravista Vilas condominium in Trancoso, offers a hosting experience that combines comfort, privacy and elegance. Integrated with nature and the golf course, it has spacious rooms, sophisticated decoration and a complete structure for families and groups seeking exclusivity on the Bahian coast.\n\nWith 344 m² of built area on a 2,326 m² plot, the residence was planned to provide a tranquil, elegant and welcoming stay. The spaces value Bahian identity through works by local artists, natural materials and balanced decoration, combining Trancoso\'s beach style with the comfort of a high-end home.\n\nThe four suites are spacious and well equipped. The upstairs bedrooms have balconies, and different areas of the house enjoy views of the sea and the Terravista golf course, creating a landscape marked by greenery, tranquility and the beauty of the southern Bahia coast.\n\nThe experience is complemented by the discreet service of the house team, composed of a cook and a housekeeper. Ideal for those who wish to experience Trancoso with exclusivity and practicality, Casa 26 offers a special combination of privileged location, complete structure and access to the Terravista Complex amenities.',
  },
};

const GOLF58: Property = {
  id: 'terravista-golf-58', code: 'TBA-241', name: { pt: 'Terravista Golf 58', en: 'Terravista Golf 58' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 9, guests: 18, baths: 10, area: '1.647 m²',
  price: { pt: 'R$ 50.000 / diária', en: 'R$ 50,000 / night' },
  priceLow: { pt: 'R$ 38.000 / diária', en: 'R$ 38,000 / night' },
  carnaval: { pt: 'R$ 399.000', en: 'R$ 399,000' },
  reveillon: { pt: 'R$ 1.260.000', en: 'R$ 1,260,000' },
  image: '/img/golf58/01.jpg',
  gallery: ['/img/golf58/01.webp','/img/golf58/02.webp','/img/golf58/03.webp','/img/golf58/04.webp','/img/golf58/05.webp','/img/golf58/06.webp','/img/golf58/07.webp','/img/golf58/08.webp','/img/golf58/09.webp','/img/golf58/10.webp','/img/golf58/11.webp','/img/golf58/12.webp','/img/golf58/13.webp','/img/golf58/14.webp','/img/golf58/15.webp','/img/golf58/16.webp','/img/golf58/17.webp','/img/golf58/18.webp','/img/golf58/19.webp','/img/golf58/20.webp','/img/golf58/21.webp','/img/golf58/22.webp','/img/golf58/23.webp','/img/golf58/24.webp','/img/golf58/25.webp','/img/golf58/26.webp','/img/golf58/27.webp','/img/golf58/28.webp','/img/golf58/29.webp','/img/golf58/30.webp','/img/golf58/31.webp','/img/golf58/32.webp','/img/golf58/33.webp','/img/golf58/34.webp','/img/golf58/35.webp','/img/golf58/36.webp','/img/golf58/37.webp','/img/golf58/38.webp','/img/golf58/39.webp'], featured: false,
  amenities: {
    pt: ['Piscina de 25 metros', 'Bar molhado', 'Sauna', 'Academia', 'Sala de cinema', 'Adega climatizada', 'Área gourmet com churrasqueira e forno de pizza', 'Sala de jogos', 'Cozinha industrial equipada', 'Apoio de praia'],
    en: ['25-meter pool', 'Wet bar', 'Sauna', 'Gym', 'Cinema room', 'Climate-controlled wine cellar', 'Gourmet area with barbecue and pizza oven', 'Games room', 'Equipped industrial kitchen', 'Beach support'],
  },
  staff: {
    pt: ['Concierge', 'Governanta', 'Cozinheira', 'Auxiliar de cozinha', 'Barman', '2 Camareiras', 'Ajudante geral', 'Piscineiro / Jardineiro'],
    en: ['Concierge', 'House manager', 'Cook', 'Kitchen assistant', 'Barman', '2 Housekeepers', 'General assistant', 'Pool keeper / Gardener'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Terravista Golf, um dos endereços mais prestigiados de Trancoso, a Terravista Golf 58 oferece uma experiência única de hospedagem, onde arquitetura contemporânea, privacidade e natureza se encontram em perfeita harmonia. Cercada pela exuberante Mata Atlântica e a poucos passos das praias dos Golfinhos e das Tartarugas, esta propriedade foi projetada para quem busca o mais alto padrão de conforto em um dos destinos mais desejados do Brasil.\n\nCom impressionantes 1.647 m² de área construída, a residência combina espaços amplos, acabamentos sofisticados e uma integração impecável entre os ambientes internos e externos. A área de lazer é um verdadeiro destaque, com uma espetacular piscina de 25 metros conectada à área externa, bar molhado, sauna, academia, sala de cinema, adega climatizada, ambientes de convivência e uma elegante área gourmet, criando o cenário perfeito para dias inesquecíveis em família ou entre amigos.\n\nA casa dispõe de 9 suítes cuidadosamente distribuídas, sendo 6 suítes na residência principal e 3 suítes em uma casa anexa, garantindo conforto, privacidade e total independência aos hóspedes. Cada suíte foi pensada como um refúgio exclusivo, com decoração sofisticada, materiais nobres e uma atmosfera acolhedora.\n\nAlém da localização privilegiada dentro do Terravista Golf, os hóspedes contam com acesso ao apoio de praia e toda a tranquilidade de um condomínio de alto padrão, reconhecido pela segurança, exclusividade e proximidade com o famoso campo de golfe Terravista.',
    en: 'Located in the exclusive Terravista Golf Condominium, one of Trancoso\'s most prestigious addresses, Terravista Golf 58 offers a unique hosting experience, where contemporary architecture, privacy and nature meet in perfect harmony. Surrounded by the lush Atlantic Forest and just steps from Golfinhos and Tartarugas beaches, this property was designed for those seeking the highest standard of comfort in one of Brazil\'s most desired destinations.\n\nWith an impressive 1,647 m² of built area, the residence combines spacious rooms, sophisticated finishes and impeccable integration between indoor and outdoor spaces. The leisure area is a true highlight, with a spectacular 25-meter pool connected to the outdoor area, wet bar, sauna, gym, cinema room, climate-controlled wine cellar, gathering spaces and an elegant gourmet area, creating the perfect setting for unforgettable days with family or friends.\n\nThe house has 9 carefully distributed suites — 6 in the main residence and 3 in an annex house — ensuring comfort, privacy and total independence for guests. Each suite was designed as an exclusive retreat, with sophisticated decoration, noble materials and a welcoming atmosphere.\n\nBeyond the privileged location within Terravista Golf, guests have access to beach support and all the tranquility of a high-end condominium, recognized for its security, exclusivity and proximity to the famous Terravista golf course.',
  },
};

const FLORESTA: Property = {
  id: 'casa-floresta-itapororoca', code: 'TBA-242', name: { pt: 'Casa Floresta — Itapororoca', en: 'Casa Floresta — Itapororoca' },
  purpose: ['aluguel'], location: 'Itapororoca', suites: 4, guests: 8, baths: 5, area: '500 m² · pé na areia',
  price: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  priceLow: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  reveillon: { pt: 'R$ 475.000', en: 'R$ 475,000' },
  image: '/img/floresta/01.jpg',
  gallery: ['/img/floresta/01.webp','/img/floresta/02.webp','/img/floresta/03.webp','/img/floresta/04.webp','/img/floresta/05.webp','/img/floresta/06.webp','/img/floresta/07.webp','/img/floresta/08.webp','/img/floresta/09.webp','/img/floresta/10.webp','/img/floresta/11.webp','/img/floresta/12.webp','/img/floresta/13.webp','/img/floresta/14.webp','/img/floresta/15.webp','/img/floresta/16.webp','/img/floresta/17.webp','/img/floresta/18.webp','/img/floresta/19.webp','/img/floresta/20.webp','/img/floresta/21.webp','/img/floresta/22.webp','/img/floresta/23.webp','/img/floresta/24.webp','/img/floresta/25.webp','/img/floresta/26.webp','/img/floresta/27.webp','/img/floresta/28.webp','/img/floresta/29.webp','/img/floresta/30.webp','/img/floresta/31.webp','/img/floresta/32.webp','/img/floresta/33.webp','/img/floresta/34.webp','/img/floresta/35.webp','/img/floresta/36.webp','/img/floresta/37.webp','/img/floresta/38.webp','/img/floresta/39.webp','/img/floresta/40.webp','/img/floresta/41.webp','/img/floresta/42.webp','/img/floresta/43.webp','/img/floresta/44.webp','/img/floresta/45.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Acesso direto à praia com apoio de praia', 'Duas suítes em bangalôs próximos à praia', 'Sala de estar, TV e jantar', 'Cozinha equipada com fogão industrial', 'Deck e jardim tropical', 'Churrasqueira', 'Caiaques e bicicletas', 'Ducha externa e espreguiçadeiras', 'Sistema de som e Wi-Fi'],
    en: ['Private pool', 'Direct beach access with beach support', 'Two suites in bungalows near the beach', 'Living, TV and dining rooms', 'Equipped kitchen with industrial stove', 'Deck and tropical garden', 'Barbecue', 'Kayaks and bicycles', 'Outdoor shower and sun loungers', 'Sound system and Wi-Fi'],
  },
  staff: {
    pt: ['Concierge', 'Cozinheira', 'Ajudante de cozinha', 'Camareira', 'Piscineiro e jardineiro'],
    en: ['Concierge', 'Cook', 'Kitchen assistant', 'Housekeeper', 'Pool keeper and gardener'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Itapororoca, em uma das praias mais bonitas e preservadas de Trancoso, a Casa Floresta Itapororoca é um refúgio pé na areia, cercado pela Mata Atlântica e com acesso direto ao mar.\n\nCom aproximadamente 500 m² de área construída, a propriedade combina arquitetura rústico-chique, privacidade e uma integração natural entre os ambientes. A casa está distribuída em módulos independentes, conectados por jardins, decks e caminhos em meio à vegetação tropical.\n\nSão quatro suítes climatizadas, sendo duas na casa principal e duas em bangalôs privativos próximos à praia. Essa configuração proporciona conforto e independência aos hóspedes, sendo ideal para famílias ou grupos de amigos.\n\nAs áreas sociais incluem sala de estar, sala de televisão, sala de jantar e cozinha equipada. A decoração valoriza a arte e o artesanato brasileiro, com peças selecionadas, fibras naturais e elementos que traduzem a identidade de Trancoso.\n\nNa área externa, a piscina privativa é cercada pelo verde e acompanhada por deck, espreguiçadeiras, churrasqueira e espaços para refeições ao ar livre. Um caminho privativo leva diretamente à Praia de Itapororoca, onde a casa conta com apoio de praia para os hóspedes.\n\nUma propriedade para quem busca exclusividade, conforto e uma experiência autêntica à beira-mar em Trancoso.',
    en: 'Located in the exclusive Itapororoca Condominium, on one of Trancoso\'s most beautiful and preserved beaches, Casa Floresta Itapororoca is a beachfront retreat, surrounded by the Atlantic Forest with direct access to the sea.\n\nWith approximately 500 m² of built area, the property combines rustic-chic architecture, privacy and a natural integration between spaces. The house is distributed in independent modules, connected by gardens, decks and paths amid tropical vegetation.\n\nThere are four air-conditioned suites — two in the main house and two in private bungalows near the beach. This configuration provides comfort and independence for guests, ideal for families or groups of friends.\n\nSocial areas include a living room, TV room, dining room and equipped kitchen. The decoration values Brazilian art and handicrafts, with selected pieces, natural fibers and elements that translate Trancoso\'s identity.\n\nOutside, the private pool is surrounded by greenery and accompanied by a deck, sun loungers, barbecue and outdoor dining spaces. A private path leads directly to Itapororoca Beach, where the house has beach support for guests.\n\nA property for those seeking exclusivity, comfort and an authentic beachfront experience in Trancoso.',
  },
}

const VILAS41: Property = {
  id: 'casa-41-terravista-vilas', code: 'TBA-243', name: { pt: 'Casa 41 — Terravista Vilas', en: 'Casa 41 — Terravista Vilas' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 4, guests: 8, baths: 4, area: '500 m² · terreno 1.900 m²',
  price: { pt: 'R$ 8.900 / diária', en: 'R$ 8,900 / night' },
  priceLow: { pt: 'R$ 7.900 / diária', en: 'R$ 7,900 / night' },
  carnaval: { pt: 'R$ 66.750', en: 'R$ 66,750' },
  reveillon: { pt: 'R$ 311.500', en: 'R$ 311,500' },
  image: '/img/vilas41/01.jpg',
  gallery: ['/img/vilas41/01.webp','/img/vilas41/02.webp','/img/vilas41/03.webp','/img/vilas41/04.webp','/img/vilas41/05.webp','/img/vilas41/06.webp','/img/vilas41/07.webp','/img/vilas41/08.webp','/img/vilas41/09.webp','/img/vilas41/10.webp','/img/vilas41/11.webp','/img/vilas41/12.webp','/img/vilas41/13.webp','/img/vilas41/14.webp','/img/vilas41/15.webp','/img/vilas41/16.webp','/img/vilas41/17.webp','/img/vilas41/18.webp','/img/vilas41/19.webp','/img/vilas41/20.webp','/img/vilas41/21.webp','/img/vilas41/22.webp','/img/vilas41/23.webp','/img/vilas41/24.webp','/img/vilas41/25.webp','/img/vilas41/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina com borda infinita', 'Espaço gourmet com churrasqueira e forno de pizza', 'Deck amplo', 'Lavanderia e copa', 'Redário integrado à área gourmet', 'Sala de estar e jantar integradas', 'Energia solar fotovoltaica', 'Internet Wi-Fi', 'Vista para a Mata Atlântica', 'Acesso ao Complexo Terravista'],
    en: ['Infinity-edge pool', 'Gourmet area with barbecue and pizza oven', 'Spacious deck', 'Laundry and pantry', 'Hammock area integrated with gourmet space', 'Integrated living and dining rooms', 'Photovoltaic solar energy', 'Wi-Fi internet', 'Atlantic Forest views', 'Access to Terravista Complex'],
  },
  staff: {
    pt: ['1 cozinheira', '1 auxiliar de cozinha', '1 arrumadeira', '1 caseiro'],
    en: ['1 cook', '1 kitchen assistant', '1 housekeeper', '1 caretaker'],
  },
  description: {
    pt: 'Localizada em um dos condomínios mais charmosos e seguros de Trancoso, a Casa 41 no Terravista Vilas é um refúgio elegante rodeado pela Mata Atlântica. Com 500 m² de área construída em um terreno de 1.900 m², a casa foi projetada para oferecer conforto, praticidade e uma integração total com a natureza.\n\nA área social inclui sala de estar e jantar integradas, lavanderia, copa e uma área gourmet com churrasqueira e forno de pizza, além de um redário. O deck amplo, com vista para a mata, é ideal para momentos de descontração ao ar livre.\n\nOs quartos estão distribuídos de forma inteligente: no piso superior, um quarto com cama queen e duas camas de solteiro, e outro com cama queen. No piso térreo, um quarto com duas camas queen e um quarto com cama queen.\n\nA piscina de borda infinita é o destaque, conectando-se perfeitamente ao paisagismo natural do condomínio. A casa conta ainda com energia solar fotovoltaica, internet Wi-Fi e acesso ao Complexo Terravista.',
    en: 'Located in one of Trancoso\'s most charming and secure condominiums, Casa 41 at Terravista Vilas is an elegant retreat surrounded by the Atlantic Forest. With 500 m² of built area on a 1,900 m² plot, the house was designed to offer comfort, practicality and total integration with nature.\n\nThe social area includes integrated living and dining rooms, laundry, pantry and a gourmet area with barbecue and pizza oven, plus a hammock space. The spacious deck, overlooking the forest, is ideal for relaxing outdoors.\n\nThe bedrooms are intelligently distributed: upstairs, one bedroom with a queen bed and two twin beds, and another with a queen bed. On the ground floor, one bedroom with two queen beds and one bedroom with a queen bed.\n\nThe infinity-edge pool is the highlight, connecting seamlessly with the condominium\'s natural landscaping. The house also features photovoltaic solar energy, Wi-Fi internet and access to the Terravista Complex.',
  },
};

const VILAS67: Property = {
  id: 'terravista-vilas-67', code: 'TBA-244', name: { pt: 'Terravista Vilas 67', en: 'Terravista Vilas 67' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 5, guests: 10, baths: 7, area: '240 m²',
  price: { pt: 'R$ 6.875 / diária', en: 'R$ 6,875 / night' },
  priceLow: { pt: 'R$ 4.500 / diária', en: 'R$ 4,500 / night' },
  carnaval: { pt: 'R$ 53.000', en: 'R$ 53,000' },
  reveillon: { pt: 'R$ 265.000', en: 'R$ 265,000' },
  image: '/img/terravista-vilas-67/01.jpg',
  gallery: ['/img/terravista-vilas-67/01.webp','/img/terravista-vilas-67/02.webp','/img/terravista-vilas-67/03.webp','/img/terravista-vilas-67/04.webp','/img/terravista-vilas-67/05.webp','/img/terravista-vilas-67/06.webp','/img/terravista-vilas-67/07.webp','/img/terravista-vilas-67/08.webp','/img/terravista-vilas-67/09.webp','/img/terravista-vilas-67/10.webp','/img/terravista-vilas-67/11.webp','/img/terravista-vilas-67/12.webp','/img/terravista-vilas-67/13.webp','/img/terravista-vilas-67/14.webp','/img/terravista-vilas-67/15.webp','/img/terravista-vilas-67/16.webp','/img/terravista-vilas-67/17.webp','/img/terravista-vilas-67/18.webp','/img/terravista-vilas-67/19.webp','/img/terravista-vilas-67/20.webp','/img/terravista-vilas-67/21.webp','/img/terravista-vilas-67/22.webp','/img/terravista-vilas-67/23.webp','/img/terravista-vilas-67/24.webp','/img/terravista-vilas-67/25.webp','/img/terravista-vilas-67/26.webp','/img/terravista-vilas-67/27.webp','/img/terravista-vilas-67/28.webp'], featured: false,
  amenities: {
    pt: ['Apoio de praia no Rio da Barra', 'Piscina do condomínio', 'Ar-condicionado nas suítes', 'Internet Wi-Fi', 'Cozinha equipada', 'Sala de estar e sala de jantar', 'Estacionamento', 'Freezer', 'TV a cabo', 'Ventiladores de teto', 'Roupas de cama, mesa e banho', 'Toalhas de praia', 'Poço artesiano'],
    en: ['Beach support at Rio da Barra', 'Condominium pool', 'Air conditioning in the suites', 'Wi-Fi internet', 'Equipped kitchen', 'Living room and dining room', 'Parking', 'Freezer', 'Cable TV', 'Ceiling fans', 'Bed, table and bath linens', 'Beach towels', 'Artesian well'],
  },
  staff: {
    pt: ['01 camareira para apoio durante a hospedagem'],
    en: ['01 housekeeper for support during the stay'],
  },
  description: {
    pt: 'A Terravista Vilas 67 é uma residência acolhedora e elegante, ideal para famílias e grupos que desejam viver Trancoso com conforto, tranquilidade e serviços exclusivos. Projetada por De Fournier & Associados, a casa reúne arquitetura integrada à natureza, ambientes agradáveis e uma decoração de bom gosto.\n\nCom 240 m² de área construída, a propriedade dispõe de cinco suítes confortáveis e acomoda até dez hóspedes. Os espaços sociais são leves e convidativos, perfeitos para momentos de descanso e convivência durante a estadia.\n\nNo piso superior, a suíte master conta com cama king size, ar-condicionado e varanda com rede de descanso e vista para a mata, além de uma segunda suíte com duas camas de solteiro reversíveis em cama de casal e varanda com vista para a mata. No piso térreo, há uma suíte com cama de casal, uma com duas camas de solteiro reversíveis em cama de casal e uma suíte com cama queen size, closet, frigobar e cafeteira.\n\nO Condomínio Terravista Vilas oferece piscina e apoio de praia no Rio da Barra, com bar, restaurante, espreguiçadeiras e estrutura de atendimento. Os hóspedes também têm acesso ao Terravista Golf, reconhecido por seu campo de alto padrão e pela paisagem singular.\n\nA propriedade está a aproximadamente 45 km do Aeroporto Internacional de Porto Seguro.',
    en: 'Terravista Vilas 67 is a cozy and elegant residence, ideal for families and groups wishing to experience Trancoso with comfort, tranquility and exclusive services. Designed by De Fournier & Associados, the house combines architecture integrated with nature, pleasant spaces and tasteful decoration.\n\nWith 240 m² of built area, the property offers five comfortable suites and accommodates up to ten guests. The social spaces are light and inviting, perfect for moments of rest and togetherness during the stay.\n\nUpstairs, the master suite features a king-size bed, air conditioning and a balcony with a hammock overlooking the forest, plus a second suite with two twin beds convertible into a double bed and a balcony with forest views. On the ground floor, there is a suite with a double bed, one with two twin beds convertible into a double bed, and a suite with a queen-size bed, walk-in closet, minibar and coffee maker.\n\nThe Terravista Vilas Condominium offers a pool and beach support at Rio da Barra, with a bar, restaurant, sun loungers and service structure. Guests also have access to Terravista Golf, renowned for its high-standard course and unique landscape.\n\nThe property is approximately 45 km from Porto Seguro International Airport.',
  },
};

const BOUTIQUE13: Property = {
  id: 'terravista-boutique-casa-13', code: 'TBA-245', name: { pt: 'Terravista Boutique Casa 13', en: 'Terravista Boutique Casa 13' },
  purpose: ['aluguel', 'venda'], location: 'Terravista', suites: 6, guests: 12, baths: 7, area: '450 m²',
  price: { pt: 'R$ 13.200 / diária', en: 'R$ 13,200 / night' },
  priceLow: { pt: 'R$ 11.000 / diária', en: 'R$ 11,000 / night' },
  carnaval: { pt: 'R$ 69.000', en: 'R$ 69,000' },
  reveillon: { pt: 'R$ 396.000', en: 'R$ 396,000' },
  image: '/img/boutique13/01.jpg',
  gallery: ['/img/boutique13/01.webp','/img/boutique13/02.webp','/img/boutique13/03.webp','/img/boutique13/04.webp','/img/boutique13/05.webp','/img/boutique13/06.webp','/img/boutique13/07.webp','/img/boutique13/08.webp','/img/boutique13/09.webp','/img/boutique13/10.webp','/img/boutique13/11.webp','/img/boutique13/12.webp','/img/boutique13/13.webp','/img/boutique13/14.webp','/img/boutique13/15.webp','/img/boutique13/16.webp','/img/boutique13/17.webp','/img/boutique13/18.webp','/img/boutique13/19.webp','/img/boutique13/20.webp','/img/boutique13/21.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com vista panorâmica para o oceano', 'Localização no alto da falésia', 'Áreas sociais amplas e integradas', 'Arquitetura contemporânea', 'Iluminação natural', 'Fácil acesso às praias e ao Quadrado', 'Disponível também para venda: R$ 15.000.000'],
    en: ['Private pool with panoramic ocean view', 'Clifftop location', 'Spacious integrated social areas', 'Contemporary architecture', 'Natural light', 'Easy access to beaches and the Quadrado', 'Also available for sale: R$ 15,000,000'],
  },
  staff: {
    pt: ['1 cozinheira', '1 ajudante de cozinha', '1 arrumadeira', '1 ajudante geral'],
    en: ['1 cook', '1 kitchen assistant', '1 housekeeper', '1 general assistant'],
  },
  description: {
    pt: 'Localizada no alto da falésia, em um dos cenários mais privilegiados de Trancoso, a Terravista Boutique Casa 13 oferece uma experiência exclusiva de conforto, sofisticação e privacidade.\n\nCom 450 m² de área, a residência acomoda até 12 pessoas em 6 suítes elegantemente decoradas, projetadas para proporcionar tranquilidade, privacidade e descanso absoluto. Seus ambientes amplos e integrados foram cuidadosamente planejados para valorizar a convivência, a iluminação natural e a conexão com a paisagem. A arquitetura contemporânea combina perfeitamente com a atmosfera tropical e a vista panorâmica para o oceano, criando um refúgio sofisticado e acolhedor.\n\nA piscina privativa com vista panorâmica para o oceano é um dos principais destaques da propriedade, proporcionando o cenário perfeito para aproveitar os dias ensolarados de Trancoso. As áreas sociais integradas permitem uma convivência elegante e descontraída, seja durante as refeições, em celebrações especiais ou em momentos tranquilos com a família.\n\nSituada no alto da falésia, a propriedade proporciona privacidade, tranquilidade e uma vista deslumbrante para o oceano, além de fácil acesso às praias e às principais atrações de Trancoso.',
    en: 'Located on the clifftop, in one of Trancoso\'s most privileged settings, Terravista Boutique Casa 13 offers an exclusive experience of comfort, sophistication and privacy.\n\nWith 450 m², the residence accommodates up to 12 people in 6 elegantly decorated suites, designed to provide tranquility, privacy and absolute rest. Its spacious, integrated rooms were carefully planned to enhance togetherness, natural light and the connection with the landscape. Contemporary architecture blends perfectly with the tropical atmosphere and the panoramic ocean view, creating a sophisticated and welcoming retreat.\n\nThe private pool with panoramic ocean view is one of the property\'s main highlights, providing the perfect setting to enjoy Trancoso\'s sunny days. The integrated social areas allow elegant and relaxed gatherings, whether during meals, special celebrations or quiet family moments.\n\nSet on the clifftop, the property offers privacy, tranquility and a stunning ocean view, as well as easy access to the beaches and Trancoso\'s main attractions.',
  },
};

const ARACUA: Property = {
  id: 'casa-aracua', code: 'TBA-246', name: { pt: 'Casa Aracuã', en: 'Casa Aracuã' },
  purpose: ['aluguel'], location: 'Trancoso', suites: 5, guests: 16, baths: 6, area: '711 m² · terreno 1.484 m²',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  reveillon: { pt: 'R$ 120.000', en: 'R$ 120,000' },
  image: '/img/aracua/01.jpg',
  gallery: ['/img/aracua/01.webp','/img/aracua/02.webp','/img/aracua/03.webp','/img/aracua/04.webp','/img/aracua/05.webp','/img/aracua/06.webp','/img/aracua/07.webp','/img/aracua/08.webp','/img/aracua/09.webp','/img/aracua/10.webp','/img/aracua/11.webp','/img/aracua/12.webp','/img/aracua/13.webp','/img/aracua/14.webp','/img/aracua/15.webp','/img/aracua/16.webp','/img/aracua/17.webp','/img/aracua/18.webp','/img/aracua/19.webp','/img/aracua/20.webp','/img/aracua/21.webp','/img/aracua/22.webp','/img/aracua/23.webp','/img/aracua/24.webp','/img/aracua/25.webp','/img/aracua/26.webp','/img/aracua/27.webp','/img/aracua/28.webp','/img/aracua/29.webp','/img/aracua/30.webp','/img/aracua/31.webp','/img/aracua/32.webp','/img/aracua/33.webp','/img/aracua/34.webp','/img/aracua/35.webp','/img/aracua/36.webp','/img/aracua/37.webp','/img/aracua/38.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet com churrasqueira e forno', 'Extenso deck de madeira', 'Sala de estar, TV e jantar', 'Cozinha equipada', 'Ar-condicionado em todas as suítes', 'Internet Wi-Fi e TV a cabo', 'Estacionamento', 'Lavanderia', 'Roupa de cama, mesa e banho', 'Toalhas de piscina e de praia', 'Cofre nos quartos', 'Secador de cabelo'],
    en: ['Private pool', 'Gourmet area with barbecue and oven', 'Extensive wooden deck', 'Living, TV and dining rooms', 'Equipped kitchen', 'Air conditioning in all suites', 'Wi-Fi internet and cable TV', 'Parking', 'Laundry', 'Bed, table and bath linens', 'Pool and beach towels', 'In-room safes', 'Hair dryer'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant'],
  },
  description: {
    pt: 'Localizada em uma tranquila área residencial no Centro de Trancoso, a aproximadamente 10 minutos do histórico Quadrado, a Casa Aracuã é um refúgio amplo e acolhedor, ideal para famílias e grupos que desejam aproveitar o destino com conforto, privacidade e praticidade.\n\nImplantada em um terreno de 1.484 m², com aproximadamente 711 m² de área construída, a propriedade combina a arquitetura rústico-chique característica de Trancoso com ambientes espaçosos, madeira natural e uma agradável integração entre as áreas internas e externas.\n\nA casa possui cinco suítes climatizadas e capacidade para acomodar até 16 hóspedes. Os quartos são amplos e confortáveis, com camas king-size, cofres e uma configuração pensada para receber grupos maiores sem abrir mão da privacidade. A suíte master conta com cama king-size, closet, ar-condicionado, cofre, poltrona e banheiro privativo; as suítes 02, 03, 04 e 05 oferecem cama king-size, uma cama de solteiro adicional, ar-condicionado, closet, cofre e banheiro privativo.\n\nA área externa é um dos grandes destaques da propriedade. Cercada pela vegetação nativa, a piscina se integra ao extenso deck de madeira, criando um cenário reservado e agradável para aproveitar os dias de sol. O espaço conta ainda com espreguiçadeiras, guarda-sol e diferentes ambientes voltados para a natureza. A área gourmet coberta possui churrasqueira, forno, mesa de madeira e espaço para refeições ao ar livre.\n\nInternamente, a residência oferece sala de estar, sala de televisão, sala de jantar e cozinha equipada, além de ambientes bem iluminados e conectados à área externa.',
    en: 'Located in a quiet residential area in the Center of Trancoso, approximately 10 minutes from the historic Quadrado, Casa Aracuã is a spacious and welcoming retreat, ideal for families and groups who want to enjoy the destination with comfort, privacy and practicality.\n\nSet on a 1,484 m² plot with approximately 711 m² of built area, the property combines Trancoso\'s characteristic rustic-chic architecture with spacious rooms, natural wood and a pleasant integration between indoor and outdoor areas.\n\nThe house has five air-conditioned suites and can accommodate up to 16 guests. The rooms are spacious and comfortable, with king-size beds, safes and a layout designed to host larger groups without giving up privacy. The master suite features a king-size bed, walk-in closet, air conditioning, safe, armchair and private bathroom; suites 02, 03, 04 and 05 offer a king-size bed, an additional single bed, air conditioning, closet, safe and private bathroom.\n\nThe outdoor area is one of the property\'s great highlights. Surrounded by native vegetation, the pool integrates with the extensive wooden deck, creating a private and pleasant setting to enjoy sunny days. The space also features sun loungers, a parasol and different areas facing nature. The covered gourmet area has a barbecue, oven, wooden table and space for outdoor meals.\n\nInside, the residence offers a living room, TV room, dining room and equipped kitchen, as well as well-lit rooms connected to the outdoor area.',
  },
  notes: { pt: ['Os valores não incluem 10% de taxa de serviço. Os alimentos e bebidas utilizados no preparo das refeições são adquiridos separadamente pelos hóspedes.'], en: ['Prices do not include the 10% service fee. Food and beverages used in meal preparation are purchased separately by guests.'] },
};

const JACARANDA03: Property = {
  id: 'casa-03-jacaranda', code: 'TBA-247', name: { pt: 'Casa 03 — Condomínio Jacarandá', en: 'Casa 03 — Jacarandá Condominium' },
  purpose: ['aluguel'], location: 'Condomínio Jacarandá', suites: 5, guests: 15, baths: 6, area: '—',
  price: { pt: 'R$ 3.400 / diária', en: 'R$ 3,400 / night' },
  priceLow: { pt: 'R$ 2.800 / diária', en: 'R$ 2,800 / night' },
  reveillon: { pt: 'R$ 135.000', en: 'R$ 135,000' },
  image: '/img/jacaranda-03/01.jpg',
  gallery: ['/img/jacaranda-03/01.webp','/img/jacaranda-03/02.webp','/img/jacaranda-03/03.webp','/img/jacaranda-03/04.webp','/img/jacaranda-03/05.webp','/img/jacaranda-03/06.webp','/img/jacaranda-03/07.webp','/img/jacaranda-03/08.webp','/img/jacaranda-03/09.webp','/img/jacaranda-03/10.webp','/img/jacaranda-03/11.webp','/img/jacaranda-03/12.webp','/img/jacaranda-03/13.webp','/img/jacaranda-03/14.webp','/img/jacaranda-03/15.webp','/img/jacaranda-03/16.webp','/img/jacaranda-03/17.webp','/img/jacaranda-03/18.webp','/img/jacaranda-03/19.webp','/img/jacaranda-03/20.webp','/img/jacaranda-03/21.webp','/img/jacaranda-03/22.webp','/img/jacaranda-03/23.webp','/img/jacaranda-03/24.webp','/img/jacaranda-03/25.webp','/img/jacaranda-03/26.webp','/img/jacaranda-03/27.webp','/img/jacaranda-03/28.webp','/img/jacaranda-03/29.webp','/img/jacaranda-03/30.webp','/img/jacaranda-03/31.webp','/img/jacaranda-03/32.webp','/img/jacaranda-03/33.webp','/img/jacaranda-03/34.webp','/img/jacaranda-03/35.webp','/img/jacaranda-03/36.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com borda infinita', 'Jardim tropical', 'Varanda com rede', 'Área gourmet com churrasqueira, cooktop, cervejeira e frigobar', 'Sala de estar com televisão', 'Sala de jantar', 'Cozinha completa', 'Lavabo', 'Ducha externa', 'Ar-condicionado nos quartos', 'Internet Wi-Fi', 'Roupas de cama e banho', 'Lavadora e secadora', 'Iluminação externa', 'Estacionamento privativo para até 3 carros', 'Condomínio fechado com segurança'],
    en: ['Private infinity pool', 'Tropical garden', 'Balcony with hammock', 'Gourmet area with barbecue, cooktop, beer cooler and minibar', 'Living room with TV', 'Dining room', 'Full kitchen', 'Guest bathroom', 'Outdoor shower', 'Air conditioning in bedrooms', 'Wi-Fi internet', 'Bed and bath linens', 'Washer and dryer', 'Outdoor lighting', 'Private parking for up to 3 cars', 'Gated community with security'],
  },
  staff: {
    pt: ['Cozinheira', 'Camareira', 'Serviço de limpeza'],
    en: ['Cook', 'Housekeeper', 'Cleaning service'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Jacarandá, a Casa 03 oferece uma experiência de hospedagem marcada por conforto, privacidade e contato direto com a natureza. Cercada por um amplo jardim tropical e integrada à vegetação nativa de Trancoso, a propriedade é ideal para famílias e grupos de amigos que desejam aproveitar o destino com tranquilidade, segurança e fácil acesso ao centro.\n\nA casa está situada a aproximadamente 1,2 km do Quadrado de Trancoso e a cerca de 1,7 km das praias, permitindo que os hóspedes estejam próximos dos principais restaurantes, lojas e atrações da vila, sem abrir mão da atmosfera reservada de um condomínio fechado.\n\nCom capacidade para acomodar confortavelmente até 15 hóspedes, a residência dispõe de cinco suítes climatizadas, amplas e bem distribuídas. Quatro suítes contam com uma cama queen-size e uma cama de solteiro. A quinta suíte possui três camas de solteiro, sendo que duas podem ser unidas para formar uma cama de casal.\n\nOs ambientes sociais foram planejados para proporcionar convivência e conforto durante toda a estadia. A cozinha completa é integrada à sala de jantar e à sala de estar com televisão, formando um espaço agradável para reunir a família e os amigos.\n\nNa área externa, a propriedade oferece uma agradável varanda com rede, jardim tropical e piscina privativa com borda infinita, voltada para a mata. A área gourmet é equipada com churrasqueira, cooktop, cervejeira e frigobar, proporcionando toda a estrutura necessária para almoços, jantares e momentos de lazer ao ar livre.',
    en: 'Located in the exclusive Jacarandá Condominium, Casa 03 offers a stay marked by comfort, privacy and direct contact with nature. Surrounded by a large tropical garden and integrated into Trancoso\'s native vegetation, the property is ideal for families and groups of friends who want to enjoy the destination with tranquility, security and easy access to the center.\n\nThe house is approximately 1.2 km from Trancoso\'s Quadrado and about 1.7 km from the beaches, allowing guests to be close to the village\'s main restaurants, shops and attractions, without giving up the private atmosphere of a gated community.\n\nComfortably accommodating up to 15 guests, the residence offers five spacious, well-distributed air-conditioned suites. Four suites feature a queen-size bed and a single bed. The fifth suite has three single beds, two of which can be joined to form a double bed.\n\nThe social areas were planned to provide togetherness and comfort throughout the stay. The full kitchen is integrated with the dining room and the living room with TV, forming a pleasant space to gather family and friends.\n\nOutside, the property offers a pleasant balcony with a hammock, tropical garden and a private infinity pool facing the forest. The gourmet area is equipped with a barbecue, cooktop, beer cooler and minibar, providing all the structure needed for lunches, dinners and outdoor leisure moments.',
  },
};

const TEIU: Property = {
  id: 'casa-teiu', code: 'TBA-248', name: { pt: 'Casa Teiú — Altos de Trancoso', en: 'Casa Teiú — Altos de Trancoso' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 6, area: '250 m² · terreno 1.237 m²',
  price: { pt: 'R$ 4.500 / diária', en: 'R$ 4,500 / night' },
  priceLow: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  carnaval: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  reveillon: { pt: 'R$ 250.000', en: 'R$ 250,000' },
  image: '/img/casa-teiu/01.jpg',
  gallery: ['/img/casa-teiu/01.webp','/img/casa-teiu/02.webp','/img/casa-teiu/03.webp','/img/casa-teiu/04.webp','/img/casa-teiu/05.webp','/img/casa-teiu/06.webp','/img/casa-teiu/07.webp','/img/casa-teiu/08.webp','/img/casa-teiu/09.webp','/img/casa-teiu/10.webp','/img/casa-teiu/11.webp','/img/casa-teiu/12.webp','/img/casa-teiu/13.webp','/img/casa-teiu/14.webp','/img/casa-teiu/15.webp','/img/casa-teiu/16.webp','/img/casa-teiu/17.webp','/img/casa-teiu/18.webp','/img/casa-teiu/19.webp','/img/casa-teiu/20.webp','/img/casa-teiu/21.webp','/img/casa-teiu/22.webp','/img/casa-teiu/23.webp','/img/casa-teiu/24.webp','/img/casa-teiu/25.webp','/img/casa-teiu/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com deck de madeira', 'Área gourmet com churrasqueira, bancada e cozinha de apoio', 'Sala de estar, televisão e jantar', 'Cozinha equipada', 'Academia privativa', 'Suíte independente em contêiner adaptado', 'Ar-condicionado em todos os quartos', 'Mosquiteiros', 'Secador de cabelo em todas as suítes', 'Internet Wi-Fi', 'Lavanderia', 'Quarto de apoio para funcionário ou staff', 'Estacionamento', 'Roupas de cama, mesa e banho', 'Toalhas de piscina', 'Condomínio fechado com segurança'],
    en: ['Private pool with wooden deck', 'Gourmet area with barbecue, counter and support kitchen', 'Living, TV and dining rooms', 'Equipped kitchen', 'Private gym', 'Independent suite in adapted container', 'Air conditioning in all bedrooms', 'Mosquito nets', 'Hair dryer in all suites', 'Wi-Fi internet', 'Laundry', 'Staff support room', 'Parking', 'Bed, table and bath linens', 'Pool towels', 'Gated community with security'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Trancoso, a Casa Teiú é um refúgio contemporâneo que combina a atmosfera rústico-chique do destino com arquitetura autoral, natureza e ambientes pensados para uma hospedagem confortável e descontraída.\n\nImplantada em um terreno de aproximadamente 1.237 m², com cerca de 250 m² de área construída, a propriedade é cercada por paisagismo tropical, proporcionando privacidade e uma agradável integração entre os espaços internos e externos.\n\nA casa possui cinco suítes climatizadas e acomoda confortavelmente até 10 hóspedes. Quatro suítes estão distribuídas na estrutura principal da residência, enquanto a quinta foi cuidadosamente instalada em um contêiner adaptado, oferecendo uma acomodação independente, moderna e integrada ao jardim. Todas as suítes possuem ar-condicionado, mosquiteiro, banheiro e secador de cabelo.\n\nA área social se conecta ao jardim e à piscina, criando uma atmosfera agradável para momentos de descanso e convivência. A residência dispõe de sala de estar, sala de televisão, sala de jantar e cozinha equipada.\n\nNa área externa, a piscina privativa se integra ao deck de madeira e à vegetação tropical. A ampla área gourmet é um dos principais destaques da propriedade, com churrasqueira, bancada, cozinha de apoio e uma grande mesa para refeições.\n\nA residência oferece ainda academia privativa, lavanderia e uma acomodação de apoio destinada a funcionário ou integrante do staff. O Condomínio Altos de Trancoso é uma das regiões mais tradicionais e valorizadas do destino, cercado pela Mata Atlântica, com segurança, tranquilidade e fácil acesso ao Quadrado e às praias.',
    en: 'Located in the exclusive Altos de Trancoso Condominium, Casa Teiú is a contemporary retreat that combines the destination\'s rustic-chic atmosphere with signature architecture, nature and spaces designed for a comfortable, relaxed stay.\n\nSet on a plot of approximately 1,237 m², with about 250 m² of built area, the property is surrounded by tropical landscaping, providing privacy and a pleasant integration between indoor and outdoor spaces.\n\nThe house has five air-conditioned suites and comfortably accommodates up to 10 guests. Four suites are distributed in the main structure of the residence, while the fifth was carefully installed in an adapted container, offering an independent, modern accommodation integrated into the garden. All suites have air conditioning, mosquito nets, bathroom and hair dryer.\n\nThe social area connects to the garden and pool, creating a pleasant atmosphere for moments of rest and togetherness. The residence has a living room, TV room, dining room and equipped kitchen.\n\nOutside, the private pool integrates with the wooden deck and tropical vegetation. The large gourmet area is one of the property\'s main highlights, with a barbecue, counter, support kitchen and a large dining table.\n\nThe residence also offers a private gym, laundry and a support accommodation for staff. The Altos de Trancoso Condominium is one of the most traditional and valued areas of the destination, surrounded by the Atlantic Forest, with security, tranquility and easy access to the Quadrado and the beaches.',
  },
};

const GOLF25: Property = {
  id: 'terravista-golf-25', code: 'TBA-249', name: { pt: 'Terravista Golf 25', en: 'Terravista Golf 25' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 5, guests: 10, baths: 6, area: '—',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 4.600 / diária', en: 'R$ 4,600 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 250.000', en: 'R$ 250,000' },
  image: '/img/golf25/01.jpg',
  gallery: ['/img/golf25/01.webp','/img/golf25/02.webp','/img/golf25/03.webp','/img/golf25/04.webp','/img/golf25/05.webp','/img/golf25/06.webp','/img/golf25/07.webp','/img/golf25/08.webp','/img/golf25/09.webp','/img/golf25/10.webp','/img/golf25/11.webp','/img/golf25/12.webp','/img/golf25/13.webp','/img/golf25/14.webp','/img/golf25/15.webp','/img/golf25/16.webp','/img/golf25/17.webp','/img/golf25/18.webp','/img/golf25/19.webp','/img/golf25/20.webp','/img/golf25/21.webp','/img/golf25/22.webp','/img/golf25/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Amplo deck', 'Área gourmet coberta e equipada', 'Mesa para refeições ao ar livre', 'Sala de estar', 'Terraço coberto', 'Jardim tropical', 'Vista para a lagoa, o bosque e o campo de golfe', 'Apoio de praia', 'Casa reformada em 2024', 'Cozinha equipada', 'Arquitetura rústico-chic', 'Ambientes com iluminação natural', 'Suítes independentes', 'Segurança em condomínio fechado', 'Acesso ao campo de golfe'],
    en: ['Private pool', 'Spacious deck', 'Covered and equipped gourmet area', 'Outdoor dining table', 'Living room', 'Covered terrace', 'Tropical garden', 'View of the lagoon, the grove and the golf course', 'Beach support', 'House renovated in 2024', 'Equipped kitchen', 'Rustic-chic architecture', 'Naturally lit rooms', 'Independent suites', 'Security in a gated community', 'Access to the golf course'],
  },
  staff: {
    pt: ['Cozinheira', 'Arrumadeira'],
    en: ['Cook', 'Housekeeper'],
  },
  notes: {
    pt: ['Equipe disponível por até oito horas diárias.'],
    en: ['Staff available for up to eight hours a day.'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Terravista Golf, a Casa 25 é uma residência de alto padrão que combina conforto, privacidade e uma atmosfera elegante em meio à natureza de Trancoso.\n\nTotalmente reformada em 2024, a casa apresenta uma arquitetura rústico-chic, marcada pelo uso de materiais naturais, ambientes amplos e integração harmoniosa com o jardim tropical. As grandes portas de madeira favorecem a entrada de luz natural e podem ser abertas por completo, criando uma agradável sensação de amplitude e conexão com a paisagem.\n\nA propriedade dispõe de cinco suítes independentes e confortáveis, acomodando até dez hóspedes. Duas suítes possuem cama king size, uma possui cama queen size e duas possuem duas camas de solteiro cada. Todas são arejadas, com amplas portas de madeira e vistas para a área verde. A suíte master se destaca pela vista aberta para a lagoa, o bosque e o campo de golfe.\n\nA área social conta com sala de estar integrada a um amplo terraço coberto, ideal para refeições e momentos de descanso em contato com o jardim. A cozinha está localizada a poucos passos, garantindo praticidade durante toda a hospedagem.\n\nNa área externa, a ampla piscina é cercada por um espaçoso deck e por uma área gourmet coberta e equipada, com mesa para refeições ao ar livre. O ambiente oferece vista privilegiada para o campo de golfe, a lagoa e a vegetação, sendo perfeito para aproveitar os dias ensolarados de Trancoso com tranquilidade e exclusividade.\n\nA Casa 25 está situada no Condomínio Terravista Golf, um dos endereços mais prestigiados de Trancoso. O condomínio oferece segurança, contato direto com a natureza, acesso ao renomado campo de golfe e apoio de praia, além de estar próximo às principais praias da região.',
    en: 'Located in the exclusive Terravista Golf Condominium, Casa 25 is a high-standard residence that combines comfort, privacy and an elegant atmosphere amid Trancoso\'s nature.\n\nFully renovated in 2024, the house features rustic-chic architecture, marked by the use of natural materials, spacious rooms and harmonious integration with the tropical garden. The large wooden doors let in natural light and can be fully opened, creating a pleasant sense of spaciousness and connection with the landscape.\n\nThe property offers five independent and comfortable suites, accommodating up to ten guests. Two suites have a king-size bed, one has a queen-size bed and two have two single beds each. All are airy, with large wooden doors and views of the green area. The master suite stands out for its open view of the lagoon, the grove and the golf course.\n\nThe social area features a living room integrated with a large covered terrace, ideal for meals and moments of rest in contact with the garden. The kitchen is located just a few steps away, ensuring practicality throughout the stay.\n\nOutside, the large pool is surrounded by a spacious deck and a covered, equipped gourmet area, with a table for outdoor meals. The setting offers a privileged view of the golf course, the lagoon and the vegetation, perfect for enjoying Trancoso\'s sunny days with tranquility and exclusivity.\n\nCasa 25 is located in the Terravista Golf Condominium, one of Trancoso\'s most prestigious addresses. The condominium offers security, direct contact with nature, access to the renowned golf course and beach support, in addition to being close to the region\'s main beaches.',
  },
};

const PG50: Property = {
  id: 'casa-50-pedro-grande', code: 'TBA-250', name: { pt: 'Casa 50 — Condomínio Pedro Grande', en: 'Casa 50 — Pedro Grande Condominium' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 5, guests: 14, baths: 7, area: '520 m² · terreno 1.716 m²',
  price: { pt: 'R$ 4.800 / diária', en: 'R$ 4,800 / night' },
  priceLow: { pt: 'R$ 3.800 / diária', en: 'R$ 3,800 / night' },
  carnaval: { pt: 'R$ 50.000', en: 'R$ 50,000' },
  reveillon: { pt: 'R$ 180.000', en: 'R$ 180,000' },
  image: '/img/pg50/01.jpg',
  gallery: ['/img/pg50/01.webp','/img/pg50/02.webp','/img/pg50/03.webp','/img/pg50/04.webp','/img/pg50/05.webp','/img/pg50/06.webp','/img/pg50/07.webp','/img/pg50/08.webp','/img/pg50/09.webp','/img/pg50/10.webp','/img/pg50/11.webp','/img/pg50/12.webp','/img/pg50/13.webp','/img/pg50/14.webp','/img/pg50/15.webp','/img/pg50/16.webp','/img/pg50/17.webp','/img/pg50/18.webp','/img/pg50/19.webp','/img/pg50/20.webp','/img/pg50/21.webp','/img/pg50/22.webp','/img/pg50/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Amplo jardim tropical', 'Área gourmet completa com espaço integrado', 'Espaço de jogos com sinuca', 'Varanda com rede', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada', 'Lavabo', 'Quarto de despejo', 'Lavanderia', 'Ar-condicionado nos quartos', 'Internet Wi-Fi', 'Roupa de cama, mesa e banho', 'Toalhas de piscina', 'Estacionamento', 'Condomínio fechado com segurança 24h'],
    en: ['Private pool', 'Large tropical garden', 'Complete gourmet area with integrated space', 'Games room with pool table', 'Balcony with hammock', 'Living room, dining room and TV room', 'Equipped kitchen', 'Guest bathroom', 'Storage room', 'Laundry', 'Air conditioning in bedrooms', 'Wi-Fi internet', 'Bed, table and bath linens', 'Pool towels', 'Parking', 'Gated community with 24-hour security'],
  },
  staff: {
    pt: ['1 cozinheira', '1 camareira', '1 lavadeira'],
    en: ['1 cook', '1 housekeeper', '1 laundress'],
  },
  description: {
    pt: 'Localizada no Condomínio Pedro Grande, em Trancoso, a Casa 50 é uma residência ampla e aconchegante, pensada para famílias e grupos que desejam viver o destino com conforto, privacidade e uma atmosfera verdadeiramente acolhedora.\n\nImplantada em um terreno de aproximadamente 1.716 m² e com cerca de 520 m² de área construída, a casa se integra a um amplo jardim tropical, oferecendo ambientes espaçosos, bem iluminados e com uma agradável sensação de retiro.\n\nA propriedade dispõe de cinco suítes e acomoda confortavelmente até 14 hóspedes. Duas suítes possuem uma cama de casal queen size e duas camas de solteiro; outras duas suítes contam com uma cama de casal king size e uma cama de solteiro; e uma suíte possui duas camas de solteiro. Todos os quartos possuem ar-condicionado.\n\nAs áreas sociais foram planejadas para momentos de convivência e descanso. A casa conta com sala de estar, sala de jantar e sala de TV, além de cozinha equipada e lavabo. Um espaço de jogos com sinuca garante diversão para todas as idades.\n\nNa área externa, o destaque é a ampla área gourmet completa e integrada, perfeita para almoços e jantares ao ar livre. O jardim tropical abriga a piscina privativa, rodeada pela vegetação e pela tranquilidade característica do condomínio.\n\nO Condomínio Pedro Grande oferece segurança 24 horas e está próximo às praias e ao Quadrado de Trancoso, unindo privacidade, natureza e acesso fácil aos principais pontos da vila.',
    en: 'Located in the Pedro Grande Condominium, in Trancoso, Casa 50 is a spacious and cozy residence, designed for families and groups who want to experience the destination with comfort, privacy and a truly welcoming atmosphere.\n\nSet on a plot of approximately 1,716 m² with about 520 m² of built area, the house integrates with a large tropical garden, offering spacious, well-lit rooms with a pleasant sense of retreat.\n\nThe property has five suites and comfortably accommodates up to 14 guests. Two suites have a queen-size double bed and two single beds; another two suites have a king-size double bed and a single bed; and one suite has two single beds. All bedrooms have air conditioning.\n\nThe social areas were planned for moments of togetherness and rest. The house has a living room, dining room and TV room, as well as an equipped kitchen and guest bathroom. A games room with a pool table guarantees fun for all ages.\n\nOutside, the highlight is the large, complete and integrated gourmet area, perfect for outdoor lunches and dinners. The tropical garden houses the private pool, surrounded by vegetation and the characteristic tranquility of the condominium.\n\nThe Pedro Grande Condominium offers 24-hour security and is close to the beaches and Trancoso\'s Quadrado, combining privacy, nature and easy access to the village\'s main attractions.',
  },
};

const CASAEDO: Property = {
  id: 'casa-do-edo', code: 'TBA-251', name: { pt: 'Casa do Edo — Itapororoca', en: 'Casa do Edo — Itapororoca' },
  purpose: ['aluguel'], location: 'Praia de Itapororoca', suites: 7, guests: 14, baths: 6, area: '800 m² · terreno 12.400 m²',
  price: { pt: 'R$ 13.500 / diária', en: 'R$ 13,500 / night' },
  priceLow: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  carnaval: { pt: 'R$ 105.000', en: 'R$ 105,000' },
  reveillon: { pt: 'R$ 470.000', en: 'R$ 470,000' },
  image: '/img/casa-edo/01.jpg',
  gallery: ['/img/casa-edo/01.webp','/img/casa-edo/02.webp','/img/casa-edo/03.webp','/img/casa-edo/04.webp','/img/casa-edo/05.webp','/img/casa-edo/06.webp','/img/casa-edo/07.webp','/img/casa-edo/08.webp','/img/casa-edo/09.webp','/img/casa-edo/10.webp','/img/casa-edo/11.webp','/img/casa-edo/12.webp','/img/casa-edo/13.webp','/img/casa-edo/14.webp','/img/casa-edo/15.webp','/img/casa-edo/16.webp','/img/casa-edo/17.webp','/img/casa-edo/18.webp','/img/casa-edo/19.webp','/img/casa-edo/20.webp','/img/casa-edo/21.webp','/img/casa-edo/22.webp','/img/casa-edo/23.webp','/img/casa-edo/24.webp','/img/casa-edo/25.webp','/img/casa-edo/26.webp','/img/casa-edo/27.webp','/img/casa-edo/28.webp','/img/casa-edo/29.webp'], featured: true,
  amenities: {
    pt: ['Pé na areia com 80 m de frente para o mar', 'Piscina com gazebo de apoio', 'Amplo deck com vista para o mar, bar e redes', 'Mirante de piaçava com vista do litoral', 'Churrasqueira e área gourmet', 'Casa de hóspedes independente', 'Sala de leitura com biblioteca', 'Sala de TV com lareira', 'Mesa de ping-pong', 'Stand-up paddle (SUP)', 'Apoio de praia', 'Cozinha equipada com forno de pizza', 'Ar-condicionado e mosquiteiro', 'Internet Wi-Fi e TV a cabo', 'Gerador e poço artesiano', 'Lavanderia', 'Roupas de cama, mesa e banho', 'Estacionamento'],
    en: ['Beachfront with 80 m of ocean frontage', 'Pool with supporting gazebo', 'Large deck with sea view, bar and hammocks', 'Thatch viewpoint overlooking the coastline', 'Barbecue and gourmet area', 'Independent guest house', 'Reading room with library', 'TV room with fireplace', 'Ping-pong table', 'Stand-up paddle (SUP)', 'Beach support', 'Equipped kitchen with pizza oven', 'Air conditioning and mosquito nets', 'Wi-Fi and cable TV', 'Generator and artesian well', 'Laundry', 'Bed, table and bath linens', 'Parking'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 barman', '1 caseiro'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 bartender', '1 caretaker'],
  },
  description: {
    pt: 'Charmosa casa à beira-mar em Itapororoca, na entrada do condomínio e a apenas dois quilômetros do histórico Quadrado de Trancoso. Situada em um terreno de 12.400 m², com 80 metros de frente para o mar, é o destino ideal para quem busca férias embaladas pelo som das ondas.\n\nCom projeto da arquiteta Bia Regys Bittencourt e execução de Ricardo Salem, a residência segue o estilo rústico-chic típico de Trancoso. Entre estruturas de vidro e madeira, cada espaço é permeado pela natureza, criando uma atmosfera de serenidade em todos os ambientes.\n\nA casa principal, a 30 metros da areia, está dividida em três blocos e conta com amplo deck com vista para o mar, bar, redes e agradáveis áreas de convivência. Do deck, uma escada sobe ao mirante de piaçava com vista da Praia dos Coqueiros à Ponta de Itapororoca; embaixo, um espaço de jogos com mesa de ping-pong. Como extensão da área externa, a piscina com gazebo de apoio convida a relaxar à sombra, e a churrasqueira com área gourmet e mesa rústica torna os almoços sob a vegetação nativa ainda mais prazerosos.\n\nSão 5 suítes e 2 quartos entre a casa principal e a charmosa casa de hóspedes, que tem cozinha própria, varandas amplas e uma grande mesa de jantar feita de um bloco único de madeira rústica. A propriedade oferece ainda uma aconchegante sala de leitura com biblioteca — ideal para momentos de introspecção e tranquilidade.',
    en: 'A charming beachfront house in Itapororoca, at the entrance of the condominium and just two kilometers from Trancoso\'s historic Quadrado. Set on a 12,400 m² plot with 80 meters of ocean frontage, it is the ideal destination for those seeking holidays lulled by the sound of the waves.\n\nDesigned by architect Bia Regys Bittencourt and built by Ricardo Salem, the residence follows the rustic-chic style typical of Trancoso. Among glass and wood structures, every space is permeated by nature, creating an atmosphere of serenity throughout.\n\nThe main house, 30 meters from the sand, is divided into three blocks and features a wide deck overlooking the sea, bar, hammocks and pleasant living areas. From the deck, stairs lead up to a thatched viewpoint with views from Praia dos Coqueiros to Ponta de Itapororoca; below, a games area with a ping-pong table. Extending the outdoor area, the pool with its supporting gazebo invites relaxation in the shade, and the barbecue with gourmet area and rustic table makes lunches under the native vegetation even more enjoyable.\n\nThere are 5 suites and 2 bedrooms between the main house and the charming guest house, which has its own kitchen, wide verandas and a large dining table made from a single block of rustic wood. The property also offers a cozy reading room with a library — ideal for moments of quiet and introspection.',
  },
  notes: {
    pt: ['Locação mínima: 3 diárias.', 'Diária de feriados (fevereiro, julho e dezembro): R$ 12.700.', 'Carnaval: pacote mínimo de 7 diárias.', 'Taxa de serviço: 10% (5% no pacote de Réveillon).', 'Serviços inclusos: lavanderia com lavadora, secadora e ferro de passar; apoio de praia com toalhas, cadeiras e espreguiçadeiras.'],
    en: ['Minimum stay: 3 nights.', 'Holiday nightly rate (February, July and December): R$ 12,700.', 'Carnival: minimum 7-night package.', 'Service fee: 10% (5% on the New Year\'s Eve package).', 'Included services: laundry with washer, dryer and iron; beach support with towels, chairs and loungers.'],
  },
};

const BALEIA: Property = {
  id: 'casa-baleia', code: 'TBA-252', name: { pt: 'Casa Baleia — Pedro Grande', en: 'Casa Baleia — Pedro Grande' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 7, guests: 14, baths: 7, area: '—',
  price: { pt: 'R$ 22.000 / diária', en: 'R$ 22,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/casa-baleia/01.jpg',
  gallery: ['/img/casa-baleia/01.webp','/img/casa-baleia/02.webp','/img/casa-baleia/03.webp','/img/casa-baleia/04.webp','/img/casa-baleia/05.webp','/img/casa-baleia/06.webp','/img/casa-baleia/07.webp','/img/casa-baleia/08.webp','/img/casa-baleia/09.webp','/img/casa-baleia/10.webp','/img/casa-baleia/11.webp','/img/casa-baleia/12.webp','/img/casa-baleia/13.webp','/img/casa-baleia/14.webp','/img/casa-baleia/15.webp','/img/casa-baleia/16.webp','/img/casa-baleia/17.webp','/img/casa-baleia/18.webp','/img/casa-baleia/19.webp','/img/casa-baleia/20.webp','/img/casa-baleia/21.webp','/img/casa-baleia/22.webp','/img/casa-baleia/23.webp','/img/casa-baleia/24.webp','/img/casa-baleia/25.webp','/img/casa-baleia/26.webp','/img/casa-baleia/27.webp','/img/casa-baleia/28.webp','/img/casa-baleia/29.webp','/img/casa-baleia/30.webp','/img/casa-baleia/31.webp','/img/casa-baleia/32.webp','/img/casa-baleia/33.webp','/img/casa-baleia/34.webp','/img/casa-baleia/35.webp','/img/casa-baleia/36.webp','/img/casa-baleia/37.webp'], featured: true,
  amenities: {
    pt: ['A poucos passos da Praia do Rio da Barra', 'Piscina com vista para o mar', 'Amplas áreas de convivência', 'Escritório', 'Playground para crianças', 'Bangalô externo com sala de estar, TV e cozinha privativa', 'Ar-condicionado em todas as suítes', 'Mosquiteiro, cofre e secador de cabelo nas suítes', 'Banheira na Suíte Master', 'Internet Wi-Fi', 'Jardim com paisagismo Licuri', 'Estacionamento', 'Condomínio fechado com segurança'],
    en: ['A few steps from Rio da Barra Beach', 'Pool with sea view', 'Large living areas', 'Office', 'Children\'s playground', 'External bungalow with living room, TV and private kitchen', 'Air conditioning in all suites', 'Mosquito net, safe and hairdryer in suites', 'Bathtub in the Master Suite', 'Wi-Fi internet', 'Garden landscaped by Licuri', 'Parking', 'Gated community with security'],
  },
  staff: {
    pt: ['Concierge para suporte durante a hospedagem', '2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 barman/copeiro', '1 jardineiro/piscineiro'],
    en: ['Concierge for support during the stay', '2 housekeepers', '1 cook', '1 kitchen assistant', '1 bartender', '1 gardener/pool attendant'],
  },
  description: {
    pt: 'A Casa Baleia é um refúgio sofisticado no Condomínio Pedro Grande, um dos endereços mais exclusivos de Trancoso. Cercada pela natureza e localizada a poucos metros da Praia do Rio da Barra, a propriedade reúne conforto, privacidade e a atmosfera descontraída que tornou o destino mundialmente desejado.\n\nPensada especialmente para famílias e grupos de amigos, a residência oferece sete suítes, escritório, amplas áreas de convivência, espaços de descanso e lazer, além de playground para as crianças. Totalmente equipada, proporciona uma hospedagem confortável e acolhedora, com serviço completo e ambientes que se integram de forma natural ao jardim e à paisagem.\n\nO projeto arquitetônico do escritório Vida de Vila revisita a identidade de Trancoso por meio de uma elegante linguagem rústico-chic. Peças de artesãos locais, materiais naturais e detalhes cuidadosamente escolhidos aproximam os hóspedes da cultura baiana. O paisagismo da Licuri e a decoração de Juliana Favarato e Vida de Vila completam a experiência com autenticidade, leveza e aconchego.\n\nA casa fica a uma agradável caminhada da Praia do Rio da Barra e a aproximadamente 5 minutos de carro do Quadrado Histórico.',
    en: 'Casa Baleia is a sophisticated retreat in the Pedro Grande Condominium, one of Trancoso\'s most exclusive addresses. Surrounded by nature and located a few meters from Rio da Barra Beach, the property brings together comfort, privacy and the relaxed atmosphere that has made the destination desired worldwide.\n\nDesigned especially for families and groups of friends, the residence offers seven suites, an office, generous living areas, rest and leisure spaces, plus a playground for children. Fully equipped, it provides a comfortable and welcoming stay, with full service and rooms that integrate naturally with the garden and the landscape.\n\nThe architectural project by Vida de Vila revisits Trancoso\'s identity through an elegant rustic-chic language. Pieces by local artisans, natural materials and carefully chosen details bring guests closer to Bahian culture. Landscaping by Licuri and decoration by Juliana Favarato and Vida de Vila complete the experience with authenticity, lightness and warmth.\n\nThe house is a pleasant walk from Rio da Barra Beach and approximately 5 minutes by car from the historic Quadrado.',
  },
  notes: {
    pt: ['Locação mínima: 4 diárias.', 'Capacidade ideal: 14 hóspedes; capacidade máxima: até 18 hóspedes, mediante consulta e cobrança adicional de R$ 1.000 por pessoa, por dia.', 'Não são permitidos animais de estimação.', 'Carnaval 2027: pacote de 5 diárias, sob consulta.', 'Réveillon: pacote de 10 diárias — indisponível.', 'Os valores não incluem 10% de taxa de serviço. Tarifas e disponibilidade sujeitas a alteração sem aviso prévio.'],
    en: ['Minimum stay: 4 nights.', 'Ideal capacity: 14 guests; maximum capacity: up to 18 guests, upon request and additional charge of R$ 1,000 per person, per day.', 'Pets are not allowed.', 'Carnival 2027: 5-night package, upon request.', 'New Year\'s Eve: 10-night package — unavailable.', 'Rates do not include a 10% service fee. Rates and availability are subject to change without prior notice.'],
  },
};

const PG55: Property = {
  id: 'casa-55-pedro-grande', code: 'TBA-253', name: { pt: 'Casa 55 — Condomínio Pedro Grande', en: 'Casa 55 — Pedro Grande Condominium' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 6, guests: 12, baths: 7, area: '850 m²',
  price: { pt: 'R$ 13.000 / diária', en: 'R$ 13,000 / night' },
  priceLow: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  carnaval: { pt: 'R$ 85.000', en: 'R$ 85,000' },
  reveillon: { pt: 'R$ 410.000', en: 'R$ 410,000' },
  image: '/img/pg55/01.jpg',
  gallery: ['/img/pg55/01.webp','/img/pg55/02.webp','/img/pg55/03.webp','/img/pg55/04.webp','/img/pg55/05.webp','/img/pg55/06.webp','/img/pg55/07.webp','/img/pg55/08.webp','/img/pg55/09.webp','/img/pg55/10.webp','/img/pg55/11.webp','/img/pg55/12.webp','/img/pg55/13.webp','/img/pg55/14.webp','/img/pg55/15.webp','/img/pg55/16.webp','/img/pg55/17.webp','/img/pg55/18.webp','/img/pg55/19.webp','/img/pg55/20.webp','/img/pg55/21.webp','/img/pg55/22.webp','/img/pg55/23.webp','/img/pg55/24.webp','/img/pg55/25.webp','/img/pg55/26.webp','/img/pg55/27.webp','/img/pg55/28.webp','/img/pg55/29.webp','/img/pg55/30.webp','/img/pg55/31.webp','/img/pg55/32.webp','/img/pg55/33.webp','/img/pg55/34.webp','/img/pg55/35.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Pira central em meio à mata', 'Academia', 'Adega de vinhos', 'Espaço gourmet com churrasqueira', 'Apoio de praia', 'Bicicletas fat bike', 'Salas de estar, jantar e TV', 'Cozinha equipada', 'Cervejeira e máquina de gelo', 'Ar-condicionado e ventilador de teto', 'Internet Wi-Fi e TV a cabo', 'Lavabo e lavanderia', 'Gerador', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia', 'Estacionamento', '800 m da Praia do Rio da Barra'],
    en: ['Private pool', 'Central fire pit in the woods', 'Gym', 'Wine cellar', 'Gourmet area with barbecue', 'Beach support', 'Fat bikes', 'Living, dining and TV rooms', 'Equipped kitchen', 'Beer fridge and ice maker', 'Air conditioning and ceiling fans', 'Wi-Fi and cable TV', 'Guest bathroom and laundry', 'Generator', 'Bed, table and bath linens', 'Pool and beach towels', 'Parking', '800 m from Rio da Barra Beach'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 caseiro'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 caretaker'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Pedro Grande, a Casa 55 é um refúgio de alto padrão cercado pela natureza, pensado para proporcionar privacidade, conforto e uma experiência autêntica em Trancoso.\n\nCom 850 m² de área construída, a residência acomoda até 12 hóspedes em seis suítes. Os ambientes sociais são amplos e integrados, reunindo salas de estar, jantar e TV, cozinha equipada, espaço gourmet, adega, academia e piscina privativa.\n\nA pira central, posicionada em meio à mata, cria um cenário acolhedor para encontros ao redor do fogo. Durante o dia, a piscina, os jardins e a vista para a vegetação tornam a área externa um dos grandes destaques da casa.\n\nO projeto arquitetônico é assinado por NK Arquitetura e Renata Pinesi, com paisagismo de Juliana Favarato e decoração de Márcia Nogueira. A propriedade também oferece apoio de praia e bicicletas fat bike para explorar os arredores.\n\nLocalizada a aproximadamente 800 metros da Praia do Rio da Barra e a 3,5 km do Quadrado, a Casa 55 combina natureza, design e serviços completos em uma das regiões mais desejadas de Trancoso.',
    en: 'Located in the exclusive Pedro Grande Condominium, Casa 55 is a high-standard retreat surrounded by nature, designed to provide privacy, comfort and an authentic Trancoso experience.\n\nWith 850 m² of built area, the residence accommodates up to 12 guests in six suites. The social areas are spacious and integrated, bringing together living, dining and TV rooms, equipped kitchen, gourmet area, wine cellar, gym and private pool.\n\nThe central fire pit, set among the trees, creates a welcoming scene for gatherings around the fire. During the day, the pool, gardens and views over the vegetation make the outdoor area one of the house\'s great highlights.\n\nThe architectural project is signed by NK Arquitetura and Renata Pinesi, with landscaping by Juliana Favarato and decoration by Márcia Nogueira. The property also offers beach support and fat bikes to explore the surroundings.\n\nLocated approximately 800 meters from Rio da Barra Beach and 3.5 km from the Quadrado, Casa 55 combines nature, design and full services in one of Trancoso\'s most desired regions.',
  },
  notes: {
    pt: ['Locação mínima de 3 diárias, exceto em períodos especiais.', 'Não é permitido pet.', 'Cama extra disponível mediante taxa de R$ 800 por cama, por dia.', 'Diária em feriados: R$ 13.000.', 'Preços não incluem 10% de taxa de serviço.'],
    en: ['Minimum stay of 3 nights, except in special periods.', 'Pets are not allowed.', 'Extra bed available for a fee of R$ 800 per bed, per day.', 'Holiday nightly rate: R$ 13,000.', 'Rates do not include a 10% service fee.'],
  },
};

const GOLF72: Property = {
  id: 'terravista-golf-72', code: 'TBA-254', name: { pt: 'Casa 72 — Terravista Golf', en: 'Casa 72 — Terravista Golf' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 8, guests: 16, baths: 8, area: '1.520 m² · terreno 2.580 m²',
  price: { pt: 'R$ 21.500 / diária', en: 'R$ 21,500 / night' },
  priceLow: { pt: 'R$ 16.000 / diária', en: 'R$ 16,000 / night' },
  carnaval: { pt: 'R$ 200.000', en: 'R$ 200,000' },
  reveillon: { pt: 'R$ 800.000', en: 'R$ 800,000' },
  image: '/img/golf72/01.jpg',
  gallery: ['/img/golf72/01.webp','/img/golf72/02.webp','/img/golf72/03.webp','/img/golf72/04.webp','/img/golf72/05.webp','/img/golf72/06.webp','/img/golf72/07.webp','/img/golf72/08.webp','/img/golf72/09.webp','/img/golf72/10.webp','/img/golf72/11.webp','/img/golf72/12.webp','/img/golf72/13.webp','/img/golf72/14.webp','/img/golf72/15.webp','/img/golf72/16.webp','/img/golf72/17.webp','/img/golf72/18.webp','/img/golf72/19.webp','/img/golf72/20.webp','/img/golf72/21.webp','/img/golf72/22.webp','/img/golf72/23.webp','/img/golf72/24.webp','/img/golf72/25.webp','/img/golf72/26.webp','/img/golf72/27.webp','/img/golf72/28.webp','/img/golf72/29.webp','/img/golf72/30.webp','/img/golf72/31.webp','/img/golf72/32.webp','/img/golf72/33.webp','/img/golf72/34.webp','/img/golf72/35.webp','/img/golf72/36.webp','/img/golf72/37.webp','/img/golf72/38.webp','/img/golf72/39.webp','/img/golf72/40.webp','/img/golf72/41.webp','/img/golf72/42.webp','/img/golf72/43.webp','/img/golf72/44.webp','/img/golf72/45.webp','/img/golf72/46.webp','/img/golf72/47.webp','/img/golf72/48.webp','/img/golf72/49.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Academia e sala de ginástica', 'Sauna', 'Espaço gourmet', 'Adega', 'Apoio de praia', 'Salas de estar, jantar e TV', 'Cozinha equipada', 'Frigobar, freezer e cervejeira', 'Lavanderia', 'Quarto de apoio', 'Espreguiçadeiras e ombrelones', 'Internet Wi-Fi', 'Ar-condicionado nas suítes'],
    en: ['Pool', 'Gym and fitness room', 'Sauna', 'Gourmet area', 'Wine cellar', 'Beach support', 'Living, dining and TV rooms', 'Equipped kitchen', 'Minibar, freezer and beer fridge', 'Laundry', 'Staff room', 'Loungers and umbrellas', 'Wi-Fi internet', 'Air conditioning in suites'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 barman', '1 concierge'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 bartender', '1 concierge'],
  },
  description: {
    pt: 'Localizada em um terreno de 2.580 m² no Terravista Golf, esta residência oferece 1.520 m² de área construída e acomoda até 16 hóspedes em oito suítes.\n\nO projeto de arquitetura e decoração é assinado pelo escritório Mercado do Mar, enquanto o paisagismo leva a assinatura da Flora Nativa. Os ambientes integram salas amplas, piscina, academia, sauna, espaço gourmet, adega e áreas de convivência voltadas para o estilo de vida de Trancoso.\n\nA Suíte Máster conta com cama super king, closet, TV, frigobar e vista para a piscina. As suítes 02 a 06 têm cama king, TV, frigobar e ar-condicionado; as suítes 07 e 08 oferecem duas camas de solteiro reversíveis para casal, TV, frigobar e ar-condicionado.',
    en: 'Set on a 2,580 m² plot in Terravista Golf, this residence offers 1,520 m² of built area and accommodates up to 16 guests in eight suites.\n\nThe architecture and decoration project is signed by Mercado do Mar, while the landscaping is by Flora Nativa. The spaces bring together spacious living rooms, pool, gym, sauna, gourmet area, wine cellar and gathering areas designed for the Trancoso lifestyle.\n\nThe Master Suite features a super king bed, walk-in closet, TV, minibar and pool views. Suites 02 to 06 have a king bed, TV, minibar and air conditioning; suites 07 and 08 offer two single beds convertible into a double, TV, minibar and air conditioning.',
  },
  notes: {
    pt: ['Diária em feriados: R$ 20.000.', 'Preços não incluem 10% de taxa de serviço.'],
    en: ['Holiday nightly rate: R$ 20,000.', 'Rates do not include a 10% service fee.'],
  },
};

const PITANGA: Property = {
  id: 'casa-pitanga', code: 'TBA-255', name: { pt: 'Casa Pitanga', en: 'Casa Pitanga' },
  purpose: ['aluguel'], location: 'Trancoso', suites: 3, guests: 6, baths: 3, area: '—',
  price: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 120.000', en: 'R$ 120,000' },
  image: '/img/casa-pitanga/01.jpg',
  gallery: ['/img/casa-pitanga/01.webp','/img/casa-pitanga/02.webp','/img/casa-pitanga/03.webp','/img/casa-pitanga/04.webp','/img/casa-pitanga/05.webp','/img/casa-pitanga/06.webp','/img/casa-pitanga/07.webp','/img/casa-pitanga/08.webp','/img/casa-pitanga/09.webp','/img/casa-pitanga/10.webp','/img/casa-pitanga/11.webp','/img/casa-pitanga/12.webp','/img/casa-pitanga/13.webp','/img/casa-pitanga/14.webp','/img/casa-pitanga/15.webp','/img/casa-pitanga/16.webp','/img/casa-pitanga/17.webp','/img/casa-pitanga/18.webp','/img/casa-pitanga/19.webp','/img/casa-pitanga/20.webp','/img/casa-pitanga/21.webp','/img/casa-pitanga/22.webp','/img/casa-pitanga/23.webp','/img/casa-pitanga/24.webp','/img/casa-pitanga/25.webp','/img/casa-pitanga/26.webp','/img/casa-pitanga/27.webp','/img/casa-pitanga/28.webp','/img/casa-pitanga/29.webp','/img/casa-pitanga/30.webp','/img/casa-pitanga/31.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Lounge externo', 'Salão de jogos com sinuca', 'Suítes com ar-condicionado', 'Sala de estar', 'Cozinha completa', 'Ambientes integrados', 'Internet Wi-Fi', 'TV a cabo', 'Estacionamento', 'Roupa de cama, mesa e banho', '8 min a pé do Quadrado Histórico', '15 min a pé da Praia dos Nativos'],
    en: ['Private pool', 'Outdoor lounge', 'Games room with pool table', 'Suites with air conditioning', 'Living room', 'Full kitchen', 'Integrated spaces', 'Wi-Fi internet', 'Cable TV', 'Parking', 'Bed, table and bath linens', '8 min walk from the historic Quadrado', '15 min walk from Praia dos Nativos'],
  },
  staff: {
    pt: ['Concierge', 'Cozinheira', 'Camareira', 'Piscineiro e jardineiro'],
    en: ['Concierge', 'Cook', 'Housekeeper', 'Pool attendant and gardener'],
  },
  description: {
    pt: 'Localizada em meio à atmosfera charmosa e vibrante de Trancoso, a Casa Pitanga traduz com elegância o encontro entre a arquitetura rústica da região e o conforto contemporâneo.\n\nSua fachada, marcada por elementos naturais e materiais típicos da arquitetura trancosense, integra-se de forma harmoniosa à paisagem. Ao atravessar o portão, os hóspedes são recebidos por ambientes amplos, fluidos e acolhedores, com linhas leves e uma paleta de cores inspirada nos tons da natureza.\n\nA decoração combina móveis artesanais, peças de artistas e referências culturais locais com elementos modernos e sofisticados. Cada espaço foi cuidadosamente planejado para proporcionar bem-estar, tranquilidade e uma experiência autêntica de hospedagem.\n\nA área externa conta com piscina e um agradável lounge, perfeitos para momentos de descanso após um dia de praia ou para aproveitar tardes tranquilas entre amigos e familiares.\n\nCom localização privilegiada, a poucos minutos do Quadrado e da Praia dos Nativos, a Casa Pitanga é uma excelente escolha para quem deseja vivenciar Trancoso com conforto, praticidade e privacidade.',
    en: 'Set amid Trancoso\'s charming and vibrant atmosphere, Casa Pitanga elegantly translates the meeting of the region\'s rustic architecture and contemporary comfort.\n\nIts façade, marked by natural elements and materials typical of Trancoso architecture, blends harmoniously into the landscape. Through the gate, guests are welcomed by spacious, fluid and welcoming rooms, with light lines and a color palette inspired by the tones of nature.\n\nThe décor combines handcrafted furniture, pieces by artists and local cultural references with modern and sophisticated elements. Every space was carefully planned to provide well-being, tranquility and an authentic hosting experience.\n\nThe outdoor area features a pool and a pleasant lounge, perfect for resting after a day at the beach or enjoying quiet afternoons with friends and family.\n\nWith a privileged location, a few minutes from the Quadrado and Praia dos Nativos, Casa Pitanga is an excellent choice for those who want to experience Trancoso with comfort, practicality and privacy.',
  },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 120.000 — disponível.', 'Carnaval: pacote de 5 diárias, sob consulta — disponível para 2027.', 'Valores, disponibilidade e condições sujeitos à confirmação.'],
    en: ['New Year\'s Eve: 10-night package R$ 120,000 — available.', 'Carnival: 5-night package, upon request — available for 2027.', 'Rates, availability and conditions subject to confirmation.'],
  },
};

const AFRICA: Property = {
  id: 'casa-africa', code: 'TBA-256', name: { pt: 'Casa África', en: 'Casa África' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 5, area: '468,80 m²',
  price: { pt: 'R$ 9.500 / diária', en: 'R$ 9,500 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'R$ 65.000', en: 'R$ 65,000' },
  reveillon: { pt: 'R$ 300.000', en: 'R$ 300,000' },
  image: '/img/africa/01.jpg',
  gallery: ['/img/africa/01.webp','/img/africa/02.webp','/img/africa/03.webp','/img/africa/04.webp','/img/africa/05.webp','/img/africa/06.webp','/img/africa/07.webp','/img/africa/08.webp','/img/africa/09.webp','/img/africa/10.webp','/img/africa/11.webp','/img/africa/12.webp','/img/africa/13.webp','/img/africa/14.webp','/img/africa/15.webp','/img/africa/16.webp','/img/africa/17.webp','/img/africa/18.webp','/img/africa/19.webp','/img/africa/20.webp','/img/africa/21.webp','/img/africa/22.webp','/img/africa/23.webp','/img/africa/24.webp','/img/africa/25.webp','/img/africa/26.webp','/img/africa/27.webp','/img/africa/28.webp','/img/africa/29.webp','/img/africa/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina privativa revestida em seixos e ofurô', 'Deck de 432 m² com vista para o mar', 'Amplo jardim com gramado', 'Sala de estar, TV e jantar integradas', 'Smart TV 55" e som JBL', 'Cozinha equipada completa', 'Churrasqueiras elétrica e a carvão Weber', 'Ar-condicionado e mosquiteiros nas suítes', 'Wi-Fi fibra óptica e Starlink', 'Gerador automático', 'Enxoval Buddemeyer', 'Toalhas de piscina, espreguiçadeiras e sombreiros', 'Ducha externa', 'Condomínio fechado com segurança'],
    en: ['Ocean view', 'Private pebble-lined pool and hot tub', '432 m² deck overlooking the sea', 'Large lawn garden', 'Integrated living, TV and dining rooms', '55" Smart TV and JBL sound system', 'Fully equipped kitchen', 'Electric and Weber charcoal grills', 'Air conditioning and mosquito nets in suites', 'Fiber optic and Starlink Wi-Fi', 'Automatic generator', 'Buddemeyer linen', 'Pool towels, loungers and parasols', 'Outdoor shower', 'Gated community with security'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Trancoso, a Casa África reúne vista privilegiada para o mar, arquitetura de personalidade e a tranquilidade de uma das áreas residenciais mais desejadas do destino. Posicionada na primeira linha do condomínio, desfruta de uma ampla perspectiva do oceano, com fácil acesso ao Quadrado e à Praia dos Coqueiros.\n\nO projeto arquitetônico valoriza linhas retas, proporções generosas e ambientes integrados, enquanto a cobertura de piaçava imprime identidade tropical e uma atmosfera inspirada em referências africanas. A decoração combina peças do artesanato baiano com uma composição minimalista e cuidadosamente selecionada.\n\nCom quatro suítes e três ambientes sociais interligados — estar, televisão e jantar —, a casa recebe até oito hóspedes com conforto. Um extenso deck de 432 m² se abre para a vista do mar e para o amplo jardim com gramado, criando um cenário ideal para refeições, descanso e convivência.\n\nA área de lazer conta com piscina revestida em seixos, ofurô, espreguiçadeiras, sombreiros e ducha externa. A casa oferece ainda cozinha completa, internet por fibra óptica e Starlink, gerador automático e enxoval de alta qualidade.',
    en: 'Located in the exclusive Altos de Trancoso condominium, Casa África combines a privileged ocean view, distinctive architecture and the tranquility of one of the destination\'s most desired residential areas. Set on the front line of the condominium, it enjoys a wide perspective of the ocean, with easy access to the Quadrado and Coqueiros Beach.\n\nThe architectural design features straight lines, generous proportions and integrated spaces, while the piaçava thatched roof adds tropical identity and an atmosphere inspired by African references. The décor combines Bahian craft pieces with a minimalist, carefully curated composition.\n\nWith four suites and three interconnected social areas — living, TV and dining — the house welcomes up to eight guests in comfort. A vast 432 m² deck opens onto the sea view and the large lawn garden, creating an ideal setting for meals, rest and togetherness.\n\nThe leisure area features a pebble-lined pool, hot tub, loungers, parasols and an outdoor shower. The house also offers a full kitchen, fiber optic and Starlink internet, an automatic generator and high-quality linen.',
  },
  staff: { pt: ['Cozinheira, arrumadeira, ajudante de cozinha e profissional de jardim e piscina.'], en: ['Cook, housekeeper, kitchen assistant and garden/pool keeper.'] },
  notes: {
    pt: ['Carnaval: pacote de 5 diárias R$ 65.000 ou 7 diárias R$ 80.000.', 'Réveillon: pacote de 10 diárias R$ 300.000.', 'Capacidade máxima para 8 hóspedes. Compras de alimentos, bebidas e demais consumos cobradas separadamente.'],
    en: ['Carnival: 5-night package R$ 65,000 or 7-night package R$ 80,000.', 'New Year\'s Eve: 10-night package R$ 300,000.', 'Maximum capacity of 8 guests. Groceries, drinks and other consumables charged separately.'],
  },
};

const TEMPO07: Property = {
  id: 'casa-tempo-07', code: 'TBA-257', name: { pt: 'Casa Tempo 07', en: 'Casa Tempo 07' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 2, guests: 4, baths: 2, area: 'Sob consulta',
  price: { pt: 'R$ 2.200 / diária', en: 'R$ 2,200 / night' },
  priceLow: { pt: 'R$ 1.650 / diária', en: 'R$ 1,650 / night' },
  carnaval: { pt: 'R$ 16.500', en: 'R$ 16,500' },
  reveillon: { pt: 'R$ 70.000', en: 'R$ 70,000' },
  image: '/img/tempo07/01.jpg',
  gallery: ['/img/tempo07/01.webp','/img/tempo07/02.webp','/img/tempo07/03.webp','/img/tempo07/04.webp','/img/tempo07/05.webp','/img/tempo07/06.webp','/img/tempo07/07.webp','/img/tempo07/08.webp','/img/tempo07/09.webp','/img/tempo07/10.webp','/img/tempo07/11.webp','/img/tempo07/12.webp','/img/tempo07/13.webp','/img/tempo07/14.webp','/img/tempo07/15.webp','/img/tempo07/16.webp','/img/tempo07/17.webp','/img/tempo07/18.webp','/img/tempo07/19.webp','/img/tempo07/20.webp','/img/tempo07/21.webp','/img/tempo07/22.webp','/img/tempo07/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Cozinha equipada', 'Ar-condicionado', 'Ventiladores', 'Internet Wi-Fi', 'Gerador de energia', 'Roupas de cama, mesa e banho', 'Toalhas de piscina', 'Chuveiros aquecidos a gás', 'Condomínio fechado na entrada do Quadrado'],
    en: ['Private pool', 'Equipped kitchen', 'Air conditioning', 'Ceiling fans', 'Wi-Fi internet', 'Power generator', 'Bed, table and bath linen', 'Pool towels', 'Gas-heated showers', 'Gated community at the Quadrado entrance'],
  },
  description: {
    pt: 'Localizada no Condomínio Tempo, na entrada do Quadrado de Trancoso, a Casa Tempo 07 oferece uma combinação privilegiada de praticidade, conforto e contato com a natureza. A poucos passos do centro histórico, dos principais restaurantes, lojas e atrações do Quadrado, permite aproveitar Trancoso sem a necessidade de carro, com toda a segurança e tranquilidade de um condomínio fechado.\n\nCompacta, moderna e acolhedora, é ideal para casais, famílias pequenas ou grupos de até quatro pessoas. Seus ambientes foram planejados para oferecer conforto, funcionalidade e integração com a natureza. A piscina privativa completa a experiência, proporcionando momentos de relaxamento após um dia de praia ou passeios por Trancoso.\n\nA casa possui duas suítes confortáveis, preparadas para acomodar até quatro hóspedes. Ambas contam com ar-condicionado e banheiros com chuveiros aquecidos a gás, proporcionando conforto e bem-estar durante toda a estadia.',
    en: 'Located in the Tempo Condominium, at the entrance of Trancoso\'s Quadrado, Casa Tempo 07 offers a privileged combination of convenience, comfort and connection with nature. A few steps from the historic center, the main restaurants, shops and attractions of the Quadrado, it allows you to enjoy Trancoso without needing a car, with all the safety and tranquility of a gated community.\n\nCompact, modern and welcoming, it is ideal for couples, small families or groups of up to four people. Its spaces were designed to offer comfort, functionality and integration with nature. The private pool completes the experience, providing moments of relaxation after a day at the beach or exploring Trancoso.\n\nThe house has two comfortable suites, prepared to accommodate up to four guests. Both feature air conditioning and bathrooms with gas-heated showers, providing comfort and well-being throughout the stay.',
  },
  staff: { pt: ['1 camareira. A camareira também pode realizar a montagem do café da manhã (alimentos e bebidas por conta dos hóspedes).'], en: ['1 housekeeper. The housekeeper can also set up breakfast (food and drinks are the guests\' responsibility).'] },
  notes: {
    pt: ['Carnaval: pacote mínimo de 5 diárias R$ 16.500.', 'Réveillon: pacote R$ 70.000.', 'Preços não incluem 10% de taxa de serviço.'],
    en: ['Carnival: minimum 5-night package R$ 16,500.', 'New Year\'s Eve: package R$ 70,000.', 'Prices do not include a 10% service fee.'],
  },
};

const TEMPO08: Property = {
  id: 'casa-tempo-08', code: 'TBA-258', name: { pt: 'Casa Tempo 08', en: 'Casa Tempo 08' },
  purpose: ['aluguel', 'venda'], location: 'Quadrado', suites: 4, guests: 8, baths: 4, area: 'Sob consulta',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 2.900 / diária', en: 'R$ 2,900 / night' },
  carnaval: { pt: 'R$ 25.000', en: 'R$ 25,000' },
  reveillon: { pt: 'R$ 125.000', en: 'R$ 125,000' },
  salePrice: { pt: 'R$ 5.500.000', en: 'R$ 5,500,000' },
  image: '/img/tempo08/01.jpg',
  gallery: ['/img/tempo08/01.webp','/img/tempo08/02.webp','/img/tempo08/03.webp','/img/tempo08/04.webp','/img/tempo08/05.webp','/img/tempo08/06.webp','/img/tempo08/07.webp','/img/tempo08/08.webp','/img/tempo08/09.webp','/img/tempo08/10.webp','/img/tempo08/11.webp','/img/tempo08/12.webp','/img/tempo08/13.webp','/img/tempo08/14.webp','/img/tempo08/15.webp','/img/tempo08/16.webp','/img/tempo08/17.webp','/img/tempo08/18.webp','/img/tempo08/19.webp','/img/tempo08/20.webp','/img/tempo08/21.webp','/img/tempo08/22.webp','/img/tempo08/23.webp','/img/tempo08/24.webp','/img/tempo08/25.webp','/img/tempo08/26.webp','/img/tempo08/27.webp','/img/tempo08/28.webp','/img/tempo08/29.webp','/img/tempo08/30.webp'], featured: false,
  amenities: {
    pt: ['Adega de vinhos', 'Cozinha totalmente equipada', 'Banheira externa', 'Ar-condicionado em todos os quartos', 'Wi-Fi e TV a cabo', 'Gerador', 'Lavanderia e lavabo', 'Piscina do condomínio', 'SPA', 'Roupas de cama, mesa e banho', 'Toalhas de praia e piscina', 'Secadores de cabelo', 'Poço artesiano', 'Estacionamento em condomínio fechado'],
    en: ['Wine cellar', 'Fully equipped kitchen', 'Outdoor bathtub', 'Air conditioning in all bedrooms', 'Wi-Fi and cable TV', 'Power generator', 'Laundry room and guest toilet', 'Condominium pool', 'SPA', 'Bed, table and bath linen', 'Beach and pool towels', 'Hair dryers', 'Artesian well', 'Parking in a gated community'],
  },
  description: {
    pt: 'Localizada no coração do Quadrado de Trancoso, a Casa 08 oferece uma das localizações mais privilegiadas do destino. Cercada por jardins exuberantes e a poucos passos dos principais restaurantes, boutiques e da atmosfera charmosa do centro histórico, permite viver Trancoso sem a necessidade de carro. A Praia dos Nativos pode ser acessada em uma agradável caminhada de aproximadamente 10 minutos.\n\nCom projeto arquitetônico assinado por Carol Bueno (Tryptique), decoração de Pedro Félix e paisagismo de Juliana Favarato (Licuri Paisagismo), a Casa 08 combina elegância contemporânea, conforto e integração com a natureza. Seus ambientes foram planejados para receber até 8 hóspedes com privacidade e praticidade. A banheira externa proporciona um espaço exclusivo para relaxar, enquanto os jardins criam uma atmosfera acolhedora e tranquila.\n\nSuíte 01: cama queen, ar-condicionado, cofre, mosquiteiro, secador e varanda com vista para o jardim. Suíte 02: cama queen, ar-condicionado, mosquiteiro, secador e varanda com vista para o jardim. Quarto 03: cama king, ar-condicionado, mosquiteiro, secador e varanda com vista para o jardim. Quarto 04: duas camas de solteiro conversíveis em cama king, ar-condicionado, closet, secador e varanda com vista para o jardim.',
    en: 'Located in the heart of Trancoso\'s Quadrado, Casa 08 offers one of the most privileged locations in the destination. Surrounded by lush gardens and a few steps from the main restaurants, boutiques and the charming atmosphere of the historic center, it allows you to experience Trancoso without needing a car. Nativos Beach can be reached with a pleasant walk of approximately 10 minutes.\n\nWith an architectural project by Carol Bueno (Tryptique), decoration by Pedro Félix and landscaping by Juliana Favarato (Licuri Paisagismo), Casa 08 combines contemporary elegance, comfort and integration with nature. Its spaces were designed to host up to 8 guests with privacy and convenience. The outdoor bathtub provides an exclusive space to relax, while the gardens create a welcoming and tranquil atmosphere.\n\nSuite 01: queen bed, air conditioning, safe, mosquito net, hair dryer and balcony overlooking the garden. Suite 02: queen bed, air conditioning, mosquito net, hair dryer and balcony overlooking the garden. Bedroom 03: king bed, air conditioning, mosquito net, hair dryer and balcony overlooking the garden. Bedroom 04: two twin beds convertible into a king, air conditioning, walk-in closet, hair dryer and balcony overlooking the garden.',
  },
  staff: { pt: ['Baixa e alta temporada: 1 arrumadeira.', 'Réveillon: 1 arrumadeira e 1 cozinheira.'], en: ['Low and high season: 1 housekeeper.', 'New Year\'s Eve: 1 housekeeper and 1 cook.'] },
  notes: {
    pt: ['Carnaval: pacote R$ 25.000.', 'Réveillon: pacote R$ 125.000.', 'Capacidade para até 8 hóspedes. Não são permitidos pets.', 'Preços não incluem 10% de taxa de serviço, quando aplicável.'],
    en: ['Carnival: package R$ 25,000.', 'New Year\'s Eve: package R$ 125,000.', 'Capacity for up to 8 guests. Pets are not allowed.', 'Prices do not include a 10% service fee, when applicable.'],
  },
};

const TEMPO06: Property = {
  id: 'casa-tempo-06', code: 'TBA-259', name: { pt: 'Casa Tempo 06', en: 'Casa Tempo 06' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 2, guests: 4, baths: 2, area: 'Sob consulta',
  price: { pt: 'R$ 2.100 / diária', en: 'R$ 2,100 / night' },
  priceLow: { pt: 'R$ 1.700 / diária', en: 'R$ 1,700 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'De abril a novembro', en: 'April to November' },
  carnaval: { pt: 'R$ 23.000', en: 'R$ 23,000' },
  reveillon: { pt: 'R$ 70.000', en: 'R$ 70,000' },
  image: '/img/tempo06/01.jpg',
  gallery: ['/img/tempo06/01.webp','/img/tempo06/02.webp','/img/tempo06/03.webp','/img/tempo06/04.webp','/img/tempo06/05.webp','/img/tempo06/06.webp','/img/tempo06/07.webp','/img/tempo06/08.webp','/img/tempo06/09.webp','/img/tempo06/10.webp','/img/tempo06/11.webp','/img/tempo06/12.webp','/img/tempo06/13.webp','/img/tempo06/14.webp','/img/tempo06/15.webp','/img/tempo06/16.webp','/img/tempo06/17.webp','/img/tempo06/18.webp','/img/tempo06/19.webp','/img/tempo06/20.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', '2 suítes com ar-condicionado', 'Cozinha em conceito aberto', 'Sala de TV', 'Mesa de refeições na área externa', 'Sacada', 'TV a cabo', 'Wi-Fi', 'Roupas de cama, mesa e banho', 'Área de serviço', 'Garagem', 'Portaria 24 horas', 'Gerador', 'Poço artesiano'],
    en: ['Private pool', '2 air-conditioned suites', 'Open-concept kitchen', 'TV room', 'Outdoor dining table', 'Balcony', 'Cable TV', 'Wi-Fi', 'Bed, table and bath linen', 'Laundry area', 'Garage', '24-hour gated entrance', 'Power generator', 'Artesian well'],
  },
  description: {
    pt: 'Localizada no Condomínio Tempo, no coração do Quadrado de Trancoso, a Casa Tempo 06 reúne conforto, privacidade e uma das localizações mais privilegiadas da região. A poucos passos dos melhores restaurantes, boutiques e do centro histórico, permite viver toda a experiência de Trancoso sem a necessidade de carro, em um condomínio exclusivo com segurança 24 horas.\n\nProjetado pela arquiteta Carol Bueno, o Condomínio Tempo se destaca pela arquitetura contemporânea de linhas orgânicas, perfeitamente integrada à natureza. A Casa Tempo 06 oferece ambientes acolhedores e funcionais, ideais para até quatro hóspedes. Além da piscina privativa, o condomínio conta com gerador que atende todas as residências, poço artesiano e portaria 24 horas, proporcionando tranquilidade e comodidade durante toda a estadia.\n\nA casa dispõe de 2 suítes com ar-condicionado, oferecendo conforto, privacidade e praticidade para uma hospedagem inesquecível em Trancoso.',
    en: 'Located in the Tempo Condominium, in the heart of Trancoso\'s Quadrado, Casa Tempo 06 combines comfort, privacy and one of the most privileged locations in the region. A few steps from the best restaurants, boutiques and the historic center, it allows you to live the full Trancoso experience without needing a car, in an exclusive condominium with 24-hour security.\n\nDesigned by architect Carol Bueno, the Tempo Condominium stands out for its contemporary architecture with organic lines, perfectly integrated into nature. Casa Tempo 06 offers welcoming and functional spaces, ideal for up to four guests. In addition to the private pool, the condominium has a generator serving all residences, an artesian well and a 24-hour gated entrance, providing peace of mind and convenience throughout the stay.\n\nThe house has 2 air-conditioned suites, offering comfort, privacy and convenience for an unforgettable stay in Trancoso.',
  },
  staff: { pt: ['1 camareira.'], en: ['1 housekeeper.'] },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 70.000.', 'Carnaval: pacote de 5 diárias R$ 23.000.', 'Preços não incluem 10% de taxa de serviço.'],
    en: ['New Year\'s Eve: 10-night package R$ 70,000.', 'Carnival: 5-night package R$ 23,000.', 'Prices do not include a 10% service fee.'],
  },
};

const BOSQUE: Property = {
  id: 'casa-do-bosque', code: 'TBA-260', name: { pt: 'Casa do Bosque', en: 'Casa do Bosque' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 6, guests: 13, baths: 8, area: 'Terreno 941 m² · 596 m² construídos',
  price: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'De abril a novembro', en: 'April to November' },
  carnaval: { pt: 'R$ 65.000', en: 'R$ 65,000' },
  reveillon: { pt: 'R$ 285.000', en: 'R$ 285,000' },
  image: '/img/bosque/01.jpg',
  gallery: ['/img/bosque/01.webp','/img/bosque/02.webp','/img/bosque/03.webp','/img/bosque/04.webp','/img/bosque/05.webp','/img/bosque/06.webp','/img/bosque/07.webp','/img/bosque/08.webp','/img/bosque/09.webp','/img/bosque/10.webp','/img/bosque/11.webp','/img/bosque/12.webp','/img/bosque/13.webp','/img/bosque/14.webp','/img/bosque/15.webp','/img/bosque/16.webp','/img/bosque/17.webp','/img/bosque/18.webp','/img/bosque/19.webp','/img/bosque/20.webp','/img/bosque/21.webp','/img/bosque/22.webp','/img/bosque/23.webp','/img/bosque/24.webp','/img/bosque/25.webp','/img/bosque/26.webp','/img/bosque/27.webp','/img/bosque/28.webp','/img/bosque/29.webp','/img/bosque/30.webp','/img/bosque/31.webp','/img/bosque/32.webp','/img/bosque/33.webp','/img/bosque/34.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Espaço gourmet', 'Churrasqueira', 'Adega de vinhos', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Quarto de apoio', 'Ar-condicionado', 'Ventilador de teto', 'Cofres nos quartos', 'Mosquiteiro', 'Espreguiçadeiras e ombrelone', 'Toalhas de praia', 'Internet Wi-Fi', 'TV a cabo', 'Sky', 'Som ambiente', 'Máquina de gelo', 'Freezer', 'Lavanderia', 'Gerador', 'Poço artesiano', 'Estacionamento', 'Próxima ao Quadrado', 'Roupas de cama, mesa e banho'],
    en: ['Swimming pool', 'Gourmet area', 'Barbecue grill', 'Wine cellar', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Staff quarters', 'Air conditioning', 'Ceiling fans', 'In-room safes', 'Mosquito nets', 'Sun loungers and parasol', 'Beach towels', 'Wi-Fi internet', 'Cable TV', 'Sky TV', 'Ambient sound system', 'Ice maker', 'Freezer', 'Laundry', 'Generator', 'Artesian well', 'Parking', 'Next to the Quadrado', 'Bed, table and bath linens'],
  },
  description: {
    pt: 'Localizada em uma rua tranquila, ao lado do Quadrado, esta casa é ideal para quem não abre mão da comodidade de se hospedar perto do centro de Trancoso. O imóvel também está convenientemente situado a apenas 2 minutos de carro da praia ou a cerca de 5 minutos a pé.\n\nA Casa do Bosque é um oásis de charme e bom gosto. Ao todo, são seis suítes, distribuídas entre a casa principal e dois bangalôs externos.\n\nA arquitetura segue a linha rústico-chic típica da região, com estruturas em madeira e vidro que criam ambientes integrados, elegantes e acolhedores. A natureza está presente em todos os espaços, especialmente no jardim, que conta com áreas de descanso e redários.\n\nA decoração, enriquecida por obras de artistas locais, proporciona uma verdadeira imersão na cultura e na identidade de Trancoso.',
    en: 'Located on a quiet street next to the Quadrado, this house is ideal for those who don\'t want to give up the convenience of staying near the center of Trancoso. The property is also conveniently located just 2 minutes by car from the beach, or about 5 minutes on foot.\n\nCasa do Bosque is an oasis of charm and good taste. In total, there are six suites, distributed between the main house and two external bungalows.\n\nThe architecture follows the rustic-chic style typical of the region, with wood and glass structures that create integrated, elegant and welcoming spaces. Nature is present in every space, especially in the garden, which features lounge areas and hammock spaces.\n\nThe décor, enriched by works by local artists, provides a true immersion in the culture and identity of Trancoso.',
  },
  staff: { pt: ['2 arrumadeiras, 1 cozinheira e 1 auxiliar de cozinha.'], en: ['2 housekeepers, 1 cook and 1 kitchen assistant.'] },
  notes: {
    pt: ['Diária em feriados: R$ 7.500.', 'Não é permitido pet.', 'Os preços não incluem 10% de taxa de serviço.'],
    en: ['Holiday nightly rate: R$ 7,500.', 'Pets are not allowed.', 'Prices do not include a 10% service fee.'],
  },
  locationDetail: {
    pt: 'Ao lado do Quadrado, em uma região tranquila e privilegiada. A praia fica a aproximadamente 2 minutos de carro ou 5 minutos a pé.',
    en: 'Next to the Quadrado, in a quiet and privileged area. The beach is approximately 2 minutes by car or 5 minutes on foot.',
  },
};

const PATIO: Property = {
  id: 'casa-do-patio', code: 'TBA-261', name: { pt: 'Casa do Pátio', en: 'Casa do Pátio' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 2, guests: 4, baths: 3, area: '110 m²',
  price: { pt: 'R$ 2.300 / diária', en: 'R$ 2,300 / night' },
  priceLow: { pt: 'R$ 1.500 / diária', en: 'R$ 1,500 / night' },
  carnaval: { pt: 'R$ 20.000', en: 'R$ 20,000' },
  reveillon: { pt: 'R$ 79.000', en: 'R$ 79,000' },
  image: '/img/patio/01.jpg',
  gallery: ['/img/patio/01.webp','/img/patio/02.webp','/img/patio/03.webp','/img/patio/04.webp','/img/patio/05.webp','/img/patio/06.webp','/img/patio/07.webp','/img/patio/08.webp','/img/patio/09.webp','/img/patio/10.webp','/img/patio/11.webp','/img/patio/12.webp','/img/patio/13.webp','/img/patio/14.webp','/img/patio/15.webp','/img/patio/16.webp','/img/patio/17.webp','/img/patio/18.webp','/img/patio/19.webp','/img/patio/20.webp','/img/patio/21.webp','/img/patio/22.webp','/img/patio/23.webp','/img/patio/24.webp','/img/patio/25.webp','/img/patio/26.webp','/img/patio/27.webp','/img/patio/28.webp'], featured: false,
  amenities: {
    pt: ['Pátio central', 'Jardim de entrada com mesa para refeições externas', 'Ducha externa e lava-pés', 'Sala de estar e jantar', 'Cozinha equipada', 'Ar-condicionado', 'Cofres nos quartos', 'Internet Wi-Fi', 'Máquina de lavar louças', 'Lavanderia', 'Mosquiteiros', 'Roupas de cama, mesa e banho', 'Secador de cabelo', 'TV Sky', 'Ventiladores de teto', 'Kids friendly'],
    en: ['Central courtyard', 'Entrance garden with outdoor dining table', 'Outdoor shower and foot wash', 'Living and dining rooms', 'Equipped kitchen', 'Air conditioning', 'Safes in the bedrooms', 'Wi-Fi internet', 'Dishwasher', 'Laundry', 'Mosquito nets', 'Bed, table and bath linen', 'Hair dryer', 'Sky TV', 'Ceiling fans', 'Kids friendly'],
  },
  description: {
    pt: 'A Casa do Pátio é uma charmosa residência inspirada nas tradicionais casas de pescadores da região, localizada no coração do Quadrado Histórico de Trancoso. Construída em torno de um pátio central, a casa integra sala e cozinha a um agradável espaço aberto, criando uma atmosfera acolhedora, leve e perfeitamente conectada ao estilo de vida do vilarejo.\n\nRecentemente reformada, dispõe de duas suítes confortáveis e acomoda até quatro pessoas, sendo ideal para dois casais de amigos ou uma família com filhos. Na entrada, um pequeno jardim com mesa para refeições ao ar livre, ducha externa e lava-pés recebe os hóspedes. O pátio central conduz às suítes e funciona como o coração da casa, garantindo privacidade e uma experiência autêntica de Trancoso.\n\nA localização permite aproveitar o melhor do destino a pé. O Quadrado reúne restaurantes, lojas, ateliês e a tradicional feira de artesanato, enquanto a praia pode ser alcançada em uma agradável caminhada. Uma verdadeira joia no Quadrado.\n\nSuíte Master: 1 cama king size, mosquiteiro, closet, armário antigo, roupeiro, ar-condicionado, secador de cabelo, TV com recarga Sky, 2 criados-mudos e cabideiro. Suíte 02: 2 camas de solteiro que podem ser configuradas como 1 cama queen, roupeiro antigo, 2 criados-mudos, mesa, cabideiro, mosquiteiro, ar-condicionado e secador de cabelo.',
    en: 'Casa do Pátio is a charming residence inspired by the region\'s traditional fishermen\'s houses, located in the heart of Trancoso\'s Historic Quadrado. Built around a central courtyard, the house integrates the living room and kitchen with a pleasant open space, creating a welcoming, light atmosphere perfectly connected to the village lifestyle.\n\nRecently renovated, it offers two comfortable suites and accommodates up to four people, ideal for two couples of friends or a family with children. At the entrance, a small garden with an outdoor dining table, outdoor shower and foot wash welcomes guests. The central courtyard leads to the suites and works as the heart of the house, ensuring privacy and an authentic Trancoso experience.\n\nThe location allows you to enjoy the best of the destination on foot. The Quadrado brings together restaurants, shops, ateliers and the traditional craft fair, while the beach can be reached with a pleasant walk. A true gem in the Quadrado.\n\nMaster Suite: 1 king-size bed, mosquito net, walk-in closet, antique wardrobe, closet, air conditioning, hair dryer, TV with Sky credit, 2 bedside tables and valet stand. Suite 02: 2 twin beds that can be configured as 1 queen bed, antique wardrobe, 2 bedside tables, desk, valet stand, mosquito net, air conditioning and hair dryer.',
  },
  staff: { pt: ['1 arrumadeira', 'Jardineiro, sem dia ou horário fixo'], en: ['1 housekeeper', 'Gardener, no fixed day or time'] },
  notes: {
    pt: ['Locação mínima de 3 noites.', 'Não é permitido pet.', 'Configuração das camas da Suíte 02 sob consulta prévia.', 'Feriados: diária R$ 2.300.', 'Pacotes de Réveillon e Carnaval sujeitos a disponibilidade e às condições específicas de cada período.'],
    en: ['Minimum stay of 3 nights.', 'Pets are not allowed.', 'Bed configuration of Suite 02 upon prior request.', 'Holidays: R$ 2,300 per night.', 'New Year\'s Eve and Carnival packages subject to availability and the specific conditions of each period.'],
  },
};

const PG32: Property = {
  id: 'casa-32-pedro-grande', code: 'TBA-262', name: { pt: 'Casa 32', en: 'Casa 32' },
  purpose: ['aluguel', 'venda'], location: 'Condomínio Pedro Grande', suites: 9, guests: 19, baths: 9, area: '3.000 m²',
  price: { pt: 'R$ 19.900 / diária', en: 'R$ 19,900 / night' },
  priceLow: { pt: 'R$ 14.500 / diária', en: 'R$ 14,500 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'De abril a novembro', en: 'April to November' },
  carnaval: { pt: 'R$ 150.000', en: 'R$ 150,000' },
  reveillon: { pt: 'R$ 650.000', en: 'R$ 650,000' },
  image: '/img/pg32/01.jpg',
  gallery: ['/img/pg32/01.webp','/img/pg32/02.webp','/img/pg32/03.webp','/img/pg32/04.webp','/img/pg32/05.webp','/img/pg32/06.webp','/img/pg32/07.webp','/img/pg32/08.webp','/img/pg32/09.webp','/img/pg32/10.webp','/img/pg32/11.webp','/img/pg32/12.webp','/img/pg32/13.webp','/img/pg32/14.webp','/img/pg32/15.webp','/img/pg32/16.webp','/img/pg32/17.webp','/img/pg32/18.webp','/img/pg32/19.webp','/img/pg32/20.webp','/img/pg32/21.webp','/img/pg32/22.webp','/img/pg32/23.webp','/img/pg32/24.webp','/img/pg32/25.webp','/img/pg32/26.webp','/img/pg32/27.webp','/img/pg32/28.webp','/img/pg32/29.webp','/img/pg32/30.webp','/img/pg32/31.webp','/img/pg32/32.webp','/img/pg32/33.webp','/img/pg32/34.webp','/img/pg32/35.webp','/img/pg32/36.webp','/img/pg32/37.webp','/img/pg32/38.webp','/img/pg32/39.webp','/img/pg32/40.webp','/img/pg32/41.webp','/img/pg32/42.webp','/img/pg32/43.webp','/img/pg32/44.webp','/img/pg32/45.webp','/img/pg32/46.webp','/img/pg32/47.webp','/img/pg32/48.webp','/img/pg32/49.webp'], featured: false,
  amenities: {
    pt: ['Piscina e jacuzzi', 'Espaço gourmet e churrasqueira', 'Quadra de tênis', 'Quadra de beach tennis', 'Apoio de praia', 'Ar-condicionado em todas as suítes', 'Wi-Fi', 'TV a cabo e Netflix', 'Sala de TV, estar e jantar', 'Cozinha equipada', 'Máquina de gelo', 'Cervejeira e geladeira para bebidas', 'Lava-louças', 'Lavanderia', 'Gerador', 'Poço artesiano', 'Estacionamento', 'Cofres nas suítes', 'Mosquiteiros', 'Toalhas de piscina e praia', 'Roupas de cama, mesa e banho', 'Kids friendly'],
    en: ['Pool and jacuzzi', 'Gourmet area and barbecue', 'Tennis court', 'Beach tennis court', 'Beach support', 'Air conditioning in all suites', 'Wi-Fi', 'Cable TV and Netflix', 'TV, living and dining rooms', 'Equipped kitchen', 'Ice maker', 'Beer cooler and drinks fridge', 'Dishwasher', 'Laundry', 'Generator', 'Artesian well', 'Parking', 'Safes in the suites', 'Mosquito nets', 'Pool and beach towels', 'Bed, table and bath linen', 'Kids friendly'],
  },
  description: {
    pt: 'Localizada em um dos condomínios mais exclusivos de Trancoso, a Casa 32 está a poucos passos da Praia do Rio da Barra e a apenas 5 minutos de carro do Quadrado. Cercada por natureza preservada e em um ambiente de total privacidade, é perfeita para quem busca dias de descanso com conforto, estrutura completa e serviço impecável.\n\nCom 3.000 m² de terreno, a Casa 32 foi projetada para proporcionar uma experiência sofisticada e acolhedora em meio à natureza. Sua arquitetura integra amplos ambientes sociais, jardins exuberantes e espaços de lazer que convidam ao convívio e ao relaxamento.\n\nA residência acomoda confortavelmente até 19 hóspedes em 9 suítes distribuídas entre a casa principal e dois bangalôs independentes, oferecendo privacidade para famílias e grupos de amigos. A área externa conta com piscina, jacuzzi, espaço gourmet, churrasqueira, quadras de tênis e beach tennis, além de apoio de praia completo.',
    en: 'Located in one of Trancoso\ most exclusive condominiums, Casa 32 is a few steps from Rio da Barra Beach and just a 5-minute drive from the Quadrado. Surrounded by preserved nature in an atmosphere of total privacy, it is perfect for those seeking days of rest with comfort, complete infrastructure and impeccable service.\n\nWith 3,000 m² of land, Casa 32 was designed to provide a sophisticated and welcoming experience amid nature. Its architecture integrates ample social areas, exuberant gardens and leisure spaces that invite gathering and relaxation.\n\nThe residence comfortably accommodates up to 19 guests in 9 suites distributed between the main house and two independent bungalows, offering privacy for families and groups of friends. The outdoor area features a pool, jacuzzi, gourmet area, barbecue, tennis and beach tennis courts, plus complete beach support.',
  },
  staff: { pt: ['Concierge', '1 cozinheira', '2 arrumadeiras', '2 auxiliares de cozinha', '1 copeiro/barman', '1 caseiro'], en: ['Concierge', '1 cook', '2 housekeepers', '2 kitchen assistants', '1 waiter/barman', '1 caretaker'] },
  notes: {
    pt: ['Suíte Master, 02, 03 e 04: cama super king. Suítes 05, 06 e 07: camas de solteiro. Suítes 08 e 09 (bangalôs): cama super king.', 'Valor de venda: sob consulta.', 'Preços não incluem 10% de taxa de serviço.'],
    en: ['Master Suite, 02, 03 and 04: super king bed. Suites 05, 06 and 07: twin beds. Suites 08 and 09 (bungalows): super king bed.', 'Sale price: upon request.', 'Prices do not include a 10% service fee.'],
  },
};

const PG45: Property = {
  id: 'casa-45-pedro-grande', code: 'TBA-263', name: { pt: 'Casa 45', en: 'Casa 45' },
  purpose: ['aluguel', 'venda'], location: 'Condomínio Pedro Grande', suites: 6, guests: 12, baths: 6, area: '750 m²',
  price: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  priceLow: { pt: 'R$ 9.000 / diária', en: 'R$ 9,000 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'De abril a novembro', en: 'April to November' },
  carnaval: { pt: 'R$ 60.000', en: 'R$ 60,000' },
  reveillon: { pt: 'R$ 380.000', en: 'R$ 380,000' },
  salePrice: { pt: 'R$ 24.000.000', en: 'R$ 24,000,000' },
  image: '/img/pg45/01.jpg',
  gallery: ['/img/pg45/01.webp','/img/pg45/02.webp','/img/pg45/03.webp','/img/pg45/04.webp','/img/pg45/05.webp','/img/pg45/06.webp','/img/pg45/07.webp','/img/pg45/08.webp','/img/pg45/09.webp','/img/pg45/10.webp','/img/pg45/11.webp','/img/pg45/12.webp','/img/pg45/13.webp','/img/pg45/14.webp','/img/pg45/15.webp','/img/pg45/16.webp','/img/pg45/17.webp','/img/pg45/18.webp','/img/pg45/19.webp','/img/pg45/20.webp','/img/pg45/21.webp','/img/pg45/22.webp','/img/pg45/23.webp','/img/pg45/24.webp','/img/pg45/25.webp','/img/pg45/26.webp','/img/pg45/27.webp','/img/pg45/28.webp','/img/pg45/29.webp','/img/pg45/30.webp','/img/pg45/31.webp','/img/pg45/32.webp','/img/pg45/33.webp','/img/pg45/34.webp','/img/pg45/35.webp','/img/pg45/36.webp','/img/pg45/37.webp','/img/pg45/38.webp','/img/pg45/39.webp','/img/pg45/40.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Área gourmet e churrasqueira', 'Deck e amplas varandas', 'Redários e lounges externos', 'Apoio de praia', 'Quadra de tênis', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Ar-condicionado', 'Máquina de gelo', 'Gerador', 'Estacionamento', 'Lavanderia', 'Mosquiteiros', 'Roupas de cama, mesa e banho', 'Caixa de som', 'Smart TV', 'Internet Wi-Fi', 'Toalhas de piscina e praia'],
    en: ['Pool', 'Gourmet area and barbecue', 'Deck and wide verandas', 'Hammock areas and outdoor lounges', 'Beach support', 'Tennis court', 'Living, dining and TV rooms', 'Equipped kitchen', 'Air conditioning', 'Ice maker', 'Generator', 'Parking', 'Laundry', 'Mosquito nets', 'Bed, table and bath linen', 'Sound system', 'Smart TV', 'Wi-Fi internet', 'Pool and beach towels'],
  },
  description: {
    pt: 'Localizada em um dos condomínios mais exclusivos de Trancoso, a Casa 45 está a poucos passos da Praia do Rio da Barra e a apenas 5 minutos de carro do Quadrado. Cercada por natureza preservada e em um ambiente de total privacidade, é perfeita para quem busca dias de descanso com conforto, estrutura completa e serviço impecável.\n\nCom 3.000 m² de terreno, a Casa 45 foi projetada para proporcionar uma experiência sofisticada e acolhedora em meio à natureza. Sua arquitetura integra amplos ambientes sociais, jardins exuberantes e espaços de lazer que convidam ao convívio e ao relaxamento.\n\nA residência acomoda confortavelmente até 19 hóspedes em 9 suítes distribuídas entre a casa principal e dois bangalôs independentes, oferecendo privacidade para famílias e grupos de amigos. A área externa conta com piscina, jacuzzi, espaço gourmet, churrasqueira, quadras de tênis e beach tennis, além de apoio de praia completo.',
    en: 'Located in one of Trancoso\ most exclusive condominiums, Casa 32 is a few steps from Rio da Barra Beach and just a 5-minute drive from the Quadrado. Surrounded by preserved nature in an atmosphere of total privacy, it is perfect for those seeking days of rest with comfort, complete infrastructure and impeccable service.\n\nWith 3,000 m² of land, Casa 32 was designed to provide a sophisticated and welcoming experience amid nature. Its architecture integrates ample social areas, exuberant gardens and leisure spaces that invite gathering and relaxation.\n\nThe residence comfortably accommodates up to 19 guests in 9 suites distributed between the main house and two independent bungalows, offering privacy for families and groups of friends. The outdoor area features a pool, jacuzzi, gourmet area, barbecue, tennis and beach tennis courts, plus complete beach support.',
  },
  staff: { pt: ['Cozinheira', 'Auxiliar de cozinha', 'Arrumadeira', 'Piscineiro e jardineiro'], en: ['Cook', 'Kitchen assistant', 'Housekeeper', 'Pool keeper and gardener'] },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 380.000, com staff e sem taxa adicional.', 'Carnaval: pacote de 5 diárias R$ 60.000.', 'Locações regulares sujeitas a 10% de taxa de serviço.'],
    en: ['New Year\'s Eve: 10-night package R$ 380,000, with staff and no additional fee.', 'Carnival: 5-night package R$ 60,000.', 'Regular rentals subject to a 10% service fee.'],
  },
};

const LICURI: Property = {
  id: 'vila-licuri', code: 'TBA-264', name: { pt: 'Vila Licuri', en: 'Vila Licuri' },
  purpose: ['aluguel'], location: 'João Vieira', suites: 5, guests: 11, baths: 7, area: '500 m²',
  price: { pt: 'R$ 7.000 / diária', en: 'R$ 7,000 / night' },
  priceLow: { pt: 'R$ 5.000 / diária', en: 'R$ 5,000 / night' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, julho e feriados', en: 'December, January, February, July and holidays' },
  seasonLow: { pt: 'Abril, maio, junho, agosto, setembro e outubro', en: 'April, May, June, August, September and October' },
  carnaval: { pt: 'R$ 48.000', en: 'R$ 48,000' },
  reveillon: { pt: 'R$ 240.000', en: 'R$ 240,000' },
  image: '/img/divina/01.jpg',
  gallery: ['/img/divina/01.webp','/img/divina/02.webp','/img/divina/03.webp','/img/divina/04.webp','/img/divina/05.webp','/img/divina/06.webp','/img/divina/07.webp','/img/divina/08.webp','/img/divina/09.webp','/img/divina/10.webp','/img/divina/11.webp','/img/divina/12.webp','/img/divina/13.webp','/img/divina/14.webp','/img/divina/15.webp','/img/divina/16.webp','/img/divina/17.webp','/img/divina/18.webp','/img/divina/19.webp','/img/divina/20.webp','/img/divina/21.webp','/img/divina/22.webp','/img/divina/23.webp','/img/divina/24.webp','/img/divina/25.webp','/img/divina/26.webp','/img/divina/27.webp','/img/divina/28.webp','/img/divina/29.webp','/img/divina/30.webp','/img/divina/31.webp','/img/divina/32.webp'], featured: false,
  amenities: {
    pt: ['Piscina de borda infinita com vista para o vale', 'Chalé independente', 'Cozinha equipada', 'Ar-condicionado em todas as suítes', 'Varandas e jardins', 'Espaços de convivência', 'Terreno de 1.400 m²'],
    en: ['Infinity-edge pool overlooking the valley', 'Independent bungalow', 'Equipped kitchen', 'Air conditioning in all suites', 'Verandas and gardens', 'Gathering spaces', '1,400 m² plot'],
  },
  description: {
    pt: 'Localizada em uma das regiões mais desejadas de Trancoso, a Vila Licuri oferece uma experiência que une sofisticação, privacidade e contato com a natureza. A poucos minutos do famoso Quadrado e das principais praias da região, a propriedade foi cuidadosamente planejada para proporcionar conforto absoluto em um ambiente acolhedor e elegante.\n\nImplantada em um amplo terreno de 1.400 m² e com aproximadamente 500 m² de área construída, a casa acomoda até 11 hóspedes em 5 suítes, incluindo um chalé independente, ideal para garantir ainda mais privacidade aos convidados.\n\nA área externa é um dos grandes destaques da propriedade. A piscina de borda infinita com vista para o vale cria um cenário único para momentos de descanso, enquanto as varandas, jardins e espaços de convivência convidam a desfrutar do clima agradável de Trancoso em total tranquilidade.\n\nSuíte Licuri (Master): cama king size, closet, banheiro com dois chuveiros e dois lavatórios. Suíte Açaí: cama de casal, closet e banheiro com jardim. Suíte Cacau: cama de casal, closet e banheiro privativo. Suíte Caju: configuração flexível com cama de casal + solteiro ou três camas de solteiro, banheiro com dois chuveiros e dois lavatórios. Chalé Independente: quarto com banheiro, cozinha completa, área de serviço, mesa de jantar e varanda com rede.',
    en: 'Located in one of Trancoso\'s most desired regions, Vila Licuri offers an experience that combines sophistication, privacy and contact with nature. A few minutes from the famous Quadrado and the region\'s main beaches, the property was carefully planned to provide absolute comfort in a welcoming and elegant environment.\n\nSet on a generous 1,400 m² plot with approximately 500 m² of built area, the house accommodates up to 11 guests in 5 suites, including an independent bungalow, ideal for ensuring even more privacy for guests.\n\nThe outdoor area is one of the property\'s highlights. The infinity-edge pool overlooking the valley creates a unique setting for moments of rest, while the verandas, gardens and gathering spaces invite you to enjoy Trancoso\'s pleasant climate in total tranquility.\n\nLicuri Suite (Master): king-size bed, walk-in closet, bathroom with two showers and two sinks. Açaí Suite: double bed, walk-in closet and bathroom with garden. Cacau Suite: double bed, walk-in closet and private bathroom. Caju Suite: flexible configuration with double + twin bed or three twin beds, bathroom with two showers and two sinks. Independent Bungalow: bedroom with bathroom, full kitchen, laundry area, dining table and veranda with hammock.',
  },
  staff: { pt: ['Cozinheira', 'Camareira', 'Ajudante geral'], en: ['Cook', 'Chambermaid', 'General assistant'] },
  notes: {
    pt: ['Carnaval: pacote de 5 noites R$ 48.000.', 'Réveillon: pacote de 10 noites R$ 240.000.', 'Preços sujeitos a alteração.'],
    en: ['Carnival: 5-night package R$ 48,000.', 'New Year\'s Eve: 10-night package R$ 240,000.', 'Prices subject to change.'],
  },
};

const DIVINA: Property = {
  id: 'casa-divina', code: 'TBA-265', name: { pt: 'Casa Divina', en: 'Casa Divina' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 3, guests: 6, baths: 3, area: '250 m²',
  price: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  priceLow: { pt: 'R$ 2.900 / diária', en: 'R$ 2,900 / night' },
  seasonHigh: { pt: 'Alta temporada e feriados', en: 'High season and holidays' },
  reveillon: { pt: 'R$ 200.000', en: 'R$ 200,000' },
  image: '/img/licuri/01.jpg',
  gallery: ['/img/licuri/01.webp','/img/licuri/02.webp','/img/licuri/03.webp','/img/licuri/04.webp','/img/licuri/05.webp','/img/licuri/06.webp','/img/licuri/07.webp','/img/licuri/08.webp','/img/licuri/09.webp','/img/licuri/10.webp','/img/licuri/11.webp','/img/licuri/12.webp','/img/licuri/13.webp','/img/licuri/14.webp','/img/licuri/15.webp','/img/licuri/16.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Arquitetura colonial', 'Mezanino com TV', 'Área total de 600 m²', 'Acesso à praia a pé', 'Ao lado da Igreja de São João Batista'],
    en: ['Ocean view', 'Colonial architecture', 'Mezzanine with TV', '600 m² total area', 'Beach access on foot', 'Next to the São João Batista Church'],
  },
  description: {
    pt: 'Localizada em uma das regiões mais desejadas de Trancoso, a Casa Licuri oferece uma experiência que une sofisticação, privacidade e contato com a natureza. A poucos minutos do famoso Quadrado e das principais praias da região, a propriedade foi cuidadosamente planejada para proporcionar conforto absoluto em um ambiente acolhedor e elegante.\n\nImplantada em um amplo terreno de 1.400 m² e com aproximadamente 500 m² de área construída, a casa acomoda até 11 hóspedes em 5 suítes, incluindo um chalé independente, ideal para garantir ainda mais privacidade aos convidados.\n\nA área externa é um dos grandes destaques da propriedade. A piscina de borda infinita com vista para o vale cria um cenário único para momentos de descanso, enquanto as varandas, jardins e espaços de convivência convidam a desfrutar do clima agradável de Trancoso em total tranquilidade.\n\nSuíte Licuri (Master): cama king size, closet, banheiro com dois chuveiros e dois lavatórios. Suíte Açaí: cama de casal, closet e banheiro com jardim. Suíte Cacau: cama de casal, closet e banheiro privativo. Suíte Caju: configuração flexível com cama de casal + solteiro ou três camas de solteiro, banheiro com dois chuveiros e dois lavatórios. Chalé Independente: quarto com banheiro, cozinha completa, área de serviço, mesa de jantar e varanda com rede.',
    en: 'Located in one of Trancoso\'s most desired regions, Vila Licuri offers an experience that combines sophistication, privacy and contact with nature. A few minutes from the famous Quadrado and the region\'s main beaches, the property was carefully planned to provide absolute comfort in a welcoming and elegant environment.\n\nSet on a generous 1,400 m² plot with approximately 500 m² of built area, the house accommodates up to 11 guests in 5 suites, including an independent bungalow, ideal for ensuring even more privacy for guests.\n\nThe outdoor area is one of the property\'s highlights. The infinity-edge pool overlooking the valley creates a unique setting for moments of rest, while the verandas, gardens and gathering spaces invite you to enjoy Trancoso\'s pleasant climate in total tranquility.\n\nLicuri Suite (Master): king-size bed, walk-in closet, bathroom with two showers and two sinks. Açaí Suite: double bed, walk-in closet and bathroom with garden. Cacau Suite: double bed, walk-in closet and private bathroom. Caju Suite: flexible configuration with double + twin bed or three twin beds, bathroom with two showers and two sinks. Independent Bungalow: bedroom with bathroom, full kitchen, laundry area, dining table and veranda with hammock.',
  },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 200.000.', 'Carnaval: sob consulta.', 'Informações, valores e disponibilidade sujeitos a alteração sem aviso prévio.'],
    en: ['New Year\'s Eve: 10-night package R$ 200,000.', 'Carnival: upon request.', 'Information, prices and availability subject to change without prior notice.'],
  },
};

const TRESMENINAS: Property = {
  id: 'casa-3-meninas', code: 'TBA-266', name: { pt: 'Casa 3 Meninas', en: 'Casa 3 Meninas' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 4, guests: 10, baths: 5, area: '266,43 m²',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  seasonHigh: { pt: 'Alta temporada e feriados', en: 'High season and holidays' },
  carnaval: { pt: 'R$ 19.500', en: 'R$ 19,500' },
  reveillon: { pt: 'R$ 135.000', en: 'R$ 135,000' },
  image: '/img/3meninas/01.jpg',
  gallery: ['/img/3meninas/01.webp','/img/3meninas/02.webp','/img/3meninas/03.webp','/img/3meninas/04.webp','/img/3meninas/05.webp','/img/3meninas/06.webp','/img/3meninas/07.webp','/img/3meninas/08.webp','/img/3meninas/09.webp','/img/3meninas/10.webp','/img/3meninas/11.webp','/img/3meninas/12.webp','/img/3meninas/13.webp','/img/3meninas/14.webp','/img/3meninas/15.webp','/img/3meninas/16.webp','/img/3meninas/17.webp','/img/3meninas/18.webp','/img/3meninas/19.webp','/img/3meninas/20.webp','/img/3meninas/21.webp','/img/3meninas/22.webp','/img/3meninas/23.webp','/img/3meninas/24.webp','/img/3meninas/25.webp','/img/3meninas/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina e deck de 70 m²', 'Amplo jardim com árvores nativas e frutíferas', 'Generosa varanda integrada', 'Sala de estar', 'Cozinha equipada', 'Banheiro social', 'Lavanderia', 'Ar-condicionado e ventilador de teto nas suítes', 'Estacionamento', 'Terreno de 2.000 m²'],
    en: ['Pool and 70 m² deck', 'Large garden with native and fruit trees', 'Generous integrated veranda', 'Living room', 'Equipped kitchen', 'Guest bathroom', 'Laundry', 'Air conditioning and ceiling fan in the suites', 'Parking', '2,000 m² plot'],
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, uma das áreas residenciais mais valorizadas do vilarejo, a Casa 3 Meninas está próxima ao Quadrado Histórico e ao acesso à Praia dos Coqueiros. Cercada por um amplo jardim com árvores nativas e frutíferas, a residência oferece privacidade, conforto e uma atmosfera tipicamente trancosense.\n\nA Casa 3 Meninas é uma residência térrea que interpreta com elegância a arquitetura tradicional de Trancoso. O projeto combina elementos rústicos e contemporâneos, com ambientes amplos, luminosos e integrados a uma generosa varanda.\n\nA continuidade entre as áreas internas e externas cria uma experiência acolhedora, com belas vistas para o jardim e para a piscina. A mobília sofisticada e confortável completa a proposta, formando espaços equilibrados, agradáveis e ideais para receber famílias ou grupos de amigos.\n\nA casa conta com 4 suítes com ventilador de teto e ar-condicionado — 2 suítes com camas king size e 2 suítes com camas queen size —, acomodando até 10 hóspedes.',
    en: 'Located in the Altos de Trancoso Condominium, one of the village\'s most valued residential areas, Casa 3 Meninas is close to the Historic Quadrado and the access to Coqueiros Beach. Surrounded by a large garden with native and fruit trees, the residence offers privacy, comfort and a typically Trancoso atmosphere.\n\nCasa 3 Meninas is a single-story residence that elegantly interprets Trancoso\'s traditional architecture. The project combines rustic and contemporary elements, with ample, luminous spaces integrated with a generous veranda.\n\nThe continuity between indoor and outdoor areas creates a welcoming experience, with beautiful views of the garden and the pool. The sophisticated and comfortable furniture completes the proposal, forming balanced, pleasant spaces, ideal for hosting families or groups of friends.\n\nThe house features 4 suites with ceiling fan and air conditioning — 2 suites with king-size beds and 2 suites with queen-size beds — accommodating up to 10 guests.',
  },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 135.000 (até 10 hóspedes) ou R$ 125.000 (até 8 hóspedes).', 'Carnaval: pacote de 5 diárias R$ 19.500.', 'Valor de venda: sob consulta.', 'Informações, valores e disponibilidade sujeitos a alteração sem aviso prévio.'],
    en: ['New Year\'s Eve: 10-night package R$ 135,000 (up to 10 guests) or R$ 125,000 (up to 8 guests).', 'Carnival: 5-night package R$ 19,500.', 'Sale price: upon request.', 'Information, prices and availability subject to change without prior notice.'],
  },
};

const PEROBA: Property = {
  id: 'casa-peroba', code: 'TBA-267', name: { pt: 'Casa Peroba', en: 'Casa Peroba' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 14, baths: 6, area: 'Sob consulta',
  price: { pt: 'R$ 3.200 / diária', en: 'R$ 3,200 / night' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'R$ 40.000', en: 'R$ 40,000' },
  reveillon: { pt: 'R$ 140.000', en: 'R$ 140,000' },
  image: '/img/peroba/01.jpg',
  gallery: ['/img/peroba/01.webp','/img/peroba/02.webp','/img/peroba/03.webp','/img/peroba/04.webp','/img/peroba/05.webp','/img/peroba/06.webp','/img/peroba/07.webp','/img/peroba/08.webp','/img/peroba/09.webp','/img/peroba/10.webp','/img/peroba/11.webp','/img/peroba/12.webp','/img/peroba/13.webp','/img/peroba/14.webp','/img/peroba/15.webp','/img/peroba/16.webp','/img/peroba/17.webp','/img/peroba/18.webp','/img/peroba/19.webp','/img/peroba/20.webp','/img/peroba/21.webp','/img/peroba/22.webp','/img/peroba/23.webp','/img/peroba/24.webp','/img/peroba/25.webp','/img/peroba/26.webp','/img/peroba/27.webp','/img/peroba/28.webp','/img/peroba/29.webp','/img/peroba/30.webp','/img/peroba/31.webp','/img/peroba/32.webp','/img/peroba/33.webp','/img/peroba/34.webp','/img/peroba/35.webp','/img/peroba/36.webp','/img/peroba/37.webp','/img/peroba/38.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com deck amplo', 'Hidromassagem panorâmica com vista para a mata', 'Bangalô independente (Suíte Master)', 'Espaço gourmet com churrasqueira a gás', 'Sala de TV com tela de 75"', 'Cozinha equipada', 'Ar-condicionado', 'Ampla área verde privativa', 'Lavanderia'],
    en: ['Private pool with large deck', 'Panoramic hot tub overlooking the forest', 'Independent bungalow (Master Suite)', 'Gourmet area with gas barbecue', 'TV room with 75" screen', 'Equipped kitchen', 'Air conditioning', 'Large private green area', 'Laundry'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a poucos minutos do centro de Trancoso, a Casa Peroba combina conforto, privacidade e contato com a natureza. Rodeada por uma ampla área verde, oferece ambientes bem distribuídos, ideais para famílias ou grupos que buscam tranquilidade com praticidade.\n\nA casa principal conta com ambientes amplos e iluminados, salas de estar e TV integradas, cozinha completa e espaço gourmet com churrasqueira a gás. A área externa reúne piscina privativa com deck amplo e hidromassagem panorâmica com vista para a mata, além de um bangalô independente que abriga a Suíte Master, garantindo privacidade extra.\n\nSuíte Master (bangalô): 1 cama king, ar-condicionado, banheira e vista para o jardim. Suíte 02: 1 cama queen + 1 cama de solteiro e ar-condicionado. Suíte 03: 1 cama queen + 1 cama de solteiro e ar-condicionado. Suíte 04: 1 cama queen + 1 cama de solteiro e ar-condicionado. Suíte 05: 1 cama queen + 1 cama de solteiro e ar-condicionado. Capacidade total: até 14 hóspedes.',
    en: 'Located in the Coqueiral Condominium, a few minutes from the center of Trancoso, Casa Peroba combines comfort, privacy and contact with nature. Surrounded by a large green area, it offers well-distributed spaces, ideal for families or groups seeking tranquility with convenience.\n\nThe main house features ample, bright spaces, integrated living and TV rooms, a full kitchen and a gourmet area with a gas barbecue. The outdoor area brings together a private pool with a large deck and a panoramic hot tub overlooking the forest, plus an independent bungalow housing the Master Suite, ensuring extra privacy.\n\nMaster Suite (bungalow): 1 king bed, air conditioning, bathtub and garden view. Suite 02: 1 queen bed + 1 twin bed and air conditioning. Suite 03: 1 queen bed + 1 twin bed and air conditioning. Suite 04: 1 queen bed + 1 twin bed and air conditioning. Suite 05: 1 queen bed + 1 twin bed and air conditioning. Total capacity: up to 14 guests.',
  },
  notes: {
    pt: ['Locação mínima: 3 diárias.', 'Réveillon: pacote mínimo de 10 diárias R$ 140.000.', 'Carnaval: pacote mínimo de 5 diárias R$ 40.000.', 'Os valores não incluem 10% de taxa de serviço.'],
    en: ['Minimum stay: 3 nights.', 'New Year\'s Eve: minimum 10-night package R$ 140,000.', 'Carnival: minimum 5-night package R$ 40,000.', 'Prices do not include a 10% service fee.'],
  },
};

const MORENA: Property = {
  id: 'casa-morena', code: 'TBA-268', name: { pt: 'Casa Morena', en: 'Casa Morena' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 10, guests: 23, baths: 10, area: '1.000 m²',
  price: { pt: 'R$ 20.000 / diária', en: 'R$ 20,000 / night' },
  priceLow: { pt: 'R$ 17.000 / diária', en: 'R$ 17,000 / night' },
  carnaval: { pt: 'R$ 180.000', en: 'R$ 180,000' },
  reveillon: { pt: 'R$ 670.000', en: 'R$ 670,000' },
  image: '/img/morena/01.jpg',
  gallery: ['/img/morena/01.webp','/img/morena/02.webp','/img/morena/03.webp','/img/morena/04.webp','/img/morena/05.webp','/img/morena/06.webp','/img/morena/07.webp','/img/morena/08.webp','/img/morena/09.webp','/img/morena/10.webp','/img/morena/11.webp','/img/morena/12.webp','/img/morena/13.webp','/img/morena/14.webp','/img/morena/15.webp','/img/morena/16.webp','/img/morena/17.webp','/img/morena/18.webp','/img/morena/19.webp','/img/morena/20.webp','/img/morena/21.webp','/img/morena/22.webp','/img/morena/23.webp','/img/morena/24.webp','/img/morena/25.webp','/img/morena/26.webp','/img/morena/27.webp','/img/morena/28.webp','/img/morena/29.webp','/img/morena/30.webp','/img/morena/31.webp','/img/morena/32.webp','/img/morena/33.webp','/img/morena/34.webp','/img/morena/35.webp','/img/morena/36.webp','/img/morena/37.webp','/img/morena/38.webp','/img/morena/39.webp','/img/morena/40.webp','/img/morena/41.webp','/img/morena/42.webp','/img/morena/43.webp','/img/morena/44.webp','/img/morena/45.webp','/img/morena/46.webp','/img/morena/47.webp','/img/morena/48.webp','/img/morena/49.webp','/img/morena/50.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina de raia de 18 metros', 'Boate privativa com CDJ, iluminação profissional e bar equipado', 'Sala de jogos e mesa de sinuca', 'Sala de massagem', 'Adega de vinhos', 'Espaço gourmet completo para até 20 pessoas', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Ar-condicionado', 'Elevador', 'Carrinho de golfe', 'Apoio de praia do condomínio', 'Máquina de gelo e cervejeira', 'Gerador e poço artesiano', 'Mosquiteiros', 'Som ambiente', 'Toalhas de piscina e praia', 'Estacionamento'],
    en: ['Ocean view', '18-meter lap pool', 'Private nightclub with CDJ, professional lighting and equipped bar', 'Game room and pool table', 'Massage room', 'Wine cellar', 'Full gourmet area for up to 20 people', 'Living, dining and TV rooms', 'Equipped kitchen', 'Air conditioning', 'Elevator', 'Golf cart', 'Condominium beach support', 'Ice maker and beer cooler', 'Generator and artesian well', 'Mosquito nets', 'Ambient sound system', 'Pool and beach towels', 'Parking'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Fazenda Rio da Barra, a Casa Morena é uma propriedade de alto padrão ideal para férias em família ou entre amigos, oferecendo conforto, segurança e uma atmosfera elegante no sul da Bahia.\n\nImplantada em uma falésia diante da Praia do Rio da Barra e cercada por vegetação exuberante, a casa combina amplos espaços de convivência com uma vista privilegiada para o mar. A área social reúne sala de estar, sala de jantar, sala de TV, mesa de sinuca e integração direta com uma grande varanda.\n\nA área externa conta com piscina de raia de 18 metros, deck equipado, gramado com coqueiros e espaço gourmet completo, com churrasqueira, cozinha de apoio, balcão refrigerado e mesa para até 20 pessoas. Para momentos de lazer e bem-estar, a propriedade oferece sala de jogos, sala de massagem, adega, som ambiente e uma boate privativa com excelente acústica, CDJ, iluminação profissional, bar equipado e quatro banheiros. Um painel de vidro conecta visualmente a parte profunda da piscina ao ambiente da boate.\n\nSão 8 suítes principais + 2 suítes de apoio no subsolo, acomodando até 23 hóspedes. Suíte Master: cama super king, closet, hidromassagem e varanda com vista para o mar. Suítes 02, 05 e 08: cama king size. Suítes 03, 04, 06 e 07: camas de solteiro reversíveis em cama de casal. Suítes de apoio: sofá-cama queen.',
    en: 'Located in the exclusive Fazenda Rio da Barra Condominium, Casa Morena is a high-end property ideal for family or friends\' vacations, offering comfort, security and an elegant atmosphere in southern Bahia.\n\nSet on a cliff facing Rio da Barra Beach and surrounded by exuberant vegetation, the house combines ample gathering spaces with a privileged ocean view. The social area brings together the living room, dining room, TV room, pool table and direct integration with a large veranda.\n\nThe outdoor area features an 18-meter lap pool, equipped deck, lawn with coconut palms and a full gourmet area with barbecue, support kitchen, refrigerated counter and a table for up to 20 people. For leisure and well-being, the property offers a game room, massage room, wine cellar, ambient sound and a private nightclub with excellent acoustics, CDJ, professional lighting, equipped bar and four bathrooms. A glass panel visually connects the deep end of the pool to the nightclub area.\n\nThere are 8 main suites + 2 support suites in the basement, accommodating up to 23 guests. Master Suite: super king bed, walk-in closet, hot tub and balcony overlooking the sea. Suites 02, 05 and 08: king-size bed. Suites 03, 04, 06 and 07: twin beds convertible into a double bed. Support suites: queen sofa bed.',
  },
  staff: { pt: ['2 arrumadeiras', '2 cozinheiras', '1 auxiliar de cozinha', '1 barman', '1 caseiro/copeiro', '1 governanta'], en: ['2 housekeepers', '2 cooks', '1 kitchen assistant', '1 barman', '1 caretaker/waiter', '1 house manager'] },
  notes: {
    pt: ['Locação mínima: 4 diárias.', 'Não é permitida a hospedagem de animais de estimação.', 'Taxa de serviço: 10% sobre as diárias de alta temporada, baixa temporada e feriados.', 'Pacotes de Réveillon e Carnaval: taxa de serviço de 5%.'],
    en: ['Minimum stay: 4 nights.', 'Pets are not allowed.', 'Service fee: 10% on high season, low season and holiday rates.', 'New Year\'s Eve and Carnival packages: 5% service fee.'],
  },
};

const MOA: Property = {
  id: 'casa-moa', code: 'TBA-269', name: { pt: 'Casa Moa', en: 'Casa Moa' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 4, guests: 10, baths: 5, area: '350 m²',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  carnaval: { pt: 'R$ 35.000', en: 'R$ 35,000' },
  reveillon: { pt: 'R$ 190.000', en: 'R$ 190,000' },
  salePrice: { pt: 'R$ 7.500.000', en: 'R$ 7,500,000' },
  image: '/img/moa/01.jpg',
  gallery: ['/img/moa/01.webp','/img/moa/02.webp','/img/moa/03.webp','/img/moa/04.webp','/img/moa/05.webp','/img/moa/06.webp','/img/moa/07.webp','/img/moa/08.webp','/img/moa/09.webp','/img/moa/10.webp','/img/moa/11.webp','/img/moa/12.webp','/img/moa/13.webp','/img/moa/14.webp','/img/moa/15.webp','/img/moa/16.webp','/img/moa/17.webp','/img/moa/18.webp','/img/moa/19.webp','/img/moa/20.webp','/img/moa/21.webp','/img/moa/22.webp','/img/moa/23.webp','/img/moa/24.webp','/img/moa/25.webp','/img/moa/26.webp','/img/moa/27.webp','/img/moa/28.webp','/img/moa/29.webp','/img/moa/30.webp','/img/moa/31.webp','/img/moa/32.webp','/img/moa/33.webp','/img/moa/34.webp','/img/moa/35.webp','/img/moa/36.webp','/img/moa/37.webp','/img/moa/38.webp','/img/moa/39.webp','/img/moa/40.webp','/img/moa/41.webp','/img/moa/42.webp'], featured: false,
  amenities: {
    pt: ['Piscina de raia de 15 metros', 'Churrasqueira', 'Jardim de 2.500 m² com parquinho infantil e minicasinha', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Ar-condicionado e ventilador nas suítes', 'Lavabo', 'Área de serviço', 'Garagem para 2 carros', 'Apoio para passeio de barco'],
    en: ['15-meter lap pool', 'Barbecue', '2,500 m² garden with playground and playhouse', 'Living, dining and TV rooms', 'Equipped kitchen', 'Air conditioning and fan in the suites', 'Guest toilet', 'Laundry area', 'Garage for 2 cars', 'Boat trip support'],
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, a Casa Moa é um refúgio de charme e conforto, a apenas 10 minutos a pé do Quadrado. Cercada por jardins tropicais e com estrutura completa para lazer e descanso, é perfeita para famílias ou grupos de amigos que buscam viver Trancoso com tranquilidade, a poucos passos do centrinho.\n\nA casa principal tem ambientes amplos e integrados, com sala de estar, sala de jantar, sala de TV e cozinha equipada. A área externa reúne piscina de raia de 15 metros, churrasqueira e um jardim de 2.500 m² com parquinho infantil e minicasinha, além de lavabo, área de serviço e garagem para 2 carros.\n\nSuíte Master: 1 cama king + 1 cama de solteiro. Suíte 02: 1 cama king. Suíte 03: 1 cama king. Suíte 04: 1 cama queen + 1 cama de solteiro. Capacidade para até 10 hóspedes.\n\nO apoio para passeio de barco pode ser contratado à parte, com direito a 1 diária por semana.',
    en: 'Located in the Altos de Trancoso Condominium, Casa Moa is a charming and comfortable retreat, just a 10-minute walk from the Quadrado. Surrounded by tropical gardens and with complete leisure and relaxation facilities, it is perfect for families or groups of friends looking to experience Trancoso in tranquility, a few steps from the village center.\n\nThe main house has ample, integrated spaces, with living room, dining room, TV room and equipped kitchen. The outdoor area features a 15-meter lap pool, barbecue and a 2,500 m² garden with a playground and playhouse, plus a guest toilet, laundry area and garage for 2 cars.\n\nMaster Suite: 1 king bed + 1 twin bed. Suite 02: 1 king bed. Suite 03: 1 king bed. Suite 04: 1 queen bed + 1 twin bed. Capacity for up to 10 guests.\n\nBoat trip support can be hired separately, with 1 daily trip per week.',
  },
  staff: { pt: ['Arrumadeira', 'Cozinheira'], en: ['Housekeeper', 'Cook'] },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 190.000.', 'Carnaval: pacote de 5 diárias R$ 35.000.', 'Valor de venda: R$ 7.500.000.'],
    en: ['New Year\'s Eve: 10-night package R$ 190,000.', 'Carnival: 5-night package R$ 35,000.', 'Sale price: R$ 7,500,000.'],
  },
};

const BRAGA: Property = {
  id: 'casa-braga', code: 'TBA-270', name: { pt: 'Casa Braga', en: 'Casa Braga' },
  purpose: ['aluguel', 'venda'], location: 'Condomínio Coqueiral', suites: 4, guests: 12, baths: 5, area: '250 m²',
  price: { pt: 'R$ 2.600 / diária', en: 'R$ 2,600 / night' },
  priceLow: { pt: 'R$ 2.100 / diária', en: 'R$ 2,100 / night' },
  carnaval: { pt: 'R$ 40.000', en: 'R$ 40,000' },
  reveillon: { pt: 'R$ 130.000', en: 'R$ 130,000' },
  salePrice: { pt: 'R$ 4.950.000', en: 'R$ 4,950,000' },
  image: '/img/braga/01.jpg',
  gallery: ['/img/braga/01.webp','/img/braga/02.webp','/img/braga/03.webp','/img/braga/04.webp','/img/braga/05.webp','/img/braga/06.webp','/img/braga/07.webp','/img/braga/08.webp','/img/braga/09.webp','/img/braga/10.webp','/img/braga/11.webp','/img/braga/12.webp','/img/braga/13.webp','/img/braga/14.webp','/img/braga/15.webp','/img/braga/16.webp','/img/braga/17.webp','/img/braga/18.webp','/img/braga/19.webp','/img/braga/20.webp','/img/braga/21.webp','/img/braga/22.webp','/img/braga/23.webp','/img/braga/24.webp','/img/braga/25.webp','/img/braga/26.webp','/img/braga/27.webp','/img/braga/28.webp','/img/braga/29.webp','/img/braga/30.webp','/img/braga/31.webp','/img/braga/32.webp','/img/braga/33.webp','/img/braga/34.webp','/img/braga/35.webp','/img/braga/36.webp','/img/braga/37.webp','/img/braga/38.webp','/img/braga/39.webp','/img/braga/40.webp','/img/braga/41.webp','/img/braga/42.webp','/img/braga/43.webp','/img/braga/44.webp','/img/braga/45.webp','/img/braga/46.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet com churrasqueira', 'Varanda ampla com mesa de refeições e redes', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Ar-condicionado nos 4 quartos', 'Wi-Fi e TV a cabo', 'Roupas de cama, mesa e banho', 'Lavabo e área de serviço', 'Estacionamento'],
    en: ['Private pool', 'Gourmet area with barbecue', 'Spacious veranda with dining table and hammocks', 'Living, dining and TV rooms', 'Equipped kitchen', 'Air conditioning in the 4 bedrooms', 'Wi-Fi and cable TV', 'Bed, table and bath linen', 'Guest toilet and laundry area', 'Parking'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a Casa Braga combina conforto, praticidade e uma excelente localização, a poucos minutos do centro de Trancoso e das praias. Rodeada por uma ampla área verde, é perfeita para famílias ou grupos que buscam tranquilidade com fácil acesso ao Quadrado.\n\nA casa conta com ambientes amplos e bem distribuídos, salas de estar, jantar e TV integradas, cozinha equipada e espaço gourmet com churrasqueira. A varanda ampla com mesa de refeições e redes se abre para a piscina privativa e o jardim, criando o cenário ideal para dias de descanso.\n\nSuíte Master: 1 cama king + 1 cama de solteiro, ar-condicionado, closet e vista para o jardim. Suíte 02: 1 cama queen + 1 cama de solteiro e ar-condicionado. Suíte 03: 1 cama queen + 1 cama de solteiro e ar-condicionado. Suíte 04: 1 cama queen + 1 cama de solteiro e ar-condicionado. Capacidade para até 12 hóspedes.',
    en: 'Located in the Coqueiral Condominium, Casa Braga combines comfort, convenience and an excellent location, a few minutes from the center of Trancoso and the beaches. Surrounded by a large green area, it is perfect for families or groups seeking tranquility with easy access to the Quadrado.\n\nThe house features ample, well-distributed spaces, integrated living, dining and TV rooms, an equipped kitchen and a gourmet area with barbecue. The spacious veranda with dining table and hammocks opens onto the private pool and garden, creating the ideal setting for days of rest.\n\nMaster Suite: 1 king bed + 1 twin bed, air conditioning, walk-in closet and garden view. Suite 02: 1 queen bed + 1 twin bed and air conditioning. Suite 03: 1 queen bed + 1 twin bed and air conditioning. Suite 04: 1 queen bed + 1 twin bed and air conditioning. Capacity for up to 12 guests.',
  },
  staff: { pt: ['1 arrumadeira'], en: ['1 housekeeper'] },
  notes: {
    pt: ['Locação mínima: 3 diárias.', 'Réveillon: pacote mínimo de 10 diárias R$ 130.000.', 'Carnaval: pacote mínimo de 5 diárias R$ 40.000.', 'Os valores não incluem 10% de taxa de serviço.'],
    en: ['Minimum stay: 3 nights.', 'New Year\'s Eve: minimum 10-night package R$ 130,000.', 'Carnival: minimum 5-night package R$ 40,000.', 'Prices do not include a 10% service fee.'],
  },
};

const CUMARU: Property = {
  id: 'casa-cumaru', code: 'TBA-271', name: { pt: 'Casa Cumaru', en: 'Casa Cumaru' },
  purpose: ['aluguel'], location: 'Bairro Colina', suites: 6, guests: 12, baths: 6, area: '—',
  price: { pt: 'R$ 7.000 / diária', en: 'R$ 7,000 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  carnaval: { pt: 'R$ 40.000', en: 'R$ 40,000' },
  reveillon: { pt: 'R$ 220.000', en: 'R$ 220,000' },
  image: '/img/cumaru/01.jpg',
  gallery: ['/img/cumaru/01.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Jardim amplo', 'Varanda com vista para a piscina', 'Área gourmet integrada', 'Cozinha equipada', 'Ar-condicionado e mosquiteiro nas suítes', 'Wi-Fi', 'Roupas de cama, mesa e banho'],
    en: ['Private pool', 'Spacious garden', 'Veranda overlooking the pool', 'Integrated gourmet area', 'Equipped kitchen', 'Air conditioning and mosquito nets in the suites', 'Wi-Fi', 'Bed, table and bath linen'],
  },
  description: {
    pt: 'Localizada no tranquilo e seguro bairro da Colina, a Casa Cumaru oferece uma experiência autêntica em Trancoso, a apenas 10 minutos de caminhada do Quadrado e próxima às praias dos Coqueiros e dos Nativos. A residência combina arquitetura acolhedora, conforto e identidade local, valorizando o trabalho de artesãos, arquitetos, paisagistas e decoradores da região. Com ambientes amplos, jardim, piscina e excelente distribuição dos espaços, é ideal para famílias e grupos que buscam privacidade e charme em um dos destinos mais desejados da Bahia.\n\nSuíte Master 1: cama king, varanda para a piscina, closet e mosquiteiro. Suíte 2: cama king, varanda para o jardim e mosquiteiro. Suíte 3: cama king, varanda para a piscina e mosquiteiro. Suítes 4 e 5 (bangalô): cama king reversível para duas de solteiro. Suíte 6 (loft): cama king reversível para duas de solteiro. Capacidade para até 12 hóspedes.',
    en: 'Located in the quiet and safe Colina neighborhood, Casa Cumaru offers an authentic Trancoso experience, just a 10-minute walk from the Quadrado and close to Coqueiros and Nativos beaches. The residence combines welcoming architecture, comfort and local identity, celebrating the work of regional artisans, architects, landscapers and decorators. With spacious interiors, a garden, a pool and an excellent layout, it is ideal for families and groups seeking privacy and charm in one of Bahia\'s most desirable destinations.\n\nMaster Suite 1: king bed, veranda facing the pool, walk-in closet and mosquito net. Suite 2: king bed, garden veranda and mosquito net. Suite 3: king bed, veranda facing the pool and mosquito net. Suites 4 and 5 (bungalow): king bed convertible into two twin beds. Suite 6 (loft): king bed convertible into two twin beds. Capacity for up to 12 guests.',
  },
  staff: { pt: ['2 arrumadeiras', '1 cozinheira', '1 ajudante'], en: ['2 housekeepers', '1 cook', '1 assistant'] },
  notes: {
    pt: ['Réveillon: pacote de 10 noites R$ 220.000.', 'Carnaval: pacote de 5 noites R$ 40.000.', 'Os valores não incluem 10% de taxa de serviço.'],
    en: ['New Year\'s Eve: 10-night package R$ 220,000.', 'Carnival: 5-night package R$ 40,000.', 'Prices do not include a 10% service fee.'],
  },
};

const JACARANDA05: Property = {
  id: 'casa-05-jacaranda', code: 'TBA-272', name: { pt: 'Casa 05 — Condomínio Jacarandá', en: 'Casa 05 — Jacarandá Condominium' },
  purpose: ['aluguel'], location: 'Condomínio Jacarandá', suites: 7, guests: 20, baths: 7, area: '—',
  price: { pt: 'R$ 4.500 / diária', en: 'R$ 4,500 / night' },
  priceLow: { pt: 'R$ 3.600 / diária', en: 'R$ 3,600 / night' },
  reveillon: { pt: 'R$ 160.000', en: 'R$ 160,000' },
  image: '/img/jacaranda05/01.jpg',
  gallery: ['/img/jacaranda05/01.webp','/img/jacaranda05/02.webp','/img/jacaranda05/03.webp','/img/jacaranda05/04.webp','/img/jacaranda05/05.webp','/img/jacaranda05/06.webp','/img/jacaranda05/07.webp','/img/jacaranda05/08.webp','/img/jacaranda05/09.webp','/img/jacaranda05/10.webp','/img/jacaranda05/11.webp','/img/jacaranda05/12.webp','/img/jacaranda05/13.webp','/img/jacaranda05/14.webp','/img/jacaranda05/15.webp','/img/jacaranda05/16.webp','/img/jacaranda05/17.webp','/img/jacaranda05/18.webp','/img/jacaranda05/19.webp','/img/jacaranda05/20.webp','/img/jacaranda05/21.webp','/img/jacaranda05/22.webp','/img/jacaranda05/23.webp','/img/jacaranda05/24.webp','/img/jacaranda05/25.webp','/img/jacaranda05/26.webp','/img/jacaranda05/27.webp','/img/jacaranda05/28.webp','/img/jacaranda05/29.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com jacuzzi integrada', 'Bar', 'Espaço gourmet com churrasqueira', 'Amplos jardins', 'Espaços internos integrados às áreas externas', 'Cozinha completa', 'Wi-Fi', 'Espaço para home office', 'Garagem'],
    en: ['Private pool with integrated jacuzzi', 'Bar', 'Gourmet area with barbecue', 'Spacious gardens', 'Indoor spaces integrated with outdoor areas', 'Full kitchen', 'Wi-Fi', 'Home office space', 'Garage'],
  },
  description: {
    pt: 'Recém-inaugurada, a Casa 05 reúne sofisticação, conforto e o autêntico charme de Trancoso em um ambiente pensado para proporcionar experiências inesquecíveis. Localizada no Condomínio Jacarandá, a poucos minutos do Quadrado e das principais praias da região, a propriedade oferece privacidade, segurança e uma atmosfera perfeita para reunir família e amigos.\n\nCom 7 suítes, a casa acomoda confortavelmente até 20 hóspedes. Todas as suítes possuem 1 cama king size e 1 cama de solteiro, oferecendo conforto e praticidade para diferentes configurações de grupos.\n\nA área de lazer conta com piscina privativa, jacuzzi integrada, bar, espaço gourmet com churrasqueira, amplos jardins e diversos ambientes para descanso e convivência. Os espaços internos são modernos, iluminados e integrados às áreas externas. A casa também dispõe de cozinha completa, Wi-Fi, espaço para home office, garagem e toda a infraestrutura necessária para uma estadia confortável.',
    en: 'Newly opened, Casa 05 brings together sophistication, comfort and the authentic charm of Trancoso in a setting designed to provide unforgettable experiences. Located in the Jacarandá Condominium, just minutes from the Quadrado and the region\'s main beaches, the property offers privacy, security and a perfect atmosphere for gathering family and friends.\n\nWith 7 suites, the house comfortably accommodates up to 20 guests. All suites feature 1 king-size bed and 1 twin bed, offering comfort and flexibility for different group configurations.\n\nThe leisure area features a private pool, integrated jacuzzi, bar, gourmet area with barbecue, spacious gardens and several spaces for rest and socializing. The interiors are modern, bright and integrated with the outdoor areas. The house also offers a full kitchen, Wi-Fi, home office space, garage and all the infrastructure needed for a comfortable stay.',
  },
  staff: { pt: ['Camareira', 'Jardineiro', 'Piscineiro'], en: ['Housekeeper', 'Gardener', 'Pool attendant'] },
  notes: {
    pt: ['Réveillon: pacote R$ 160.000 + 10% de taxa de serviço (cozinheira incluída no pacote de Réveillon).', 'Cozinheira disponível mediante contratação à parte.'],
    en: ['New Year\'s Eve: R$ 160,000 package + 10% service fee (cook included in the New Year\'s Eve package).', 'Cook available for hire separately.'],
  },
};

const TB14: Property = {
  id: 'casa-14-terravista-boutique', code: 'TBA-273', name: { pt: 'Casa 14 — Terravista Boutique', en: 'Casa 14 — Terravista Boutique' },
  purpose: ['aluguel'], location: 'Terravista Boutique', suites: 5, guests: 12, baths: 6, area: '450 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 350.000', en: 'R$ 350,000' },
  image: '/img/tb14/01.jpg',
  gallery: ['/img/tb14/01.webp','/img/tb14/02.webp','/img/tb14/03.webp','/img/tb14/04.webp','/img/tb14/05.webp','/img/tb14/06.webp','/img/tb14/07.webp','/img/tb14/08.webp','/img/tb14/09.webp','/img/tb14/10.webp','/img/tb14/11.webp','/img/tb14/12.webp','/img/tb14/13.webp','/img/tb14/14.webp','/img/tb14/15.webp','/img/tb14/16.webp','/img/tb14/17.webp','/img/tb14/18.webp','/img/tb14/19.webp','/img/tb14/20.webp','/img/tb14/21.webp','/img/tb14/22.webp','/img/tb14/23.webp','/img/tb14/24.webp','/img/tb14/25.webp','/img/tb14/26.webp','/img/tb14/27.webp','/img/tb14/28.webp','/img/tb14/29.webp','/img/tb14/30.webp','/img/tb14/31.webp','/img/tb14/32.webp','/img/tb14/33.webp','/img/tb14/34.webp','/img/tb14/35.webp','/img/tb14/36.webp','/img/tb14/37.webp','/img/tb14/38.webp','/img/tb14/39.webp','/img/tb14/40.webp','/img/tb14/41.webp','/img/tb14/42.webp','/img/tb14/43.webp','/img/tb14/44.webp','/img/tb14/45.webp','/img/tb14/46.webp','/img/tb14/47.webp','/img/tb14/48.webp'], featured: false,
  amenities: {
    pt: ['A 200 metros da Praia das Tartarugas', 'Solário mirante com vista para o mar', 'Piscina privativa', 'Hidromassagem', 'Sauna', 'Quadra de beach tennis', 'Área gourmet integrada à área externa', 'Deck e jardim', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Ar-condicionado e mosquiteiros', 'Smart TV e Wi-Fi', 'Churrasqueira, máquina de lavar louças e lava e seca', 'Toalhas de piscina e espreguiçadeiras', 'Estacionamento', 'Portaria 24 horas'],
    en: ['200 meters from Tartarugas Beach', 'Rooftop solarium with ocean view', 'Private pool', 'Hot tub', 'Sauna', 'Beach tennis court', 'Gourmet area integrated with the outdoor area', 'Deck and garden', 'Living, dining and TV rooms', 'Equipped kitchen', 'Air conditioning and mosquito nets', 'Smart TV and Wi-Fi', 'Barbecue, dishwasher and washer-dryer', 'Pool towels and sun loungers', 'Parking', '24-hour gated security'],
  },
  description: {
    pt: 'Com localização privilegiada no exclusivo Condomínio Terravista Boutique, a apenas 200 metros da Praia das Tartarugas, a Casa 14 oferece uma experiência sofisticada e integrada à natureza, com ambientes amplos, privacidade e vistas deslumbrantes.\n\nInspirada na rica cultura regional, a residência dispõe de 5 suítes com ar-condicionado, além de 1 suíte de apoio. O projeto valoriza a conexão entre as áreas internas e externas, criando uma atmosfera acolhedora para momentos de lazer e convivência com a família e os amigos.\n\nEntre os principais destaques estão o solário mirante com vista para o mar, piscina privativa, hidromassagem, sauna, quadra de beach tennis, deck, jardim e uma ampla área gourmet integrada à área externa.',
    en: 'With a privileged location in the exclusive Terravista Boutique Condominium, just 200 meters from Tartarugas Beach, Casa 14 offers a sophisticated experience integrated with nature, with spacious environments, privacy and breathtaking views.\n\nInspired by the rich regional culture, the residence features 5 air-conditioned suites, plus 1 support suite. The design values the connection between indoor and outdoor areas, creating a welcoming atmosphere for leisure and togetherness with family and friends.\n\nHighlights include the rooftop solarium overlooking the sea, private pool, hot tub, sauna, beach tennis court, deck, garden and a spacious gourmet area integrated with the outdoor space.',
  },
  staff: { pt: ['Camareira', 'Cozinheira', 'Piscineiro / Jardineiro'], en: ['Housekeeper', 'Cook', 'Pool attendant / Gardener'] },
  notes: {
    pt: ['Terreno de 2.493 m²; área construída de 450 m².', 'Diárias (alta e baixa temporada) e Carnaval sob consulta.', 'Réveillon: pacote de 10 noites R$ 350.000 + 10% de taxa de serviço.', 'Valores sujeitos a disponibilidade e confirmação no momento da reserva.'],
    en: ['2,493 m² lot; 450 m² built area.', 'Daily rates (high and low season) and Carnival upon request.', 'New Year\'s Eve: 10-night package R$ 350,000 + 10% service fee.', 'Rates subject to availability and confirmation at booking.'],
  },
};

const MACONDO: Property = {
  id: 'casa-macondo', code: 'TBA-274', name: { pt: 'Casa Macondo', en: 'Casa Macondo' },
  purpose: ['aluguel'], location: 'Praia de Itapororoca', suites: 7, guests: 14, baths: 9, area: '—',
  price: { pt: 'R$ 22.000 / diária', en: 'R$ 22,000 / night' },
  priceLow: { pt: 'R$ 18.000 / diária', en: 'R$ 18,000 / night' },
  carnaval: { pt: 'R$ 195.000', en: 'R$ 195,000' },
  reveillon: { pt: 'R$ 1.000.000', en: 'R$ 1,000,000' },
  image: '/img/macondo/01.jpg',
  gallery: ['/img/macondo/01.webp','/img/macondo/02.webp','/img/macondo/03.webp','/img/macondo/04.webp','/img/macondo/05.webp','/img/macondo/06.webp','/img/macondo/07.webp','/img/macondo/08.webp','/img/macondo/09.webp','/img/macondo/10.webp','/img/macondo/11.webp','/img/macondo/12.webp','/img/macondo/13.webp','/img/macondo/14.webp','/img/macondo/15.webp','/img/macondo/16.webp','/img/macondo/17.webp','/img/macondo/18.webp','/img/macondo/19.webp','/img/macondo/20.webp','/img/macondo/21.webp','/img/macondo/22.webp','/img/macondo/23.webp','/img/macondo/24.webp','/img/macondo/25.webp','/img/macondo/26.webp','/img/macondo/27.webp','/img/macondo/28.webp','/img/macondo/29.webp','/img/macondo/30.webp','/img/macondo/31.webp','/img/macondo/32.webp','/img/macondo/33.webp','/img/macondo/34.webp','/img/macondo/35.webp','/img/macondo/36.webp','/img/macondo/37.webp','/img/macondo/38.webp','/img/macondo/39.webp','/img/macondo/40.webp','/img/macondo/41.webp','/img/macondo/42.webp','/img/macondo/43.webp','/img/macondo/44.webp','/img/macondo/45.webp','/img/macondo/46.webp','/img/macondo/47.webp','/img/macondo/48.webp','/img/macondo/49.webp','/img/macondo/50.webp'],
  featured: true,
  amenities: {
    pt: ['Pé na areia', 'Projeto de David Bastos', 'Piscina integrada aos ambientes', 'Apoio de praia com área de estar', 'Mirante com vista para o mar', 'Quadra de beach tennis', 'Amplo deck com piscina', 'Salas de estar, jantar e cozinha equipada', 'Casa principal + bangalôs independentes', 'Wi-Fi'],
    en: ['Beachfront', 'Designed by David Bastos', 'Pool integrated with the living areas', 'Beach support with lounge area', 'Lookout with ocean view', 'Beach tennis court', 'Large deck with pool', 'Living and dining rooms and equipped kitchen', 'Main house + independent bungalows', 'Wi-Fi'],
  },
  description: {
    pt: 'Localizada à beira-mar na exclusiva Praia de Itapororoca, a Casa Macondo combina arquitetura contemporânea, conforto e total integração com a natureza. Assinada por David Bastos, a residência valoriza materiais naturais, ambientes amplos e uma conexão constante com o jardim, a piscina e o mar.\n\nDistribuída entre casa principal e bangalôs independentes, oferece privacidade para todos os hóspedes. A área social integra salas de estar, jantar, cozinha equipada e um amplo deck com piscina. A propriedade conta ainda com apoio de praia, mirante com vista para o mar e quadra de beach tennis.\n\nDistribuição das suítes — Casa Principal (piso superior): Suíte Master 01 com cama king size; Suíte 02 com 2 camas de viúva (reversíveis para casal); Suíte 03 com 2 camas de viúva. Bangalôs externos: Suíte 04 com 2 camas de viúva; Suíte 05 com cama king size; Suítes 06 e 07 com cama king size (conjugáveis entre si).',
    en: 'Located on the beachfront of the exclusive Itapororoca Beach, Casa Macondo combines contemporary architecture, comfort and total integration with nature. Designed by David Bastos, the residence values natural materials, spacious environments and a constant connection with the garden, the pool and the sea.\n\nSpread between a main house and independent bungalows, it offers privacy for all guests. The social area integrates living and dining rooms, an equipped kitchen and a large deck with a pool. The property also features beach support, a lookout overlooking the sea and a beach tennis court.\n\nSuite layout — Main House (upper floor): Master Suite 01 with king-size bed; Suite 02 with 2 widow beds (convertible to double); Suite 03 with 2 widow beds. External bungalows: Suite 04 with 2 widow beds; Suite 05 with king-size bed; Suites 06 and 07 with king-size bed (connectable).',
  },
  staff: { pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 caseiro', '1 funcionário de serviços gerais'], en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 caretaker', '1 general services staff'] },
  notes: {
    pt: ['Feriados: diária de alta temporada.', 'Carnaval: pacote de 5 noites R$ 195.000.', 'Réveillon: pacote de 10 noites R$ 1.000.000.', 'Os valores não incluem 15% de taxa de serviço. Preços sujeitos a alteração.', 'Aproximadamente 12 minutos de carro do Quadrado.'],
    en: ['Holidays: high-season daily rate.', 'Carnival: 5-night package R$ 195,000.', 'New Year\'s Eve: 10-night package R$ 1,000,000.', 'Prices do not include a 15% service fee and are subject to change.', 'Approximately 12 minutes by car from the Quadrado.'],
  },
};

const RICK: Property = {
  id: 'casa-rick', code: 'TBA-275', name: { pt: 'Casa Rick', en: 'Casa Rick' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 6, area: '557 m²',
  price: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  priceLow: { pt: 'R$ 6.000 / diária', en: 'R$ 6,000 / night' },
  carnaval: { pt: 'R$ 70.000', en: 'R$ 70,000' },
  reveillon: { pt: 'R$ 350.000', en: 'R$ 350,000' },
  salePrice: { pt: 'R$ 22.000.000', en: 'R$ 22,000,000' },
  image: '/img/rick/01.jpg',
  gallery: ['/img/rick/01.webp','/img/rick/02.webp','/img/rick/03.webp','/img/rick/04.webp','/img/rick/05.webp','/img/rick/06.webp','/img/rick/07.webp','/img/rick/08.webp','/img/rick/09.webp','/img/rick/10.webp','/img/rick/11.webp','/img/rick/12.webp','/img/rick/13.webp','/img/rick/14.webp','/img/rick/15.webp','/img/rick/16.webp','/img/rick/17.webp','/img/rick/18.webp','/img/rick/19.webp','/img/rick/20.webp','/img/rick/21.webp','/img/rick/22.webp','/img/rick/23.webp','/img/rick/24.webp','/img/rick/25.webp','/img/rick/26.webp','/img/rick/27.webp','/img/rick/28.webp','/img/rick/29.webp','/img/rick/30.webp','/img/rick/31.webp','/img/rick/32.webp','/img/rick/33.webp','/img/rick/34.webp','/img/rick/35.webp','/img/rick/36.webp','/img/rick/37.webp','/img/rick/38.webp','/img/rick/39.webp','/img/rick/40.webp','/img/rick/41.webp','/img/rick/42.webp','/img/rick/43.webp','/img/rick/44.webp'],
  featured: true,
  amenities: {
    pt: ['Vista para o mar', 'Piscina com deck', 'Área gourmet', 'Lavabo', 'Ar-condicionado em toda a residência', 'Som ambiente interno e externo', 'Gerador de energia', 'Wi-Fi e TV a cabo', 'Condomínio com segurança 24h', 'A 8 min a pé do Quadrado', 'A 10 min a pé da Praia dos Coqueiros'],
    en: ['Ocean view', 'Pool with deck', 'Gourmet area', 'Guest bathroom', 'Air conditioning throughout', 'Indoor and outdoor sound system', 'Power generator', 'Wi-Fi and cable TV', 'Gated community with 24h security', '8-min walk to the Quadrado', '10-min walk to Coqueiros Beach'],
  },
  description: {
    pt: 'Trancoso é cheia de casas exuberantes e bem decoradas, mas nada se compara à Casa Rick, uma luxuosa residência localizada no Condomínio Altos de Trancoso. Com uma piscina espetacular e vista para o mar em diversos pontos da propriedade, a casa proporciona uma experiência única de conforto, exclusividade e contato com a natureza.\n\nSão 5 suítes com closet e ar-condicionado, acomodando até 10 pessoas. A casa oferece sala de estar, sala de jantar, área gourmet, lavabo, som ambiente interno e externo e gerador de energia. A localização é privilegiada: apenas 8 minutos a pé do Quadrado e 10 minutos da Praia dos Coqueiros.\n\nO terreno de 2.429,76 m² abriga 557,14 m² de área construída, integrando jardins e espaços ao ar livre que aproveitam a vista para o oceano. A propriedade também está disponível para venda.',
    en: 'Trancoso is full of exuberant, well-decorated houses, but nothing compares to Casa Rick, a luxurious residence in the Altos de Trancoso gated community. With a spectacular pool and ocean views from several points of the property, the house offers a unique experience of comfort, exclusivity and contact with nature.\n\nIt features 5 suites with walk-in closets and air conditioning, accommodating up to 10 guests. The house offers a living room, dining room, gourmet area, guest bathroom, indoor and outdoor sound system and a power generator. The location is privileged: just an 8-minute walk from the Quadrado and 10 minutes from Coqueiros Beach.\n\nThe 2,429.76 m² lot holds 557.14 m² of built area, integrating gardens and outdoor spaces that take in the ocean view. The property is also available for sale.',
  },
  staff: { pt: ['Concierge', 'Cozinheira', 'Camareira / Arrumadeira', 'Segurança 24h'], en: ['Concierge', 'Cook', 'Housekeeper', '24h security'] },
  notes: {
    pt: ['Diárias: janeiro R$ 10.000; fevereiro R$ 9.000; março e outubro R$ 7.000; maio, junho, agosto e setembro R$ 6.000; julho, novembro, dezembro e feriados R$ 8.000.', 'Réveillon: pacote de 10 noites R$ 350.000, serviços inclusos (disponível).', 'Carnaval: pacote de 5 noites R$ 70.000 (disponível para 2027).', 'Os valores não incluem 10% de taxa de serviço.', 'Valor de venda: R$ 22.000.000.', 'Terreno de 2.429,76 m²; área construída de 557,14 m².'],
    en: ['Daily rates: January R$ 10,000; February R$ 9,000; March and October R$ 7,000; May, June, August and September R$ 6,000; July, November, December and holidays R$ 8,000.', 'New Year\'s Eve: 10-night package R$ 350,000, services included (available).', 'Carnival: 5-night package R$ 70,000 (available for 2027).', 'Prices do not include a 10% service fee.', 'Sale price: R$ 22,000,000.', '2,429.76 m² lot; 557.14 m² built area.'],
  },
};


const IANDE: Property = {
  id: 'villa-iande', code: 'TBA-280', name: { pt: 'Villa Iandê', en: 'Villa Iandê' },
  purpose: ['aluguel'], location: 'João Vieira', suites: 5, guests: 10, baths: 6, area: '628 m²',
  price: { pt: 'R$ 7.000', en: 'R$ 7,000' },
  priceLow: { pt: 'R$ 6.500', en: 'R$ 6,500' },
  reveillon: { pt: 'R$ 230.000 (pacote 10 dias)', en: 'R$ 230,000 (10-night package)' },
  carnaval: { pt: 'R$ 55.000 (pacote 5 dias)', en: 'R$ 55,000 (5-night package)' },
  image: '/img/iande/01.jpg',
  gallery: ['/img/iande/01.webp','/img/iande/02.webp','/img/iande/03.webp','/img/iande/04.webp','/img/iande/05.webp','/img/iande/06.webp','/img/iande/07.webp','/img/iande/08.webp','/img/iande/09.webp','/img/iande/10.webp','/img/iande/11.webp','/img/iande/12.webp','/img/iande/13.webp','/img/iande/14.webp','/img/iande/15.webp','/img/iande/16.webp','/img/iande/17.webp','/img/iande/18.webp','/img/iande/19.webp','/img/iande/20.webp','/img/iande/21.webp','/img/iande/22.webp','/img/iande/23.webp','/img/iande/24.webp','/img/iande/25.webp','/img/iande/26.webp','/img/iande/27.webp','/img/iande/28.webp','/img/iande/29.webp','/img/iande/30.webp','/img/iande/31.webp','/img/iande/32.webp','/img/iande/33.webp','/img/iande/34.webp','/img/iande/35.webp','/img/iande/36.webp','/img/iande/37.webp','/img/iande/38.webp','/img/iande/39.webp','/img/iande/40.webp'],
  featured: true,
  amenities: {
    pt: ['5 suítes climatizadas com cama king size, dossel e mosquiteiro', 'Piscina privativa com deck de madeira e espreguiçadeiras', 'Área social integrada: estar, jantar e bar', 'Cozinha gourmet com ilha e bancada em madeira', 'Sala de TV', 'Bangalô com varanda e rede', 'Ducha ao ar livre no jardim', 'Jardim tropical com paisagismo exuberante', 'Vista para a mata e vislumbre do mar', '628 m² de área', 'Fácil acesso ao Quadrado e às principais praias'],
    en: ['5 air-conditioned suites with king-size bed, canopy and mosquito net', 'Private pool with wooden deck and sun loungers', 'Integrated social area: living, dining and bar', 'Gourmet kitchen with island and wooden countertop', 'TV room', 'Bungalow with veranda and hammock', 'Outdoor garden shower', 'Tropical garden with lush landscaping', 'Forest views and a glimpse of the sea', '628 m² of built area', 'Easy access to the Quadrado and the main beaches'],
  },
  description: {
    pt: 'Cercada pela Mata Atlântica e integrada à paisagem de forma natural, a Villa Iandê reúne privacidade, conforto e uma arquitetura que traduz o estilo de Trancoso com elegância. Com 628 m², a casa foi projetada para valorizar a luz, a ventilação e a conexão com o verde. Grandes painéis de vidro, elementos em madeira e ambientes amplos criam uma atmosfera leve e acolhedora, com vista para a mata e um discreto vislumbre do mar entre as copas das árvores.\n\nA área social integra sala de estar, jantar e bar em um único espaço, ideal para reunir família e amigos. Na parte externa, piscina privativa, deck de madeira, espreguiçadeiras e jardim tropical completam a experiência.\n\nAs cinco suítes oferecem camas king size com dossel e mosquiteiro, mobiliário em madeira nobre e banheiros sofisticados. Cada ambiente foi pensado para unir o charme rústico de Trancoso ao conforto contemporâneo. Localizada na região de João Vieira, em Trancoso, oferece privacidade, tranquilidade e fácil acesso ao Quadrado e às principais praias.',
    en: 'Surrounded by the Atlantic Forest and naturally integrated into the landscape, Villa Iandê combines privacy, comfort and an architecture that translates the Trancoso style with elegance. With 628 m², the house was designed to enhance light, ventilation and the connection with nature. Large glass panels, wooden elements and spacious rooms create a light and welcoming atmosphere, with views of the forest and a discreet glimpse of the sea between the treetops.\n\nThe social area integrates living room, dining room and bar in a single space, ideal for gathering family and friends. Outside, a private pool, wooden deck, sun loungers and tropical garden complete the experience.\n\nThe five suites offer king-size beds with canopy and mosquito net, noble wood furniture and sophisticated bathrooms. Each room was designed to unite the rustic charm of Trancoso with contemporary comfort. Located in the João Vieira region of Trancoso, it offers privacy, tranquility and easy access to the Quadrado and the main beaches.',
  },
  staff: { pt: ['1 cozinheira', '1 ajudante', '1 arrumadeira', '1 jardineiro / piscineiro'], en: ['1 cook', '1 assistant', '1 housekeeper', '1 gardener / pool keeper'] },
  notes: {
    pt: ['Diárias: alta temporada R$ 7.000; baixa temporada R$ 6.500.', 'Carnaval: R$ 55.000 (pacote de 5 dias). Réveillon: R$ 230.000 (pacote de 10 dias).', 'Os valores não incluem 10% de taxa de serviço.', '5 suítes climatizadas com cama king size, dossel e mosquiteiro. Capacidade para até 10 hóspedes.', 'Staff incluso: 1 cozinheira, 1 ajudante, 1 arrumadeira e 1 profissional responsável pelo jardim e piscina.', 'Valores e disponibilidade sujeitos à confirmação.'],
    en: ['Daily rates: high season R$ 7,000; low season R$ 6,500.', 'Carnival: R$ 55,000 (5-night package). New Year\'s Eve: R$ 230,000 (10-night package).', 'Prices do not include a 10% service fee.', '5 air-conditioned suites with king-size bed, canopy and mosquito net. Capacity for up to 10 guests.', 'Staff included: 1 cook, 1 assistant, 1 housekeeper and 1 professional responsible for the garden and pool.', 'Prices and availability subject to confirmation.'],
  },
};


const MAGIVI: Property = {
  id: 'vila-magivi', code: 'TBA-279', name: { pt: 'Vila Magivi', en: 'Vila Magivi' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 15, baths: 7, area: '—',
  price: { pt: 'R$ 12.000', en: 'R$ 12,000' },
  priceLow: { pt: 'R$ 10.000', en: 'R$ 10,000' },
  reveillon: { pt: 'R$ 500.000 (pacote 10 dias)', en: 'R$ 500,000 (10-night package)' },
  carnaval: { pt: 'R$ 120.000 (pacote 5 dias)', en: 'R$ 120,000 (5-night package)' },
  image: '/img/magivi/01.jpg',
  gallery: ['/img/magivi/01.webp','/img/magivi/02.webp','/img/magivi/03.webp','/img/magivi/04.webp','/img/magivi/05.webp','/img/magivi/06.webp','/img/magivi/07.webp','/img/magivi/08.webp','/img/magivi/09.webp','/img/magivi/10.webp','/img/magivi/11.webp','/img/magivi/12.webp','/img/magivi/13.webp','/img/magivi/14.webp','/img/magivi/15.webp','/img/magivi/16.webp','/img/magivi/17.webp','/img/magivi/18.webp','/img/magivi/19.webp','/img/magivi/20.webp','/img/magivi/21.webp','/img/magivi/22.webp','/img/magivi/23.webp','/img/magivi/24.webp','/img/magivi/25.webp','/img/magivi/26.webp','/img/magivi/27.webp','/img/magivi/28.webp','/img/magivi/29.webp','/img/magivi/30.webp','/img/magivi/31.webp','/img/magivi/32.webp','/img/magivi/33.webp','/img/magivi/34.webp','/img/magivi/35.webp','/img/magivi/36.webp','/img/magivi/37.webp','/img/magivi/38.webp','/img/magivi/39.webp','/img/magivi/40.webp','/img/magivi/41.webp'],
  featured: true,
  amenities: {
    pt: ['6 suítes climatizadas (3 na casa principal + 3 em bangalôs independentes)', 'Piscina com amplo deck de madeira', 'Academia completa', 'Sauna', 'Redário', 'Espaço fire pit no jardim', 'Cozinha gourmet integrada', 'Adega e cervejeira', 'Churrasqueira', 'Área de jantar ao ar livre', 'Jardim tropical com paisagismo exuberante', 'Condomínio fechado com segurança', 'A poucos minutos do Quadrado e das praias'],
    en: ['6 air-conditioned suites (3 in the main house + 3 in independent bungalows)', 'Pool with large wooden deck', 'Fully equipped gym', 'Sauna', 'Hammock area', 'Garden fire pit', 'Integrated gourmet kitchen', 'Wine cellar and beer cooler', 'Barbecue', 'Outdoor dining area', 'Tropical garden with lush landscaping', 'Gated community with security', 'Minutes from the Quadrado and the beaches'],
  },
  description: {
    pt: 'Em um dos endereços mais exclusivos de Trancoso, a Vila Magivi combina arquitetura contemporânea, elegância e integração com a natureza em uma experiência de hospedagem única. Projetada para receber famílias e grupos com conforto absoluto, a propriedade oferece ambientes amplos, sofisticados e acolhedores, onde cada detalhe foi pensado para proporcionar dias inesquecíveis.\n\nCom capacidade para até 15 hóspedes, a casa dispõe de 6 suítes climatizadas distribuídas entre a residência principal e três bangalôs independentes, garantindo privacidade e comodidade. Os interiores assinados por Ricardo Kurpan e Ivisson Barros, aliados ao projeto arquitetônico do escritório Vida de Vila, valorizam materiais naturais, iluminação e o estilo leve que traduz a essência de Trancoso.\n\nA área social integra os espaços de convivência de forma elegante, criando o cenário ideal para reunir família e amigos. Os ambientes amplos e climatizados convidam a momentos de descanso, boa gastronomia e experiências compartilhadas em meio ao paisagismo tropical. A propriedade conta ainda com academia completa e sauna.',
    en: 'At one of the most exclusive addresses in Trancoso, Vila Magivi combines contemporary architecture, elegance and integration with nature in a unique hospitality experience. Designed to welcome families and groups in absolute comfort, the property offers spacious, sophisticated and welcoming environments, where every detail was thought out to provide unforgettable days.\n\nWith capacity for up to 15 guests, the house has 6 air-conditioned suites spread between the main residence and three independent bungalows, ensuring privacy and comfort. The interiors signed by Ricardo Kurpan and Ivisson Barros, together with the architectural project by Vida de Vila studio, value natural materials, lighting and the light style that translates the essence of Trancoso.\n\nThe social area integrates the living spaces elegantly, creating the ideal setting to gather family and friends. The spacious, air-conditioned rooms invite moments of rest, fine dining and shared experiences amid tropical landscaping. The property also features a fully equipped gym and a sauna.',
  },
  staff: { pt: ['1 cozinheira', '1 auxiliar de cozinha', '2 camareiras', '1 piscineiro / jardineiro'], en: ['1 cook', '1 kitchen assistant', '2 housekeepers', '1 pool keeper / gardener'] },
  notes: {
    pt: ['Diárias: alta temporada R$ 12.000; baixa temporada R$ 10.000.', 'Carnaval: R$ 120.000 (pacote de 5 dias). Réveillon: R$ 500.000 (pacote de 10 dias).', 'Casa principal: 3 suítes com cama king, cama de solteiro, closet, banheiro amplo, escrivaninha, secador de cabelo e ar-condicionado.', 'Bangalôs: 3 suítes com cama king, TV, closet, banheiro, escrivaninha, secador de cabelo e ar-condicionado.', 'Staff incluso: 1 cozinheira, 1 auxiliar de cozinha, 2 camareiras e 1 piscineiro/jardineiro.', 'Localizada no Condomínio Altos de Trancoso, a poucos minutos do Quadrado e das principais praias.', 'Valores e disponibilidade sujeitos à confirmação.'],
    en: ['Daily rates: high season R$ 12,000; low season R$ 10,000.', 'Carnival: R$ 120,000 (5-night package). New Year\'s Eve: R$ 500,000 (10-night package).', 'Main house: 3 suites with king bed, single bed, walk-in closet, spacious bathroom, desk, hair dryer and air conditioning.', 'Bungalows: 3 suites with king bed, TV, walk-in closet, bathroom, desk, hair dryer and air conditioning.', 'Staff included: 1 cook, 1 kitchen assistant, 2 housekeepers and 1 pool keeper/gardener.', 'Located in the Altos de Trancoso gated community, minutes from the Quadrado and the main beaches.', 'Prices and availability subject to confirmation.'],
  },
};


const OITI: Property = {
  id: 'casa-oiti', code: 'TBA-278', name: { pt: 'Casa Oiti', en: 'Casa Oiti' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 5, guests: 11, baths: 6, area: '—',
  price: { pt: 'R$ 7.000', en: 'R$ 7,000' },
  priceLow: { pt: 'R$ 5.500', en: 'R$ 5,500' },
  reveillon: { pt: 'R$ 270.000 (pacote 10 dias)', en: 'R$ 270,000 (10-night package)' },
  carnaval: { pt: 'R$ 60.000 (pacote 5 dias)', en: 'R$ 60,000 (5-night package)' },
  salePrice: { pt: 'R$ 13.500.000', en: 'R$ 13,500,000' },
  image: '/img/oiti/01.jpg',
  gallery: ['/img/oiti/01.webp','/img/oiti/02.webp','/img/oiti/03.webp','/img/oiti/04.webp','/img/oiti/05.webp','/img/oiti/06.webp','/img/oiti/07.webp','/img/oiti/08.webp','/img/oiti/09.webp','/img/oiti/10.webp','/img/oiti/11.webp','/img/oiti/12.webp','/img/oiti/13.webp','/img/oiti/14.webp','/img/oiti/15.webp','/img/oiti/16.webp','/img/oiti/17.webp','/img/oiti/18.webp','/img/oiti/19.webp','/img/oiti/20.webp','/img/oiti/21.webp','/img/oiti/22.webp','/img/oiti/23.webp','/img/oiti/24.webp','/img/oiti/25.webp','/img/oiti/26.webp','/img/oiti/27.webp','/img/oiti/28.webp','/img/oiti/29.webp','/img/oiti/30.webp','/img/oiti/31.webp','/img/oiti/32.webp','/img/oiti/33.webp','/img/oiti/34.webp','/img/oiti/35.webp','/img/oiti/36.webp','/img/oiti/37.webp'],
  amenities: {
    pt: ['5 suítes', 'Piscina', 'Hidromassagem', 'Ducha externa', 'Cozinha gourmet completa', 'Churrasqueira', 'Cervejeira', 'Adega', 'Lavabo', 'Espaço de massagem no jardim', 'Jardim tropical', 'Staff completo (cozinheira, ajudante, arrumadeira, jardineiro e piscineiro)'],
    en: ['5 suites', 'Pool', 'Hot tub', 'Outdoor shower', 'Fully equipped gourmet kitchen', 'Barbecue', 'Beer cooler', 'Wine cellar', 'Guest bathroom', 'Garden massage space', 'Tropical garden', 'Full staff (cook, helper, housekeeper, gardener and pool keeper)'],
  },
  description: {
    pt: 'Uma casa pensada para receber bem, onde cada detalhe valoriza o conforto e o tempo vivido. Localizada no condomínio Altos de Trancoso, a Casa Oiti tem cinco suítes e capacidade para até 11 pessoas, em ambientes que convidam a dias leves, entre encontros, descanso e boas refeições.\n\nA área social gira em torno de uma cozinha gourmet completa, equipada com churrasqueira, cervejeira e adega, perfeita para momentos que começam despretensiosos e se estendem ao redor da mesa.\n\nNa área externa, piscina, hidromassagem e ducha criam o cenário ideal para tardes ao ar livre, com apoio de um lavabo que traz praticidade ao dia a dia. Disponível também para venda: R$ 13.500.000.',
    en: 'A house designed to welcome well, where every detail values comfort and time well spent. Located in the Altos de Trancoso community, Casa Oiti has five suites and accommodates up to 11 guests, in spaces that invite light days of gathering, rest and good meals.\n\nThe social area revolves around a fully equipped gourmet kitchen with barbecue, beer cooler and wine cellar, perfect for moments that start casually and extend around the table.\n\nOutside, the pool, hot tub and outdoor shower create the ideal setting for afternoons in the open air, supported by a guest bathroom that brings practicality to everyday life. Also available for sale: R$ 13,500,000.',
  },
  notes: {
    pt: ['Diárias: alta temporada R$ 7.000; baixa temporada R$ 5.500.', 'Carnaval: R$ 60.000 (pacote de 5 dias). Réveillon: R$ 270.000 (pacote de 10 dias).', 'Staff incluso: 1 cozinheira, 1 ajudante, 1 arrumadeira, 1 jardineiro e 1 piscineiro.', 'A partir de 8 hóspedes é necessária a contratação de uma ajudante extra.', 'Valor de venda: R$ 13.500.000.', 'Valores e disponibilidade sujeitos à confirmação.'],
    en: ['Daily rates: high season R$ 7,000; low season R$ 5,500.', 'Carnival: R$ 60,000 (5-day package). New Year\'s Eve: R$ 270,000 (10-day package).', 'Staff included: 1 cook, 1 helper, 1 housekeeper, 1 gardener and 1 pool keeper.', 'For 8+ guests, hiring an extra helper is required.', 'Sale price: R$ 13,500,000.', 'Rates and availability subject to confirmation.'],
  },
};


const COQUEIRAL13: Property = {
  id: 'casa-coqueiral-13', code: 'TBA-277', name: { pt: 'Casa Coqueiral 13', en: 'Casa Coqueiral 13' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 6, guests: 18, baths: 6, area: '—',
  price: { pt: 'R$ 2.950', en: 'R$ 2,950' },
  priceLow: { pt: 'R$ 2.550', en: 'R$ 2,550' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral13/01.jpg',
  gallery: ['/img/coqueiral13/01.webp','/img/coqueiral13/02.webp','/img/coqueiral13/03.webp','/img/coqueiral13/04.webp','/img/coqueiral13/05.webp','/img/coqueiral13/06.webp','/img/coqueiral13/07.webp','/img/coqueiral13/08.webp','/img/coqueiral13/09.webp','/img/coqueiral13/10.webp','/img/coqueiral13/11.webp','/img/coqueiral13/12.webp','/img/coqueiral13/13.webp','/img/coqueiral13/14.webp','/img/coqueiral13/15.webp','/img/coqueiral13/16.webp','/img/coqueiral13/17.webp','/img/coqueiral13/18.webp','/img/coqueiral13/19.webp','/img/coqueiral13/20.webp','/img/coqueiral13/21.webp','/img/coqueiral13/22.webp','/img/coqueiral13/23.webp','/img/coqueiral13/24.webp','/img/coqueiral13/25.webp','/img/coqueiral13/26.webp','/img/coqueiral13/27.webp','/img/coqueiral13/28.webp','/img/coqueiral13/29.webp','/img/coqueiral13/30.webp','/img/coqueiral13/31.webp','/img/coqueiral13/32.webp','/img/coqueiral13/33.webp','/img/coqueiral13/34.webp','/img/coqueiral13/35.webp','/img/coqueiral13/36.webp','/img/coqueiral13/37.webp'],
  amenities: {
    pt: ['6 suítes climatizadas', 'Piscina com revestimento hijau', 'Sala de estar', 'Cozinha completa e equipada', 'Área gourmet', 'Churrasqueira', 'Jardim tropical', 'Gramado', 'Suítes com hidromassagem', 'Vista para a mata', 'Condomínio fechado'],
    en: ['6 air-conditioned suites', 'Pool with hijau stone finish', 'Living room', 'Fully equipped kitchen', 'Gourmet area', 'Barbecue', 'Tropical garden', 'Lawn', 'Suites with hot tub', 'Forest view', 'Gated community'],
  },
  description: {
    pt: 'A Casa Coqueiral 13 reúne conforto, privacidade e uma excelente estrutura para receber famílias e grupos de amigos em Trancoso. Localizada no Condomínio Coqueiral, a propriedade oferece ambientes amplos, integrados e cercados pelo paisagismo tropical, proporcionando uma estadia tranquila em um dos condomínios mais procurados da região.\n\nSão 6 suítes climatizadas — algumas com hidromassagem e vista para a mata. A área social integra sala de estar e cozinha totalmente equipada, enquanto a área externa oferece piscina revestida em hijau, jardim, gramado e espaço gourmet com churrasqueira.\n\nLocalização privilegiada no Condomínio Coqueiral, próxima ao Quadrado e às principais praias de Trancoso. Staff com camareira inclusa.',
    en: 'Casa Coqueiral 13 brings together comfort, privacy and an excellent structure for hosting families and groups of friends in Trancoso. Located in the Coqueiral gated community, the property offers wide, integrated spaces surrounded by tropical landscaping, providing a peaceful stay in one of the region\'s most sought-after communities.\n\nThere are 6 air-conditioned suites — some with a hot tub and forest views. The social area combines a living room and a fully equipped kitchen, while the outdoor area offers a pool with hijau stone finish, garden, lawn and a gourmet space with barbecue.\n\nPrime location in the Coqueiral community, close to the Quadrado and Trancoso\'s main beaches. Housekeeping staff included.',
  },
  notes: {
    pt: ['Diárias: janeiro R$ 3.900; alta temporada (fevereiro, julho, dezembro e feriados) R$ 2.950; baixa temporada (exceto feriados) R$ 2.550.', 'Réveillon e Carnaval: sob consulta.', 'Estadia mínima: 3 diárias.', 'Valores e disponibilidade sujeitos à confirmação.'],
    en: ['Daily rates: January R$ 3,900; high season (February, July, December and holidays) R$ 2,950; low season (except holidays) R$ 2,550.', 'New Year\'s Eve and Carnival: upon request.', 'Minimum stay: 3 nights.', 'Rates and availability subject to confirmation.'],
  },
};


const COQUEIRAL7: Property = {
  id: 'casa-coqueiral-7', code: 'TBA-276', name: { pt: 'Casa Coqueiral 7', en: 'Casa Coqueiral 7' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 6, guests: 18, baths: 6, area: '740 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral7/01.jpg',
  gallery: ['/img/coqueiral7/01.webp','/img/coqueiral7/02.webp','/img/coqueiral7/03.webp','/img/coqueiral7/04.webp','/img/coqueiral7/05.webp','/img/coqueiral7/06.webp','/img/coqueiral7/07.webp','/img/coqueiral7/08.webp','/img/coqueiral7/09.webp','/img/coqueiral7/10.webp','/img/coqueiral7/11.webp','/img/coqueiral7/12.webp','/img/coqueiral7/13.webp','/img/coqueiral7/14.webp','/img/coqueiral7/15.webp','/img/coqueiral7/16.webp','/img/coqueiral7/17.webp','/img/coqueiral7/18.webp','/img/coqueiral7/19.webp'],
  amenities: {
    pt: ['6 suítes climatizadas', 'Piscina privativa', 'Área gourmet', 'Churrasqueira', 'Fogão industrial', 'Cervejeira e freezer', 'Sala de estar', 'Sala de jantar', 'Sala de TV climatizada', 'Cozinha completa e equipada', 'Lavabo', 'Wi-Fi', 'Condomínio fechado', 'Segurança 24 horas'],
    en: ['6 air-conditioned suites', 'Private pool', 'Gourmet area', 'Barbecue', 'Industrial stove', 'Beer cooler and freezer', 'Living room', 'Dining room', 'Air-conditioned TV room', 'Fully equipped kitchen', 'Guest bathroom', 'Wi-Fi', 'Gated community', '24-hour security'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a apenas 2,5 km do Quadrado e próxima às principais praias de Trancoso, a Casa Coqueiral 7 combina amplitude, conforto e privacidade em uma propriedade ideal para famílias e grupos de amigos.\n\nCom 740 m² de área construída em um terreno de 1.250 m², a casa conta com 6 suítes climatizadas e acomoda confortavelmente até 18 hóspedes. Os ambientes sociais são amplos e integrados, incluindo sala de estar, sala de jantar e sala de TV climatizada, além de uma cozinha completa e equipada para atender grupos durante toda a estadia.\n\nNa área externa, a propriedade oferece piscina privativa e uma espaçosa área gourmet equipada com churrasqueira, fogão industrial, cervejeira e freezer, criando o ambiente ideal para momentos de lazer e confraternização.',
    en: 'Located in the Coqueiral gated community, just 2.5 km from the Quadrado and close to Trancoso\'s main beaches, Casa Coqueiral 7 combines spaciousness, comfort and privacy in a property ideal for families and groups of friends.\n\nWith 740 m² of built area on a 1,250 m² plot, the house has 6 air-conditioned suites and comfortably accommodates up to 18 guests. The social areas are wide and integrated, including living room, dining room and an air-conditioned TV room, plus a fully equipped kitchen ready to serve groups throughout the stay.\n\nOutside, the property offers a private pool and a spacious gourmet area equipped with barbecue, industrial stove, beer cooler and freezer, creating the perfect setting for leisure and celebration.',
  },
  notes: { pt: ['Valores e disponibilidade sujeitos à confirmação.'], en: ['Rates and availability subject to confirmation.'] },
};

const DADINHO: Property = {
  id: 'casa-dadinho-rio-da-barra', code: 'TBA-294', name: { pt: 'Casa Dadinho', en: 'Casa Dadinho' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 4, guests: 8, baths: 4, area: '≈ 500 m²',
  price: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 280.000 / período', en: 'R$ 280,000 / period' },
  image: '/img/dadinho/01.jpg',
  gallery: ['/img/dadinho/01.webp','/img/dadinho/02.webp','/img/dadinho/03.webp','/img/dadinho/04.webp','/img/dadinho/05.webp','/img/dadinho/06.webp','/img/dadinho/07.webp','/img/dadinho/08.webp','/img/dadinho/09.webp','/img/dadinho/10.webp','/img/dadinho/11.webp','/img/dadinho/12.webp','/img/dadinho/13.webp','/img/dadinho/14.webp','/img/dadinho/15.webp','/img/dadinho/16.webp','/img/dadinho/17.webp','/img/dadinho/18.webp','/img/dadinho/19.webp','/img/dadinho/20.webp','/img/dadinho/21.webp','/img/dadinho/22.webp','/img/dadinho/23.webp','/img/dadinho/24.webp','/img/dadinho/25.webp','/img/dadinho/26.webp','/img/dadinho/27.webp','/img/dadinho/28.webp','/img/dadinho/29.webp','/img/dadinho/30.webp','/img/dadinho/31.webp','/img/dadinho/32.webp','/img/dadinho/33.webp','/img/dadinho/34.webp','/img/dadinho/35.webp'], featured: false,
  amenities: {
    pt: ['Ambientes sociais integrados', 'Smart TV e Wi-Fi', 'Caixa de som Bluetooth', 'Churrasqueira americana', 'Redes de descanso', 'Ampla área verde', 'Cozinha totalmente equipada', 'Ar-condicionado', 'Máquina de café Nespresso', 'Enxoval completo', 'Estacionamento interno'],
    en: ['Integrated social areas', 'Smart TV and Wi-Fi', 'Bluetooth speaker', 'American-style barbecue', 'Hammocks for relaxing', 'Large green area', 'Fully equipped kitchen', 'Air conditioning', 'Nespresso coffee machine', 'Complete bed and bath linen', 'Internal parking'],
  },
  staff: {
    pt: ['Camareira', 'Cozinheira'],
    en: ['Housekeeper', 'Cook'],
  },
  description: {
    pt: 'Localizada em uma das regiões mais reservadas e encantadoras de Trancoso, a Casa Dadinho é um refúgio cercado pela natureza, próximo à Praia do Rio da Barra, onde o rio encontra o mar em meio a falésias, manguezais e vegetação nativa.\n\nCom aproximadamente 500 m² de área construída, a propriedade foi projetada para proporcionar conforto, privacidade e integração com a paisagem. Sua arquitetura valoriza materiais naturais, ambientes amplos e bem iluminados, criando uma atmosfera acolhedora e sofisticada, em sintonia com o estilo de Trancoso.\n\nA casa acomoda confortavelmente até 8 pessoas, distribuídas em quatro suítes. As áreas sociais são integradas e contam com sala de estar, sala de jantar e cozinha totalmente equipada. Na área externa, o amplo jardim oferece um cenário tranquilo para descansar, aproveitar o sol ou realizar atividades ao ar livre.\n\nA Casa Dadinho está localizada a poucos minutos de carro do Quadrado de Trancoso, sendo ideal para famílias e grupos que buscam tranquilidade, contato com a natureza e uma experiência mais reservada durante a estadia.',
    en: 'Located in one of the most reserved and charming regions of Trancoso, Casa Dadinho is a retreat surrounded by nature, close to Rio da Barra Beach, where the river meets the sea amid cliffs, mangroves and native vegetation.\n\nWith approximately 500 m² of built area, the property was designed to provide comfort, privacy and integration with the landscape. Its architecture values natural materials, spacious and well-lit rooms, creating a welcoming and sophisticated atmosphere, in tune with the style of Trancoso.\n\nThe house comfortably accommodates up to 8 people, distributed in four suites. The social areas are integrated and include a living room, dining room and fully equipped kitchen. Outside, the large garden offers a peaceful setting to relax, enjoy the sun or do outdoor activities.\n\nCasa Dadinho is located a few minutes by car from the Quadrado of Trancoso, ideal for families and groups seeking tranquility, contact with nature and a more reserved experience during their stay.',
  },
  locationDetail: {
    pt: 'A propriedade está situada na região do Rio da Barra, cercada pela Mata Atlântica e próxima a uma das praias mais tranquilas de Trancoso. O Quadrado fica a poucos minutos de carro.',
    en: 'The property is located in the Rio da Barra region, surrounded by the Atlantic Forest and close to one of the quietest beaches in Trancoso. The Quadrado is a few minutes away by car.',
  },
};

const MAION: Property = {
  id: 'casa-maion-altos-de-trancoso', code: 'TBA-295', name: { pt: 'Casa Maion', en: 'Casa Maion' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 4, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 200.000 / pacote de 10 diárias', en: 'R$ 200,000 / 10-night package' },
  image: '/img/maion/01.jpg',
  gallery: ['/img/maion/01.webp','/img/maion/02.webp','/img/maion/03.webp','/img/maion/04.webp','/img/maion/05.webp','/img/maion/06.webp','/img/maion/07.webp','/img/maion/08.webp','/img/maion/09.webp','/img/maion/10.webp','/img/maion/11.webp','/img/maion/12.webp','/img/maion/13.webp','/img/maion/14.webp','/img/maion/15.webp','/img/maion/16.webp','/img/maion/17.webp','/img/maion/18.webp','/img/maion/19.webp','/img/maion/20.webp','/img/maion/21.webp','/img/maion/22.webp','/img/maion/23.webp','/img/maion/24.webp','/img/maion/25.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado nas suítes', 'Área gourmet', 'Churrasqueira', 'Fogão a lenha', 'Cozinha equipada', 'Piscina', 'Grande jardim', 'Ducha externa', 'Espreguiçadeiras', 'Ombrelone', 'Varanda com redes', 'Sala de estar', 'Sala de jantar', 'TV e Netflix', 'Wi-Fi', 'Mosquiteiros', 'Poço artesiano', 'Lavanderia', 'Máquina de lavar e secar', 'Estacionamento'],
    en: ['Air conditioning in the suites', 'Gourmet area', 'Barbecue', 'Wood-fired stove', 'Equipped kitchen', 'Swimming pool', 'Large garden', 'Outdoor shower', 'Sun loungers', 'Parasol', 'Veranda with hammocks', 'Living room', 'Dining room', 'TV and Netflix', 'Wi-Fi', 'Mosquito nets', 'Artesian well', 'Laundry room', 'Washer and dryer', 'Parking'],
  },
  staff: {
    pt: ['Arrumadeira (sob consulta)', 'Cozinheira (sob consulta)', 'Jardineiro (sob consulta)'],
    en: ['Housekeeper (upon request)', 'Cook (upon request)', 'Gardener (upon request)'],
  },
  description: {
    pt: 'Uma casa charmosa e acolhedora, com projeto arquitetônico do escritório Vida de Vila, localizada em um dos condomínios mais desejados de Trancoso, próxima à praia e ao Quadrado. Decoração com personalidade, espaços integrados e uma área externa criada para viver Trancoso com conforto, privacidade e leveza.\n\nA Casa Maion combina o estilo rústico-chique característico de Trancoso com ambientes amplos, funcionais e cuidadosamente decorados. Com quatro suítes espaçosas, a residência acomoda até oito hóspedes com conforto e privacidade.\n\nA área social reúne sala de estar, sala de jantar e uma ampla varanda com mesa para oito pessoas e redes, criando uma atmosfera descontraída para refeições, encontros e momentos de descanso.\n\nNa área externa, o espaço gourmet com churrasqueira e fogão a lenha se integra à piscina e ao grande jardim. O conjunto é ideal para aproveitar os dias ensolarados de Trancoso entre família e amigos. O projeto arquitetônico é assinado pelo escritório Vida de Vila.',
    en: 'A charming and welcoming house, with an architectural project by the Vida de Vila studio, located in one of the most desired condominiums in Trancoso, close to the beach and the Quadrado. Decoration with personality, integrated spaces and an outdoor area created to experience Trancoso with comfort, privacy and lightness.\n\nCasa Maion combines the rustic-chic style characteristic of Trancoso with spacious, functional and carefully decorated rooms. With four spacious suites, the residence accommodates up to eight guests with comfort and privacy.\n\nThe social area brings together a living room, dining room and a large veranda with a table for eight people and hammocks, creating a relaxed atmosphere for meals, gatherings and moments of rest.\n\nOutside, the gourmet space with barbecue and wood-fired stove integrates with the pool and the large garden. The set is ideal for enjoying the sunny days of Trancoso with family and friends. The architectural project is signed by the Vida de Vila studio.',
  },
  notes: { pt: ['Staff disponível sob consulta, conforme o período da hospedagem e as condições da reserva. Horários, folgas, custos adicionais e composição final da equipe devem ser confirmados no momento da reserva.'], en: ['Staff available upon request, according to the stay period and reservation conditions. Schedules, days off, additional costs and final team composition must be confirmed at the time of booking.'] },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso — condomínio residencial próximo ao Quadrado e às praias de Trancoso, com acesso conveniente aos principais pontos do destino.',
    en: 'Altos de Trancoso condominium — a residential condominium close to the Quadrado and the beaches of Trancoso, with convenient access to the main spots of the destination.',
  },
};

const COQUEIRAL25: Property = {
  id: 'casa-coqueiral-25', code: 'TBA-296', name: { pt: 'Casa Coqueiral 25', en: 'Casa Coqueiral 25' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 16, baths: 7, area: '—',
  price: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  priceLow: { pt: 'R$ 2.800 / diária', en: 'R$ 2,800 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  seasonHigh: { pt: 'Janeiro', en: 'January' },
  image: '/img/coqueiral25/01.jpg',
  gallery: ['/img/coqueiral25/01.webp','/img/coqueiral25/02.webp','/img/coqueiral25/03.webp','/img/coqueiral25/04.webp','/img/coqueiral25/05.webp','/img/coqueiral25/06.webp','/img/coqueiral25/07.webp','/img/coqueiral25/08.webp','/img/coqueiral25/09.webp','/img/coqueiral25/10.webp','/img/coqueiral25/11.webp','/img/coqueiral25/12.webp','/img/coqueiral25/13.webp','/img/coqueiral25/14.webp','/img/coqueiral25/15.webp','/img/coqueiral25/16.webp','/img/coqueiral25/17.webp','/img/coqueiral25/18.webp','/img/coqueiral25/19.webp','/img/coqueiral25/20.webp','/img/coqueiral25/21.webp','/img/coqueiral25/22.webp','/img/coqueiral25/23.webp','/img/coqueiral25/24.webp','/img/coqueiral25/25.webp','/img/coqueiral25/26.webp','/img/coqueiral25/27.webp','/img/coqueiral25/28.webp','/img/coqueiral25/29.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado', 'Banheiras de hidromassagem', 'Churrasqueira', 'Cozinha totalmente equipada', 'Cervejeira', 'Duchas externas', 'Espaço gourmet', 'Espreguiçadeiras', 'Estacionamento para quatro veículos', 'Geladeira e freezer', 'Hidromassagem aquecida', 'Internet Wi-Fi', 'Lavabos', 'Lavanderia equipada', 'Piscina de borda infinita', 'Roupas de cama e banho', 'Televisão', 'Varandas privativas', 'Lounge externo'],
    en: ['Air conditioning', 'Hot tubs', 'Barbecue', 'Fully equipped kitchen', 'Beer cooler', 'Outdoor showers', 'Gourmet area', 'Sun loungers', 'Parking for four vehicles', 'Refrigerator and freezer', 'Heated hot tub', 'Wi-Fi internet', 'Guest bathrooms', 'Equipped laundry room', 'Infinity pool', 'Bed and bath linen', 'Television', 'Private verandas', 'Outdoor lounge'],
  },
  staff: {
    pt: ['Arrumadeira', 'Copeira', 'Piscineiro', 'Concierge sob consulta'],
    en: ['Housekeeper', 'Waitress', 'Pool attendant', 'Concierge upon request'],
  },
  description: {
    pt: 'Localizada em condomínio fechado, a Casa Coqueiral 25 é uma residência de alto padrão projetada para receber até 16 pessoas com conforto, privacidade e uma completa estrutura de lazer.\n\nA ampla sala de estar possui pé-direito duplo, televisão e lavabo, criando um ambiente arejado e acolhedor para os momentos de convivência. A cozinha interna é totalmente equipada com filtro de água, forno, cooktop, geladeira, liquidificador, sanduicheira, micro-ondas, air fryer e uma ampla variedade de utensílios.\n\nNa área externa, a varanda gourmet acomoda confortavelmente até 20 pessoas e dispõe de uma grande mesa, churrasqueira, geladeira, cervejeira, cooktop, utensílios de cozinha e lavabo. O deck integrado à piscina oferece uma vista privilegiada para a mata e conta com piscina de borda infinita, hidromassagem aquecida, espreguiçadeiras, rede e um agradável lounge com almofadas.\n\nNo pavimento inferior, a casa dispõe ainda de lavanderia equipada e banheiro de apoio. A garagem aberta, localizada na parte frontal da propriedade, comporta até quatro veículos. O Condomínio Coqueiral conta com portaria e vigilância 24 horas, proporcionando segurança e tranquilidade durante toda a estadia.',
    en: 'Located in a gated community, Casa Coqueiral 25 is a high-end residence designed to host up to 16 people with comfort, privacy and a complete leisure structure.\n\nThe spacious living room has double-height ceilings, television and a guest bathroom, creating an airy and welcoming environment for moments together. The indoor kitchen is fully equipped with water filter, oven, cooktop, refrigerator, blender, sandwich maker, microwave, air fryer and a wide variety of utensils.\n\nOutside, the gourmet veranda comfortably accommodates up to 20 people and features a large table, barbecue, refrigerator, beer cooler, cooktop, kitchen utensils and a guest bathroom. The deck integrated with the pool offers a privileged view of the forest and features an infinity pool, heated hot tub, sun loungers, hammock and a pleasant lounge with cushions.\n\nOn the lower floor, the house also has an equipped laundry room and a support bathroom. The open garage, located at the front of the property, fits up to four vehicles. The Coqueiral Condominium has a 24-hour gatehouse and surveillance, providing security and tranquility throughout the stay.',
  },
  notes: { pt: ['Capacidade máxima para 16 hóspedes.', 'Eventos e música ao vivo são permitidos somente até as 22h, conforme as regras do condomínio.', 'Valores e disponibilidade estão sujeitos a confirmação.', 'Consulte condições para feriados e datas especiais.'], en: ['Maximum capacity for 16 guests.', 'Events and live music are allowed only until 10 PM, according to condominium rules.', 'Rates and availability are subject to confirmation.', 'Please ask about conditions for holidays and special dates.'] },
  locationDetail: {
    pt: 'Condomínio Coqueiral, em Trancoso, Bahia — condomínio fechado com portaria e vigilância 24 horas.',
    en: 'Coqueiral Condominium, in Trancoso, Bahia — a gated community with 24-hour gatehouse and surveillance.',
  },
};

const COQUEIRAL01: Property = {
  id: 'casa-coqueiral-01', code: 'TBA-298', name: { pt: 'Casa Coqueiral 1', en: 'Casa Coqueiral 1' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 15, baths: 6, area: '—',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 4.800 / diária', en: 'R$ 4,800 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 230.000 (pacote de 10 noites)', en: 'R$ 230,000 (10-night package)' },
  image: '/img/coqueiral01/01.jpg',
  gallery: ['/img/coqueiral01/01.webp','/img/coqueiral01/02.webp','/img/coqueiral01/03.webp','/img/coqueiral01/04.webp','/img/coqueiral01/05.webp','/img/coqueiral01/06.webp','/img/coqueiral01/07.webp','/img/coqueiral01/08.webp','/img/coqueiral01/09.webp','/img/coqueiral01/10.webp','/img/coqueiral01/11.webp','/img/coqueiral01/12.webp','/img/coqueiral01/13.webp','/img/coqueiral01/14.webp','/img/coqueiral01/15.webp','/img/coqueiral01/16.webp','/img/coqueiral01/17.webp','/img/coqueiral01/18.webp','/img/coqueiral01/19.webp','/img/coqueiral01/20.webp','/img/coqueiral01/21.webp','/img/coqueiral01/22.webp','/img/coqueiral01/23.webp','/img/coqueiral01/24.webp','/img/coqueiral01/25.webp','/img/coqueiral01/26.webp','/img/coqueiral01/27.webp','/img/coqueiral01/28.webp','/img/coqueiral01/29.webp','/img/coqueiral01/30.webp','/img/coqueiral01/31.webp','/img/coqueiral01/32.webp','/img/coqueiral01/33.webp','/img/coqueiral01/34.webp','/img/coqueiral01/35.webp','/img/coqueiral01/36.webp','/img/coqueiral01/37.webp','/img/coqueiral01/38.webp','/img/coqueiral01/39.webp','/img/coqueiral01/40.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado', 'Piscina aquecida com borda infinita', 'Jacuzzi / hidromassagem', 'Academia completa', 'Sala de TV climatizada', 'Cozinha totalmente equipada', 'Área gourmet integrada', 'Churrasqueira', 'Internet Wi-Fi', 'Sistema de som', 'Lavadora e secadora', 'Roupas de cama e banho', 'Equipamentos de praia', 'Estacionamento privativo', 'Segurança 24 horas no condomínio'],
    en: ['Air conditioning', 'Heated infinity-edge pool', 'Jacuzzi / hot tub', 'Fully equipped gym', 'Air-conditioned TV room', 'Fully equipped kitchen', 'Integrated gourmet area', 'Barbecue', 'Wi-Fi internet', 'Sound system', 'Washer and dryer', 'Bed and bath linen', 'Beach equipment', 'Private parking', '24-hour security in the condominium'],
  },
  staff: {
    pt: ['Cozinheira', 'Camareira', 'No pacote de Réveillon: auxiliares e barman'],
    en: ['Cook', 'Housekeeper', 'New Year\'s package: assistants and bartender'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, esta residência reúne conforto, privacidade e excelente estrutura para famílias e grupos de amigos que desejam aproveitar Trancoso com tranquilidade. Com arquitetura ampla e ambientes integrados, a casa oferece espaços generosos para convivência e lazer, mantendo o charme característico da região.\n\nSão 5 suítes espaçosas, todas climatizadas e cuidadosamente decoradas, acomodando até 15 hóspedes com muito conforto. A área externa é o grande destaque, com piscina aquecida de borda infinita, terraço, jardins e área gourmet integrada à sala climatizada, ideal para almoços e jantares em grupo.\n\nPara completar a experiência, a propriedade conta com academia equipada, cozinha completa, Wi-Fi, sistema de som e toda a infraestrutura necessária para uma estadia inesquecível.',
    en: 'Located in the Coqueiral Condominium, this residence combines comfort, privacy and an excellent structure for families and groups of friends who want to enjoy Trancoso with tranquility. With spacious architecture and integrated environments, the house offers generous spaces for gathering and leisure, keeping the region\'s characteristic charm.\n\nThere are 5 spacious suites, all air-conditioned and carefully decorated, accommodating up to 15 guests in great comfort. The outdoor area is the highlight, with a heated infinity-edge pool, terrace, gardens and a gourmet area integrated into the air-conditioned living room, ideal for group lunches and dinners.\n\nTo complete the experience, the property features an equipped gym, full kitchen, Wi-Fi, sound system and all the infrastructure needed for an unforgettable stay.',
  },
  notes: { pt: ['Capacidade para até 15 hóspedes.', 'Baixa temporada: mínimo de 4 noites.', 'Alta temporada: mínimo de 5 noites.', 'Valores sujeitos a alteração e disponibilidade.'], en: ['Capacity for up to 15 guests.', 'Low season: 4-night minimum stay.', 'High season: 5-night minimum stay.', 'Rates subject to change and availability.'] },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso – Bahia. A aproximadamente 3 km do Quadrado e das praias de Trancoso, oferecendo fácil acesso aos principais pontos da vila sem abrir mão da tranquilidade.',
    en: 'Coqueiral Condominium, Trancoso – Bahia. Approximately 3 km from the Quadrado and Trancoso beaches, offering easy access to the village\'s main spots without giving up tranquility.',
  },
};

const GEIGER: Property = {
  id: 'vila-geiger-itapororoca', code: 'TBA-299', name: { pt: 'Vila Geiger', en: 'Vila Geiger' },
  purpose: ['aluguel'], location: 'Praia de Itapororoca', suites: 6, guests: 12, baths: 6, area: '—',
  price: { pt: 'R$ 22.500 / diária', en: 'R$ 22,500 / night' },
  priceLow: { pt: 'R$ 22.500 / diária', en: 'R$ 22,500 / night' },
  carnaval: { pt: 'R$ 22.500 / diária', en: 'R$ 22,500 / night' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/geiger/01.jpg',
  gallery: ['/img/geiger/01.webp','/img/geiger/02.webp','/img/geiger/03.webp','/img/geiger/04.webp','/img/geiger/05.webp','/img/geiger/06.webp','/img/geiger/07.webp','/img/geiger/08.webp','/img/geiger/09.webp','/img/geiger/10.webp','/img/geiger/11.webp','/img/geiger/12.webp','/img/geiger/13.webp','/img/geiger/14.webp','/img/geiger/15.webp','/img/geiger/16.webp','/img/geiger/17.webp','/img/geiger/18.webp','/img/geiger/19.webp','/img/geiger/20.webp','/img/geiger/21.webp','/img/geiger/22.webp','/img/geiger/23.webp','/img/geiger/24.webp','/img/geiger/25.webp','/img/geiger/26.webp','/img/geiger/27.webp','/img/geiger/28.webp','/img/geiger/29.webp'], featured: false,
  amenities: {
    pt: ['Casa pé na areia em condomínio fechado', 'Seis suítes climatizadas', 'Closets e cofres nas suítes', 'Mosquiteiros', 'Áreas integradas à natureza', 'Proximidade ao Quadrado de Trancoso', 'Acesso rápido à praia e a um rio de águas tranquilas', 'Varandas com vista para o jardim', 'Mesas de escritório em suítes selecionadas', 'Secadores de cabelo', 'Privacidade e segurança'],
    en: ['Beachfront house in a gated community', 'Six air-conditioned suites', 'Walk-in closets and safes in the suites', 'Mosquito nets', 'Spaces integrated with nature', 'Close to Trancoso\'s Quadrado', 'Quick access to the beach and a calm-water river', 'Verandas overlooking the garden', 'Desk tables in selected suites', 'Hair dryers', 'Privacy and security'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 copeiro', 'Camareiras com atendimento até as 17h30', 'Cozinha em funcionamento até as 20h'],
    en: ['1 housekeeper', '1 cook', '1 kitchen assistant', 'Housekeeping service until 5:30 pm', 'Kitchen service until 8 pm'],
  },
  description: {
    pt: 'De frente para o mar e cercada pela Mata Atlântica, a Vila Geiger oferece uma experiência de hospedagem marcada pela privacidade, pelo conforto e por uma conexão genuína com a natureza de Trancoso.\n\nA poucos passos da areia e também de um rio de águas tranquilas, a casa é ideal para quem deseja dormir e acordar ao som das ondas. Este trecho de Itapororoca é conhecido por sua beleza preservada, atmosfera reservada e piscinas naturais que transformam a paisagem durante a maré baixa.\n\nCom seis suítes, incluindo dois bangalôs externos, a propriedade acomoda confortavelmente até 12 hóspedes. Os ambientes foram pensados para proporcionar dias leves entre o mar, o jardim e as áreas de convivência, sem abrir mão da comodidade de estar a poucos minutos do Quadrado de Trancoso.',
    en: 'Facing the sea and surrounded by the Atlantic Forest, Vila Geiger offers a lodging experience marked by privacy, comfort and a genuine connection with the nature of Trancoso.\n\nA few steps from the sand and also from a calm-water river, the house is ideal for those who wish to fall asleep and wake up to the sound of the waves. This stretch of Itapororoca is known for its preserved beauty, reserved atmosphere and natural pools that transform the landscape at low tide.\n\nWith six suites, including two external bungalows, the property comfortably accommodates up to 12 guests. The spaces were designed to provide light days between the sea, the garden and the living areas, without giving up the convenience of being just a few minutes from Trancoso\'s Quadrado.',
  },
  notes: { pt: ['Capacidade para até 12 hóspedes.', 'Natal e Réveillon sujeitos à consulta de disponibilidade.', 'Valores e disponibilidade sujeitos à confirmação.'], en: ['Capacity for up to 12 guests.', 'Christmas and New Year\'s subject to availability inquiry.', 'Rates and availability subject to confirmation.'] },
  locationDetail: {
    pt: 'Localizada no Condomínio de Itapororoca, em um dos trechos mais bonitos e preservados do litoral de Trancoso. A propriedade oferece acesso direto à praia, privacidade e contato intenso com a natureza, além de estar a poucos minutos de carro do Quadrado.',
    en: 'Located in the Itapororoca Condominium, in one of the most beautiful and preserved stretches of the Trancoso coastline. The property offers direct beach access, privacy and intense contact with nature, and is just a few minutes\' drive from the Quadrado.',
  },
};

const MIA: Property = {
  id: 'casa-mia-altos-de-trancoso', code: 'TBA-297', name: { pt: 'Casa Mia', en: 'Casa Mia' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 5, area: '—',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  carnaval: { pt: 'R$ 60.000', en: 'R$ 60,000' },
  reveillon: { pt: 'R$ 280.000', en: 'R$ 280,000' },
  image: '/img/mia/01.jpg',
  gallery: ['/img/mia/01.webp','/img/mia/02.webp','/img/mia/03.webp','/img/mia/04.webp','/img/mia/05.webp','/img/mia/06.webp','/img/mia/07.webp','/img/mia/08.webp','/img/mia/09.webp','/img/mia/10.webp','/img/mia/11.webp','/img/mia/12.webp','/img/mia/13.webp','/img/mia/14.webp','/img/mia/15.webp','/img/mia/16.webp','/img/mia/17.webp','/img/mia/18.webp','/img/mia/19.webp','/img/mia/20.webp','/img/mia/21.webp','/img/mia/22.webp','/img/mia/23.webp','/img/mia/24.webp','/img/mia/25.webp','/img/mia/26.webp','/img/mia/27.webp','/img/mia/28.webp','/img/mia/29.webp','/img/mia/30.webp','/img/mia/31.webp','/img/mia/32.webp','/img/mia/33.webp','/img/mia/34.webp','/img/mia/35.webp','/img/mia/36.webp'], featured: false,
  amenities: {
    pt: ['Adega de vinhos','Ar-condicionado','Cozinha equipada','Estacionamento','Freezer','Gerador','Internet Wi-Fi','Lavabo','Lavanderia','Poço artesiano','Roupas de cama, mesa e banho','Sala de estar','Sala de jantar','Secador de cabelo','Som ambiente','TV a cabo','Ventilador de teto'],
    en: ['Wine cellar','Air conditioning','Equipped kitchen','Parking','Freezer','Generator','Wi-Fi internet','Guest bathroom','Laundry room','Artesian well','Bed, table and bath linen','Living room','Dining room','Hair dryer','Ambient sound system','Cable TV','Ceiling fan'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 auxiliar de cozinha', '1 piscineiro/jardineiro'],
    en: ['1 housekeeper', '1 cook', '1 kitchen assistant', '1 pool attendant/gardener'],
  },
  description: {
    pt: 'Esta casa é um oásis de charme e sofisticação em Trancoso. Aqui, a excelência do design italiano se encontra com a riqueza da cultura brasileira para criar uma experiência única. A ideia por trás da casa nasceu da colaboração entre amigos italianos e brasileiros, apaixonados pelo mundo do design e da moda. Através desse encontro, eles conseguiram capturar a essência de ambos os países e incorporá-la ao ambiente mágico de Trancoso.\n\nCada detalhe da casa foi concebido para garantir que todos os hóspedes se sintam em casa. A atenção aos detalhes e a atmosfera são impecáveis, criando um refúgio de conforto e charme, onde a hospitalidade é prioridade. O projeto de arquitetura e a decoração são assinados por Maristela Gorayeb, enquanto o paisagismo é de Juliana Favarato.\n\nA casa oferece 5 suítes, cada uma com um design singular, acomodando confortavelmente até 10 hóspedes.',
    en: 'This house is an oasis of charm and sophistication in Trancoso. Here, the excellence of Italian design meets the richness of Brazilian culture to create a unique experience. The idea behind the house was born from a collaboration between Italian and Brazilian friends, passionate about the world of design and fashion. Through this encounter, they managed to capture the essence of both countries and incorporate it into the magical setting of Trancoso.\n\nEvery detail of the house was designed to make all guests feel at home. The attention to detail and the atmosphere are impeccable, creating a refuge of comfort and charm where hospitality is the priority. The architecture and decoration are signed by Maristela Gorayeb, while the landscaping is by Juliana Favarato.\n\nThe house offers 5 suites, each with a singular design, comfortably accommodating up to 10 guests.',
  },
  notes: { pt: ['No período de Réveillon, a taxa de serviço corresponde a 8% sobre o valor total da locação.', 'Diária de feriados: R$ 6.500.', 'Valores sujeitos a alteração sem aviso prévio.'], en: ['During the New Year period, the service fee corresponds to 8% of the total rental amount.', 'Holiday nightly rate: R$ 6,500.', 'Rates are subject to change without prior notice.'] },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, em Trancoso, Bahia — próxima às praias dos Nativos e dos Coqueiros e ao famoso Quadrado. Ideal para quem busca segurança, privacidade e fácil acesso às principais atrações de Trancoso.',
    en: 'Altos de Trancoso Condominium, in Trancoso, Bahia — close to Nativos and Coqueiros beaches and the famous Quadrado. Ideal for those seeking security, privacy and easy access to the main attractions of Trancoso.',
  },
};

PROPERTIES.unshift(GEIGER, COQUEIRAL01, MIA, COQUEIRAL25, MAION, DADINHO, IANDE, MAGIVI, OITI, COQUEIRAL13, COQUEIRAL7, NAOCA, CASA71, CAJU, SANMARCO, CASA14, CASA09, BOSSA, TUA, IMBIRUCU, CASA42, CASA61, VILAS02, CASA80, ITAPO07, CASA96, CASA90, VILAS75, LIMOEIRO, BIRIBA, VILAMAR, BETTONI, PINI, AUREA, SAOJORGE, CAZA, ITAPO06, ITAPO04, ALEGRIA, PONTA, PG11, PG111, PG104, MANDACARU, PONTARB, FALESIA, RAIZES, PONTABARRA, FASANO10, FASANO16, FASANO17, VILAS26, GOLF58, FLORESTA, VILAS41, VILAS67, BOUTIQUE13, ARACUA, JACARANDA03, TEIU, GOLF25, PG50, CASAEDO, BALEIA, PG55, GOLF72, PITANGA, AFRICA, TEMPO07, TEMPO08, TEMPO06, BOSQUE, PATIO, PG32, PG45, LICURI, DIVINA, TRESMENINAS, PEROBA, MORENA, MOA, BRAGA, CUMARU, JACARANDA05, TB14, MACONDO, RICK);

export const WHATSAPP = '5573999141382';

// Lista de localizações gerada automaticamente a partir das casas cadastradas.
// Toda casa nova entra sozinha no filtro — não editar manualmente.
export const LOCATIONS = [...new Set(PROPERTIES.map(p => p.location))]
  .sort((a, b) => a.localeCompare(b, 'pt'));

// Diária de alta temporada em número (para o filtro de faixa de preço). null = sob consulta.
export function dailyPrice(p: Property): number | null {
  const m = p.price.pt.replace(/\./g, '').match(/R\$\s*(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// Deriva as características (checkboxes) de cada casa que não as tiver marcadas manualmente.
function deriveFeatures(p: Property): Feature[] {
  const blob = [p.location, p.description.pt, ...p.amenities.pt].join(' ').toLowerCase();
  const f = new Set<Feature>();
  if (/quadrado/.test(p.location.toLowerCase())) f.add('quadrado');
  if (/condomínio|terravista|pedro grande|estância|fasano|jacarandá|coqueiral|aldeia|bosque|altos/i.test(p.location)) f.add('condominio');
  if (/pé na areia|beira-mar|frente mar/.test(blob)) f.add('pe-na-areia');
  if (/vista (panorâmica )?para o mar|vista do mar|vista para o oceano/.test(blob)) f.add('vista-mar');
  if (/piscina/.test(blob)) f.add('piscina');
  return [...f];
}
for (const p of PROPERTIES) { p.features ??= deriveFeatures(p); }
