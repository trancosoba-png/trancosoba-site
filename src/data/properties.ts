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
  holidayPrice?: { pt: string; en: string };
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
  /** Se true, o tarifário informa que a taxa de serviço já está inclusa (padrão: não inclui 10%). */
  serviceFeeIncluded?: boolean;
  /** Detalhes de localização em texto (condomínio, rua, quadra, lote etc.) exibidos na seção "Localização". */
  locationDetail?: { pt: string; en: string };
  /** Características usadas nas caixinhas do filtro "Mais filtros". Se ausente, são derivadas automaticamente. */
  features?: Feature[];
}

const GOLF28: Property = {
  id: 'terravista-golf-28', code: 'TBA-368', name: { pt: 'Terravista 28', en: 'Terravista 28' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Golf', suites: 4, guests: 8, baths: 5, area: '559,94 m²',
  price: { pt: 'Sob consulta', en: 'On request' },
  priceLow: { pt: 'Sob consulta', en: 'On request' },
  carnaval: { pt: 'Sob consulta', en: 'On request' },
  reveillon: { pt: 'Sob consulta', en: 'On request' },
  salePrice: { pt: 'R$ 12.000.000', en: 'R$ 12,000,000' },
  image: '/img/golf28/01.jpg',
  gallery: ['/img/golf28/01.webp','/img/golf28/02.webp','/img/golf28/03.webp','/img/golf28/04.webp','/img/golf28/05.webp','/img/golf28/06.webp','/img/golf28/07.webp','/img/golf28/08.webp','/img/golf28/09.webp','/img/golf28/10.webp','/img/golf28/11.webp','/img/golf28/12.webp','/img/golf28/13.webp','/img/golf28/14.webp','/img/golf28/15.webp','/img/golf28/16.webp','/img/golf28/17.webp','/img/golf28/18.webp','/img/golf28/19.webp','/img/golf28/20.webp','/img/golf28/21.webp','/img/golf28/22.webp','/img/golf28/23.webp','/img/golf28/24.webp','/img/golf28/25.webp','/img/golf28/26.webp','/img/golf28/27.webp','/img/golf28/28.webp','/img/golf28/29.webp','/img/golf28/30.webp','/img/golf28/31.webp','/img/golf28/32.webp','/img/golf28/33.webp','/img/golf28/34.webp','/img/golf28/35.webp','/img/golf28/36.webp','/img/golf28/37.webp','/img/golf28/38.webp','/img/golf28/39.webp','/img/golf28/40.webp','/img/golf28/41.webp','/img/golf28/42.webp','/img/golf28/43.webp','/img/golf28/44.webp','/img/golf28/45.webp','/img/golf28/46.webp','/img/golf28/47.webp','/img/golf28/48.webp','/img/golf28/49.webp','/img/golf28/50.webp','/img/golf28/51.webp','/img/golf28/52.webp','/img/golf28/53.webp','/img/golf28/54.webp','/img/golf28/55.webp','/img/golf28/56.webp','/img/golf28/57.webp','/img/golf28/58.webp','/img/golf28/59.webp','/img/golf28/60.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet', 'Varanda e jardim integrados aos ambientes sociais', 'Vista para o lago e o campo de golfe', 'Sala de estar e sala de jantar integradas', '4 suítes: 2 com cama de casal e 2 com camas de solteiro conversíveis em cama de casal'],
    en: ['Private pool', 'Gourmet area', 'Veranda and garden integrated with the social areas', 'Lake and golf course views', 'Integrated living and dining rooms', '4 suites: 2 with double bed and 2 with twin beds convertible to double'],
  },
  staff: { pt: ['1 cozinheira', '1 arrumadeira'], en: ['1 cook', '1 housekeeper'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Villavista Golf, em Trancoso, um dos condomínios mais exclusivos da região, com segurança 24 horas e acesso privilegiado ao campo de golfe do Terravista.', en: 'In Villavista Golf, Trancoso, one of the most exclusive condominiums in the region, with 24-hour security and privileged access to the Terravista golf course.' },
  description: {
    pt: 'A Terravista Golf 28 ocupa uma posição privilegiada no Villavista Golf, em Trancoso, com uma atmosfera marcada por privacidade, natureza e belas perspectivas para o lago e o campo de golfe. A residência foi pensada para proporcionar dias tranquilos, com conforto e espaços convidativos para aproveitar a estadia em família ou entre amigos.\n\nCom 4 suítes bem distribuídas, a casa acomoda até 8 hóspedes. Duas suítes possuem cama de casal e outras duas contam com duas camas de solteiro que podem ser convertidas em cama de casal, oferecendo flexibilidade para diferentes composições de hóspedes.\n\nOs ambientes sociais se conectam de forma natural à varanda e ao jardim, criando uma sensação agradável de amplitude. Na área externa, piscina e espaço gourmet formam o principal ponto de convivência da casa, ideal para refeições, momentos de descanso e encontros descontraídos.\n\nInserida em um dos condomínios mais exclusivos da região, a propriedade combina segurança 24 horas, contato próximo com a natureza e acesso privilegiado ao campo de golfe do Terravista.',
    en: 'Terravista Golf 28 occupies a privileged position in Villavista Golf, in Trancoso, with an atmosphere marked by privacy, nature and beautiful views of the lake and the golf course. The residence was designed to provide peaceful days, with comfort and inviting spaces to enjoy the stay with family or friends.\n\nWith 4 well-distributed suites, the house accommodates up to 8 guests. Two suites have a double bed and the other two have two single beds that can be converted into a double bed, offering flexibility for different guest arrangements.\n\nThe social areas connect naturally to the veranda and the garden, creating a pleasant feeling of spaciousness. Outside, the pool and gourmet area form the main gathering point of the house, ideal for meals, moments of rest and relaxed get-togethers.\n\nSet in one of the most exclusive condominiums in the region, the property combines 24-hour security, close contact with nature and privileged access to the Terravista golf course.',
  },
  notes: { pt: ['Acomodações: 2 suítes com cama de casal e 2 suítes com duas camas de solteiro conversíveis em cama de casal.', 'Tarifas de locação sob consulta (Carnaval, alta e baixa temporada, Réveillon).', 'Disponível para aluguel e venda. Valor de venda: R$ 12.000.000.'], en: ['Accommodations: 2 suites with double bed and 2 suites with two single beds convertible to double.', 'Rental rates on request (Carnival, high and low season, New Year\'s).', 'Available for rent and sale. Sale price: R$ 12,000,000.'] },
};
const TVB12: Property = {
  id: 'terravista-boutique-casa-12', code: 'TBA-369', name: { pt: 'Terravista Boutique 12', en: 'Terravista Boutique 12' },
  purpose: ['aluguel'], location: 'Terravista Boutique', suites: 5, guests: 12, baths: 5, area: '2.038 m² (terreno)',
  price: { pt: 'R$ 6.600 / diária', en: 'R$ 6,600 / night' },
  priceLow: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  carnaval: { pt: 'R$ 44.000 / pacote', en: 'R$ 44,000 / package' },
  reveillon: { pt: 'R$ 275.000 / pacote', en: 'R$ 275,000 / package' },
  image: '/img/tvb12/01.jpg',
  gallery: ['/img/tvb12/01.webp','/img/tvb12/02.webp','/img/tvb12/03.webp','/img/tvb12/04.webp','/img/tvb12/05.webp','/img/tvb12/06.webp','/img/tvb12/07.webp','/img/tvb12/08.webp','/img/tvb12/09.webp','/img/tvb12/10.webp','/img/tvb12/11.webp','/img/tvb12/12.webp','/img/tvb12/13.webp','/img/tvb12/14.webp','/img/tvb12/15.webp','/img/tvb12/16.webp','/img/tvb12/17.webp','/img/tvb12/18.webp','/img/tvb12/19.webp','/img/tvb12/20.webp','/img/tvb12/21.webp','/img/tvb12/22.webp','/img/tvb12/23.webp','/img/tvb12/24.webp','/img/tvb12/25.webp','/img/tvb12/26.webp','/img/tvb12/27.webp','/img/tvb12/28.webp','/img/tvb12/29.webp','/img/tvb12/30.webp','/img/tvb12/31.webp'], featured: false,
  amenities: {
    pt: ['Piscina com vista para o mar', 'Solário com vista para o oceano', 'Mirante', 'Adega de vinhos', 'Espaço gourmet e churrasqueira', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Geladeira de cerveja e máquina de gelo', 'Lavabo e lavanderia', 'Internet Wi-Fi e som ambiente', 'Ar-condicionado e mosquiteiros', 'Duchas parcialmente ao ar livre', 'Frigobar', 'Gerador', 'Apoio de praia na Praia das Tartarugas', 'Kids friendly', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia', 'Estacionamento'],
    en: ['Pool with ocean view', 'Sun deck overlooking the ocean', 'Viewpoint', 'Wine cellar', 'Gourmet area and barbecue', 'Living, dining and TV rooms', 'Equipped kitchen', 'Beer fridge and ice maker', 'Powder room and laundry', 'Wi-Fi internet and ambient sound', 'Air conditioning and mosquito nets', 'Partially open-air showers', 'Minibar', 'Generator', 'Beach service at Praia das Tartarugas', 'Kids friendly', 'Bed, table and bath linens', 'Pool and beach towels', 'Parking'],
  },
  staff: { pt: ['1 arrumadeira', '1 cozinheira'], en: ['1 housekeeper', '1 cook'] },
  features: ['condominio', 'piscina', 'vista-mar'],
  locationDetail: { pt: 'No Complexo Terravista, no alto das falésias e a aproximadamente 350 metros do mar, com campo de golfe, pista de pouso, restaurantes e apoio de praia na Praia das Tartarugas.', en: 'In the Terravista Complex, on top of the cliffs and approximately 350 meters from the sea, with golf course, airstrip, restaurants and beach service at Praia das Tartarugas.' },
  description: {
    pt: 'Em uma das áreas mais exclusivas de Trancoso, a Terravista Golf Boutique - Casa 12 reúne privacidade, conforto e uma relação privilegiada com a paisagem. Implantada no alto das falésias e a aproximadamente 350 metros do mar, a residência aproveita a ventilação constante e oferece amplas vistas para o oceano.\n\nA vista para o mar acompanha diferentes ambientes da casa e é um dos seus principais diferenciais. Piscina, dormitórios, áreas sociais e, sobretudo, o solário foram posicionados para valorizar o horizonte e criar uma atmosfera de descanso conectada à natureza.\n\nCom decoração inspirada em referências regionais, a casa dispõe de 5 suítes, além de uma suíte de apoio, e acomoda até 12 hóspedes. Alguns dos banheiros contam com duchas parcialmente ao ar livre, integradas à vegetação, trazendo uma experiência agradável de banho e contato com o entorno.\n\nDurante a estadia, os hóspedes também podem usufruir da infraestrutura do Complexo Terravista, que inclui campo de golfe, pista de pouso, restaurantes e apoio de praia na Praia das Tartarugas.',
    en: 'In one of the most exclusive areas of Trancoso, Terravista Golf Boutique - Casa 12 brings together privacy, comfort and a privileged relationship with the landscape. Set on top of the cliffs and approximately 350 meters from the sea, the residence enjoys constant ventilation and offers wide ocean views.\n\nThe sea view accompanies different areas of the house and is one of its main highlights. The pool, bedrooms, social areas and, above all, the sun deck were positioned to value the horizon and create an atmosphere of rest connected to nature.\n\nWith decor inspired by regional references, the house has 5 suites, plus a support suite, and accommodates up to 12 guests. Some of the bathrooms have partially open-air showers integrated into the vegetation, bringing a pleasant bathing experience in contact with the surroundings.\n\nDuring the stay, guests can also enjoy the infrastructure of the Terravista Complex, which includes a golf course, airstrip, restaurants and beach service at Praia das Tartarugas.',
  },
  notes: { pt: ['Suíte 01: cama king size, mosquiteiro, closet e ar-condicionado. Suíte 02: cama de casal conversível em duas de solteiro, 1 cama de solteiro adicional, mosquiteiro, closet e ar-condicionado. Suíte 03: cama de casal conversível em duas de solteiro, 1 cama de solteiro adicional, mosquiteiro e ar-condicionado. Suítes 04 e 05: cama king size, mosquiteiro, closet, frigobar e ar-condicionado. Suíte de apoio disponível como acomodação complementar.', 'Locação mínima: 5 diárias. Pets não são permitidos.', 'Os valores não incluem 10% de taxa de serviço. No Réveillon, taxa de serviço de 5% acrescentada ao valor do pacote.', 'Feriados: R$ 6.600 por diária.'], en: ['Suite 01: king size bed, mosquito net, closet and air conditioning. Suite 02: double bed convertible into two singles, 1 additional single bed, mosquito net, closet and air conditioning. Suite 03: double bed convertible into two singles, 1 additional single bed, mosquito net and air conditioning. Suites 04 and 05: king size bed, mosquito net, closet, minibar and air conditioning. Support suite available as complementary accommodation.', 'Minimum stay: 5 nights. Pets are not allowed.', 'Rates do not include 10% service fee. For New Year\'s, a 5% service fee is added to the package value.', 'Holidays: R$ 6,600 per night.'] },
};

const VILAS39: Property = {
  id: 'terravista-vilas-39', code: 'TBA-370', name: { pt: 'Terravista Vilas 39', en: 'Terravista Vilas 39' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 3, guests: 7, baths: 3, area: '250 m²',
  price: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  priceLow: { pt: 'R$ 3.000 / diária', en: 'R$ 3,000 / night' },
  carnaval: { pt: 'R$ 28.500 / pacote', en: 'R$ 28,500 / package' },
  reveillon: { pt: 'Sob consulta', en: 'On request' },
  image: '/img/terravista-vilas-39/01.jpg',
  gallery: ['/img/terravista-vilas-39/01.webp','/img/terravista-vilas-39/02.webp','/img/terravista-vilas-39/03.webp','/img/terravista-vilas-39/04.webp','/img/terravista-vilas-39/05.webp','/img/terravista-vilas-39/06.webp','/img/terravista-vilas-39/07.webp','/img/terravista-vilas-39/08.webp','/img/terravista-vilas-39/09.webp','/img/terravista-vilas-39/10.webp','/img/terravista-vilas-39/11.webp','/img/terravista-vilas-39/12.webp','/img/terravista-vilas-39/13.webp','/img/terravista-vilas-39/14.webp','/img/terravista-vilas-39/15.webp','/img/terravista-vilas-39/16.webp','/img/terravista-vilas-39/17.webp','/img/terravista-vilas-39/18.webp','/img/terravista-vilas-39/19.webp','/img/terravista-vilas-39/20.webp','/img/terravista-vilas-39/21.webp','/img/terravista-vilas-39/22.webp','/img/terravista-vilas-39/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet integrada à piscina', 'Varandas nas suítes do piso superior', 'Ar-condicionado em todas as suítes', 'Mosquiteiros', 'Cofre (suíte 1)', 'TV e frigobar (suíte 3)', 'Secadores de cabelo'],
    en: ['Private pool', 'Gourmet area integrated with the pool', 'Verandas in the upper-floor suites', 'Air conditioning in all suites', 'Mosquito nets', 'Safe (suite 1)', 'TV and minibar (suite 3)', 'Hairdryers'],
  },
  staff: { pt: ['1 arrumadeira'], en: ['1 housekeeper'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Terravista Vilas, próxima à Praia das Tartarugas, uma das áreas de praia mais preservadas da região.', en: 'In Terravista Vilas, close to Praia das Tartarugas, one of the most preserved beach areas in the region.' },
  description: {
    pt: 'A Terravista Vilas 39 é uma residência contemporânea cercada pelo verde de Trancoso, criada para quem busca uma estadia confortável, reservada e com atmosfera acolhedora. A integração entre os ambientes e a proximidade com a natureza tornam a casa uma ótima escolha para dias de descanso em família ou entre amigos.\n\nCom três suítes e um quarto adicional, a propriedade acomoda até 7 hóspedes. Os espaços foram pensados para oferecer praticidade no dia a dia, sem abrir mão de privacidade e conforto.\n\nA área gourmet integrada à piscina cria um ambiente agradável para aproveitar a casa ao longo do dia. É um espaço ideal para refeições descontraídas, churrascos, encontros em família ou simplesmente para relaxar à beira da piscina.\n\nA propriedade está próxima à Praia das Tartarugas, facilitando o acesso a uma das áreas de praia mais preservadas da região e permitindo combinar com facilidade dias de mar e momentos de descanso na casa.',
    en: 'Terravista Vilas 39 is a contemporary residence surrounded by the greenery of Trancoso, created for those seeking a comfortable, reserved stay with a welcoming atmosphere. The integration between the spaces and the proximity to nature make the house a great choice for days of rest with family or friends.\n\nWith three suites and an additional bedroom, the property accommodates up to 7 guests. The spaces were designed to offer practicality in everyday life, without giving up privacy and comfort.\n\nThe gourmet area integrated with the pool creates a pleasant environment to enjoy the house throughout the day. It is an ideal space for relaxed meals, barbecues, family gatherings or simply to relax by the pool.\n\nThe property is close to Praia das Tartarugas, making it easy to access one of the most preserved beach areas in the region and allowing you to easily combine days at the sea with moments of rest at the house.',
  },
  notes: { pt: ['Piso superior — Suíte 01: cama king size, mosquiteiro, closet, cofre, secador de cabelo, ar-condicionado e varanda. Suíte 02: duas camas de solteiro conversíveis em cama de casal, mosquiteiro, armário, secador de cabelo, ar-condicionado e varanda. Piso térreo — Suíte 03: cama king size, mosquiteiro, armário, TV, frigobar, secador de cabelo e ar-condicionado.', 'Locação mínima: 3 diárias.', 'Réveillon (pacote de 10 dias): valor sob consulta.'], en: ['Upper floor — Suite 01: king size bed, mosquito net, closet, safe, hairdryer, air conditioning and veranda. Suite 02: two single beds convertible to double, mosquito net, wardrobe, hairdryer, air conditioning and veranda. Ground floor — Suite 03: king size bed, mosquito net, wardrobe, TV, minibar, hairdryer and air conditioning.', 'Minimum stay: 3 nights.', 'New Year\'s (10-night package): value on request.'] },
};

const FAZENDA29: Property = {
  id: 'fazenda-rio-da-barra-29', code: 'TBA-371', name: { pt: 'Fazenda Rio da Barra 29', en: 'Fazenda Rio da Barra 29' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 6, guests: 12, baths: 7, area: '2.500 m² (terreno)',
  price: { pt: 'R$ 15.400 / diária', en: 'R$ 15,400 / night' },
  priceLow: { pt: 'R$ 13.200 / diária', en: 'R$ 13,200 / night' },
  carnaval: { pt: 'R$ 110.000 / pacote', en: 'R$ 110,000 / package' },
  reveillon: { pt: 'R$ 605.000 / pacote', en: 'R$ 605,000 / package' },
  holidayPrice: { pt: 'R$ 15.200 / diária', en: 'R$ 15,200 / night' },
  image: '/img/fazenda29/01.jpg',
  gallery: ['/img/fazenda29/01.webp','/img/fazenda29/02.webp','/img/fazenda29/03.webp','/img/fazenda29/04.webp','/img/fazenda29/05.webp','/img/fazenda29/06.webp','/img/fazenda29/07.webp','/img/fazenda29/08.webp','/img/fazenda29/09.webp','/img/fazenda29/10.webp','/img/fazenda29/11.webp','/img/fazenda29/12.webp','/img/fazenda29/13.webp','/img/fazenda29/14.webp','/img/fazenda29/15.webp','/img/fazenda29/16.webp','/img/fazenda29/17.webp','/img/fazenda29/18.webp','/img/fazenda29/19.webp','/img/fazenda29/20.webp','/img/fazenda29/21.webp','/img/fazenda29/22.webp','/img/fazenda29/23.webp','/img/fazenda29/24.webp','/img/fazenda29/25.webp','/img/fazenda29/26.webp'], featured: false,
  amenities: {
    pt: ['Academia', 'Adega de vinhos', 'Apoio de praia', 'Ar-condicionado', 'Carrinho de golfe (pick up)', 'Cervejeira', 'Churrasqueira', 'Cozinha equipada', 'Espaço gourmet', 'Espreguiçadeiras e ombrelone', 'Estacionamento', 'Forno de pizza', 'Freezer', 'Gerador', 'Internet Wi-Fi', 'Jacuzzi', 'Kayak', 'Kids friendly', 'Lavabo', 'Lavanderia', 'Máquina de gelo', 'Mirante', 'Netflix', 'Piscina', 'Quarto de apoio', 'Roupas de cama, mesa e banho', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Secador de cabelo', 'Som ambiente', 'Toalha de piscina', 'Toalha de praia', 'TV'],
    en: ['Gym', 'Wine cellar', 'Beach support', 'Air conditioning', 'Golf cart (pick up)', 'Beer cooler', 'Barbecue', 'Equipped kitchen', 'Gourmet area', 'Sun loungers and parasol', 'Parking', 'Pizza oven', 'Freezer', 'Generator', 'Wi-Fi internet', 'Jacuzzi', 'Kayak', 'Kids friendly', 'Guest toilet', 'Laundry', 'Ice maker', 'Viewpoint', 'Netflix', 'Swimming pool', 'Staff bedroom', 'Bed, table and bath linens', 'Living room', 'Dining room', 'TV room', 'Hairdryer', 'Ambient sound', 'Pool towels', 'Beach towels', 'TV'],
  },
  staff: { pt: ['2 arrumadeiras', '1 ajudante de cozinha', '1 cozinheira', '2 garçons/copeiros'], en: ['2 housekeepers', '1 kitchen assistant', '1 cook', '2 waiters'] },
  features: ['condominio', 'piscina', 'vista-mar'],
  locationDetail: { pt: 'No Condomínio Fazenda Rio da Barra, lote 29, perto da Praia do Rio da Barra, em Trancoso.', en: 'In the Fazenda Rio da Barra Condominium, lot 29, near Rio da Barra Beach, in Trancoso.' },
  description: {
    pt: 'Localizada no exclusivo Condomínio do Rio da Barra, esta casa oferece uma deslumbrante vista para o mar, situada em um amplo gramado dentro de uma fazenda de seringueiras. O terreno foi cuidadosamente escolhido para proporcionar total privacidade, excelente ventilação e uma vista ampla, em meio à exuberante Mata Atlântica.\n\nProjetada pela arquiteta Julia Regis Bittencourt, a residência está voltada para a Praia do Rio da Barra — uma das mais belas e preservadas da região. A casa conta com 06 suítes espaçosas, academia, piscina e jacuzzi, oferecendo conforto e sofisticação em meio à natureza.\n\nArquitetura: Julia Regis Bittencourt',
    en: 'Located in the exclusive Rio da Barra Condominium, this house offers a stunning ocean view, set on a wide lawn within a rubber tree farm. The plot was carefully chosen to provide total privacy, excellent ventilation and a wide view, amid the lush Atlantic Forest.\n\nDesigned by architect Julia Regis Bittencourt, the residence faces Rio da Barra Beach — one of the most beautiful and preserved in the region. The house features 06 spacious suites, gym, swimming pool and jacuzzi, offering comfort and sophistication surrounded by nature.\n\nArchitecture: Julia Regis Bittencourt',
  },
  notes: { pt: ['Área construída: 1.213 m². Capacidade para 12 pessoas em 14 camas.', 'Piso superior — Suíte Máster: 01 cama de casal king size, ar-condicionado, secador de cabelo, armário para roupas e varanda com sofás. Suíte 02: 02 camas de solteiro conversíveis em cama de casal, ar-condicionado, secador de cabelo e armário. Suíte 03: 02 camas de solteiro conversíveis em cama de casal, ar-condicionado, secador de cabelo e armário. Piso térreo — Suíte 04: 02 camas de solteiro conversíveis em cama de casal, 02 camas de apoio, ar-condicionado, secador de cabelo e armário. Suíte 05: 02 camas de casal king size, 02 camas de apoio, ar-condicionado, secador de cabelo e armário. Suíte 06: 01 cama de casal king size, 02 camas de apoio, ar-condicionado, secador de cabelo e armário.', 'Locação mínima: 4 diárias. Diária de feriados: R$ 15.200.', 'Não é permitido pet.', 'Preços não incluem 10% de taxa de serviço.'], en: ['Built area: 1,213 m². Sleeps 12 guests in 14 beds.', 'Upper floor — Master Suite: 01 king size double bed, air conditioning, hairdryer, wardrobe and veranda with sofas. Suite 02: 02 single beds convertible to double, air conditioning, hairdryer and wardrobe. Suite 03: 02 single beds convertible to double, air conditioning, hairdryer and wardrobe. Ground floor — Suite 04: 02 single beds convertible to double, 02 extra beds, air conditioning, hairdryer and wardrobe. Suite 05: 02 king size double beds, 02 extra beds, air conditioning, hairdryer and wardrobe. Suite 06: 01 king size double bed, 02 extra beds, air conditioning, hairdryer and wardrobe.', 'Minimum stay: 4 nights. Holiday nightly rate: R$ 15,200.', 'Pets are not allowed.', 'Prices do not include 10% service fee.'] },
};

const BUENAVISTA: Property = {
  id: 'casa-buena-vista-pedro-grande', code: 'TBA-372', name: { pt: 'Casa Buena Vista', en: 'Casa Buena Vista' },
  purpose: ['aluguel'], location: 'Condomínio Pedro Grande', suites: 4, guests: 12, baths: 5, area: '645 m² (terreno de 3.100 m²)',
  price: { pt: 'R$ 9.000 / diária', en: 'R$ 9,000 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'R$ 65.000 / pacote', en: 'R$ 65,000 / package' },
  reveillon: { pt: 'R$ 300.000 / pacote', en: 'R$ 300,000 / package' },
  image: '/img/buenavista/01.jpg',
  gallery: ['/img/buenavista/01.webp','/img/buenavista/02.webp','/img/buenavista/03.webp','/img/buenavista/04.webp','/img/buenavista/05.webp','/img/buenavista/06.webp','/img/buenavista/07.webp','/img/buenavista/08.webp','/img/buenavista/09.webp','/img/buenavista/10.webp','/img/buenavista/11.webp','/img/buenavista/12.webp','/img/buenavista/13.webp','/img/buenavista/14.webp','/img/buenavista/15.webp','/img/buenavista/16.webp','/img/buenavista/17.webp','/img/buenavista/18.webp','/img/buenavista/19.webp','/img/buenavista/20.webp','/img/buenavista/21.webp','/img/buenavista/22.webp','/img/buenavista/23.webp','/img/buenavista/24.webp','/img/buenavista/25.webp','/img/buenavista/26.webp','/img/buenavista/27.webp','/img/buenavista/28.webp','/img/buenavista/29.webp','/img/buenavista/30.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina privativa', 'Amplo gramado e jardim', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Ar-condicionado nos dormitórios', 'TV a cabo', 'Roupas de cama, mesa e banho', 'Chalé anexo independente'],
    en: ['Ocean view', 'Private pool', 'Wide lawn and garden', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Air conditioning in the bedrooms', 'Cable TV', 'Bed, table and bath linens', 'Independent guest bungalow'],
  },
  staff: { pt: ['1 arrumadeira', '1 cozinheira'], en: ['1 housekeeper', '1 cook'] },
  features: ['condominio', 'piscina', 'vista-mar'],
  locationDetail: { pt: 'No Condomínio Pedro Grande, em Trancoso, região cercada por natureza e próxima à Praia do Rio da Barra.', en: 'In the Pedro Grande Condominium, in Trancoso, surrounded by nature and close to Rio da Barra Beach.' },
  description: {
    pt: 'Localizada no Condomínio Pedro Grande, a Casa Buena Vista combina a atmosfera natural de Trancoso com uma vista privilegiada para a Praia do Rio da Barra. Cercada por vegetação tropical e amplo gramado, a residência oferece privacidade, conforto e uma agradável integração entre os ambientes internos e externos.\n\nA arquitetura valoriza materiais de inspiração regional e espaços abertos. A piscina, emoldurada pelo jardim, cria um cenário convidativo para os dias de descanso, enquanto as salas de estar, jantar e TV completam a estrutura para famílias e grupos de amigos.',
    en: 'Located in the Pedro Grande Condominium, Casa Buena Vista combines the natural atmosphere of Trancoso with a privileged view of Rio da Barra Beach. Surrounded by tropical vegetation and a wide lawn, the residence offers privacy, comfort and a pleasant integration between indoor and outdoor spaces.\n\nThe architecture values regionally inspired materials and open spaces. The pool, framed by the garden, creates an inviting setting for days of rest, while the living, dining and TV rooms complete the structure for families and groups of friends.',
  },
  notes: { pt: ['Casa principal: 4 suítes climatizadas, com cama queen size e TV a cabo. Chalé anexo: 2 quartos climatizados, um com cama de casal e outro com 2 camas de solteiro, banheiro compartilhado, sala de estar e cozinha americana. Capacidade: até 12 hóspedes.', 'Horários, folgas e eventuais serviços extras do staff devem ser confirmados no momento da reserva.'], en: ['Main house: 4 air-conditioned suites with queen size bed and cable TV. Guest bungalow: 2 air-conditioned bedrooms, one with a double bed and one with 2 single beds, shared bathroom, living room and open-plan kitchen. Capacity: up to 12 guests.', 'Staff hours, days off and any extra services must be confirmed at booking.'] },
};
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
  id: 'casa-09-itapororoca', code: 'TBA-205', name: { pt: 'Casa 9 — Aldeia Itapororoca', en: 'Casa 9 — Aldeia Itapororoca' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 7, guests: 14, baths: 8, area: '550 m²',
  price: { pt: 'R$ 27.500 / diária', en: 'R$ 27,500 / night' },
  priceLow: { pt: 'R$ 19.500 / diária', en: 'R$ 19,500 / night' },
  reveillon: { pt: 'R$ 850.000', en: 'R$ 850,000' },
  image: '/img/casa09/28.jpg',
  gallery: ['/img/casa09/28.webp','/img/casa09/01.webp','/img/casa09/02.webp','/img/casa09/03.webp','/img/casa09/04.webp','/img/casa09/05.webp','/img/casa09/06.webp','/img/casa09/07.webp','/img/casa09/08.webp','/img/casa09/09.webp','/img/casa09/10.webp','/img/casa09/11.webp','/img/casa09/12.webp','/img/casa09/13.webp','/img/casa09/14.webp','/img/casa09/15.webp','/img/casa09/16.webp','/img/casa09/17.webp','/img/casa09/18.webp','/img/casa09/19.webp','/img/casa09/20.webp','/img/casa09/21.webp','/img/casa09/22.webp','/img/casa09/23.webp','/img/casa09/24.webp','/img/casa09/25.webp','/img/casa09/26.webp','/img/casa09/27.webp','/img/casa09/29.webp'], featured: false,
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
  id: 'terravista-golf-casa-42', code: 'TBA-209', name: { pt: 'Terravista 42', en: 'Terravista 42' },
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
  id: 'terravista-golf-casa-61', code: 'TBA-210', name: { pt: 'Terravista 61', en: 'Terravista 61' },
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
  id: 'terravista-vilas-casa-02', code: 'TBA-211', name: { pt: 'Terravista Vilas 02', en: 'Terravista Vilas 02' },
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
  id: 'terravista-golf-casa-80', code: 'TBA-212', name: { pt: 'Terravista 80', en: 'Terravista 80' },
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
  id: 'aldeia-itapororoca-casa-07', code: 'TBA-213', name: { pt: 'Casa 7 — Aldeia Itapororoca', en: 'Casa 7 — Aldeia Itapororoca' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 8, guests: 17, baths: 8, area: 'Praia de Itapororoca',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 605.000', en: 'R$ 605,000' },
  image: '/img/itapororoca07/11.jpg',
  gallery: ['/img/itapororoca07/11.webp','/img/itapororoca07/01.webp','/img/itapororoca07/02.webp','/img/itapororoca07/03.webp','/img/itapororoca07/04.webp','/img/itapororoca07/05.webp','/img/itapororoca07/06.webp','/img/itapororoca07/07.webp','/img/itapororoca07/08.webp','/img/itapororoca07/09.webp','/img/itapororoca07/10.webp','/img/itapororoca07/12.webp','/img/itapororoca07/13.webp','/img/itapororoca07/14.webp','/img/itapororoca07/15.webp','/img/itapororoca07/16.webp','/img/itapororoca07/17.webp','/img/itapororoca07/18.webp','/img/itapororoca07/19.webp','/img/itapororoca07/20.webp','/img/itapororoca07/21.webp','/img/itapororoca07/22.webp','/img/itapororoca07/23.webp','/img/itapororoca07/24.webp','/img/itapororoca07/25.webp','/img/itapororoca07/26.webp','/img/itapororoca07/27.webp','/img/itapororoca07/28.webp','/img/itapororoca07/29.webp','/img/itapororoca07/30.webp'], featured: false,
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
  id: 'terravista-golf-casa-96', code: 'TBA-214', name: { pt: 'Terravista 96', en: 'Terravista 96' },
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
  id: 'terravista-golf-casa-90', code: 'TBA-215', name: { pt: 'Terravista 90', en: 'Terravista 90' },
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
  gallery: ['/img/aurea/02.webp','/img/aurea/01.webp','/img/aurea/03.webp','/img/aurea/04.webp','/img/aurea/05.webp','/img/aurea/06.webp','/img/aurea/07.webp','/img/aurea/08.webp','/img/aurea/09.webp','/img/aurea/10.webp','/img/aurea/11.webp','/img/aurea/12.webp','/img/aurea/13.webp','/img/aurea/14.webp','/img/aurea/15.webp','/img/aurea/16.webp','/img/aurea/17.webp','/img/aurea/18.webp','/img/aurea/19.webp','/img/aurea/20.webp','/img/aurea/21.webp','/img/aurea/22.webp','/img/aurea/23.webp','/img/aurea/24.webp','/img/aurea/25.webp','/img/aurea/26.webp','/img/aurea/27.webp','/img/aurea/28.webp','/img/aurea/29.webp','/img/aurea/30.webp'], featured: false,
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
  id: 'aldeia-itapororoca-casa-06', code: 'TBA-225', name: { pt: 'Casa 6 — Aldeia Itapororoca', en: 'Casa 6 — Aldeia Itapororoca' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 4, guests: 8, baths: 5, area: 'Pé na areia',
  price: { pt: 'R$ 9.500 / diária', en: 'R$ 9,500 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'R$ 60.000', en: 'R$ 60,000' },
  reveillon: { pt: 'R$ 350.000', en: 'R$ 350,000' },
  image: '/img/itapororoca06/13.jpg',
  gallery: ['/img/itapororoca06/13.webp','/img/itapororoca06/01.webp','/img/itapororoca06/02.webp','/img/itapororoca06/03.webp','/img/itapororoca06/04.webp','/img/itapororoca06/05.webp','/img/itapororoca06/06.webp','/img/itapororoca06/07.webp','/img/itapororoca06/08.webp','/img/itapororoca06/09.webp','/img/itapororoca06/10.webp','/img/itapororoca06/11.webp','/img/itapororoca06/12.webp','/img/itapororoca06/14.webp','/img/itapororoca06/15.webp','/img/itapororoca06/16.webp','/img/itapororoca06/17.webp','/img/itapororoca06/18.webp','/img/itapororoca06/19.webp','/img/itapororoca06/20.webp','/img/itapororoca06/21.webp','/img/itapororoca06/22.webp','/img/itapororoca06/23.webp','/img/itapororoca06/24.webp','/img/itapororoca06/25.webp','/img/itapororoca06/26.webp','/img/itapororoca06/27.webp','/img/itapororoca06/28.webp','/img/itapororoca06/29.webp','/img/itapororoca06/30.webp'], featured: false,
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
  id: 'aldeia-itapororoca-casa-04', code: 'TBA-226', name: { pt: 'Casa 4 — Aldeia Itapororoca', en: 'Casa 4 — Aldeia Itapororoca' },
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
  id: 'casa-26-terravista-vilas', code: 'TBA-240', name: { pt: 'Terravista Vilas 26', en: 'Terravista Vilas 26' },
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
  id: 'terravista-golf-58', code: 'TBA-241', name: { pt: 'Terravista 58', en: 'Terravista 58' },
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
  id: 'casa-41-terravista-vilas', code: 'TBA-243', name: { pt: 'Terravista Vilas 41', en: 'Terravista Vilas 41' },
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
  id: 'terravista-boutique-casa-13', code: 'TBA-245', name: { pt: 'Terravista Boutique 13', en: 'Terravista Boutique 13' },
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
  id: 'terravista-golf-25', code: 'TBA-249', name: { pt: 'Terravista 25', en: 'Terravista 25' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 5, guests: 10, baths: 6, area: '—',
  price: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  priceLow: { pt: 'R$ 4.600 / diária', en: 'R$ 4,600 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 250.000', en: 'R$ 250,000' },
  image: '/img/golf25/01.jpg',
  gallery: ['/img/golf25/01.webp','/img/golf25/02.webp','/img/golf25/03.webp','/img/golf25/04.webp','/img/golf25/05.webp','/img/golf25/06.webp','/img/golf25/07.webp','/img/golf25/08.webp','/img/golf25/09.webp','/img/golf25/10.webp','/img/golf25/11.webp','/img/golf25/12.webp','/img/golf25/13.webp','/img/golf25/14.webp','/img/golf25/15.webp','/img/golf25/16.webp','/img/golf25/17.webp','/img/golf25/18.webp','/img/golf25/19.webp','/img/golf25/20.webp','/img/golf25/21.webp','/img/golf25/22.webp','/img/golf25/23.webp','/img/golf25/24.webp'], featured: false,
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
  id: 'terravista-golf-72', code: 'TBA-254', name: { pt: 'Terravista 72', en: 'Terravista 72' },
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
  purpose: ['aluguel'], location: 'Centro', suites: 3, guests: 6, baths: 3, area: '—',
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
  id: 'casa-peroba', code: 'TBA-267', name: { pt: 'Casa Coqueiral 3', en: 'Casa Coqueiral 3' },
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
    pt: 'A Casa Moa é um refúgio elegante e acolhedor no Condomínio Altos de Trancoso, onde arquitetura, natureza e conforto convivem em perfeita harmonia.\n\nCom ambientes leves e integrados, a residência foi pensada para proporcionar dias tranquilos em família ou entre amigos. A sala de estar e jantar se conecta à cozinha equipada e à varanda com espaço gourmet, criando uma área social agradável e funcional para diferentes momentos da estadia.\n\nNa área externa, o jardim tropical envolve a piscina e reforça a atmosfera de privacidade e bem-estar. A casa dispõe de três suítes climatizadas e acomoda confortavelmente até seis hóspedes, com possibilidade de receber uma sétima pessoa em colchão extra, mediante solicitação prévia.\n\nO staff inclui arrumadeira e profissional responsável pelo jardim e pela piscina, oferecendo mais praticidade durante a permanência. Uma escolha ideal para quem deseja viver Trancoso com charme, conforto e a tranquilidade de um condomínio reservado.',
    en: 'Casa Moa is an elegant and welcoming retreat in the Altos de Trancoso gated community, where architecture, nature and comfort live in perfect harmony.\n\nWith light and integrated spaces, the residence was designed to provide peaceful days with family or among friends. The living and dining room connects to the equipped kitchen and to the veranda with a gourmet area, creating a pleasant and functional social space for the different moments of the stay.\n\nOutside, the tropical garden surrounds the pool and reinforces the atmosphere of privacy and well-being. The house has three air-conditioned suites and comfortably accommodates up to six guests, with the possibility of hosting a seventh person on an extra mattress, upon prior request.\n\nThe staff includes a housekeeper and a professional responsible for the garden and the pool, offering more convenience during the stay. An ideal choice for those who wish to experience Trancoso with charm, comfort and the tranquility of a private community.',
  },
  staff: { pt: ['Arrumadeira', 'Cozinheira'], en: ['Housekeeper', 'Cook'] },
  notes: {
    pt: ['Réveillon: pacote de 10 diárias R$ 190.000.', 'Carnaval: pacote de 5 diárias R$ 35.000.', 'Valor de venda: R$ 7.500.000.'],
    en: ['New Year\'s Eve: 10-night package R$ 190,000.', 'Carnival: 5-night package R$ 35,000.', 'Sale price: R$ 7,500,000.'],
  },
};

const BRAGA: Property = {
  id: 'casa-braga', code: 'TBA-270', name: { pt: 'Casa Coqueiral 26', en: 'Casa Coqueiral 26' },
  purpose: ['aluguel', 'venda'], location: 'Condomínio Coqueiral', suites: 4, guests: 12, baths: 5, area: '250 m²',
  price: { pt: 'R$ 2.600 / diária', en: 'R$ 2,600 / night' },
  priceLow: { pt: 'R$ 2.100 / diária', en: 'R$ 2,100 / night' },
  carnaval: { pt: 'R$ 40.000', en: 'R$ 40,000' },
  reveillon: { pt: 'R$ 130.000', en: 'R$ 130,000' },
  salePrice: { pt: 'R$ 4.950.000', en: 'R$ 4,950,000' },
  image: '/img/braga/17.jpg',
  gallery: ['/img/braga/17.webp','/img/braga/02.webp','/img/braga/03.webp','/img/braga/04.webp','/img/braga/05.webp','/img/braga/06.webp','/img/braga/07.webp','/img/braga/08.webp','/img/braga/09.webp','/img/braga/10.webp','/img/braga/11.webp','/img/braga/12.webp','/img/braga/13.webp','/img/braga/14.webp','/img/braga/15.webp','/img/braga/16.webp','/img/braga/18.webp','/img/braga/19.webp','/img/braga/20.webp','/img/braga/21.webp','/img/braga/22.webp','/img/braga/23.webp','/img/braga/01.webp','/img/braga/24.webp','/img/braga/25.webp','/img/braga/26.webp','/img/braga/27.webp','/img/braga/28.webp','/img/braga/29.webp','/img/braga/30.webp','/img/braga/31.webp','/img/braga/32.webp','/img/braga/33.webp','/img/braga/34.webp','/img/braga/35.webp','/img/braga/36.webp','/img/braga/37.webp','/img/braga/38.webp','/img/braga/39.webp','/img/braga/40.webp','/img/braga/41.webp','/img/braga/42.webp','/img/braga/43.webp','/img/braga/44.webp','/img/braga/45.webp','/img/braga/46.webp'], featured: false,
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
  id: 'casa-cumaru', code: 'TBA-271', name: { pt: 'Colina — Casa 04', en: 'Colina — Casa 04' },
  purpose: ['aluguel'], location: 'Colina', suites: 6, guests: 12, baths: 6, area: '—',
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
  id: 'casa-14-terravista-boutique', code: 'TBA-273', name: { pt: 'Terravista 14', en: 'Terravista 14' },
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
  gallery: ['/img/coqueiral25/02.webp','/img/coqueiral25/03.webp','/img/coqueiral25/04.webp','/img/coqueiral25/05.webp','/img/coqueiral25/06.webp','/img/coqueiral25/07.webp','/img/coqueiral25/08.webp','/img/coqueiral25/09.webp','/img/coqueiral25/10.webp','/img/coqueiral25/11.webp','/img/coqueiral25/12.webp','/img/coqueiral25/13.webp','/img/coqueiral25/14.webp','/img/coqueiral25/15.webp','/img/coqueiral25/16.webp','/img/coqueiral25/17.webp','/img/coqueiral25/18.webp','/img/coqueiral25/19.webp','/img/coqueiral25/20.webp','/img/coqueiral25/21.webp','/img/coqueiral25/22.webp','/img/coqueiral25/23.webp','/img/coqueiral25/24.webp','/img/coqueiral25/25.webp','/img/coqueiral25/26.webp','/img/coqueiral25/27.webp','/img/coqueiral25/28.webp','/img/coqueiral25/29.webp'], featured: false,
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

const CASAMAR: Property = {
  id: 'casa-casamar-altos-de-trancoso', code: 'TBA-300', name: { pt: 'Casa Casamar', en: 'Casa Casamar' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 4, area: '360 m²',
  price: { pt: 'R$ 5.800 / diária', en: 'R$ 5,800 / night' },
  priceLow: { pt: 'R$ 4.800 / diária', en: 'R$ 4,800 / night' },
  carnaval: { pt: 'R$ 55.000 (pacote especial)', en: 'R$ 55,000 (special package)' },
  reveillon: { pt: 'R$ 190.000 (pacote especial)', en: 'R$ 190,000 (special package)' },
  image: '/img/casamar/01.jpg',
  gallery: ['/img/casamar/01.webp','/img/casamar/02.webp','/img/casamar/03.webp','/img/casamar/04.webp','/img/casamar/05.webp','/img/casamar/06.webp','/img/casamar/07.webp','/img/casamar/08.webp','/img/casamar/09.webp','/img/casamar/10.webp','/img/casamar/11.webp','/img/casamar/12.webp','/img/casamar/13.webp','/img/casamar/14.webp','/img/casamar/15.webp','/img/casamar/16.webp','/img/casamar/17.webp','/img/casamar/18.webp','/img/casamar/19.webp','/img/casamar/20.webp','/img/casamar/21.webp','/img/casamar/22.webp','/img/casamar/23.webp','/img/casamar/24.webp','/img/casamar/25.webp','/img/casamar/26.webp','/img/casamar/27.webp','/img/casamar/28.webp','/img/casamar/29.webp','/img/casamar/30.webp','/img/casamar/31.webp','/img/casamar/32.webp','/img/casamar/33.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet', 'Churrasqueira', 'Adega de vinhos', 'Cervejeira', 'Cozinha equipada', 'Sala de estar', 'Sala de jantar', 'Sala de massagem', 'Lavabo', 'Ar-condicionado', 'Cofres nas suítes', 'Mosquiteiros', 'TV', 'Netflix', 'Internet Wi-Fi', 'Som ambiente', 'Conexão de som para iPod', 'Frigobar', 'Freezer', 'Espreguiçadeiras e ombrelone', 'Toalhas de piscina', 'Toalhas de praia', 'Roupas de cama, mesa e banho', 'Secador de cabelo', 'Lavanderia', 'Kids friendly', 'Estacionamento', 'Poço artesiano', 'Extintor'],
    en: ['Private pool', 'Gourmet area', 'Barbecue', 'Wine cellar', 'Beer fridge', 'Equipped kitchen', 'Living room', 'Dining room', 'Massage room', 'Guest bathroom', 'Air conditioning', 'Safes in the suites', 'Mosquito nets', 'TV', 'Netflix', 'Wi-Fi internet', 'Ambient sound', 'iPod sound connection', 'Minibar', 'Freezer', 'Sun loungers and parasol', 'Pool towels', 'Beach towels', 'Bed, table and bath linen', 'Hair dryer', 'Laundry', 'Kids friendly', 'Parking', 'Artesian well', 'Fire extinguisher'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 auxiliar de cozinha', '1 cozinheira'],
    en: ['1 housekeeper', '1 kitchen assistant', '1 cook'],
  },
  description: {
    pt: 'A Casa Casamar, localizada no Condomínio Altos de Trancoso, é um projeto autoral cuidadosamente desenvolvido para oferecer uma experiência singular de hospedagem. Cada detalhe foi pensado de forma integrada, desde a concepção dos ambientes até o desenho dos revestimentos, portas, esquadrias, mobiliário e acessórios.\n\nO resultado é uma residência única, onde arquitetura, decoração e paisagismo dialogam com equilíbrio. Os espaços apresentam uma estética contemporânea, acolhedora e elegante, valorizando materiais naturais e a atmosfera inconfundível de Trancoso.\n\nOs banheiros se destacam pela amplitude e sofisticação, criando ambientes voltados ao bem-estar e à comodidade. Nas suítes, conforto e privacidade são prioridades: todas contam com TV, armários espaçosos, cortinas blackout e roupas de cama de alta qualidade, proporcionando noites tranquilas e restauradoras.',
    en: 'Casa Casamar, located in the Altos de Trancoso Condominium, is an authorial project carefully developed to offer a singular lodging experience. Every detail was conceived in an integrated way, from the design of the spaces to the design of the finishes, doors, window frames, furniture and accessories.\n\nThe result is a unique residence, where architecture, decoration and landscaping dialogue in balance. The spaces present a contemporary, welcoming and elegant aesthetic, valuing natural materials and the unmistakable atmosphere of Trancoso.\n\nThe bathrooms stand out for their spaciousness and sophistication, creating environments dedicated to well-being and comfort. In the suites, comfort and privacy are priorities: all feature TV, spacious closets, blackout curtains and high-quality bed linen, providing quiet and restorative nights.',
  },
  notes: { pt: ['Capacidade para até 8 hóspedes.', 'Locação mínima: 3 noites.', 'Não é permitida a hospedagem de pets.', 'Projeto autoral: arquitetura e decoração Juliana Nicolay; paisagismo Gabriel Bitencourt.', 'Valores de Réveillon e Carnaval correspondem a pacotes especiais e podem estar sujeitos a período mínimo de hospedagem e condições específicas de reserva.', 'Tarifas e disponibilidade sujeitas a confirmação.'], en: ['Capacity for up to 8 guests.', 'Minimum stay: 3 nights.', 'Pets are not allowed.', 'Authorial project: architecture and decoration by Juliana Nicolay; landscaping by Gabriel Bitencourt.', 'New Year\'s and Carnival rates correspond to special packages and may be subject to minimum stay and specific booking conditions.', 'Rates and availability subject to confirmation.'] },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, Trancoso – Bahia.',
    en: 'Altos de Trancoso Condominium, Trancoso – Bahia.',
  },
};

const ALMESCLA: Property = {
  id: 'casa-almescla-altos-de-trancoso', code: 'TBA-301', name: { pt: 'Casa Almescla', en: 'Casa Almescla' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 4, area: '—',
  price: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  priceLow: { pt: 'R$ 3.400 / diária', en: 'R$ 3,400 / night' },
  carnaval: { pt: 'R$ 40.000 (pacote especial)', en: 'R$ 40,000 (special package)' },
  reveillon: { pt: 'R$ 170.000 (pacote especial)', en: 'R$ 170,000 (special package)' },
  image: '/img/almescla/01.jpg',
  gallery: ['/img/almescla/01.webp','/img/almescla/02.webp','/img/almescla/03.webp','/img/almescla/04.webp','/img/almescla/05.webp','/img/almescla/06.webp','/img/almescla/07.webp','/img/almescla/08.webp','/img/almescla/09.webp','/img/almescla/10.webp','/img/almescla/11.webp','/img/almescla/12.webp','/img/almescla/13.webp','/img/almescla/14.webp','/img/almescla/15.webp','/img/almescla/16.webp','/img/almescla/17.webp','/img/almescla/18.webp','/img/almescla/19.webp','/img/almescla/20.webp','/img/almescla/21.webp','/img/almescla/22.webp','/img/almescla/23.webp','/img/almescla/24.webp','/img/almescla/25.webp','/img/almescla/26.webp','/img/almescla/27.webp','/img/almescla/28.webp','/img/almescla/29.webp'], featured: false,
  amenities: {
    pt: ['Piscina revestida com pedras de seixo', 'Espaço gourmet com churrasqueira', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Lavabo', 'Ar-condicionado', 'Ventiladores de teto', 'Mosquiteiros', 'Internet Wi-Fi', 'TV', 'TV a cabo', 'Sky', 'Netflix', 'Som ambiente', 'Sistema de som', 'Espreguiçadeiras', 'Toalhas de piscina', 'Toalhas de praia', 'Roupas de cama, mesa e banho', 'Secador de cabelo', 'Freezer', 'Lavanderia', 'Ambiente adequado para famílias', 'Estacionamento', 'Poço artesiano', 'Extintor', 'Condomínio com segurança'],
    en: ['Pool finished with pebble stones', 'Gourmet area with barbecue', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Guest bathroom', 'Air conditioning', 'Ceiling fans', 'Mosquito nets', 'Wi-Fi internet', 'TV', 'Cable TV', 'Sky', 'Netflix', 'Ambient sound', 'Sound system', 'Sun loungers', 'Pool towels', 'Beach towels', 'Bed, table and bath linen', 'Hair dryer', 'Freezer', 'Laundry', 'Family-friendly environment', 'Parking', 'Artesian well', 'Fire extinguisher', 'Gated community with security'],
  },
  staff: {
    pt: ['1 camareira'],
    en: ['1 housekeeper'],
  },
  description: {
    pt: 'A Casa Almescla, assinada pela arquiteta Cris Nogueira, revela uma interpretação elegante e acolhedora da arquitetura de Trancoso. Inserida em um terreno amplamente arborizado no Condomínio Altos de Trancoso, a residência se integra com naturalidade ao jardim tropical e oferece uma atmosfera de privacidade, tranquilidade e bem-estar.\n\nO projeto combina linhas simples, referências coloniais e materiais de demolição, criando ambientes cheios de identidade. A luz natural, a ventilação cruzada e a conexão fluida entre as áreas internas e externas reforçam a sensação de leveza presente em toda a propriedade.\n\nNo centro da casa, a piscina revestida com pedras de seixo funciona como ponto de encontro e elemento principal da composição. Ao seu redor estão os ambientes sociais, as áreas de descanso e os espaços destinados à convivência, todos voltados para o jardim e para a piscina.\n\nA área social oferece sala de estar, sala de jantar, sala de TV, cozinha equipada e espaço gourmet com churrasqueira. Com quatro suítes e capacidade para até oito hóspedes, a Casa Almescla proporciona uma experiência exclusiva no sul da Bahia, a poucos minutos do Quadrado Histórico e das praias dos Nativos e dos Coqueiros.',
    en: 'Casa Almescla, designed by architect Cris Nogueira, reveals an elegant and welcoming interpretation of Trancoso\'s architecture. Set on a widely wooded plot in the Altos de Trancoso Condominium, the residence blends naturally into the tropical garden and offers an atmosphere of privacy, tranquility and well-being.\n\nThe project combines simple lines, colonial references and reclaimed materials, creating spaces full of identity. Natural light, cross ventilation and the fluid connection between indoor and outdoor areas reinforce the feeling of lightness present throughout the property.\n\nAt the center of the house, the pool finished with pebble stones works as a meeting point and the main element of the composition. Around it are the social areas, rest areas and spaces for gathering, all facing the garden and the pool.\n\nThe social area offers a living room, dining room, TV room, equipped kitchen and gourmet area with barbecue. With four suites and capacity for up to eight guests, Casa Almescla provides an exclusive experience in southern Bahia, just a few minutes from the Historic Quadrado and the Nativos and Coqueiros beaches.',
  },
  notes: { pt: ['Capacidade máxima para 8 hóspedes.', 'Projeto assinado pela arquiteta Cris Nogueira.', 'Valores de Réveillon e Carnaval correspondem a pacotes especiais.', 'Tarifas, disponibilidade, período mínimo e condições da reserva estão sujeitos a confirmação.'], en: ['Maximum capacity for 8 guests.', 'Project designed by architect Cris Nogueira.', 'New Year\'s and Carnival rates correspond to special packages.', 'Rates, availability, minimum stay and booking conditions are subject to confirmation.'] },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, em uma região privilegiada e cercada pela natureza, com acesso conveniente ao Quadrado Histórico e às praias dos Nativos e dos Coqueiros.',
    en: 'Altos de Trancoso Condominium, in a privileged region surrounded by nature, with convenient access to the Historic Quadrado and the Nativos and Coqueiros beaches.',
  },
};

const CASAMARIA: Property = {
  id: 'casa-maria-rio-verde', code: 'TBA-302', name: { pt: 'Casa Maria', en: 'Casa Maria' },
  purpose: ['aluguel'], location: 'Praia do Rio Verde', suites: 3, guests: 6, baths: 3, area: '—',
  price: { pt: 'R$ 11.000 / diária', en: 'R$ 11,000 / night' },
  priceLow: { pt: 'R$ 9.000 / diária', en: 'R$ 9,000 / night' },
  carnaval: { pt: 'R$ 11.000 / diária', en: 'R$ 11,000 / night' },
  reveillon: { pt: 'R$ 350.000 (pacote especial)', en: 'R$ 350,000 (special package)' },
  image: '/img/casamaria/01.jpg',
  gallery: ['/img/casamaria/01.webp','/img/casamaria/02.webp','/img/casamaria/03.webp','/img/casamaria/04.webp','/img/casamaria/05.webp','/img/casamaria/06.webp','/img/casamaria/07.webp','/img/casamaria/08.webp','/img/casamaria/09.webp','/img/casamaria/10.webp','/img/casamaria/11.webp','/img/casamaria/12.webp','/img/casamaria/13.webp','/img/casamaria/14.webp','/img/casamaria/15.webp','/img/casamaria/16.webp','/img/casamaria/17.webp','/img/casamaria/18.webp','/img/casamaria/19.webp','/img/casamaria/20.webp','/img/casamaria/21.webp','/img/casamaria/22.webp','/img/casamaria/23.webp','/img/casamaria/24.webp','/img/casamaria/25.webp','/img/casamaria/26.webp','/img/casamaria/27.webp','/img/casamaria/28.webp'], featured: false,
  amenities: {
    pt: ['Casa pé na areia', 'Vista para o mar', 'Apoio de praia', 'Piscina', 'Espaço gourmet com churrasqueira', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Lavabo', 'Ar-condicionado', 'Internet Wi-Fi', 'TV a cabo / Sky', 'Espreguiçadeiras e ombrelone', 'Toalhas de piscina e praia', 'Roupas de cama, mesa e banho', 'Dois caiaques', 'Estacionamento', 'Poço artesiano'],
    en: ['Beachfront house', 'Sea view', 'Beach support', 'Pool', 'Gourmet area with barbecue', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Guest bathroom', 'Air conditioning', 'Wi-Fi internet', 'Cable TV / Sky', 'Sun loungers and parasol', 'Pool and beach towels', 'Bed, table and bath linen', 'Two kayaks', 'Parking', 'Artesian well'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 jardineiro/piscineiro'],
    en: ['1 housekeeper', '1 cook', '1 gardener/pool attendant'],
  },
  description: {
    pt: 'Pé na areia em uma das praias mais bonitas de Trancoso e cercada por um amplo jardim com árvores nativas, a Casa Maria é um verdadeiro refúgio de charme, privacidade e tranquilidade.\n\nOs ambientes abertos favorecem uma conexão constante com a natureza. A arquitetura de inspiração rústico-chic e a decoração com peças de artistas locais criam uma atmosfera sofisticada, acolhedora e profundamente ligada à identidade baiana.\n\nCom três suítes cuidadosamente decoradas, a residência acomoda confortavelmente até seis hóspedes. Chuveiros integrados ao paisagismo, redários e áreas de descanso à beira-mar convidam a aproveitar os dias em um ritmo leve e contemplativo.\n\nA propriedade conta ainda com apoio de praia, equipe de staff e dois caiaques para explorar as águas da região.',
    en: 'Beachfront on one of the most beautiful beaches in Trancoso and surrounded by a wide garden with native trees, Casa Maria is a true refuge of charm, privacy and tranquility.\n\nThe open spaces favor a constant connection with nature. The rustic-chic inspired architecture and the decoration with pieces by local artists create a sophisticated, welcoming atmosphere deeply connected to the Bahian identity.\n\nWith three carefully decorated suites, the residence comfortably accommodates up to six guests. Showers integrated into the landscaping, hammock areas and seaside rest areas invite you to enjoy the days at a light and contemplative pace.\n\nThe property also offers beach support, staff and two kayaks to explore the waters of the region.',
  },
  notes: { pt: ['Capacidade para até 6 hóspedes.', 'Valores e disponibilidade sujeitos à confirmação.'], en: ['Capacity for up to 6 guests.', 'Rates and availability subject to confirmation.'] },
  locationDetail: {
    pt: 'Praia do Rio Verde, Trancoso. A propriedade oferece acesso direto ao mar e uma atmosfera reservada em meio à natureza, a aproximadamente 45 km do Aeroporto Internacional de Porto Seguro.',
    en: 'Rio Verde Beach, Trancoso. The property offers direct access to the sea and a reserved atmosphere surrounded by nature, approximately 45 km from Porto Seguro International Airport.',
  },
};

const COQUEIRAL02: Property = {
  id: 'casa-coqueiral-02', code: 'TBA-303', name: { pt: 'Casa Coqueiral 2', en: 'Casa Coqueiral 2' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 7, guests: 14, baths: 7, area: '620 m²',
  price: { pt: 'R$ 4.100 / diária', en: 'R$ 4,100 / night' },
  priceLow: { pt: 'R$ 3.300 / diária', en: 'R$ 3,300 / night' },
  carnaval: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral02/01.jpg',
  gallery: ['/img/coqueiral02/01.webp','/img/coqueiral02/02.webp','/img/coqueiral02/03.webp','/img/coqueiral02/04.webp','/img/coqueiral02/05.webp','/img/coqueiral02/06.webp','/img/coqueiral02/07.webp','/img/coqueiral02/08.webp','/img/coqueiral02/09.webp','/img/coqueiral02/10.webp','/img/coqueiral02/11.webp','/img/coqueiral02/12.webp','/img/coqueiral02/13.webp','/img/coqueiral02/14.webp','/img/coqueiral02/15.webp','/img/coqueiral02/16.webp','/img/coqueiral02/17.webp','/img/coqueiral02/18.webp','/img/coqueiral02/19.webp','/img/coqueiral02/20.webp','/img/coqueiral02/21.webp','/img/coqueiral02/22.webp','/img/coqueiral02/23.webp','/img/coqueiral02/24.webp','/img/coqueiral02/25.webp','/img/coqueiral02/26.webp','/img/coqueiral02/27.webp','/img/coqueiral02/28.webp','/img/coqueiral02/29.webp','/img/coqueiral02/30.webp','/img/coqueiral02/31.webp','/img/coqueiral02/32.webp','/img/coqueiral02/33.webp','/img/coqueiral02/34.webp','/img/coqueiral02/35.webp','/img/coqueiral02/36.webp','/img/coqueiral02/37.webp','/img/coqueiral02/38.webp','/img/coqueiral02/39.webp','/img/coqueiral02/40.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet com churrasqueira e forno de pizza', 'Deck integrado às áreas sociais', 'Ducha externa em estilo rústico', 'Jardim e gramado', '2 salas de estar', '2 cozinhas completas', 'Internet Wi-Fi', 'TV', 'Roupas de cama', 'Estacionamento gratuito (2 garagens para até 4 carros)'],
    en: ['Private pool', 'Gourmet area with barbecue and pizza oven', 'Deck integrated into the social areas', 'Rustic outdoor shower', 'Garden and lawn', '2 living rooms', '2 full kitchens', 'Wi-Fi internet', 'TV', 'Bed linen', 'Free parking (2 garages for up to 4 cars)'],
  },
  staff: {
    pt: ['Camareira', 'Jardineiro', 'Serviços adicionais (cozinheira, chef, garçom, motorista, transfer, massagens, recreação infantil e personal trainer) sob consulta'],
    en: ['Housekeeper', 'Gardener', 'Additional services (cook, chef, waiter, driver, transfer, massages, kids\' recreation and personal trainer) upon request'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, em uma região de acesso fácil e estratégico, a Casa Coqueiral 2 foi planejada para se integrar à natureza e proporcionar uma estadia confortável, tranquila e acolhedora em Trancoso.\n\nRecém-construída, a residência apresenta ambientes amplos e arejados, envolvidos por um extenso deck que conecta a área social à piscina, ao espaço gourmet e ao jardim. O conjunto inclui churrasqueira, forno de pizza e uma charmosa ducha rústica, cercados por árvores, gramado e vegetação que atraem pássaros silvestres.\n\nNos interiores, móveis em madeira de aparência natural e peças artesanais produzidas na região reforçam a identidade de Trancoso. Duas salas de estar, duas cozinhas e sete suítes oferecem praticidade para famílias e grupos de amigos que valorizam espaço, privacidade e convivência.\n\nA localização permite acesso rápido ao Quadrado Histórico e às praias dos Nativos e dos Coqueiros, além de facilitar os deslocamentos para Praia do Espelho, Caraíva, Arraial d’Ajuda e Porto Seguro.',
    en: 'Located in the Coqueiral Condominium, in an easily accessible and strategic region, Casa Coqueiral 2 was designed to integrate with nature and provide a comfortable, peaceful and welcoming stay in Trancoso.\n\nNewly built, the residence features spacious and airy environments, surrounded by an extensive deck that connects the social area to the pool, the gourmet space and the garden. The set includes a barbecue, a pizza oven and a charming rustic shower, surrounded by trees, lawn and vegetation that attract wild birds.\n\nInside, natural-looking wooden furniture and handcrafted pieces produced in the region reinforce the identity of Trancoso. Two living rooms, two kitchens and seven suites offer practicality for families and groups of friends who value space, privacy and togetherness.\n\nThe location allows quick access to the Historic Square (Quadrado) and the Nativos and Coqueiros beaches, as well as facilitating travel to Praia do Espelho, Caraíva, Arraial d’Ajuda and Porto Seguro.',
  },
  notes: { pt: ['Capacidade para até 14 hóspedes.', 'Baixa temporada (1º de março a 30 de novembro): mínimo de 2 noites.', 'Alta temporada (1º de dezembro a 29 de fevereiro): mínimo de 2 noites.', 'Carnaval: mínimo de 4 noites.', 'Natal e Réveillon: sob consulta, condições e período mínimo sujeitos a confirmação.', 'Tarifas e disponibilidade sujeitas a confirmação.'], en: ['Capacity for up to 14 guests.', 'Low season (March 1 to November 30): minimum 2 nights.', 'High season (December 1 to February 29): minimum 2 nights.', 'Carnival: minimum 4 nights.', 'Christmas and New Year\'s: upon request, conditions and minimum period subject to confirmation.', 'Rates and availability subject to confirmation.'] },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso. Praias dos Nativos e dos Coqueiros a aproximadamente 3 km e Quadrado Histórico a aproximadamente 2,5 km. Acessos para Espelho, Caraíva, Arraial d’Ajuda e Porto Seguro a aproximadamente 2 km.',
    en: 'Coqueiral Condominium, Trancoso. Nativos and Coqueiros beaches approximately 3 km away and the Historic Square (Quadrado) approximately 2.5 km away. Access roads to Espelho, Caraíva, Arraial d’Ajuda and Porto Seguro approximately 2 km away.',
  },
};

const JACARANDA04: Property = {
  id: 'casa-04-jacaranda', code: 'TBA-304', name: { pt: 'Casa 04 — Condomínio Jacarandá', en: 'Casa 04 — Jacarandá Condominium' },
  purpose: ['aluguel'], location: 'Condomínio Jacarandá', suites: 7, guests: 21, baths: 7, area: '—',
  price: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  priceLow: { pt: 'R$ 5.880 / diária', en: 'R$ 5,880 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/jacaranda-04/01.jpg',
  gallery: ['/img/jacaranda-04/01.webp','/img/jacaranda-04/02.webp','/img/jacaranda-04/03.webp','/img/jacaranda-04/04.webp','/img/jacaranda-04/05.webp','/img/jacaranda-04/06.webp','/img/jacaranda-04/07.webp','/img/jacaranda-04/08.webp','/img/jacaranda-04/09.webp','/img/jacaranda-04/10.webp','/img/jacaranda-04/11.webp','/img/jacaranda-04/12.webp','/img/jacaranda-04/13.webp','/img/jacaranda-04/14.webp','/img/jacaranda-04/15.webp','/img/jacaranda-04/16.webp','/img/jacaranda-04/17.webp','/img/jacaranda-04/18.webp','/img/jacaranda-04/19.webp','/img/jacaranda-04/20.webp','/img/jacaranda-04/21.webp','/img/jacaranda-04/22.webp','/img/jacaranda-04/23.webp','/img/jacaranda-04/24.webp','/img/jacaranda-04/25.webp','/img/jacaranda-04/26.webp','/img/jacaranda-04/27.webp','/img/jacaranda-04/28.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Hidromassagem para até 12 pessoas', 'Espaço gourmet completo com churrasqueira e forno de pizza', 'Redário', 'Cozinha completa equipada', 'Salas de estar e TV integradas', 'Wi-Fi de alta velocidade', 'Estacionamento para 4 veículos', 'Suítes climatizadas'],
    en: ['Private pool', 'Hot tub for up to 12 people', 'Full gourmet area with barbecue and pizza oven', 'Hammock area', 'Fully equipped kitchen', 'Integrated living and TV rooms', 'High-speed Wi-Fi', 'Parking for 4 vehicles', 'Air-conditioned suites'],
  },
  staff: {
    pt: ['1 cozinheira', '2 camareiras', 'Jardineiro/piscineiro', 'Serviço diário incluso'],
    en: ['1 cook', '2 housekeepers', 'Gardener/pool attendant', 'Daily service included'],
  },
  description: {
    pt: 'A Casa 04, no Condomínio Jacarandá, combina elegância, conforto e localização privilegiada em Trancoso. Situada a apenas 5 minutos do Quadrado e cerca de 8 minutos das praias, oferece a tranquilidade de um condomínio fechado com toda a praticidade para aproveitar os principais atrativos da região.\n\nProjetada para receber famílias e grupos de amigos, a residência acomoda até 21 hóspedes em 7 suítes climatizadas. Os ambientes internos seguem um conceito aberto, com salas de estar e TV integradas à cozinha completa, valorizando iluminação natural, amplitude e uma decoração contemporânea que mistura o charme rústico de Trancoso com peças assinadas por artistas e arquitetos da região.\n\nNa área externa, a experiência continua com uma agradável varanda voltada para a piscina, espaço gourmet completo com churrasqueira e forno de pizza, hidromassagem para até 12 pessoas, redário e diversos ambientes para confraternizações ao ar livre.',
    en: 'Casa 04, in the Jacarandá Condominium, combines elegance, comfort and a privileged location in Trancoso. Situated just 5 minutes from the Quadrado and about 8 minutes from the beaches, it offers the tranquility of a gated community with all the convenience to enjoy the region\'s main attractions.\n\nDesigned to host families and groups of friends, the residence accommodates up to 21 guests in 7 air-conditioned suites. The interiors follow an open concept, with living and TV rooms integrated into the full kitchen, valuing natural light, spaciousness and a contemporary decoration that mixes Trancoso\'s rustic charm with pieces signed by local artists and architects.\n\nOutside, the experience continues with a pleasant veranda facing the pool, a complete gourmet area with barbecue and pizza oven, a hot tub for up to 12 people, a hammock area and several spaces for outdoor gatherings.',
  },
  notes: { pt: ['Capacidade para até 21 hóspedes.', 'Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade, pacotes para feriados e custos para utilização do clube do condomínio.'], en: ['Capacity for up to 21 guests.', 'Rates subject to change without prior notice. Check availability, holiday packages and costs for using the condominium club.'] },
  locationDetail: {
    pt: 'Condomínio Jacarandá, Trancoso. A apenas 5 minutos do Quadrado e cerca de 8 minutos das praias.',
    en: 'Jacarandá Condominium, Trancoso. Just 5 minutes from the Quadrado and about 8 minutes from the beaches.',
  },
};

const COQUEIRAL14: Property = {
  id: 'casa-coqueiral-14', code: 'TBA-305', name: { pt: 'Casa Coqueiral 14', en: 'Casa Coqueiral 14' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 6, guests: 18, baths: 6, area: '550 m²',
  price: { pt: 'R$ 5.950 / diária', en: 'R$ 5,950 / night' },
  priceLow: { pt: 'R$ 3.900 / diária', en: 'R$ 3,900 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 170.000', en: 'R$ 170,000' },
  image: '/img/coqueiral14/01.jpg',
  gallery: ['/img/coqueiral14/01.webp','/img/coqueiral14/02.webp','/img/coqueiral14/03.webp','/img/coqueiral14/04.webp','/img/coqueiral14/05.webp','/img/coqueiral14/06.webp','/img/coqueiral14/07.webp','/img/coqueiral14/08.webp','/img/coqueiral14/09.webp','/img/coqueiral14/10.webp','/img/coqueiral14/11.webp','/img/coqueiral14/12.webp','/img/coqueiral14/13.webp','/img/coqueiral14/14.webp','/img/coqueiral14/15.webp','/img/coqueiral14/16.webp','/img/coqueiral14/17.webp','/img/coqueiral14/18.webp','/img/coqueiral14/19.webp','/img/coqueiral14/20.webp','/img/coqueiral14/21.webp','/img/coqueiral14/22.webp','/img/coqueiral14/23.webp','/img/coqueiral14/24.webp','/img/coqueiral14/25.webp','/img/coqueiral14/26.webp','/img/coqueiral14/27.webp','/img/coqueiral14/28.webp','/img/coqueiral14/29.webp','/img/coqueiral14/30.webp','/img/coqueiral14/31.webp','/img/coqueiral14/32.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado', 'Piscina privativa de borda infinita iluminada em LED', 'Espaço gourmet com churrasqueira', 'Cozinha completa', 'Wi-Fi', 'Sistema de som', 'TV por assinatura', 'Lavadora e secadora', 'Estacionamento privativo', 'Pet friendly', 'Roupas de cama e banho', 'Ducha externa', 'Varanda com redes e redário'],
    en: ['Air conditioning', 'Private infinity-edge pool with LED lighting', 'Gourmet area with barbecue', 'Full kitchen', 'Wi-Fi', 'Sound system', 'Cable TV', 'Washer and dryer', 'Private parking', 'Pet friendly', 'Bed and bath linen', 'Outdoor shower', 'Veranda with hammocks and hammock area'],
  },
  staff: {
    pt: ['Serviço de limpeza diário incluso', 'Cozinheira disponível sob consulta (valor adicional)'],
    en: ['Daily cleaning service included', 'Cook available upon request (additional cost)'],
  },
  description: {
    pt: 'A Casa Coqueiral 14 reúne sofisticação, conforto e a essência de Trancoso em um projeto contemporâneo cercado pela natureza. Localizada no Condomínio Coqueiral, está a poucos minutos do Quadrado e das praias, oferecendo segurança, privacidade e fácil acesso aos principais atrativos da região.\n\nCom 550 m² de área construída em um terreno de 1.000 m², acomoda até 18 hóspedes em 6 suítes climatizadas. Os ambientes amplos e integrados valorizam a iluminação natural e proporcionam uma experiência acolhedora para famílias e grupos de amigos.\n\nA área externa é o grande destaque, com piscina privativa de borda infinita iluminada em LED, cercada pela mata nativa, além de espaço gourmet com churrasqueira, terraço, varanda com redes e um agradável redário para momentos de descanso.',
    en: 'Casa Coqueiral 14 brings together sophistication, comfort and the essence of Trancoso in a contemporary project surrounded by nature. Located in the Coqueiral Condominium, it is a few minutes from the Quadrado and the beaches, offering security, privacy and easy access to the region\'s main attractions.\n\nWith 550 m² of built area on a 1,000 m² plot, it accommodates up to 18 guests in 6 air-conditioned suites. The spacious and integrated environments value natural lighting and provide a welcoming experience for families and groups of friends.\n\nThe outdoor area is the highlight, with a private infinity-edge pool lit by LED, surrounded by native forest, as well as a gourmet area with barbecue, terrace, veranda with hammocks and a pleasant hammock area for moments of rest.',
  },
  notes: { pt: ['Capacidade para até 18 hóspedes.', 'Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade e condições para feriados e datas especiais.'], en: ['Capacity for up to 18 guests.', 'Rates subject to change without prior notice. Check availability and conditions for holidays and special dates.'] },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso. A poucos minutos do Quadrado e das praias.',
    en: 'Coqueiral Condominium, Trancoso. A few minutes from the Quadrado and the beaches.',
  },
};

const ESTRELA: Property = {
  id: 'casa-estrela-praia-dos-nativos', code: 'TBA-310', name: { pt: 'Casa Estrela', en: 'Casa Estrela' },
  purpose: ['aluguel'], location: 'Praia dos Nativos', suites: 5, guests: 16, baths: 7, area: '—',
  price: { pt: 'R$ 25.300 / diária', en: 'R$ 25,300 / night' },
  priceLow: { pt: 'R$ 21.450 / diária', en: 'R$ 21,450 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/estrela/01.jpg',
  gallery: ['/img/estrela/01.webp','/img/estrela/02.webp','/img/estrela/03.webp','/img/estrela/04.webp','/img/estrela/05.webp','/img/estrela/06.webp','/img/estrela/07.webp','/img/estrela/08.webp','/img/estrela/09.webp','/img/estrela/10.webp','/img/estrela/11.webp','/img/estrela/12.webp','/img/estrela/13.webp','/img/estrela/14.webp','/img/estrela/15.webp','/img/estrela/16.webp','/img/estrela/17.webp','/img/estrela/18.webp','/img/estrela/19.webp','/img/estrela/20.webp','/img/estrela/21.webp','/img/estrela/22.webp','/img/estrela/23.webp','/img/estrela/24.webp','/img/estrela/25.webp','/img/estrela/26.webp','/img/estrela/27.webp','/img/estrela/28.webp','/img/estrela/29.webp','/img/estrela/30.webp','/img/estrela/31.webp','/img/estrela/32.webp','/img/estrela/33.webp','/img/estrela/34.webp','/img/estrela/35.webp'], featured: false,
  amenities: {
    pt: ['Três construções independentes integradas ao jardim', 'Piscina privativa cercada pela vegetação', 'Salas de estar, televisão e jantar', 'Cozinha principal totalmente equipada', 'Segunda cozinha na Casa 2', 'Rooftop com vista para o mar', 'Mesa e aparelhos de jantar para até 16 pessoas', 'Jardins tropicais', 'A poucos passos do mar', 'Ar-condicionado', 'Mosquiteiros', 'TV'],
    en: ['Three independent buildings integrated into the garden', 'Private pool surrounded by vegetation', 'Living, TV and dining rooms', 'Fully equipped main kitchen', 'Second kitchen in House 2', 'Rooftop with sea view', 'Dining table and tableware for up to 16 people', 'Tropical gardens', 'A few steps from the sea', 'Air conditioning', 'Mosquito nets', 'TV'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 copeiro', '1 barman', '1 segurança', '1 caseiro', '1 gerente'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 butler\'s assistant', '1 bartender', '1 security guard', '1 caretaker', '1 manager'],
  },
  description: {
    pt: 'A Casa Estrela está localizada na Praia dos Nativos, em Trancoso, e oferece uma combinação especial de conforto, privacidade e contato direto com a natureza. Inserida em um terreno amplamente arborizado, a propriedade reúne jardins tropicais, piscina privativa e três construções independentes, criando diferentes ambientes para descanso e convivência.\n\nA arquitetura e a decoração valorizam referências da cultura baiana, com cores vibrantes, materiais naturais e detalhes artesanais que se harmonizam com a vegetação presente em toda a propriedade. A distribuição dos espaços permite acomodar famílias e grupos com tranquilidade, preservando a privacidade entre as diferentes alas da casa.\n\nA casa principal concentra os ambientes sociais, com salas de estar, televisão e jantar, além de cozinha totalmente equipada. As outras construções abrigam suítes e quartos confortáveis, uma segunda cozinha, espaços de televisão e um rooftop com vista para o mar.\n\nCom capacidade para até 16 hóspedes, staff completo e ambientes preparados para diferentes momentos do dia, a Casa Estrela proporciona uma estadia acolhedora e prática em uma das regiões mais desejadas de Trancoso.',
    en: 'Casa Estrela is located on Praia dos Nativos, in Trancoso, and offers a special combination of comfort, privacy and direct contact with nature. Set on a widely wooded plot, the property brings together tropical gardens, a private pool and three independent buildings, creating different environments for rest and conviviality.\n\nThe architecture and décor value references to Bahian culture, with vibrant colors, natural materials and handcrafted details that harmonize with the vegetation present throughout the property. The layout of the spaces allows families and groups to be accommodated with tranquility, preserving privacy between the different wings of the house.\n\nThe main house concentrates the social areas, with living, television and dining rooms, in addition to a fully equipped kitchen. The other buildings house comfortable suites and bedrooms, a second kitchen, television spaces and a rooftop with sea views.\n\nWith capacity for up to 16 guests, full staff and environments prepared for different moments of the day, Casa Estrela provides a welcoming and practical stay in one of the most desirable regions of Trancoso.',
  },
  notes: { pt: ['Capacidade máxima de 16 hóspedes.', 'A composição e os horários da equipe devem ser confirmados no momento da reserva.'], en: ['Maximum capacity of 16 guests.', 'Staff composition and schedules must be confirmed at the time of booking.'] },
  locationDetail: {
    pt: 'Praia dos Nativos, Trancoso – Bahia. Propriedade a poucos passos do mar.',
    en: 'Praia dos Nativos, Trancoso – Bahia. Property a few steps from the sea.',
  },
  features: ['piscina', 'vista-mar'],
};

const COQUEIRAL22: Property = {
  id: 'casa-coqueiral-22', code: 'TBA-312', name: { pt: 'Casa Coqueiral 22', en: 'Casa Coqueiral 22' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 4, guests: 12, baths: 5, area: '300 m²',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 2.000 / diária', en: 'R$ 2,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 150.000 (pacote sob consulta)', en: 'R$ 150,000 (package upon request)' },
  image: '/img/coqueiral22/01.jpg',
  gallery: ['/img/coqueiral22/01.webp','/img/coqueiral22/02.webp','/img/coqueiral22/03.webp','/img/coqueiral22/04.webp','/img/coqueiral22/05.webp','/img/coqueiral22/06.webp','/img/coqueiral22/07.webp','/img/coqueiral22/08.webp','/img/coqueiral22/09.webp','/img/coqueiral22/10.webp','/img/coqueiral22/11.webp','/img/coqueiral22/12.webp','/img/coqueiral22/13.webp','/img/coqueiral22/14.webp','/img/coqueiral22/15.webp','/img/coqueiral22/16.webp','/img/coqueiral22/17.webp','/img/coqueiral22/18.webp'], featured: false,
  amenities: {
    pt: ['Sala de estar climatizada com sofás e poltronas', 'Sala de jantar com mesa para 12 pessoas', 'Sala de TV com sofá retrátil, TV de 65 polegadas, Netflix e SKY', 'Cozinha gourmet completa com ilha, cooktop, cristaleira e eletrodomésticos', 'Piscina privativa de aproximadamente 150 m² com lounge interno', 'Espaço gourmet com churrasqueira', 'Jardim tropical e varandas', 'Wi-Fi de alta velocidade com 4 roteadores', 'Hidromassagem', 'Lavabo, lavanderia, despensa e rouparia', 'Garagem coberta para 2 veículos', 'Segurança 24 horas'],
    en: ['Air-conditioned living room with sofas and armchairs', 'Dining room with table for 12 people', 'TV room with retractable sofa, 65-inch TV, Netflix and SKY', 'Gourmet kitchen with island, cooktop, glassware cabinet and appliances', 'Private pool of approximately 150 m² with internal lounge', 'Gourmet area with barbecue', 'Tropical garden and verandas', 'High-speed Wi-Fi with 4 routers', 'Hot tub', 'Guest bathroom, laundry, pantry and linen room', 'Covered garage for 2 vehicles', '24-hour security'],
  },
  staff: {
    pt: ['2 camareiras, com serviço diário das 8h às 16h'],
    en: ['2 housekeepers, with daily service from 8 am to 4 pm'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, em Trancoso, a Casa Coqueiral 22 combina arquitetura contemporânea, conforto e integração com a natureza em uma residência projetada para receber famílias e grupos de amigos com privacidade.\n\nAssinada pelo arquiteto Sallum, a casa apresenta ambientes amplos, muita iluminação natural e uma decoração clean, marcada por materiais elegantes e espaços conectados de forma harmoniosa ao jardim tropical.\n\nAs quatro suítes foram planejadas para oferecer conforto em todos os detalhes. A configuração acomoda até 12 hóspedes e reúne camas King Size, camas adicionais de solteiro, climatização, varandas e banheiros espaçosos.\n\nO grande destaque da propriedade é a piscina privativa de aproximadamente 150 m², com lounge interno e integração direta ao espaço gourmet. Ao redor, o jardim tropical, a churrasqueira e os ambientes de convivência criam um cenário ideal para dias de descanso e lazer.\n\nA área social reúne sala de estar climatizada, sala de jantar para 12 pessoas, sala de TV e cozinha gourmet totalmente equipada. A residência conta ainda com lavabo, lavanderia, despensa, rouparia e garagem coberta para dois veículos.',
    en: 'Located in Condomínio Coqueiral, in Trancoso, Casa Coqueiral 22 combines contemporary architecture, comfort and integration with nature in a residence designed to welcome families and groups of friends with privacy.\n\nDesigned by architect Sallum, the house features spacious rooms, abundant natural light and a clean decoration, marked by elegant materials and spaces harmoniously connected to the tropical garden.\n\nThe four suites were planned to offer comfort in every detail. The layout accommodates up to 12 guests and includes King Size beds, additional single beds, air conditioning, verandas and spacious bathrooms.\n\nThe highlight of the property is the private pool of approximately 150 m², with an internal lounge and direct integration with the gourmet area. Around it, the tropical garden, the barbecue and the social areas create an ideal setting for days of rest and leisure.\n\nThe social area includes an air-conditioned living room, a dining room for 12 people, a TV room and a fully equipped gourmet kitchen. The residence also has a guest bathroom, laundry, pantry, linen room and a covered garage for two vehicles.',
  },
  notes: {
    pt: ['Capacidade para até 12 hóspedes em 4 suítes climatizadas.', 'Serviços, horários e condições do staff estão sujeitos à confirmação no momento da reserva.'],
    en: ['Capacity for up to 12 guests in 4 air-conditioned suites.', 'Staff services, schedules and conditions are subject to confirmation at the time of booking.'],
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso – Bahia. Aproximadamente 2,3 km do Quadrado Histórico e 2,6 km da Praia dos Nativos, com acesso fácil às praias, restaurantes, lojas e principais atrações de Trancoso',
    en: 'Condomínio Coqueiral, Trancoso – Bahia. Approximately 2.3 km from the Historic Quadrado and 2.6 km from Praia dos Nativos, with easy access to beaches, restaurants, shops and the main attractions of Trancoso',
  },
  features: ['piscina'],
};

const AREIA: Property = {
  id: 'casa-areia-altos-de-trancoso', code: 'TBA-313', name: { pt: 'Casa Areia', en: 'Casa Areia' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 5, area: '—',
  price: { pt: 'R$ 20.000 / diária', en: 'R$ 20,000 / night' },
  priceLow: { pt: 'R$ 15.000 / diária', en: 'R$ 15,000 / night' },
  carnaval: { pt: 'R$ 125.000 (pacote de 5 dias)', en: 'R$ 125,000 (5-day package)' },
  reveillon: { pt: 'R$ 500.000 (pacote de 10 dias)', en: 'R$ 500,000 (10-day package)' },
  image: '/img/areia/01.jpg',
  gallery: ['/img/areia/07.webp','/img/areia/01.webp','/img/areia/02.webp','/img/areia/03.webp','/img/areia/04.webp','/img/areia/05.webp','/img/areia/06.webp','/img/areia/08.webp','/img/areia/09.webp','/img/areia/10.webp','/img/areia/11.webp','/img/areia/12.webp','/img/areia/13.webp','/img/areia/14.webp','/img/areia/15.webp','/img/areia/16.webp','/img/areia/17.webp','/img/areia/18.webp','/img/areia/19.webp','/img/areia/20.webp','/img/areia/21.webp','/img/areia/22.webp','/img/areia/23.webp','/img/areia/24.webp','/img/areia/25.webp','/img/areia/26.webp','/img/areia/27.webp','/img/areia/28.webp','/img/areia/29.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa integrada ao jardim florido', 'Espaço para refeições na falésia, com vista para o mar', 'Área gourmet', 'Dois blocos independentes: área social e bloco de suítes', 'Pé-direito de aproximadamente 5 metros na área social', 'Mobiliário assinado por designers brasileiros', 'Máquina de gelo', 'Poço artesiano', 'Espreguiçadeiras e ombrelones', 'TV a cabo', 'Ar-condicionado nas suítes', 'Wi-Fi', 'Closets', 'Gerador'],
    en: ['Private pool integrated into the flowered garden', 'Dining space on the cliff, with sea views', 'Gourmet area', 'Two independent blocks: social area and suites block', 'Ceiling height of approximately 5 meters in the social area', 'Furniture signed by Brazilian designers', 'Ice machine', 'Artesian well', 'Sun loungers and umbrellas', 'Cable TV', 'Air conditioning in the suites', 'Wi-Fi', 'Walk-in closets', 'Generator'],
  },
  staff: {
    pt: ['Caseiro', 'Camareira', 'Cozinheira', 'Ajudante de camareira', 'Ajudante de cozinha', 'Jardineiro'],
    en: ['Caretaker', 'Housekeeper', 'Cook', 'Housekeeping assistant', 'Kitchen assistant', 'Gardener'],
  },
  description: {
    pt: 'Localizada no exclusivo Condomínio Altos de Trancoso, no alto da falésia, a Casa Areia desfruta de uma vista privilegiada para o mar e, do outro lado do terreno, de uma ampla e preservada área verde.\n\nA propriedade é resultado de um projeto arquitetônico sofisticado, marcado pela simplicidade de suas formas, pela integração com a natureza e pelo aproveitamento excepcional de sua localização. Sua arquitetura combina elementos rústicos e contemporâneos, criando ambientes elegantes, acolhedores e perfeitamente conectados à paisagem de Trancoso.\n\nReconhecida por seu projeto singular, a Casa Areia já foi destaque em diferentes publicações especializadas em arquitetura e decoração. Suas amplas aberturas favorecem a entrada de luz natural, a ventilação constante e a agradável brisa do mar, permitindo que a paisagem e os sons da natureza façam parte da experiência dentro da casa.\n\nA residência está distribuída em dois blocos independentes. O primeiro, com pé-direito de aproximadamente cinco metros, concentra a área social, composta por hall de entrada, sala de jantar, living e cozinha. O segundo bloco abriga as cinco suítes, voltadas para a área verde e cercadas pela tranquilidade do jardim.\n\nTodos os ambientes foram cuidadosamente planejados, com mobiliário assinado por diferentes designers brasileiros e uma decoração que valoriza materiais naturais, peças de design e a identidade arquitetônica de Trancoso.\n\nNa área externa, uma magnífica piscina se integra ao jardim florido e aos espaços de descanso. A casa conta ainda com área gourmet e um ambiente especial para refeições na falésia, acompanhado por uma ampla e inesquecível vista para o mar.',
    en: 'Located in the exclusive Altos de Trancoso condominium, on top of the cliff, Casa Areia enjoys a privileged view of the sea and, on the other side of the plot, of a wide and preserved green area.\n\nThe property is the result of a sophisticated architectural project, marked by the simplicity of its forms, by the integration with nature and by the exceptional use of its location. Its architecture combines rustic and contemporary elements, creating elegant, welcoming environments perfectly connected to the landscape of Trancoso.\n\nRecognized for its singular design, Casa Areia has been featured in several publications specialized in architecture and decoration. Its wide openings favor the entry of natural light, constant ventilation and the pleasant sea breeze, allowing the landscape and the sounds of nature to be part of the experience inside the house.\n\nThe residence is distributed in two independent blocks. The first, with a ceiling height of approximately five meters, concentrates the social area, composed of entrance hall, dining room, living room and kitchen. The second block houses the five suites, facing the green area and surrounded by the tranquility of the garden.\n\nAll environments were carefully planned, with furniture signed by different Brazilian designers and a decoration that values natural materials, design pieces and the architectural identity of Trancoso.\n\nOutside, a magnificent pool integrates with the flowered garden and rest areas. The house also has a gourmet area and a special space for meals on the cliff, accompanied by a wide and unforgettable view of the sea.',
  },
  notes: {
    pt: ['Capacidade para até 10 hóspedes em 5 suítes climatizadas.', 'As camas de solteiro podem ser configuradas como cama King Size por meio de cover bed, mediante solicitação prévia.'],
    en: ['Capacity for up to 10 guests in 5 air-conditioned suites.', 'Single beds can be configured as a King Size bed using a cover bed, upon prior request.'],
  },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, Trancoso – Bahia. No alto da falésia, com vista para o mar e para uma extensa área verde',
    en: 'Altos de Trancoso Condominium, Trancoso – Bahia. On top of the cliff, overlooking the sea and an extensive green area',
  },
  features: ['piscina', 'vista-mar'],
};

const BONITA: Property = {
  id: 'casa-bonita-altos-de-itapororoca', code: 'TBA-314', name: { pt: 'Casa Bonita', en: 'Casa Bonita' },
  purpose: ['aluguel'], location: 'Altos de Itapororoca', suites: 6, guests: 12, baths: 6, area: '600 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/bonita/01.jpg',
  gallery: ['/img/bonita/01.webp','/img/bonita/02.webp','/img/bonita/03.webp','/img/bonita/04.webp','/img/bonita/05.webp','/img/bonita/06.webp','/img/bonita/07.webp','/img/bonita/08.webp','/img/bonita/09.webp','/img/bonita/10.webp','/img/bonita/11.webp','/img/bonita/12.webp','/img/bonita/13.webp','/img/bonita/14.webp','/img/bonita/15.webp','/img/bonita/16.webp','/img/bonita/17.webp','/img/bonita/18.webp','/img/bonita/19.webp','/img/bonita/20.webp','/img/bonita/21.webp','/img/bonita/22.webp','/img/bonita/23.webp','/img/bonita/24.webp','/img/bonita/25.webp','/img/bonita/26.webp','/img/bonita/27.webp','/img/bonita/28.webp','/img/bonita/29.webp','/img/bonita/30.webp'], featured: false,
  amenities: {
    pt: ['6 suítes climatizadas com banheiro privativo', 'Piscina com duas raias de 18 metros', 'Vista exuberante para o mar e total privacidade', 'Amplo jardim', 'Escritório com biblioteca', 'Ampla varanda', 'Duas cozinhas equipadas', 'Sala de estar, sala de jantar e sala de TV', 'Churrasqueira, mesas de apoio e frigobar na área externa', 'Wi-Fi', 'TV a cabo', 'Roupas de cama, mesa e banho', 'Som para MP3', 'Estacionamento'],
    en: ['6 air-conditioned suites with private bathroom', 'Pool with two 18-meter lanes', 'Lush sea view and total privacy', 'Large garden', 'Office with library', 'Wide veranda', 'Two equipped kitchens', 'Living room, dining room and TV room', 'Barbecue, side tables and minibar in the outdoor area', 'Wi-Fi', 'Cable TV', 'Bed, table and bath linens', 'MP3 sound system', 'Parking'],
  },
  staff: {
    pt: ['Cozinheira', 'Arrumadeira', 'Piscineiro / Jardineiro', 'Concierge', 'Portaria 24 horas'],
    en: ['Cook', 'Housekeeper', 'Pool attendant / Gardener', 'Concierge', '24-hour gatehouse'],
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Itapororoca, a Casa Bonita é um refúgio cercado pela natureza, com uma vista exuberante para o mar e total privacidade. Com cerca de 600 m² de área construída e um amplo jardim, a residência oferece uma atmosfera tranquila, perfeita para quem deseja relaxar em um dos cenários mais exclusivos de Trancoso.\n\nA casa dispõe de 6 suítes climatizadas, todas com banheiro privativo, escritório com biblioteca, ampla varanda, duas cozinhas equipadas e uma impressionante piscina com duas raias de 18 metros. A área externa também conta com churrasqueira, mesas de apoio e frigobar, proporcionando momentos inesquecíveis para famílias e grupos de amigos.',
    en: 'Located in the Altos de Itapororoca Condominium, Casa Bonita is a refuge surrounded by nature, with a lush sea view and total privacy. With about 600 m² of built area and a large garden, the residence offers a tranquil atmosphere, perfect for those who wish to relax in one of the most exclusive settings in Trancoso.\n\nThe house has 6 air-conditioned suites, all with private bathrooms, an office with library, a wide veranda, two equipped kitchens and an impressive pool with two 18-meter lanes. The outdoor area also has a barbecue, side tables and a minibar, providing unforgettable moments for families and groups of friends.',
  },
  notes: {
    pt: ['Casa com vista para o mar no Condomínio Altos de Itapororoca.', 'Tarifas sob consulta para todos os períodos.'],
    en: ['House with sea view in the Altos de Itapororoca Condominium.', 'Rates upon request for all periods.'],
  },
  locationDetail: {
    pt: 'Condomínio Altos de Itapororoca, Trancoso – Bahia. Casa com vista para o mar',
    en: 'Altos de Itapororoca Condominium, Trancoso – Bahia. House with sea view',
  },
  features: ['piscina', 'vista-mar'],
};

const BUENO: Property = {
  id: 'casa-bueno-altos-de-itapororoca', code: 'TBA-315', name: { pt: 'Casa Bueno', en: 'Casa Bueno' },
  purpose: ['aluguel'], location: 'Altos de Itapororoca', suites: 5, guests: 10, baths: 5, area: '5.500 m²',
  price: { pt: 'R$ 9.500 / diária', en: 'R$ 9,500 / night' },
  priceLow: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  carnaval: { pt: 'R$ 60.000 (pacote de 5 diárias) — disponível para 2027', en: 'R$ 60,000 (5-night package) — available for 2027' },
  reveillon: { pt: 'R$ 280.000 (pacote de 10 diárias) — indisponível', en: 'R$ 280,000 (10-night package) — unavailable' },
  seasonHigh: { pt: 'Janeiro, fevereiro, março, dezembro e feriados', en: 'January, February, March, December and holidays' },
  seasonLow: { pt: 'Abril a novembro', en: 'April to November' },
  image: '/img/bueno/01.jpg',
  gallery: ['/img/bueno/01.webp','/img/bueno/02.webp','/img/bueno/03.webp','/img/bueno/04.webp','/img/bueno/05.webp','/img/bueno/06.webp','/img/bueno/07.webp','/img/bueno/08.webp','/img/bueno/09.webp','/img/bueno/10.webp','/img/bueno/11.webp','/img/bueno/12.webp','/img/bueno/13.webp','/img/bueno/14.webp','/img/bueno/15.webp','/img/bueno/16.webp','/img/bueno/17.webp','/img/bueno/18.webp','/img/bueno/19.webp','/img/bueno/20.webp'], featured: false,
  amenities: {
    pt: ['5 suítes climatizadas', 'Vista encantadora para o mar', 'Ampla área externa com piscina', 'Sala de estar', 'Varanda', 'Cozinha equipada', 'Wi-Fi', 'TV a cabo', 'Roupas de cama, mesa e banho', 'Estacionamento'],
    en: ['5 air-conditioned suites', 'Lovely sea view', 'Large outdoor area with pool', 'Living room', 'Veranda', 'Equipped kitchen', 'Wi-Fi', 'Cable TV', 'Bed, table and bath linens', 'Parking'],
  },
  staff: {
    pt: ['Cozinheira', 'Camareira', 'Piscineiro / Jardineiro'],
    en: ['Cook', 'Housekeeper', 'Pool attendant / Gardener'],
  },
  description: {
    pt: 'Cercada pela tropicalidade de Trancoso e com uma vista encantadora para o mar, a Casa Bueno combina aconchego, charme e uma conexão especial com a natureza. Localizada nos Altos de Itapororoca, a residência oferece uma atmosfera tranquila e acolhedora, ideal para famílias e grupos que desejam aproveitar dias de descanso com conforto e privacidade.\n\nA propriedade conta com cinco suítes climatizadas, ambientes sociais convidativos e uma ampla área externa, perfeita para manhãs de sol, tardes relaxantes à beira da piscina e jantares especiais. A decoração valoriza a essência do vilarejo, reunindo elementos naturais e detalhes que traduzem o estilo característico de Trancoso.\n\nCom aproximadamente 5.500 m² de área total e a praia a cerca de oito minutos de caminhada, a Casa Bueno proporciona uma experiência marcada pela tranquilidade, pela beleza da paisagem e pela proximidade com o mar.',
    en: 'Surrounded by the tropical atmosphere of Trancoso and with a lovely sea view, Casa Bueno combines coziness, charm and a special connection with nature. Located in Altos de Itapororoca, the residence offers a tranquil and welcoming atmosphere, ideal for families and groups who want to enjoy days of rest with comfort and privacy.\n\nThe property has five air-conditioned suites, inviting social areas and a large outdoor area, perfect for sunny mornings, relaxing afternoons by the pool and special dinners. The decoration values the essence of the village, bringing together natural elements and details that translate the characteristic style of Trancoso.\n\nWith approximately 5,500 m² of total area and the beach about an eight-minute walk away, Casa Bueno provides an experience marked by tranquility, the beauty of the landscape and the proximity to the sea.',
  },
  notes: {
    pt: ['Aproximadamente 8 minutos a pé da praia.'],
    en: ['Approximately 8 minutes walk from the beach.'],
  },
  locationDetail: {
    pt: 'Altos de Itapororoca, Trancoso – Bahia. Vista para o mar, a aproximadamente oito minutos de caminhada da praia',
    en: 'Altos de Itapororoca, Trancoso – Bahia. Sea view, approximately eight minutes walk from the beach',
  },
  features: ['piscina', 'vista-mar'],
};

const DAJU: Property = {
  id: 'casa-da-ju-itapororoca', code: 'TBA-316', name: { pt: 'Casa da Ju', en: 'Casa da Ju' },
  purpose: ['aluguel'], location: 'Itapororoca', suites: 4, guests: 8, baths: 4, area: '6.000 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/daju/01.jpg',
  gallery: ['/img/daju/01.webp','/img/daju/02.webp','/img/daju/03.webp','/img/daju/04.webp','/img/daju/05.webp','/img/daju/06.webp','/img/daju/07.webp','/img/daju/08.webp','/img/daju/09.webp','/img/daju/10.webp','/img/daju/11.webp','/img/daju/12.webp','/img/daju/13.webp','/img/daju/14.webp','/img/daju/15.webp','/img/daju/16.webp','/img/daju/17.webp','/img/daju/18.webp','/img/daju/19.webp','/img/daju/20.webp','/img/daju/21.webp','/img/daju/22.webp','/img/daju/23.webp','/img/daju/24.webp','/img/daju/25.webp','/img/daju/26.webp','/img/daju/27.webp'], featured: false,
  amenities: {
    pt: ['4 suítes climatizadas', 'Piscina de areia com raia de 12 metros e pequenas prainhas', 'Acesso direto à praia por trilha em meio à vegetação nativa', 'Terreno de aproximadamente 6.000 m² cercado pela Mata Atlântica', 'Ampla varanda com lounges, espaço fitness e mesa para refeições', 'Sala de estar, sala de jantar e sala de TV', 'Escritório e biblioteca', 'Cozinha interna e cozinha externa', 'Suíte térrea com deck privativo, também usada para massagens, yoga ou brinquedoteca', 'Apoio de praia', 'Lavanderia', 'Wi-Fi', 'TV a cabo', 'Roupas de cama, mesa e banho', 'Som para MP3', 'Estacionamento'],
    en: ['4 air-conditioned suites', 'Sand pool with 12-meter lane and small shallow areas', 'Direct beach access through a trail amid native vegetation', 'Plot of approximately 6,000 m² surrounded by Atlantic Forest', 'Wide veranda with lounges, fitness area and dining table', 'Living room, dining room and TV room', 'Office and library', 'Indoor and outdoor kitchens', 'Ground-floor suite with private deck, also used for massages, yoga or as a playroom', 'Beach support', 'Laundry', 'Wi-Fi', 'Cable TV', 'Bed, table and bath linens', 'MP3 sound system', 'Parking'],
  },
  staff: {
    pt: ['Arrumadeira', 'Cozinheira', 'Piscineiro / Jardineiro', 'Portaria 24 horas'],
    en: ['Housekeeper', 'Cook', 'Pool attendant / Gardener', '24-hour gatehouse'],
  },
  description: {
    pt: 'Localizada no Condomínio Itapororoca, um dos endereços mais exclusivos de Trancoso, a Casa da Ju está implantada em um terreno de aproximadamente 6.000 m², cercado pela Mata Atlântica e com acesso direto à praia por uma charmosa trilha em meio à vegetação nativa.\n\nO grande destaque da propriedade é a perfeita integração entre natureza, conforto e privacidade. O jardim gramado envolve a piscina de areia com raia de 12 metros e pequenas prainhas, criando um ambiente ideal para relaxar.\n\nA casa acomoda até 8 hóspedes em 4 suítes climatizadas. No piso superior encontram-se três suítes, todas com banheira, closet e ventilador de teto, além de sala de TV, escritório e biblioteca. No térreo, uma quarta suíte com deck privativo também pode ser utilizada como espaço para massagens, yoga ou brinquedoteca.\n\nA ampla área social integra sala de estar, sala de jantar, sala de TV e uma agradável varanda com lounges, espaço fitness e mesa para refeições, totalmente voltada para o jardim e a piscina.',
    en: 'Located in the Itapororoca Condominium, one of the most exclusive addresses in Trancoso, Casa da Ju is set on a plot of approximately 6,000 m², surrounded by the Atlantic Forest and with direct beach access through a charming trail amid native vegetation.\n\nThe highlight of the property is the perfect integration between nature, comfort and privacy. The lawn garden surrounds the sand pool with a 12-meter lane and small shallow areas, creating an ideal environment to relax.\n\nThe house accommodates up to 8 guests in 4 air-conditioned suites. Upstairs there are three suites, all with bathtub, walk-in closet and ceiling fan, as well as a TV room, office and library. On the ground floor, a fourth suite with a private deck can also be used as a space for massages, yoga or as a playroom.\n\nThe large social area integrates living room, dining room, TV room and a pleasant veranda with lounges, fitness area and dining table, fully facing the garden and the pool.',
  },
  notes: {
    pt: ['Capacidade para até 8 hóspedes em 4 suítes climatizadas.', 'Os valores poderão ser atualizados conforme o período e a disponibilidade.'],
    en: ['Capacity for up to 8 guests in 4 air-conditioned suites.', 'Rates may be updated according to the period and availability.'],
  },
  locationDetail: {
    pt: 'Casa pé na areia no Condomínio Itapororoca, Trancoso – Bahia, em área cercada pela Mata Atlântica e com acesso exclusivo à praia',
    en: 'Beachfront house in the Itapororoca Condominium, Trancoso – Bahia, in an area surrounded by the Atlantic Forest with exclusive beach access',
  },
  features: ['pe-na-areia', 'piscina'],
};

const PATIMIRIM: Property = {
  id: 'villa-patimirim-itapororoca', code: 'TBA-317', name: { pt: 'Villa Patimirim', en: 'Villa Patimirim' },
  purpose: ['aluguel'], location: 'Itapororoca', suites: 10, guests: 20, baths: 10, area: '—',
  price: { pt: 'R$ 65.000 / diária', en: 'R$ 65,000 / night' },
  priceLow: { pt: 'R$ 65.000 / diária', en: 'R$ 65,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/patimirim/01.jpg',
  gallery: ['/img/patimirim/01.webp','/img/patimirim/02.webp','/img/patimirim/03.webp','/img/patimirim/04.webp','/img/patimirim/05.webp','/img/patimirim/06.webp','/img/patimirim/07.webp','/img/patimirim/08.webp','/img/patimirim/09.webp','/img/patimirim/10.webp','/img/patimirim/11.webp','/img/patimirim/12.webp','/img/patimirim/13.webp','/img/patimirim/14.webp','/img/patimirim/15.webp','/img/patimirim/16.webp','/img/patimirim/17.webp','/img/patimirim/18.webp','/img/patimirim/19.webp','/img/patimirim/20.webp','/img/patimirim/21.webp','/img/patimirim/22.webp','/img/patimirim/23.webp','/img/patimirim/24.webp','/img/patimirim/25.webp','/img/patimirim/26.webp','/img/patimirim/27.webp','/img/patimirim/28.webp','/img/patimirim/29.webp','/img/patimirim/30.webp','/img/patimirim/31.webp'], featured: false,
  amenities: {
    pt: ['Casa de frente para o mar, a poucos passos da areia', 'Dez suítes climatizadas, entre casa principal e bangalôs', 'Amplo jardim com árvores nativas', 'Piscina', 'Espaço gourmet com churrasqueira', 'Apoio de praia', '4 caiaques para uso dos hóspedes', 'Adega de vinhos', 'Sala de ginástica', 'Sala de estar e sala de jantar', 'Máquina de gelo e freezer', 'Mosquiteiros', 'Gerador e poço artesiano', 'Internet Wi-Fi', 'TV a cabo / Sky', 'Sistema de som', 'Toalhas de praia e roupas de cama, mesa e banho', 'Estacionamento'],
    en: ['Beachfront house, a few steps from the sand', 'Ten air-conditioned suites, between main house and bungalows', 'Large garden with native trees', 'Pool', 'Gourmet area with barbecue', 'Beach support', '4 kayaks for guests use', 'Wine cellar', 'Gym room', 'Living room and dining room', 'Ice machine and freezer', 'Mosquito nets', 'Generator and artesian well', 'Wi-Fi internet', 'Cable TV / Sky', 'Sound system', 'Beach towels and bed, table and bath linens', 'Parking'],
  },
  staff: {
    pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '2 copeiros'],
    en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '2 butlers'],
  },
  description: {
    pt: 'A Villa Patimirim é uma propriedade de frente para o mar, localizada em Itapororoca, uma das praias mais bonitas e preservadas de Trancoso. Com dez suítes e capacidade para até 20 hóspedes, oferece uma experiência de hospedagem marcada por privacidade, conforto e contato direto com a natureza.\n\nA arquitetura segue o estilo rústico-chic característico da região, com ambientes amplos, estruturas em madeira e vidro e uma integração harmoniosa entre os espaços internos e externos. A decoração reúne peças de artistas locais e referências à cultura baiana, criando uma atmosfera sofisticada e acolhedora.\n\nNa área externa, um amplo jardim com árvores nativas envolve a piscina, o espaço gourmet e diferentes áreas de descanso. A poucos passos da areia, a casa conta ainda com apoio de praia e quatro caiaques para uso dos hóspedes.\n\nA propriedade pode ser combinada com uma residência anexa, totalizando 14 suítes, mediante consulta de disponibilidade e condições específicas.',
    en: 'Villa Patimirim is a beachfront property located in Itapororoca, one of the most beautiful and preserved beaches in Trancoso. With ten suites and capacity for up to 20 guests, it offers a lodging experience marked by privacy, comfort and direct contact with nature.\n\nThe architecture follows the rustic-chic style characteristic of the region, with spacious rooms, wood and glass structures and a harmonious integration between indoor and outdoor spaces. The decoration brings together pieces by local artists and references to Bahian culture, creating a sophisticated and welcoming atmosphere.\n\nOutside, a large garden with native trees surrounds the pool, the gourmet area and different rest areas. A few steps from the sand, the house also has beach support and four kayaks for guests use.\n\nThe property can be combined with an annex residence, totaling 14 suites, upon consultation of availability and specific conditions.',
  },
  notes: {
    pt: ['Capacidade para até 20 hóspedes em 10 suítes climatizadas.', 'Camareiras com atendimento até as 17h30; cozinha em funcionamento até as 20h.', 'O coordenador da equipe reside na propriedade e pode auxiliar em questões operacionais.', 'A composição da equipe e os horários podem ser ajustados conforme a ocupação da casa e o perfil do grupo.'],
    en: ['Capacity for up to 20 guests in 10 air-conditioned suites.', 'Housekeepers available until 5:30 pm; kitchen operating until 8 pm.', 'The team coordinator lives on the property and can assist with operational matters.', 'Team composition and schedules can be adjusted according to house occupancy and group profile.'],
  },
  locationDetail: {
    pt: 'Condomínio de Itapororoca, na Estrada do Rio Verde, Trancoso – Bahia. Acesso direto à praia, segurança, privacidade e fácil deslocamento de carro até o Quadrado',
    en: 'Itapororoca Condominium, on Estrada do Rio Verde, Trancoso – Bahia. Direct beach access, security, privacy and easy drive to the Quadrado',
  },
  features: ['pe-na-areia', 'piscina', 'vista-mar'],
};

const SANTARITA: Property = {
  id: 'casa-santa-rita-itaquena', code: 'TBA-318', name: { pt: 'Casa Santa Rita', en: 'Casa Santa Rita' },
  purpose: ['aluguel'], location: 'Praia de Itaquena', suites: 10, guests: 20, baths: 9, area: '12.000 m²',
  price: { pt: 'R$ 35.000 / diária', en: 'R$ 35,000 / night' },
  priceLow: { pt: 'R$ 25.000 / diária', en: 'R$ 25,000 / night' },
  carnaval: { pt: 'R$ 200.000 (pacote de 5 diárias) — disponível para 2027', en: 'R$ 200,000 (5-night package) — available for 2027' },
  reveillon: { pt: 'R$ 1.100.000 (pacote de 10 diárias) — indisponível', en: 'R$ 1,100,000 (10-night package) — unavailable' },
  seasonHigh: { pt: 'Dezembro, janeiro, fevereiro, março, julho e feriados', en: 'December, January, February, March, July and holidays' },
  seasonLow: { pt: 'Abril a novembro', en: 'April to November' },
  image: '/img/santarita/01.jpg',
  gallery: ['/img/santarita/01.webp','/img/santarita/02.webp','/img/santarita/03.webp','/img/santarita/04.webp','/img/santarita/05.webp','/img/santarita/06.webp','/img/santarita/07.webp','/img/santarita/08.webp','/img/santarita/09.webp','/img/santarita/10.webp','/img/santarita/11.webp','/img/santarita/12.webp','/img/santarita/13.webp','/img/santarita/14.webp','/img/santarita/15.webp','/img/santarita/16.webp','/img/santarita/17.webp','/img/santarita/18.webp','/img/santarita/19.webp','/img/santarita/20.webp'], featured: false,
  amenities: {
    pt: ['Casa em frente ao mar, na Praia de Itaquena', 'Terreno de aproximadamente 12.000 m² com amplos jardins', 'Acesso direto à praia', '10 suítes climatizadas', 'Piscina aquecida', 'Academia, sauna e sala de massagem', 'Apoio de praia completo e bar de praia', 'Área gourmet com churrasqueira', 'Hidromassagem', 'Adega de vinhos e cervejeira', 'Máquina de gelo', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada', 'Deck e jardim', 'Lavanderia', 'Caixa de som e TV Sky', 'Roupas de cama, mesa e banho e toalhas de piscina', 'Estacionamento'],
    en: ['Beachfront house on Itaquena Beach', 'Plot of approximately 12,000 m² with large gardens', 'Direct beach access', '10 air-conditioned suites', 'Heated pool', 'Gym, sauna and massage room', 'Full beach support and beach bar', 'Gourmet area with barbecue', 'Hot tub', 'Wine cellar and beer cooler', 'Ice machine', 'Living room, dining room and TV room', 'Equipped kitchen', 'Deck and garden', 'Laundry', 'Sound system and Sky TV', 'Bed, table and bath linens and pool towels', 'Parking'],
  },
  staff: {
    pt: ['Cozinheira', '2 arrumadeiras', 'Auxiliar de cozinha', 'Copeiro', 'Piscineiro / Jardineiro'],
    en: ['Cook', '2 housekeepers', 'Kitchen assistant', 'Butler', 'Pool attendant / Gardener'],
  },
  description: {
    pt: 'Em frente ao mar, na exclusiva Praia de Itaquena, a Casa Santa Rita oferece uma experiência única de hospedagem em meio à natureza preservada de Trancoso.\n\nImplantada em um terreno de aproximadamente 12.000 m², a propriedade proporciona total privacidade, amplos jardins e acesso direto à praia. Com arquitetura integrada ao cenário natural, a casa acomoda confortavelmente até 20 hóspedes em 10 suítes climatizadas.\n\nA estrutura de lazer inclui piscina aquecida, academia, sauna, sala de massagem, apoio de praia completo, bar de praia, espaços de convivência e área gourmet, criando o ambiente ideal para famílias e grupos que buscam conforto, exclusividade e serviços de alto padrão.\n\nLocalizada a cerca de 3,5 km do Quadrado de Trancoso, a casa combina isolamento, tranquilidade e fácil acesso aos principais atrativos da região.',
    en: 'Beachfront, on the exclusive Itaquena Beach, Casa Santa Rita offers a unique lodging experience amid the preserved nature of Trancoso.\n\nSet on a plot of approximately 12,000 m², the property provides total privacy, large gardens and direct beach access. With architecture integrated into the natural setting, the house comfortably accommodates up to 20 guests in 10 air-conditioned suites.\n\nThe leisure structure includes a heated pool, gym, sauna, massage room, full beach support, beach bar, social spaces and a gourmet area, creating the ideal environment for families and groups seeking comfort, exclusivity and high-standard services.\n\nLocated about 3.5 km from the Quadrado of Trancoso, the house combines isolation, tranquility and easy access to the main attractions of the region.',
  },
  notes: {
    pt: ['Capacidade para até 20 hóspedes em 10 suítes climatizadas; 9 banheiros e 1 lavabo.'],
    en: ['Capacity for up to 20 guests in 10 air-conditioned suites; 9 bathrooms and 1 guest bathroom.'],
  },
  locationDetail: {
    pt: 'Casa pé na areia na Praia de Itaquena, Trancoso – Bahia. Aproximadamente 3,5 km do Quadrado, cerca de 20 minutos do centro histórico e 35 minutos do Aeroporto Terravista',
    en: 'Beachfront house on Itaquena Beach, Trancoso – Bahia. Approximately 3.5 km from the Quadrado, about 20 minutes from the historic center and 35 minutes from Terravista Airport',
  },
  features: ['pe-na-areia', 'piscina'],
};

const TRAMA: Property = {
  id: 'casa-trama-altos-de-trancoso',
  code: 'TBA-330',
  name: { pt: 'Casa Trama', en: 'Casa Trama' },
  purpose: ['aluguel'],
  location: 'Altos de Trancoso',
  suites: 6,
  guests: 13,
  baths: 7,
  area: '600 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 450.000', en: 'R$ 450,000' },
  image: '/img/casatrama/01.jpg',
  gallery: ['/img/casatrama/01.webp','/img/casatrama/02.webp','/img/casatrama/03.webp','/img/casatrama/04.webp','/img/casatrama/05.webp','/img/casatrama/06.webp','/img/casatrama/07.webp','/img/casatrama/08.webp','/img/casatrama/09.webp','/img/casatrama/10.webp','/img/casatrama/11.webp','/img/casatrama/12.webp','/img/casatrama/13.webp','/img/casatrama/14.webp','/img/casatrama/15.webp','/img/casatrama/16.webp','/img/casatrama/17.webp'],
  amenities: {
    pt: ['Piscina privativa', 'Jacuzzi', 'Sauna', 'Espaço gourmet', 'Churrasqueira', 'Cozinha equipada', 'Adega de vinhos', 'Cervejeira', 'Máquina de lavar-louça', 'Lavanderia', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'TV a cabo', 'Sky', 'Sistema de som', 'Wi-Fi', 'Gerador', 'Ar-condicionado', 'Mosquiteiros', 'Estacionamento', 'Espreguiçadeiras e ombrelone', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia'],
    en: ['Private pool', 'Jacuzzi', 'Sauna', 'Gourmet area', 'Barbecue grill', 'Equipped kitchen', 'Wine cellar', 'Beer cooler', 'Dishwasher', 'Laundry room', 'Living room', 'Dining room', 'TV room', 'Cable TV', 'Sky', 'Sound system', 'Wi-Fi', 'Generator', 'Air conditioning', 'Mosquito nets', 'Parking', 'Sun loungers and parasol', 'Bed, table and bath linens', 'Pool and beach towels']
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 auxiliar de cozinha'],
    en: ['1 housekeeper', '1 cook', '1 kitchen assistant']
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, a Casa Trama é uma residência de arquitetura marcante, criada para acolher com conforto, leveza e total integração com a paisagem. O projeto, assinado pela arquiteta Beatriz Henriques, valoriza a construção local e traduz a essência de Trancoso em uma linguagem elegante e contemporânea.' + '\n\n' + 'Implantada em formato de L, a casa organiza seus ambientes de forma fluida, criando uma relação constante entre interior e exterior. Madeira, pedra, fibras naturais e elementos em bambu aparecem de maneira equilibrada, enquanto as amplas aberturas favorecem a luz natural, a ventilação cruzada e a presença do jardim em todos os espaços.' + '\n\n' + 'A propriedade dispõe de seis suítes e acomoda até 13 hóspedes. Os quartos foram planejados para oferecer privacidade e conforto, com closets, ar-condicionado e vistas para o jardim ou para a área da piscina.' + '\n\n' + 'Na área social, sala de estar, sala de jantar, sala de TV e cozinha equipada se conectam ao espaço gourmet e às áreas externas. Piscina, jacuzzi, sauna e diferentes ambientes de convivência completam a experiência, tornando a casa ideal para famílias e grupos de amigos.' + '\n\n' + 'Publicada em veículos de arquitetura e decoração como Casa Vogue Brasil e Casa Claudia, a Casa Trama combina sofisticação discreta, materiais naturais e uma atmosfera que parece pertencer ao lugar desde sempre.',
    en: 'Located in the Altos de Trancoso gated community, Casa Trama is a residence of striking architecture, created to welcome with comfort, lightness and total integration with the landscape. The project, designed by architect Beatriz Henriques, values local construction and translates the essence of Trancoso into an elegant and contemporary language.' + '\n\n' + 'Implanted in an L shape, the house organizes its spaces fluidly, creating a constant relationship between interior and exterior. Wood, stone, natural fibers and bamboo elements appear in a balanced way, while the wide openings favor natural light, cross ventilation and the presence of the garden in every space.' + '\n\n' + 'The property has six suites and accommodates up to 13 guests. The bedrooms were planned to offer privacy and comfort, with walk-in closets, air conditioning and views of the garden or the pool area.' + '\n\n' + 'In the social area, the living room, dining room, TV room and equipped kitchen connect to the gourmet space and the outdoor areas. Pool, jacuzzi, sauna and different gathering spaces complete the experience, making the house ideal for families and groups of friends.' + '\n\n' + 'Published in architecture and decoration media such as Casa Vogue Brasil and Casa Claudia, Casa Trama combines discreet sophistication, natural materials and an atmosphere that seems to have always belonged to this place.'
  },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, em Trancoso, Bahia. Aproximadamente 10 minutos do Quadrado Histórico e 15 minutos das praias. Região residencial com privacidade, segurança e fácil acesso aos principais pontos da vila.',
    en: 'Altos de Trancoso gated community, in Trancoso, Bahia. Approximately 10 minutes from the historic Quadrado and 15 minutes from the beaches. A residential area with privacy, security and easy access to the main spots of the village.'
  },
  features: ['piscina', 'condominio']
};

const TIZZI: Property = {
  id: 'casa-tizzi-altos-de-trancoso',
  code: 'TBA-329',
  name: { pt: 'Casa Tizzi', en: 'Casa Tizzi' },
  purpose: ['aluguel'],
  location: 'Altos de Trancoso',
  suites: 3,
  guests: 6,
  baths: 3,
  area: '500 m²',
  price: { pt: 'R$ 3.800 / diária', en: 'R$ 3,800 / night' },
  priceLow: { pt: 'R$ 3.200 / diária', en: 'R$ 3,200 / night' },
  carnaval: { pt: 'R$ 30.000 (pacote de 5 dias)', en: 'R$ 30,000 (5-day package)' },
  reveillon: { pt: 'R$ 150.000 (pacote de 10 dias)', en: 'R$ 150,000 (10-day package)' },
  image: '/img/casatizzi/01.jpg',
  gallery: ['/img/casatizzi/01.webp','/img/casatizzi/02.webp','/img/casatizzi/03.webp','/img/casatizzi/04.webp','/img/casatizzi/05.webp','/img/casatizzi/06.webp','/img/casatizzi/07.webp','/img/casatizzi/08.webp','/img/casatizzi/09.webp','/img/casatizzi/10.webp','/img/casatizzi/11.webp','/img/casatizzi/12.webp','/img/casatizzi/13.webp','/img/casatizzi/14.webp','/img/casatizzi/15.webp','/img/casatizzi/16.webp','/img/casatizzi/17.webp','/img/casatizzi/18.webp','/img/casatizzi/19.webp','/img/casatizzi/20.webp','/img/casatizzi/21.webp','/img/casatizzi/22.webp','/img/casatizzi/23.webp','/img/casatizzi/24.webp','/img/casatizzi/25.webp','/img/casatizzi/26.webp','/img/casatizzi/27.webp','/img/casatizzi/28.webp','/img/casatizzi/29.webp','/img/casatizzi/30.webp','/img/casatizzi/31.webp','/img/casatizzi/32.webp','/img/casatizzi/33.webp','/img/casatizzi/34.webp'],
  amenities: {
    pt: ['Cozinha gourmet completa', 'Piscina privativa', 'Bar junto à piscina', 'Área externa para confraternizações', 'Ambientes amplos e integrados', 'Condomínio fechado com segurança'],
    en: ['Full gourmet kitchen', 'Private pool', 'Bar by the pool', 'Outdoor area for gatherings', 'Spacious integrated living areas', 'Gated community with security']
  },
  staff: {
    pt: ['1 cozinheira', '1 arrumadeira'],
    en: ['1 cook', '1 housekeeper']
  },
  description: {
    pt: 'Localizada em um dos condomínios mais desejados de Trancoso, a Casa Tizzi combina arquitetura contemporânea, conforto e integração entre os ambientes. O projeto, assinado pela arquiteta Bia Bittencourt e executado por Ricardo Salem, foi pensado para proporcionar uma estadia tranquila, elegante e acolhedora.' + '\n\n' + 'Implantada em um terreno de aproximadamente 2.700 m², com cerca de 500 m² de área construída, a residência oferece espaços amplos e bem distribuídos, ideais para receber famílias ou pequenos grupos com privacidade e conforto.' + '\n\n' + 'A casa dispõe de 3 suítes, áreas sociais integradas e uma atmosfera que valoriza a convivência. A cozinha gourmet se conecta aos espaços de lazer, criando um ambiente convidativo para refeições especiais, encontros e momentos de descanso.' + '\n\n' + 'Na área externa, a piscina, o bar e os espaços de convivência formam um cenário agradável para aproveitar os dias em Trancoso, com segurança e total privacidade dentro do condomínio.',
    en: 'Located in one of the most desired gated communities in Trancoso, Casa Tizzi combines contemporary architecture, comfort and integration between spaces. The project, designed by architect Bia Bittencourt and built by Ricardo Salem, was conceived to provide a calm, elegant and welcoming stay.' + '\n\n' + 'Set on a plot of approximately 2,700 m², with about 500 m² of built area, the residence offers spacious and well-distributed spaces, ideal for hosting families or small groups with privacy and comfort.' + '\n\n' + 'The house has 3 suites, integrated social areas and an atmosphere that values togetherness. The gourmet kitchen connects to the leisure spaces, creating an inviting setting for special meals, gatherings and moments of rest.' + '\n\n' + 'Outside, the pool, the bar and the lounge areas form a pleasant setting to enjoy the days in Trancoso, with security and total privacy inside the community.'
  },
  features: ['piscina', 'condominio']
};

const LILI: Property = {
  id: 'casa-lili-altos-de-trancoso',
  code: 'TBA-328',
  name: { pt: 'Casa Lili', en: 'Casa Lili' },
  purpose: ['aluguel', 'venda'],
  location: 'Altos de Trancoso',
  suites: 4,
  guests: 8,
  baths: 4,
  area: '—',
  price: { pt: 'R$ 4.900 / diária', en: 'R$ 4,900 / night' },
  priceLow: { pt: 'R$ 3.000 / diária', en: 'R$ 3,000 / night' },
  carnaval: { pt: 'R$ 45.000 (pacote de 5 diárias)', en: 'R$ 45,000 (5-night package)' },
  reveillon: { pt: 'R$ 150.000 (pacote de 10 diárias)', en: 'R$ 150,000 (10-night package)' },
  salePrice: { pt: 'R$ 5.500.000', en: 'R$ 5,500,000' },
  image: '/img/casalili/01.jpg',
  gallery: ['/img/casalili/01.webp', '/img/casalili/02.webp', '/img/casalili/03.webp', '/img/casalili/04.webp', '/img/casalili/05.webp', '/img/casalili/06.webp', '/img/casalili/07.webp', '/img/casalili/08.webp', '/img/casalili/09.webp', '/img/casalili/10.webp', '/img/casalili/11.webp', '/img/casalili/12.webp', '/img/casalili/13.webp', '/img/casalili/14.webp', '/img/casalili/15.webp', '/img/casalili/16.webp', '/img/casalili/17.webp', '/img/casalili/18.webp', '/img/casalili/19.webp', '/img/casalili/20.webp', '/img/casalili/21.webp', '/img/casalili/22.webp', '/img/casalili/23.webp', '/img/casalili/24.webp'],
  amenities: {
    pt: ['Sala de estar', 'Sala de jantar', 'Cozinha equipada', 'Área gourmet', 'Piscina privativa', 'Deck', 'Varanda', 'Jardim', 'Duas salas com TV', 'SKY', 'Netflix', 'Wi-Fi', 'Churrasqueira', 'Forno de pizza', 'Máquina de gelo', 'Poço artesiano', 'Roupas de cama, mesa e banho', 'Condomínio com segurança'],
    en: ['Living room', 'Dining room', 'Equipped kitchen', 'Gourmet area', 'Private pool', 'Deck', 'Veranda', 'Garden', 'Two TV rooms', 'SKY TV', 'Netflix', 'Wi-Fi', 'Barbecue', 'Pizza oven', 'Ice maker', 'Artesian well', 'Bed, table and bath linens', 'Gated community with security'],
  },
  staff: {
    pt: ['Camareira', 'Cozinheira', 'Jardineiro', 'Serviço de concierge'],
    en: ['Housekeeper', 'Cook', 'Gardener', 'Concierge service'],
  },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, a Casa Lili é uma residência ampla e acolhedora, pensada para receber famílias e grupos de amigos com conforto, privacidade e praticidade.\n\nOs ambientes generosos, a decoração cuidadosamente escolhida e a integração entre as áreas internas e externas criam uma atmosfera leve e convidativa. A sala de estar, a sala de jantar e a varanda se conectam ao jardim, permitindo que a natureza faça parte da experiência em todos os momentos.\n\nA propriedade dispõe de quatro suítes climatizadas e acomoda até oito hóspedes. A área externa reúne piscina privativa, deck, jardim e espaço gourmet, formando o cenário ideal para refeições demoradas, encontros entre amigos e dias tranquilos em Trancoso.\n\nA localização é outro destaque: a casa está a poucos minutos de caminhada do Quadrado Histórico e da Praia dos Coqueiros, oferecendo fácil acesso aos principais pontos da vila sem abrir mão da tranquilidade de um condomínio fechado.',
    en: 'Located in Condomínio Altos de Trancoso, Casa Lili is a spacious and welcoming residence, designed to host families and groups of friends with comfort, privacy and practicality.\n\nThe generous spaces, the carefully chosen décor and the integration between indoor and outdoor areas create a light and inviting atmosphere. The living room, dining room and veranda connect to the garden, allowing nature to be part of the experience at all times.\n\nThe property has four air-conditioned suites and accommodates up to eight guests. The outdoor area brings together a private pool, deck, garden and gourmet space, forming the ideal setting for long meals, gatherings with friends and peaceful days in Trancoso.\n\nThe location is another highlight: the house is just a few minutes on foot from the Historic Quadrado and Coqueiros Beach, offering easy access to the main spots of the village without giving up the tranquility of a gated community.',
  },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso. Aproximadamente 10 minutos de caminhada do Quadrado Histórico e 800 metros da Praia dos Coqueiros, com fácil acesso a restaurantes, lojas e praias da região.',
    en: 'Condomínio Altos de Trancoso. About a 10-minute walk from the Historic Quadrado and 800 meters from Coqueiros Beach, with easy access to restaurants, shops and beaches in the region.',
  },
  features: ['piscina', 'condominio'],
};

const C23: Property = {
  id: 'casa-coqueiral-23',
  code: 'TBA-327',
  name: { pt: 'Casa Coqueiral 23', en: 'Casa Coqueiral 23' },
  purpose: ['aluguel'],
  location: 'Condomínio Coqueiral',
  suites: 4,
  guests: 10,
  baths: 5,
  area: '280 m²',
  price: { pt: 'A partir de R$ 3.000 / diária', en: 'From R$ 3,000 / night' },
  priceLow: { pt: 'A partir de R$ 1.800 / diária', en: 'From R$ 1,800 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 100.000', en: 'R$ 100,000' },
  image: '/img/coqueiral23/01.jpg',
  gallery: ['/img/coqueiral23/01.webp', '/img/coqueiral23/02.webp', '/img/coqueiral23/03.webp', '/img/coqueiral23/04.webp', '/img/coqueiral23/05.webp', '/img/coqueiral23/06.webp', '/img/coqueiral23/07.webp', '/img/coqueiral23/08.webp', '/img/coqueiral23/09.webp', '/img/coqueiral23/10.webp', '/img/coqueiral23/11.webp', '/img/coqueiral23/12.webp', '/img/coqueiral23/13.webp', '/img/coqueiral23/14.webp', '/img/coqueiral23/15.webp'],
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet', 'Churrasqueira', 'Mesa de sinuca', 'Sala de estar integrada à varanda', 'Cozinha completa', 'Terraço e varandas', 'Varanda com rede', 'Jardim', 'Ducha externa', 'Ar-condicionado', 'Roupas de cama e banho', 'Wi-Fi', 'Equipamentos de praia', 'Iluminação externa', 'Estacionamento privativo', 'Serviço de limpeza', 'Jacuzzi / banheira de hidromassagem', 'Decoração com referências praianas', 'Lavadora e secadora'],
    en: ['Private pool', 'Gourmet area', 'Barbecue', 'Pool table', 'Living room integrated with the veranda', 'Full kitchen', 'Terrace and verandas', 'Veranda with hammock', 'Garden', 'Outdoor shower', 'Air conditioning', 'Bed and bath linens', 'Wi-Fi', 'Beach equipment', 'Outdoor lighting', 'Private parking', 'Cleaning service', 'Jacuzzi / hot tub', 'Beach-inspired décor', 'Washer and dryer'],
  },
  staff: {
    pt: ['Serviço de limpeza'],
    en: ['Cleaning service'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a Casa 23 Coqueiral oferece conforto, privacidade e praticidade em uma região tranquila de Trancoso. A propriedade está a aproximadamente 3 km do Quadrado Histórico, permitindo fácil acesso ao centro da vila e às principais praias, sem abrir mão da segurança e do sossego de um condomínio fechado.\n\nCom ambientes amplos e integrados, a casa foi planejada para receber famílias e grupos de amigos com comodidade. A sala de estar se conecta à varanda e à área externa, criando uma circulação leve entre os espaços internos, o jardim e a piscina.\n\nA residência dispõe de quatro suítes climatizadas e acomoda confortavelmente até dez hóspedes. A decoração combina referências praianas, materiais naturais e uma atmosfera descontraída, mantendo o charme característico de Trancoso.\n\nA área de lazer é um dos principais destaques da propriedade. A piscina privativa se integra ao espaço gourmet com churrasqueira e mesa de sinuca, formando um ambiente completo para refeições, descanso e momentos de convivência.\n\nCom cozinha equipada, Wi-Fi, estacionamento privativo e serviço de limpeza, a Casa 23 Coqueiral reúne a estrutura necessária para uma hospedagem confortável e bem localizada no sul da Bahia.',
    en: 'Located in Condomínio Coqueiral, Casa 23 Coqueiral offers comfort, privacy and practicality in a quiet region of Trancoso. The property is approximately 3 km from the Historic Quadrado, allowing easy access to the village center and the main beaches, without giving up the security and peace of a gated community.\n\nWith ample, integrated spaces, the house was planned to host families and groups of friends in comfort. The living room connects to the veranda and the outdoor area, creating a light flow between the indoor spaces, the garden and the pool.\n\nThe residence has four air-conditioned suites and comfortably accommodates up to ten guests. The décor combines beach references, natural materials and a relaxed atmosphere, keeping the characteristic charm of Trancoso.\n\nThe leisure area is one of the main highlights of the property. The private pool integrates with the gourmet space with barbecue and pool table, forming a complete environment for meals, rest and moments together.\n\nWith an equipped kitchen, Wi-Fi, private parking and cleaning service, Casa 23 Coqueiral brings together the structure needed for a comfortable and well-located stay in the south of Bahia.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso. Aproximadamente 3 km do Quadrado Histórico e menos de 10 minutos de carro do centro da vila, com fácil acesso às praias dos Nativos, Coqueiros e demais praias da região. Condomínio fechado com segurança 24 horas.',
    en: 'Condomínio Coqueiral, Trancoso. Approximately 3 km from the Historic Quadrado and less than 10 minutes by car from the village center, with easy access to Nativos, Coqueiros and other beaches in the region. Gated community with 24-hour security.',
  },
  notes: {
    pt: ['A configuração das suítes e os serviços disponíveis estão sujeitos a confirmação.'],
    en: ['Suite configuration and available services are subject to confirmation.'],
  },
  features: ['piscina', 'condominio'],
};

const JV15: Property = {
  id: 'casa-15-joao-vieira',
  code: 'TBA-326',
  name: { pt: 'Casa 15 João Vieira', en: 'Casa 15 João Vieira' },
  purpose: ['aluguel'],
  location: 'João Vieira',
  suites: 5,
  guests: 14,
  baths: 5,
  area: '500 m²',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'R$ 60.000', en: 'R$ 60,000' },
  reveillon: { pt: 'R$ 150.000', en: 'R$ 150,000' },
  image: '/img/joaovieira15/01.jpg',
  gallery: ['/img/joaovieira15/01.webp', '/img/joaovieira15/02.webp', '/img/joaovieira15/03.webp', '/img/joaovieira15/04.webp', '/img/joaovieira15/05.webp', '/img/joaovieira15/06.webp', '/img/joaovieira15/07.webp', '/img/joaovieira15/08.webp', '/img/joaovieira15/09.webp', '/img/joaovieira15/10.webp', '/img/joaovieira15/11.webp', '/img/joaovieira15/12.webp', '/img/joaovieira15/13.webp', '/img/joaovieira15/14.webp', '/img/joaovieira15/15.webp', '/img/joaovieira15/16.webp', '/img/joaovieira15/17.webp', '/img/joaovieira15/18.webp', '/img/joaovieira15/19.webp', '/img/joaovieira15/20.webp', '/img/joaovieira15/21.webp', '/img/joaovieira15/22.webp', '/img/joaovieira15/23.webp', '/img/joaovieira15/24.webp', '/img/joaovieira15/25.webp', '/img/joaovieira15/26.webp', '/img/joaovieira15/27.webp', '/img/joaovieira15/28.webp'],
  amenities: {
    pt: ['2 salas de estar', 'Sala de jantar', 'Cozinha principal', 'Cozinha de apoio', 'Piscina orgânica revestida em pedra', 'Sistema de tratamento por luz ultravioleta', 'Jardins tropicais', 'Espaço para yoga', 'Churrasqueira', 'Áreas de convivência e descanso ao ar livre'],
    en: ['2 living rooms', 'Dining room', 'Main kitchen', 'Support kitchen', 'Organic stone-lined pool', 'UV light water treatment system', 'Tropical gardens', 'Yoga space', 'Barbecue', 'Outdoor gathering and resting areas'],
  },
  staff: {
    pt: ['1 camareira'],
    en: ['1 housekeeper'],
  },
  description: {
    pt: 'Localizada no tranquilo bairro residencial João Vieira, a Casa 15 João Vieira é uma propriedade ampla, acolhedora e cercada por jardins tropicais. A aproximadamente dez minutos de caminhada do Quadrado Histórico, oferece fácil acesso ao centro de Trancoso sem abrir mão de privacidade e tranquilidade.\n\nCom arquitetura rústico-chique, a casa combina materiais naturais, mobiliário em madeira e uma seleção cuidadosa de arte brasileira. Os ambientes foram pensados para proporcionar conforto e integração com a natureza, criando uma atmosfera leve e autêntica.\n\nA propriedade está distribuída entre a casa principal e três chalés independentes, acomodando confortavelmente famílias e grupos de amigos. Ao todo, são cinco quartos, sete camas e capacidade para até 14 hóspedes.\n\nA área externa é um dos grandes destaques da casa. Cercada por vegetação tropical, a piscina orgânica revestida em pedra possui sistema de tratamento por luz ultravioleta e se integra aos diferentes espaços de descanso e convivência do jardim.\n\nA casa conta ainda com duas salas de estar, espaço dedicado para yoga, churrasqueira e duas cozinhas, sendo uma principal e outra de apoio, oferecendo praticidade durante toda a hospedagem.',
    en: 'Located in the quiet residential João Vieira neighborhood, Casa 15 João Vieira is a spacious, welcoming property surrounded by tropical gardens. About a ten-minute walk from the Historic Quadrado, it offers easy access to the center of Trancoso without giving up privacy and tranquility.\n\nWith rustic-chic architecture, the house combines natural materials, wooden furniture and a careful selection of Brazilian art. The spaces were designed to provide comfort and integration with nature, creating a light and authentic atmosphere.\n\nThe property is spread between the main house and three independent bungalows, comfortably accommodating families and groups of friends. In total, there are five bedrooms, seven beds and capacity for up to 14 guests.\n\nThe outdoor area is one of the highlights of the house. Surrounded by tropical vegetation, the organic stone-lined pool has an ultraviolet light treatment system and integrates with the different resting and gathering spaces in the garden.\n\nThe house also offers two living rooms, a dedicated yoga space, a barbecue and two kitchens — one main and one support — providing practicality throughout the stay.',
  },
  locationDetail: {
    pt: 'Bairro João Vieira, Trancoso. Aproximadamente 10 minutos de caminhada do Quadrado Histórico, com fácil acesso às praias, restaurantes, lojas e principais pontos da vila.',
    en: 'João Vieira neighborhood, Trancoso. About a 10-minute walk from the Historic Quadrado, with easy access to beaches, restaurants, shops and the main spots of the village.',
  },
  notes: {
    pt: ['A configuração completa das camas deverá ser confirmada no momento da reserva.'],
    en: ['The full bed configuration must be confirmed at the time of booking.'],
  },
  features: ['piscina'],
};

const JV14: Property = {
  id: 'casa-14-joao-vieira',
  code: 'TBA-325',
  name: { pt: 'Casa 14 João Vieira', en: 'Casa 14 João Vieira' },
  purpose: ['aluguel'],
  location: 'João Vieira',
  suites: 5,
  guests: 10,
  baths: 6,
  area: '400 m²',
  price: { pt: 'R$ 3.400 / diária', en: 'R$ 3,400 / night' },
  priceLow: { pt: 'R$ 2.800 / diária', en: 'R$ 2,800 / night' },
  carnaval: { pt: 'R$ 50.000 (pacote de 5 diárias)', en: 'R$ 50,000 (5-night package)' },
  reveillon: { pt: 'R$ 140.000', en: 'R$ 140,000' },
  image: '/img/joaovieira14/01.jpg',
  gallery: ['/img/joaovieira14/01.webp', '/img/joaovieira14/02.webp', '/img/joaovieira14/03.webp', '/img/joaovieira14/04.webp', '/img/joaovieira14/05.webp', '/img/joaovieira14/06.webp', '/img/joaovieira14/07.webp', '/img/joaovieira14/08.webp', '/img/joaovieira14/09.webp', '/img/joaovieira14/10.webp', '/img/joaovieira14/11.webp', '/img/joaovieira14/12.webp', '/img/joaovieira14/13.webp', '/img/joaovieira14/14.webp', '/img/joaovieira14/15.webp', '/img/joaovieira14/16.webp', '/img/joaovieira14/17.webp', '/img/joaovieira14/18.webp', '/img/joaovieira14/19.webp', '/img/joaovieira14/20.webp', '/img/joaovieira14/21.webp', '/img/joaovieira14/22.webp', '/img/joaovieira14/23.webp', '/img/joaovieira14/24.webp', '/img/joaovieira14/25.webp', '/img/joaovieira14/26.webp', '/img/joaovieira14/27.webp', '/img/joaovieira14/28.webp', '/img/joaovieira14/29.webp', '/img/joaovieira14/30.webp', '/img/joaovieira14/31.webp'],
  amenities: {
    pt: ['Sala de estar', 'Sala de jantar', 'Sala de TV', 'Sala de estar com inspiração marroquina', 'Cozinha totalmente equipada', 'Varanda', '3 terraços', 'Área gourmet externa', 'Churrasqueira', 'Mesa circular para 10 pessoas', 'Piscina privativa em Cristal Pool', 'Jardim', 'Banheiro de apoio à piscina', 'Lavanderia', 'Espaço de trabalho', 'Wi-Fi', 'TV a cabo', 'Sistema de som compatível com MP3', 'Roupas de cama, mesa e banho', 'Estacionamento gratuito', 'Vista para o jardim', 'Vista para área verde', 'Piscina disponível durante todo o ano'],
    en: ['Living room', 'Dining room', 'TV room', 'Moroccan-inspired sitting room', 'Fully equipped kitchen', 'Veranda', '3 terraces', 'Outdoor gourmet area', 'Barbecue', 'Round table for 10 people', 'Private Cristal Pool swimming pool', 'Garden', 'Pool support bathroom', 'Laundry', 'Workspace', 'Wi-Fi', 'Cable TV', 'MP3-compatible sound system', 'Bed, table and bath linens', 'Free parking', 'Garden view', 'Green area view', 'Pool available year-round'],
  },
  staff: {
    pt: ['1 camareira', '1 cozinheira', 'Arrumação e limpeza diárias', 'Preparo do café da manhã'],
    en: ['1 housekeeper', '1 cook', 'Daily housekeeping and cleaning', 'Breakfast preparation'],
  },
  description: {
    pt: 'Localizada no bairro residencial João Vieira, a Casa 14 João Vieira reúne arquitetura autoral, conforto e uma atmosfera acolhedora em uma das áreas mais agradáveis de Trancoso.\n\nO projeto combina referências greco-baianas com materiais naturais e espaços amplos, criando uma residência elegante e descontraída. A distribuição favorece a convivência, mas preserva a privacidade dos hóspedes por meio de cinco suítes independentes e ambientes sociais bem definidos.\n\nA área interna conta com sala de estar, sala de jantar, sala de TV, cozinha ampla e totalmente equipada, além de lavanderia. Na área externa, a casa oferece espaço gourmet com churrasqueira, mesa circular para dez pessoas, três terraços, jardim e uma piscina orgânica em Cristal Pool, integrada à paisagem e aos espaços de descanso.\n\nA casa inclui serviços diários de arrumação e limpeza, além do preparo do café da manhã, proporcionando uma hospedagem prática e confortável. Todos os ambientes da propriedade ficam disponíveis aos hóspedes durante a estadia.',
    en: 'Located in the residential João Vieira neighborhood, Casa 14 João Vieira brings together authorial architecture, comfort and a welcoming atmosphere in one of the most pleasant areas of Trancoso.\n\nThe project combines Greco-Bahian references with natural materials and ample spaces, creating an elegant and relaxed residence. The layout favors togetherness while preserving the privacy of guests through five independent suites and well-defined social areas.\n\nInside, the house offers a living room, dining room, TV room, a large fully equipped kitchen and a laundry room. Outside, it features a gourmet space with barbecue, a round table for ten people, three terraces, a garden and an organic Cristal Pool swimming pool, integrated into the landscape and the resting areas.\n\nThe house includes daily housekeeping and cleaning services, as well as breakfast preparation, providing a practical and comfortable stay. All areas of the property are available to guests throughout their stay.',
  },
  locationDetail: {
    pt: 'Bairro João Vieira, Trancoso. Área residencial tranquila e cercada por vegetação, com fácil acesso ao Quadrado Histórico, praias, restaurantes e lojas da vila.',
    en: 'João Vieira neighborhood, Trancoso. Quiet residential area surrounded by vegetation, with easy access to the Historic Quadrado, beaches, restaurants and village shops.',
  },
  notes: {
    pt: ['Animais permitidos mediante confirmação prévia.'],
    en: ['Pets allowed upon prior confirmation.'],
  },
  features: ['piscina'],
};

const JV13: Property = {
  id: 'casa-13-joao-vieira',
  code: 'TBA-324',
  name: { pt: 'Casa 13 João Vieira', en: 'Casa 13 João Vieira' },
  purpose: ['aluguel'],
  location: 'João Vieira',
  suites: 4,
  guests: 8,
  baths: 4,
  area: '400 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/joaovieira13/01.jpg',
  gallery: ['/img/joaovieira13/01.webp', '/img/joaovieira13/02.webp', '/img/joaovieira13/03.webp', '/img/joaovieira13/04.webp', '/img/joaovieira13/05.webp', '/img/joaovieira13/06.webp', '/img/joaovieira13/07.webp', '/img/joaovieira13/08.webp', '/img/joaovieira13/09.webp', '/img/joaovieira13/10.webp', '/img/joaovieira13/11.webp', '/img/joaovieira13/12.webp', '/img/joaovieira13/13.webp', '/img/joaovieira13/14.webp', '/img/joaovieira13/15.webp', '/img/joaovieira13/16.webp', '/img/joaovieira13/17.webp', '/img/joaovieira13/18.webp', '/img/joaovieira13/19.webp', '/img/joaovieira13/20.webp', '/img/joaovieira13/21.webp', '/img/joaovieira13/22.webp', '/img/joaovieira13/23.webp', '/img/joaovieira13/24.webp', '/img/joaovieira13/25.webp', '/img/joaovieira13/26.webp', '/img/joaovieira13/27.webp', '/img/joaovieira13/28.webp', '/img/joaovieira13/29.webp', '/img/joaovieira13/30.webp', '/img/joaovieira13/31.webp', '/img/joaovieira13/32.webp', '/img/joaovieira13/33.webp', '/img/joaovieira13/34.webp'],
  amenities: {
    pt: ['Ar-condicionado', 'Mosquiteiros', 'Adega de vinhos', 'Ofurô', 'Churrasqueira', 'Piscina privativa', 'Cozinha equipada', 'Poço artesiano', 'Espaço gourmet', 'Roupas de cama, mesa e banho', 'Espreguiçadeiras e ombrelone', 'Sala de estar', 'Estacionamento', 'Sala de jantar', 'Freezer', 'Secadores de cabelo', 'Wi-Fi', 'Som ambiente', 'Lavabo', 'Toalhas de praia', 'Lavanderia', 'Ventiladores', 'Máquina de gelo'],
    en: ['Air conditioning', 'Mosquito nets', 'Wine cellar', 'Ofuro tub', 'Barbecue', 'Private pool', 'Equipped kitchen', 'Artesian well', 'Gourmet space', 'Bed, table and bath linens', 'Loungers and parasol', 'Living room', 'Parking', 'Dining room', 'Freezer', 'Hair dryers', 'Wi-Fi', 'Ambient sound system', 'Powder room', 'Beach towels', 'Laundry', 'Ceiling fans', 'Ice maker'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 jardineiro/piscineiro'],
    en: ['1 housekeeper', '1 cook', '1 gardener/pool attendant'],
  },
  description: {
    pt: 'Em uma das áreas residenciais mais agradáveis de Trancoso, a Casa 13 João Vieira combina arquitetura, arte e natureza em uma proposta acolhedora e cheia de personalidade. A localização permite chegar rapidamente ao Quadrado Histórico, mantendo a tranquilidade de um bairro cercado por vegetação.\n\nO projeto valoriza a linguagem rústico-chique característica da vila, com estruturas em madeira e vidro que aproximam os ambientes do jardim tropical. A decoração reúne obras e peças de artistas brasileiros, mobiliário em madeira e elementos naturais escolhidos com cuidado, criando espaços elegantes sem perder a leveza de uma casa de praia.\n\nA propriedade acomoda até oito hóspedes em quatro suítes. Três delas estão na casa principal e a quarta ocupa um chalé independente, uma distribuição que oferece conforto para famílias e grupos de amigos, além de mais privacidade para quem prefere uma acomodação separada.\n\nNa área externa, a piscina privativa se integra ao deck de madeira, às redes, às espreguiçadeiras e ao espaço gourmet. Rodeado pelo jardim, esse conjunto se torna o principal ambiente de convivência da casa, ideal para refeições ao ar livre e dias tranquilos em Trancoso.\n\nCom arquitetura assinada pelo escritório Vida de Vila e paisagismo de Juliana Favarato, a Casa 13 João Vieira traduz uma forma autêntica de viver Trancoso, reunindo conforto, bom gosto e contato constante com a natureza.',
    en: 'In one of the most pleasant residential areas of Trancoso, Casa 13 João Vieira combines architecture, art and nature in a welcoming proposal full of personality. The location allows quick access to the Historic Quadrado, while keeping the tranquility of a neighborhood surrounded by vegetation.\n\nThe project values the rustic-chic language characteristic of the village, with wood and glass structures that bring the spaces closer to the tropical garden. The décor brings together works and pieces by Brazilian artists, wooden furniture and carefully chosen natural elements, creating elegant spaces without losing the lightness of a beach house.\n\nThe property accommodates up to eight guests in four suites. Three of them are in the main house and the fourth occupies an independent bungalow, a layout that offers comfort for families and groups of friends, as well as more privacy for those who prefer separate accommodation.\n\nOutside, the private pool integrates with the wooden deck, hammocks, loungers and the gourmet space. Surrounded by the garden, this becomes the main gathering area of the house, ideal for outdoor meals and peaceful days in Trancoso.\n\nWith architecture by Vida de Vila and landscaping by Juliana Favarato, Casa 13 João Vieira translates an authentic way of living Trancoso, bringing together comfort, good taste and constant contact with nature.',
  },
  locationDetail: {
    pt: 'Bairro residencial João Vieira, próxima ao Quadrado Histórico, com fácil acesso às praias, restaurantes e lojas da vila.',
    en: 'Residential João Vieira neighborhood, close to the Historic Quadrado, with easy access to the village beaches, restaurants and shops.',
  },
  notes: {
    pt: ['A configuração das camas deverá ser solicitada previamente.'],
    en: ['Bed configuration must be requested in advance.'],
  },
  features: ['piscina'],
};

const C20: Property = {
  id: 'casa-coqueiral-20', code: 'TBA-323', name: { pt: 'Casa Coqueiral 20', en: 'Casa Coqueiral 20' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 9, guests: 21, baths: 10, area: '620 m²',
  price: { pt: 'R$ 6.000 / diária', en: 'R$ 6,000 / night' },
  priceLow: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 210.000 (pacote)', en: 'R$ 210,000 (package)' },
  image: '/img/coqueiral20/01.jpg',
  gallery: ['/img/coqueiral20/01.webp','/img/coqueiral20/02.webp','/img/coqueiral20/03.webp','/img/coqueiral20/04.webp','/img/coqueiral20/05.webp','/img/coqueiral20/06.webp','/img/coqueiral20/07.webp','/img/coqueiral20/08.webp','/img/coqueiral20/09.webp','/img/coqueiral20/10.webp','/img/coqueiral20/11.webp','/img/coqueiral20/12.webp','/img/coqueiral20/13.webp','/img/coqueiral20/14.webp','/img/coqueiral20/15.webp','/img/coqueiral20/16.webp','/img/coqueiral20/17.webp','/img/coqueiral20/18.webp','/img/coqueiral20/19.webp','/img/coqueiral20/20.webp','/img/coqueiral20/21.webp','/img/coqueiral20/22.webp','/img/coqueiral20/23.webp','/img/coqueiral20/24.webp','/img/coqueiral20/25.webp','/img/coqueiral20/26.webp','/img/coqueiral20/27.webp','/img/coqueiral20/28.webp','/img/coqueiral20/29.webp','/img/coqueiral20/30.webp','/img/coqueiral20/31.webp','/img/coqueiral20/32.webp','/img/coqueiral20/33.webp','/img/coqueiral20/34.webp','/img/coqueiral20/35.webp','/img/coqueiral20/36.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com hidromassagem integrada', 'Espaço gourmet com churrasqueira', 'Sala de estar com TV de 80 polegadas', 'Sala de jantar com mesa para até 20 pessoas', 'Cozinha completa', 'Suíte master com banheira de hidromassagem', 'Ar-condicionado nas suítes', 'Varandas com redes', 'Jardim com ducha externa', 'Área de lazer para crianças', 'Lavanderia equipada com lavadora e secadora', 'Wi-Fi', 'TV a cabo', 'Roupas de cama e banho', 'Estacionamento privativo', 'Condomínio fechado com segurança 24 horas'],
    en: ['Private pool with integrated jacuzzi', 'Gourmet space with barbecue', 'Living room with 80-inch TV', 'Dining room with table for up to 20 people', 'Full kitchen', 'Master suite with jacuzzi tub', 'Air conditioning in the suites', 'Verandas with hammocks', 'Garden with outdoor shower', 'Leisure area for children', 'Laundry room with washer and dryer', 'Wi-Fi', 'Cable TV', 'Bed and bath linens', 'Private parking', 'Gated condominium with 24-hour security'],
  },
  staff: {
    pt: ['Camareira', 'Serviço de limpeza', 'Manutenção da piscina', 'Manutenção do jardim'],
    en: ['Housekeeper', 'Cleaning service', 'Pool maintenance', 'Garden maintenance'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a Casa Coqueiral 20 é uma propriedade ampla e confortável, ideal para receber famílias numerosas e grupos de amigos em Trancoso. Implantada em um terreno de aproximadamente 1.000 m², a residência oferece espaços generosos, boa integração entre as áreas internas e externas e estrutura completa para estadias em grupo.\n\nCom nove suítes e capacidade para até 21 hóspedes, a casa foi planejada para proporcionar praticidade, privacidade e conforto. Sete suítes estão distribuídas na área interna da residência e duas ficam em estruturas externas, permitindo uma acomodação mais flexível entre adultos, crianças e diferentes núcleos familiares.\n\nA área social reúne sala de estar com TV de 80 polegadas, sala de jantar com mesa para até 20 pessoas e cozinha completa. Na área externa, a piscina com hidromassagem integrada se conecta ao jardim e ao espaço gourmet com churrasqueira, criando um ambiente agradável para refeições, descanso e momentos de convivência.\n\nA propriedade dispõe ainda de lavanderia equipada, estacionamento privativo, varanda com redes e espaços de lazer voltados para crianças. Com segurança 24 horas e acesso facilitado aos principais pontos de Trancoso, a Casa Coqueiral 20 combina amplitude, funcionalidade e uma atmosfera tranquila para aproveitar a vila com conforto.',
    en: 'Located in the Coqueiral Condominium, Casa Coqueiral 20 is a spacious and comfortable property, ideal for hosting large families and groups of friends in Trancoso. Set on a plot of approximately 1,000 m², the residence offers generous spaces, good integration between indoor and outdoor areas and complete structure for group stays.\n\nWith nine suites and capacity for up to 21 guests, the house was planned to provide practicality, privacy and comfort. Seven suites are distributed in the main residence and two are in external structures, allowing more flexible accommodation among adults, children and different family groups.\n\nThe social area brings together a living room with an 80-inch TV, a dining room with a table for up to 20 people and a full kitchen. Outdoors, the pool with integrated jacuzzi connects to the garden and the gourmet space with barbecue, creating a pleasant setting for meals, rest and gathering moments.\n\nThe property also features an equipped laundry room, private parking, a veranda with hammocks and leisure spaces for children. With 24-hour security and easy access to the main spots in Trancoso, Casa Coqueiral 20 combines spaciousness, functionality and a peaceful atmosphere to enjoy the village in comfort.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso — condomínio fechado com segurança 24 horas, a aproximadamente 7 minutos de mercados, farmácias, restaurantes e praias, com fácil acesso ao Quadrado Histórico.',
    en: 'Coqueiral Condominium, Trancoso — gated condominium with 24-hour security, approximately 7 minutes from markets, pharmacies, restaurants and beaches, with easy access to the Historic Quadrado.',
  },
  features: ['piscina', 'condominio'],
};
const C21: Property = {
  id: 'casa-coqueiral-21', code: 'TBA-322', name: { pt: 'Casa Coqueiral 21', en: 'Casa Coqueiral 21' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 12, baths: 6, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral21/01.jpg',
  gallery: ['/img/coqueiral21/01.webp','/img/coqueiral21/02.webp','/img/coqueiral21/03.webp','/img/coqueiral21/04.webp','/img/coqueiral21/05.webp','/img/coqueiral21/06.webp','/img/coqueiral21/07.webp','/img/coqueiral21/08.webp','/img/coqueiral21/09.webp','/img/coqueiral21/10.webp','/img/coqueiral21/11.webp','/img/coqueiral21/12.webp','/img/coqueiral21/13.webp','/img/coqueiral21/14.webp','/img/coqueiral21/15.webp','/img/coqueiral21/16.webp','/img/coqueiral21/17.webp','/img/coqueiral21/18.webp','/img/coqueiral21/19.webp','/img/coqueiral21/20.webp','/img/coqueiral21/21.webp','/img/coqueiral21/22.webp','/img/coqueiral21/23.webp','/img/coqueiral21/24.webp','/img/coqueiral21/25.webp','/img/coqueiral21/26.webp','/img/coqueiral21/27.webp','/img/coqueiral21/28.webp','/img/coqueiral21/29.webp','/img/coqueiral21/30.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Terraço com vista para a piscina', 'Varandas', 'Jardim', 'Sala de estar ampla', 'Cozinha equipada com forno, micro-ondas e cooktop', 'Ar-condicionado nos quartos', 'TV', 'Wi-Fi', 'Secadores de cabelo', 'Máquina de lavar', 'Estacionamento gratuito', 'Câmeras de segurança nas áreas externas', 'Condomínio fechado a 2,9 km do Quadrado'],
    en: ['Private pool', 'Terrace overlooking the pool', 'Verandas', 'Garden', 'Spacious living room', 'Equipped kitchen with oven, microwave and cooktop', 'Air conditioning in the bedrooms', 'TV', 'Wi-Fi', 'Hairdryers', 'Washing machine', 'Free parking', 'Security cameras in outdoor areas', 'Gated condominium 2.9 km from the Quadrado'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, em uma área tranquila e cercada por vegetação, a Casa Coqueiral 21 oferece uma estadia confortável e acolhedora em Trancoso. A propriedade combina a linguagem rústica característica da vila com ambientes amplos, claros e bem ventilados.\n\nA arquitetura valoriza a integração com o jardim e cria uma atmosfera descontraída, ideal para famílias e grupos de amigos. A piscina, o terraço e os espaços externos formam o centro da área de convivência, proporcionando momentos de descanso em contato com a natureza.\n\nA casa dispõe de cinco quartos e acomoda até 12 hóspedes. As acomodações contam com ar-condicionado, TV, banheiro privativo e secador de cabelo. A distribuição inclui quatro camas de casal, uma cama de casal grande e um sofá-cama, oferecendo flexibilidade para diferentes configurações de grupo.\n\nA área social reúne sala de estar, cozinha equipada e espaços voltados para a piscina e o jardim. Com Wi-Fi, estacionamento e fácil acesso ao Quadrado Histórico e às praias de Trancoso, a Casa Coqueiral 21 equilibra privacidade, praticidade e o estilo de vida do sul da Bahia.',
    en: 'Located in the Coqueiral Condominium, in a quiet area surrounded by vegetation, Casa Coqueiral 21 offers a comfortable and welcoming stay in Trancoso. The property combines the rustic style characteristic of the village with spacious, bright and well-ventilated rooms.\n\nThe architecture values integration with the garden and creates a relaxed atmosphere, ideal for families and groups of friends. The pool, terrace and outdoor spaces form the center of the gathering area, providing moments of rest in contact with nature.\n\nThe house has five bedrooms and accommodates up to 12 guests. The accommodations feature air conditioning, TV, private bathroom and hairdryer. The layout includes four double beds, one large double bed and a sofa bed, offering flexibility for different group configurations.\n\nThe social area brings together a living room, equipped kitchen and spaces facing the pool and garden. With Wi-Fi, parking and easy access to the Historic Quadrado and the beaches of Trancoso, Casa Coqueiral 21 balances privacy, practicality and the southern Bahia lifestyle.',
  },
  notes: {
    pt: ['Café da manhã pode ser disponibilizado conforme as condições da reserva.', 'Aluguel de bicicletas e transfer para o Aeroporto de Porto Seguro disponíveis mediante contratação adicional.', 'Aceita animais mediante confirmação prévia.'],
    en: ['Breakfast may be provided according to the reservation conditions.', 'Bicycle rental and transfer to Porto Seguro Airport available at an additional cost.', 'Pets allowed upon prior confirmation.'],
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso — aproximadamente 2,9 km do Quadrado Histórico e 38 km do Aeroporto de Porto Seguro, com fácil acesso às praias, restaurantes e principais pontos da vila.',
    en: 'Coqueiral Condominium, Trancoso — approximately 2.9 km from the Historic Quadrado and 38 km from Porto Seguro Airport, with easy access to beaches, restaurants and the main spots in the village.',
  },
  features: ['piscina', 'condominio'],
};
const C24: Property = {
  id: 'casa-coqueiral-24', code: 'TBA-321', name: { pt: 'Casa Coqueiral 24', en: 'Casa Coqueiral 24' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 3, guests: 8, baths: 4, area: '500 m²',
  price: { pt: 'R$ 2.900 / diária', en: 'R$ 2,900 / night' },
  priceLow: { pt: 'R$ 2.900 / diária', en: 'R$ 2,900 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral24/01.jpg',
  gallery: ['/img/coqueiral24/01.webp','/img/coqueiral24/02.webp','/img/coqueiral24/03.webp','/img/coqueiral24/04.webp','/img/coqueiral24/05.webp','/img/coqueiral24/06.webp','/img/coqueiral24/07.webp','/img/coqueiral24/08.webp','/img/coqueiral24/09.webp','/img/coqueiral24/10.webp','/img/coqueiral24/11.webp','/img/coqueiral24/12.webp','/img/coqueiral24/13.webp','/img/coqueiral24/14.webp','/img/coqueiral24/15.webp','/img/coqueiral24/16.webp','/img/coqueiral24/17.webp','/img/coqueiral24/18.webp','/img/coqueiral24/19.webp','/img/coqueiral24/20.webp','/img/coqueiral24/21.webp','/img/coqueiral24/22.webp','/img/coqueiral24/23.webp','/img/coqueiral24/24.webp','/img/coqueiral24/25.webp','/img/coqueiral24/26.webp','/img/coqueiral24/27.webp','/img/coqueiral24/28.webp','/img/coqueiral24/29.webp','/img/coqueiral24/30.webp','/img/coqueiral24/31.webp','/img/coqueiral24/32.webp','/img/coqueiral24/33.webp','/img/coqueiral24/34.webp','/img/coqueiral24/35.webp','/img/coqueiral24/36.webp'], featured: false,
  amenities: {
    pt: ['Sala de estar ampla e totalmente envidraçada', 'Piscina privativa', 'Cozinha externa', 'Salão de convivência', 'Lounge externo amplo', 'Banheiros internos e externos', 'Jardim integrado aos ambientes', 'Suíte principal com mais de 50 m², closet e jardim privativo', 'Suíte superior com vista para a mata e quarto anexo', 'Suíte inferior com duchas duplas e metais em cobre', 'Quarto adicional com 2 camas de casal', 'Decoração com obras de artistas locais e materiais naturais', 'Condomínio fechado a 2,5 km do Quadrado'],
    en: ['Spacious fully glazed living room', 'Private pool', 'Outdoor kitchen', 'Gathering hall', 'Large outdoor lounge', 'Indoor and outdoor bathrooms', 'Garden integrated into the spaces', 'Master suite with over 50 m², walk-in closet and private garden', 'Upper suite with forest views and adjoining bedroom', 'Lower suite with double showers and copper fixtures', 'Additional bedroom with 2 double beds', 'Decor with works by local artists and natural materials', 'Gated condominium 2.5 km from the Quadrado'],
  },
  staff: {
    pt: ['Cozinheira', 'Camareira', 'Jardineiro', 'Piscineiro'],
    en: ['Cook', 'Housekeeper', 'Gardener', 'Pool attendant'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a aproximadamente 2,5 km do Quadrado Histórico, a Casa 24 Coqueiral é uma propriedade ampla, acolhedora e cercada pela natureza. Com cerca de 500 m² de área construída, foi planejada para oferecer conforto, liberdade e integração entre os ambientes internos e externos.\n\nA arquitetura privilegia espaços generosos, muita luz natural e uma relação constante com o jardim. A decoração combina obras de artistas locais, peças garimpadas em diferentes lugares e materiais naturais, criando uma atmosfera autêntica, alegre e cheia de personalidade.\n\nA casa dispõe de três suítes e um quarto adicional com duas camas de casal. A suíte principal, com mais de 50 m², conta com closet e um amplo banheiro integrado a um jardim privativo. A suíte superior oferece vista para a mata e para a área de lazer, além de um quarto anexo, ideal para famílias que desejam permanecer próximas com mais privacidade. A suíte inferior, a mais recente da propriedade, possui banheiro espaçoso, duchas duplas e metais em cobre.\n\nNa casa principal, a sala de estar totalmente envidraçada permite contemplar o verde durante todo o dia. Já a área de lazer reúne piscina, cozinha externa, salão de convivência e um lounge amplo, formando o cenário perfeito para refeições, descanso e momentos em grupo.\n\nCom staff incluído e uma localização estratégica em Trancoso, a Casa 24 Coqueiral é uma ótima escolha para famílias e grupos de amigos que valorizam conforto, natureza e uma experiência de hospedagem com personalidade.',
    en: 'Located in the Coqueiral Condominium, approximately 2.5 km from the Historic Quadrado, Casa 24 Coqueiral is a spacious, welcoming property surrounded by nature. With about 500 m² of built area, it was designed to offer comfort, freedom and integration between indoor and outdoor spaces.\n\nThe architecture favors generous spaces, abundant natural light and a constant relationship with the garden. The decor combines works by local artists, pieces gathered from different places and natural materials, creating an authentic, joyful atmosphere full of personality.\n\nThe house has three suites and an additional bedroom with two double beds. The master suite, with over 50 m², features a walk-in closet and a large bathroom integrated into a private garden. The upper suite offers views of the forest and the leisure area, plus an adjoining bedroom, ideal for families who wish to stay close with more privacy. The lower suite, the newest in the property, has a spacious bathroom, double showers and copper fixtures.\n\nIn the main house, the fully glazed living room allows guests to contemplate the greenery throughout the day. The leisure area brings together a pool, outdoor kitchen, gathering hall and a large lounge, forming the perfect setting for meals, rest and group moments.\n\nWith staff included and a strategic location in Trancoso, Casa 24 Coqueiral is a great choice for families and groups of friends who value comfort, nature and a lodging experience with personality.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral, Trancoso — aproximadamente 2,5 km do Quadrado Histórico, com fácil acesso às praias, restaurantes e principais pontos da vila.',
    en: 'Coqueiral Condominium, Trancoso — approximately 2.5 km from the Historic Quadrado, with easy access to beaches, restaurants and the main spots in the village.',
  },
  features: ['piscina', 'condominio'],
};
const V7: Property = {
  id: 'casa-v7-altos-de-trancoso', code: 'TBA-320', name: { pt: 'Casa V7', en: 'Casa V7' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 3, guests: 6, baths: 2, area: '168 m²',
  price: { pt: 'R$ 3.100 / diária', en: 'R$ 3,100 / night' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'R$ 25.000 (pacote sob confirmação)', en: 'R$ 25,000 (package upon confirmation)' },
  reveillon: { pt: 'R$ 120.000 (pacote sob confirmação)', en: 'R$ 120,000 (package upon confirmation)' },
  image: '/img/v7/01.jpg',
  gallery: ['/img/v7/01.webp','/img/v7/02.webp','/img/v7/03.webp','/img/v7/04.webp','/img/v7/05.webp','/img/v7/06.webp','/img/v7/07.webp','/img/v7/08.webp','/img/v7/09.webp','/img/v7/10.webp','/img/v7/11.webp','/img/v7/12.webp','/img/v7/13.webp','/img/v7/14.webp','/img/v7/15.webp','/img/v7/16.webp','/img/v7/17.webp','/img/v7/18.webp','/img/v7/19.webp','/img/v7/20.webp','/img/v7/21.webp','/img/v7/22.webp','/img/v7/23.webp','/img/v7/24.webp','/img/v7/25.webp','/img/v7/26.webp','/img/v7/27.webp','/img/v7/28.webp'], featured: false,
  amenities: {
    pt: ['Duas estruturas independentes: Loft Bambu e Casa Madeira', 'Arquitetura de baixo impacto, com bambu, barro e madeira de demolição', 'Sistemas sustentáveis de captação de chuva, reaproveitamento de resíduos orgânicos e tratamento por evapotranspiração', 'Ofurô', 'Ducha externa', 'Varandas abertas para o jardim', 'Redário e espreguiçadeiras', 'Ar-condicionado', 'Wi-Fi', 'TV a cabo', 'Sistema de som surround', 'Cozinha equipada', 'Lavanderia', 'Lavabo', 'Apoio de praia no Almar Trancoso, sujeito a disponibilidade', 'Bicicletas sustentáveis, conforme disponibilidade', 'Condomínio fechado'],
    en: ['Two independent structures: Bamboo Loft and Wood House', 'Low-impact architecture, with bamboo, clay and reclaimed wood', 'Sustainable systems for rainwater harvesting, organic waste reuse and evapotranspiration treatment', 'Ofuro tub', 'Outdoor shower', 'Verandas open to the garden', 'Hammock area and sun loungers', 'Air conditioning', 'Wi-Fi', 'Cable TV', 'Surround sound system', 'Equipped kitchen', 'Laundry', 'Guest bathroom', 'Beach support at Almar Trancoso, subject to availability', 'Sustainable bicycles, subject to availability', 'Gated condominium'],
  },
  staff: {
    pt: ['1 cozinheira/arrumadeira', '1 profissional de serviços gerais'],
    en: ['1 cook/housekeeper', '1 general services professional'],
  },
  description: {
    pt: 'A Casa V7 apresenta uma proposta contemporânea de hospedagem em Trancoso, unindo arquitetura de baixo impacto, conforto e uma relação cuidadosa com o ambiente ao redor. Localizada no Condomínio Altos de Trancoso, a propriedade foi concebida para oferecer uma experiência leve, silenciosa e conectada à natureza.\n\nO projeto utiliza materiais como bambu, barro e madeira de demolição, combinados a soluções que valorizam a ventilação natural, o aproveitamento da luz solar e o uso consciente da água. A casa incorpora sistemas sustentáveis de captação de chuva, reaproveitamento de resíduos orgânicos e tratamento por evapotranspiração, reduzindo impactos sem abrir mão do bem-estar.\n\nDistribuída em duas estruturas independentes, a propriedade permite acomodar diferentes perfis de hóspedes com privacidade. O Loft Bambu recebe um casal em uma suíte completa, enquanto a Casa Madeira oferece dois quartos e capacidade para mais quatro pessoas.\n\nOs ambientes foram planejados para uma rotina tranquila, com varandas abertas para o jardim, redário, ofurô, ducha externa e áreas de convivência integradas. A experiência é complementada por serviços de apoio, café da manhã com produtos artesanais e acesso à estrutura de praia parceira, conforme disponibilidade e condições da reserva.',
    en: 'Casa V7 presents a contemporary lodging proposal in Trancoso, combining low-impact architecture, comfort and a careful relationship with the surrounding environment. Located in the Altos de Trancoso Condominium, the property was designed to offer a light, quiet experience connected to nature.\n\nThe project uses materials such as bamboo, clay and reclaimed wood, combined with solutions that value natural ventilation, sunlight use and conscious water use. The house incorporates sustainable systems for rainwater harvesting, organic waste reuse and evapotranspiration treatment, reducing impacts without giving up well-being.\n\nDistributed in two independent structures, the property allows accommodating different guest profiles with privacy. The Bamboo Loft welcomes a couple in a complete suite, while the Wood House offers two bedrooms and capacity for four more people.\n\nThe environments were planned for a calm routine, with verandas open to the garden, hammock area, ofuro tub, outdoor shower and integrated social areas. The experience is complemented by support services, breakfast with artisanal products and access to a partner beach structure, according to availability and reservation conditions.',
  },
  notes: {
    pt: ['Capacidade máxima de 6 hóspedes.', 'Tarifas específicas para feriados e para o Loft Bambu individual, sob consulta.', 'O café da manhã com produtos artesanais, a limpeza, o apoio de cozinha, o cuidado do jardim, as colheitas da horta e o ofurô fitoterápico podem estar incluídos conforme a modalidade contratada.'],
    en: ['Maximum capacity of 6 guests.', 'Specific rates for holidays and for the individual Bamboo Loft, upon request.', 'Breakfast with artisanal products, cleaning, kitchen support, garden care, vegetable garden harvests and the phytotherapeutic ofuro may be included according to the contracted modality.'],
  },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso, Trancoso – Bahia. Lote 07, Quadra 07. Região cercada pela Mata Atlântica e próxima ao litoral, com segurança, privacidade e fácil acesso aos principais pontos de Trancoso',
    en: 'Altos de Trancoso Condominium, Trancoso – Bahia. Lot 07, Block 07. Region surrounded by the Atlantic Forest and close to the coast, with security, privacy and easy access to the main spots of Trancoso',
  },
  features: ['condominio'],
};

const MARTINI: Property = {
  id: 'villa-martini-itapororoca', code: 'TBA-319', name: { pt: 'Villa Martini', en: 'Villa Martini' },
  purpose: ['aluguel', 'venda'], location: 'Itapororoca', suites: 7, guests: 14, baths: 7, area: '700 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  salePrice: { pt: 'R$ 50.000.000', en: 'R$ 50,000,000' },
  image: '/img/martini/01.jpg',
  gallery: ['/img/martini/01.webp','/img/martini/02.webp','/img/martini/03.webp','/img/martini/04.webp','/img/martini/05.webp','/img/martini/06.webp','/img/martini/07.webp','/img/martini/08.webp','/img/martini/09.webp','/img/martini/10.webp','/img/martini/11.webp','/img/martini/12.webp','/img/martini/13.webp','/img/martini/14.webp','/img/martini/15.webp','/img/martini/16.webp','/img/martini/17.webp','/img/martini/18.webp','/img/martini/19.webp','/img/martini/20.webp','/img/martini/21.webp','/img/martini/22.webp','/img/martini/23.webp','/img/martini/24.webp','/img/martini/25.webp','/img/martini/26.webp'], featured: false,
  amenities: {
    pt: ['Casa totalmente pé na areia, de frente para o mar', 'Aproximadamente 700 m² de área construída em terreno de 5.000 m²', '7 suítes climatizadas', 'Suíte master com varanda e vista para o mar', 'Piscina e hidromassagem', 'Área gourmet com churrasqueira e forno', 'Apoio de praia completo, com cadeiras de praia e ducha', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada com fogão industrial', 'Cervejeira e geladeiras', 'Jardim', 'TV e Wi-Fi', 'Roupas de cama, mesa e banho', 'Estacionamento'],
    en: ['Fully beachfront house, facing the sea', 'Approximately 700 m² of built area on a 5,000 m² plot', '7 air-conditioned suites', 'Master suite with veranda and sea view', 'Pool and hot tub', 'Gourmet area with barbecue and oven', 'Full beach support, with beach chairs and shower', 'Living room, dining room and TV room', 'Equipped kitchen with industrial stove', 'Beer cooler and refrigerators', 'Garden', 'TV and Wi-Fi', 'Bed, table and bath linens', 'Parking'],
  },
  staff: {
    pt: ['Staff completo diariamente'],
    en: ['Full staff daily'],
  },
  description: {
    pt: 'Localizada em frente ao mar, na exclusiva Praia de Itapororoca, a Villa Martini é um verdadeiro refúgio para quem busca privacidade, conforto e uma conexão única com a natureza. Totalmente pé na areia, a propriedade proporciona uma experiência marcada pelo som das ondas, pela brisa do oceano e por uma vista deslumbrante do litoral de Trancoso.\n\nCom aproximadamente 700 m² de área construída em um terreno de 5.000 m², a casa reúne ambientes amplos e elegantes, projetados para receber famílias e grupos com total conforto. São 7 suítes climatizadas, incluindo uma suíte master com varanda e vista para o mar, além de salas de estar, jantar e TV, cozinha equipada, área gourmet, jardim, piscina, hidromassagem e completo apoio de praia.\n\nMais do que uma hospedagem, a Villa Martini oferece uma experiência exclusiva em um dos cenários mais privilegiados do sul da Bahia.',
    en: 'Located in front of the sea, on the exclusive Itapororoca Beach, Villa Martini is a true refuge for those seeking privacy, comfort and a unique connection with nature. Fully beachfront, the property provides an experience marked by the sound of the waves, the ocean breeze and a stunning view of the Trancoso coastline.\n\nWith approximately 700 m² of built area on a 5,000 m² plot, the house brings together spacious and elegant environments, designed to welcome families and groups with total comfort. There are 7 air-conditioned suites, including a master suite with veranda and sea view, as well as living, dining and TV rooms, equipped kitchen, gourmet area, garden, pool, hot tub and full beach support.\n\nMore than a stay, Villa Martini offers an exclusive experience in one of the most privileged settings in southern Bahia.',
  },
  notes: {
    pt: ['Valores de locação sob consulta para todos os períodos.'],
    en: ['Rental rates upon request for all periods.'],
  },
  locationDetail: {
    pt: 'Condomínio Itapororoca, Trancoso – Bahia. Casa totalmente pé na areia, com vista permanente para o mar',
    en: 'Itapororoca Condominium, Trancoso – Bahia. Fully beachfront house, with permanent sea view',
  },
  features: ['pe-na-areia', 'piscina', 'vista-mar'],
};

const SUBLIME: Property = {
  id: 'casa-sublime-praia-dos-nativos', code: 'TBA-311', name: { pt: 'Casa Sublime', en: 'Casa Sublime' },
  purpose: ['aluguel'], location: 'Praia dos Nativos', suites: 7, guests: 16, baths: 8, area: '1.200 m²',
  price: { pt: 'R$ 46.000 / diária', en: 'R$ 46,000 / night' },
  priceLow: { pt: 'R$ 34.500 / diária', en: 'R$ 34,500 / night' },
  carnaval: { pt: 'R$ 181.500 (pacote de 5 dias)', en: 'R$ 181,500 (5-day package)' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/sublime/01.jpg',
  gallery: ['/img/sublime/01.webp','/img/sublime/02.webp','/img/sublime/03.webp','/img/sublime/04.webp','/img/sublime/05.webp','/img/sublime/06.webp','/img/sublime/07.webp','/img/sublime/08.webp','/img/sublime/09.webp','/img/sublime/10.webp','/img/sublime/11.webp','/img/sublime/12.webp','/img/sublime/13.webp','/img/sublime/14.webp','/img/sublime/15.webp','/img/sublime/16.webp','/img/sublime/17.webp','/img/sublime/18.webp','/img/sublime/19.webp','/img/sublime/20.webp','/img/sublime/21.webp','/img/sublime/22.webp','/img/sublime/23.webp','/img/sublime/24.webp','/img/sublime/25.webp','/img/sublime/26.webp','/img/sublime/27.webp','/img/sublime/28.webp','/img/sublime/29.webp','/img/sublime/30.webp','/img/sublime/31.webp','/img/sublime/32.webp','/img/sublime/33.webp','/img/sublime/34.webp','/img/sublime/35.webp'], featured: false,
  amenities: {
    pt: ['Casa pé na areia na Praia dos Nativos', '125 metros de frente para uma faixa de praia reservada', 'Mais de 36.000 m² de mata nativa', 'Sete suítes amplas', 'Vista para o mar, piscina, jardins e mata', 'Bar e estrutura de apoio à beira-mar', 'Cozinha profissional e forno a lenha', 'Sala de entretenimento de aproximadamente 80 m², com TV e mesas de jogos', 'Espaço rústico de ginástica', 'Piscina cercada por jardins', 'Terraços, decks e áreas de descanso voltados para o mar', 'Acesso direto à praia'],
    en: ['Beachfront house on Praia dos Nativos', '125 meters of frontage on a private stretch of beach', 'Over 36,000 m² of native forest', 'Seven spacious suites', 'Views of the sea, pool, gardens and forest', 'Beachfront bar and support structure', 'Professional kitchen and wood-fired oven', 'Entertainment room of approximately 80 m², with TV and game tables', 'Rustic gym space', 'Pool surrounded by gardens', 'Terraces, decks and rest areas facing the sea', 'Direct beach access'],
  },
  staff: {
    pt: ['1 cozinheira', '2 ajudantes de cozinha', '2 arrumadeiras', '1 jardineiro/piscineiro'],
    en: ['1 cook', '2 kitchen helpers', '2 housekeepers', '1 gardener/pool attendant'],
  },
  description: {
    pt: 'A Casa Sublime ocupa uma posição verdadeiramente singular na Praia dos Nativos. Com aproximadamente 125 metros de frente para uma faixa de praia reservada e inserida em uma propriedade com mais de 36.000 m² de mata nativa, oferece uma combinação rara de privacidade, amplitude e contato direto com a natureza.\n\nProjetada para receber famílias e grupos com conforto, a residência reúne sete suítes espaçosas, distribuídas entre jardins, decks e áreas de contemplação. Os ambientes foram pensados para aproveitar a luz natural, a brisa do mar e as diferentes paisagens da propriedade, criando uma atmosfera serena e profundamente conectada ao entorno.\n\nA área social se estende entre a piscina, os jardins e a praia, com espaços destinados ao convívio, às refeições e ao descanso. A casa também dispõe de estrutura completa de cozinha, bar à beira-mar, sala de entretenimento e ambiente de ginástica, garantindo praticidade e bem-estar durante toda a estadia.\n\nCom capacidade confortável para até 16 hóspedes, a propriedade pode receber até 20 pessoas em configurações específicas, mediante consulta e aprovação prévia.',
    en: 'Casa Sublime occupies a truly unique position on Praia dos Nativos. With approximately 125 meters of frontage on a private stretch of beach and set within a property of more than 36,000 m² of native forest, it offers a rare combination of privacy, spaciousness and direct contact with nature.\n\nDesigned to receive families and groups in comfort, the residence brings together seven spacious suites, distributed among gardens, decks and contemplation areas. The environments were designed to enjoy natural light, the sea breeze and the different landscapes of the property, creating a serene atmosphere deeply connected to the surroundings.\n\nThe social area extends between the pool, the gardens and the beach, with spaces dedicated to conviviality, meals and rest. The house also has a complete kitchen structure, beachfront bar, entertainment room and gym area, ensuring practicality and well-being throughout the stay.\n\nWith comfortable capacity for up to 16 guests, the property can receive up to 20 people in specific configurations, upon consultation and prior approval.',
  },
  notes: { pt: ['Capacidade padrão de até 16 hóspedes. Acomodação de até 20 pessoas sujeita à configuração dos quartos, disponibilidade e aprovação prévia.', 'Estadia mínima, caução, taxa de serviço e demais condições comerciais são informadas de acordo com o período solicitado.'], en: ['Standard capacity of up to 16 guests. Accommodation of up to 20 people subject to room configuration, availability and prior approval.', 'Minimum stay, security deposit, service fee and other commercial conditions are informed according to the requested period.'] },
  locationDetail: {
    pt: 'Praia dos Nativos, Trancoso – Bahia. Casa pé na areia, com 125 metros de frente para uma faixa de praia reservada e mais de 36.000 m² de mata nativa.',
    en: 'Praia dos Nativos, Trancoso – Bahia. Beachfront house, with 125 meters of frontage on a private stretch of beach and over 36,000 m² of native forest.',
  },
  features: ['pe-na-areia', 'piscina', 'vista-mar'],
};

const VISTANATIVOS: Property = {
  id: 'casa-vista-nativos', code: 'TBA-309', name: { pt: 'Casa Vista Nativos', en: 'Casa Vista Nativos' },
  purpose: ['aluguel'], location: 'Praia dos Nativos', suites: 5, guests: 13, baths: 5, area: '300 m²',
  price: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  priceLow: { pt: 'R$ 4.000 / diária', en: 'R$ 4,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 290.000 (pacote de 10 noites)', en: 'R$ 290,000 (10-night package)' },
  image: '/img/vista-nativos/01.jpg',
  gallery: ['/img/vista-nativos/01.webp','/img/vista-nativos/02.webp','/img/vista-nativos/03.webp','/img/vista-nativos/04.webp','/img/vista-nativos/05.webp','/img/vista-nativos/06.webp','/img/vista-nativos/07.webp','/img/vista-nativos/08.webp','/img/vista-nativos/09.webp','/img/vista-nativos/10.webp','/img/vista-nativos/11.webp','/img/vista-nativos/12.webp','/img/vista-nativos/13.webp','/img/vista-nativos/14.webp','/img/vista-nativos/15.webp','/img/vista-nativos/16.webp','/img/vista-nativos/17.webp','/img/vista-nativos/18.webp','/img/vista-nativos/19.webp','/img/vista-nativos/20.webp','/img/vista-nativos/21.webp','/img/vista-nativos/22.webp','/img/vista-nativos/23.webp','/img/vista-nativos/24.webp','/img/vista-nativos/25.webp','/img/vista-nativos/26.webp','/img/vista-nativos/27.webp','/img/vista-nativos/28.webp','/img/vista-nativos/29.webp','/img/vista-nativos/30.webp','/img/vista-nativos/31.webp','/img/vista-nativos/32.webp','/img/vista-nativos/33.webp','/img/vista-nativos/34.webp','/img/vista-nativos/35.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado', 'Acesso próximo à praia', 'Churrasqueira', 'Cozinha completa', 'Cozinheira', 'Ducha externa', 'Equipamentos de praia', 'Estacionamento privativo', 'Iluminação externa', 'Hidromassagem', 'Piscina privativa', 'Roupas de cama e banho', 'Serviço de limpeza', 'Terraço ou varanda', 'Varanda com rede', 'Vista para o mar', 'Wi-Fi gratuito'],
    en: ['Air conditioning', 'Easy beach access', 'Barbecue', 'Full kitchen', 'Cook', 'Outdoor shower', 'Beach equipment', 'Private parking', 'Outdoor lighting', 'Hot tub', 'Private pool', 'Bed and bath linen', 'Cleaning service', 'Terrace or veranda', 'Veranda with hammock', 'Sea view', 'Free Wi-Fi'],
  },
  staff: {
    pt: ['Cozinheira', 'Serviço de limpeza'],
    en: ['Cook', 'Cleaning service'],
  },
  description: {
    pt: 'A poucos passos da Praia dos Nativos, a Casa Vista Nativos traduz o estilo de vida de Trancoso em uma propriedade acolhedora, reservada e integrada à paisagem. A localização, a menos de 200 metros do mar, permite aproveitar a praia com praticidade, sem abrir mão da privacidade e do conforto de uma residência exclusiva.\n\nCom arquitetura inspirada no rústico-chique característico da região, a casa combina madeira, fibras naturais, ambientes arejados e uma decoração leve, criando uma atmosfera elegante e descontraída. As áreas internas se conectam ao terraço, ao jardim e à piscina, favorecendo a convivência e o contato permanente com a natureza.\n\nA propriedade acomoda confortavelmente até 13 hóspedes em cinco suítes climatizadas. A estrutura inclui cozinha completa, área gourmet com churrasqueira, piscina privativa, hidromassagem, varandas com redes e ambientes de descanso voltados para o mar. É uma excelente escolha para famílias e grupos que desejam viver dias tranquilos em uma das praias mais desejadas de Trancoso.',
    en: 'A few steps from Praia dos Nativos, Casa Vista Nativos translates the Trancoso lifestyle into a welcoming, private property integrated into the landscape. The location, less than 200 meters from the sea, allows guests to enjoy the beach with ease, without giving up the privacy and comfort of an exclusive residence.\n\nWith architecture inspired by the rustic-chic style characteristic of the region, the house combines wood, natural fibers, airy environments and light décor, creating an elegant and relaxed atmosphere. The indoor areas connect to the terrace, garden and pool, encouraging togetherness and permanent contact with nature.\n\nThe property comfortably accommodates up to 13 guests in five air-conditioned suites. The structure includes a full kitchen, gourmet area with barbecue, private pool, hot tub, verandas with hammocks and rest areas facing the sea. It is an excellent choice for families and groups who wish to enjoy peaceful days on one of the most desirable beaches in Trancoso.',
  },
  notes: { pt: ['Capacidade para até 13 hóspedes em 5 suítes climatizadas.', 'Equipamentos e apoio de praia disponíveis.'], en: ['Capacity for up to 13 guests in 5 air-conditioned suites.', 'Beach equipment and beach support available.'] },
  locationDetail: {
    pt: 'Praia dos Nativos, Trancoso – Bahia. A menos de 200 metros do mar. Quadrado, restaurantes e principais pontos do vilarejo a poucos minutos de carro.',
    en: 'Praia dos Nativos, Trancoso – Bahia. Less than 200 meters from the sea. Quadrado, restaurants and the village\'s main spots a few minutes away by car.',
  },
  features: ['piscina', 'vista-mar'],
};

const TERRAL: Property = {
  id: 'casa-terral-rio-da-barra', code: 'TBA-307', name: { pt: 'Casa Terral', en: 'Casa Terral' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 4, guests: 8, baths: 6, area: '500 m²',
  price: { pt: 'R$ 7.000 / diária', en: 'R$ 7,000 / night' },
  priceLow: { pt: 'R$ 6.000 / diária', en: 'R$ 6,000 / night' },
  carnaval: { pt: 'R$ 60.000 (pacote de 5 diárias)', en: 'R$ 60,000 (5-night package)' },
  reveillon: { pt: 'R$ 300.000', en: 'R$ 300,000' },
  image: '/img/terral/01.jpg',
  gallery: ['/img/terral/01.webp','/img/terral/02.webp','/img/terral/03.webp','/img/terral/04.webp','/img/terral/05.webp','/img/terral/06.webp','/img/terral/07.webp','/img/terral/08.webp','/img/terral/09.webp','/img/terral/10.webp','/img/terral/11.webp','/img/terral/12.webp','/img/terral/13.webp','/img/terral/14.webp','/img/terral/15.webp','/img/terral/16.webp','/img/terral/17.webp','/img/terral/18.webp','/img/terral/19.webp','/img/terral/20.webp','/img/terral/21.webp','/img/terral/22.webp','/img/terral/23.webp','/img/terral/24.webp','/img/terral/25.webp','/img/terral/26.webp','/img/terral/27.webp','/img/terral/28.webp','/img/terral/29.webp'], featured: false,
  amenities: {
    pt: ['4 suítes com ar-condicionado', '2 lavabos', 'Varanda gourmet', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Cozinha equipada', 'Escritório', 'Deck', 'Piscina de 16 x 3,5 m', 'Churrasqueira', 'Fogueira', 'Estacionamento coberto', 'Lavanderia', 'Roupas de cama, mesa e banho', 'Caixa de som', 'Toalhas de piscina', 'Mosquiteiros', 'TV'],
    en: ['4 air-conditioned suites', '2 guest bathrooms', 'Gourmet veranda', 'Living room', 'Dining room', 'TV room', 'Equipped kitchen', 'Office', 'Deck', '16 x 3.5 m pool', 'Barbecue', 'Fire pit', 'Covered parking', 'Laundry', 'Bed, table and bath linen', 'Speaker', 'Pool towels', 'Mosquito nets', 'TV'],
  },
  staff: {
    pt: ['Cozinheira', 'Auxiliar de cozinha', 'Camareira', 'Serviços gerais', 'Vigia noturno', 'Piscineiro / Jardineiro'],
    en: ['Cook', 'Kitchen assistant', 'Housekeeper', 'General services', 'Night watchman', 'Pool attendant / Gardener'],
  },
  description: {
    pt: 'Localizada no Condomínio Fazenda Rio da Barra, a Casa Terral proporciona uma experiência única de hospedagem em meio à natureza, cercada pelo encontro entre o mar, o Rio da Barra e a Mata Atlântica. Inserida em uma fazenda com seringal, plantação de cacau e agricultura sintrópica, a propriedade convida os hóspedes a viverem dias de tranquilidade, privacidade e conexão com a paisagem natural de Trancoso.\n\nA casa ocupa aproximadamente 500 m² de área construída e foi projetada com madeira de demolição e materiais regionais, inspirando-se na arquitetura colonial com um toque rústico e elegante. Os ambientes amplos e acolhedores valorizam a integração entre os espaços internos e externos, aproveitando a vista para o vale e para o mar.\n\nSão 4 suítes climatizadas, todas com banheiro privativo, além de dois lavabos, salas de estar, jantar e TV, escritório, cozinha totalmente equipada, varanda gourmet e uma piscina de 16 x 3,5 metros. A localização privilegiada permite passeios de barco pelo Rio da Barra, acesso a trilhas ecológicas e diversas atividades ao ar livre. A propriedade ainda oferece serviço privativo de transporte até a Praia do Rio da Barra, com apoio de praia no Pedro Grande.',
    en: 'Located in the Fazenda Rio da Barra Condominium, Casa Terral provides a unique lodging experience amid nature, surrounded by the meeting of the sea, the Rio da Barra and the Atlantic Forest. Set within a farm with rubber trees, cocoa plantations and syntropic agriculture, the property invites guests to enjoy days of tranquility, privacy and connection with Trancoso\'s natural landscape.\n\nThe house occupies approximately 500 m² of built area and was designed with reclaimed wood and regional materials, inspired by colonial architecture with a rustic and elegant touch. The spacious and welcoming environments value the integration between indoor and outdoor spaces, enjoying views of the valley and the sea.\n\nThere are 4 air-conditioned suites, all with private bathrooms, plus two guest bathrooms, living, dining and TV rooms, an office, a fully equipped kitchen, a gourmet veranda and a 16 x 3.5 meter pool. The privileged location allows boat trips along the Rio da Barra, access to ecological trails and various outdoor activities. The property also offers private transportation to Rio da Barra Beach, with beach support at Pedro Grande.',
  },
  notes: { pt: ['Capacidade para até 8 hóspedes.', 'Serviço privativo de transporte até a Praia do Rio da Barra, com apoio de praia no Pedro Grande.'], en: ['Capacity for up to 8 guests.', 'Private transportation service to Rio da Barra Beach, with beach support at Pedro Grande.'] },
  locationDetail: {
    pt: 'Condomínio Fazenda Rio da Barra, Trancoso – Bahia. Aproximadamente 5 minutos de carro da Praia do Rio da Barra e 15 minutos do Quadrado. Residência com vista para o mar e serviço privativo de transporte para a praia com apoio de praia no Pedro Grande.',
    en: 'Fazenda Rio da Barra Condominium, Trancoso – Bahia. Approximately 5 minutes by car from Rio da Barra Beach and 15 minutes from the Quadrado. Residence with sea views and private transportation service to the beach with beach support at Pedro Grande.',
  },
  features: ['condominio', 'piscina', 'vista-mar'],
};

const ITAPO01: Property = {
  id: 'casa-01-aldeia-itapororoca', code: 'TBA-308', name: { pt: 'Casa 1 — Aldeia Itapororoca', en: 'Casa 1 — Aldeia Itapororoca' },
  purpose: ['aluguel'], location: 'Aldeia Itapororoca', suites: 7, guests: 16, baths: 8, area: '2.200 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/aldeia-01/01.jpg',
  gallery: ['/img/aldeia-01/01.webp','/img/aldeia-01/02.webp','/img/aldeia-01/03.webp','/img/aldeia-01/04.webp','/img/aldeia-01/05.webp','/img/aldeia-01/06.webp','/img/aldeia-01/07.webp','/img/aldeia-01/08.webp','/img/aldeia-01/09.webp','/img/aldeia-01/10.webp','/img/aldeia-01/11.webp','/img/aldeia-01/12.webp','/img/aldeia-01/13.webp','/img/aldeia-01/14.webp','/img/aldeia-01/15.webp','/img/aldeia-01/16.webp','/img/aldeia-01/17.webp','/img/aldeia-01/18.webp','/img/aldeia-01/19.webp','/img/aldeia-01/20.webp','/img/aldeia-01/21.webp','/img/aldeia-01/22.webp','/img/aldeia-01/23.webp','/img/aldeia-01/24.webp','/img/aldeia-01/25.webp','/img/aldeia-01/26.webp','/img/aldeia-01/27.webp','/img/aldeia-01/28.webp','/img/aldeia-01/29.webp','/img/aldeia-01/30.webp','/img/aldeia-01/31.webp','/img/aldeia-01/32.webp','/img/aldeia-01/33.webp','/img/aldeia-01/34.webp'], featured: false,
  amenities: {
    pt: ['Pé na areia', 'Apoio de praia', 'Piscina privativa', 'Piscina do condomínio', 'Espaço gourmet', 'Churrasqueira', 'Cozinha equipada', 'Sala de estar', 'Sala de jantar', 'Mesa de sinuca', 'Ar-condicionado', 'Ventiladores de teto', 'Mosquiteiros', 'Internet Wi-Fi', 'TV a cabo', 'Gerador', 'Poço artesiano', 'Lavanderia', 'Freezer', 'Lavabo', 'Estacionamento', 'Carrinho de golfe', 'Espreguiçadeiras e ombrelone', 'Roupas de cama, mesa e banho', 'Toalhas de praia'],
    en: ['Beachfront', 'Beach support', 'Private pool', 'Condominium pool', 'Gourmet area', 'Barbecue', 'Equipped kitchen', 'Living room', 'Dining room', 'Pool table', 'Air conditioning', 'Ceiling fans', 'Mosquito nets', 'Wi-Fi internet', 'Cable TV', 'Generator', 'Artesian well', 'Laundry', 'Freezer', 'Guest bathroom', 'Parking', 'Golf cart', 'Sun loungers and beach umbrella', 'Bed, table and bath linen', 'Beach towels'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 cozinheira', '1 auxiliar de cozinha', '1 jardineiro/piscineiro', 'Equipe disponível durante a hospedagem; condições de serviço, horários e eventuais custos devem ser confirmados no momento da reserva'],
    en: ['1 housekeeper', '1 cook', '1 kitchen assistant', '1 gardener/pool attendant', 'Staff available during the stay; service conditions, hours and any costs must be confirmed at booking'],
  },
  description: {
    pt: 'A Casa 01 da Aldeia de Itapororoca é um refúgio de charme e bom gosto, localizado em uma das praias mais bonitas de Trancoso. Inserida em um condomínio exclusivo e com acesso direto ao mar, a propriedade combina conforto, privacidade e uma atmosfera acolhedora para famílias e grupos de amigos.\n\nSeguindo o estilo arquitetônico típico da região, conhecido como rústico-chic, a casa valoriza o uso de madeira e vidro em uma composição leve e elegante. Os ambientes internos e externos se conectam de forma natural, permitindo que a paisagem tropical faça parte da experiência de hospedagem.\n\nO jardim exuberante, o azul da piscina e a decoração cuidadosamente escolhida criam um cenário convidativo para descansar e aproveitar os dias em Trancoso. A ampla área social oferece espaços para convivência, lazer e refeições, além de apoio de praia e estrutura completa para uma estadia confortável.\n\nCom sete suítes, incluindo uma suíte master com duas camas, a casa acomoda até 16 hóspedes. É uma excelente escolha para quem deseja estar pé na areia sem abrir mão da comodidade e da segurança de um condomínio fechado.',
    en: 'Casa 01 at Aldeia de Itapororoca is a charming and tasteful retreat, located on one of the most beautiful beaches in Trancoso. Set in an exclusive condominium with direct access to the sea, the property combines comfort, privacy and a welcoming atmosphere for families and groups of friends.\n\nFollowing the typical architectural style of the region, known as rustic-chic, the house values the use of wood and glass in a light and elegant composition. Indoor and outdoor environments connect naturally, allowing the tropical landscape to be part of the lodging experience.\n\nThe lush garden, the blue of the pool and the carefully chosen decor create an inviting setting to relax and enjoy the days in Trancoso. The large social area offers spaces for gathering, leisure and meals, as well as beach support and complete infrastructure for a comfortable stay.\n\nWith seven suites, including a master suite with two beds, the house accommodates up to 16 guests. It is an excellent choice for those who want to be beachfront without giving up the comfort and security of a gated condominium.',
  },
  notes: { pt: ['Capacidade para até 16 hóspedes, distribuídos em 10 camas.', 'Não é permitida a hospedagem de pets.'], en: ['Capacity for up to 16 guests in 10 beds.', 'Pets are not allowed.'] },
  locationDetail: {
    pt: 'Condomínio Aldeia de Itapororoca, Trancoso — pé na areia, em uma das praias mais bonitas da região. Aproximadamente 15 minutos de carro do Quadrado, com a comodidade, a privacidade e a segurança de um condomínio fechado.',
    en: 'Aldeia de Itapororoca Condominium, Trancoso — beachfront, on one of the most beautiful beaches in the region. Approximately 15 minutes by car from the Quadrado, with the convenience, privacy and security of a gated condominium.',
  },
  features: ['pe-na-areia', 'condominio', 'piscina'],
};

const ATENA: Property = {
  id: 'casa-atena-joao-vieira', code: 'TBA-306', name: { pt: 'Casa Atena', en: 'Casa Atena' },
  purpose: ['aluguel'], location: 'João Vieira', suites: 5, guests: 12, baths: 9, area: '580 m²',
  price: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  priceLow: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  carnaval: { pt: 'R$ 65.000', en: 'R$ 65,000' },
  reveillon: { pt: 'R$ 320.000 (pacote de 10 noites)', en: 'R$ 320,000 (10-night package)' },
  image: '/img/atena/01.jpg',
  gallery: ['/img/atena/01.webp','/img/atena/02.webp','/img/atena/03.webp','/img/atena/04.webp','/img/atena/05.webp','/img/atena/06.webp','/img/atena/07.webp','/img/atena/08.webp','/img/atena/09.webp','/img/atena/10.webp','/img/atena/11.webp','/img/atena/12.webp','/img/atena/13.webp','/img/atena/14.webp','/img/atena/15.webp','/img/atena/16.webp','/img/atena/17.webp','/img/atena/18.webp','/img/atena/19.webp','/img/atena/20.webp','/img/atena/21.webp','/img/atena/22.webp','/img/atena/23.webp','/img/atena/24.webp','/img/atena/25.webp','/img/atena/26.webp','/img/atena/27.webp','/img/atena/28.webp','/img/atena/29.webp','/img/atena/30.webp','/img/atena/31.webp','/img/atena/32.webp','/img/atena/33.webp','/img/atena/34.webp','/img/atena/35.webp','/img/atena/36.webp','/img/atena/37.webp','/img/atena/38.webp'], featured: false,
  amenities: {
    pt: ['Ar-condicionado', 'Piscina com raia e hidromassagem (preparada para aquecimento)', 'Sauna a vapor', 'Home cinema com TV de 75\'', 'Cozinha principal completa e cozinha gourmet equipada', 'Churrasqueira a gás', 'Ducha externa', 'Sistema de som', 'TV a cabo', 'Wi-Fi de alta velocidade', 'Terraço e varanda com rede', 'Lavanderia completa', 'Gerador automático de 40 kVA', 'Garagem coberta para 2 veículos', 'Roupas de cama e banho', 'Assistência turística'],
    en: ['Air conditioning', 'Pool with lap lane and hot tub (heating-ready)', 'Steam sauna', 'Home cinema with 75\' TV', 'Full main kitchen and equipped gourmet kitchen', 'Gas barbecue', 'Outdoor shower', 'Sound system', 'Cable TV', 'High-speed Wi-Fi', 'Terrace and veranda with hammock', 'Full laundry', 'Automatic 40 kVA generator', 'Covered garage for 2 vehicles', 'Bed and bath linen', 'Tourist assistance'],
  },
  staff: {
    pt: ['1 camareira', '1 cozinheira', '1 profissional de serviços gerais', 'Staff incluído na estadia; insumos, compras e serviços extras cobrados separadamente'],
    en: ['1 housekeeper', '1 cook', '1 general services professional', 'Staff included in the stay; supplies, groceries and extra services charged separately'],
  },
  description: {
    pt: 'Em uma das áreas residenciais mais valorizadas de Trancoso, a Casa Atena reúne arquitetura contemporânea, privacidade e uma atmosfera de refúgio cercada pela natureza. Localizada no bairro João Vieira, está a poucos minutos do Quadrado e das praias dos Nativos, Coqueiros e Rio Verde, combinando tranquilidade com acesso rápido aos principais pontos do destino.\n\nRecém-construída, a residência foi concebida para valorizar a integração entre os ambientes internos e externos. Madeira, concreto, vidro e paisagismo tropical se encontram em um projeto de linhas limpas, iluminação natural abundante e espaços amplos, criando uma experiência sofisticada, acolhedora e perfeitamente conectada ao estilo de vida de Trancoso.\n\nImplantada em um terreno de aproximadamente 1.750 m², com 580 m² de área construída, a propriedade acomoda até 12 hóspedes em cinco suítes espaçosas, todas equipadas com camas king size. A suíte master se destaca pela amplitude e pela vista panorâmica para o vale, oferecendo ainda mais conforto e privacidade.\n\nA área social conta com salas integradas, home cinema, cozinha principal equipada e ambientes de convivência voltados para o deck. Na área externa, a piscina com raia e hidromassagem ocupa posição central, acompanhada por sauna a vapor, espaços de descanso e uma completa área gourmet com churrasqueira a gás.\n\nCom estrutura de apoio para staff, gerador automático, internet de alta velocidade e enxoval premium, a Casa Atena é uma escolha excepcional para famílias e grupos que desejam viver Trancoso com conforto, exclusividade e serviço personalizado.',
    en: 'In one of the most valued residential areas of Trancoso, Casa Atena brings together contemporary architecture, privacy and a refuge atmosphere surrounded by nature. Located in the João Vieira neighborhood, it is a few minutes from the Quadrado and the Nativos, Coqueiros and Rio Verde beaches, combining tranquility with quick access to the destination\'s main spots.\n\nNewly built, the residence was designed to value the integration between indoor and outdoor environments. Wood, concrete, glass and tropical landscaping meet in a project of clean lines, abundant natural lighting and spacious areas, creating a sophisticated, welcoming experience perfectly connected to the Trancoso lifestyle.\n\nSet on a plot of approximately 1,750 m², with 580 m² of built area, the property accommodates up to 12 guests in five spacious suites, all equipped with king size beds. The master suite stands out for its amplitude and panoramic view of the valley, offering even more comfort and privacy.\n\nThe social area features integrated living rooms, home cinema, an equipped main kitchen and gathering spaces facing the deck. Outside, the pool with lap lane and hot tub occupies a central position, accompanied by a steam sauna, rest areas and a complete gourmet area with a gas barbecue.\n\nWith support structure for staff, automatic generator, high-speed internet and premium linens, Casa Atena is an exceptional choice for families and groups who want to experience Trancoso with comfort, exclusivity and personalized service.',
  },
  notes: { pt: ['Capacidade para até 12 hóspedes.', 'Quarto de apoio para staff com banheiro e 2 camas de solteiro.', 'Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade e condições antes da reserva.', 'O número de hóspedes e o período da estadia devem ser confirmados, pois podem influenciar o valor final.', 'Serviços de concierge, transfer, motoristas, chefs, garçons, massagem e recreação infantil sob consulta.'], en: ['Capacity for up to 12 guests.', 'Staff support room with bathroom and 2 single beds.', 'Rates subject to change without prior notice. Check availability and conditions before booking.', 'The number of guests and length of stay must be confirmed, as they may influence the final rate.', 'Concierge, transfer, drivers, chefs, waiters, massage and kids\' recreation services upon request.'] },
  locationDetail: {
    pt: 'João Vieira, Trancoso. Aproximadamente 5 minutos de carro do Quadrado, 10 minutos a pé do centro histórico e cerca de 10 minutos das praias dos Coqueiros e Rio Verde. Região tranquila, segura e cercada pela natureza, com vista panorâmica para o Vale de Trancoso.',
    en: 'João Vieira, Trancoso. Approximately 5 minutes by car from the Quadrado, 10 minutes on foot from the historic center and about 10 minutes from Coqueiros and Rio Verde beaches. A quiet, safe region surrounded by nature, with panoramic views of the Trancoso Valley.',
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

const GOLF21: Property = {
  id: 'terravista-golf-casa-21', code: 'TBA-331', name: { pt: 'Terravista 21', en: 'Terravista 21' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 7, area: '—',
  price: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  priceLow: { pt: 'R$ 10.000 / diária', en: 'R$ 10,000 / night' },
  carnaval: { pt: 'R$ 80.000 (pacote de 5 diárias)', en: 'R$ 80,000 (5-night package)' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/golf21/01.jpg',
  gallery: ['/img/golf21/01.webp','/img/golf21/02.webp','/img/golf21/03.webp','/img/golf21/04.webp','/img/golf21/05.webp','/img/golf21/06.webp','/img/golf21/07.webp','/img/golf21/08.webp','/img/golf21/09.webp','/img/golf21/10.webp','/img/golf21/11.webp','/img/golf21/12.webp','/img/golf21/13.webp','/img/golf21/14.webp','/img/golf21/15.webp','/img/golf21/16.webp','/img/golf21/17.webp','/img/golf21/18.webp','/img/golf21/19.webp','/img/golf21/20.webp','/img/golf21/21.webp','/img/golf21/22.webp','/img/golf21/23.webp','/img/golf21/24.webp','/img/golf21/25.webp','/img/golf21/26.webp','/img/golf21/27.webp','/img/golf21/28.webp','/img/golf21/29.webp','/img/golf21/30.webp','/img/golf21/31.webp','/img/golf21/32.webp','/img/golf21/33.webp','/img/golf21/34.webp','/img/golf21/35.webp','/img/golf21/36.webp','/img/golf21/37.webp','/img/golf21/38.webp','/img/golf21/39.webp','/img/golf21/40.webp','/img/golf21/41.webp','/img/golf21/42.webp','/img/golf21/43.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Jacuzzi', 'Espaço gourmet', 'Churrasqueira', 'Cozinha equipada', 'Máquina de gelo e freezer', 'Sala de estar e sala de jantar', 'Lavabo', 'Som ambiente', 'TV a cabo', 'Internet Wi-Fi', 'Ar-condicionado', 'Ventiladores de teto', 'Espreguiçadeiras e ombrelones', 'Toalhas de praia', 'Lavanderia', 'Poço artesiano', 'Quadra de tênis', 'Acesso privativo à Praia das Tartarugas'],
    en: ['Private pool', 'Jacuzzi', 'Gourmet area', 'Barbecue grill', 'Equipped kitchen', 'Ice maker and freezer', 'Living and dining rooms', 'Powder room', 'Ambient sound', 'Cable TV', 'Wi-Fi internet', 'Air conditioning', 'Ceiling fans', 'Sun loungers and parasols', 'Beach towels', 'Laundry', 'Artesian well', 'Tennis court', 'Private access to Tartarugas Beach'],
  },
  staff: { pt: ['1 arrumadeira', '1 cozinheira', '1 auxiliar de cozinha', '1 profissional responsável pela piscina e serviços gerais'], en: ['1 housekeeper', '1 cook', '1 kitchen assistant', '1 pool and general services professional'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No alto das falésias do Rio da Barra, dentro do Terravista Golf, a poucos minutos do Quadrado e com acesso privilegiado à Praia das Tartarugas.', en: 'On top of the Rio da Barra cliffs, inside Terravista Golf, just minutes from the Quadrado and with privileged access to Tartarugas Beach.' },
  description: {
    pt: 'Localizada no alto das falésias do Rio da Barra, a Terravista Golf 21 está inserida em um dos condomínios mais exclusivos de Trancoso. A propriedade fica a poucos minutos do Quadrado e conta com acesso privilegiado à Praia das Tartarugas, além de toda a estrutura de segurança e lazer do Terravista Golf.\n\nCom arquitetura marcada pela combinação de madeira, vidro e amplas aberturas, a casa oferece ambientes integrados, acolhedores e cercados pela natureza.\n\nA casa acomoda até 12 hóspedes em 6 quartos, com espaços pensados para proporcionar privacidade e conforto. As suítes possuem atmosfera tranquila e áreas externas privativas, enquanto a suíte master conta com jacuzzi e varanda.\n\nA área social reúne sala de estar, sala de jantar, cozinha equipada e espaço gourmet, criando um ambiente ideal para receber familiares e amigos. Na parte externa, a ampla piscina é cercada por vegetação, deck, espreguiçadeiras e espaços de descanso.\n\nO acesso à praia é feito por uma passarela que atravessa a paisagem das falésias, proporcionando uma caminhada agradável em meio à natureza.',
    en: 'Located on top of the Rio da Barra cliffs, Terravista Golf 21 is set within one of the most exclusive condominiums in Trancoso. The property is just minutes from the Quadrado and offers privileged access to Tartarugas Beach, as well as all the security and leisure infrastructure of Terravista Golf.\n\nWith architecture marked by the combination of wood, glass and wide openings, the house offers integrated, welcoming spaces surrounded by nature.\n\nThe house accommodates up to 12 guests in 6 bedrooms, with spaces designed to provide privacy and comfort. The suites have a tranquil atmosphere and private outdoor areas, while the master suite features a jacuzzi and veranda.\n\nThe social area brings together living room, dining room, equipped kitchen and gourmet space, creating an ideal setting for hosting family and friends. Outside, the large pool is surrounded by vegetation, a deck, sun loungers and relaxation areas.\n\nBeach access is via a walkway that crosses the cliff landscape, providing a pleasant walk surrounded by nature.',
  },
  notes: { pt: ['Diária Alta: dezembro, janeiro, fevereiro e julho. Diária Baixa: março, abril, maio, junho, agosto, setembro, outubro e novembro. Feriados: R$ 12.000 por diária.', 'Carnaval: pacote de 5 diárias, taxa de serviço já incluída. Réveillon: pacote de 10 noites, valor sob consulta, acréscimo de 5% de taxa de serviço.', 'Nas diárias regulares, os valores não incluem 10% de taxa de serviço.'], en: ['High season: December, January, February and July. Low season: March, April, May, June, August, September, October and November. Holidays: R$ 12,000 per night.', 'Carnival: 5-night package, service fee already included. New Year\'s: 10-night package, price upon request, plus 5% service fee.', 'Regular rates do not include 10% service fee.'] },
};

const GOLF19: Property = {
  id: 'terravista-golf-casa-19', code: 'TBA-332', name: { pt: 'Terravista 19', en: 'Terravista 19' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 8, area: '700 m² · terreno 2.100 m²',
  price: { pt: 'R$ 13.000 / diária', en: 'R$ 13,000 / night' },
  priceLow: { pt: 'R$ 9.000 / diária', en: 'R$ 9,000 / night' },
  carnaval: { pt: 'R$ 70.000 (pacote de 5 dias)', en: 'R$ 70,000 (5-day package)' },
  reveillon: { pt: 'R$ 420.000 (pacote de 10 dias)', en: 'R$ 420,000 (10-day package)' },
  image: '/img/golf19/01.jpg',
  gallery: ['/img/golf19/01.webp','/img/golf19/02.webp','/img/golf19/03.webp','/img/golf19/04.webp','/img/golf19/05.webp','/img/golf19/06.webp','/img/golf19/07.webp','/img/golf19/08.webp','/img/golf19/09.webp','/img/golf19/10.webp','/img/golf19/11.webp','/img/golf19/12.webp','/img/golf19/13.webp','/img/golf19/14.webp','/img/golf19/15.webp','/img/golf19/16.webp','/img/golf19/17.webp','/img/golf19/18.webp','/img/golf19/19.webp','/img/golf19/20.webp','/img/golf19/21.webp','/img/golf19/22.webp','/img/golf19/23.webp','/img/golf19/24.webp','/img/golf19/25.webp','/img/golf19/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina integrada ao jardim', 'Área de churrasco', 'Duas salas de estar', 'Sala de jantar integrada', 'Cozinha totalmente equipada', 'Lavanderia bem equipada', 'Enxoval completo', 'Vista para área de preservação da Mata Atlântica', 'Ar-condicionado', 'Acesso facilitado à Praia dos Golfinhos pelo condomínio', 'Campo de tênis e acesso ao Terravista Golf', 'Estacionamento, heliporto e aeroporto privado', '50% de desconto em green-fees e serviços associados ao Club Med Trancoso*'],
    en: ['Pool integrated into the garden', 'Barbecue area', 'Two living rooms', 'Integrated dining room', 'Fully equipped kitchen', 'Well-equipped laundry', 'Complete linens', 'View over the Atlantic Forest preservation area', 'Air conditioning', 'Easy access to Golfinhos Beach through the condominium', 'Tennis court and access to Terravista Golf', 'Parking, heliport and private airport', '50% discount on green fees and services associated with Club Med Trancoso*'],
  },
  staff: { pt: ['1 cozinheira', '1 arrumadeira', '2 ajudantes'], en: ['1 cook', '1 housekeeper', '2 assistants'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Villavista Golf, com acesso exclusivo à Praia dos Golfinhos e próxima ao Terravista Golf, um dos campos mais renomados da América Latina.', en: 'In the Villavista Golf Condominium, with exclusive access to Golfinhos Beach and next to Terravista Golf, one of the most renowned courses in Latin America.' },
  description: {
    pt: 'Localizada no exclusivo Condomínio Villavista Golf, a Golf 19 combina luxo, aconchego e uma atmosfera contemporânea em perfeita harmonia com a Mata Atlântica. A propriedade possui aproximadamente 700 m² de área construída, implantados em um terreno de cerca de 2.100 m², com ambientes luminosos, amplos e cuidadosamente decorados.\n\nA casa acomoda confortavelmente até 12 hóspedes e, mediante solicitação, pode receber camas extras de solteiro, alcançando capacidade máxima de até 15 pessoas.\n\nSão 6 suítes amplas — quatro com cama king size e duas com camas de solteiro que podem ser unidas para formar uma cama king — além de duas salas aconchegantes, sala de jantar integrada, cozinha totalmente equipada e lavanderia bem equipada.\n\nA área externa é um dos grandes destaques: a piscina se integra ao jardim e à área de churrasco, criando um cenário convidativo para dias de descanso e encontros ao ar livre. A vista para a área de preservação permanente da Mata Atlântica proporciona privacidade, silêncio e uma conexão especial com a natureza.',
    en: 'Located in the exclusive Villavista Golf Condominium, Golf 19 combines luxury, coziness and a contemporary atmosphere in perfect harmony with the Atlantic Forest. The property has approximately 700 m² of built area on a plot of about 2,100 m², with bright, spacious and carefully decorated rooms.\n\nThe house comfortably accommodates up to 12 guests and, upon request, can receive extra single beds, reaching a maximum capacity of up to 15 people.\n\nThere are 6 spacious suites — four with a king-size bed and two with single beds that can be joined to form a king bed — plus two cozy living rooms, an integrated dining room, a fully equipped kitchen and a well-equipped laundry room.\n\nThe outdoor area is one of the highlights: the pool integrates with the garden and barbecue area, creating an inviting setting for days of rest and outdoor gatherings. The view over the permanent preservation area of the Atlantic Forest provides privacy, silence and a special connection with nature.',
  },
  notes: { pt: ['Equipe disponível por até 8 horas por dia.', 'Valores sujeitos a alteração, disponibilidade e condições específicas de cada período.', '*Benefícios sujeitos às regras e à disponibilidade dos serviços do condomínio.'], en: ['Staff available for up to 8 hours per day.', 'Rates subject to change, availability and specific conditions of each period.', '*Benefits subject to the rules and availability of the condominium services.'] },
};

const GOLF33: Property = {
  id: 'terravista-golf-casa-33', code: 'TBA-333', name: { pt: 'Terravista 33', en: 'Terravista 33' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 15, baths: 6, area: '—',
  price: { pt: 'R$ 9.500 / diária', en: 'R$ 9,500 / night' },
  priceLow: { pt: 'R$ 7.500 / diária', en: 'R$ 7,500 / night' },
  carnaval: { pt: 'R$ 88.000 (pacote de 5 noites)', en: 'R$ 88,000 (5-night package)' },
  reveillon: { pt: 'R$ 357.000 (pacote de 10 noites)', en: 'R$ 357,000 (10-night package)' },
  image: '/img/golf33/01.jpg',
  gallery: ['/img/golf33/01.webp','/img/golf33/02.webp','/img/golf33/03.webp','/img/golf33/04.webp','/img/golf33/05.webp','/img/golf33/06.webp','/img/golf33/07.webp','/img/golf33/08.webp','/img/golf33/09.webp','/img/golf33/10.webp','/img/golf33/11.webp','/img/golf33/12.webp','/img/golf33/13.webp','/img/golf33/14.webp','/img/golf33/15.webp','/img/golf33/17.webp','/img/golf33/18.webp','/img/golf33/19.webp','/img/golf33/20.webp','/img/golf33/21.webp','/img/golf33/23.webp','/img/golf33/24.webp','/img/golf33/25.webp','/img/golf33/26.webp','/img/golf33/27.webp','/img/golf33/28.webp','/img/golf33/29.webp','/img/golf33/30.webp','/img/golf33/31.webp','/img/golf33/32.webp','/img/golf33/33.webp','/img/golf33/34.webp','/img/golf33/35.webp','/img/golf33/36.webp'], featured: false,
  amenities: {
    pt: ['Vista aberta para o campo de golfe', 'Piscina central com deck de madeira', 'Suíte master com hidromassagem e varanda', 'Área de refeições junto à piscina', 'Sala de jogos com mesa de sinuca', 'Academia privativa', 'Sala de TV', 'Carrinho de golfe tipo pick-up', 'Ar-condicionado em todas as suítes', 'Cozinha equipada', 'Churrasqueira', 'Lavabo e lavanderia', 'Freezer e máquina de gelo', 'Wi-Fi e TV a cabo', 'Playstation 4', 'Cofres e mosquiteiros', 'Estacionamento e poço artesiano', 'Enxoval completo e toalhas de piscina e praia', 'Apoio de praia e acesso às estruturas do Terravista', 'Quadra de tênis no condomínio'],
    en: ['Open golf course view', 'Central pool with wooden deck', 'Master suite with hot tub and veranda', 'Dining area by the pool', 'Game room with pool table', 'Private gym', 'TV room', 'Pick-up golf cart', 'Air conditioning in all suites', 'Equipped kitchen', 'Barbecue grill', 'Powder room and laundry', 'Freezer and ice maker', 'Wi-Fi and cable TV', 'Playstation 4', 'Safes and mosquito nets', 'Parking and artesian well', 'Complete linens and pool/beach towels', 'Beach service and access to Terravista facilities', 'Tennis court in the condominium'],
  },
  staff: { pt: ['1 cozinheira', '1 auxiliar de cozinha', '1 arrumadeira', '1 copeira/bartender'], en: ['1 cook', '1 kitchen assistant', '1 housekeeper', '1 bartender'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'De frente para o campo de golfe, no Condomínio Terravista Golf, com portaria 24h, aeroporto privativo, restaurante e acesso reservado à Praia das Tartarugas. O Quadrado fica a cerca de 10 minutos de carro.', en: 'Facing the golf course, in the Terravista Golf Condominium, with 24-hour gatehouse, private airport, restaurant and reserved access to Tartarugas Beach. The Quadrado is about 10 minutes by car.' },
  description: {
    pt: 'A Casa Golf 33 ocupa uma posição privilegiada no Condomínio Terravista, de frente para o campo de golfe. Com seis suítes espaçosas e áreas sociais distribuídas de forma inteligente, a propriedade oferece privacidade, conforto e uma atmosfera acolhedora para famílias e grupos de amigos, acomodando até 15 pessoas.\n\nA residência é organizada em módulos conectados por um deck de madeira, criando uma transição natural entre os ambientes internos e externos. No piso superior, a suíte master se destaca pela amplitude, pela hidromassagem e pela varanda com vista para a piscina e para o campo.\n\nA piscina funciona como o centro da casa e separa a ala social da área dos quartos. Ao redor dela, os espaços de convivência incluem área de refeições, churrasqueira e ambientes abertos que aproveitam a luz e a paisagem do condomínio.\n\nPara os momentos de lazer, a casa dispõe ainda de sala de jogos com mesa de sinuca, academia e sala de TV. A arquitetura integrada e a vegetação ao redor completam a experiência de descanso em uma das regiões mais exclusivas de Trancoso.',
    en: 'Casa Golf 33 occupies a privileged position in the Terravista Condominium, facing the golf course. With six spacious suites and intelligently distributed social areas, the property offers privacy, comfort and a welcoming atmosphere for families and groups of friends, accommodating up to 15 people.\n\nThe residence is organized in modules connected by a wooden deck, creating a natural transition between indoor and outdoor spaces. Upstairs, the master suite stands out for its amplitude, hot tub and veranda overlooking the pool and the course.\n\nThe pool works as the center of the house and separates the social wing from the bedroom area. Around it, the gathering spaces include a dining area, barbecue and open environments that enjoy the light and the condominium landscape.\n\nFor leisure moments, the house also offers a game room with pool table, gym and TV room. The integrated architecture and surrounding vegetation complete the experience of rest in one of the most exclusive regions of Trancoso.',
  },
  notes: { pt: ['Diária Baixa: março a novembro, exceto feriados. Diária Alta: dezembro, janeiro, fevereiro, julho e feriados.', 'Locação mínima de 3 diárias fora dos períodos especiais. Não são permitidos animais de estimação.', 'Acrescentar 10% de taxa de serviço ao valor da locação. Despesas com alimentos, bebidas e serviços extras não estão incluídas.'], en: ['Low season: March to November, except holidays. High season: December, January, February, July and holidays.', 'Minimum stay of 3 nights outside special periods. Pets are not allowed.', 'A 10% service fee is added to the rental price. Expenses with food, beverages and extra services are not included.'] },
};

const GOLF37: Property = {
  id: 'terravista-golf-casa-37', code: 'TBA-334', name: { pt: 'Terravista 37', en: 'Terravista 37' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Golf', suites: 8, guests: 16, baths: 7, area: '750 m² · terreno 1.700 m²',
  price: { pt: 'R$ 11.500 / diária', en: 'R$ 11,500 / night' },
  priceLow: { pt: 'R$ 8.500 / diária', en: 'R$ 8,500 / night' },
  carnaval: { pt: 'R$ 85.000 (pacote de 5 diárias)', en: 'R$ 85,000 (5-night package)' },
  reveillon: { pt: 'R$ 380.000 (pacote de 10 noites)', en: 'R$ 380,000 (10-night package)' },
  salePrice: { pt: 'R$ 14.000.000', en: 'R$ 14,000,000' },
  image: '/img/golf37/01.jpg',
  gallery: ['/img/golf37/01.webp','/img/golf37/02.webp','/img/golf37/03.webp','/img/golf37/04.webp','/img/golf37/05.webp','/img/golf37/06.webp','/img/golf37/07.webp','/img/golf37/08.webp','/img/golf37/09.webp','/img/golf37/10.webp','/img/golf37/11.webp','/img/golf37/12.webp','/img/golf37/13.webp','/img/golf37/14.webp','/img/golf37/15.webp','/img/golf37/16.webp','/img/golf37/17.webp','/img/golf37/18.webp','/img/golf37/19.webp','/img/golf37/20.webp','/img/golf37/21.webp','/img/golf37/22.webp','/img/golf37/23.webp','/img/golf37/24.webp','/img/golf37/25.webp','/img/golf37/26.webp','/img/golf37/27.webp','/img/golf37/28.webp','/img/golf37/29.webp','/img/golf37/30.webp','/img/golf37/31.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espaço gourmet e churrasqueira', 'Academia e sala de ginástica', 'Sauna', 'Adega de vinhos', 'Sala de estar, jantar e TV', 'Cozinha equipada', 'Cervejeira, freezer e máquina de gelo', 'Lavabo e lavanderia', 'Internet Wi-Fi', 'Ar-condicionado', 'Mosquiteiros', 'Apoio de praia', 'Quarto de apoio', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia', 'Secadores de cabelo', 'Estacionamento'],
    en: ['Private pool', 'Gourmet area and barbecue', 'Gym and fitness room', 'Sauna', 'Wine cellar', 'Living, dining and TV rooms', 'Equipped kitchen', 'Beer cooler, freezer and ice maker', 'Powder room and laundry', 'Wi-Fi internet', 'Air conditioning', 'Mosquito nets', 'Beach service', 'Support bedroom', 'Bed, table and bath linens', 'Pool and beach towels', 'Hairdryers', 'Parking'],
  },
  staff: { pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 profissional de serviços gerais'], en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 general services professional'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No alto das falésias do Rio da Barra, dentro do Terravista Golf Club, com fácil deslocamento até o Quadrado e acesso privilegiado à região das praias.', en: 'On top of the Rio da Barra cliffs, inside the Terravista Golf Club, with easy access to the Quadrado and privileged access to the beach region.' },
  description: {
    pt: 'Situada no alto das falésias do Rio da Barra, dentro do Terravista Golf Club, a residência combina privacidade, natureza e acesso à estrutura de um dos condomínios mais exclusivos de Trancoso.\n\nCom projeto assinado pela Gema Arquitetura, paisagismo de Juliana Favaratto e interiores desenvolvidos pela IB Interiores, a Terravista Golf 37 foi concebida para valorizar a convivência, o conforto e a relação com a paisagem.\n\nA casa está implantada em um terreno de 1.700 m² e possui 750 m² de área construída. Os ambientes amplos integram madeira, fibras naturais, peças de design e uma decoração de atmosfera rústica e elegante, em sintonia com o estilo de Trancoso.\n\nA propriedade acomoda até 16 hóspedes em 8 quartos — são 6 suítes completas e 2 quartos de apoio —, permitindo receber famílias e grupos maiores com boa distribuição e privacidade.\n\nNa área externa, a piscina cercada pela vegetação cria um ambiente reservado para descanso. A casa também dispõe de espaço gourmet, churrasqueira, academia, sauna, adega e diferentes salas de convivência. O serviço de staff está incluído na locação, proporcionando mais comodidade durante toda a estadia.',
    en: 'Set on top of the Rio da Barra cliffs, inside the Terravista Golf Club, the residence combines privacy, nature and access to the structure of one of the most exclusive condominiums in Trancoso.\n\nWith a project signed by Gema Arquitetura, landscaping by Juliana Favaratto and interiors developed by IB Interiores, Terravista Golf 37 was designed to value conviviality, comfort and the relationship with the landscape.\n\nThe house sits on a 1,700 m² plot and has 750 m² of built area. The spacious rooms integrate wood, natural fibers, design pieces and a rustic yet elegant decor, in tune with the Trancoso style.\n\nThe property accommodates up to 16 guests in 8 bedrooms — 6 full suites and 2 support bedrooms — allowing families and larger groups to stay with good distribution and privacy.\n\nOutside, the pool surrounded by vegetation creates a reserved environment for rest. The house also features a gourmet area, barbecue, gym, sauna, wine cellar and different living rooms. Staff service is included in the rental, providing more comfort throughout the stay.',
  },
  notes: { pt: ['Diária Alta: dezembro, janeiro, fevereiro e julho. Diária Baixa: março, abril, maio, junho, agosto, setembro, outubro e novembro. Feriados: R$ 11.500 por diária.', 'Locação mínima de 3 diárias. Animais de estimação não são permitidos.', 'Nas diárias regulares, os valores não incluem 10% de taxa de serviço. No Réveillon, a taxa de serviço é de 5% sobre o valor total da locação.'], en: ['High season: December, January, February and July. Low season: March, April, May, June, August, September, October and November. Holidays: R$ 11,500 per night.', 'Minimum stay of 3 nights. Pets are not allowed.', 'Regular rates do not include 10% service fee. For New Year\'s, the service fee is 5% of the total rental amount.'] },
};

const GOLF27: Property = {
  id: 'terravista-golf-casa-27', code: 'TBA-335', name: { pt: 'Terravista 27', en: 'Terravista 27' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 7, area: '—',
  price: { pt: 'R$ 12.500 / diária', en: 'R$ 12,500 / night' },
  priceLow: { pt: 'R$ 10.500 / diária', en: 'R$ 10,500 / night' },
  carnaval: { pt: 'R$ 90.000 (Carnaval 2027 · pacote de 5 diárias)', en: 'R$ 90,000 (Carnival 2027 · 5-night package)' },
  salePrice: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/golf27/01.jpg',
  gallery: ['/img/golf27/01.webp','/img/golf27/02.webp','/img/golf27/03.webp','/img/golf27/04.webp','/img/golf27/05.webp','/img/golf27/06.webp','/img/golf27/07.webp','/img/golf27/08.webp','/img/golf27/09.webp','/img/golf27/10.webp','/img/golf27/11.webp','/img/golf27/12.webp','/img/golf27/13.webp','/img/golf27/14.webp','/img/golf27/15.webp','/img/golf27/16.webp','/img/golf27/17.webp','/img/golf27/18.webp','/img/golf27/19.webp','/img/golf27/20.webp','/img/golf27/21.webp','/img/golf27/22.webp','/img/golf27/23.webp','/img/golf27/24.webp','/img/golf27/25.webp','/img/golf27/26.webp','/img/golf27/27.webp','/img/golf27/28.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Lounge com vista para o campo de golfe', 'Varanda suspensa', 'Jardim de inverno', 'Deck e jardim', 'Sala de estar, leitura, jantar e TV', 'Cozinha gourmet equipada e três despensas', 'Churrasqueira portátil', 'Máquina de gelo, frigobar, cervejeira e geladeiras', 'Smart TV e internet Wi-Fi', 'Ar-condicionado nas suítes', 'Espreguiçadeiras', 'Apoio de praia completo', '2 carrinhos de golfe à disposição', 'Estacionamento e lavanderia equipada'],
    en: ['Private pool', 'Lounge overlooking the golf course', 'Suspended veranda', 'Winter garden', 'Deck and garden', 'Living, reading, dining and TV rooms', 'Equipped gourmet kitchen and three pantries', 'Portable barbecue', 'Ice maker, minibar, beer cooler and refrigerators', 'Smart TV and Wi-Fi internet', 'Air conditioning in the suites', 'Sun loungers', 'Full beach service', '2 golf carts available', 'Parking and equipped laundry'],
  },
  staff: { pt: ['Cozinheira', 'Arrumadeiras', 'Piscineiro e jardineiro'], en: ['Cook', 'Housekeepers', 'Pool attendant and gardener'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Villavista Golf, Complexo Terravista, com fácil acesso às atrações do complexo e à natureza preservada do entorno.', en: 'In the Villavista Golf Condominium, Terravista Complex, with easy access to the complex attractions and the preserved nature of the surroundings.' },
  description: {
    pt: 'Localizada no exclusivo Condomínio Villavista Golf, no Complexo Terravista, a Terra Vista Golf 27 combina a elegância de uma casa de campo com a leveza e o clima descontraído de uma residência de praia.\n\nO projeto valoriza a convivência, com ambientes amplos, ventilados e integrados à natureza. As salas de estar, leitura, jantar e televisão são bem distribuídas e oferecem diferentes espaços para relaxar, receber amigos e aproveitar momentos especiais em família.\n\nA área íntima conta com seis suítes completas, todas climatizadas, proporcionando conforto e privacidade aos hóspedes durante todo o ano.\n\nEntre os destaques da casa estão o jardim de inverno e a varanda suspensa, espaços acolhedores para descansar e apreciar o fim da tarde. A cozinha gourmet é ampla, totalmente equipada e possui três despensas, além de lavanderia funcional.\n\nNa área externa, a piscina privativa, o deck e o lounge com vista para o campo de golfe completam a experiência de lazer, tranquilidade e bem-estar desta residência exclusiva em Trancoso.',
    en: 'Located in the exclusive Villavista Golf Condominium, in the Terravista Complex, Terra Vista Golf 27 combines the elegance of a country house with the lightness and relaxed atmosphere of a beach residence.\n\nThe project values conviviality, with spacious, ventilated rooms integrated into nature. The living, reading, dining and television rooms are well distributed and offer different spaces to relax, receive friends and enjoy special moments with the family.\n\nThe private area has six complete suites, all air-conditioned, providing comfort and privacy to guests throughout the year.\n\nAmong the highlights of the house are the winter garden and the suspended veranda, cozy spaces to rest and enjoy the late afternoon. The gourmet kitchen is spacious, fully equipped and has three pantries, plus a functional laundry room.\n\nOutside, the private pool, the deck and the lounge overlooking the golf course complete the experience of leisure, tranquility and well-being of this exclusive residence in Trancoso.',
  },
  notes: { pt: ['Diária Baixa: abril a novembro. Diária Alta: dezembro, janeiro, fevereiro, março, julho e feriados.', 'Réveillon: indisponível. Carnaval 2027: disponível, pacote de 5 diárias.', 'Taxa de serviço: acréscimo de 10% sobre o valor da hospedagem.'], en: ['Low season: April to November. High season: December, January, February, March, July and holidays.', 'New Year\'s: unavailable. Carnival 2027: available, 5-night package.', 'Service fee: 10% added to the accommodation price.'] },
};

const TVB10: Property = {
  id: 'terravista-boutique-casa-10', code: 'TBA-336', name: { pt: 'Terravista 10', en: 'Terravista 10' },
  purpose: ['aluguel', 'venda'], location: 'Terravista Boutique', suites: 5, guests: 12, baths: 5, area: '2.038 m²',
  price: { pt: 'R$ 6.900 / diária', en: 'R$ 6,900 / night' },
  priceLow: { pt: 'R$ 3.900 / diária', en: 'R$ 3,900 / night' },
  carnaval: { pt: 'R$ 75.000 (Carnaval 2027 · pacote de 5 diárias)', en: 'R$ 75,000 (Carnival 2027 · 5-night package)' },
  reveillon: { pt: 'R$ 290.000 (pacote de 10 diárias)', en: 'R$ 290,000 (10-night package)' },
  salePrice: { pt: 'R$ 10.000.000', en: 'R$ 10,000,000' },
  image: '/img/tvb10/01.jpg',
  gallery: ['/img/tvb10/01.webp','/img/tvb10/02.webp','/img/tvb10/03.webp','/img/tvb10/04.webp','/img/tvb10/05.webp','/img/tvb10/06.webp','/img/tvb10/07.webp','/img/tvb10/08.webp','/img/tvb10/09.webp','/img/tvb10/10.webp','/img/tvb10/11.webp','/img/tvb10/12.webp','/img/tvb10/13.webp','/img/tvb10/14.webp','/img/tvb10/15.webp','/img/tvb10/16.webp','/img/tvb10/17.webp','/img/tvb10/18.webp','/img/tvb10/19.webp','/img/tvb10/20.webp','/img/tvb10/21.webp','/img/tvb10/22.webp','/img/tvb10/23.webp','/img/tvb10/24.webp','/img/tvb10/25.webp','/img/tvb10/26.webp','/img/tvb10/27.webp','/img/tvb10/28.webp','/img/tvb10/29.webp','/img/tvb10/30.webp','/img/tvb10/31.webp','/img/tvb10/32.webp','/img/tvb10/33.webp','/img/tvb10/34.webp','/img/tvb10/35.webp','/img/tvb10/36.webp','/img/tvb10/37.webp','/img/tvb10/38.webp','/img/tvb10/39.webp','/img/tvb10/40.webp','/img/tvb10/41.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar', 'Piscina privativa, deck, jardim e mirante', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada e área gourmet integrada', 'Adega de vinhos', 'Churrasqueira e espaço gourmet', 'Som ambiente', 'Smart TV e internet Wi-Fi', 'Ar-condicionado', 'Mosquiteiros', 'Frigobares e geladeira de cerveja', 'Máquina de gelo e máquina de lavar-louças', 'Espreguiçadeiras e ombrelone', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia', 'Secadores de cabelo', 'Lavabo, lavanderia e quarto de apoio', 'Gerador e poço artesiano', 'Estacionamento e portaria 24 horas', 'Apoio de praia'],
    en: ['Sea view', 'Private pool, deck, garden and lookout', 'Living room, dining room and TV room', 'Equipped kitchen and integrated gourmet area', 'Wine cellar', 'Barbecue and gourmet space', 'Ambient sound', 'Smart TV and Wi-Fi internet', 'Air conditioning', 'Mosquito nets', 'Minibars and beer fridge', 'Ice maker and dishwasher', 'Sun loungers and parasol', 'Bed, table and bath linens', 'Pool and beach towels', 'Hair dryers', 'Guest bathroom, laundry and staff room', 'Generator and artesian well', 'Parking and 24-hour gatehouse', 'Beach service'],
  },
  staff: { pt: ['1 arrumadeira', '1 cozinheira', 'Apoio adicional de cozinha conforme o período e as condições da reserva'], en: ['1 housekeeper', '1 cook', 'Additional kitchen support depending on the period and reservation conditions'] },
  features: ['vista-mar', 'condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Terravista Boutique, a cerca de 300 metros da Praia das Tartarugas, com vista para o mar, próxima ao campo de golfe. O condomínio conta com portaria 24 horas e está inserido em uma das áreas mais reservadas de Trancoso.', en: 'In the Terravista Boutique Condominium, about 300 meters from Praia das Tartarugas, with sea views, near the golf course. The condominium has a 24-hour gatehouse and is set in one of the most reserved areas of Trancoso.' },
  description: {
    pt: 'Localizada no exclusivo Condomínio Terravista Boutique, a apenas 300 metros da Praia das Tartarugas, a Casa 10 reúne privacidade, conforto e uma relação direta com a paisagem de Trancoso. A vista para o mar acompanha os principais ambientes e cria uma atmosfera leve, ideal para dias de descanso em família ou entre amigos.\n\nA residência dispõe de cinco suítes amplas, ambientes sociais integrados e uma área externa pensada para convivência. A piscina privativa, o deck, o jardim e o espaço gourmet formam o centro da casa, conectando sala, refeições e lazer em uma composição aberta e acolhedora.\n\nCom infraestrutura completa, apoio de praia e serviços de staff, a propriedade oferece praticidade durante toda a estadia, sem abrir mão da elegância natural que caracteriza o Terravista.',
    en: 'Located in the exclusive Terravista Boutique Condominium, just 300 meters from Praia das Tartarugas, Casa 10 brings together privacy, comfort and a direct relationship with the Trancoso landscape. The sea view accompanies the main rooms and creates a light atmosphere, ideal for days of rest with family or friends.\n\nThe residence has five spacious suites, integrated social areas and an outdoor area designed for conviviality. The private pool, deck, garden and gourmet space form the heart of the house, connecting living room, dining and leisure in an open and welcoming composition.\n\nWith complete infrastructure, beach service and staff services, the property offers practicality throughout the stay, without giving up the natural elegance that characterizes Terravista.',
  },
  notes: { pt: ['Diária Baixa: abril a novembro. Diária Alta: dezembro, janeiro, fevereiro, março, julho e feriados.', 'Locação mínima de 5 diárias. Não é permitido hospedar animais de estimação.', 'Taxa de serviço de R$ 1.300 por diária (staff). Réveillon: acréscimo de 5% de taxa de serviço sobre o valor do pacote.'], en: ['Low season: April to November. High season: December, January, February, March, July and holidays.', 'Minimum rental of 5 nights. Pets are not allowed.', 'Service fee of R$ 1,300 per night (staff). New Year\'s: 5% service fee added to the package price.'] },
};

const MANGABA: Property = {
  id: 'casa-mangaba-altos-de-trancoso', code: 'TBA-337', name: { pt: 'Casa Mangaba — Altos de Trancoso', en: 'Casa Mangaba — Altos de Trancoso' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 5, guests: 10, baths: 6, area: '490 m² · terreno 2.180 m²',
  price: { pt: 'R$ 9.600 / diária', en: 'R$ 9,600 / night' },
  priceLow: { pt: 'R$ 8.400 / diária', en: 'R$ 8,400 / night' },
  carnaval: { pt: 'R$ 80.000 (pacote de 5 diárias)', en: 'R$ 80,000 (5-night package)' },
  reveillon: { pt: 'R$ 420.000 (pacote de 10 noites)', en: 'R$ 420,000 (10-night package)' },
  image: '/img/mangaba/01.jpg',
  gallery: ['/img/mangaba/01.webp','/img/mangaba/02.webp','/img/mangaba/03.webp','/img/mangaba/04.webp','/img/mangaba/05.webp','/img/mangaba/06.webp','/img/mangaba/07.webp','/img/mangaba/08.webp','/img/mangaba/09.webp','/img/mangaba/10.webp','/img/mangaba/11.webp','/img/mangaba/12.webp','/img/mangaba/13.webp','/img/mangaba/14.webp','/img/mangaba/15.webp','/img/mangaba/16.webp','/img/mangaba/17.webp','/img/mangaba/18.webp','/img/mangaba/19.webp','/img/mangaba/20.webp','/img/mangaba/21.webp','/img/mangaba/22.webp','/img/mangaba/23.webp','/img/mangaba/24.webp','/img/mangaba/25.webp','/img/mangaba/26.webp','/img/mangaba/27.webp','/img/mangaba/28.webp','/img/mangaba/29.webp','/img/mangaba/30.webp','/img/mangaba/31.webp','/img/mangaba/32.webp','/img/mangaba/33.webp','/img/mangaba/34.webp','/img/mangaba/35.webp','/img/mangaba/36.webp','/img/mangaba/37.webp','/img/mangaba/38.webp'], featured: false,
  amenities: {
    pt: ['Vista para o mar e para a mata', 'Piscina privativa e mirante', 'Decks e áreas externas', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada e espaço gourmet', 'Churrasqueira e forno de pizza', 'Cervejeira, freezer e máquina de gelo', 'Máquina de lavar-louça', 'Internet Wi-Fi e TV a cabo', 'Som ambiente', 'Ar-condicionado', 'Mosquiteiros', 'Espreguiçadeiras e ombrelone', 'Roupas de cama, mesa e banho', 'Toalhas de piscina', 'Secador de cabelo', 'Lavabo e lavanderia', 'Poço artesiano'],
    en: ['Sea and forest views', 'Private pool and lookout', 'Decks and outdoor areas', 'Living room, dining room and TV room', 'Equipped kitchen and gourmet space', 'Barbecue and pizza oven', 'Beer cooler, freezer and ice maker', 'Dishwasher', 'Wi-Fi internet and cable TV', 'Ambient sound', 'Air conditioning', 'Mosquito nets', 'Sun loungers and parasol', 'Bed, table and bath linens', 'Pool towels', 'Hair dryer', 'Guest bathroom and laundry', 'Artesian well'],
  },
  staff: { pt: ['1 arrumadeira', '1 cozinheira', '1 auxiliar de cozinha', '1 jardineiro/piscineiro'], en: ['1 housekeeper', '1 cook', '1 kitchen assistant', '1 gardener/pool attendant'] },
  features: ['vista-mar', 'condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Altos de Trancoso, próxima ao Quadrado e à Praia dos Nativos — aproximadamente 7 a 10 minutos a pé ou 5 minutos de carro.', en: 'In the Altos de Trancoso Condominium, close to the Quadrado and Praia dos Nativos — approximately 7 to 10 minutes on foot or 5 minutes by car.' },
  description: {
    pt: 'A Casa Mangaba ocupa uma posição privilegiada no Condomínio Altos de Trancoso, no alto das falésias, com vistas abertas para o mar e para a mata. O projeto valoriza a topografia natural do terreno e cria uma relação constante entre os ambientes internos, a paisagem e a vegetação ao redor.\n\nAssinada pelo arquiteto Marcel Buscar, a residência traduz o estilo rústico-chic característico de Trancoso por meio de estruturas em madeira, amplos panos de vidro e materiais naturais. A decoração reúne peças de artistas locais e reforça a identidade autêntica da região, com elegância e personalidade.\n\nCom cinco suítes e capacidade para até dez hóspedes, a casa oferece ambientes amplos e acolhedores, sala de estar, sala de jantar, sala de TV, cozinha equipada, espaço gourmet, piscina e mirante. Os decks e áreas externas foram pensados para aproveitar a vista e proporcionar momentos de descanso e convivência com total privacidade.\n\nA localização permite fácil acesso ao Quadrado e às praias: aproximadamente sete a dez minutos a pé, ou cerca de cinco minutos de carro. O serviço de staff está incluído na locação, garantindo praticidade e conforto durante toda a estadia.',
    en: 'Casa Mangaba occupies a privileged position in the Altos de Trancoso Condominium, on top of the cliffs, with open views of the sea and the forest. The project values the natural topography of the land and creates a constant relationship between the interiors, the landscape and the surrounding vegetation.\n\nDesigned by architect Marcel Buscar, the residence translates the rustic-chic style characteristic of Trancoso through wooden structures, wide glass panels and natural materials. The decoration brings together pieces by local artists and reinforces the authentic identity of the region, with elegance and personality.\n\nWith five suites and capacity for up to ten guests, the house offers spacious and welcoming rooms, living room, dining room, TV room, equipped kitchen, gourmet space, pool and lookout. The decks and outdoor areas were designed to enjoy the view and provide moments of rest and conviviality with total privacy.\n\nThe location allows easy access to the Quadrado and the beaches: approximately seven to ten minutes on foot, or about five minutes by car. Staff service is included in the rental, ensuring practicality and comfort throughout the stay.',
  },
  notes: { pt: ['Locação mínima de 3 diárias. Pets não são permitidos.', 'Taxa de serviço: acréscimo de 10% sobre o valor da hospedagem.'], en: ['Minimum rental of 3 nights. Pets are not allowed.', 'Service fee: 10% added to the accommodation price.'] },
};

const OKUN: Property = {
  id: 'casa-okun-quadrado', code: 'TBA-338', name: { pt: 'Casa \u00d2kun', en: 'Casa \u00d2kun' },
  purpose: ['aluguel'], location: 'Centro', suites: 2, guests: 4, baths: 2, area: '\u2014',
  price: { pt: 'R$ 2.500 / di\u00e1ria', en: 'R$ 2,500 / night' },
  priceLow: { pt: 'R$ 2.000 / di\u00e1ria', en: 'R$ 2,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 100.000', en: 'R$ 100,000' },
  image: '/img/okun/01.jpg',
  gallery: ['/img/okun/01.webp','/img/okun/02.webp','/img/okun/03.webp','/img/okun/04.webp','/img/okun/05.webp','/img/okun/06.webp','/img/okun/07.webp','/img/okun/08.webp','/img/okun/09.webp','/img/okun/10.webp','/img/okun/11.webp','/img/okun/12.webp','/img/okun/13.webp','/img/okun/14.webp','/img/okun/15.webp','/img/okun/16.webp','/img/okun/17.webp','/img/okun/18.webp','/img/okun/19.webp','/img/okun/20.webp','/img/okun/21.webp','/img/okun/22.webp','/img/okun/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Jardim tropical com pergolado', '\u00c1rea gourmet externa', 'Sala de TV', 'Cozinha equipada', 'Ar-condicionado', 'Internet Wi-Fi', 'Smart TV', 'Roupas de cama e banho', 'Estacionamento privativo', 'A 5 minutos a p\u00e9 do Quadrado'],
    en: ['Swimming pool', 'Tropical garden with pergola', 'Outdoor gourmet area', 'TV room', 'Equipped kitchen', 'Air conditioning', 'Wi-Fi internet', 'Smart TV', 'Bed and bath linens', 'Private parking', '5 minutes on foot from the Quadrado'],
  },
  staff: { pt: ['Camareira'], en: ['Housekeeper'] },
  features: ['quadrado', 'piscina'],
  locationDetail: { pt: 'No centro de Trancoso, a aproximadamente 5 minutos de caminhada do Quadrado, com f\u00e1cil acesso aos restaurantes, bares e ao charme do vilarejo.', en: 'In the center of Trancoso, approximately 5 minutes on foot from the Quadrado, with easy access to the restaurants, bars and the charm of the village.' },
  description: {
    pt: 'Localizada no centro de Trancoso, a aproximadamente cinco minutos de caminhada do Quadrado, a Casa \u00d2kun \u00e9 ideal para quem deseja aproveitar os restaurantes, bares e todo o charme do vilarejo com praticidade.\n\nCom ambientes elegantes e acolhedores, a casa oferece conforto e privacidade para at\u00e9 quatro pessoas, em duas su\u00edtes com cama queen. A \u00e1rea social re\u00fane sala de TV e cozinha equipada, integradas aos espa\u00e7os externos.\n\nNo jardim tropical, a piscina e o pergolado criam um ref\u00fagio tranquilo para os dias de descanso, a poucos passos da vida animada do Quadrado. A casa conta ainda com estacionamento privativo.',
    en: 'Located in the center of Trancoso, approximately five minutes on foot from the Quadrado, Casa \u00d2kun is ideal for those who want to enjoy the restaurants, bars and all the charm of the village with convenience.\n\nWith elegant and welcoming spaces, the house offers comfort and privacy for up to four people, in two suites with queen beds. The social area includes a TV room and an equipped kitchen, integrated with the outdoor spaces.\n\nIn the tropical garden, the pool and pergola create a peaceful retreat for days of rest, just a few steps from the lively Quadrado. The house also has private parking.',
  },
  notes: { pt: ['Valores e disponibilidade sujeitos a confirma\u00e7\u00e3o.'], en: ['Prices and availability subject to confirmation.'] },
};
const GOLF62: Property = {
  id: 'terravista-golf-casa-62', code: 'TBA-339', name: { pt: 'Terravista 62', en: 'Terravista 62' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 6, guests: 12, baths: 6, area: '735 m\u00b2 \u00b7 terreno 2.668 m\u00b2',
  price: { pt: 'R$ 14.000 / di\u00e1ria', en: 'R$ 14,000 / night' },
  priceLow: { pt: 'R$ 12.000 / di\u00e1ria', en: 'R$ 12,000 / night' },
  carnaval: { pt: 'R$ 120.000', en: 'R$ 120,000' },
  reveillon: { pt: 'R$ 450.000', en: 'R$ 450,000' },
  image: '/img/golf62/01.jpg',
  gallery: ['/img/golf62/01.webp','/img/golf62/02.webp','/img/golf62/03.webp','/img/golf62/04.webp','/img/golf62/05.webp','/img/golf62/06.webp','/img/golf62/07.webp','/img/golf62/08.webp','/img/golf62/09.webp','/img/golf62/10.webp','/img/golf62/11.webp','/img/golf62/12.webp','/img/golf62/13.webp','/img/golf62/14.webp','/img/golf62/15.webp','/img/golf62/16.webp','/img/golf62/17.webp','/img/golf62/18.webp','/img/golf62/19.webp','/img/golf62/20.webp','/img/golf62/21.webp','/img/golf62/22.webp','/img/golf62/23.webp','/img/golf62/24.webp','/img/golf62/25.webp','/img/golf62/26.webp','/img/golf62/27.webp','/img/golf62/28.webp','/img/golf62/29.webp','/img/golf62/30.webp','/img/golf62/31.webp','/img/golf62/32.webp','/img/golf62/33.webp','/img/golf62/34.webp','/img/golf62/35.webp','/img/golf62/36.webp','/img/golf62/37.webp','/img/golf62/38.webp','/img/golf62/39.webp','/img/golf62/40.webp','/img/golf62/41.webp','/img/golf62/42.webp','/img/golf62/43.webp','/img/golf62/44.webp','/img/golf62/45.webp','/img/golf62/46.webp','/img/golf62/47.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Espa\u00e7o gourmet e churrasqueira', 'Adega de vinhos', 'Sala de estar, sala de jantar e sala de TV', 'Cozinha equipada', 'Espregui\u00e7adeiras e ombrelone', 'Ar-condicionado e ventilador de teto', 'Cofres nos quartos', 'Mosquiteiros', 'Internet Wi-Fi', 'TV e Netflix', 'Sistema de som', 'Cervejeira, freezer e m\u00e1quina de gelo', 'Lavabo e lavanderia', 'Quarto de apoio', 'Gerador', 'Estacionamento', 'Apoio de praia', 'Roupas de cama, mesa e banho', 'Toalhas de piscina', 'Secador de cabelo', 'Kit beb\u00ea', 'Kids friendly'],
    en: ['Private pool', 'Gourmet area and barbecue', 'Wine cellar', 'Living room, dining room and TV room', 'Equipped kitchen', 'Sun loungers and parasol', 'Air conditioning and ceiling fans', 'In-room safes', 'Mosquito nets', 'Wi-Fi internet', 'TV and Netflix', 'Sound system', 'Beer cooler, freezer and ice maker', 'Guest bathroom and laundry', 'Staff quarters', 'Generator', 'Parking', 'Beach support', 'Bed, table and bath linens', 'Pool towels', 'Hair dryer', 'Baby kit', 'Kids friendly'],
  },
  staff: { pt: ['2 camareiras', '1 cozinheira', '1 auxiliar de cozinha', '1 copeiro'], en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 waiter/bartender'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'Condom\u00ednio Terravista Golf, no alto da fal\u00e9sia do Rio da Barra, Trancoso \u2014 Bahia.', en: 'Terravista Golf Condominium, on top of the Rio da Barra cliff, Trancoso \u2014 Bahia.' },
  description: {
    pt: 'Localizada no exclusivo Condom\u00ednio Terravista Golf, a Casa Golf 62 combina arquitetura contempor\u00e2nea, conforto e a atmosfera natural de Trancoso. Assinada por David Bastos, com paisagismo de Mauricio Prada e decora\u00e7\u00e3o de Maianah Cohin, a resid\u00eancia foi projetada para valorizar a luz, a amplitude dos espa\u00e7os e a integra\u00e7\u00e3o entre as \u00e1reas internas e externas.\n\nCom 735 m\u00b2 de \u00e1rea constru\u00edda em um terreno de 2.668 m\u00b2, a casa acomoda at\u00e9 12 h\u00f3spedes em 6 su\u00edtes amplas e bem distribu\u00eddas. A \u00e1rea social re\u00fane salas de estar, jantar e TV, cozinha equipada e espa\u00e7o gourmet, criando um ambiente elegante e acolhedor para momentos em fam\u00edlia ou entre amigos.\n\nNa \u00e1rea externa, a piscina de linhas contempor\u00e2neas, o paisagismo e os espa\u00e7os de conviv\u00eancia convidam ao descanso e ao lazer. A propriedade conta ainda com estrutura completa, apoio de praia e equipe de staff para uma experi\u00eancia confort\u00e1vel durante toda a estadia.',
    en: 'Located in the exclusive Terravista Golf Condominium, Casa Golf 62 combines contemporary architecture, comfort and the natural atmosphere of Trancoso. Designed by David Bastos, with landscaping by Mauricio Prada and decoration by Maianah Cohin, the residence was planned to enhance light, the generosity of spaces and the integration between indoor and outdoor areas.\n\nWith 735 m\u00b2 of built area on a 2,668 m\u00b2 plot, the house accommodates up to 12 guests in 6 spacious and well-distributed suites. The social area brings together living, dining and TV rooms, an equipped kitchen and a gourmet space, creating an elegant and welcoming environment for moments with family or friends.\n\nOutside, the contemporary-lined pool, the landscaping and the gathering spaces invite rest and leisure. The property also offers a complete structure, beach support and a staff team for a comfortable experience throughout the stay.',
  },
  notes: { pt: ['Loca\u00e7\u00e3o m\u00ednima de 3 di\u00e1rias.', 'Valores de Carnaval e R\u00e9veillon correspondem a pacotes; per\u00edodo, disponibilidade e condi\u00e7\u00f5es confirmados no momento da reserva.', 'O preparo de alimentos e bebidas, compras e demais consumos s\u00e3o cobrados \u00e0 parte.'], en: ['Minimum rental of 3 nights.', 'Carnival and New Year\u2019s Eve rates correspond to packages; period, availability and conditions confirmed at booking.', 'Food and beverage preparation, groceries and other consumption are charged separately.'] },
};
const DUE: Property = {
  id: 'casa-due-altos-de-trancoso', code: 'TBA-340', name: { pt: 'Casa Due — Altos de Trancoso', en: 'Casa Due — Altos de Trancoso' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 6, area: '—',
  price: { pt: 'R$ 9.000 / diária', en: 'R$ 9,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 260.000 (pacote de 10 noites)', en: 'R$ 260,000 (10-night package)' },
  salePrice: { pt: 'R$ 15.000.000', en: 'R$ 15,000,000' },
  image: '/img/due/01.jpg',
  gallery: ['/img/due/01.webp','/img/due/02.webp','/img/due/03.webp','/img/due/04.webp','/img/due/05.webp','/img/due/06.webp','/img/due/07.webp','/img/due/08.webp','/img/due/09.webp','/img/due/10.webp','/img/due/11.webp','/img/due/12.webp','/img/due/13.webp','/img/due/14.webp','/img/due/15.webp','/img/due/16.webp','/img/due/17.webp','/img/due/18.webp','/img/due/19.webp','/img/due/20.webp','/img/due/21.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Deck e varanda', 'Jardim', 'Área gourmet', 'Churrasqueira', 'Cervejeira', 'Ar-condicionado', 'Internet Wi-Fi', 'TV', 'Som ambiente', 'Roupas de cama e banho', 'Toalhas de piscina', 'Estacionamento'],
    en: ['Private pool', 'Deck and veranda', 'Garden', 'Gourmet area', 'Barbecue', 'Beer cooler', 'Air conditioning', 'Wi-Fi internet', 'TV', 'Ambient sound', 'Bed and bath linens', 'Pool towels', 'Parking'],
  },
  staff: { pt: ['Camareira', 'Cozinheira'], en: ['Housekeeper', 'Cook'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Altos de Trancoso — 8 minutos a pé do Quadrado e 10 minutos da Praia dos Coqueiros.', en: 'In the Altos de Trancoso Condominium — 8 minutes on foot from the Quadrado and 10 minutes from Praia dos Coqueiros.' },
  description: {
    pt: 'Localizada no Condomínio Altos de Trancoso, a Casa Due fica a apenas oito minutos a pé do Quadrado e dez minutos da Praia dos Coqueiros, combinando a privacidade do condomínio com a conveniência de estar perto de tudo.\n\nSão seis suítes distribuídas entre a casa principal — com quatro suítes — e dois bangalôs independentes, acomodando até doze hóspedes com conforto. A área social reúne ambientes integrados, varanda e uma cozinha bem equipada.\n\nNa área externa, a piscina, o deck, o jardim e a área gourmet com churrasqueira formam o centro de convivência da casa. Camareira e cozinheira estão incluídas na locação. A propriedade também está disponível para venda.',
    en: 'Located in the Altos de Trancoso Condominium, Casa Due is just eight minutes on foot from the Quadrado and ten minutes from Praia dos Coqueiros, combining the privacy of the condominium with the convenience of being close to everything.\n\nThere are six suites distributed between the main house — with four suites — and two independent bungalows, accommodating up to twelve guests in comfort. The social area brings together integrated spaces, a veranda and a well-equipped kitchen.\n\nOutside, the pool, deck, garden and gourmet area with barbecue form the heart of the house. Housekeeper and cook are included in the rental. The property is also available for sale.',
  },
  notes: { pt: ['Diária única de R$ 9.000 na baixa e na alta temporada.', 'Camareira e cozinheira incluídas na locação.'], en: ['Single rate of R$ 9,000 per night in low and high season.', 'Housekeeper and cook included in the rental.'] },
};

const AZUL: Property = {
  id: 'casa-azul-centro', code: 'TBA-341', name: { pt: 'Casa Azul — Centro', en: 'Casa Azul — Centro' },
  purpose: ['aluguel'], location: 'Centro', suites: 4, guests: 8, baths: 4, area: '—',
  price: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 90.000 (pacote)', en: 'R$ 90,000 (package)' },
  image: '/img/azul/01.jpg',
  gallery: ['/img/azul/01.webp','/img/azul/02.webp','/img/azul/03.webp','/img/azul/04.webp','/img/azul/05.webp','/img/azul/06.webp','/img/azul/07.webp','/img/azul/08.webp','/img/azul/09.webp','/img/azul/10.webp','/img/azul/11.webp','/img/azul/12.webp','/img/azul/13.webp','/img/azul/14.webp','/img/azul/15.webp','/img/azul/16.webp','/img/azul/17.webp','/img/azul/18.webp','/img/azul/19.webp','/img/azul/20.webp','/img/azul/21.webp','/img/azul/22.webp','/img/azul/23.webp','/img/azul/24.webp','/img/azul/25.webp','/img/azul/26.webp','/img/azul/27.webp','/img/azul/28.webp','/img/azul/29.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Jardim', 'Churrasqueira', 'Cozinha equipada', 'Sala de convivência', 'Internet Wi-Fi', 'TV', 'Espaço de trabalho', 'Enxoval completo'],
    en: ['Swimming pool', 'Garden', 'Barbecue', 'Equipped kitchen', 'Living room', 'Wi-Fi internet', 'TV', 'Workspace', 'Full linens'],
  },
  staff: { pt: ['Limpeza e arrumação em dias alternados'], en: ['Cleaning and tidying on alternate days'] },
  features: ['piscina'],
  locationDetail: { pt: 'No centro de Trancoso, na Rua Castro Alves, com fácil acesso a pé ao Quadrado, restaurantes e comércio do vilarejo.', en: 'In the center of Trancoso, on Rua Castro Alves, with easy walking access to the Quadrado, restaurants and village shops.' },
  description: {
    pt: 'Situada na Rua Castro Alves, no centro de Trancoso, a Casa Azul é uma opção acolhedora e prática para quem quer viver o vilarejo a pé, com fácil acesso ao Quadrado, aos restaurantes e ao comércio local.\n\nA casa dispõe de quatro quartos e quatro banheiros, acomodando até oito hóspedes: um quarto com quatro camas de solteiro, um com duas camas de solteiro, um com cama de casal e um com uma cama de solteiro.\n\nA área externa com piscina, jardim e churrasqueira, somada à cozinha equipada e à sala de convivência, cria um ambiente descontraído para dias em família ou entre amigos. O serviço de limpeza e arrumação acontece em dias alternados.',
    en: 'Set on Rua Castro Alves, in the center of Trancoso, Casa Azul is a welcoming and practical option for those who want to experience the village on foot, with easy access to the Quadrado, restaurants and local shops.\n\nThe house has four bedrooms and four bathrooms, accommodating up to eight guests: one bedroom with four single beds, one with two single beds, one with a double bed and one with a single bed.\n\nThe outdoor area with pool, garden and barbecue, together with the equipped kitchen and living room, creates a relaxed atmosphere for days with family or friends. Cleaning and tidying service takes place on alternate days.',
  },
  notes: { pt: ['Diária única de R$ 2.500 na baixa e na alta temporada.', 'Limpeza e arrumação em dias alternados.'], en: ['Single rate of R$ 2,500 per night in low and high season.', 'Cleaning and tidying on alternate days.'] },
};

const FER: Property = {
  id: 'casa-do-fer-altos-de-trancoso', code: 'TBA-342', name: { pt: 'Casa do Fer — Altos de Trancoso', en: 'Casa do Fer — Altos de Trancoso' },
  purpose: ['aluguel', 'venda'], location: 'Altos de Trancoso', suites: 7, guests: 14, baths: 7, area: '700 m² · terreno 1.180 m²',
  price: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'R$ 75.000 (pacote de 5 noites)', en: 'R$ 75,000 (5-night package)' },
  reveillon: { pt: 'R$ 350.000 (pacote de 10 noites)', en: 'R$ 350,000 (10-night package)' },
  salePrice: { pt: 'R$ 12.500.000', en: 'R$ 12,500,000' },
  image: '/img/fer/01.jpg',
  gallery: ['/img/fer/01.webp','/img/fer/02.webp','/img/fer/03.webp','/img/fer/04.webp','/img/fer/05.webp','/img/fer/06.webp','/img/fer/07.webp','/img/fer/08.webp','/img/fer/09.webp','/img/fer/10.webp','/img/fer/11.webp','/img/fer/12.webp','/img/fer/13.webp','/img/fer/14.webp','/img/fer/15.webp','/img/fer/16.webp','/img/fer/17.webp','/img/fer/18.webp','/img/fer/19.webp','/img/fer/20.webp','/img/fer/21.webp','/img/fer/22.webp'], featured: false,
  amenities: {
    pt: ['Quadra de beach tennis', 'Piscina privativa', 'Deck', 'Área gourmet', 'Churrasqueira', 'TV a cabo', 'Internet Wi-Fi', 'Área de serviço', 'Estacionamento para 2 carros'],
    en: ['Beach tennis court', 'Private pool', 'Deck', 'Gourmet area', 'Barbecue', 'Cable TV', 'Wi-Fi internet', 'Service area', 'Parking for 2 cars'],
  },
  staff: { pt: ['Cozinheira', 'Auxiliar de cozinha', 'Arrumadeiras', 'Jardineiro/piscineiro'], en: ['Cook', 'Kitchen assistant', 'Housekeepers', 'Gardener/pool attendant'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Altos de Trancoso — 14 minutos a pé do Quadrado e 9 minutos da Praia dos Coqueiros.', en: 'In the Altos de Trancoso Condominium — 14 minutes on foot from the Quadrado and 9 minutes from Praia dos Coqueiros.' },
  description: {
    pt: 'Com 700 m² de área construída em um terreno de 1.180 m² no Condomínio Altos de Trancoso, a Casa do Fer recebe até quatorze hóspedes em sete suítes, a cerca de quatorze minutos a pé do Quadrado e nove minutos da Praia dos Coqueiros.\n\nA área externa é um dos destaques da propriedade: quadra de beach tennis, piscina, deck e área gourmet com churrasqueira garantem lazer e convivência sem sair de casa.\n\nA equipe completa — cozinheira, auxiliar de cozinha, arrumadeiras e jardineiro/piscineiro — está incluída na locação, oferecendo praticidade durante toda a estadia. A propriedade também está disponível para venda.',
    en: 'With 700 m² of built area on a 1,180 m² plot in the Altos de Trancoso Condominium, Casa do Fer welcomes up to fourteen guests in seven suites, about fourteen minutes on foot from the Quadrado and nine minutes from Praia dos Coqueiros.\n\nThe outdoor area is one of the highlights of the property: beach tennis court, pool, deck and gourmet area with barbecue guarantee leisure and togetherness without leaving home.\n\nThe full team — cook, kitchen assistant, housekeepers and gardener/pool attendant — is included in the rental, offering convenience throughout the stay. The property is also available for sale.',
  },
  notes: { pt: ['Diária única de R$ 8.000 na baixa e na alta temporada.', 'Equipe de staff completa incluída na locação.'], en: ['Single rate of R$ 8,000 per night in low and high season.', 'Full staff team included in the rental.'] },
};

const ECO01: Property = {
  id: 'condominio-eco-casa-01', code: 'TBA-350', name: { pt: 'Condomínio Eco — Casa 01', en: 'Condomínio Eco — Casa 01' },
  purpose: ['aluguel'], location: 'Condomínio Eco', suites: 7, guests: 14, baths: 9, area: '910 m² · terreno 2.000 m²',
  price: { pt: 'R$ 7.700 / diária', en: 'R$ 7,700 / night' },
  priceLow: { pt: 'R$ 6.800 / diária', en: 'R$ 6,800 / night' },
  carnaval: { pt: 'R$ 60.000 (pacote)', en: 'R$ 60,000 (package)' },
  reveillon: { pt: 'R$ 185.000 (pacote)', en: 'R$ 185,000 (package)' },
  image: '/img/eco01/01.jpg',
  gallery: ['/img/eco01/01.webp','/img/eco01/02.webp','/img/eco01/03.webp','/img/eco01/04.webp','/img/eco01/05.webp','/img/eco01/06.webp','/img/eco01/07.webp','/img/eco01/08.webp','/img/eco01/09.webp','/img/eco01/10.webp','/img/eco01/11.webp','/img/eco01/12.webp','/img/eco01/13.webp','/img/eco01/14.webp','/img/eco01/15.webp','/img/eco01/16.webp','/img/eco01/17.webp','/img/eco01/18.webp','/img/eco01/19.webp','/img/eco01/20.webp','/img/eco01/21.webp','/img/eco01/22.webp','/img/eco01/23.webp','/img/eco01/24.webp','/img/eco01/25.webp','/img/eco01/26.webp','/img/eco01/27.webp','/img/eco01/28.webp','/img/eco01/29.webp','/img/eco01/30.webp','/img/eco01/31.webp','/img/eco01/32.webp','/img/eco01/33.webp','/img/eco01/34.webp','/img/eco01/35.webp','/img/eco01/36.webp','/img/eco01/37.webp','/img/eco01/38.webp','/img/eco01/39.webp','/img/eco01/40.webp','/img/eco01/41.webp','/img/eco01/42.webp','/img/eco01/43.webp','/img/eco01/44.webp','/img/eco01/45.webp','/img/eco01/46.webp','/img/eco01/47.webp','/img/eco01/48.webp','/img/eco01/49.webp','/img/eco01/50.webp','/img/eco01/51.webp','/img/eco01/52.webp','/img/eco01/53.webp','/img/eco01/54.webp','/img/eco01/55.webp','/img/eco01/56.webp','/img/eco01/57.webp','/img/eco01/58.webp','/img/eco01/59.webp','/img/eco01/60.webp','/img/eco01/61.webp','/img/eco01/62.webp','/img/eco01/63.webp','/img/eco01/64.webp','/img/eco01/65.webp','/img/eco01/66.webp','/img/eco01/67.webp','/img/eco01/68.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Sauna integrada à piscina', 'Jacuzzi externa', 'Rooftop', 'Academia', 'Playground infantil', 'Quadra de areia (beach tennis, peteca e futevôlei)', 'Pista de cooper interna de 100 m', 'Mesa de sinuca profissional', 'Mesa de carteado', 'Espaço gourmet', 'Churrasqueira', 'Fogão a lenha', 'Cozinha equipada', 'Lava-louças', 'Máquina de gelo', 'Máquina de café', 'Cervejeira', 'Banheira de hidromassagem', 'Ar-condicionado', 'Roupas de cama e banho', 'Toalhas de piscina', 'Espreguiçadeiras', 'Rede externa', 'Som Bluetooth portátil', 'Portaria 24 horas'],
    en: ['Swimming pool', 'Pool-integrated sauna', 'Outdoor jacuzzi', 'Rooftop', 'Gym', 'Children playground', 'Sand court (beach tennis, shuttlecock and footvolley)', 'Indoor 100 m running track', 'Professional pool table', 'Card table', 'Gourmet area', 'Barbecue', 'Wood-fired stove', 'Equipped kitchen', 'Dishwasher', 'Ice maker', 'Coffee machine', 'Beer cooler', 'Hot tub', 'Air conditioning', 'Bed and bath linens', 'Pool towels', 'Sun loungers', 'Outdoor hammock', 'Portable Bluetooth speaker', '24-hour gatehouse'],
  },
  staff: { pt: ['Arrumadeira todos os dias', 'Jardineiro e piscineiro duas vezes por semana', 'Cozinheira disponível mediante contratação à parte', 'Réveillon: staff completo com cozinheira incluída'], en: ['Daily housekeeper', 'Gardener and pool attendant twice a week', 'Cook available upon separate hire', 'New Year’s Eve: full staff with cook included'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Eco, na Estrada dos Macacos, em Trancoso — Bahia.', en: 'In the Eco Condominium, on Estrada dos Macacos, in Trancoso — Bahia.' },
  description: {
    pt: 'Localizada no Condomínio Eco, em Trancoso, a Casa 01 está inserida em meio à Mata Atlântica, a poucos minutos da praia, reunindo arquitetura contemporânea, conforto e elementos do estilo praiano de Trancoso.\n\nCom sete suítes, nove banheiros, 910 m² de área construída e terreno de 2.000 m², a residência oferece ambientes amplos e integrados, além de uma estrutura completa de lazer e convivência para famílias e grupos de amigos.\n\nA suíte master conta com cama king size, armário, ar-condicionado, banheiro com dois chuveiros, varanda com vista para a piscina e banheira de hidromassagem. As demais suítes possuem cama de casal, armário, ar-condicionado, banheiro com chuveiro e varanda com vista.\n\nNa área social, a casa dispõe de sala de jantar e TV, três áreas de convivência com espaço gourmet e uma cozinha completamente equipada. A estrutura de lazer inclui piscina, sauna integrada à piscina, jacuzzi externa, academia, playground infantil, quadra de areia, pista de cooper, rooftop e espaços para jogos e entretenimento.',
    en: 'Located in the Eco Condominium, in Trancoso, Casa 01 is set amid the Atlantic Forest, just minutes from the beach, combining contemporary architecture, comfort and the beach-style elements of Trancoso.\n\nWith seven suites, nine bathrooms, 910 m² of built area and a 2,000 m² plot, the residence offers spacious, integrated environments and a complete leisure and gathering structure for families and groups of friends.\n\nThe master suite features a king-size bed, wardrobe, air conditioning, a bathroom with two showers, a veranda overlooking the pool and a hot tub. The other suites have a double bed, wardrobe, air conditioning, a bathroom with shower and a veranda with a view.\n\nIn the social area, the house offers a dining room and TV room, three living areas with a gourmet space and a fully equipped kitchen. The leisure structure includes a pool, a pool-integrated sauna, an outdoor jacuzzi, a gym, a children playground, a sand court, a running track, a rooftop and spaces for games and entertainment.',
  },
  notes: { pt: ['Carnaval e Réveillon sob formato de pacote.', 'Valores sujeitos a alteração sem aviso prévio.'], en: ['Carnival and New Year’s Eve offered as packages.', 'Rates subject to change without notice.'] },
};

const COLINA: Property = {
  id: 'colina-casa-01', code: 'TBA-351', name: { pt: 'Colina — Casa 01', en: 'Colina — Casa 01' },
  purpose: ['aluguel'], location: 'Colina', suites: 5, guests: 12, baths: 5.5, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/colina/01.jpg',
  gallery: ['/img/colina/01.webp','/img/colina/02.webp','/img/colina/03.webp','/img/colina/04.webp','/img/colina/05.webp','/img/colina/06.webp','/img/colina/07.webp','/img/colina/08.webp','/img/colina/09.webp','/img/colina/10.webp','/img/colina/11.webp','/img/colina/12.webp','/img/colina/13.webp','/img/colina/14.webp','/img/colina/15.webp','/img/colina/16.webp','/img/colina/17.webp','/img/colina/18.webp','/img/colina/19.webp','/img/colina/20.webp','/img/colina/21.webp','/img/colina/22.webp','/img/colina/23.webp','/img/colina/24.webp','/img/colina/25.webp','/img/colina/26.webp','/img/colina/27.webp','/img/colina/28.webp','/img/colina/29.webp','/img/colina/30.webp','/img/colina/31.webp','/img/colina/32.webp','/img/colina/33.webp','/img/colina/34.webp','/img/colina/35.webp','/img/colina/36.webp','/img/colina/37.webp','/img/colina/38.webp','/img/colina/39.webp','/img/colina/40.webp','/img/colina/41.webp','/img/colina/42.webp','/img/colina/43.webp','/img/colina/44.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Ampla varanda', 'Ambientes integrados', 'Cozinha equipada', 'Sala de estar', 'TV', 'Wi-Fi', 'Espaço de trabalho', 'Estacionamento gratuito no local', 'Ambientes com ampla entrada de luz natural'],
    en: ['Private pool', 'Large veranda', 'Integrated living spaces', 'Equipped kitchen', 'Living room', 'TV', 'Wi-Fi', 'Workspace', 'Free on-site parking', 'Spaces with abundant natural light'],
  },
  features: ['piscina'],
  locationDetail: { pt: 'No bairro residencial da Colina, em Trancoso — Bahia. Região tranquila e de perfil familiar.', en: 'In the residential Colina neighborhood, in Trancoso — Bahia. A quiet, family-friendly area.' },
  description: {
    pt: 'Localizada em uma região residencial tranquila de Trancoso, a casa oferece uma atmosfera reservada, acolhedora e ideal para famílias e grupos que buscam conforto e privacidade durante a estadia.\n\nA arquitetura privilegia a integração dos ambientes, a entrada de luz natural e a conexão com as áreas externas. A piscina se integra à área social da casa, enquanto a ampla varanda cria um espaço agradável para momentos de descanso e convivência.\n\nCom capacidade para até doze hóspedes, a residência conta com cinco quartos, sete camas, cinco banheiros e um lavabo, ambientes amplos e uma proposta que combina conforto, simplicidade elegante e o estilo descontraído de Trancoso.',
    en: 'Located in a quiet residential area of Trancoso, the house offers a private, welcoming atmosphere, ideal for families and groups seeking comfort and privacy during their stay.\n\nThe architecture favors integrated spaces, abundant natural light and a connection with the outdoor areas. The pool flows into the house\u2019s social area, while the large veranda creates a pleasant space for rest and togetherness.\n\nAccommodating up to twelve guests, the residence has five bedrooms, seven beds, five bathrooms and a powder room, with spacious rooms and a proposal that combines comfort, elegant simplicity and Trancoso\u2019s laid-back style.',
  },
  notes: { pt: ['Tarifas sob consulta para todos os períodos (baixa e alta temporada, Carnaval e Réveillon).'], en: ['Rates upon request for all periods (low and high season, Carnival and New Year’s Eve).'] },
};

const COLINA2: Property = {
  id: 'colina-casa-02', code: 'TBA-352', name: { pt: 'Colina — Casa 02', en: 'Colina — Casa 02' },
  purpose: ['aluguel'], location: 'Colina', suites: 4, guests: 10, baths: 5, area: '—',
  price: { pt: 'R$ 3.000 / diária', en: 'R$ 3,000 / night' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'R$ 35.000 (pacote)', en: 'R$ 35,000 (package)' },
  reveillon: { pt: 'R$ 150.000 (mínimo de 7 diárias)', en: 'R$ 150,000 (minimum 7 nights)' },
  image: '/img/colina2/01.jpg',
  gallery: ['/img/colina2/01.webp','/img/colina2/02.webp','/img/colina2/03.webp','/img/colina2/04.webp','/img/colina2/05.webp','/img/colina2/06.webp','/img/colina2/07.webp','/img/colina2/08.webp','/img/colina2/09.webp','/img/colina2/10.webp','/img/colina2/11.webp','/img/colina2/12.webp','/img/colina2/13.webp','/img/colina2/14.webp','/img/colina2/15.webp','/img/colina2/16.webp','/img/colina2/17.webp','/img/colina2/18.webp','/img/colina2/19.webp','/img/colina2/20.webp','/img/colina2/21.webp','/img/colina2/22.webp','/img/colina2/23.webp','/img/colina2/24.webp','/img/colina2/25.webp','/img/colina2/26.webp','/img/colina2/27.webp','/img/colina2/28.webp','/img/colina2/29.webp','/img/colina2/30.webp','/img/colina2/31.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa de 9 metros', 'Área gourmet', 'Churrasqueira', 'Fogão a lenha', 'Forno de pizza', 'Geladeira para cervejas', 'Cozinha equipada', 'Varanda', 'Jardim', 'Ar-condicionado', 'Wi-Fi', 'Mosquiteiros', 'Roupas de cama, mesa e banho', 'Toalhas de piscina'],
    en: ['9-meter private pool', 'Gourmet area', 'Barbecue', 'Wood-fired stove', 'Pizza oven', 'Beer fridge', 'Equipped kitchen', 'Veranda', 'Garden', 'Air conditioning', 'Wi-Fi', 'Mosquito nets', 'Bed, table and bath linens', 'Pool towels'],
  },
  staff: { pt: ['Cozinheira', 'Camareira', 'Piscineiro'], en: ['Cook', 'Housekeeper', 'Pool attendant'] },
  features: ['piscina'],
  locationDetail: { pt: 'Na Colina, em Trancoso — Bahia. Região residencial tranquila e familiar.', en: 'In Colina, Trancoso — Bahia. A quiet, family-friendly residential area.' },
  description: {
    pt: 'Localizada em uma área residencial tranquila de Trancoso, a Casa Bela é uma residência acolhedora, cercada pelo verde e pensada para proporcionar privacidade e conforto durante a estadia.\n\nA casa possui ambientes amplos e agradáveis, com espaços de convivência que se conectam à área externa. A varanda e o jardim envolvem a piscina privativa de 9 metros, criando um ambiente ideal para aproveitar os dias de Trancoso com tranquilidade.\n\nUm dos destaques é a área gourmet, equipada com churrasqueira, fogão a lenha e forno de pizza, proporcionando um espaço completo para reunir família e amigos.\n\nA Casa Bela acomoda até dez hóspedes e dispõe de quatro suítes, além de um quarto adicional com banheiro ao lado. Os ambientes são climatizados e a residência conta com estrutura completa para uma estadia confortável.\n\nDurante a hospedagem, a casa dispõe ainda de staff para auxiliar na rotina dos hóspedes, com cozinheira, camareira e piscineiro.',
    en: 'Located in a quiet residential area of Trancoso, Casa Bela is a welcoming residence surrounded by greenery, designed to provide privacy and comfort throughout your stay.\n\nThe house offers spacious, pleasant environments, with living areas that connect to the outdoors. The veranda and garden surround the 9-meter private pool, creating an ideal setting to enjoy Trancoso\u2019s days in tranquility.\n\nOne of the highlights is the gourmet area, equipped with a barbecue, wood-fired stove and pizza oven, providing a complete space to gather family and friends.\n\nCasa Bela accommodates up to ten guests and features four suites, plus an additional bedroom with a bathroom next door. All rooms are air-conditioned and the residence offers a complete structure for a comfortable stay.\n\nDuring the stay, the house also provides staff to assist with the guests\u2019 routine, including a cook, a housekeeper and a pool attendant.',
  },
  notes: { pt: ['Réveillon: mínimo de 7 diárias.', 'Caução: R$ 5.000.'], en: ['New Year’s Eve: minimum 7 nights.', 'Security deposit: R$ 5,000.'] },
};

const COLINA3: Property = {
  id: 'colina-casa-03', code: 'TBA-353', name: { pt: 'Colina — Casa 03', en: 'Colina — Casa 03' },
  purpose: ['aluguel'], location: 'Colina', suites: 3, guests: 7, baths: 3, area: '—',
  price: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  priceLow: { pt: 'R$ 1.500 / diária', en: 'R$ 1,500 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 85.000 (pacote)', en: 'R$ 85,000 (package)' },
  image: '/img/colina3/01.jpg',
  gallery: ['/img/colina3/01.webp','/img/colina3/02.webp','/img/colina3/03.webp','/img/colina3/04.webp','/img/colina3/05.webp','/img/colina3/06.webp','/img/colina3/07.webp','/img/colina3/08.webp','/img/colina3/09.webp','/img/colina3/10.webp','/img/colina3/11.webp','/img/colina3/12.webp','/img/colina3/13.webp','/img/colina3/14.webp','/img/colina3/15.webp','/img/colina3/16.webp','/img/colina3/17.webp','/img/colina3/18.webp','/img/colina3/19.webp','/img/colina3/20.webp','/img/colina3/21.webp','/img/colina3/22.webp','/img/colina3/23.webp','/img/colina3/24.webp','/img/colina3/25.webp','/img/colina3/26.webp','/img/colina3/27.webp','/img/colina3/28.webp','/img/colina3/29.webp','/img/colina3/30.webp','/img/colina3/31.webp','/img/colina3/32.webp','/img/colina3/33.webp','/img/colina3/34.webp','/img/colina3/35.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa de pedra natural', 'Cozinha aberta e totalmente equipada', 'Sala de estar', 'Varanda', 'Terraço', 'Jardim', 'Ar-condicionado', 'Wi-Fi', 'Máquina de lavar', 'Estacionamento gratuito no local'],
    en: ['Natural stone private pool', 'Open fully equipped kitchen', 'Living room', 'Veranda', 'Terrace', 'Garden', 'Air conditioning', 'Wi-Fi', 'Washing machine', 'Free on-site parking'],
  },
  features: ['piscina'],
  locationDetail: { pt: 'Na Colina, em Trancoso — Bahia, a menos de 5 minutos do Quadrado.', en: 'In Colina, Trancoso — Bahia, less than 5 minutes from the Quadrado.' },
  description: {
    pt: 'Com uma atmosfera rústica e elegante, a Casa 03 combina o charme característico de Trancoso com ambientes acolhedores e uma forte integração com a natureza.\n\nA arquitetura valoriza o uso da madeira e de materiais naturais, criando espaços cheios de personalidade. Na área externa, a piscina privativa de pedra natural se integra ao jardim e aos ambientes de convivência, proporcionando um cenário agradável para descansar e aproveitar os dias em Trancoso.\n\nA casa acomoda até sete hóspedes em três suítes independentes, oferecendo conforto e privacidade. A cozinha aberta e totalmente equipada complementa a área social e reforça a proposta descontraída da residência.\n\nLocalizada em uma região residencial tranquila da Colina e a poucos minutos do Quadrado, é uma excelente opção para quem deseja estar próximo ao centro histórico de Trancoso sem abrir mão de sossego e privacidade.',
    en: 'With a rustic and elegant atmosphere, Casa 03 combines Trancoso\u2019s characteristic charm with welcoming environments and a strong connection with nature.\n\nThe architecture values the use of wood and natural materials, creating spaces full of personality. Outside, the natural stone private pool flows into the garden and living areas, providing a pleasant setting to relax and enjoy the days in Trancoso.\n\nThe house accommodates up to seven guests in three independent suites, offering comfort and privacy. The open, fully equipped kitchen complements the social area and reinforces the residence\u2019s laid-back proposal.\n\nLocated in a quiet residential area of Colina, just minutes from the Quadrado, it is an excellent option for those who want to be close to Trancoso\u2019s historic center without giving up peace and privacy.',
  },
  notes: { pt: ['Carnaval sob consulta.'], en: ['Carnival upon request.'] },
};

const COQ08: Property = {
  id: 'casa-coqueiral-08', code: 'TBA-354', name: { pt: 'Casa Coqueiral 8', en: 'Casa Coqueiral 8' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 15, baths: 5.5, area: '—',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 2.400 / diária', en: 'R$ 2,400 / night' },
  carnaval: { pt: 'R$ 40.000 (pacote de 5 diárias)', en: 'R$ 40,000 (5-night package)' },
  reveillon: { pt: 'R$ 110.000 (pacote de 10 diárias)', en: 'R$ 110,000 (10-night package)' },
  image: '/img/coq08/01.jpg',
  gallery: ['/img/coq08/01.webp','/img/coq08/02.webp','/img/coq08/03.webp','/img/coq08/04.webp','/img/coq08/05.webp','/img/coq08/06.webp','/img/coq08/07.webp','/img/coq08/08.webp','/img/coq08/09.webp','/img/coq08/10.webp','/img/coq08/11.webp','/img/coq08/12.webp','/img/coq08/13.webp','/img/coq08/14.webp','/img/coq08/15.webp','/img/coq08/16.webp','/img/coq08/17.webp','/img/coq08/18.webp','/img/coq08/19.webp','/img/coq08/20.webp','/img/coq08/21.webp','/img/coq08/22.webp','/img/coq08/23.webp','/img/coq08/24.webp','/img/coq08/25.webp','/img/coq08/26.webp','/img/coq08/27.webp','/img/coq08/28.webp','/img/coq08/29.webp','/img/coq08/30.webp','/img/coq08/31.webp','/img/coq08/32.webp','/img/coq08/33.webp','/img/coq08/34.webp','/img/coq08/35.webp','/img/coq08/36.webp','/img/coq08/37.webp','/img/coq08/38.webp','/img/coq08/39.webp','/img/coq08/40.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Jacuzzi aquecida', 'Espaço gourmet', 'Redário', 'Living interno e externo', 'Sala de TV', 'Cozinha equipada e integrada', 'Mesa de jantar para 10 lugares', 'Lavabo', 'Varandas', 'Jardim', 'Ar-condicionado', 'Banho ao ar livre'],
    en: ['Private pool', 'Heated jacuzzi', 'Gourmet area', 'Hammock area', 'Indoor and outdoor living rooms', 'TV room', 'Equipped integrated kitchen', 'Dining table for 10', 'Guest bathroom', 'Verandas', 'Garden', 'Air conditioning', 'Outdoor bathing'],
  },
  staff: {
    pt: ['Camareira', 'Limpeza da casa', 'Limpeza da piscina', 'Cozinheira opcional'],
    en: ['Housekeeper', 'House cleaning', 'Pool cleaning', 'Optional cook'],
  },
  features: ['piscina'],
  locationDetail: { pt: 'Condomínio Coqueiral, Trancoso — Bahia, a aproximadamente 10 minutos do Quadrado, em uma região residencial tranquila e cercada pela mata.', en: 'Coqueiral Condominium, Trancoso — Bahia, approximately 10 minutes from the Quadrado, in a quiet residential area surrounded by the forest.' },
  description: {
    pt: 'Localizada em uma área tranquila do Condomínio Coqueiral, a Casa Coqueiral 08 combina conforto, amplitude e integração com a natureza em uma residência pensada para receber famílias e grupos com muita comodidade.\n\nO projeto valoriza o conceito aberto, conectando de forma harmoniosa os ambientes internos e externos. Os espaços de convivência são amplos e acolhedores, com living interno e externo, sala de TV, cozinha integrada e uma área gourmet completa voltada para momentos de lazer e convivência.\n\nNa área externa, a piscina se integra ao deck e ao jardim, enquanto o redário cria um espaço especialmente agradável para descansar. A casa conta ainda com jacuzzi aquecida e experiências de banho ao ar livre, cercadas pela vegetação de Trancoso.\n\nCom capacidade para até 15 hóspedes, a residência dispõe de 5 amplas suítes climatizadas, distribuídas entre o térreo e o piso superior. A configuração dos quartos permite diferentes composições de camas, tornando a casa versátil para famílias e grupos.',
    en: 'Located in a quiet area of the Coqueiral Condominium, Casa Coqueiral 08 combines comfort, spaciousness and integration with nature in a residence designed to welcome families and groups with great convenience.\n\nThe project values the open concept, harmoniously connecting indoor and outdoor environments. The living spaces are ample and welcoming, with indoor and outdoor living rooms, a TV room, an integrated kitchen and a complete gourmet area designed for leisure and togetherness.\n\nOutside, the pool flows into the deck and garden, while the hammock area creates an especially pleasant space to rest. The house also features a heated jacuzzi and outdoor bathing experiences surrounded by the vegetation of Trancoso.\n\nWith capacity for up to 15 guests, the residence offers 5 spacious air-conditioned suites distributed between the ground floor and the upper floor. The room configuration allows different bed arrangements, making the house versatile for families and groups.',
  },
  notes: { pt: ['Suíte 01 (térreo): 3 camas de solteiro, com opção de 1 cama de casal e 1 de solteiro; banheiro com lavabo externo e duas cubas.', 'Suíte 02 (térreo): 1 cama queen e 1 cama de solteiro; varanda voltada para a mata com rede.', 'Suíte 03 (superior master): 1 cama queen e 1 cama de solteiro; closet, banheiro com dois chuveiros e duas cubas e varanda voltada para a mata.', 'Suíte 04 (superior): 3 camas de solteiro, com opção de 1 cama de casal e 1 de solteiro.', 'Suíte 05 (superior master): 1 cama queen e 1 cama de solteiro; varanda frontal e banheiro com dois chuveiros, sendo um deles externo.'], en: ['Suite 01 (ground floor): 3 twin beds, optional 1 double + 1 twin; bathroom with external vanity and double sinks.', 'Suite 02 (ground floor): 1 queen bed and 1 twin bed; veranda facing the forest with hammock.', 'Suite 03 (upper master): 1 queen bed and 1 twin bed; walk-in closet, bathroom with two showers and double sinks and veranda facing the forest.', 'Suite 04 (upper): 3 twin beds, optional 1 double + 1 twin.', 'Suite 05 (upper master): 1 queen bed and 1 twin bed; front veranda and bathroom with two showers, one of them outdoor.'] },
};

const HELENA: Property = {
  id: 'casa-helena-rio-da-barra', code: 'TBA-355', name: { pt: 'Casa Helena — Rio da Barra', en: 'Casa Helena — Rio da Barra' },
  purpose: ['aluguel'], location: 'Rio da Barra', suites: 4, guests: 10, baths: 4, area: '—',
  price: { pt: 'R$ 6.000 / diária', en: 'R$ 6,000 / night' },
  priceLow: { pt: 'R$ 5.000 / diária', en: 'R$ 5,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'R$ 150.000 (pacote)', en: 'R$ 150,000 (package)' },
  image: '/img/helena/01.jpg',
  gallery: ['/img/helena/01.webp','/img/helena/02.webp','/img/helena/03.webp','/img/helena/04.webp','/img/helena/05.webp','/img/helena/06.webp','/img/helena/07.webp','/img/helena/08.webp','/img/helena/09.webp','/img/helena/10.webp','/img/helena/11.webp','/img/helena/12.webp','/img/helena/13.webp','/img/helena/14.webp','/img/helena/15.webp','/img/helena/16.webp','/img/helena/17.webp','/img/helena/18.webp','/img/helena/19.webp','/img/helena/20.webp','/img/helena/21.webp','/img/helena/22.webp','/img/helena/23.webp','/img/helena/24.webp','/img/helena/25.webp','/img/helena/26.webp','/img/helena/27.webp','/img/helena/28.webp','/img/helena/29.webp','/img/helena/30.webp','/img/helena/31.webp','/img/helena/32.webp','/img/helena/33.webp','/img/helena/34.webp','/img/helena/35.webp','/img/helena/36.webp','/img/helena/37.webp','/img/helena/38.webp','/img/helena/39.webp','/img/helena/40.webp','/img/helena/41.webp','/img/helena/42.webp','/img/helena/43.webp','/img/helena/44.webp','/img/helena/45.webp','/img/helena/46.webp','/img/helena/47.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet', 'Churrasqueira', 'Cozinha completa com vista para o mar', 'Ar-condicionado', 'Wi-Fi', 'Estacionamento', 'Áreas de convivência integradas', 'Vista para o mar', 'Aproximadamente 120 m da praia'],
    en: ['Private pool', 'Gourmet area', 'Barbecue', 'Full kitchen with ocean view', 'Air conditioning', 'Wi-Fi', 'Parking', 'Integrated living areas', 'Ocean view', 'Approximately 120 m from the beach'],
  },
  features: ['piscina', 'vista-mar'],
  locationDetail: { pt: 'Rio da Barra, Trancoso — Bahia, a aproximadamente 120 metros da Praia do Rio da Barra.', en: 'Rio da Barra, Trancoso — Bahia, approximately 120 meters from Rio da Barra Beach.' },
  description: {
    pt: 'A poucos passos da Praia do Rio da Barra, a Casa Helena reúne conforto, privacidade e uma localização privilegiada em uma das regiões mais bonitas de Trancoso.\n\nA residência possui ambientes integrados e uma agradável área externa com piscina privativa, cercada pelo verde. A área gourmet com churrasqueira se conecta aos espaços de convivência e cria um ambiente ideal para reunir família e amigos durante a estadia.\n\nA casa conta com 4 suítes climatizadas e acomoda confortavelmente até 10 hóspedes. A cozinha é completa e possui vista para o mar, trazendo ainda mais charme à experiência.\n\nLocalizada a aproximadamente 120 metros da praia, a Casa Helena é uma excelente escolha para quem deseja aproveitar Trancoso com tranquilidade e ter o mar a poucos minutos de caminhada.',
    en: 'Just a few steps from Rio da Barra Beach, Casa Helena brings together comfort, privacy and a privileged location in one of the most beautiful regions of Trancoso.\n\nThe residence features integrated environments and a pleasant outdoor area with a private pool, surrounded by greenery. The gourmet area with a barbecue connects to the living spaces and creates an ideal setting for gathering family and friends during the stay.\n\nThe house has 4 air-conditioned suites and comfortably accommodates up to 10 guests. The kitchen is complete and has an ocean view, adding even more charm to the experience.\n\nLocated approximately 120 meters from the beach, Casa Helena is an excellent choice for those who want to enjoy Trancoso with tranquility and have the sea just a few minutes walk away.',
  },
  notes: { pt: ['Carnaval sob consulta.'], en: ['Carnival upon request.'] },
};

const ECO03: Property = {
  id: 'condominio-eco-casa-03', code: 'TBA-343', name: { pt: 'Condomínio Eco — Casa 03', en: 'Condomínio Eco — Casa 03' },
  purpose: ['aluguel'], location: 'Condomínio Eco', suites: 4, guests: 8, baths: 5, area: '364 m² · terreno 1.000 m²',
  price: { pt: 'R$ 3.800 / diária', en: 'R$ 3,800 / night' },
  priceLow: { pt: 'R$ 3.300 / diária', en: 'R$ 3,300 / night' },
  carnaval: { pt: 'R$ 30.000 (pacote de 5 noites)', en: 'R$ 30,000 (5-night package)' },
  reveillon: { pt: 'R$ 135.000 (pacote de 7 noites)', en: 'R$ 135,000 (7-night package)' },
  image: '/img/eco03/01.jpg',
  gallery: ['/img/eco03/01.webp','/img/eco03/02.webp','/img/eco03/03.webp','/img/eco03/04.webp','/img/eco03/05.webp','/img/eco03/06.webp','/img/eco03/07.webp','/img/eco03/08.webp','/img/eco03/09.webp','/img/eco03/10.webp','/img/eco03/11.webp','/img/eco03/12.webp','/img/eco03/13.webp','/img/eco03/14.webp','/img/eco03/15.webp','/img/eco03/16.webp','/img/eco03/17.webp','/img/eco03/18.webp','/img/eco03/19.webp','/img/eco03/20.webp','/img/eco03/21.webp','/img/eco03/22.webp','/img/eco03/23.webp','/img/eco03/24.webp','/img/eco03/25.webp','/img/eco03/26.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Ducha externa', 'Lava-louças', 'Máquina de gelo', 'Nespresso', 'TV a cabo', 'Máquina de lavar', 'Som ambiente', 'Internet Wi-Fi', 'Ar-condicionado'],
    en: ['Private pool', 'Outdoor shower', 'Dishwasher', 'Ice maker', 'Nespresso', 'Cable TV', 'Washing machine', 'Ambient sound', 'Wi-Fi internet', 'Air conditioning'],
  },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Trancoso Eco Residence, na Estrada dos Macacos — 1,5 km do Quadrado e 3 km da Praia dos Nativos (5 minutos de carro).', en: 'In the Trancoso Eco Residence Condominium, on Estrada dos Macacos — 1.5 km from the Quadrado and 3 km from Praia dos Nativos (5 minutes by car).' },
  description: {
    pt: 'Localizada no Condomínio Trancoso Eco Residence, na Estrada dos Macacos, a Casa 03 fica a apenas 1,5 km do Quadrado e 3 km da Praia dos Nativos — cerca de cinco minutos de carro.\n\nCom 364 m² de área construída em um terreno de 1.000 m², a casa acomoda até oito hóspedes em quatro suítes, com cinco banheiros. Os ambientes sociais são amplos e integrados à área externa.\n\nA piscina, o deck e o jardim formam um conjunto acolhedor para os dias de descanso, e a casa conta com comodidades como lava-louças, máquina de gelo, Nespresso, ducha externa, TV a cabo e som ambiente.',
    en: 'Located in the Trancoso Eco Residence Condominium, on Estrada dos Macacos, Casa 03 is just 1.5 km from the Quadrado and 3 km from Praia dos Nativos — about five minutes by car.\n\nWith 364 m² of built area on a 1,000 m² plot, the house accommodates up to eight guests in four suites, with five bathrooms. The social areas are spacious and integrated with the outdoors.\n\nThe pool, deck and garden form a welcoming set for days of rest, and the house offers amenities such as dishwasher, ice maker, Nespresso, outdoor shower, cable TV and ambient sound.',
  },
  notes: { pt: ['Réveillon: pacote de 7 noites. Carnaval: pacote de 5 noites.'], en: ['New Year’s: 7-night package. Carnival: 5-night package.'] },
};

const ECO04: Property = {
  id: 'condominio-eco-casa-04', code: 'TBA-344', name: { pt: 'Condomínio Eco — Casa 04', en: 'Condomínio Eco — Casa 04' },
  purpose: ['aluguel'], location: 'Condomínio Eco', suites: 6, guests: 12, baths: 6, area: '—',
  price: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  priceLow: { pt: 'R$ 6.500 / diária', en: 'R$ 6,500 / night' },
  carnaval: { pt: 'R$ 60.000 (pacote)', en: 'R$ 60,000 (package)' },
  reveillon: { pt: 'R$ 170.000 (pacote)', en: 'R$ 170,000 (package)' },
  image: '/img/eco04/01.jpg',
  gallery: ['/img/eco04/01.webp','/img/eco04/02.webp','/img/eco04/03.webp','/img/eco04/04.webp','/img/eco04/05.webp','/img/eco04/06.webp','/img/eco04/07.webp','/img/eco04/08.webp','/img/eco04/09.webp','/img/eco04/10.webp','/img/eco04/11.webp','/img/eco04/12.webp','/img/eco04/13.webp','/img/eco04/14.webp','/img/eco04/15.webp','/img/eco04/16.webp','/img/eco04/17.webp','/img/eco04/18.webp','/img/eco04/19.webp','/img/eco04/20.webp','/img/eco04/21.webp','/img/eco04/22.webp','/img/eco04/23.webp','/img/eco04/24.webp','/img/eco04/25.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Quadra de beach tennis', 'Gerador', 'Mosquiteiros', 'Smart TV', 'Equipamentos de praia', 'Internet Wi-Fi', 'Ar-condicionado'],
    en: ['Private pool', 'Beach tennis court', 'Generator', 'Mosquito nets', 'Smart TV', 'Beach equipment', 'Wi-Fi internet', 'Air conditioning'],
  },
  staff: { pt: ['Arrumadeira', 'Piscineiro', 'Jardineiro'], en: ['Housekeeper', 'Pool attendant', 'Gardener'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Trancoso Eco Residence, na Estrada dos Macacos — 2 km do Quadrado e 3 km da Praia dos Nativos.', en: 'In the Trancoso Eco Residence Condominium, on Estrada dos Macacos — 2 km from the Quadrado and 3 km from Praia dos Nativos.' },
  description: {
    pt: 'Situada no Condomínio Trancoso Eco Residence, a Casa 04 fica a cerca de dois quilômetros do Quadrado e três quilômetros da Praia dos Nativos, unindo tranquilidade e acesso rápido ao centrinho e às praias.\n\nSão seis suítes para até doze hóspedes, com ambientes sociais integrados à área externa, onde a piscina, o jardim e a quadra de beach tennis criam um completo espaço de lazer.\n\nA casa conta com gerador, mosquiteiros, Smart TV e equipamentos de praia, além de equipe com arrumadeira, piscineiro e jardineiro incluída na locação.',
    en: 'Set in the Trancoso Eco Residence Condominium, Casa 04 is about two kilometers from the Quadrado and three kilometers from Praia dos Nativos, combining tranquility with quick access to the village center and beaches.\n\nThere are six suites for up to twelve guests, with social areas integrated with the outdoors, where the pool, garden and beach tennis court create a complete leisure space.\n\nThe house has a generator, mosquito nets, Smart TV and beach equipment, plus a team with housekeeper, pool attendant and gardener included in the rental.',
  },
  notes: { pt: ['Carnaval e Réveillon sob formato de pacote.'], en: ['Carnival and New Year’s Eve offered as packages.'] },
};

const VISTA: Property = {
  id: 'casa-vista-caraiva', code: 'TBA-345', name: { pt: 'Casa Vista — Caraíva', en: 'Casa Vista — Caraíva' },
  purpose: ['aluguel'], location: 'Caraíva', suites: 7, guests: 18, baths: 8, area: '1.000 m² · terreno 84.000 m²',
  price: { pt: 'R$ 12.000 / diária', en: 'R$ 12,000 / night' },
  priceLow: { pt: 'R$ 8.000 / diária', en: 'R$ 8,000 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/vista/01.jpg',
  gallery: ['/img/vista/01.webp','/img/vista/02.webp','/img/vista/03.webp','/img/vista/04.webp','/img/vista/05.webp','/img/vista/06.webp','/img/vista/07.webp','/img/vista/08.webp','/img/vista/09.webp','/img/vista/10.webp','/img/vista/11.webp','/img/vista/12.webp','/img/vista/13.webp','/img/vista/14.webp','/img/vista/15.webp','/img/vista/16.webp','/img/vista/17.webp','/img/vista/18.webp','/img/vista/19.webp','/img/vista/20.webp','/img/vista/21.webp','/img/vista/22.webp','/img/vista/23.webp','/img/vista/24.webp','/img/vista/25.webp','/img/vista/26.webp','/img/vista/27.webp','/img/vista/28.webp','/img/vista/29.webp','/img/vista/30.webp','/img/vista/31.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Jacuzzi aquecida', 'Sauna', 'Quadra de areia', 'Píer privativo com barco e barqueiro', 'Adega', 'Cervejeira', '2 geladeiras', 'Lavadora e secadora', 'Gerador', 'Vista para o rio e para o mar', 'Pet friendly (mediante consulta)'],
    en: ['Private pool', 'Heated jacuzzi', 'Sauna', 'Sand court', 'Private pier with boat and boatman', 'Wine cellar', 'Beer cooler', '2 refrigerators', 'Washer and dryer', 'Generator', 'River and sea views', 'Pet friendly (upon request)'],
  },
  staff: { pt: ['Cozinheira', 'Camareira', 'Caseiro 24h', 'Piscineiro', 'Barqueiro'], en: ['Cook', 'Housekeeper', '24h caretaker', 'Pool attendant', 'Boatman'] },
  features: ['piscina', 'vista-mar'],
  locationDetail: { pt: 'No Jambreiro, em Caraíva — às margens do Rio Caraíva, com píer privativo; a praia fica a cerca de 6 minutos de barco. Casa fora de condomínio.', en: 'In Jambreiro, Caraíva — on the banks of the Caraíva River, with a private pier; the beach is about 6 minutes away by boat. House outside a condominium.' },
  description: {
    pt: 'Recém-construída em 2024, a Casa Vista está às margens do Rio Caraíva, no Jambreiro, em um terreno de 84.000 m² com cerca de 1.000 m² de área construída. Do píer privativo, com barco e barqueiro à disposição, chega-se à praia em aproximadamente seis minutos.\n\nA casa acomoda até dezoito hóspedes em sete suítes — oito quartos no total — com oito banheiros. A suíte master conta com cama king, closet, varanda e dois chuveiros; as demais suítes oferecem camas king ou duas camas queen.\n\nPiscina, jacuzzi aquecida, sauna, quadra de areia e uma ampla área gourmet completam a estrutura de lazer, com vista para o rio e para o mar. A equipe inclui cozinheira, camareira, caseiro 24 horas, piscineiro e barqueiro.',
    en: 'Newly built in 2024, Casa Vista sits on the banks of the Caraíva River, in Jambreiro, on an 84,000 m² plot with about 1,000 m² of built area. From the private pier, with boat and boatman available, the beach is reached in approximately six minutes.\n\nThe house accommodates up to eighteen guests in seven suites — eight bedrooms in total — with eight bathrooms. The master suite features a king bed, closet, veranda and two showers; the other suites offer king beds or two queen beds.\n\nPool, heated jacuzzi, sauna, sand court and a large gourmet area complete the leisure structure, with views of the river and the sea. The team includes cook, housekeeper, 24-hour caretaker, pool attendant and boatman.',
  },
  notes: { pt: ['Taxa de serviço de 10% sobre o valor da hospedagem.', 'Carnaval e Réveillon sob consulta.', 'Pet friendly mediante consulta.'], en: ['Service fee of 10% on the accommodation price.', 'Carnival and New Year’s Eve upon request.', 'Pet friendly upon request.'] },
};

const GOLF95: Property = {
  id: 'terravista-golf-casa-95', code: 'TBA-346', name: { pt: 'Terravista 95', en: 'Terravista 95' },
  purpose: ['aluguel'], location: 'Terravista Golf', suites: 8, guests: 16, baths: 9, area: '1.200 m² · terreno 1.900 m²',
  price: { pt: 'R$ 25.000 / diária', en: 'R$ 25,000 / night' },
  priceLow: { pt: 'R$ 18.000 / diária', en: 'R$ 18,000 / night' },
  seasonHigh: { pt: 'Dezembro a fevereiro, julho e feriados', en: 'December to February, July and holidays' },
  seasonLow: { pt: 'Março a novembro (exceto julho)', en: 'March to November (except July)' },
  carnaval: { pt: 'R$ 200.000 (pacote de 5 diárias)', en: 'R$ 200,000 (5-night package)' },
  reveillon: { pt: 'R$ 750.000 (pacote de 10 noites)', en: 'R$ 750,000 (10-night package)' },
  image: '/img/golf95/01.jpg',
  gallery: ['/img/golf95/01.webp','/img/golf95/02.webp','/img/golf95/03.webp','/img/golf95/04.webp','/img/golf95/05.webp','/img/golf95/06.webp','/img/golf95/07.webp','/img/golf95/08.webp','/img/golf95/09.webp','/img/golf95/10.webp','/img/golf95/11.webp','/img/golf95/12.webp','/img/golf95/13.webp','/img/golf95/14.webp','/img/golf95/15.webp','/img/golf95/16.webp','/img/golf95/17.webp','/img/golf95/18.webp','/img/golf95/19.webp','/img/golf95/20.webp','/img/golf95/21.webp','/img/golf95/22.webp','/img/golf95/23.webp','/img/golf95/24.webp','/img/golf95/25.webp','/img/golf95/26.webp','/img/golf95/27.webp','/img/golf95/28.webp','/img/golf95/29.webp','/img/golf95/30.webp','/img/golf95/31.webp','/img/golf95/32.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Sauna', 'Adega', 'Quadra de beach tennis', 'Carrinho de golfe', 'Gerador', 'Apoio de praia (cadeiras, ombrelones e cooler)', 'Elevador panorâmico', 'Kit bebê', 'Internet Wi-Fi', 'Ar-condicionado'],
    en: ['Private pool', 'Sauna', 'Wine cellar', 'Beach tennis court', 'Golf cart', 'Generator', 'Beach support (chairs, parasols and cooler)', 'Panoramic elevator', 'Baby kit', 'Wi-Fi internet', 'Air conditioning'],
  },
  staff: { pt: ['2 arrumadeiras', '1 cozinheira', '1 auxiliar de cozinha', '1 caseiro'], en: ['2 housekeepers', '1 cook', '1 kitchen assistant', '1 caretaker'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Terravista Golf, com vista para o campo de golfe, em Trancoso — Bahia.', en: 'In the Terravista Golf Condominium, overlooking the golf course, in Trancoso — Bahia.' },
  description: {
    pt: 'Assinada por Caio Bandeira e Luis Carlos Orsini, com decoração de Maisa Pimenta, a Casa 95 é uma das propriedades mais imponentes do Condomínio Terravista Golf, com 1.200 m² de área construída em um terreno de 1.900 m² de frente para o campo de golfe.\n\nSão oito suítes para até dezesseis hóspedes: duas no térreo com cama queen, closet, frigobar e TV; quatro no pavimento superior com duas camas de solteiro convertíveis e varanda com vista para o golfe; e duas em bangalô com cama de casal.\n\nA estrutura inclui piscina, sauna, adega, quadra de beach tennis, carrinho de golfe, elevador panorâmico e gerador, além de apoio de praia com cadeiras, ombrelones e cooler. A equipe conta com duas arrumadeiras, cozinheira, auxiliar de cozinha e caseiro.',
    en: 'Designed by Caio Bandeira and Luis Carlos Orsini, with decoration by Maisa Pimenta, Casa 95 is one of the most imposing properties in the Terravista Golf Condominium, with 1,200 m² of built area on a 1,900 m² plot facing the golf course.\n\nThere are eight suites for up to sixteen guests: two on the ground floor with queen bed, closet, minibar and TV; four on the upper floor with two convertible single beds and a veranda overlooking the golf course; and two in a bungalow with a double bed.\n\nThe structure includes pool, sauna, wine cellar, beach tennis court, golf cart, panoramic elevator and generator, plus beach support with chairs, parasols and cooler. The team includes two housekeepers, cook, kitchen assistant and caretaker.',
  },
  notes: { pt: ['Locação mínima de 3 noites.', 'Taxa de serviço de 5% sobre o valor da hospedagem.', 'Diária alta: dezembro a fevereiro, julho e feriados. Diária baixa: março a novembro (exceto julho).'], en: ['Minimum rental of 3 nights.', 'Service fee of 5% on the accommodation price.', 'High season: December to February, July and holidays. Low season: March to November (except July).'] },
};

const VILA13: Property = {
  id: 'terravista-vilas-casa-13', code: 'TBA-347', name: { pt: 'Terravista Vilas 13', en: 'Terravista Vilas 13' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 4, guests: 8, baths: 5, area: '300 m²',
  price: { pt: 'R$ 4.500 / diária', en: 'R$ 4,500 / night' },
  priceLow: { pt: 'R$ 3.800 / diária', en: 'R$ 3,800 / night' },
  carnaval: { pt: 'R$ 40.000 (pacote de 5 diárias) ou R$ 48.000 (7 diárias)', en: 'R$ 40,000 (5-night package) or R$ 48,000 (7 nights)' },
  reveillon: { pt: 'R$ 190.000 (pacote de 10 noites)', en: 'R$ 190,000 (10-night package)' },
  image: '/img/vila13/01.jpg',
  gallery: ['/img/vila13/01.webp','/img/vila13/02.webp','/img/vila13/03.webp','/img/vila13/04.webp','/img/vila13/05.webp','/img/vila13/06.webp','/img/vila13/07.webp','/img/vila13/08.webp','/img/vila13/09.webp','/img/vila13/10.webp','/img/vila13/11.webp','/img/vila13/12.webp','/img/vila13/13.webp','/img/vila13/14.webp','/img/vila13/15.webp','/img/vila13/16.webp','/img/vila13/17.webp','/img/vila13/18.webp','/img/vila13/19.webp','/img/vila13/20.webp','/img/vila13/21.webp','/img/vila13/22.webp','/img/vila13/23.webp','/img/vila13/24.webp','/img/vila13/25.webp','/img/vila13/26.webp','/img/vila13/27.webp','/img/vila13/28.webp','/img/vila13/29.webp','/img/vila13/30.webp','/img/vila13/31.webp','/img/vila13/32.webp','/img/vila13/33.webp'], featured: false,
  amenities: {
    pt: ['Piscina com prainha', 'Deck', 'Área gourmet', 'Churrasqueira', 'Cervejeira', 'Máquina de gelo', 'Lavadora e secadora', 'Apoio de praia nas Tartarugas', 'Academia e playground do condomínio', 'Piscina do condomínio', 'Segurança 24h'],
    en: ['Pool with shallow area', 'Deck', 'Gourmet area', 'Barbecue', 'Beer cooler', 'Ice maker', 'Washer and dryer', 'Beach support at Tartarugas', 'Condominium gym and playground', 'Condominium pool', '24h security'],
  },
  staff: { pt: ['Camareira'], en: ['Housekeeper'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Terravista Vilas, com acesso à estrutura do Terravista, em Trancoso — Bahia.', en: 'In the Terravista Vilas Condominium, with access to the Terravista structure, in Trancoso — Bahia.' },
  description: {
    pt: 'Localizada no Condomínio Terravista Vilas, a Casa 13 tem cerca de 300 m² e acomoda até oito hóspedes em quatro suítes, com cinco banheiros.\n\nA área externa reúne piscina com prainha, deck e área gourmet com churrasqueira, cervejeira e máquina de gelo — um convite permanente à convivência.\n\nOs hóspedes têm acesso à estrutura do Terravista, com apoio de praia nas Tartarugas, academia, playground, piscina do condomínio e segurança 24 horas. O serviço de camareira está incluído na locação.',
    en: 'Located in the Terravista Vilas Condominium, Casa 13 has about 300 m² and accommodates up to eight guests in four suites, with five bathrooms.\n\nThe outdoor area brings together a pool with a shallow area, deck and gourmet area with barbecue, beer cooler and ice maker — a permanent invitation to togetherness.\n\nGuests have access to the Terravista structure, with beach support at Tartarugas, gym, playground, condominium pool and 24-hour security. Housekeeper service is included in the rental.',
  },
  notes: { pt: ['Carnaval: R$ 40.000 (5 diárias) ou R$ 48.000 (7 diárias).'], en: ['Carnival: R$ 40,000 (5 nights) or R$ 48,000 (7 nights).'] },
};

const COQ06: Property = {
  id: 'coqueiral-casa-06', code: 'TBA-348', name: { pt: 'Casa Coqueiral 6', en: 'Casa Coqueiral 6' },
  purpose: ['aluguel'], location: 'Cond. Coqueiral', suites: 7, guests: 20, baths: 7, area: '—',
  price: { pt: 'R$ 4.500 / diária', en: 'R$ 4,500 / night' },
  priceLow: { pt: 'R$ 3.400 / diária', en: 'R$ 3,400 / night' },
  carnaval: { pt: 'R$ 50.000 (pacote)', en: 'R$ 50,000 (package)' },
  reveillon: { pt: 'R$ 170.000 (pacote)', en: 'R$ 170,000 (package)' },
  image: '/img/coq06/01.jpg',
  gallery: ['/img/coq06/01.webp','/img/coq06/02.webp','/img/coq06/03.webp','/img/coq06/04.webp','/img/coq06/05.webp','/img/coq06/06.webp','/img/coq06/07.webp','/img/coq06/08.webp','/img/coq06/09.webp','/img/coq06/10.webp','/img/coq06/11.webp','/img/coq06/12.webp','/img/coq06/13.webp','/img/coq06/14.webp','/img/coq06/15.webp','/img/coq06/16.webp','/img/coq06/17.webp','/img/coq06/18.webp','/img/coq06/19.webp','/img/coq06/20.webp','/img/coq06/21.webp','/img/coq06/22.webp','/img/coq06/23.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet com bar e churrasqueira', 'Área de jogos', 'Telão', 'Jardim amplo'],
    en: ['Private pool', 'Gourmet area with bar and barbecue', 'Games area', 'Big screen', 'Large garden'],
  },
  staff: { pt: ['Serviço de limpeza incluso (camareira adicional sob consulta)'], en: ['Cleaning service included (additional housekeeper upon request)'] },
  features: ['condominio', 'piscina'],
  locationDetail: { pt: 'No Condomínio Coqueiral, em Trancoso — Bahia.', en: 'In the Coqueiral Condominium, in Trancoso — Bahia.' },
  description: {
    pt: 'Situada no Condomínio Coqueiral, a Casa 06 acomoda até vinte hóspedes em sete suítes, sendo uma opção generosa para grupos grandes e famílias.\n\nA área de lazer é o coração da casa: piscina, área gourmet com bar e churrasqueira, espaço de jogos com telão e um jardim amplo criam o cenário ideal para dias de convivência.\n\nO serviço de limpeza está incluso na locação, com possibilidade de camareira adicional sob consulta.',
    en: 'Set in the Coqueiral Condominium, Casa 06 accommodates up to twenty guests in seven suites, a generous option for large groups and families.\n\nThe leisure area is the heart of the house: pool, gourmet area with bar and barbecue, games space with a big screen and a large garden create the ideal setting for days of togetherness.\n\nCleaning service is included in the rental, with the possibility of an additional housekeeper upon request.',
  },
  notes: { pt: ['Carnaval e Réveillon sob formato de pacote.'], en: ['Carnival and New Year’s Eve offered as packages.'] },
};

const ALTAR: Property = {
  id: 'casa-altar-altos-de-trancoso', code: 'TBA-349', name: { pt: 'Casa Altar', en: 'Casa Altar' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 3, guests: 7, baths: 4, area: '—',
  price: { pt: 'R$ 7.150 / diária', en: 'R$ 7,150 / night' },
  priceLow: { pt: 'R$ 5.600 / diária', en: 'R$ 5,600 / night' },
  carnaval: { pt: 'R$ 50.000 (pacote de 5 diárias)', en: 'R$ 50,000 (5-night package)' },
  reveillon: { pt: 'R$ 275.000 (pacote de 10 diárias)', en: 'R$ 275,000 (10-night package)' },
  seasonHigh: { pt: 'Dezembro, janeiro e feriados', en: 'December, January and holidays' },
  seasonLow: { pt: 'Março, abril, maio, junho, agosto, setembro, outubro e novembro', en: 'March, April, May, June, August, September, October and November' },
  image: '/img/altar/01.jpg',
  gallery: ['/img/altar/01.webp','/img/altar/02.webp','/img/altar/03.webp','/img/altar/04.webp','/img/altar/05.webp','/img/altar/06.webp','/img/altar/07.webp','/img/altar/08.webp','/img/altar/09.webp','/img/altar/10.webp','/img/altar/11.webp','/img/altar/12.webp','/img/altar/13.webp','/img/altar/14.webp','/img/altar/15.webp','/img/altar/16.webp','/img/altar/17.webp','/img/altar/18.webp','/img/altar/19.webp','/img/altar/20.webp','/img/altar/21.webp','/img/altar/22.webp','/img/altar/23.webp'], featured: false,
  amenities: {
    pt: ['3 suítes (2 com cama king size e 1 com três camas de solteiro)', 'Cozinha central integrada, coração da casa', 'Piscina ampla em meio à natureza', 'Ar-condicionado', 'Internet Wi-Fi', 'Cozinha completa', 'Churrasqueira', 'Cafeteira', 'Fogão a gás, forno, geladeira, freezer e micro-ondas', 'Máquina de lavar', 'Ferro de passar', 'Jogos de piscina', 'Roupas de cama', 'Enxoval de louça', 'Secador de cabelo', 'Água quente'],
    en: ['3 suites (2 with king-size bed and 1 with three single beds)', 'Integrated central kitchen, the heart of the house', 'Large pool surrounded by nature', 'Air conditioning', 'Wi-Fi', 'Full kitchen', 'Barbecue', 'Coffee maker', 'Gas stove, oven, refrigerator, freezer and microwave', 'Washing machine', 'Iron', 'Pool toys', 'Bed linen', 'Dishware', 'Hair dryer', 'Hot water'],
  },
  staff: {
    pt: ['1 cozinheira', '2 arrumadeiras'],
    en: ['1 cook', '2 housekeepers'],
  },
  description: {
    pt: 'Hospede-se na Casa Altar, um verdadeiro santuário de conforto, integração e bem-estar, onde arquitetura e convivência se encontram em perfeita harmonia. Inspirada na cruz de São Bento, a casa foi concebida como um refúgio acolhedor, ideal para momentos especiais.\n\nSão 3 suítes confortáveis — 2 com cama king size e 1 com três camas de solteiro, ideal para famílias ou grupos. O grande destaque da casa é sua cozinha central, projetada como o coração da residência, promovendo encontros, experiências gastronômicas e momentos inesquecíveis em um ambiente acolhedor e integrado.\n\nNa área externa, uma piscina ampla e convidativa completa o cenário de relaxamento, harmonia e conexão com a natureza. A Casa Altar oferece uma atmosfera única, onde design, espiritualidade e conforto se unem para criar uma estadia verdadeiramente especial.',
    en: 'Stay at Casa Altar, a true sanctuary of comfort, integration and well-being, where architecture and togetherness meet in perfect harmony. Inspired by the cross of Saint Benedict, the house was designed as a welcoming retreat, ideal for special moments.\n\nThere are 3 comfortable suites — 2 with a king-size bed and 1 with three single beds, ideal for families or groups. The highlight of the house is its central kitchen, designed as the heart of the residence, encouraging gatherings, gastronomic experiences and unforgettable moments in a warm, integrated environment.\n\nOutside, a large and inviting pool completes the setting of relaxation, harmony and connection with nature. Casa Altar offers a unique atmosphere, where design, spirituality and comfort come together to create a truly special stay.',
  },
  locationDetail: {
    pt: 'Altos de Trancoso, Trancoso – Bahia.',
    en: 'Altos de Trancoso, Trancoso – Bahia.',
  },
  features: ['piscina'],
};

const COQ04: Property = {
  id: 'casa-coqueiral-4', code: 'TBA-356', name: { pt: 'Casa Coqueiral 4', en: 'Casa Coqueiral 4' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 3, guests: 10, baths: 3, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coq04/01.jpg',
  gallery: ['/img/coq04/01.webp','/img/coq04/02.webp','/img/coq04/03.webp','/img/coq04/04.webp','/img/coq04/05.webp','/img/coq04/06.webp','/img/coq04/07.webp','/img/coq04/08.webp','/img/coq04/09.webp','/img/coq04/10.webp','/img/coq04/11.webp','/img/coq04/12.webp','/img/coq04/13.webp','/img/coq04/14.webp','/img/coq04/15.webp','/img/coq04/16.webp','/img/coq04/17.webp','/img/coq04/18.webp','/img/coq04/19.webp','/img/coq04/20.webp','/img/coq04/21.webp','/img/coq04/22.webp','/img/coq04/23.webp','/img/coq04/24.webp','/img/coq04/25.webp','/img/coq04/26.webp','/img/coq04/27.webp','/img/coq04/28.webp','/img/coq04/29.webp','/img/coq04/30.webp','/img/coq04/31.webp','/img/coq04/32.webp','/img/coq04/33.webp','/img/coq04/34.webp','/img/coq04/35.webp','/img/coq04/36.webp','/img/coq04/37.webp','/img/coq04/38.webp','/img/coq04/39.webp','/img/coq04/40.webp','/img/coq04/41.webp','/img/coq04/42.webp','/img/coq04/43.webp','/img/coq04/44.webp'],
  featured: false,
  amenities: {
    pt: ['3 suítes climatizadas', 'Piscina com prainha', 'Espaço gourmet completo', 'Churrasqueira', 'Cooktop, cervejeira e máquina de gelo', 'Adega e máquina Nespresso Vertuo', 'Cozinha completa e equipada', 'Ambientes integrados à natureza', 'Varanda com rede', 'Mini campinho com traves', 'Lava-pés na entrada', 'Garagem para 3 carros (2 vagas cobertas)', 'Portão eletrônico', 'Internet Wi-Fi', 'Roupa de cama, mesa e banho', 'Condomínio fechado com portaria 24 horas'],
    en: ['3 air-conditioned suites', 'Pool with shallow beach area', 'Full gourmet area', 'Barbecue', 'Cooktop, beer cooler and ice machine', 'Wine cellar and Nespresso Vertuo machine', 'Fully equipped kitchen', 'Spaces integrated with nature', 'Balcony with hammock', 'Mini soccer field', 'Foot wash at the entrance', 'Garage for 3 cars (2 covered spaces)', 'Electronic gate', 'Wi-Fi', 'Bed, table and bath linens', 'Gated community with 24-hour security'],
  },
  features: ['piscina', 'condominio'],
  locationDetail: {
    pt: 'Condomínio Coqueiral — Estrada Itabela, km 01, Centro, Trancoso — Bahia. Condomínio com portaria 24 horas.',
    en: 'Condomínio Coqueiral — Estrada Itabela, km 01, Centro, Trancoso — Bahia, Brazil. Gated community with 24-hour security.',
  },
  description: {
    pt: 'Localizada dentro do Condomínio Coqueiral, a Casa Coqueiral 4 é um refúgio acolhedor cercado por natureza, que combina conforto, sossego e uma atmosfera relaxante. A casa é decorada, conta com cozinha bem equipada, enxoval confortável e ambientes integrados ao jardim tropical. A suíte master, no piso superior, tem varanda privativa com rede, closet espaçoso e banheiro com duas pias e dois chuveiros; as demais suítes acomodam famílias e pequenos grupos com praticidade. Na área externa, a piscina com prainha é envolta pelo jardim, com espreguiçadeiras e rede, ao lado do espaço gourmet completo — churrasqueira, cooktop, cervejeira, máquina de gelo e TV. O mini campinho com traves, o lava-pés e o cantinho de relaxamento completam a experiência. Como serviço extra, é possível contratar cozinheira especializada em comida baiana.',
    en: 'Located inside the Coqueiral gated community, Casa Coqueiral 4 is a cozy retreat surrounded by nature, combining comfort, tranquility and a relaxing atmosphere. The house is tastefully decorated, with a well-equipped kitchen, comfortable linens and spaces integrated into the tropical garden. The master suite, on the upper floor, features a private balcony with hammock, a spacious closet and a bathroom with double sinks and double showers; the other suites comfortably accommodate families and small groups. Outside, the pool with a shallow beach area is embraced by the garden, with loungers and a hammock, next to the full gourmet area — barbecue, cooktop, beer cooler, ice machine and TV. A mini soccer field, a foot wash and a relaxation corner complete the experience. A cook specialized in Bahian cuisine can be hired as an extra service.',
  },
  notes: {
    pt: ['Suíte Master (piso superior): cama king, 1 cama de solteiro e berço, ar-condicionado, TV, varanda privativa com rede, closet espaçoso e banheiro com duas pias e dois chuveiros.', 'Suíte 2 (piso superior): cama queen com cortineiro, box de solteiro com cama auxiliar, ar-condicionado, TV, armário e banheiro privativo.', 'Suíte 3 (térreo): cama queen com cortineiro e 1 cama de solteiro, ar-condicionado, armário e banheiro privativo; acesso facilitado aos ambientes sociais.', 'Serviço de cozinha: possibilidade de contratação de cozinheira especializada em comida baiana (serviço extra).', 'Tarifas, disponibilidade e condições de locação sob consulta.'],
    en: ['Master Suite (upper floor): king bed, 1 single bed and crib, air conditioning, TV, private balcony with hammock, spacious closet and bathroom with double sinks and double showers.', 'Suite 2 (upper floor): queen bed with canopy, single box bed with trundle, air conditioning, TV, wardrobe and private bathroom.', 'Suite 3 (ground floor): queen bed with canopy and 1 single bed, air conditioning, wardrobe and private bathroom; easy access to the social areas.', 'Kitchen service: a cook specialized in Bahian cuisine can be hired (extra service).', 'Rates, availability and rental conditions upon request.'],
  },
};

const TEMPO04: Property = {
  id: 'casa-tempo-04', code: 'TBA-357', name: { pt: 'Casa Tempo 04', en: 'Casa Tempo 04' },
  purpose: ['aluguel'], location: 'Quadrado', suites: 2, guests: 4, baths: 1.5, area: '115 m²',
  price: { pt: 'R$ 1.800', en: 'R$ 1,800' },
  priceLow: { pt: 'R$ 1.500', en: 'R$ 1,500' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/tempo04/01.jpg',
  gallery: ['/img/tempo04/01.webp','/img/tempo04/02.webp','/img/tempo04/03.webp','/img/tempo04/04.webp','/img/tempo04/05.webp','/img/tempo04/06.webp','/img/tempo04/07.webp','/img/tempo04/08.webp','/img/tempo04/09.webp','/img/tempo04/10.webp','/img/tempo04/11.webp','/img/tempo04/12.webp','/img/tempo04/13.webp','/img/tempo04/14.webp','/img/tempo04/15.webp','/img/tempo04/16.webp','/img/tempo04/17.webp','/img/tempo04/18.webp','/img/tempo04/19.webp','/img/tempo04/20.webp','/img/tempo04/21.webp','/img/tempo04/22.webp','/img/tempo04/23.webp','/img/tempo04/24.webp'],
  featured: false,
  amenities: {
    pt: ['2 quartos climatizados', 'Varanda voltada para o verde', 'Sala de TV', 'Lavabo', 'Cozinha equipada', 'Área externa integrada por amplas portas de vidro', 'Piscina compartilhada do condomínio', 'Churrasqueira compartilhada', 'Ar-condicionado', 'Internet Wi-Fi', 'Gerador', 'Roupa de cama, mesa, banho e toalhas de piscina', 'Condomínio intimista com paisagismo preservado', 'A poucos passos do Quadrado'],
    en: ['2 air-conditioned bedrooms', 'Balcony facing the greenery', 'TV room', 'Guest bathroom', 'Equipped kitchen', 'Outdoor area integrated through wide glass doors', 'Shared community pool', 'Shared barbecue', 'Air conditioning', 'Wi-Fi', 'Generator', 'Bed, table, bath linens and pool towels', 'Intimate community with preserved landscaping', 'A few steps from the Quadrado'],
  },
  staff: {
    pt: ['Camareira das 8h às 13h'],
    en: ['Housekeeper from 8am to 1pm'],
  },
  features: ['piscina', 'condominio', 'quadrado'],
  locationDetail: {
    pt: 'Condomínio Tempo — entrada do Quadrado, Trancoso — Bahia. Condomínio intimista com poucas residências, paisagismo preservado e trilha de acesso à área de lazer comum.',
    en: 'Condomínio Tempo — at the entrance of the Quadrado, Trancoso — Bahia, Brazil. Intimate community with few residences, preserved landscaping and a trail leading to the common leisure area.',
  },
  description: {
    pt: 'Localizada em uma das regiões mais desejadas de Trancoso, na entrada do Quadrado, a Casa Tempo 04 combina arquitetura contemporânea, conforto e contato com a natureza em um condomínio intimista cercado por vegetação tropical. Com 115 m² distribuídos em dois pavimentos, a casa acomoda até 4 hóspedes em 2 quartos climatizados. No piso superior estão os dormitórios, acompanhados por uma agradável varanda voltada para o verde. No térreo, sala de TV, lavabo e cozinha equipada se integram à área externa através de amplas portas de vidro, proporcionando ambientes arejados e uma conexão natural com o jardim. A decoração mistura elementos de design contemporâneo ao estilo rústico baiano, criando uma atmosfera acolhedora e elegante. O Condomínio Tempo possui poucas residências e paisagismo preservado, com árvores nativas e jardins tropicais; uma pequena trilha entre a vegetação dá acesso à área de lazer comum, com piscina e churrasqueira. A localização é um dos grandes diferenciais: a poucos passos do Quadrado, dá para aproveitar restaurantes, lojas e a vida de Trancoso sem precisar de carro.',
    en: 'Located in one of the most desirable areas of Trancoso, at the entrance of the Quadrado, Casa Tempo 04 combines contemporary architecture, comfort and contact with nature in an intimate community surrounded by tropical vegetation. With 115 m² over two floors, the house accommodates up to 4 guests in 2 air-conditioned bedrooms. The bedrooms are on the upper floor, along with a pleasant balcony facing the greenery. On the ground floor, the TV room, guest bathroom and equipped kitchen connect to the outdoor area through wide glass doors, providing airy spaces and a natural connection with the garden. The decor blends contemporary design elements with the rustic Bahian style, creating a cozy and elegant atmosphere. Condomínio Tempo has few residences and preserved landscaping, with native trees and tropical gardens; a small trail through the vegetation leads to the common leisure area, with a pool and barbecue. The location is one of the property\'s highlights: a few steps from the Quadrado, allowing guests to enjoy restaurants, shops and Trancoso\'s life without needing a car.',
  },
  notes: {
    pt: ['Quarto 1 (piso superior): 1 cama de casal, ar-condicionado.', 'Quarto 2 (piso superior): 2 camas de solteiro, ar-condicionado.', '1 banheiro + lavabo.', 'Piscina e churrasqueira compartilhadas do condomínio, acessíveis por pequena trilha entre a vegetação.', 'Réveillon e Carnaval: sob consulta.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Bedroom 1 (upper floor): 1 double bed, air conditioning.', 'Bedroom 2 (upper floor): 2 single beds, air conditioning.', '1 bathroom + guest bathroom.', 'Shared community pool and barbecue, accessible via a small trail through the vegetation.', 'New Year\'s Eve and Carnival: upon request.', 'Rates and availability subject to confirmation.'],
  },
};

const JUE: Property = {
  id: 'casa-jue', code: 'TBA-358', name: { pt: 'Casa Juê', en: 'Casa Juê' },
  serviceFeeIncluded: true,
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 4, area: '—',
  price: { pt: 'R$ 5.000', en: 'R$ 5,000' },
  priceLow: { pt: 'R$ 4.000', en: 'R$ 4,000' },
  reveillon: { pt: 'R$ 170.000', en: 'R$ 170,000' },
  carnaval: { pt: 'R$ 40.000', en: 'R$ 40,000' },
  image: '/img/jue/01.jpg',
  gallery: ['/img/jue/01.webp','/img/jue/02.webp','/img/jue/03.webp','/img/jue/04.webp','/img/jue/05.webp','/img/jue/06.webp','/img/jue/07.webp','/img/jue/08.webp','/img/jue/09.webp','/img/jue/10.webp','/img/jue/11.webp','/img/jue/12.webp','/img/jue/13.webp','/img/jue/14.webp','/img/jue/15.webp','/img/jue/16.webp','/img/jue/17.webp','/img/jue/18.webp','/img/jue/19.webp','/img/jue/20.webp','/img/jue/21.webp','/img/jue/22.webp','/img/jue/23.webp','/img/jue/24.webp','/img/jue/25.webp','/img/jue/26.webp','/img/jue/27.webp','/img/jue/28.webp','/img/jue/29.webp','/img/jue/30.webp','/img/jue/31.webp','/img/jue/32.webp','/img/jue/33.webp','/img/jue/34.webp','/img/jue/35.webp','/img/jue/36.webp','/img/jue/37.webp','/img/jue/38.webp','/img/jue/39.webp','/img/jue/40.webp','/img/jue/41.webp','/img/jue/42.webp','/img/jue/43.webp','/img/jue/44.webp','/img/jue/45.webp','/img/jue/46.webp'],
  featured: false,
  amenities: {
    pt: ['4 suítes climatizadas', 'Piscina com espreguiçadeiras', 'Espaço gourmet com churrasqueira', 'Sala de estar', 'Sala de jantar', 'Sala de TV', 'Sala de massagem', '2 espaços para home office', 'Cozinha equipada', 'Freezer e cervejeira', 'Máquina de lavar-louças', 'Lavanderia', 'Internet Wi-Fi', 'Gerador', 'Poço artesiano', 'Condomínio fechado'],
    en: ['4 air-conditioned suites', 'Pool with loungers', 'Gourmet area with barbecue', 'Living room', 'Dining room', 'TV room', 'Massage room', '2 home office spaces', 'Equipped kitchen', 'Freezer and beer cooler', 'Dishwasher', 'Laundry room', 'Wi-Fi', 'Generator', 'Artesian well', 'Gated community'],
  },
  staff: {
    pt: ['Cozinheira', 'Camareira', 'Manutenção do jardim e da piscina'],
    en: ['Cook', 'Housekeeper', 'Garden and pool maintenance'],
  },
  features: ['piscina', 'condominio'],
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso — região residencial cercada de natureza, com acesso conveniente ao Quadrado e às praias de Trancoso.',
    en: 'Altos de Trancoso community — residential area surrounded by nature, with convenient access to the Quadrado and Trancoso beaches.',
  },
  description: {
    pt: 'Em meio ao verde do Altos de Trancoso, a Casa Juê reúne arquitetura contemporânea, privacidade e ambientes pensados para aproveitar o ritmo tranquilo do destino. O projeto, assinado por Julia Bittencourt, valoriza a luz natural e a conexão entre os espaços internos e o jardim, criando uma atmosfera acolhedora e elegante para dias de descanso em Trancoso. A residência acomoda até 8 hóspedes em 4 suítes distribuídas entre os dois pavimentos. As áreas sociais incluem salas de estar, jantar e TV, dois espaços independentes para home office e sala de massagem. Na área externa, piscina, espreguiçadeiras e espaço gourmet com churrasqueira completam a experiência. A cozinha é equipada para a hospedagem e a casa dispõe de Wi-Fi, gerador, lavanderia, máquina de lavar-louças, freezer e cervejeira.',
    en: 'Amid the greenery of Altos de Trancoso, Casa Juê brings together contemporary architecture, privacy and spaces designed to enjoy the destination\'s relaxed pace. The project, designed by Julia Bittencourt, values natural light and the connection between indoor spaces and the garden, creating a cozy and elegant atmosphere for days of rest in Trancoso. The residence accommodates up to 8 guests in 4 suites spread over two floors. Social areas include living, dining and TV rooms, two independent home office spaces and a massage room. Outside, a pool, loungers and a gourmet area with barbecue complete the experience. The kitchen is equipped for hosting and the house offers Wi-Fi, a generator, laundry room, dishwasher, freezer and beer cooler.',
  },
  notes: {
    pt: ['Suíte 01: cama queen, TV, ar-condicionado, mosquiteiro e secador.', 'Suíte 02: cama king, TV, ar-condicionado, mosquiteiro e secador.', 'Suíte 03: cama queen, TV, ar-condicionado, mosquiteiro e secador.', 'Suíte 04: cama king, TV, ar-condicionado, mosquiteiro e secador.', 'Taxa de serviço: inclusa.', 'Feriados: diária de alta temporada (R$ 5.000).', 'Réveillon: pacote de 10 dias. Carnaval: pacote de 5 dias.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Suite 01: queen bed, TV, air conditioning, mosquito net and hair dryer.', 'Suite 02: king bed, TV, air conditioning, mosquito net and hair dryer.', 'Suite 03: queen bed, TV, air conditioning, mosquito net and hair dryer.', 'Suite 04: king bed, TV, air conditioning, mosquito net and hair dryer.', 'Service fee: included.', 'Holidays: high season daily rate (R$ 5,000).', 'New Year\'s Eve: 10-day package. Carnival: 5-day package.', 'Rates and availability subject to confirmation.'],
  },
};

const VILAS34: Property = {
  id: 'terravista-vilas-34', code: 'TBA-359', name: { pt: 'Terravista Vilas 34', en: 'Terravista Vilas 34' },
  purpose: ['aluguel'], location: 'Terravista Vilas', suites: 2, guests: 4, baths: 2, area: '—',
  price: { pt: 'R$ 2.700 / diária', en: 'R$ 2,700 / night' },
  priceLow: { pt: 'R$ 2.300 / diária', en: 'R$ 2,300 / night' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/vilas34/01.jpg',
  gallery: ['/img/vilas34/01.webp','/img/vilas34/02.webp','/img/vilas34/03.webp','/img/vilas34/04.webp','/img/vilas34/05.webp','/img/vilas34/06.webp','/img/vilas34/07.webp','/img/vilas34/08.webp','/img/vilas34/09.webp','/img/vilas34/10.webp','/img/vilas34/11.webp','/img/vilas34/12.webp','/img/vilas34/13.webp'], featured: false,
  amenities: {
    pt: ['2 suítes climatizadas', 'Sala de estar e jantar', 'Cozinha equipada', 'Varanda com vista para a mata', 'Internet Wi-Fi', 'Roupa de cama e banho', 'Estacionamento', 'Condomínio fechado cercado pela Mata Atlântica', 'Próxima ao campo de golfe Terravista'],
    en: ['2 air-conditioned suites', 'Living and dining room', 'Equipped kitchen', 'Veranda overlooking the forest', 'Wi-Fi', 'Bed and bath linen', 'Parking', 'Gated community surrounded by the Atlantic Forest', 'Next to the Terravista golf course'],
  },
  notes: {
    pt: ['Suíte 1: 2 camas de solteiro, ar-condicionado e mosquiteiro.', 'Suíte 2: 1 cama de casal, ar-condicionado e mosquiteiro.', 'Estadia mínima: 4 noites.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Suite 1: 2 single beds, air conditioning and mosquito net.', 'Suite 2: 1 double bed, air conditioning and mosquito net.', 'Minimum stay: 4 nights.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Localizada no exclusivo Complexo Terravista, em Trancoso, a Terravista Vilas 34 é uma opção charmosa e confortável para casais, famílias pequenas ou grupos de até quatro hóspedes que desejam tranquilidade, segurança e contato com a natureza.\n\nA casa acomoda até 4 hóspedes em 2 suítes, oferecendo ambientes acolhedores, climatizados e integrados à vegetação tropical característica do Terravista.\n\nA área social conta com sala de estar e jantar, cozinha equipada e varanda, proporcionando um ambiente agradável para os momentos de descanso durante a estadia.\n\nOs hóspedes também desfrutam da estrutura do Terravista Vilas, inserido em uma das regiões mais valorizadas de Trancoso, cercada pela Mata Atlântica e próxima ao campo de golfe Terravista.',
    en: 'Located in the exclusive Terravista Complex in Trancoso, Terravista Vilas 34 is a charming and comfortable option for couples, small families or groups of up to four guests seeking tranquility, security and contact with nature.\n\nThe house accommodates up to 4 guests in 2 suites, offering cozy, air-conditioned spaces integrated with the tropical vegetation characteristic of Terravista.\n\nThe social area includes a living and dining room, an equipped kitchen and a veranda, providing a pleasant setting for relaxing moments during the stay.\n\nGuests also enjoy the Terravista Vilas amenities, set in one of the most valued regions of Trancoso, surrounded by the Atlantic Forest and next to the Terravista golf course.',
  },
  features: ['condominio'],
};

const NANA: Property = {
  id: 'casa-nana', code: 'TBA-360', name: { pt: 'Casa Nanã', en: 'Casa Nanã' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 6, guests: 12, baths: 6, area: 'Terreno aprox. 5.000 m²',
  price: { pt: 'R$ 9.900 / diária', en: 'R$ 9,900 / night' },
  priceLow: { pt: 'R$ 8.800 / diária', en: 'R$ 8,800 / night' },
  carnaval: { pt: 'R$ 67.760', en: 'R$ 67,760' },
  reveillon: { pt: 'R$ 400.000', en: 'R$ 400,000' },
  seasonHigh: { pt: 'Dez, Jan e feriados', en: 'Dec, Jan and holidays' },
  seasonLow: { pt: 'Mar, Abr, Mai, Jun, Ago, Set, Out e Nov', en: 'Mar, Apr, May, Jun, Aug, Sep, Oct and Nov' },
  image: '/img/nana/01.jpg',
  gallery: ['/img/nana/01.webp','/img/nana/02.webp','/img/nana/03.webp','/img/nana/04.webp','/img/nana/05.webp','/img/nana/06.webp','/img/nana/07.webp','/img/nana/08.webp','/img/nana/09.webp','/img/nana/10.webp','/img/nana/11.webp','/img/nana/12.webp','/img/nana/13.webp','/img/nana/14.webp','/img/nana/15.webp','/img/nana/16.webp','/img/nana/17.webp','/img/nana/18.webp','/img/nana/19.webp','/img/nana/20.webp','/img/nana/21.webp','/img/nana/22.webp','/img/nana/23.webp','/img/nana/24.webp','/img/nana/25.webp','/img/nana/26.webp','/img/nana/27.webp','/img/nana/28.webp','/img/nana/29.webp','/img/nana/30.webp','/img/nana/31.webp','/img/nana/32.webp','/img/nana/33.webp','/img/nana/34.webp','/img/nana/35.webp','/img/nana/36.webp','/img/nana/37.webp','/img/nana/38.webp','/img/nana/39.webp','/img/nana/40.webp','/img/nana/41.webp','/img/nana/42.webp','/img/nana/43.webp','/img/nana/44.webp','/img/nana/45.webp'], featured: false,
  amenities: {
    pt: ['Piscina', 'Sauna úmida', 'Área gourmet com churrasqueira', 'Bar com cozinha de apoio externa', 'Chuveirão', 'Sala de TV', 'Sala de brinquedos', 'Espaço de jogos', 'Cozinha equipada', 'Máquina de gelo', 'Ar-condicionado', 'Internet Wi-Fi', 'Gerador', 'Amplo jardim tropical', 'Bangalô independente', 'Segurança 24 horas no condomínio'],
    en: ['Swimming pool', 'Steam sauna', 'Gourmet area with barbecue', 'Bar with outdoor support kitchen', 'Outdoor shower', 'TV room', 'Playroom', 'Games area', 'Equipped kitchen', 'Ice maker', 'Air conditioning', 'Wi-Fi', 'Generator', 'Large tropical garden', 'Independent bungalow', '24-hour security in the condominium'],
  },
  staff: {
    pt: ['Equipe de apoio disponível durante a hospedagem — composição, horários e condições sob consulta'],
    en: ['Support team available during the stay — team composition, schedules and conditions upon request'],
  },
  notes: {
    pt: ['Suíte 01 (Master, piso superior): 1 cama king, TV e terraço privativo.', 'Suíte 02: 1 cama king.', 'Suíte 03: 2 camas de viúvo.', 'Suíte 04: 2 camas de viúvo.', 'Suíte 05 (bangalô independente): 1 cama king.', 'Suíte 06 (bangalô independente): 1 cama king.', 'Bangalô com terraço compartilhado, duchas internas e externas e pequenos jardins privativos.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Suite 01 (Master, upper floor): 1 king bed, TV and private terrace.', 'Suite 02: 1 king bed.', 'Suite 03: 2 wide single beds.', 'Suite 04: 2 wide single beds.', 'Suite 05 (independent bungalow): 1 king bed.', 'Suite 06 (independent bungalow): 1 king bed.', 'Bungalow with shared terrace, indoor and outdoor showers and small private gardens.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Em meio à vegetação tropical do exclusivo condomínio Altos de Trancoso, a Casa Nanã combina ambientes amplos, privacidade e uma atmosfera acolhedora que traduz o estilo de viver de Trancoso.\n\nImplantada em um terreno de aproximadamente 5.000 m², a propriedade é cercada por um amplo jardim e possui áreas sociais integradas ao exterior. A piscina se conecta à área de lazer, que conta com sauna úmida, chuveirão, churrasqueira e bar com cozinha de apoio externa.\n\nA residência acomoda até 12 hóspedes em 6 suítes, distribuídas entre a casa principal e um bangalô independente, uma configuração ideal para famílias e grupos que valorizam conforto e privacidade.',
    en: 'Surrounded by the tropical vegetation of the exclusive Altos de Trancoso condominium, Casa Nanã combines spacious rooms, privacy and a welcoming atmosphere that reflects the Trancoso lifestyle.\n\nSet on a plot of approximately 5,000 m², the property is surrounded by a large garden and has social areas integrated with the outdoors. The pool connects to the leisure area, which features a steam sauna, outdoor shower, barbecue and a bar with an outdoor support kitchen.\n\nThe residence accommodates up to 12 guests in 6 suites, distributed between the main house and an independent bungalow — an ideal configuration for families and groups who value comfort and privacy.',
  },
  features: ['piscina', 'condominio'],
};

const COQ09: Property = {
  id: 'coqueiral-09', code: 'TBA-361', name: { pt: 'Casa Coqueiral 9', en: 'Casa Coqueiral 9' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 16, baths: 6, area: '300 m²',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'R$ 2.500 / diária', en: 'R$ 2,500 / night' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coq09/01.jpg',
  gallery: ['/img/coq09/01.webp','/img/coq09/02.webp','/img/coq09/03.webp','/img/coq09/04.webp','/img/coq09/05.webp','/img/coq09/06.webp','/img/coq09/07.webp','/img/coq09/08.webp','/img/coq09/09.webp','/img/coq09/10.webp','/img/coq09/11.webp','/img/coq09/12.webp','/img/coq09/13.webp','/img/coq09/14.webp','/img/coq09/15.webp','/img/coq09/16.webp','/img/coq09/17.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa', 'Área gourmet', 'Churrasqueira', 'Varanda', 'Rede', 'Sala de TV', 'Cozinha completa', 'Ar-condicionado', 'Internet Wi-Fi', 'Jardim', 'Estacionamento para até 3 veículos', 'Condomínio com portaria e segurança 24 horas'],
    en: ['Private pool', 'Gourmet area', 'Barbecue', 'Veranda', 'Hammock', 'TV room', 'Full kitchen', 'Air conditioning', 'Wi-Fi', 'Garden', 'Parking for up to 3 vehicles', 'Condominium with gatehouse and 24-hour security'],
  },
  staff: {
    pt: ['Camareira', 'Piscineiro', 'Manutenção do jardim'],
    en: ['Housekeeper', 'Pool attendant', 'Garden maintenance'],
  },
  notes: {
    pt: ['Quarto 01: 1 cama queen.', 'Quarto 02: 1 cama queen.', 'Quarto 03: 1 cama de casal.', 'Quarto 04: 2 camas de casal.', 'Quarto 05: 1 cama de casal.', 'Horários e condições dos serviços sujeitos a confirmação.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Bedroom 01: 1 queen bed.', 'Bedroom 02: 1 queen bed.', 'Bedroom 03: 1 double bed.', 'Bedroom 04: 2 double beds.', 'Bedroom 05: 1 double bed.', 'Service schedules and conditions subject to confirmation.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, a Casa Coqueiral 9 é uma casa acolhedora, cercada pelo verde e pensada para receber famílias e grupos que buscam conforto, privacidade e praticidade durante a estadia em Trancoso.\n\nCom aproximadamente 300 m² de área construída, a propriedade possui ambientes amplos e integrados, com uma agradável área externa onde a piscina se torna o principal ponto de convivência da casa. O espaço gourmet com churrasqueira complementa a área de lazer e cria um ambiente perfeito para aproveitar os dias em Trancoso.\n\nA residência acomoda até 16 hóspedes em 5 quartos, oferecendo uma configuração versátil para famílias e grupos de amigos.',
    en: 'Located in the Coqueiral Condominium, Casa Coqueiral 9 is a welcoming house, surrounded by greenery and designed to host families and groups seeking comfort, privacy and convenience during their stay in Trancoso.\n\nWith approximately 300 m² of built area, the property features spacious, integrated rooms and a pleasant outdoor area where the pool becomes the main gathering point of the house. The gourmet space with barbecue completes the leisure area and creates the perfect setting to enjoy the days in Trancoso.\n\nThe residence accommodates up to 16 guests in 5 bedrooms, offering a versatile configuration for families and groups of friends.',
  },
  features: ['piscina', 'condominio'],
};

const IEMANJA: Property = {
  id: 'casa-iemanja', code: 'TBA-362', name: { pt: 'Casa Iemanjá', en: 'Casa Iemanjá' },
  purpose: ['aluguel'], location: 'Altos de Trancoso', suites: 4, guests: 8, baths: 4.5, area: '—',
  price: { pt: 'R$ 5.500 / diária', en: 'R$ 5,500 / night' },
  priceLow: { pt: 'R$ 4.400 / diária', en: 'R$ 4,400 / night' },
  carnaval: { pt: 'R$ 45.000', en: 'R$ 45,000' },
  reveillon: { pt: 'R$ 190.000', en: 'R$ 190,000' },
  image: '/img/iemanja/01.jpg',
  gallery: ['/img/iemanja/01.webp','/img/iemanja/02.webp','/img/iemanja/03.webp','/img/iemanja/04.webp','/img/iemanja/05.webp','/img/iemanja/06.webp','/img/iemanja/07.webp','/img/iemanja/08.webp','/img/iemanja/09.webp','/img/iemanja/10.webp','/img/iemanja/11.webp','/img/iemanja/12.webp','/img/iemanja/13.webp','/img/iemanja/14.webp','/img/iemanja/15.webp','/img/iemanja/16.webp','/img/iemanja/17.webp','/img/iemanja/18.webp','/img/iemanja/19.webp','/img/iemanja/20.webp','/img/iemanja/21.webp','/img/iemanja/22.webp','/img/iemanja/23.webp','/img/iemanja/24.webp','/img/iemanja/25.webp','/img/iemanja/26.webp','/img/iemanja/27.webp','/img/iemanja/28.webp','/img/iemanja/29.webp','/img/iemanja/30.webp','/img/iemanja/31.webp','/img/iemanja/32.webp'], featured: false,
  amenities: {
    pt: ['Piscina privativa com deck de madeira', 'Jardim tropical', 'Espaço gourmet', 'Churrasqueira', 'Cozinha equipada', 'Sala de estar', 'Sala de jantar', 'Ar-condicionado', 'Internet Wi-Fi', 'TV a cabo e Netflix', 'Lavabo', 'Lavanderia', 'Chuveirão', 'Gerador', 'Poço artesiano', 'Roupas de cama, mesa e banho', 'Toalhas de piscina e praia', 'Secador de cabelo'],
    en: ['Private pool with wooden deck', 'Tropical garden', 'Gourmet area', 'Barbecue', 'Equipped kitchen', 'Living room', 'Dining room', 'Air conditioning', 'Wi-Fi', 'Cable TV and Netflix', 'Guest toilet', 'Laundry', 'Outdoor shower', 'Generator', 'Artesian well', 'Bed, table and bath linen', 'Pool and beach towels', 'Hair dryer'],
  },
  staff: {
    pt: ['Cozinheira', 'Ajudante de cozinha', 'Camareira', 'Jardineiro/piscineiro'],
    en: ['Cook', 'Kitchen assistant', 'Housekeeper', 'Gardener/pool attendant'],
  },
  notes: {
    pt: ['Suíte 01: cama queen ou 2 camas de solteiro, ar-condicionado, secador de cabelo e varanda com vista para o jardim e a piscina.', 'Suíte 02: cama queen ou 2 camas de solteiro, ar-condicionado, secador de cabelo e varanda com vista para o jardim e a piscina.', 'Suíte 03: cama queen, ar-condicionado, secador de cabelo e vista para o jardim e a piscina.', 'Suíte 04: cama queen, ar-condicionado, secador de cabelo e vista para o jardim e a piscina.', 'Estadia mínima: 5 diárias.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['Suite 01: queen bed or 2 single beds, air conditioning, hair dryer and veranda overlooking the garden and pool.', 'Suite 02: queen bed or 2 single beds, air conditioning, hair dryer and veranda overlooking the garden and pool.', 'Suite 03: queen bed, air conditioning, hair dryer and garden and pool view.', 'Suite 04: queen bed, air conditioning, hair dryer and garden and pool view.', 'Minimum stay: 5 nights.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Em uma das localizações mais agradáveis de Trancoso, a Casa Iemanjá oferece uma estadia marcada por conforto, privacidade e contato com a natureza. Inserida no Condomínio Altos de Trancoso, a propriedade está próxima tanto do Quadrado quanto das praias dos Nativos e Coqueiros.\n\nA arquitetura valoriza materiais e referências locais, com espaços claros e integrados ao jardim tropical. Na área externa, a piscina cercada por deck de madeira cria o principal ambiente de convivência da casa, acompanhada por espaço gourmet e áreas pensadas para aproveitar os dias ao ar livre.\n\nCom quatro suítes climatizadas e capacidade para até 8 hóspedes, a residência funciona especialmente bem para famílias e pequenos grupos. Todas as acomodações possuem vista para o jardim e a piscina, e duas suítes permitem configuração flexível entre cama queen size ou duas camas de solteiro.\n\nA estrutura é complementada por cozinha equipada, salas de estar e jantar, lavanderia, gerador e uma equipe de apoio completa durante a hospedagem.',
    en: 'In one of the most pleasant locations in Trancoso, Casa Iemanjá offers a stay marked by comfort, privacy and contact with nature. Set in the Altos de Trancoso Condominium, the property is close to both the Quadrado and the beaches of Nativos and Coqueiros.\n\nThe architecture values local materials and references, with bright spaces integrated into the tropical garden. Outside, the pool surrounded by a wooden deck creates the main gathering area of the house, accompanied by a gourmet space and areas designed to enjoy the outdoor days.\n\nWith four air-conditioned suites and capacity for up to 8 guests, the residence works especially well for families and small groups. All accommodations overlook the garden and the pool, and two suites allow a flexible configuration between a queen-size bed or two single beds.\n\nThe structure is complemented by an equipped kitchen, living and dining rooms, laundry, generator and a full support team during the stay.',
  },
  locationDetail: {
    pt: 'Condomínio Altos de Trancoso — aproximadamente 10 minutos a pé do Quadrado e com fácil acesso às praias dos Nativos e Coqueiros.',
    en: 'Altos de Trancoso Condominium — approximately 10 minutes on foot from the Quadrado and with easy access to Nativos and Coqueiros beaches.',
  },
  features: ['piscina', 'condominio'],
};

const COQ27: Property = {
  id: 'coqueiral-27', code: 'TBA-363', name: { pt: 'Casa Coqueiral 27', en: 'Casa Coqueiral 27' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 12, baths: 5, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coq27/01.jpg',
  gallery: ['/img/coq27/01.webp','/img/coq27/02.webp','/img/coq27/03.webp','/img/coq27/04.webp','/img/coq27/05.webp','/img/coq27/06.webp','/img/coq27/07.webp','/img/coq27/08.webp','/img/coq27/09.webp','/img/coq27/10.webp','/img/coq27/11.webp','/img/coq27/12.webp','/img/coq27/13.webp','/img/coq27/14.webp','/img/coq27/15.webp','/img/coq27/16.webp','/img/coq27/17.webp','/img/coq27/18.webp','/img/coq27/19.webp','/img/coq27/20.webp','/img/coq27/21.webp','/img/coq27/22.webp','/img/coq27/23.webp','/img/coq27/24.webp','/img/coq27/25.webp','/img/coq27/26.webp','/img/coq27/27.webp','/img/coq27/28.webp','/img/coq27/29.webp','/img/coq27/30.webp','/img/coq27/31.webp','/img/coq27/32.webp','/img/coq27/33.webp','/img/coq27/34.webp','/img/coq27/35.webp','/img/coq27/36.webp','/img/coq27/37.webp','/img/coq27/38.webp','/img/coq27/39.webp','/img/coq27/40.webp','/img/coq27/41.webp','/img/coq27/42.webp','/img/coq27/43.webp','/img/coq27/44.webp','/img/coq27/45.webp'], featured: false,
  amenities: {
    pt: ['5 suítes climatizadas', '2 suítes com hidromassagem', 'Piscina', 'Jardim', 'Área gourmet completa', 'Churrasqueira', 'Sala de estar', 'Sala de TV', 'Sala de jantar', 'Cozinha equipada', 'Parquinho infantil', 'Canto de leitura', 'Garagem', 'Internet Wi-Fi'],
    en: ['5 air-conditioned suites', '2 suites with hot tub', 'Swimming pool', 'Garden', 'Full gourmet area', 'Barbecue', 'Living room', 'TV room', 'Dining room', 'Equipped kitchen', 'Children\'s playground', 'Reading corner', 'Garage', 'Wi-Fi'],
  },
  staff: {
    pt: ['1 arrumadeira', '1 jardineiro', '1 piscineiro'],
    en: ['1 housekeeper', '1 gardener', '1 pool attendant'],
  },
  notes: {
    pt: ['5 suítes climatizadas, sendo 2 com hidromassagem — 8 camas no total.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['5 air-conditioned suites, 2 of them with hot tub — 8 beds in total.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, em Trancoso, a Casa Coqueiral 27 combina o charme da arquitetura local com ambientes acolhedores e uma agradável área de lazer. Cercada por verde e com espaços pensados para aproveitar os dias com tranquilidade, é uma excelente opção para famílias e grupos de amigos.\n\nA casa dispõe de 5 suítes, todas climatizadas, sendo 2 suítes com hidromassagem, e acomoda confortavelmente até 12 hóspedes.\n\nOs ambientes sociais são amplos e bem distribuídos, com sala de estar, sala de TV e sala de jantar, além de cozinha totalmente equipada. Na área externa, o espaço gourmet com churrasqueira se integra ao jardim e à piscina, criando um ambiente perfeito para reunir os hóspedes ao longo do dia.\n\nA propriedade conta ainda com parquinho infantil, canto de leitura e garagem.',
    en: 'Located in the Coqueiral Condominium in Trancoso, Casa Coqueiral 27 combines the charm of local architecture with cozy rooms and a pleasant leisure area. Surrounded by greenery and with spaces designed to enjoy the days in tranquility, it is an excellent option for families and groups of friends.\n\nThe house has 5 suites, all air-conditioned, 2 of them with hot tub, and comfortably accommodates up to 12 guests.\n\nThe social areas are spacious and well distributed, with a living room, TV room and dining room, as well as a fully equipped kitchen. Outside, the gourmet area with barbecue integrates with the garden and the pool, creating a perfect setting to bring guests together throughout the day.\n\nThe property also features a children\'s playground, a reading corner and a garage.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral — aproximadamente 10 minutos do Quadrado e 15 minutos das praias.',
    en: 'Coqueiral Condominium — approximately 10 minutes from the Quadrado and 15 minutes from the beaches.',
  },
  features: ['piscina', 'condominio'],
};

const COQ10: Property = {
  id: 'coqueiral-10', code: 'TBA-364', name: { pt: 'Casa Coqueiral 10', en: 'Casa Coqueiral 10' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 6, guests: 18, baths: 6, area: '—',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coq10/01.jpg',
  gallery: ['/img/coq10/01.webp','/img/coq10/02.webp','/img/coq10/03.webp','/img/coq10/04.webp','/img/coq10/05.webp','/img/coq10/06.webp','/img/coq10/07.webp','/img/coq10/08.webp','/img/coq10/09.webp','/img/coq10/10.webp','/img/coq10/11.webp','/img/coq10/12.webp','/img/coq10/13.webp','/img/coq10/14.webp','/img/coq10/15.webp','/img/coq10/16.webp','/img/coq10/17.webp','/img/coq10/18.webp','/img/coq10/19.webp','/img/coq10/20.webp','/img/coq10/21.webp','/img/coq10/22.webp','/img/coq10/23.webp','/img/coq10/24.webp','/img/coq10/25.webp','/img/coq10/26.webp','/img/coq10/27.webp','/img/coq10/28.webp','/img/coq10/29.webp','/img/coq10/30.webp','/img/coq10/31.webp','/img/coq10/32.webp','/img/coq10/33.webp'], featured: false,
  amenities: {
    pt: ['6 suítes climatizadas', 'Piscina privativa', 'Jardim tropical', 'Área externa de convivência', 'Churrasqueira', 'Área para refeições ao ar livre', 'Sala de estar', 'Sala de jantar', 'Cozinha completa e equipada', 'Internet Wi-Fi', 'Ar-condicionado', 'TV', 'Máquina de lavar', 'Estacionamento', 'Condomínio fechado'],
    en: ['6 air-conditioned suites', 'Private pool', 'Tropical garden', 'Outdoor gathering area', 'Barbecue', 'Outdoor dining area', 'Living room', 'Dining room', 'Full equipped kitchen', 'Wi-Fi', 'Air conditioning', 'TV', 'Washing machine', 'Parking', 'Gated community'],
  },
  notes: {
    pt: ['6 suítes climatizadas com camas de casal e de solteiro, para acomodar famílias e grupos maiores com privacidade.', 'Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['6 air-conditioned suites with double and single beds, accommodating families and larger groups with privacy.', 'Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'Localizada no Condomínio Coqueiral, em meio à natureza de Trancoso, a Casa Coqueiral 10 é uma propriedade ampla e acolhedora, ideal para famílias e grupos que buscam conforto, privacidade e espaços generosos para aproveitar a estadia.\n\nA casa foi pensada para privilegiar a convivência, com ambientes sociais integrados e uma atmosfera leve e descontraída. Sala de estar, sala de jantar e cozinha equipada compõem a área interna, enquanto grandes aberturas aproximam os ambientes da vegetação tropical ao redor.\n\nNa área externa, a piscina privativa se integra ao jardim e aos espaços de descanso e lazer. A propriedade conta ainda com churrasqueira e área para refeições ao ar livre, criando um ambiente perfeito para aproveitar os dias e noites em Trancoso.',
    en: 'Located in the Coqueiral Condominium, surrounded by the nature of Trancoso, Casa Coqueiral 10 is a spacious and welcoming property, ideal for families and groups seeking comfort, privacy and generous spaces to enjoy their stay.\n\nThe house was designed to prioritize togetherness, with integrated social areas and a light, relaxed atmosphere. Living room, dining room and equipped kitchen make up the indoor area, while large openings bring the spaces closer to the surrounding tropical vegetation.\n\nOutside, the private pool integrates with the garden and the rest and leisure areas. The property also features a barbecue and an outdoor dining area, creating a perfect setting to enjoy the days and nights in Trancoso.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral — região residencial cercada pela vegetação característica de Trancoso, a poucos minutos do Quadrado Histórico e das praias da região.',
    en: 'Coqueiral Condominium — residential area surrounded by the characteristic vegetation of Trancoso, a few minutes from the Historic Quadrado and the region\'s beaches.',
  },
  features: ['piscina', 'condominio'],
};

// Villa W — Altos de Itapororoca (cadastrada em ago/2026)
const VILLAW: Property = {
  id: 'villa-w-altos-de-itapororoca', code: 'TBA-365', name: { pt: 'Villa W', en: 'Villa W' },
  purpose: ['aluguel'], location: 'Altos de Itapororoca', suites: 9, guests: 18, baths: 9, area: '—',
  price: { pt: 'R$ 21.000 / diária', en: 'R$ 21,000 / night' },
  priceLow: { pt: 'R$ 18.800 / diária', en: 'R$ 18,800 / night' },
  carnaval: { pt: 'R$ 120.750 / pacote 5 dias', en: 'R$ 120,750 / 5-day package' },
  reveillon: { pt: 'R$ 600.000 / pacote 10 dias', en: 'R$ 600,000 / 10-day package' },
  image: '/img/villaw/01.jpg',
  gallery: ['/img/villaw/01.webp','/img/villaw/02.webp','/img/villaw/03.webp','/img/villaw/04.webp','/img/villaw/05.webp','/img/villaw/06.webp','/img/villaw/07.webp','/img/villaw/08.webp','/img/villaw/09.webp','/img/villaw/10.webp','/img/villaw/11.webp','/img/villaw/12.webp','/img/villaw/13.webp','/img/villaw/14.webp','/img/villaw/15.webp','/img/villaw/16.webp','/img/villaw/17.webp','/img/villaw/18.webp','/img/villaw/19.webp','/img/villaw/20.webp','/img/villaw/21.webp','/img/villaw/22.webp','/img/villaw/23.webp','/img/villaw/24.webp','/img/villaw/25.webp','/img/villaw/26.webp','/img/villaw/27.webp','/img/villaw/28.webp','/img/villaw/29.webp','/img/villaw/30.webp','/img/villaw/31.webp','/img/villaw/32.webp','/img/villaw/33.webp','/img/villaw/34.webp','/img/villaw/35.webp','/img/villaw/36.webp','/img/villaw/37.webp','/img/villaw/38.webp','/img/villaw/39.webp','/img/villaw/40.webp'], featured: false,
  amenities: {
    pt: ['9 suítes', 'Vista panorâmica para o mar', 'Localização privilegiada no Altos de Itapororoca', 'Piscina de borda infinita com bar', 'Decks e lounges com vista para o mar', 'Espaço gourmet e cozinha completa', 'Sala de estar integrada à área externa', 'Academia ao ar livre', 'Bangalôs independentes', 'Amplos jardins cercados pela Mata Atlântica', 'Wi-Fi e ar-condicionado', 'Estacionamento privativo', 'Serviço de apoio de praia e acesso privativo à Praia de Itapororoca'],
    en: ['9 suites', 'Panoramic ocean view', 'Prime location in Altos de Itapororoca', 'Infinity pool with bar', 'Decks and lounges overlooking the sea', 'Gourmet area and full kitchen', 'Living room integrated with outdoor area', 'Outdoor gym', 'Independent bungalows', 'Wide gardens surrounded by the Atlantic Forest', 'Wi-Fi and air conditioning', 'Private parking', 'Beach support service and private access to Itapororoca Beach'],
  },
  description: {
    pt: 'Em uma das localizações mais exclusivas de Trancoso, a Villa W está cercada pela Mata Atlântica e ocupa uma posição privilegiada no alto de Itapororoca, com vista panorâmica para o mar e para as falésias.\n\nCom 9 suítes, a propriedade foi pensada para proporcionar privacidade, conforto e uma conexão permanente com a natureza. Sua arquitetura se distribui entre diferentes construções e bangalôs integrados ao jardim, criando ambientes reservados e uma atmosfera especial para famílias e grupos.\n\nA área social se abre para a paisagem e reúne sala de estar, cozinha completa e espaço gourmet integrado. No exterior, uma ampla piscina de borda infinita com vista para o mar, bar, lounges e decks panorâmicos formam um dos principais cenários da propriedade.\n\nUm dos grandes diferenciais da Villa W é o serviço de apoio de praia, com acesso privativo à Praia de Itapororoca, oferecendo conforto e praticidade para aproveitar os dias à beira-mar. A localização combina privacidade e tranquilidade com proximidade aos principais pontos de Trancoso.',
    en: 'In one of the most exclusive locations in Trancoso, Villa W is surrounded by the Atlantic Forest and occupies a privileged position atop Itapororoca, with panoramic views of the sea and the cliffs.\n\nWith 9 suites, the property was designed to provide privacy, comfort and a permanent connection with nature. Its architecture is spread across different buildings and bungalows integrated into the garden, creating private environments and a special atmosphere for families and groups.\n\nThe social area opens to the landscape and brings together the living room, full kitchen and integrated gourmet space. Outside, a large infinity pool overlooking the sea, bar, lounges and panoramic decks form one of the property\'s main settings.\n\nOne of Villa W\'s great differentials is the beach support service, with private access to Itapororoca Beach, offering comfort and convenience to enjoy days by the sea. The location combines privacy and tranquility with proximity to Trancoso\'s main attractions.',
  },
  notes: {
    pt: ['Configuração das suítes — Master 01: cama king size, varanda e banheiro privativo; Master 02: cama king size, banheiro privativo e integração com a área externa; Suítes 03 e 04: cama king size e banheiro privativo; Suítes 05, 06 e 09: cama queen size e banheiro privativo; Suítes 07 e 08: duas camas de solteiro e banheiro privativo.', 'Staff: 2 arrumadeiras, 1 cozinheira e 1 caseiro.', 'Alta temporada (dezembro, janeiro, fevereiro, julho e feriados): R$ 21.000 / diária. Baixa temporada: R$ 18.800 / diária.', 'Taxa de serviço: 10%. Valores sujeitos a alterações. Venda: sob consulta.'],
    en: ['Suite layout — Master 01: king-size bed, veranda and private bathroom; Master 02: king-size bed, private bathroom and integration with the outdoor area; Suites 03 and 04: king-size bed and private bathroom; Suites 05, 06 and 09: queen-size bed and private bathroom; Suites 07 and 08: two twin beds and private bathroom.', 'Staff: 2 housekeepers, 1 cook and 1 caretaker.', 'High season (December, January, February, July and holidays): R$ 21,000 / night. Low season: R$ 18,800 / night.', 'Service fee: 10%. Rates subject to change. Sale: upon request.'],
  },
  features: ['vista-mar', 'piscina', 'condominio'],
};


// Casa Coqueiral 11 — Condomínio Coqueiral (cadastrada em ago/2026)
const COQ11: Property = {
  id: 'casa-coqueiral-11', code: 'TBA-366', name: { pt: 'Casa Coqueiral 11', en: 'Casa Coqueiral 11' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 5, guests: 10, baths: 5, area: '—',
  price: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  priceLow: { pt: 'R$ 3.500 / diária', en: 'R$ 3,500 / night' },
  carnaval: { pt: 'R$ 40.000 / pacote', en: 'R$ 40,000 / package' },
  reveillon: { pt: 'R$ 150.000 / pacote 10 dias', en: 'R$ 150,000 / 10-day package' },
  image: '/img/coqueiral11/01.jpg',
  gallery: ['/img/coqueiral11/01.webp','/img/coqueiral11/02.webp','/img/coqueiral11/03.webp','/img/coqueiral11/04.webp','/img/coqueiral11/05.webp','/img/coqueiral11/06.webp','/img/coqueiral11/07.webp','/img/coqueiral11/08.webp','/img/coqueiral11/09.webp','/img/coqueiral11/10.webp','/img/coqueiral11/11.webp','/img/coqueiral11/12.webp','/img/coqueiral11/13.webp','/img/coqueiral11/14.webp','/img/coqueiral11/15.webp','/img/coqueiral11/16.webp','/img/coqueiral11/17.webp','/img/coqueiral11/18.webp','/img/coqueiral11/19.webp','/img/coqueiral11/20.webp','/img/coqueiral11/21.webp','/img/coqueiral11/22.webp','/img/coqueiral11/23.webp','/img/coqueiral11/24.webp','/img/coqueiral11/25.webp','/img/coqueiral11/26.webp'], featured: false,
  amenities: {
    pt: ['5 suítes climatizadas', 'Piscina revestida em pedras vulcânicas', 'Ampla área gourmet', 'Varandas com redes', 'Jardim e paisagismo tropical', 'Sala de estar', 'Cozinha equipada', 'Internet Wi-Fi', 'Ar-condicionado', 'Estacionamento', 'Condomínio fechado', 'Aceita animais de estimação'],
    en: ['5 air-conditioned suites', 'Pool with volcanic stone finish', 'Large gourmet area', 'Verandas with hammocks', 'Garden and tropical landscaping', 'Living room', 'Equipped kitchen', 'Wi-Fi', 'Air conditioning', 'Parking', 'Gated community', 'Pet friendly'],
  },
  notes: {
    pt: ['5 suítes climatizadas com diferentes configurações de camas, incluindo king, queen e camas de solteiro, com acesso a varandas.', 'Alta temporada e baixa temporada: R$ 3.500 / diária. Carnaval: R$ 40.000 / pacote. Réveillon: R$ 150.000 / pacote de 10 dias.', 'Taxa de serviço: 10%. Tarifas e disponibilidade sujeitas à confirmação.'],
    en: ['5 air-conditioned suites with different bed layouts, including king, queen and twin beds, with access to verandas.', 'High and low season: R$ 3,500 / night. Carnival: R$ 40,000 / package. New Year\'s: R$ 150,000 / 10-day package.', 'Service fee: 10%. Rates and availability subject to confirmation.'],
  },
  description: {
    pt: 'A Casa Coqueiral 11 é um refúgio charmoso e acolhedor, ideal para quem busca conforto, privacidade e dias tranquilos em meio à natureza. Localizada em condomínio fechado e a aproximadamente 2,5 km do Quadrado, a propriedade combina a atmosfera descontraída do destino com uma estrutura completa para receber famílias e grupos.\n\nA casa dispõe de 5 suítes climatizadas, acomodando confortavelmente até 10 hóspedes. As acomodações contam com diferentes configurações de camas, incluindo king, queen e camas de solteiro, além de acesso a varandas que tornam os ambientes ainda mais agradáveis.\n\nA área externa é um dos destaques da propriedade, com piscina revestida em pedras vulcânicas, integrada ao paisagismo e aos espaços de convivência. A casa também oferece ampla área gourmet, perfeita para reunir família e amigos durante as refeições e aproveitar os dias de descanso.\n\nEntre as comodidades estão ainda Wi-Fi, cozinha equipada, estacionamento, ambientes climatizados e varandas com redes. A propriedade também aceita animais de estimação.',
    en: 'Casa Coqueiral 11 is a charming and welcoming retreat, ideal for those seeking comfort, privacy and tranquil days surrounded by nature. Located in a gated community approximately 2.5 km from the Quadrado, the property combines the destination\'s relaxed atmosphere with a complete structure to host families and groups.\n\nThe house has 5 air-conditioned suites, comfortably accommodating up to 10 guests. The accommodations feature different bed layouts, including king, queen and twin beds, as well as access to verandas that make the spaces even more pleasant.\n\nThe outdoor area is one of the property\'s highlights, with a volcanic stone pool integrated into the landscaping and the gathering spaces. The house also offers a large gourmet area, perfect for bringing family and friends together during meals and enjoying days of rest.\n\nAmenities also include Wi-Fi, equipped kitchen, parking, air-conditioned rooms and verandas with hammocks. The property is also pet friendly.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral — condomínio fechado a aproximadamente 2,5 km do Quadrado Histórico de Trancoso.',
    en: 'Coqueiral Condominium — gated community approximately 2.5 km from Trancoso\'s Historic Quadrado.',
  },
  features: ['piscina', 'condominio'],
};


// Casa Coqueiral 12 — Condomínio Coqueiral (cadastrada em ago/2026)
const COQ12: Property = {
  id: 'casa-coqueiral-12', code: 'TBA-367', name: { pt: 'Casa Coqueiral 12', en: 'Casa Coqueiral 12' },
  purpose: ['aluguel'], location: 'Condomínio Coqueiral', suites: 4, guests: 12, baths: 6, area: '730 m² (terreno)',
  price: { pt: 'Sob consulta', en: 'Upon request' },
  priceLow: { pt: 'Sob consulta', en: 'Upon request' },
  carnaval: { pt: 'Sob consulta', en: 'Upon request' },
  reveillon: { pt: 'Sob consulta', en: 'Upon request' },
  image: '/img/coqueiral12/01.jpg',
  gallery: ['/img/coqueiral12/01.webp','/img/coqueiral12/02.webp','/img/coqueiral12/03.webp','/img/coqueiral12/04.webp','/img/coqueiral12/05.webp','/img/coqueiral12/06.webp','/img/coqueiral12/07.webp','/img/coqueiral12/08.webp','/img/coqueiral12/09.webp','/img/coqueiral12/10.webp','/img/coqueiral12/11.webp','/img/coqueiral12/12.webp','/img/coqueiral12/13.webp','/img/coqueiral12/14.webp','/img/coqueiral12/15.webp','/img/coqueiral12/16.webp','/img/coqueiral12/17.webp','/img/coqueiral12/18.webp','/img/coqueiral12/19.webp','/img/coqueiral12/20.webp','/img/coqueiral12/21.webp','/img/coqueiral12/22.webp','/img/coqueiral12/23.webp','/img/coqueiral12/24.webp','/img/coqueiral12/25.webp','/img/coqueiral12/26.webp','/img/coqueiral12/27.webp'], featured: false,
  amenities: {
    pt: ['4 suítes amplas + espaço adicional reversível em dormitório', 'Piscina privativa', 'Churrasqueira e forno de pizza', 'Salas e ambientes sociais integrados', 'Mata nativa e jardim', 'Terreno de 730 m²', 'Estacionamento para 4 veículos', 'Condomínio com portaria e rondas 24h', 'Aproximadamente 3,5 km do Quadrado', 'Acesso asfaltado'],
    en: ['4 spacious suites + additional space convertible into a bedroom', 'Private pool', 'Barbecue and pizza oven', 'Integrated living and social areas', 'Native forest and garden', '730 m² plot', 'Parking for 4 cars', 'Gated community with 24h security and patrols', 'Approximately 3.5 km from the Quadrado', 'Paved access'],
  },
  notes: {
    pt: ['Configuração das acomodações — Suíte 01: 1 cama king size e banheiro privativo; Suíte 02: 1 cama queen size e banheiro privativo; Suíte 03: 1 cama queen size e banheiro privativo; Suíte 04: 1 cama queen size e banheiro privativo; Espaço adicional: ambiente reversível em dormitório para hóspedes adicionais. Capacidade máxima: até 12 hóspedes.', 'Tarifas (baixa e alta temporada, feriados, Réveillon e Carnaval): sob consulta. Valores e condições sujeitos a confirmação de disponibilidade e período.'],
    en: ['Accommodation layout — Suite 01: 1 king-size bed and private bathroom; Suite 02: 1 queen-size bed and private bathroom; Suite 03: 1 queen-size bed and private bathroom; Suite 04: 1 queen-size bed and private bathroom; Additional space: room convertible into a bedroom for extra guests. Maximum capacity: up to 12 guests.', 'Rates (low and high season, holidays, New Year\'s and Carnival): upon request. Values and conditions subject to availability and period confirmation.'],
  },
  description: {
    pt: 'Cercada pela Mata Atlântica e pelo clima acolhedor de Trancoso, a Casa Coqueiral 12 combina arquitetura com identidade local, arte, conforto e uma atmosfera tranquila para temporadas em família ou entre amigos.\n\nImplantada em um terreno de 730 m², a propriedade possui 4 amplas suítes, além de um espaço adicional reversível em dormitório, permitindo acomodar até 12 hóspedes. Os ambientes sociais se conectam de forma natural às áreas externas e ao paisagismo, criando uma experiência leve e integrada ao verde.\n\nA área de lazer reúne piscina privativa, churrasqueira e forno de pizza, com espaços ideais para refeições e momentos de convivência. A propriedade conta ainda com salas amplas e estacionamento para até 4 veículos.\n\nO Condomínio Coqueiral oferece portaria e rondas de segurança 24 horas e está a aproximadamente 3,5 km do Quadrado de Trancoso, com acesso asfaltado.',
    en: 'Surrounded by the Atlantic Forest and the welcoming atmosphere of Trancoso, Casa Coqueiral 12 combines architecture with local identity, art, comfort and a tranquil atmosphere for family or friends getaways.\n\nSet on a 730 m² plot, the property has 4 spacious suites, plus an additional space convertible into a bedroom, accommodating up to 12 guests. The social areas connect naturally to the outdoor spaces and landscaping, creating a light experience integrated with the greenery.\n\nThe leisure area brings together a private pool, barbecue and pizza oven, with ideal spaces for meals and moments together. The property also features large living rooms and parking for up to 4 cars.\n\nThe Coqueiral Condominium offers a gatehouse and 24-hour security patrols and is approximately 3.5 km from Trancoso\'s Quadrado, with paved access.',
  },
  locationDetail: {
    pt: 'Condomínio Coqueiral — condomínio com portaria e rondas de segurança 24 horas, a aproximadamente 3,5 km do Quadrado de Trancoso, com acesso asfaltado.',
    en: 'Coqueiral Condominium — gated community with 24-hour security and patrols, approximately 3.5 km from Trancoso\'s Quadrado, with paved access.',
  },
  features: ['piscina', 'condominio'],
};

PROPERTIES.unshift(BUENAVISTA, FAZENDA29, VILAS39, TVB12, GOLF28, COQ12, COQ11, VILLAW, COQ10, COQ27, IEMANJA, COQ09, NANA, VILAS34, JUE, TEMPO04, COQ04, HELENA, ALTAR, DUE, AZUL, FER, COLINA3, COLINA2, COLINA, ECO01, ECO03, ECO04, VISTA, GOLF95, VILA13, COQUEIRAL01, OKUN, GOLF62, TVB10, MANGABA, GOLF21, GOLF19, GOLF33, GOLF37, GOLF27, TRAMA, TIZZI, LILI, COQUEIRAL02, JV15, JV14, JV13, PEROBA, COQ06, COQUEIRAL7, COQ08, V7, MARTINI, SANTARITA, PATIMIRIM, DAJU, BUENO, BONITA, AREIA, COQUEIRAL13, SUBLIME, ESTRELA, VISTANATIVOS, TERRAL, ITAPO01, ATENA, JACARANDA04, COQUEIRAL14, C20, CASAMARIA, ALMESCLA, CASAMAR, GEIGER, C21, MIA, COQUEIRAL22, MAION, DADINHO, IANDE, MAGIVI, OITI, C23, C24, NAOCA, CASA71, CAJU, SANMARCO, CASA14, CASA09, BOSSA, TUA, IMBIRUCU, CASA42, CASA61, VILAS02, CASA80, ITAPO07, CASA96, CASA90, VILAS75, LIMOEIRO, BIRIBA, VILAMAR, BETTONI, PINI, AUREA, SAOJORGE, CAZA, ITAPO06, ITAPO04, ALEGRIA, PONTA, PG11, PG111, PG104, MANDACARU, PONTARB, FALESIA, RAIZES, PONTABARRA, FASANO10, FASANO16, FASANO17, VILAS26, GOLF58, FLORESTA, VILAS41, VILAS67, BOUTIQUE13, ARACUA, JACARANDA03, TEIU, GOLF25, PG50, CASAEDO, BALEIA, PG55, GOLF72, PITANGA, AFRICA, TEMPO07, TEMPO08, TEMPO06, BOSQUE, PATIO, PG32, PG45, LICURI, DIVINA, TRESMENINAS, COQUEIRAL25, MORENA, MOA, BRAGA, CUMARU, JACARANDA05, TB14, MACONDO, RICK);

// Todas as casas em ordem alfabética (nome em português).
PROPERTIES.sort((a, b) => a.name.pt.localeCompare(b.name.pt, 'pt-BR', { numeric: true }));


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
