/**
 * Bloco "Por que esta casa" — 3 pilotos com curadoria aprovada + expansão automática.
 * REGRA: cada linha é uma característica objetiva e confirmada no cadastro
 * (features, amenities, staff, suites/guests, location de properties.ts).
 * Nada é inferido: se não estiver confirmado no cadastro, não aparece.
 * Prioridade: pé na areia → vista mar → Quadrado → condomínio → staff completo →
 * acesso direto à praia → apoio de praia → campo de golfe → beach tennis → quadra de
 * tênis → sauna → hidromassagem → academia → adega → piscina aquecida → gerador →
 * suítes·hóspedes (fallback) → piscina (último fallback). Máx. 3 linhas; mín. 2 —
 * imóveis com menos de 2 diferenciais confirmados não renderizam o bloco.
 * Dedup: 'Acesso direto à praia' é omitido quando já há 'Pé na areia';
 * 'Campo de golfe' é omitido quando o condomínio já é Terravista;
 * 'Piscina' é omitida quando já há 'Piscina aquecida'.
 */
export interface ImovelHighlights {
  pt: string[];
  en: string[];
  es: string[];
}

export const IMOVEL_HIGHLIGHTS: Record<string, ImovelHighlights> = {
  // Piloto 1 — pé na areia. Cadastro: features ['pe-na-areia','piscina','vista-mar'],
  // amenities "Casa totalmente pé na areia, de frente para o mar", 7 suítes / 14 hóspedes.
  'villa-martini-itapororoca': {
    pt: ['Pé na areia', 'Vista para o mar', '7 suítes · até 14 hóspedes'],
    en: ['Beachfront', 'Ocean view', '7 suites · up to 14 guests'],
    es: ['Pie en la arena', 'Vista al mar', '7 suites · hasta 14 huéspedes'],
  },
  // Piloto 2 — condomínio de alto padrão. Cadastro: location 'Altos de Trancoso',
  // features ['condominio','piscina'], amenity "Piscina privativa",
  // staff: cozinheira, auxiliar de cozinha, arrumadeiras, jardineiro/piscineiro.
  'casa-do-fer-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', 'Staff completo incluído', 'Piscina privativa'],
    en: ['Altos de Trancoso Condominium', 'Full staff included', 'Private pool'],
    es: ['Condominio Altos de Trancoso', 'Personal completo incluido', 'Piscina privada'],
  },
  // Piloto 3 — próximo ao Quadrado. Cadastro: location 'Quadrado',
  // locationDetail "Ao lado do Quadrado", 6 suítes / 13 hóspedes,
  // staff: 2 arrumadeiras, 1 cozinheira e 1 auxiliar de cozinha.
  'casa-do-bosque': {
    pt: ['Próximo ao Quadrado', 'Staff completo incluído', '6 suítes · até 13 hóspedes'],
    en: ['Next to the Quadrado', 'Full staff included', '6 suites · up to 13 guests'],
    es: ['Junto al Quadrado', 'Personal completo incluido', '6 suites · hasta 13 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | suites=4 guests=8 | piscina (features/amenities)
  'terravista-golf-28': {
    pt: ['Condomínio Terravista Golf', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Terravista Golf Condominium', '4 suites · up to 8 guests', 'Pool'],
    es: ['Condominio Terravista Golf', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Terravista Boutique' | amenity 'Apoio de praia na Praia das Tartarugas'
  'terravista-boutique-casa-12': {
    pt: ['Vista para o mar', 'Condomínio Terravista Boutique', 'Apoio de praia'],
    en: ['Ocean view', 'Terravista Boutique Condominium', 'Beach service'],
    es: ['Vista al mar', 'Condominio Terravista Boutique', 'Servicio de playa'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | suites=3 guests=7 | piscina (features/amenities)
  'terravista-vilas-39': {
    pt: ['Condomínio Terravista Vilas', '3 suítes · até 7 hóspedes', 'Piscina'],
    en: ['Terravista Vilas Condominium', '3 suites · up to 7 guests', 'Pool'],
    es: ['Condominio Terravista Vilas', '3 suites · hasta 7 huéspedes', 'Piscina'],
  },
  // Fonte: PDF Fazenda Rio da Barra 25 — condominio + apoio de praia | suites=5 guests=10 (correcao do cliente: 10, nao 14)
  'fazenda-rio-da-barra-25': {
    pt: ['Condomínio Rio da Barra', 'Apoio de praia', '5 suítes · até 10 hóspedes'],
    en: ['Rio da Barra Condominium', 'Beach service', '5 suites · up to 10 guests'],
    es: ['Condominio Rio da Barra', 'Servicio de playa', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Rio da Barra' | amenity 'Apoio de praia'
  'fazenda-rio-da-barra-29': {
    pt: ['Vista para o mar', 'Condomínio Rio da Barra', 'Apoio de praia'],
    en: ['Ocean view', 'Rio da Barra Condominium', 'Beach service'],
    es: ['Vista al mar', 'Condominio Rio da Barra', 'Servicio de playa'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | amenity 'Apoio de praia' | suites=4 guests=8
  'terravista-vilas-37': {
    pt: ['Condomínio Terravista Vilas', 'Apoio de praia', '4 suítes · até 8 hóspedes'],
    en: ['Terravista Vilas Condominium', 'Beach service', '4 suites · up to 8 guests'],
    es: ['Condominio Terravista Vilas', 'Servicio de playa', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Terravista Vilas' | suites=4 guests=8
  'terravista-vilas-27': {
    pt: ['Vista para o mar', 'Condomínio Terravista Vilas', '4 suítes · até 8 hóspedes'],
    en: ['Ocean view', 'Terravista Vilas Condominium', '4 suites · up to 8 guests'],
    es: ['Vista al mar', 'Condominio Terravista Vilas', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | amenity 'Apoio de praia na Praia das Tartarugas' | suites=4 guests=8
  'terravista-vilas-61': {
    pt: ['Condomínio Terravista Vilas', 'Apoio de praia', '4 suítes · até 8 hóspedes'],
    en: ['Terravista Vilas Condominium', 'Beach service', '4 suites · up to 8 guests'],
    es: ['Condominio Terravista Vilas', 'Servicio de playa', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | suites=4 guests=8 | piscina (features/amenities)
  'terravista-vilas-62': {
    pt: ['Condomínio Terravista Vilas', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Terravista Vilas Condominium', '4 suites · up to 8 guests', 'Pool'],
    es: ['Condominio Terravista Vilas', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: features/location Quadrado | amenity 'Gerador' | suites=2 guests=4
  'villa-do-quadrado': {
    pt: ['Próximo ao Quadrado', 'Gerador', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', 'Generator', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', 'Generador', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: suites=6 guests=14 | piscina (features/amenities)
  'casa-joao-vieira-5': {
    pt: ['6 suítes · até 14 hóspedes', 'Piscina'],
    en: ['6 suites · up to 14 guests', 'Pool'],
    es: ['6 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: features/location Quadrado | suites=4 guests=8
  'casa-do-padre': {
    pt: ['Próximo ao Quadrado', '4 suítes · até 8 hóspedes'],
    en: ['Next to the Quadrado', '4 suites · up to 8 guests'],
    es: ['Junto al Quadrado', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: PDF Vilas Fasano Casa J07 (mesma casa, versao oficial) | suites=5 guests=10
  'estancia-fasano-j2': {
    pt: ['Vilas Fasano', 'Vista para o mar', '5 suítes · até 10 hóspedes'],
    en: ['Vilas Fasano', 'Ocean view', '5 suites · up to 10 guests'],
    es: ['Vilas Fasano', 'Vista al mar', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: suites=5 guests=14 | piscina (features/amenities)
  'casa-coqueiral-15': {
    pt: ['5 suítes · até 14 hóspedes', 'Piscina'],
    en: ['5 suites · up to 14 guests', 'Pool'],
    es: ['5 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: features/location Quadrado | amenity 'Adega, cervejeira e máquina de gelo' | suites=4 guests=8
  'casa-flo-quadrado': {
    pt: ['Próximo ao Quadrado', 'Adega', '4 suítes · até 8 hóspedes'],
    en: ['Next to the Quadrado', 'Wine cellar', '4 suites · up to 8 guests'],
    es: ['Junto al Quadrado', 'Bodega', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features/location Quadrado | suites=3 guests=6
  'casa-cp-quadrado': {
    pt: ['Próximo ao Quadrado', '3 suítes · até 6 hóspedes'],
    en: ['Next to the Quadrado', '3 suites · up to 6 guests'],
    es: ['Junto al Quadrado', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: features/location Quadrado | amenity 'Gerador de energia' | suites=2 guests=4
  'casa-tempo-03-quadrado': {
    pt: ['Próximo ao Quadrado', 'Gerador', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', 'Generator', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', 'Generador', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: features/location Quadrado | suites=2 guests=4
  'casa-dona-olava-quadrado': {
    pt: ['Próximo ao Quadrado', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Condomínio Pedro Grande' | suites=4 guests=12
  'casa-buena-vista-pedro-grande': {
    pt: ['Vista para o mar', 'Condomínio Pedro Grande', '4 suítes · até 12 hóspedes'],
    en: ['Ocean view', 'Pedro Grande Condominium', '4 suites · up to 12 guests'],
    es: ['Vista al mar', 'Condominio Pedro Grande', '4 suites · hasta 12 huéspedes'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-naoca': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Academia equipada' | amenity 'Adega e cervejeira'
  'casa-71': {
    pt: ['Apoio de praia', 'Academia', 'Adega'],
    en: ['Beach service', 'Gym', 'Wine cellar'],
    es: ['Servicio de playa', 'Gimnasio', 'Bodega'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-caju': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Pé na areia com acesso direto à praia' | amenity 'Sauna' | amenity 'Piscina e hidromassagem'
  'casa-san-marco': {
    pt: ['Acesso direto à praia', 'Sauna', 'Hidromassagem'],
    en: ['Direct beach access', 'Sauna', 'Hot tub'],
    es: ['Acceso directo a la playa', 'Sauna', 'Hidromasaje'],
  },
  // Fonte: amenity 'Piscina com hidromassagem' | amenity 'Adega e cervejeira' | suites=6 guests=12
  'casa-14': {
    pt: ['Hidromassagem', 'Adega', '6 suítes · até 12 hóspedes'],
    en: ['Hot tub', 'Wine cellar', '6 suites · up to 12 guests'],
    es: ['Hidromasaje', 'Bodega', '6 suites · hasta 12 huéspedes'],
  },
  // Fonte: suites=7 guests=14 | piscina (features/amenities)
  'aldeia-itapororoca-09': {
    pt: ['7 suítes · até 14 hóspedes', 'Piscina'],
    en: ['7 suites · up to 14 guests', 'Pool'],
    es: ['7 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-bossa-nova-alto': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: suites=3 guests=8 | piscina (features/amenities)
  'casa-tua': {
    pt: ['3 suítes · até 8 hóspedes', 'Piscina'],
    en: ['3 suites · up to 8 guests', 'Pool'],
    es: ['3 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Pé na areia com acesso direto à praia' | amenity 'Sauna' | suites=5 guests=10
  'casa-imbirucu': {
    pt: ['Acesso direto à praia', 'Sauna', '5 suítes · até 10 hóspedes'],
    en: ['Direct beach access', 'Sauna', '5 suites · up to 10 guests'],
    es: ['Acceso directo a la playa', 'Sauna', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: amenity 'Sauna e chuveirão' | amenity 'Jacuzzi' | amenity 'Churrasqueira, cervejeira, adega e máquina de gelo'
  'terravista-golf-casa-42': {
    pt: ['Sauna', 'Hidromassagem', 'Adega'],
    en: ['Sauna', 'Hot tub', 'Wine cellar'],
    es: ['Sauna', 'Hidromasaje', 'Bodega'],
  },
  // Fonte: amenity 'Jacuzzi aquecida' | amenity 'Cervejeira, adega e máquina de gelo' | amenity 'Gerador, Wi-Fi e TV Sky'
  'terravista-golf-casa-61': {
    pt: ['Hidromassagem', 'Adega', 'Gerador'],
    en: ['Hot tub', 'Wine cellar', 'Generator'],
    es: ['Hidromasaje', 'Bodega', 'Generador'],
  },
  // Fonte: amenity 'Carrinho de golfe (locação)' | amenity 'Adega, cervejeira e máquina de gelo' | suites=3 guests=6
  'terravista-vilas-casa-02': {
    pt: ['Campo de golfe', 'Adega', '3 suítes · até 6 hóspedes'],
    en: ['Golf course', 'Wine cellar', '3 suites · up to 6 guests'],
    es: ['Campo de golf', 'Bodega', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'terravista-golf-casa-80': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia do condomínio em frente às piscinas naturais' | amenity 'Carrinho de golfe pick-up' | amenity 'Sauna seca'
  'aldeia-itapororoca-07': {
    pt: ['Apoio de praia', 'Campo de golfe', 'Sauna'],
    en: ['Beach service', 'Golf course', 'Sauna'],
    es: ['Servicio de playa', 'Campo de golf', 'Sauna'],
  },
  // Fonte: amenity 'Vista para o campo de golfe' | amenity 'Equipamentos de beach tennis, frescobol e pesca submarina' | amenity 'Piscina aquecida'
  'terravista-golf-casa-96': {
    pt: ['Campo de golfe', 'Beach tennis', 'Piscina aquecida'],
    en: ['Golf course', 'Beach tennis', 'Heated pool'],
    es: ['Campo de golf', 'Beach tennis', 'Piscina climatizada'],
  },
  // Fonte: amenity 'Apoio de praia com espreguiçadeiras e ombrelones' | amenity 'Carrinho de golfe pick-up' | amenity 'Quadra de tênis'
  'terravista-golf-casa-90': {
    pt: ['Apoio de praia', 'Campo de golfe', 'Quadra de tênis'],
    en: ['Beach service', 'Golf course', 'Tennis court'],
    es: ['Servicio de playa', 'Campo de golf', 'Cancha de tenis'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Vista para o mar e para o campo de golfe' | amenity 'Adega de vinhos e cervejeira'
  'terravista-vilas-75': {
    pt: ['Apoio de praia', 'Campo de golfe', 'Adega'],
    en: ['Beach service', 'Golf course', 'Wine cellar'],
    es: ['Servicio de playa', 'Campo de golf', 'Bodega'],
  },
  // Fonte: amenity 'Academia ao ar livre' | suites=8 guests=16 | piscina (features/amenities)
  'casa-limoeiro-altos-de-trancoso': {
    pt: ['Academia', '8 suítes · até 16 hóspedes', 'Piscina'],
    en: ['Gym', '8 suites · up to 16 guests', 'Pool'],
    es: ['Gimnasio', '8 suites · hasta 16 huéspedes', 'Piscina'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-biriba-altos-de-trancoso': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Sauna' | suites=10 guests=20 | piscina (features/amenities)
  'vila-mar-altos-de-trancoso': {
    pt: ['Sauna', '10 suítes · até 20 hóspedes', 'Piscina'],
    en: ['Sauna', '10 suites · up to 20 guests', 'Pool'],
    es: ['Sauna', '10 suites · hasta 20 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Sauna' | amenity 'Jacuzzi privativa' | suites=7 guests=14
  'casa-bettoni-altos-de-trancoso': {
    pt: ['Sauna', 'Hidromassagem', '7 suítes · até 14 hóspedes'],
    en: ['Sauna', 'Hot tub', '7 suites · up to 14 guests'],
    es: ['Sauna', 'Hidromasaje', '7 suites · hasta 14 huéspedes'],
  },
  // Fonte: suites=4 guests=8 | piscina (features/amenities)
  'casa-pini-altos-de-trancoso': {
    pt: ['4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['4 suites · up to 8 guests', 'Pool'],
    es: ['4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Academia climatizada' | suites=6 guests=12 | piscina (features/amenities)
  'vila-aurea-altos-de-trancoso': {
    pt: ['Academia', '6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Gym', '6 suites · up to 12 guests', 'Pool'],
    es: ['Gimnasio', '6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Hidromassagem' | suites=5 guests=10 | piscina (features/amenities)
  'casa-sao-jorge-altos-do-segredo': {
    pt: ['Hidromassagem', '5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Hot tub', '5 suites · up to 10 guests', 'Pool'],
    es: ['Hidromasaje', '5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: suites=5 guests=10 | piscina (features/amenities)
  'casa-caza-altos-de-trancoso': {
    pt: ['5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['5 suites · up to 10 guests', 'Pool'],
    es: ['5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Banheira de hidromassagem' | suites=4 guests=8 | piscina (features/amenities)
  'aldeia-itapororoca-06': {
    pt: ['Hidromassagem', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Hot tub', '4 suites · up to 8 guests', 'Pool'],
    es: ['Hidromasaje', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Suíte master com hidromassagem' | amenity 'Mini academia'
  'aldeia-itapororoca-04': {
    pt: ['Apoio de praia', 'Hidromassagem', 'Academia'],
    en: ['Beach service', 'Hot tub', 'Gym'],
    es: ['Servicio de playa', 'Hidromasaje', 'Gimnasio'],
  },
  // Fonte: suites=6 guests=14 | piscina (features/amenities)
  'casa-alegria-itapororoca': {
    pt: ['6 suítes · até 14 hóspedes', 'Piscina'],
    en: ['6 suites · up to 14 guests', 'Pool'],
    es: ['6 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: suites=7 guests=20 | piscina (features/amenities)
  'casa-da-ponta-altos-de-itapororoca': {
    pt: ['7 suítes · até 20 hóspedes', 'Piscina'],
    en: ['7 suites · up to 20 guests', 'Pool'],
    es: ['7 suites · hasta 20 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Adega climatizada' | amenity 'Gerador e poço artesiano'
  'casa-11-pedro-grande': {
    pt: ['Apoio de praia', 'Adega', 'Gerador'],
    en: ['Beach service', 'Wine cellar', 'Generator'],
    es: ['Servicio de playa', 'Bodega', 'Generador'],
  },
  // Fonte: amenity 'Gerador e poço artesiano' | suites=4 guests=8 | piscina (features/amenities)
  'casa-11-1-pedro-grande': {
    pt: ['Gerador', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Generator', '4 suites · up to 8 guests', 'Pool'],
    es: ['Generador', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Quadra de tênis' | suites=4 guests=8 | piscina (features/amenities)
  'casa-104-pedro-grande': {
    pt: ['Quadra de tênis', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Tennis court', '4 suites · up to 8 guests', 'Pool'],
    es: ['Cancha de tenis', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Piscina de 105 m² e jacuzzi' | amenity 'Academia e sala de massagem' | amenity 'Adega climatizada'
  'casa-mandacaru-altos-de-trancoso': {
    pt: ['Hidromassagem', 'Academia', 'Adega'],
    en: ['Hot tub', 'Gym', 'Wine cellar'],
    es: ['Hidromasaje', 'Gimnasio', 'Bodega'],
  },
  // Fonte: staff: 02 arrumadeiras; 01 cozinheira; 01 auxiliar de cozinha; 01 copeira; 01 serviços  | amenity 'Apoio de praia' | amenity 'Academia e sauna'
  'casa-da-ponta-rio-da-barra': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Sauna'],
    en: ['Full staff included', 'Beach service', 'Sauna'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Sauna'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-falesia-rio-da-barra': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia a 2 min' | amenity 'Academia, sauna e sala de massagem' | amenity 'Academia, sauna e sala de massagem'
  'casa-raizes-itapororoca': {
    pt: ['Apoio de praia', 'Sauna', 'Academia'],
    en: ['Beach service', 'Sauna', 'Gym'],
    es: ['Servicio de playa', 'Sauna', 'Gimnasio'],
  },
  // Fonte: staff: 02 arrumadeiras; 01 cozinheira; 01 caseiro; 01 jardineiro/piscineiro; 01 guarda- | amenity 'Adega de vinhos' | suites=6 guests=12
  'casa-ponta-da-barra': {
    pt: ['Staff completo incluído', 'Adega', '6 suítes · até 12 hóspedes'],
    en: ['Full staff included', 'Wine cellar', '6 suites · up to 12 guests'],
    es: ['Personal completo incluido', 'Bodega', '6 suites · hasta 12 huéspedes'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Carrinho de golfe' | amenity 'Beach tennis'
  'estancia-fasano-10': {
    pt: ['Apoio de praia', 'Campo de golfe', 'Beach tennis'],
    en: ['Beach service', 'Golf course', 'Beach tennis'],
    es: ['Servicio de playa', 'Campo de golf', 'Beach tennis'],
  },
  // Fonte: staff: Concierge; Camareira; Cozinheira; Jardineiro | amenity 'Piscina privativa aquecida' | amenity 'Energia solar e gerador'
  'estancia-fasano-16': {
    pt: ['Staff completo incluído', 'Piscina aquecida', 'Gerador'],
    en: ['Full staff included', 'Heated pool', 'Generator'],
    es: ['Personal completo incluido', 'Piscina climatizada', 'Generador'],
  },
  // Fonte: suites=4 guests=9 | piscina (features/amenities)
  'estancia-fasano-17': {
    pt: ['4 suítes · até 9 hóspedes', 'Piscina'],
    en: ['4 suites · up to 9 guests', 'Pool'],
    es: ['4 suites · hasta 9 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Vista para o mar e para o campo de golfe' | amenity 'Adega de vinhos' | amenity 'Gerador e cofres nos quartos'
  'casa-26-terravista-vilas': {
    pt: ['Campo de golfe', 'Adega', 'Gerador'],
    en: ['Golf course', 'Wine cellar', 'Generator'],
    es: ['Campo de golf', 'Bodega', 'Generador'],
  },
  // Fonte: staff: Concierge; Governanta; Cozinheira; Auxiliar de cozinha; Barman; 2 Camareiras; Aj | amenity 'Apoio de praia' | amenity 'Sauna'
  'terravista-golf-58': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Sauna'],
    en: ['Full staff included', 'Beach service', 'Sauna'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Sauna'],
  },
  // Fonte: staff: Concierge; Cozinheira; Ajudante de cozinha; Camareira; Piscineiro e jardineiro | amenity 'Acesso direto à praia com apoio de praia' | amenity 'Acesso direto à praia com apoio de praia'
  'casa-floresta-itapororoca': {
    pt: ['Staff completo incluído', 'Acesso direto à praia', 'Apoio de praia'],
    en: ['Full staff included', 'Direct beach access', 'Beach service'],
    es: ['Personal completo incluido', 'Acceso directo a la playa', 'Servicio de playa'],
  },
  // Fonte: staff: 1 cozinheira; 1 auxiliar de cozinha; 1 arrumadeira; 1 caseiro | suites=4 guests=8 | piscina (features/amenities)
  'casa-41-terravista-vilas': {
    pt: ['Staff completo incluído', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Full staff included', '4 suites · up to 8 guests', 'Pool'],
    es: ['Personal completo incluido', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia no Rio da Barra' | suites=5 guests=10 | piscina (features/amenities)
  'terravista-vilas-67': {
    pt: ['Apoio de praia', '5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Beach service', '5 suites · up to 10 guests', 'Pool'],
    es: ['Servicio de playa', '5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'terravista-boutique-casa-13': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: suites=5 guests=16 | piscina (features/amenities)
  'casa-aracua': {
    pt: ['5 suítes · até 16 hóspedes', 'Piscina'],
    en: ['5 suites · up to 16 guests', 'Pool'],
    es: ['5 suites · hasta 16 huéspedes', 'Piscina'],
  },
  // Fonte: suites=5 guests=15 | piscina (features/amenities)
  'casa-03-jacaranda': {
    pt: ['5 suítes · até 15 hóspedes', 'Piscina'],
    en: ['5 suites · up to 15 guests', 'Pool'],
    es: ['5 suites · hasta 15 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Academia privativa' | suites=5 guests=10 | piscina (features/amenities)
  'casa-teiu': {
    pt: ['Academia', '5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Gym', '5 suites · up to 10 guests', 'Pool'],
    es: ['Gimnasio', '5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Vista para a lagoa, o bosque e o campo de golfe' | suites=5 guests=10
  'terravista-golf-25': {
    pt: ['Apoio de praia', 'Campo de golfe', '5 suítes · até 10 hóspedes'],
    en: ['Beach service', 'Golf course', '5 suites · up to 10 guests'],
    es: ['Servicio de playa', 'Campo de golf', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: suites=5 guests=14 | piscina (features/amenities)
  'casa-50-pedro-grande': {
    pt: ['5 suítes · até 14 hóspedes', 'Piscina'],
    en: ['5 suites · up to 14 guests', 'Pool'],
    es: ['5 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 2 arrumadeiras; 1 cozinheira; 1 auxiliar de cozinha; 1 barman; 1 caseiro | amenity 'Apoio de praia' | amenity 'Gerador e poço artesiano'
  'casa-do-edo': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Gerador'],
    en: ['Full staff included', 'Beach service', 'Generator'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Generador'],
  },
  // Fonte: staff: Concierge para suporte durante a hospedagem; 2 arrumadeiras; 1 cozinheira; 1 aux | suites=7 guests=14 | piscina (features/amenities)
  'casa-baleia': {
    pt: ['Staff completo incluído', '7 suítes · até 14 hóspedes', 'Piscina'],
    en: ['Full staff included', '7 suites · up to 14 guests', 'Pool'],
    es: ['Personal completo incluido', '7 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 2 arrumadeiras; 1 cozinheira; 1 auxiliar de cozinha; 1 caseiro | amenity 'Apoio de praia' | amenity 'Academia'
  'casa-55-pedro-grande': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Academia'],
    en: ['Full staff included', 'Beach service', 'Gym'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Gimnasio'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Sauna' | amenity 'Academia e sala de ginástica'
  'terravista-golf-72': {
    pt: ['Apoio de praia', 'Sauna', 'Academia'],
    en: ['Beach service', 'Sauna', 'Gym'],
    es: ['Servicio de playa', 'Sauna', 'Gimnasio'],
  },
  // Fonte: staff: Concierge; Cozinheira; Camareira; Piscineiro e jardineiro | suites=3 guests=6 | piscina (features/amenities)
  'casa-pitanga': {
    pt: ['Staff completo incluído', '3 suítes · até 6 hóspedes', 'Piscina'],
    en: ['Full staff included', '3 suites · up to 6 guests', 'Pool'],
    es: ['Personal completo incluido', '3 suites · hasta 6 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Gerador automático' | suites=4 guests=8 | piscina (features/amenities)
  'casa-africa': {
    pt: ['Gerador', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Generator', '4 suites · up to 8 guests', 'Pool'],
    es: ['Generador', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: features/location Quadrado | amenity 'Gerador de energia' | suites=2 guests=4
  'casa-tempo-07': {
    pt: ['Próximo ao Quadrado', 'Gerador', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', 'Generator', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', 'Generador', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: features/location Quadrado | amenity 'Adega de vinhos' | amenity 'Gerador'
  'casa-tempo-08': {
    pt: ['Próximo ao Quadrado', 'Adega', 'Gerador'],
    en: ['Next to the Quadrado', 'Wine cellar', 'Generator'],
    es: ['Junto al Quadrado', 'Bodega', 'Generador'],
  },
  // Fonte: features/location Quadrado | amenity 'Gerador' | suites=2 guests=4
  'casa-tempo-06': {
    pt: ['Próximo ao Quadrado', 'Gerador', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', 'Generator', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', 'Generador', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: features/location Quadrado | suites=2 guests=4
  'casa-do-patio': {
    pt: ['Próximo ao Quadrado', '2 suítes · até 4 hóspedes'],
    en: ['Next to the Quadrado', '2 suites · up to 4 guests'],
    es: ['Junto al Quadrado', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: staff: Concierge; 1 cozinheira; 2 arrumadeiras; 2 auxiliares de cozinha; 1 copeiro/barm | amenity 'Apoio de praia' | amenity 'Quadra de beach tennis'
  'casa-32-pedro-grande': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Beach tennis'],
    en: ['Full staff included', 'Beach service', 'Beach tennis'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Beach tennis'],
  },
  // Fonte: staff: Cozinheira; Auxiliar de cozinha; Arrumadeira; Piscineiro e jardineiro | amenity 'Apoio de praia' | amenity 'Quadra de tênis'
  'casa-45-pedro-grande': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Quadra de tênis'],
    en: ['Full staff included', 'Beach service', 'Tennis court'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Cancha de tenis'],
  },
  // Fonte: suites=5 guests=11 | piscina (features/amenities)
  'vila-licuri': {
    pt: ['5 suítes · até 11 hóspedes', 'Piscina'],
    en: ['5 suites · up to 11 guests', 'Pool'],
    es: ['5 suites · hasta 11 huéspedes', 'Piscina'],
  },
  // Fonte: features/location Quadrado | suites=3 guests=6
  'casa-divina': {
    pt: ['Próximo ao Quadrado', '3 suítes · até 6 hóspedes'],
    en: ['Next to the Quadrado', '3 suites · up to 6 guests'],
    es: ['Junto al Quadrado', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: suites=4 guests=10 | piscina (features/amenities)
  'casa-3-meninas': {
    pt: ['4 suítes · até 10 hóspedes', 'Piscina'],
    en: ['4 suites · up to 10 guests', 'Pool'],
    es: ['4 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Hidromassagem panorâmica com vista para a mata' | suites=5 guests=14 | piscina (features/amenities)
  'casa-peroba': {
    pt: ['Hidromassagem', '5 suítes · até 14 hóspedes', 'Piscina'],
    en: ['Hot tub', '5 suites · up to 14 guests', 'Pool'],
    es: ['Hidromasaje', '5 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 2 arrumadeiras; 2 cozinheiras; 1 auxiliar de cozinha; 1 barman; 1 caseiro/copeir | amenity 'Apoio de praia do condomínio' | amenity 'Carrinho de golfe'
  'casa-morena': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Campo de golfe'],
    en: ['Full staff included', 'Beach service', 'Golf course'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Campo de golf'],
  },
  // Fonte: suites=4 guests=10 | piscina (features/amenities)
  'casa-moa': {
    pt: ['4 suítes · até 10 hóspedes', 'Piscina'],
    en: ['4 suites · up to 10 guests', 'Pool'],
    es: ['4 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: suites=4 guests=12 | piscina (features/amenities)
  'casa-coqueiral-26': {
    pt: ['4 suítes · até 12 hóspedes', 'Piscina'],
    en: ['4 suites · up to 12 guests', 'Pool'],
    es: ['4 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: suites=6 guests=12 | piscina (features/amenities)
  'casa-cumaru': {
    pt: ['6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['6 suites · up to 12 guests', 'Pool'],
    es: ['6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Piscina privativa com jacuzzi integrada' | suites=7 guests=20 | piscina (features/amenities)
  'casa-05-jacaranda': {
    pt: ['Hidromassagem', '7 suítes · até 20 hóspedes', 'Piscina'],
    en: ['Hot tub', '7 suites · up to 20 guests', 'Pool'],
    es: ['Hidromasaje', '7 suites · hasta 20 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Camareira; Cozinheira; Piscineiro / Jardineiro | amenity 'Quadra de beach tennis' | amenity 'Sauna'
  'casa-14-terravista-boutique': {
    pt: ['Staff completo incluído', 'Beach tennis', 'Sauna'],
    en: ['Full staff included', 'Beach tennis', 'Sauna'],
    es: ['Personal completo incluido', 'Beach tennis', 'Sauna'],
  },
  // Fonte: staff: 2 arrumadeiras; 1 cozinheira; 1 auxiliar de cozinha; 1 caseiro; 1 funcionário de | amenity 'Apoio de praia com área de estar' | amenity 'Quadra de beach tennis'
  'casa-macondo': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Beach tennis'],
    en: ['Full staff included', 'Beach service', 'Beach tennis'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Beach tennis'],
  },
  // Fonte: staff: Concierge; Cozinheira; Camareira / Arrumadeira; Segurança 24h | amenity 'Gerador de energia' | suites=5 guests=10
  'casa-rick': {
    pt: ['Staff completo incluído', 'Gerador', '5 suítes · até 10 hóspedes'],
    en: ['Full staff included', 'Generator', '5 suites · up to 10 guests'],
    es: ['Personal completo incluido', 'Generador', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: staff: 1 cozinheira; 1 ajudante; 1 arrumadeira; 1 jardineiro / piscineiro | suites=5 guests=10 | piscina (features/amenities)
  'villa-iande': {
    pt: ['Staff completo incluído', '5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Full staff included', '5 suites · up to 10 guests', 'Pool'],
    es: ['Personal completo incluido', '5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 1 cozinheira; 1 auxiliar de cozinha; 2 camareiras; 1 piscineiro / jardineiro | amenity 'Sauna' | amenity 'Academia completa'
  'vila-magivi': {
    pt: ['Staff completo incluído', 'Sauna', 'Academia'],
    en: ['Full staff included', 'Sauna', 'Gym'],
    es: ['Personal completo incluido', 'Sauna', 'Gimnasio'],
  },
  // Fonte: amenity 'Hidromassagem' | amenity 'Adega' | suites=5 guests=11
  'casa-oiti': {
    pt: ['Hidromassagem', 'Adega', '5 suítes · até 11 hóspedes'],
    en: ['Hot tub', 'Wine cellar', '5 suites · up to 11 guests'],
    es: ['Hidromasaje', 'Bodega', '5 suites · hasta 11 huéspedes'],
  },
  // Fonte: amenity 'Suítes com hidromassagem' | suites=6 guests=18 | piscina (features/amenities)
  'casa-coqueiral-13': {
    pt: ['Hidromassagem', '6 suítes · até 18 hóspedes', 'Piscina'],
    en: ['Hot tub', '6 suites · up to 18 guests', 'Pool'],
    es: ['Hidromasaje', '6 suites · hasta 18 huéspedes', 'Piscina'],
  },
  // Fonte: suites=6 guests=18 | piscina (features/amenities)
  'casa-coqueiral-7': {
    pt: ['6 suítes · até 18 hóspedes', 'Piscina'],
    en: ['6 suites · up to 18 guests', 'Pool'],
    es: ['6 suites · hasta 18 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Arrumadeira (sob consulta); Cozinheira (sob consulta); Jardineiro (sob consulta) | suites=4 guests=8 | piscina (features/amenities)
  'casa-maion-altos-de-trancoso': {
    pt: ['Staff completo incluído', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Full staff included', '4 suites · up to 8 guests', 'Pool'],
    es: ['Personal completo incluido', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Arrumadeira; Copeira; Piscineiro; Concierge sob consulta | amenity 'Banheiras de hidromassagem' | suites=5 guests=16
  'casa-coqueiral-25': {
    pt: ['Staff completo incluído', 'Hidromassagem', '5 suítes · até 16 hóspedes'],
    en: ['Full staff included', 'Hot tub', '5 suites · up to 16 guests'],
    es: ['Personal completo incluido', 'Hidromasaje', '5 suites · hasta 16 huéspedes'],
  },
  // Fonte: amenity 'Jacuzzi / hidromassagem' | amenity 'Academia completa' | amenity 'Piscina aquecida com borda infinita'
  'casa-coqueiral-01': {
    pt: ['Hidromassagem', 'Academia', 'Piscina aquecida'],
    en: ['Hot tub', 'Gym', 'Heated pool'],
    es: ['Hidromasaje', 'Gimnasio', 'Piscina climatizada'],
  },
  // Fonte: amenity 'Adega de vinhos' | suites=4 guests=8 | piscina (features/amenities)
  'casa-casamar-altos-de-trancoso': {
    pt: ['Adega', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Wine cellar', '4 suites · up to 8 guests', 'Pool'],
    es: ['Bodega', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: suites=4 guests=8 | piscina (features/amenities)
  'casa-almescla-altos-de-trancoso': {
    pt: ['4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['4 suites · up to 8 guests', 'Pool'],
    es: ['4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 1 arrumadeira; 1 cozinheira; 1 jardineiro/piscineiro | amenity 'Apoio de praia' | suites=3 guests=6
  'casa-maria-rio-verde': {
    pt: ['Staff completo incluído', 'Apoio de praia', '3 suítes · até 6 hóspedes'],
    en: ['Full staff included', 'Beach service', '3 suites · up to 6 guests'],
    es: ['Personal completo incluido', 'Servicio de playa', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: staff: Camareira; Jardineiro; Serviços adicionais (cozinheira, chef, garçom, motorista, | suites=7 guests=14 | piscina (features/amenities)
  'casa-coqueiral-02': {
    pt: ['Staff completo incluído', '7 suítes · até 14 hóspedes', 'Piscina'],
    en: ['Full staff included', '7 suites · up to 14 guests', 'Pool'],
    es: ['Personal completo incluido', '7 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 1 cozinheira; 2 camareiras; Jardineiro/piscineiro; Serviço diário incluso | amenity 'Hidromassagem para até 12 pessoas' | suites=7 guests=21
  'casa-04-jacaranda': {
    pt: ['Staff completo incluído', 'Hidromassagem', '7 suítes · até 21 hóspedes'],
    en: ['Full staff included', 'Hot tub', '7 suites · up to 21 guests'],
    es: ['Personal completo incluido', 'Hidromasaje', '7 suites · hasta 21 huéspedes'],
  },
  // Fonte: suites=6 guests=18 | piscina (features/amenities)
  'casa-coqueiral-14': {
    pt: ['6 suítes · até 18 hóspedes', 'Piscina'],
    en: ['6 suites · up to 18 guests', 'Pool'],
    es: ['6 suites · hasta 18 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | staff: 2 arrumadeiras; 1 cozinheira; 1 auxiliar de cozinha; 1 copeiro; 1 barman; 1 segu | suites=5 guests=16
  'casa-estrela-praia-dos-nativos': {
    pt: ['Vista para o mar', 'Staff completo incluído', '5 suítes · até 16 hóspedes'],
    en: ['Ocean view', 'Full staff included', '5 suites · up to 16 guests'],
    es: ['Vista al mar', 'Personal completo incluido', '5 suites · hasta 16 huéspedes'],
  },
  // Fonte: amenity 'Hidromassagem' | suites=4 guests=12 | piscina (features/amenities)
  'casa-coqueiral-22': {
    pt: ['Hidromassagem', '4 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Hot tub', '4 suites · up to 12 guests', 'Pool'],
    es: ['Hidromasaje', '4 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | staff: Caseiro; Camareira; Cozinheira; Ajudante de camareira; Ajudante de cozinha; Jard | amenity 'Gerador'
  'casa-areia-altos-de-trancoso': {
    pt: ['Vista para o mar', 'Staff completo incluído', 'Gerador'],
    en: ['Ocean view', 'Full staff included', 'Generator'],
    es: ['Vista al mar', 'Personal completo incluido', 'Generador'],
  },
  // Fonte: features 'vista-mar' | staff: Cozinheira; Arrumadeira; Piscineiro / Jardineiro; Concierge; Portaria 24 horas | suites=6 guests=12
  'casa-bonita-altos-de-itapororoca': {
    pt: ['Vista para o mar', 'Staff completo incluído', '6 suítes · até 12 hóspedes'],
    en: ['Ocean view', 'Full staff included', '6 suites · up to 12 guests'],
    es: ['Vista al mar', 'Personal completo incluido', '6 suites · hasta 12 huéspedes'],
  },
  // Fonte: features 'vista-mar' | staff: Cozinheira; Camareira; Piscineiro / Jardineiro | suites=5 guests=10
  'casa-bueno-altos-de-itapororoca': {
    pt: ['Vista para o mar', 'Staff completo incluído', '5 suítes · até 10 hóspedes'],
    en: ['Ocean view', 'Full staff included', '5 suites · up to 10 guests'],
    es: ['Vista al mar', 'Personal completo incluido', '5 suites · hasta 10 huéspedes'],
  },
  // Fonte: features 'pe-na-areia' | staff: Arrumadeira; Cozinheira; Piscineiro / Jardineiro; Portaria 24 horas | amenity 'Apoio de praia'
  'casa-da-ju-itapororoca': {
    pt: ['Pé na areia', 'Staff completo incluído', 'Apoio de praia'],
    en: ['Beachfront', 'Full staff included', 'Beach service'],
    es: ['Pie en la arena', 'Personal completo incluido', 'Servicio de playa'],
  },
  // Fonte: features 'pe-na-areia' | features 'vista-mar' | amenity 'Apoio de praia'
  'villa-patimirim-itapororoca': {
    pt: ['Pé na areia', 'Vista para o mar', 'Apoio de praia'],
    en: ['Beachfront', 'Ocean view', 'Beach service'],
    es: ['Pie en la arena', 'Vista al mar', 'Servicio de playa'],
  },
  // Fonte: features 'pe-na-areia' | staff: Cozinheira; 2 arrumadeiras; Auxiliar de cozinha; Copeiro; Piscineiro / Jardineir | amenity 'Apoio de praia completo e bar de praia'
  'casa-santa-rita-itaquena': {
    pt: ['Pé na areia', 'Staff completo incluído', 'Apoio de praia'],
    en: ['Beachfront', 'Full staff included', 'Beach service'],
    es: ['Pie en la arena', 'Personal completo incluido', 'Servicio de playa'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | amenity 'Sauna' | amenity 'Jacuzzi'
  'casa-trama-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', 'Sauna', 'Hidromassagem'],
    en: ['Altos de Trancoso Condominium', 'Sauna', 'Hot tub'],
    es: ['Condominio Altos de Trancoso', 'Sauna', 'Hidromasaje'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | suites=3 guests=6 | piscina (features/amenities)
  'casa-tizzi-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', '3 suítes · até 6 hóspedes', 'Piscina'],
    en: ['Altos de Trancoso Condominium', '3 suites · up to 6 guests', 'Pool'],
    es: ['Condominio Altos de Trancoso', '3 suites · hasta 6 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | staff: Camareira; Cozinheira; Jardineiro; Serviço de concierge | suites=4 guests=8
  'casa-lili-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', 'Staff completo incluído', '4 suítes · até 8 hóspedes'],
    en: ['Altos de Trancoso Condominium', 'Full staff included', '4 suites · up to 8 guests'],
    es: ['Condominio Altos de Trancoso', 'Personal completo incluido', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | amenity 'Jacuzzi / banheira de hidromassagem' | suites=4 guests=10
  'casa-coqueiral-23': {
    pt: ['Condomínio Coqueiral', 'Hidromassagem', '4 suítes · até 10 hóspedes'],
    en: ['Coqueiral Condominium', 'Hot tub', '4 suites · up to 10 guests'],
    es: ['Condominio Coqueiral', 'Hidromasaje', '4 suites · hasta 10 huéspedes'],
  },
  // Fonte: suites=5 guests=14 | piscina (features/amenities)
  'casa-15-joao-vieira': {
    pt: ['5 suítes · até 14 hóspedes', 'Piscina'],
    en: ['5 suites · up to 14 guests', 'Pool'],
    es: ['5 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: suites=5 guests=10 | piscina (features/amenities)
  'casa-14-joao-vieira': {
    pt: ['5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['5 suites · up to 10 guests', 'Pool'],
    es: ['5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: staff: 1 arrumadeira; 1 cozinheira; 1 jardineiro/piscineiro | amenity 'Adega de vinhos' | suites=4 guests=8
  'casa-13-joao-vieira': {
    pt: ['Staff completo incluído', 'Adega', '4 suítes · até 8 hóspedes'],
    en: ['Full staff included', 'Wine cellar', '4 suites · up to 8 guests'],
    es: ['Personal completo incluido', 'Bodega', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | amenity 'Piscina privativa com hidromassagem integrada' | suites=9 guests=21
  'casa-coqueiral-20': {
    pt: ['Condomínio Coqueiral', 'Hidromassagem', '9 suítes · até 21 hóspedes'],
    en: ['Coqueiral Condominium', 'Hot tub', '9 suites · up to 21 guests'],
    es: ['Condominio Coqueiral', 'Hidromasaje', '9 suites · hasta 21 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=5 guests=12 | piscina (features/amenities)
  'casa-coqueiral-21': {
    pt: ['Condomínio Coqueiral', '5 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '5 suites · up to 12 guests', 'Pool'],
    es: ['Condominio Coqueiral', '5 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | staff: Cozinheira; Camareira; Jardineiro; Piscineiro | suites=3 guests=8
  'casa-coqueiral-24': {
    pt: ['Condomínio Coqueiral', 'Staff completo incluído', '3 suítes · até 8 hóspedes'],
    en: ['Coqueiral Condominium', 'Full staff included', '3 suites · up to 8 guests'],
    es: ['Condominio Coqueiral', 'Personal completo incluido', '3 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | amenity 'Apoio de praia no Almar Trancoso, sujeito a disponibilidade' | suites=3 guests=6
  'casa-v7-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', 'Apoio de praia', '3 suítes · até 6 hóspedes'],
    en: ['Altos de Trancoso Condominium', 'Beach service', '3 suites · up to 6 guests'],
    es: ['Condominio Altos de Trancoso', 'Servicio de playa', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: features 'pe-na-areia' | features 'vista-mar' | staff: 1 cozinheira; 2 ajudantes de cozinha; 2 arrumadeiras; 1 jardineiro/piscineiro
  'casa-sublime-praia-dos-nativos': {
    pt: ['Pé na areia', 'Vista para o mar', 'Staff completo incluído'],
    en: ['Beachfront', 'Ocean view', 'Full staff included'],
    es: ['Pie en la arena', 'Vista al mar', 'Personal completo incluido'],
  },
  // Fonte: features 'vista-mar' | amenity 'Hidromassagem' | suites=5 guests=13
  'casa-vista-nativos': {
    pt: ['Vista para o mar', 'Hidromassagem', '5 suítes · até 13 hóspedes'],
    en: ['Ocean view', 'Hot tub', '5 suites · up to 13 guests'],
    es: ['Vista al mar', 'Hidromasaje', '5 suites · hasta 13 huéspedes'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Rio da Barra' | staff: Cozinheira; Auxiliar de cozinha; Camareira; Serviços gerais; Vigia noturno; Pisc
  'casa-terral-rio-da-barra': {
    pt: ['Vista para o mar', 'Condomínio Rio da Barra', 'Staff completo incluído'],
    en: ['Ocean view', 'Rio da Barra Condominium', 'Full staff included'],
    es: ['Vista al mar', 'Condominio Rio da Barra', 'Personal completo incluido'],
  },
  // Fonte: amenity 'Acesso direto à Praia de Itapororoca' | suites=6 guests=12 | piscina (features/amenities)
  'aldeia-itapororoca-05': {
    pt: ['Acesso direto à praia', '6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Direct beach access', '6 suites · up to 12 guests', 'Pool'],
    es: ['Acceso directo a la playa', '6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: features 'pe-na-areia' | features 'condominio' + location 'Praia de Itapororoca' | staff: 1 arrumadeira; 1 cozinheira; 1 auxiliar de cozinha; 1 jardineiro/piscineiro; Equ
  'aldeia-itapororoca-01': {
    pt: ['Pé na areia', 'Condomínio Praia de Itapororoca', 'Staff completo incluído'],
    en: ['Beachfront', 'Praia de Itapororoca Condominium', 'Full staff included'],
    es: ['Pie en la arena', 'Condominio Praia de Itapororoca', 'Personal completo incluido'],
  },
  // Fonte: amenity 'Sauna a vapor' | amenity 'Piscina com raia e hidromassagem (preparada para aquecimento)' | amenity 'Gerador automático de 40 kVA'
  'casa-atena-joao-vieira': {
    pt: ['Sauna', 'Hidromassagem', 'Gerador'],
    en: ['Sauna', 'Hot tub', 'Generator'],
    es: ['Sauna', 'Hidromasaje', 'Generador'],
  },
  // Fonte: staff: 1 arrumadeira; 1 cozinheira; 1 auxiliar de cozinha; 1 piscineiro/jardineiro | amenity 'Adega de vinhos' | amenity 'Gerador'
  'casa-mia-altos-de-trancoso': {
    pt: ['Staff completo incluído', 'Adega', 'Gerador'],
    en: ['Full staff included', 'Wine cellar', 'Generator'],
    es: ['Personal completo incluido', 'Bodega', 'Generador'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | amenity 'Quadra de tênis' | amenity 'Jacuzzi'
  'terravista-golf-casa-21': {
    pt: ['Condomínio Terravista Golf', 'Quadra de tênis', 'Hidromassagem'],
    en: ['Terravista Golf Condominium', 'Tennis court', 'Hot tub'],
    es: ['Condominio Terravista Golf', 'Cancha de tenis', 'Hidromasaje'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | suites=6 guests=12 | piscina (features/amenities)
  'terravista-golf-casa-19': {
    pt: ['Condomínio Terravista Golf', '6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Terravista Golf Condominium', '6 suites · up to 12 guests', 'Pool'],
    es: ['Condominio Terravista Golf', '6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | amenity 'Apoio de praia e acesso às estruturas do Terravista' | amenity 'Quadra de tênis no condomínio'
  'terravista-golf-casa-33': {
    pt: ['Condomínio Terravista Golf', 'Apoio de praia', 'Quadra de tênis'],
    en: ['Terravista Golf Condominium', 'Beach service', 'Tennis court'],
    es: ['Condominio Terravista Golf', 'Servicio de playa', 'Cancha de tenis'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | amenity 'Apoio de praia' | amenity 'Sauna'
  'terravista-golf-casa-37': {
    pt: ['Condomínio Terravista Golf', 'Apoio de praia', 'Sauna'],
    en: ['Terravista Golf Condominium', 'Beach service', 'Sauna'],
    es: ['Condominio Terravista Golf', 'Servicio de playa', 'Sauna'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | staff: Cozinheira; Arrumadeiras; Piscineiro e jardineiro | amenity 'Apoio de praia completo'
  'terravista-golf-casa-27': {
    pt: ['Condomínio Terravista Golf', 'Staff completo incluído', 'Apoio de praia'],
    en: ['Terravista Golf Condominium', 'Full staff included', 'Beach service'],
    es: ['Condominio Terravista Golf', 'Personal completo incluido', 'Servicio de playa'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Terravista Boutique' | amenity 'Apoio de praia'
  'terravista-boutique-casa-10': {
    pt: ['Vista para o mar', 'Condomínio Terravista Boutique', 'Apoio de praia'],
    en: ['Ocean view', 'Terravista Boutique Condominium', 'Beach service'],
    es: ['Vista al mar', 'Condominio Terravista Boutique', 'Servicio de playa'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Altos de Trancoso' | staff: 1 arrumadeira; 1 cozinheira; 1 auxiliar de cozinha; 1 jardineiro/piscineiro
  'casa-mangaba-altos-de-trancoso': {
    pt: ['Vista para o mar', 'Condomínio Altos de Trancoso', 'Staff completo incluído'],
    en: ['Ocean view', 'Altos de Trancoso Condominium', 'Full staff included'],
    es: ['Vista al mar', 'Condominio Altos de Trancoso', 'Personal completo incluido'],
  },
  // Fonte: features/location Quadrado | suites=2 guests=4 | piscina (features/amenities)
  'casa-okun-centro': {
    pt: ['Próximo ao Quadrado', '2 suítes · até 4 hóspedes', 'Piscina'],
    en: ['Next to the Quadrado', '2 suites · up to 4 guests', 'Pool'],
    es: ['Junto al Quadrado', '2 suites · hasta 4 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | amenity 'Apoio de praia' | amenity 'Adega de vinhos'
  'terravista-golf-casa-62': {
    pt: ['Condomínio Terravista Golf', 'Apoio de praia', 'Adega'],
    en: ['Terravista Golf Condominium', 'Beach service', 'Wine cellar'],
    es: ['Condominio Terravista Golf', 'Servicio de playa', 'Bodega'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | suites=6 guests=12 | piscina (features/amenities)
  'casa-due-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', '6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Altos de Trancoso Condominium', '6 suites · up to 12 guests', 'Pool'],
    es: ['Condominio Altos de Trancoso', '6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: suites=4 guests=8 | piscina (features/amenities)
  'casa-azul-centro': {
    pt: ['4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['4 suites · up to 8 guests', 'Pool'],
    es: ['4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Eco' | staff: Arrumadeira todos os dias; Jardineiro e piscineiro duas vezes por semana; Cozinh | amenity 'Quadra de areia (beach tennis, peteca e futevôlei)'
  'condominio-eco-casa-01': {
    pt: ['Condomínio Eco', 'Staff completo incluído', 'Beach tennis'],
    en: ['Eco Condominium', 'Full staff included', 'Beach tennis'],
    es: ['Condominio Eco', 'Personal completo incluido', 'Beach tennis'],
  },
  // Fonte: suites=5 guests=12 | piscina (features/amenities)
  'colina-casa-01': {
    pt: ['5 suítes · até 12 hóspedes', 'Piscina'],
    en: ['5 suites · up to 12 guests', 'Pool'],
    es: ['5 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Cozinheira; Camareira; Piscineiro | suites=4 guests=10 | piscina (features/amenities)
  'colina-casa-02': {
    pt: ['Staff completo incluído', '4 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Full staff included', '4 suites · up to 10 guests', 'Pool'],
    es: ['Personal completo incluido', '4 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: suites=3 guests=7 | piscina (features/amenities)
  'colina-casa-03': {
    pt: ['3 suítes · até 7 hóspedes', 'Piscina'],
    en: ['3 suites · up to 7 guests', 'Pool'],
    es: ['3 suites · hasta 7 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Jacuzzi aquecida' | suites=5 guests=15 | piscina (features/amenities)
  'casa-coqueiral-08': {
    pt: ['Hidromassagem', '5 suítes · até 15 hóspedes', 'Piscina'],
    en: ['Hot tub', '5 suites · up to 15 guests', 'Pool'],
    es: ['Hidromasaje', '5 suites · hasta 15 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | suites=4 guests=10 | piscina (features/amenities)
  'casa-helena-rio-da-barra': {
    pt: ['Vista para o mar', '4 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Ocean view', '4 suites · up to 10 guests', 'Pool'],
    es: ['Vista al mar', '4 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Eco' | suites=4 guests=8 | piscina (features/amenities)
  'condominio-eco-casa-03': {
    pt: ['Condomínio Eco', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Eco Condominium', '4 suites · up to 8 guests', 'Pool'],
    es: ['Condominio Eco', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Eco' | amenity 'Quadra de beach tennis' | amenity 'Gerador'
  'condominio-eco-casa-04': {
    pt: ['Condomínio Eco', 'Beach tennis', 'Gerador'],
    en: ['Eco Condominium', 'Beach tennis', 'Generator'],
    es: ['Condominio Eco', 'Beach tennis', 'Generador'],
  },
  // Fonte: features 'vista-mar' | staff: Cozinheira; Camareira; Caseiro 24h; Piscineiro; Barqueiro | amenity 'Sauna'
  'casa-vista-caraiva': {
    pt: ['Vista para o mar', 'Staff completo incluído', 'Sauna'],
    en: ['Ocean view', 'Full staff included', 'Sauna'],
    es: ['Vista al mar', 'Personal completo incluido', 'Sauna'],
  },
  // Fonte: features 'condominio' + location 'Terravista Golf' | staff: 2 arrumadeiras; 1 cozinheira; 1 auxiliar de cozinha; 1 caseiro | amenity 'Apoio de praia (cadeiras, ombrelones e cooler)'
  'terravista-golf-casa-95': {
    pt: ['Condomínio Terravista Golf', 'Staff completo incluído', 'Apoio de praia'],
    en: ['Terravista Golf Condominium', 'Full staff included', 'Beach service'],
    es: ['Condominio Terravista Golf', 'Personal completo incluido', 'Servicio de playa'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | amenity 'Apoio de praia nas Tartarugas' | amenity 'Academia e playground do condomínio'
  'terravista-vilas-casa-13': {
    pt: ['Condomínio Terravista Vilas', 'Apoio de praia', 'Academia'],
    en: ['Terravista Vilas Condominium', 'Beach service', 'Gym'],
    es: ['Condominio Terravista Vilas', 'Servicio de playa', 'Gimnasio'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=7 guests=20 | piscina (features/amenities)
  'coqueiral-casa-06': {
    pt: ['Condomínio Coqueiral', '7 suítes · até 20 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '7 suites · up to 20 guests', 'Pool'],
    es: ['Condominio Coqueiral', '7 suites · hasta 20 huéspedes', 'Piscina'],
  },
  // Fonte: suites=3 guests=7 | piscina (features/amenities)
  'casa-altar-altos-de-trancoso': {
    pt: ['3 suítes · até 7 hóspedes', 'Piscina'],
    en: ['3 suites · up to 7 guests', 'Pool'],
    es: ['3 suites · hasta 7 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | amenity 'Adega e máquina Nespresso Vertuo' | suites=3 guests=10
  'casa-coqueiral-4': {
    pt: ['Condomínio Coqueiral', 'Adega', '3 suítes · até 10 hóspedes'],
    en: ['Coqueiral Condominium', 'Wine cellar', '3 suites · up to 10 guests'],
    es: ['Condominio Coqueiral', 'Bodega', '3 suites · hasta 10 huéspedes'],
  },
  // Fonte: features/location Quadrado | features 'condominio' + location 'Quadrado' | amenity 'Gerador'
  'casa-tempo-04': {
    pt: ['Próximo ao Quadrado', 'Condomínio Quadrado', 'Gerador'],
    en: ['Next to the Quadrado', 'Quadrado Condominium', 'Generator'],
    es: ['Junto al Quadrado', 'Condominio Quadrado', 'Generador'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | amenity 'Gerador' | suites=4 guests=8
  'casa-jue': {
    pt: ['Condomínio Altos de Trancoso', 'Gerador', '4 suítes · até 8 hóspedes'],
    en: ['Altos de Trancoso Condominium', 'Generator', '4 suites · up to 8 guests'],
    es: ['Condominio Altos de Trancoso', 'Generador', '4 suites · hasta 8 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Terravista Vilas' | suites=2 guests=4
  'terravista-vilas-34': {
    pt: ['Condomínio Terravista Vilas', '2 suítes · até 4 hóspedes'],
    en: ['Terravista Vilas Condominium', '2 suites · up to 4 guests'],
    es: ['Condominio Terravista Vilas', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | amenity 'Sauna úmida' | amenity 'Gerador'
  'casa-nana': {
    pt: ['Condomínio Altos de Trancoso', 'Sauna', 'Gerador'],
    en: ['Altos de Trancoso Condominium', 'Sauna', 'Generator'],
    es: ['Condominio Altos de Trancoso', 'Sauna', 'Generador'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=5 guests=16 | piscina (features/amenities)
  'coqueiral-09': {
    pt: ['Condomínio Coqueiral', '5 suítes · até 16 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '5 suites · up to 16 guests', 'Pool'],
    es: ['Condominio Coqueiral', '5 suites · hasta 16 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Altos de Trancoso' | staff: Cozinheira; Ajudante de cozinha; Camareira; Jardineiro/piscineiro | amenity 'Gerador'
  'casa-iemanja': {
    pt: ['Condomínio Altos de Trancoso', 'Staff completo incluído', 'Gerador'],
    en: ['Altos de Trancoso Condominium', 'Full staff included', 'Generator'],
    es: ['Condominio Altos de Trancoso', 'Personal completo incluido', 'Generador'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | amenity '2 suítes com hidromassagem' | suites=5 guests=12
  'coqueiral-27': {
    pt: ['Condomínio Coqueiral', 'Hidromassagem', '5 suítes · até 12 hóspedes'],
    en: ['Coqueiral Condominium', 'Hot tub', '5 suites · up to 12 guests'],
    es: ['Condominio Coqueiral', 'Hidromasaje', '5 suites · hasta 12 huéspedes'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=6 guests=18 | piscina (features/amenities)
  'coqueiral-10': {
    pt: ['Condomínio Coqueiral', '6 suítes · até 18 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '6 suites · up to 18 guests', 'Pool'],
    es: ['Condominio Coqueiral', '6 suites · hasta 18 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | features 'condominio' + location 'Altos de Itapororoca' | amenity 'Serviço de apoio de praia e acesso privativo à Praia de Itapororoca'
  'villa-w-altos-de-itapororoca': {
    pt: ['Vista para o mar', 'Condomínio Altos de Itapororoca', 'Apoio de praia'],
    en: ['Ocean view', 'Altos de Itapororoca Condominium', 'Beach service'],
    es: ['Vista al mar', 'Condominio Altos de Itapororoca', 'Servicio de playa'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=5 guests=10 | piscina (features/amenities)
  'casa-coqueiral-11': {
    pt: ['Condomínio Coqueiral', '5 suítes · até 10 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '5 suites · up to 10 guests', 'Pool'],
    es: ['Condominio Coqueiral', '5 suites · hasta 10 huéspedes', 'Piscina'],
  },
  // Fonte: features 'condominio' + location 'Condomínio Coqueiral' | suites=4 guests=12 | piscina (features/amenities)
  'casa-coqueiral-12': {
    pt: ['Condomínio Coqueiral', '4 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Coqueiral Condominium', '4 suites · up to 12 guests', 'Pool'],
    es: ['Condominio Coqueiral', '4 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: features 'vista-mar' | amenity 'Academia' | suites=8 guests=16
  'casa-grao-de-mar': {
    pt: ['Vista para o mar', 'Academia', '8 suítes · até 16 hóspedes'],
    en: ['Ocean view', 'Gym', '8 suites · up to 16 guests'],
    es: ['Vista al mar', 'Gimnasio', '8 suites · hasta 16 huéspedes'],
  },
  // Fonte: staff: 1 arrumadeira, 1 governanta, 1 cozinheira, 1 auxiliar de cozinha, 1 bartender e  | amenity 'Apoio de praia' | amenity 'Adega de vinhos'
  'casa-aroeira-itapororoca': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Adega'],
    en: ['Full staff included', 'Beach service', 'Wine cellar'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Bodega'],
  },
  // Fonte: staff: Equipe regular: 2 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha e 1 jardinei | amenity 'Apoio de praia' | amenity 'Carrinho de golfe (pickup)'
  'aldeia-itapororoca-11': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Campo de golfe'],
    en: ['Full staff included', 'Beach service', 'Golf course'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Campo de golf'],
  },
  // Fonte: staff: Jardineiro, piscineiro, cozinheira e camareira (para até 8 hóspedes). Acima diss | amenity 'Piscina com hidromassagem' | amenity 'Gerador'
  'casa-casadei-altos-de-trancoso': {
    pt: ['Staff completo incluído', 'Hidromassagem', 'Gerador'],
    en: ['Full staff included', 'Hot tub', 'Generator'],
    es: ['Personal completo incluido', 'Hidromasaje', 'Generador'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Beach tennis' | amenity 'SPA e jacuzzi'
  'casa-lua': {
    pt: ['Apoio de praia', 'Beach tennis', 'Hidromassagem'],
    en: ['Beach service', 'Beach tennis', 'Hot tub'],
    es: ['Servicio de playa', 'Beach tennis', 'Hidromasaje'],
  },
  // Fonte: amenity 'Pé na areia, com acesso direto à Praia de Itapororoca' | amenity 'Apoio de praia' | amenity 'Quadra de beach tennis'
  'casa-sol': {
    pt: ['Acesso direto à praia', 'Apoio de praia', 'Beach tennis'],
    en: ['Direct beach access', 'Beach service', 'Beach tennis'],
    es: ['Acceso directo a la playa', 'Servicio de playa', 'Beach tennis'],
  },
  // Fonte: amenity 'Adega climatizada' | suites=6 guests=12 | piscina (features/amenities)
  'casilla-del-mare-altos-de-trancoso': {
    pt: ['Adega', '6 suítes · até 12 hóspedes', 'Piscina'],
    en: ['Wine cellar', '6 suites · up to 12 guests', 'Pool'],
    es: ['Bodega', '6 suites · hasta 12 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Hidromassagem' | suites=5 guests=14 | piscina (features/amenities)
  'casa-coqueiral-5': {
    pt: ['Hidromassagem', '5 suítes · até 14 hóspedes', 'Piscina'],
    en: ['Hot tub', '5 suites · up to 14 guests', 'Pool'],
    es: ['Hidromasaje', '5 suites · hasta 14 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Baixa temporada: 1 arrumadeira e 1 jardineiro/piscineiro; Alta temporada: 1 arru | suites=4 guests=8 | piscina (features/amenities)
  'casa-joao-vieira-12': {
    pt: ['Staff completo incluído', '4 suítes · até 8 hóspedes', 'Piscina'],
    en: ['Full staff included', '4 suites · up to 8 guests', 'Pool'],
    es: ['Personal completo incluido', '4 suites · hasta 8 huéspedes', 'Piscina'],
  },
  // Fonte: amenity 'Sauna' | amenity 'Adega de vinhos' | amenity 'Gerador'
  'casa-muxarabi-altos-de-trancoso': {
    pt: ['Sauna', 'Adega', 'Gerador'],
    en: ['Sauna', 'Wine cellar', 'Generator'],
    es: ['Sauna', 'Bodega', 'Generador'],
  },
  // Fonte: staff: 1 arrumadeira, 1 cozinheira e 1 jardineiro/piscineiro | suites=3 guests=6 | piscina (features/amenities)
  'casa-noa-altos-de-trancoso': {
    pt: ['Staff completo incluído', '3 suítes · até 6 hóspedes', 'Piscina'],
    en: ['Full staff included', '3 suites · up to 6 guests', 'Pool'],
    es: ['Personal completo incluido', '3 suites · hasta 6 huéspedes', 'Piscina'],
  },
  // Fonte: staff: Equipe completa composta por 2 arrumadeiras, 1 cozinheira, 1 ajudante de cozinha | amenity 'Apoio de praia' | amenity 'Gerador'
  'casa-da-ponta-03': {
    pt: ['Staff completo incluído', 'Apoio de praia', 'Gerador'],
    en: ['Full staff included', 'Beach service', 'Generator'],
    es: ['Personal completo incluido', 'Servicio de playa', 'Generador'],
  },
  // Fonte: staff: 3 arrumadeiras, 1 cozinheira, 1 auxiliar de cozinha e 1 caseiro. | amenity 'Apoio de praia' | suites=7 guests=15
  'casa-selva-altos-de-patimirim': {
    pt: ['Staff completo incluído', 'Apoio de praia', '7 suítes · até 15 hóspedes'],
    en: ['Full staff included', 'Beach service', '7 suites · up to 15 guests'],
    es: ['Personal completo incluido', 'Servicio de playa', '7 suites · hasta 15 huéspedes'],
  },
  // Fonte: amenity 'Apoio de praia' | amenity 'Gerador' | suites=3 guests=6
  'vilas-altos-de-trancoso-casa-16': {
    pt: ['Apoio de praia', 'Gerador', '3 suítes · até 6 hóspedes'],
    en: ['Beach service', 'Generator', '3 suites · up to 6 guests'],
    es: ['Servicio de playa', 'Generador', '3 suites · hasta 6 huéspedes'],
  },
  // Fonte: PDF Casa 118 — apoio de praia (condomínio Vilas Altos) + adega de vinhos + suites=2 guests=4
  'vilas-altos-de-trancoso-casa-118': {
    pt: ['Apoio de praia', 'Adega de vinhos', '2 suítes · até 4 hóspedes'],
    en: ['Beach service', 'Wine cellar', '2 suites · up to 4 guests'],
    es: ['Servicio de playa', 'Cava de vinos', '2 suites · hasta 4 huéspedes'],
  },
  // Fonte: PDF Casa 04 — pé na areia + apoio de praia (condomínio Vilas Altos) + suites=3 guests=7
  'vilas-altos-de-trancoso-casa-04': {
    pt: ['Pé na areia', 'Apoio de praia', '3 suítes · até 7 hóspedes'],
    en: ['Beachfront', 'Beach service', '3 suites · up to 7 guests'],
    es: ['Frente a la playa', 'Servicio de playa', '3 suites · hasta 7 huéspedes'],
  },
// Fonte: PDF Casa 201 — pé na areia + apoio de praia (condomínio Vilas Altos) + suites=3 guests=10
  'vilas-altos-de-trancoso-casa-201': {
    pt: ['Pé na areia', 'Apoio de praia', '3 suítes · até 10 hóspedes'],
    en: ['Beachfront', 'Beach service', '3 suites · up to 10 guests'],
    es: ['Frente a la playa', 'Servicio de playa', '3 suites · hasta 10 huéspedes'],
  },
  // Fonte: PDF Casa 101 — pé na areia + apoio de praia + adega (condomínio Vilas Altos) + suites=3 guests=6
  'vilas-altos-de-trancoso-casa-101': {
    pt: ['Pé na areia', 'Apoio de praia', 'Adega de vinhos'],
    en: ['Beachfront', 'Beach service', 'Wine cellar'],
    es: ['Frente a la playa', 'Servicio de playa', 'Cava de vinos'],
  },
  // Fonte: suites=3 guests=6 | piscina (features/amenities)
  'casa-brunella': {
    pt: ['3 suítes · até 6 hóspedes', 'Piscina'],
    en: ['3 suites · up to 6 guests', 'Pool'],
    es: ['3 suites · hasta 6 huéspedes', 'Piscina'],
  },
  // Fonte: suites=3 guests=6 | piscina (features/amenities)
  'casa-coqueiral-03': {
    pt: ['3 suítes · até 6 hóspedes', 'Piscina'],
    en: ['3 suites · up to 6 guests', 'Pool'],
    es: ['3 suites · hasta 6 huéspedes', 'Piscina'],
  },
};
