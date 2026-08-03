import { useState, type ReactNode } from 'react';
import { useLang, txt } from '../i18n';
import type { Property } from '../data/properties';
import { GOLF_LOTS } from '../data/golflots';

const LABELS = {
  pt: {
    title: 'Especificações',
    amenities: 'Características e Facilidades',
    suites: 'Suítes e Quartos',
    staff: 'Staff',
    location: 'Localização',
    map: 'Ver no mapa',
  },
  en: {
    title: 'Specifications',
    amenities: 'Features and Amenities',
    suites: 'Suites and Bedrooms',
    staff: 'Staff',
    location: 'Location',
    map: 'View on map',
  },
} as const;

// Remove duplicidades com o quadro verde de diárias: preços, temporadas,
// carnaval, réveillon, locação mínima, taxa de serviço e menção ao Quadrado.
const DROP_NOTE = /loca[cç][aã]o m[ií]nima|minimum stay|estadia m[ií]nima|noites m[ií]nimas|alta temporada|baixa temporada|high season|low season|carnaval|r[eé]veillon|new year|taxa de servi[cç]o|service fee|R\$|US\$|di[aá]ria|night|pacote|package|quadrado/i;

// Parágrafo da descrição que contém a configuração das suítes — vai para
// "Suítes e Quartos" e sai da descrição para não duplicar.
export const SUITE_PAR = /configura[cç][aã]o das su[ií]tes|suite layout|distribui[cç][aã]o das su[ií]tes/i;


// Configuração das suítes por casa, agrupada por ala/bangalô/andar.
// Conteúdo de cada casa extraído do próprio cadastro — nunca copiado de outra.
type SuiteGroup = { title: string; master?: string; suites?: [string, string][] };
type HouseSuites = { groups: SuiteGroup[]; footer?: string };
const SUITES_BY_ID: Record<string, Record<'pt' | 'en', HouseSuites>> = {
  'casa-terral-rio-da-barra': {
    pt: {
      groups: [
        { title: '', suites: [
          ['Suíte Master', 'Climatizada · banheiro privativo'],
          ['Suíte Jardim', 'Climatizada · banheiro privativo'],
          ['Suíte 01', 'Climatizada · banheiro privativo'],
          ['Suíte 02', 'Climatizada · banheiro privativo'],
        ] },
      ],
      footer: 'Capacidade para até 8 hóspedes. Dois lavabos na área social.',
    },
    en: {
      groups: [
        { title: '', suites: [
          ['Master Suite', 'Air-conditioned · private bathroom'],
          ['Garden Suite', 'Air-conditioned · private bathroom'],
          ['Suite 01', 'Air-conditioned · private bathroom'],
          ['Suite 02', 'Air-conditioned · private bathroom'],
        ] },
      ],
      footer: 'Capacity for up to 8 guests. Two guest bathrooms in the social area.',
    },
  },
  'casa-01-aldeia-itapororoca': {
    pt: {
      groups: [
        { title: 'Piso Superior', suites: [
          ['Suíte Master', '2 camas box de casal'],
          ['Suíte 02', '1 cama queen-size'],
          ['Suíte 03', '2 camas de solteiro com bicamas'],
          ['Suíte 04', '2 camas de solteiro'],
        ] },
        { title: 'Piso Térreo', suites: [
          ['Suíte 05', '1 cama de casal'],
          ['Suíte 06', '1 cama queen-size'],
          ['Suíte 07', '2 camas de solteiro com bicamas · conjugada com a Suíte 06'],
        ] },
      ],
      footer: 'Capacidade para até 16 hóspedes.',
    },
    en: {
      groups: [
        { title: 'Upper Floor', suites: [
          ['Master Suite', '2 double box beds'],
          ['Suite 02', '1 queen-size bed'],
          ['Suite 03', '2 single beds with trundle beds'],
          ['Suite 04', '2 single beds'],
        ] },
        { title: 'Ground Floor', suites: [
          ['Suite 05', '1 double bed'],
          ['Suite 06', '1 queen-size bed'],
          ['Suite 07', '2 single beds with trundle beds · connected to Suite 06'],
        ] },
      ],
      footer: 'Capacity for up to 16 guests.',
    },
  },
  'casa-atena-joao-vieira': {
    pt: {
      groups: [
        { title: '', suites: [
          ['Suíte Master', '1 cama king size · vista panorâmica para o Vale de Trancoso'],
          ['Suíte 02', '1 cama king size'],
          ['Suíte 03', '1 cama king size'],
          ['Suíte 04', '1 cama king size'],
          ['Suíte 05', '1 cama king size'],
        ] },
      ],
      footer: 'Capacidade para até 12 hóspedes. Quarto de apoio para staff com banheiro e 2 camas de solteiro.',
    },
    en: {
      groups: [
        { title: '', suites: [
          ['Master Suite', '1 king size bed · panoramic view of the Trancoso Valley'],
          ['Suite 02', '1 king size bed'],
          ['Suite 03', '1 king size bed'],
          ['Suite 04', '1 king size bed'],
          ['Suite 05', '1 king size bed'],
        ] },
      ],
      footer: 'Capacity for up to 12 guests. Staff support room with bathroom and 2 single beds.',
    },
  },
  'casa-04-jacaranda': {
    pt: {
      groups: [
        { title: '', suites: [
          ['Suíte 01', '1 cama king + 2 camas auxiliares'],
          ['Suíte 02', '1 cama king + 2 camas auxiliares'],
          ['Suíte 03', '1 cama king + 2 camas auxiliares'],
          ['Suíte 04', '1 cama king + 2 camas auxiliares'],
          ['Suíte 05', '1 cama king + 2 camas auxiliares'],
          ['Suíte 06', '1 cama king + 2 camas auxiliares'],
          ['Suíte 07', '1 cama de casal + 1 cama auxiliar'],
        ] },
      ],
      footer: 'Capacidade para até 21 hóspedes.',
    },
    en: {
      groups: [
        { title: '', suites: [
          ['Suite 01', '1 king bed + 2 extra beds'],
          ['Suite 02', '1 king bed + 2 extra beds'],
          ['Suite 03', '1 king bed + 2 extra beds'],
          ['Suite 04', '1 king bed + 2 extra beds'],
          ['Suite 05', '1 king bed + 2 extra beds'],
          ['Suite 06', '1 king bed + 2 extra beds'],
          ['Suite 07', '1 double bed + 1 extra bed'],
        ] },
      ],
      footer: 'Capacity for up to 21 guests.',
    },
  },
  'casa-coqueiral-14': {
    pt: {
      groups: [
        { title: '', suites: [
          ['Suíte 01', 'Climatizada'],
          ['Suíte 02', 'Climatizada'],
          ['Suíte 03', 'Climatizada'],
          ['Suíte 04', 'Climatizada'],
          ['Suíte 05', 'Climatizada'],
          ['Suíte 06', 'Climatizada'],
        ] },
      ],
      footer: 'Capacidade para até 18 hóspedes.',
    },
    en: {
      groups: [
        { title: '', suites: [
          ['Suite 01', 'Air-conditioned'],
          ['Suite 02', 'Air-conditioned'],
          ['Suite 03', 'Air-conditioned'],
          ['Suite 04', 'Air-conditioned'],
          ['Suite 05', 'Air-conditioned'],
          ['Suite 06', 'Air-conditioned'],
        ] },
      ],
      footer: 'Capacity for up to 18 guests.',
    },
  },
  'casa-coqueiral-02': {
    pt: {
      groups: [
        { title: '', suites: [
          ['Suíte 01', '1 cama de casal'],
          ['Suíte 02', '1 cama de casal'],
          ['Suíte 03', '1 cama de casal'],
          ['Suíte 04', '1 cama de casal'],
          ['Suíte 05', '1 cama de casal'],
          ['Suíte 06', '1 cama de casal'],
          ['Suíte 07', '1 cama de casal'],
        ] },
      ],
      footer: 'Capacidade para até 14 hóspedes.',
    },
    en: {
      groups: [
        { title: '', suites: [
          ['Suite 01', '1 double bed'],
          ['Suite 02', '1 double bed'],
          ['Suite 03', '1 double bed'],
          ['Suite 04', '1 double bed'],
          ['Suite 05', '1 double bed'],
          ['Suite 06', '1 double bed'],
          ['Suite 07', '1 double bed'],
        ] },
      ],
      footer: 'Capacity for up to 14 guests.',
    },
  },
  'casa-maria-rio-verde': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte 01 (piso superior)', '1 cama king size, armário, secador de cabelo e ar-condicionado.'],
          ['Suíte 02 (piso térreo)', '1 cama king size, armário, secador de cabelo e ar-condicionado.'],
          ['Suíte 03 (piso térreo)', '1 cama king size, armário, secador de cabelo e ar-condicionado.'],
        ],
      },
    ],
    footer: 'Capacidade para até 6 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suite 01 (upper floor)', '1 king-size bed, wardrobe, hair dryer and air conditioning.'],
          ['Suite 02 (ground floor)', '1 king-size bed, wardrobe, hair dryer and air conditioning.'],
          ['Suite 03 (ground floor)', '1 king-size bed, wardrobe, hair dryer and air conditioning.'],
        ],
      },
    ],
    footer: 'Capacity for up to 6 guests.',
  },
  },
  'casa-almescla-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte Master', '1 cama king size.'],
          ['Suíte 02', '1 cama queen size, conversível em 2 camas de solteiro.'],
          ['Suíte 03', '1 cama queen size.'],
          ['Suíte 04', '1 cama queen size.'],
        ],
      },
    ],
    footer: 'Capacidade para até 8 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Master Suite', '1 king-size bed.'],
          ['Suite 02', '1 queen-size bed, convertible into 2 twin beds.'],
          ['Suite 03', '1 queen-size bed.'],
          ['Suite 04', '1 queen-size bed.'],
        ],
      },
    ],
    footer: 'Capacity for up to 8 guests.',
  },
  },
  'casa-casamar-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: 'Casa principal',
        suites: [
          ['Suíte 01 – Master (piso superior)', '1 cama king size, ar-condicionado, secador de cabelo e TV.'],
          ['Suíte 02 (piso térreo)', '2 camas de solteiro, que podem ser convertidas em 1 cama king size, ar-condicionado, secador de cabelo e TV.'],
          ['Suíte 03 (piso térreo)', '2 camas de solteiro, que podem ser convertidas em 1 cama super king size, ar-condicionado, secador de cabelo, TV e varanda voltada para o jardim.'],
        ],
      },
      {
        title: 'Bangalô externo',
        suites: [
          ['Suíte 04', '2 camas de solteiro, que podem ser convertidas em 1 cama queen size, ar-condicionado, secador de cabelo, TV e jardim privativo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 8 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Main house',
        suites: [
          ['Suite 01 – Master (upper floor)', '1 king-size bed, air conditioning, hair dryer and TV.'],
          ['Suite 02 (ground floor)', '2 twin beds, convertible into 1 king-size bed, air conditioning, hair dryer and TV.'],
          ['Suite 03 (ground floor)', '2 twin beds, convertible into 1 super king-size bed, air conditioning, hair dryer, TV and veranda facing the garden.'],
        ],
      },
      {
        title: 'External bungalow',
        suites: [
          ['Suite 04', '2 twin beds, convertible into 1 queen-size bed, air conditioning, hair dryer, TV and private garden.'],
        ],
      },
    ],
    footer: 'Capacity for up to 8 guests.',
  },
  },
  'vila-geiger-itapororoca': {
  pt: {
    groups: [
      {
        title: 'Casa principal',
        suites: [
          ['Suíte 01', '1 cama king size, poltrona, ar-condicionado, mesa de escritório, closet, cofre, secador de cabelo e varanda com vista para o jardim.'],
          ['Suíte 02', '1 cama king size, poltrona, ar-condicionado, mesa de escritório, closet, cofre, secador de cabelo e varanda com vista para o jardim.'],
          ['Suíte 03', '2 camas de solteiro tipo viúva, poltrona, ar-condicionado, closet, guarda-roupa, mosquiteiro, cofre e secador de cabelo.'],
          ['Suíte 04', '2 camas de solteiro, 1 berço, mosquiteiro, ar-condicionado, guarda-roupa, cofre, secador de cabelo e varanda.'],
        ],
      },
      {
        title: 'Bangalôs externos',
        suites: [
          ['Suíte 05', '1 cama king size, ar-condicionado, mosquiteiro, closet e secador de cabelo.'],
          ['Suíte 06', '1 cama king size, ar-condicionado, mosquiteiro, closet e secador de cabelo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 12 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Main house',
        suites: [
          ['Suite 01', '1 king-size bed, armchair, air conditioning, desk, walk-in closet, safe, hair dryer and veranda overlooking the garden.'],
          ['Suite 02', '1 king-size bed, armchair, air conditioning, desk, walk-in closet, safe, hair dryer and veranda overlooking the garden.'],
          ['Suite 03', '2 large twin beds, armchair, air conditioning, walk-in closet, wardrobe, mosquito net, safe and hair dryer.'],
          ['Suite 04', '2 twin beds, 1 crib, mosquito net, air conditioning, wardrobe, safe, hair dryer and veranda.'],
        ],
      },
      {
        title: 'External bungalows',
        suites: [
          ['Suite 05', '1 king-size bed, air conditioning, mosquito net, walk-in closet and hair dryer.'],
          ['Suite 06', '1 king-size bed, air conditioning, mosquito net, walk-in closet and hair dryer.'],
        ],
      },
    ],
    footer: 'Capacity for up to 12 guests.',
  },
  },
  'casa-mia-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: 'Suíte Master',
        master: '01 cama king size, ar-condicionado, frigobar e secador de cabelo.',
      },
      {
        title: 'Suítes',
        suites: [
          ['Suíte 2', '01 cama king size, ar-condicionado e secador de cabelo.'],
          ['Suíte 3', '01 cama king size, ar-condicionado e secador de cabelo.'],
          ['Suíte 4', '01 cama queen size, ar-condicionado e secador de cabelo.'],
          ['Suíte 5', '02 camas de solteiro, ar-condicionado e secador de cabelo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 10 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Master Suite',
        master: '01 king-size bed, air conditioning, minibar and hairdryer.',
      },
      {
        title: 'Suites',
        suites: [
          ['Suite 2', '01 king-size bed, air conditioning and hairdryer.'],
          ['Suite 3', '01 king-size bed, air conditioning and hairdryer.'],
          ['Suite 4', '01 queen-size bed, air conditioning and hairdryer.'],
          ['Suite 5', '02 twin beds, air conditioning and hairdryer.'],
        ],
      },
    ],
    footer: 'Capacity for up to 10 guests.',
  },
},

  'casa-coqueiral-25': {
  pt: {
    groups: [
      {
        title: 'Pavimento Superior',
        suites: [
          ['Suíte 1', 'Cama queen-size, ar-condicionado, televisão, closet, varanda privativa e banheira de hidromassagem.'],
          ['Suíte 2', 'Cama queen-size, ar-condicionado, televisão, closet, varanda privativa e banheira de hidromassagem.'],
        ],
      },
      {
        title: 'Pavimento Térreo',
        suites: [
          ['Suíte 3', 'Uma cama queen-size e duas camas auxiliares de solteiro, com possibilidade de configuração em até quatro camas de solteiro, ar-condicionado, armários e varanda com ducha privativa.'],
          ['Suíte 4', 'Uma cama queen-size e duas camas auxiliares de solteiro, com possibilidade de configuração em até quatro camas de solteiro, ar-condicionado, armários, entrada independente e varanda com ducha privativa.'],
          ['Suíte 5', 'Uma cama queen-size e duas camas auxiliares de solteiro, com possibilidade de configuração em até quatro camas de solteiro, ar-condicionado, armários, entrada independente e varanda com ducha privativa.'],
        ],
      },
    ],
    footer: 'Capacidade máxima para 16 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        suites: [
          ['Suite 1', 'Queen-size bed, air conditioning, television, walk-in closet, private veranda and hot tub.'],
          ['Suite 2', 'Queen-size bed, air conditioning, television, walk-in closet, private veranda and hot tub.'],
        ],
      },
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 3', 'One queen-size bed and two single auxiliary beds, with the possibility of configuration into up to four single beds, air conditioning, wardrobes and veranda with private shower.'],
          ['Suite 4', 'One queen-size bed and two single auxiliary beds, with the possibility of configuration into up to four single beds, air conditioning, wardrobes, independent entrance and veranda with private shower.'],
          ['Suite 5', 'One queen-size bed and two single auxiliary beds, with the possibility of configuration into up to four single beds, air conditioning, wardrobes, independent entrance and veranda with private shower.'],
        ],
      },
    ],
    footer: 'Maximum capacity for 16 guests.',
  },
  },
  'casa-maion-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: 'Suíte Master',
        master: '01 cama queen size, ar-condicionado, mosquiteiro, closet, duas pias, duas duchas, jardim externo e deck com varanda e rede.',
      },
      {
        title: 'Suítes',
        suites: [
          ['Suíte 2', '01 cama de casal, ar-condicionado, mosquiteiro e deck com varanda e rede.'],
          ['Suíte 3', '02 camas box de solteiro, ar-condicionado, mosquiteiro e deck com varanda e rede.'],
          ['Suíte 4', '02 camas box de solteiro, ar-condicionado, mosquiteiro e deck com varanda e rede.'],
        ],
      },
    ],
    footer: 'Capacidade para até 8 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Master Suite',
        master: '01 queen-size bed, air conditioning, mosquito net, walk-in closet, double sinks, double showers, external garden and deck with veranda and hammock.',
      },
      {
        title: 'Suites',
        suites: [
          ['Suite 2', '01 double bed, air conditioning, mosquito net and deck with veranda and hammock.'],
          ['Suite 3', '02 twin box beds, air conditioning, mosquito net and deck with veranda and hammock.'],
          ['Suite 4', '02 twin box beds, air conditioning, mosquito net and deck with veranda and hammock.'],
        ],
      },
    ],
    footer: 'Capacity for up to 8 guests.',
  },
  },
  'casa-dadinho-rio-da-barra': {
  pt: {
    groups: [
      {
        title: 'Suíte Master I',
        master: '01 cama de casal, aproximadamente 36 m², banheiro privativo, ar-condicionado, enxoval completo e secador de cabelo.',
      },
      {
        title: 'Suíte Master II',
        master: '01 cama de casal, aproximadamente 36 m², banheiro privativo, ar-condicionado, enxoval completo e secador de cabelo.',
      },
      {
        title: 'Suítes',
        suites: [
          ['Suíte III', '02 camas de solteiro, aproximadamente 18 m², banheiro privativo, ar-condicionado, enxoval completo e secador de cabelo.'],
          ['Suíte IV', '02 camas de solteiro, aproximadamente 18 m², banheiro privativo, ar-condicionado, enxoval completo e secador de cabelo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 8 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Master Suite I',
        master: '01 double bed, approximately 36 m², private bathroom, air conditioning, complete bed and bath linen and hairdryer.',
      },
      {
        title: 'Master Suite II',
        master: '01 double bed, approximately 36 m², private bathroom, air conditioning, complete bed and bath linen and hairdryer.',
      },
      {
        title: 'Suites',
        suites: [
          ['Suite III', '02 twin beds, approximately 18 m², private bathroom, air conditioning, complete bed and bath linen and hairdryer.'],
          ['Suite IV', '02 twin beds, approximately 18 m², private bathroom, air conditioning, complete bed and bath linen and hairdryer.'],
        ],
      },
    ],
    footer: 'Capacity for up to 8 guests.',
  },
  },
  'casa-sol': {
  pt: { groups: [
    {
      title: 'Suíte Máster',
      master: '01 cama de casal king, sala de massagem, sala de estar, closet e banheiro com banheira.',
    },
    {
      title: 'Ala Azul',
      suites: [['Suíte 01', '01 cama de casal king e um sofá cama de solteiro.']],
    },
    {
      title: 'Bangalô 01',
      suites: [
        ['Suíte 02', '01 cama de casal king, saleta com 01 sofá cama e uma mini copa.'],
        ['Suíte 03', '01 cama de casal king.'],
        ['Suíte 04', '02 camas de solteiro e duas bicamas. (conexão com a suíte 03).'],
      ],
    },
    {
      title: 'Bangalô 02',
      suites: [
        ['Suíte 05', '01 cama de casal king.'],
        ['Suíte 06', '02 camas de viúvo.'],
        ['Suíte 07', '02 camas de viúvo.'],
        ['Suíte 08', '01 cama de casal king.'],
      ],
    },
  ] },
  en: { groups: [
    {
      title: 'Master Suite',
      master: '01 king bed, massage room, living room, walk-in closet and bathroom with bathtub.',
    },
    {
      title: 'Blue Wing',
      suites: [['Suite 01', '01 king bed and one twin sofa bed.']],
    },
    {
      title: 'Bungalow 01',
      suites: [
        ['Suite 02', '01 king bed, sitting area with 01 sofa bed and a mini kitchenette.'],
        ['Suite 03', '01 king bed.'],
        ['Suite 04', '02 twin beds and two bunk beds (connected to suite 03).'],
      ],
    },
    {
      title: 'Bungalow 02',
      suites: [
        ['Suite 05', '01 king bed.'],
        ['Suite 06', '02 wide twin beds.'],
        ['Suite 07', '02 wide twin beds.'],
        ['Suite 08', '01 king bed.'],
      ],
    },
  ] },
  },
  'casa-lua': {
  pt: {
    groups: [
      {
        title: 'Piso Superior',
        suites: [['Suíte Máster', '1 cama de casal king size, mosquiteiro, ar-condicionado, frigobar, cofre, secador de cabelo, banheira, espaço para massagem e vista para o mar.']],
      },
      {
        title: 'Piso Térreo',
        suites: [
          ['Suíte 02', '1 cama de casal king size, mosquiteiro, TV, ar-condicionado, ventilador de teto, cofre, secador de cabelo e vista para o jardim.'],
          ['Suíte 03', '1 cama de casal king size, mosquiteiro, 1 sofá-cama, ar-condicionado, cofre, secador de cabelo, minicozinha integrada e varanda com rede.'],
          ['Suíte 04', '1 cama de casal king size, mosquiteiro, 1 sofá-cama, ar-condicionado, cofre, secador de cabelo, minicozinha integrada e varanda com rede.'],
          ['Suíte 05', '1 cama de casal king size, mosquiteiro, ar-condicionado, cofre, banheira, secador de cabelo e varanda com vista para o jardim.'],
        ],
      },
    ],
    footer: 'Capacidade para até 12 hóspedes, com 5 camas king size e 2 sofás-cama.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        suites: [['Master Suite', '1 king-size bed, mosquito net, air conditioning, minibar, safe, hairdryer, bathtub, massage space and ocean view.']],
      },
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 02', '1 king-size bed, mosquito net, TV, air conditioning, ceiling fan, safe, hairdryer and garden view.'],
          ['Suite 03', '1 king-size bed, mosquito net, 1 sofa bed, air conditioning, safe, hairdryer, integrated kitchenette and balcony with hammock.'],
          ['Suite 04', '1 king-size bed, mosquito net, 1 sofa bed, air conditioning, safe, hairdryer, integrated kitchenette and balcony with hammock.'],
          ['Suite 05', '1 king-size bed, mosquito net, air conditioning, safe, bathtub, hairdryer and balcony with garden view.'],
        ],
      },
    ],
    footer: 'Capacity for up to 12 guests, with 5 king-size beds and 2 sofa beds.',
  },
  },
  'casa-joao-vieira-12': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte 01', 'Cama king size.'],
          ['Suíte 02', 'Cama queen size.'],
          ['Suíte 03', 'Duas camas de solteiro conversíveis em king size.'],
          ['Suíte 04 (bangalô de madeira)', 'Cama queen size.'],
        ],
      },
    ],
    footer: 'Capacidade para até 8 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suite 01', 'King-size bed.'],
          ['Suite 02', 'Queen-size bed.'],
          ['Suite 03', 'Two twin beds convertible into a king.'],
          ['Suite 04 (wooden bungalow)', 'Queen-size bed.'],
        ],
      },
    ],
    footer: 'Capacity for up to 8 guests.',
  },
  },
  'terravista-golf-casa-42': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suítes 01 e 02', '2 camas de solteiro cada.'],
          ['Suítes 03 e 04', '1 cama de casal cada.'],
          ['Suítes 05 e 06 (Master)', '1 cama de casal, TV e varanda.'],
          ['Suíte 07', '1 cama de casal, TV e varanda.'],
        ],
      },
    ],
    footer: 'Todas com ar-condicionado e secador de cabelo.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suites 01 and 02', '2 single beds each.'],
          ['Suites 03 and 04', '1 double bed each.'],
          ['Suites 05 and 06 (Master)', '1 double bed, TV and veranda.'],
          ['Suite 07', '1 double bed, TV and veranda.'],
        ],
      },
    ],
    footer: 'All with air conditioning and hairdryer.',
  },
  },
  'terravista-golf-casa-61': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suítes 01, 03 e 05', '2 camas de solteiro conversíveis em cama de casal.'],
          ['Suítes 02, 04 e 06', 'Cama king size.'],
        ],
      },
    ],
    footer: 'Todas com mosquiteiro, armários, ar-condicionado e secador de cabelo.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suites 01, 03 and 05', '2 single beds convertible into a double bed.'],
          ['Suites 02, 04 and 06', 'King-size bed.'],
        ],
      },
    ],
    footer: 'All with mosquito net, wardrobes, air conditioning and hairdryer.',
  },
  },
  'terravista-vilas-casa-02': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte 01', 'Cama king size, armário, TV e varanda.'],
          ['Suíte 02', 'Duas camas de solteiro conversíveis em cama de casal, armário, TV e varanda.'],
          ['Suíte 03', 'Cama king size.'],
        ],
      },
    ],
    footer: 'Todas com ar-condicionado e secador de cabelo.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suite 01', 'King-size bed, wardrobe, TV and veranda.'],
          ['Suite 02', 'Two single beds convertible into a double bed, wardrobe, TV and veranda.'],
          ['Suite 03', 'King-size bed.'],
        ],
      },
    ],
    footer: 'All with air conditioning and hairdryer.',
  },
  },
  'terravista-golf-casa-80': {
  pt: {
    groups: [
      {
        title: 'Piso Térreo',
        suites: [
          ['Suíte 01 (Master)', 'Cama king, mosquiteiro, ar-condicionado, cofre e secador.'],
          ['Suítes 02 e 03', '2 camas de solteiro conversíveis em casal cada.'],
        ],
      },
      {
        title: 'Piso Inferior',
        suites: [
          ['Suíte 04 (Master)', 'Cama king, mosquiteiro, ar-condicionado, cofre e secador.'],
          ['Suítes 05 e 06', '2 camas de solteiro conversíveis em casal cada.'],
        ],
      },
    ],
  },
  en: {
    groups: [
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 01 (Master)', 'King bed, mosquito net, air conditioning, safe and hairdryer.'],
          ['Suites 02 and 03', '2 single beds convertible into a double each.'],
        ],
      },
      {
        title: 'Lower Floor',
        suites: [
          ['Suite 04 (Master)', 'King bed, mosquito net, air conditioning, safe and hairdryer.'],
          ['Suites 05 and 06', '2 single beds convertible into a double each.'],
        ],
      },
    ],
  },
  },
  'terravista-vilas-75': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte Master 01', '2 camas king, closet e varanda com vista para o mar.'],
          ['Suíte 02', 'Cama super king, closet e varanda com vista para o jardim.'],
          ['Suítes 03 e 05', 'Cama king, closet e varanda com vista para o mar.'],
          ['Suítes 04 e 06', '2 camas de solteiro reversíveis em super king, closet e varanda com vista para o mar.'],
        ],
      },
    ],
    footer: 'Todas com mosquiteiro e ar-condicionado.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Master Suite 01', '2 king beds, walk-in closet and veranda with ocean view.'],
          ['Suite 02', 'Super king bed, closet and veranda with garden view.'],
          ['Suites 03 and 05', 'King bed, closet and veranda with ocean view.'],
          ['Suites 04 and 06', '2 single beds convertible into a super king, closet and veranda with ocean view.'],
        ],
      },
    ],
    footer: 'All with mosquito net and air conditioning.',
  },
  },
  'casa-sao-jorge-altos-do-segredo': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte Master', 'Cama king-size, varanda privativa, closet, banheiro com chuveiro duplo e máquina de café.'],
          ['Suíte 02', 'Cama king-size.'],
          ['Suíte 03', 'Cama king-size (conversível em 2 solteiro) e sofá-cama.'],
          ['Suíte 04', 'Cama king-size (conversível em 2 solteiro), sofá-cama e entrada independente.'],
          ['Suíte 05', 'Cama de casal (conversível em 2 solteiro) e entrada independente.'],
        ],
      },
    ],
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Master Suite', 'King-size bed, private veranda, walk-in closet, bathroom with double shower and coffee machine.'],
          ['Suite 02', 'King-size bed.'],
          ['Suite 03', 'King-size bed (convertible into 2 singles) and sofa bed.'],
          ['Suite 04', 'King-size bed (convertible into 2 singles), sofa bed and independent entrance.'],
          ['Suite 05', 'Double bed (convertible into 2 singles) and independent entrance.'],
        ],
      },
    ],
  },
  },
  'casa-caza-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suítes 01, 02 e 03', 'Cama king-size, closet, cofre, ar-condicionado e mosquiteiro.'],
          ['Suíte 04', 'Duas camas de solteiro reversíveis para king-size, closet, cofre, ar-condicionado e mosquiteiro.'],
          ['Suíte 05', 'Duas camas de solteiro reversíveis para king-size, cofre, ar-condicionado e mosquiteiro.'],
        ],
      },
    ],
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suites 01, 02 and 03', 'King-size bed, walk-in closet, safe, air conditioning and mosquito net.'],
          ['Suite 04', 'Two single beds convertible to king-size, walk-in closet, safe, air conditioning and mosquito net.'],
          ['Suite 05', 'Two single beds convertible to king-size, safe, air conditioning and mosquito net.'],
        ],
      },
    ],
  },
  },
  'casa-macondo': {
  pt: {
    groups: [
      {
        title: 'Casa Principal (piso superior)',
        suites: [
          ['Suíte Master 01', 'Cama king size.'],
          ['Suíte 02', '2 camas de viúva (reversíveis para casal).'],
          ['Suíte 03', '2 camas de viúva.'],
        ],
      },
      {
        title: 'Bangalôs Externos',
        suites: [
          ['Suíte 04', '2 camas de viúva.'],
          ['Suíte 05', 'Cama king size.'],
          ['Suítes 06 e 07', 'Cama king size (conjugáveis entre si).'],
        ],
      },
    ],
  },
  en: {
    groups: [
      {
        title: 'Main House (upper floor)',
        suites: [
          ['Master Suite 01', 'King-size bed.'],
          ['Suite 02', '2 wide twin beds (convertible into a double).'],
          ['Suite 03', '2 wide twin beds.'],
        ],
      },
      {
        title: 'External Bungalows',
        suites: [
          ['Suite 04', '2 wide twin beds.'],
          ['Suite 05', 'King-size bed.'],
          ['Suites 06 and 07', 'King-size bed (connectable).'],
        ],
      },
    ],
  },
  },
  'aldeia-itapororoca-casa-11': {
  pt: {
    groups: [
      {
        title: 'Piso Superior',
        suites: [
          ['Suíte Master', '1 cama king-size, mosquiteiro, closet, ar-condicionado, TV, banheira e secador de cabelo.'],
          ['Suíte 02', '1 cama king-size, mosquiteiro, ar-condicionado e secador de cabelo.'],
          ['Suíte 03', '2 camas de solteiro conversíveis em cama de casal, mosquiteiro e ar-condicionado.'],
          ['Suíte 04', '2 camas de solteiro conversíveis em cama de casal, mosquiteiro e ar-condicionado.'],
        ],
      },
      {
        title: 'Piso Térreo',
        suites: [
          ['Suíte 05', '2 camas de solteiro conversíveis em cama de casal, 1 sofá-cama, mosquiteiro e ar-condicionado.'],
          ['Suíte 06', '1 cama king-size, 1 sofá-cama de solteiro com bicama, mosquiteiro, closet e ar-condicionado.'],
          ['Suíte 07', '1 cama king-size, mosquiteiro, ar-condicionado e banheira.'],
        ],
      },
    ],
    footer: 'Capacidade para até 14 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        suites: [
          ['Master Suite', '1 king-size bed, mosquito net, walk-in closet, air conditioning, TV, bathtub and hairdryer.'],
          ['Suite 02', '1 king-size bed, mosquito net, air conditioning and hairdryer.'],
          ['Suite 03', '2 twin beds convertible into a double, mosquito net and air conditioning.'],
          ['Suite 04', '2 twin beds convertible into a double, mosquito net and air conditioning.'],
        ],
      },
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 05', '2 twin beds convertible into a double, 1 sofa bed, mosquito net and air conditioning.'],
          ['Suite 06', '1 king-size bed, 1 twin sofa bed with trundle, mosquito net, walk-in closet and air conditioning.'],
          ['Suite 07', '1 king-size bed, mosquito net, air conditioning and bathtub.'],
        ],
      },
    ],
    footer: 'Capacity for up to 14 guests.',
  },
  },
  'casa-aroeira-itapororoca': {
  pt: {
    groups: [
      {
        title: 'Piso Superior',
        suites: [
          ['Suíte 01 (Master)', '1 cama de casal king size, ar-condicionado, mosquiteiro, closet, secador de cabelo e varanda com vista para o mar.'],
          ['Suíte 02', '1 cama de casal king size, ar-condicionado, mosquiteiro, closet, secador de cabelo e varanda com vista para o mar.'],
        ],
      },
      {
        title: 'Piso Térreo',
        suites: [
          ['Suíte 03', '2 camas de solteiro, ar-condicionado, mosquiteiro, closet, secador de cabelo e vista para o jardim.'],
          ['Suíte 04', '1 cama de casal king size, ar-condicionado, closet, secador de cabelo e vista para o jardim.'],
          ['Suíte 05', '2 camas de solteiro, ar-condicionado, closet, secador de cabelo e vista para o jardim.'],
          ['Suíte 06', '1 cama de casal king size, ar-condicionado, mosquiteiro, closet, secador de cabelo e vista para o jardim.'],
        ],
      },
    ],
    footer: 'Capacidade para até 12 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        suites: [
          ['Suite 01 (Master)', '1 king-size bed, air conditioning, mosquito net, walk-in closet, hairdryer and veranda with ocean view.'],
          ['Suite 02', '1 king-size bed, air conditioning, mosquito net, walk-in closet, hairdryer and veranda with ocean view.'],
        ],
      },
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 03', '2 twin beds, air conditioning, mosquito net, closet, hairdryer and garden view.'],
          ['Suite 04', '1 king-size bed, air conditioning, closet, hairdryer and garden view.'],
          ['Suite 05', '2 twin beds, air conditioning, closet, hairdryer and garden view.'],
          ['Suite 06', '1 king-size bed, air conditioning, mosquito net, closet, hairdryer and garden view.'],
        ],
      },
    ],
    footer: 'Capacity for up to 12 guests.',
  },
  },
  'casa-muxarabi-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: '',
        master: 'Suíte Master: 1 cama king, closet, banheira, TV, ar-condicionado e secador de cabelo.',
      },
      {
        title: '',
        suites: [
          ['Suítes 02 a 05', '2 camas de solteiro reversíveis para casal, ar-condicionado e secador de cabelo.'],
          ['Suíte 06', '3 camas de solteiro, ar-condicionado e secador de cabelo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 13 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        master: 'Master Suite: 1 king bed, walk-in closet, bathtub, TV, air conditioning and hairdryer.',
      },
      {
        title: '',
        suites: [
          ['Suites 02 to 05', '2 twin beds convertible into a double, air conditioning and hairdryer.'],
          ['Suite 06', '3 twin beds, air conditioning and hairdryer.'],
        ],
      },
    ],
    footer: 'Capacity for up to 13 guests.',
  },
  },
  'casa-coqueiral-5': {
  pt: {
    groups: [
      {
        title: '',
        suites: [
          ['Suíte 01', '1 cama de casal extragrande, 1 cama de solteiro, ar-condicionado e banheiro privativo.'],
          ['Suíte 02', '1 cama de casal extragrande, 1 cama de solteiro, ar-condicionado e banheiro privativo.'],
          ['Suíte 03', '1 cama de casal extragrande, 1 cama de solteiro, ar-condicionado e banheiro privativo.'],
          ['Suíte 04', '1 cama de casal extragrande, 1 cama de solteiro, ar-condicionado e banheiro privativo.'],
          ['Suíte 05', '1 cama de casal extragrande, ar-condicionado e banheiro privativo.'],
        ],
      },
    ],
    footer: 'Capacidade para até 14 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        suites: [
          ['Suite 01', '1 extra-large double bed, 1 twin bed, air conditioning and private bathroom.'],
          ['Suite 02', '1 extra-large double bed, 1 twin bed, air conditioning and private bathroom.'],
          ['Suite 03', '1 extra-large double bed, 1 twin bed, air conditioning and private bathroom.'],
          ['Suite 04', '1 extra-large double bed, 1 twin bed, air conditioning and private bathroom.'],
          ['Suite 05', '1 extra-large double bed, air conditioning and private bathroom.'],
        ],
      },
    ],
    footer: 'Capacity for up to 14 guests.',
  },
  },
  'casa-noa-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: 'Residência Principal',
        suites: [
          ['Suíte 01 (piso superior)', '1 cama king, mosquiteiro, secador de cabelo e ar-condicionado.'],
          ['Suíte 02 (piso térreo)', '2 camas de solteiro conversíveis em cama king, secador de cabelo e ar-condicionado.'],
        ],
      },
      {
        title: 'Bangalô Independente',
        suites: [
          ['Suíte 03', '1 cama king, mosquiteiro, frigobar, varanda para o jardim, secador de cabelo e ar-condicionado.'],
        ],
      },
    ],
    footer: 'Capacidade para até 6 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Main Residence',
        suites: [
          ['Suite 01 (upper floor)', '1 king bed, mosquito net, hairdryer and air conditioning.'],
          ['Suite 02 (ground floor)', '2 twin beds convertible into a king bed, hairdryer and air conditioning.'],
        ],
      },
      {
        title: 'Independent Bungalow',
        suites: [
          ['Suite 03', '1 king bed, mosquito net, minibar, veranda overlooking the garden, hairdryer and air conditioning.'],
        ],
      },
    ],
    footer: 'Capacity for up to 6 guests.',
  },
  },
  'casa-do-bosque': {
  pt: {
    groups: [
      {
        title: 'Casa Principal — Piso Superior',
        master: 'Suíte Master: 1 cama de casal king size, mosquiteiro, closet, cofre, ventilador de teto e ar-condicionado.',
      },
      {
        title: '',
        suites: [
          ['Suíte 02', '1 cama de casal king size, 1 cama de solteiro, mosquiteiro, closet, cofre e ar-condicionado.'],
          ['Suíte 03', '1 cama de casal king size, mosquiteiro, closet, cofre e ar-condicionado.'],
          ['Suíte 04', '1 cama de casal king size, mosquiteiro, closet, cofre e ar-condicionado.'],
        ],
      },
      {
        title: 'Bangalôs Externos',
        suites: [
          ['Suíte 05', '1 cama de casal king size, mosquiteiro, closet, cofre, banheira e ar-condicionado.'],
          ['Suíte 06', '1 cama de casal king size, mosquiteiro, closet, cofre, banheira e ar-condicionado.'],
        ],
      },
    ],
    footer: 'Capacidade para até 13 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Main House — Upper Floor',
        master: 'Master Suite: 1 king-size double bed, mosquito net, walk-in closet, safe, ceiling fan and air conditioning.',
      },
      {
        title: '',
        suites: [
          ['Suite 02', '1 king-size double bed, 1 twin bed, mosquito net, walk-in closet, safe and air conditioning.'],
          ['Suite 03', '1 king-size double bed, mosquito net, walk-in closet, safe and air conditioning.'],
          ['Suite 04', '1 king-size double bed, mosquito net, walk-in closet, safe and air conditioning.'],
        ],
      },
      {
        title: 'External Bungalows',
        suites: [
          ['Suite 05', '1 king-size double bed, mosquito net, walk-in closet, safe, bathtub and air conditioning.'],
          ['Suite 06', '1 king-size double bed, mosquito net, walk-in closet, safe, bathtub and air conditioning.'],
        ],
      },
    ],
    footer: 'Capacity for up to 13 guests.',
  },
  },
  'vilas-altos-de-trancoso-casa-16': {
  pt: {
    groups: [
      {
        title: 'Piso Superior',
        suites: [
          ['Suíte 01', '1 cama king size, ar-condicionado, secador de cabelo e TV.'],
          ['Suíte 02', '2 camas de solteiro, conversíveis em 1 cama king size, 1 sofá-cama, ar-condicionado, secador de cabelo e TV.'],
          ['Suíte 03', '2 camas de solteiro, conversíveis em 1 cama king size, 1 sofá-cama, ar-condicionado, secador de cabelo e TV.'],
        ],
      },
    ],
    footer: 'Capacidade para até 6 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        suites: [
          ['Suite 01', '1 king-size bed, air conditioning, hairdryer and TV.'],
          ['Suite 02', '2 twin beds, convertible into 1 king-size bed, 1 sofa bed, air conditioning, hairdryer and TV.'],
          ['Suite 03', '2 twin beds, convertible into 1 king-size bed, 1 sofa bed, air conditioning, hairdryer and TV.'],
        ],
      },
    ],
    footer: 'Capacity for up to 6 guests.',
  },
  },
  'casa-selva-altos-de-patimirim': {
  pt: {
    groups: [
      {
        title: 'Piso Superior',
        master: 'Suíte Master: 1 cama de casal king size, ar-condicionado, TV, secador de cabelo, closet e varanda com vista para o mar.',
      },
      {
        title: 'Piso Térreo',
        suites: [
          ['Suíte 02', '1 cama de casal king size, ar-condicionado, secador de cabelo, closet e varanda.'],
          ['Suíte 03', '2 camas de solteiro que podem ser convertidas em 1 cama de casal, ar-condicionado, secador de cabelo, closet e varanda.'],
          ['Suíte 04', '1 cama de casal king size, ar-condicionado, secador de cabelo, closet e varanda.'],
          ['Suíte 05', '1 cama de casal king size, ar-condicionado, secador de cabelo, closet e varanda.'],
          ['Suíte 06', '3 camas de solteiro, ar-condicionado, secador de cabelo, closet e varanda.'],
          ['Suíte 07', '1 cama de casal king size, ar-condicionado, secador de cabelo, closet e varanda.'],
        ],
      },
    ],
    footer: 'Capacidade para até 15 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Upper Floor',
        master: 'Master Suite: 1 king-size double bed, air conditioning, TV, hairdryer, walk-in closet and veranda overlooking the sea.',
      },
      {
        title: 'Ground Floor',
        suites: [
          ['Suite 02', '1 king-size double bed, air conditioning, hairdryer, walk-in closet and veranda.'],
          ['Suite 03', '2 twin beds that can be converted into 1 double bed, air conditioning, hairdryer, walk-in closet and veranda.'],
          ['Suite 04', '1 king-size double bed, air conditioning, hairdryer, walk-in closet and veranda.'],
          ['Suite 05', '1 king-size double bed, air conditioning, hairdryer, walk-in closet and veranda.'],
          ['Suite 06', '3 twin beds, air conditioning, hairdryer, walk-in closet and veranda.'],
          ['Suite 07', '1 king-size double bed, air conditioning, hairdryer, walk-in closet and veranda.'],
        ],
      },
    ],
    footer: 'Capacity for up to 15 guests.',
  },
  },
  'casa-da-ponta-03': {
  pt: {
    groups: [
      {
        title: 'Bangalô Praia',
        suites: [
          ['Suíte 01', '1 cama king size, ar-condicionado, closet, mosquiteiro, secador de cabelo, deck com espreguiçadeira, rede de descanso e vista para o jardim de vegetação nativa e para o mar.'],
        ],
      },
      {
        title: 'Bangalô Jardim',
        suites: [
          ['Suíte 02', '2 camas de solteiro, conversíveis em 1 cama king size, ar-condicionado, closet, mosquiteiro, secador de cabelo, varanda e integração com o jardim de vegetação nativa.'],
        ],
      },
      {
        title: 'Bloco Master',
        suites: [
          ['Suíte 03', '1 cama king size, ar-condicionado, closet, mosquiteiro, secador de cabelo e varanda com vista para a vegetação nativa.'],
          ['Suíte 04', '2 camas de viúva, ar-condicionado, closet, mosquiteiro, secador de cabelo e varanda com vista para o jardim de vegetação nativa.'],
        ],
      },
      {
        title: 'Piso Superior',
        suites: [
          ['Suíte 05', '1 cama king size, ar-condicionado, closet, mosquiteiro, ventilador e varanda com vista para o jardim de vegetação nativa.'],
          ['Suíte 06', '2 camas de solteiro, conversíveis em 1 cama king size, ar-condicionado, closet, mosquiteiro e varanda com vista para o jardim de vegetação nativa.'],
        ],
      },
    ],
    footer: 'Capacidade para até 12 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Beach Bungalow',
        suites: [
          ['Suite 01', '1 king-size bed, air conditioning, walk-in closet, mosquito net, hairdryer, deck with sun lounger, hammock and views of the native vegetation garden and the sea.'],
        ],
      },
      {
        title: 'Garden Bungalow',
        suites: [
          ['Suite 02', '2 twin beds, convertible into 1 king-size bed, air conditioning, walk-in closet, mosquito net, hairdryer, veranda and integration with the native vegetation garden.'],
        ],
      },
      {
        title: 'Master Wing',
        suites: [
          ['Suite 03', '1 king-size bed, air conditioning, walk-in closet, mosquito net, hairdryer and veranda overlooking the native vegetation.'],
          ['Suite 04', '2 wide twin beds, air conditioning, walk-in closet, mosquito net, hairdryer and veranda overlooking the native vegetation garden.'],
        ],
      },
      {
        title: 'Upper Floor',
        suites: [
          ['Suite 05', '1 king-size bed, air conditioning, walk-in closet, mosquito net, ceiling fan and veranda overlooking the native vegetation garden.'],
          ['Suite 06', '2 twin beds, convertible into 1 king-size bed, air conditioning, walk-in closet, mosquito net and veranda overlooking the native vegetation garden.'],
        ],
      },
    ],
    footer: 'Capacity for up to 12 guests.',
  },
  },
  'estancia-fasano-10': {
  pt: {
    groups: [
      {
        title: 'Piso Térreo',
        master: 'Suíte 01 — Master: 01 cama king size, ar-condicionado, closet, cofre digital, frigobar, máquina de café Nespresso, TV, banheiro privativo com banheira, secador de cabelo, roupões de banho e vista para o mar.',
      },
      {
        title: '',
        suites: [
          ['Suíte 02', '01 cama king size, ar-condicionado, cofre digital, frigobar, TV, secador de cabelo, roupões de banho e vista para o mar.'],
          ['Suíte 03', '02 camas de solteiro, conversíveis em 01 cama king size, ar-condicionado, cofre digital, frigobar, TV, secador de cabelo, roupões de banho e vista para o mar.'],
        ],
      },
      {
        title: 'Piso Superior',
        master: 'Suíte 04 — Master: 01 cama king size, ar-condicionado, closet, cofre digital, frigobar, máquina de café Nespresso, sofá, TV, banheiro privativo com banheira, secador de cabelo, roupões de banho e terraço com vista para o mar.',
      },
      {
        title: '',
        suites: [
          ['Suíte 05', '02 camas de solteiro, conversíveis em 01 cama king size, ar-condicionado, cofre digital, frigobar, TV, secador de cabelo, roupões de banho e vista para o mar.'],
          ['Suíte 06', '01 cama king size, ar-condicionado, cofre digital, frigobar, máquina de café Nespresso, TV, secador de cabelo, roupões de banho e vista para o mar.'],
          ['Suíte 07', '01 cama king size, ar-condicionado, cofre digital, frigobar, máquina de café Nespresso, TV, secador de cabelo, roupões de banho, terraço e vista para o mar.'],
        ],
      },
    ],
    footer: 'Capacidade para até 14 hóspedes.',
  },
  en: {
    groups: [
      {
        title: 'Ground Floor',
        master: 'Suite 01 — Master: 01 king-size bed, air conditioning, walk-in closet, digital safe, minibar, Nespresso coffee machine, TV, private bathroom with bathtub, hairdryer, bathrobes and ocean view.',
      },
      {
        title: '',
        suites: [
          ['Suite 02', '01 king-size bed, air conditioning, digital safe, minibar, TV, hairdryer, bathrobes and ocean view.'],
          ['Suite 03', '02 twin beds, convertible into 01 king-size bed, air conditioning, digital safe, minibar, TV, hairdryer, bathrobes and ocean view.'],
        ],
      },
      {
        title: 'Upper Floor',
        master: 'Suite 04 — Master: 01 king-size bed, air conditioning, walk-in closet, digital safe, minibar, Nespresso coffee machine, sofa, TV, private bathroom with bathtub, hairdryer, bathrobes and terrace with ocean view.',
      },
      {
        title: '',
        suites: [
          ['Suite 05', '02 twin beds, convertible into 01 king-size bed, air conditioning, digital safe, minibar, TV, hairdryer, bathrobes and ocean view.'],
          ['Suite 06', '01 king-size bed, air conditioning, digital safe, minibar, Nespresso coffee machine, TV, hairdryer, bathrobes and ocean view.'],
          ['Suite 07', '01 king-size bed, air conditioning, digital safe, minibar, Nespresso coffee machine, TV, hairdryer, bathrobes, terrace and ocean view.'],
        ],
      },
    ],
    footer: 'Capacity for up to 14 guests.',
  },
  },
  'casa-casadei-altos-de-trancoso': {
  pt: {
    groups: [
      {
        title: '',
        master: 'Suíte Master: 1 cama king, varanda privativa e spa.',
      },
      {
        title: '',
        suites: [
          ['Suíte Piscina', '1 cama queen + 1 cama de solteiro.'],
          ['Suíte Varanda 01', '1 cama queen + 1 cama de solteiro.'],
          ['Suíte Varanda 02', '2 camas de solteiro unidas + 1 cama de solteiro.'],
          ['Suíte Superior', '1 cama king com varanda.'],
        ],
      },
    ],
    footer: 'Capacidade para até 13 hóspedes.',
  },
  en: {
    groups: [
      {
        title: '',
        master: 'Master Suite: 1 king bed, private veranda and spa.',
      },
      {
        title: '',
        suites: [
          ['Pool Suite', '1 queen bed + 1 twin bed.'],
          ['Veranda Suite 01', '1 queen bed + 1 twin bed.'],
          ['Veranda Suite 02', '2 twin beds pushed together + 1 twin bed.'],
          ['Upper Suite', '1 king bed with veranda.'],
        ],
      },
    ],
    footer: 'Capacity for up to 13 guests.',
  },
  },
};

function Item({ title, open, onToggle, emph = false, children }: { title: string; open: boolean; onToggle: () => void; emph?: boolean; children: ReactNode }) {
  return (
    <div className={`border ${emph ? 'border-[#b08d57]/60' : 'border-[#b08d57]/35'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-6 px-6 md:px-7 text-left transition-colors hover:bg-[#b08d57]/5 ${emph ? 'py-4' : 'py-3 md:py-4'}`}
      >
        <span className={emph
          ? 'font-serif-e text-lg md:text-[1.15rem] font-semibold tracking-wide text-ink'
          : 'font-serif-e text-lg md:text-xl font-normal tracking-wide text-green-e'
        }>{title}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 flex items-center leading-none transition-transform duration-200 ${open ? 'rotate-180' : ''} ${emph ? 'text-ink text-xs' : 'text-green-e/60 text-[10px]'}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`grid transition-all duration-[225ms] ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className={`px-6 md:px-7 ${emph ? 'pb-6' : 'pb-5'}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Especificacoes({ p }: { p: Property }) {
  const { t, lang } = useLang();
  // Novo padrão de Especificações aprovado — aplicado a todas as casas.
  const emph = true;
  const l = LABELS[lang === 'pt' ? 'pt' : 'en'];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx(cur => (cur === i ? null : i));

  const extraNotes = p.notes ? txt(p.notes, lang).filter(n => !DROP_NOTE.test(n)) : [];
  const amenitiesList = [...txt(p.amenities, lang), ...extraNotes];

  const suitePar = txt(p.description, lang).split('\n\n').find(par => SUITE_PAR.test(par));
  const suitesText =
    suitePar ??
    (lang === 'pt'
      ? `${p.suites} suítes · até ${p.guests} hóspedes · ${p.baths} banheiros.`
      : `${p.suites} suites · up to ${p.guests} guests · ${p.baths} bathrooms.`);
  const suitesData = emph ? SUITES_BY_ID[p.id]?.[lang === 'pt' ? 'pt' : 'en'] : undefined;

  const staffList = p.staff ? txt(p.staff, lang) : [...t.imovel.includedList];

  const locationText =
    lang === 'pt'
      ? `${p.location}, Trancoso — Bahia, Brasil.`
      : `${p.location}, Trancoso — Bahia, Brazil.`;
  const lot = GOLF_LOTS[p.id];
  const mapUrl = p.locationDetail
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${txt(p.locationDetail, lang)} — ${p.location}, Trancoso, Bahia, Brasil`)}`
    : null;

  return (
    <section className="mt-12" aria-label={l.title}>
      <h2 className="font-serif-e text-3xl md:text-4xl text-green-e text-center">{l.title}</h2>
      {emph ? (
        <div className="mt-2 mb-9" aria-hidden="true" />
      ) : (
        <div className="flex items-center justify-center gap-4 mt-4 mb-8" aria-hidden="true">
          <span className="h-px w-16 bg-[#b08d57]/70" />
          <span className="text-[#b08d57] text-sm leading-none">❁</span>
          <span className="h-px w-16 bg-[#b08d57]/70" />
        </div>
      )}
      <div className={`mx-auto ${emph ? 'space-y-4 md:max-w-[800px]' : 'space-y-3 md:w-[64%]'}`}>
        <Item title={l.amenities} open={openIdx === 0} onToggle={() => toggle(0)} emph={emph}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {amenitiesList.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                {a}
              </li>
            ))}
          </ul>
        </Item>
        <Item title={l.suites} open={openIdx === 1} onToggle={() => toggle(1)} emph={emph}>
          {emph ? (
            suitesData ? (
              <div className="space-y-6 pt-1">
                {suitesData.groups.map((g, i) => (
                  <div key={i}>
                    {g.title && (
                      <h4 className="font-serif-e text-base md:text-lg font-semibold text-ink">{g.title}</h4>
                    )}
                    {g.master ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{g.master}</p>
                    ) : (
                      <div className="mt-1.5 space-y-1.5">
                        {g.suites!.map(([nome, desc], j) => (
                          <p key={j} className="text-sm leading-relaxed text-ink/90">
                            <strong className="font-semibold text-ink">{nome}:</strong> {desc}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {suitesData.footer && (
                  <p className="text-sm leading-relaxed text-ink/90 pt-1">{suitesData.footer}</p>
                )}
              </div>
            ) : (
              <p className="text-sm leading-relaxed text-ink/90 pt-1">{suitesText}</p>
            )
          ) : (
            <p className="text-ink text-sm leading-relaxed">{suitesText}</p>
          )}
        </Item>
        <Item title={l.staff} open={openIdx === 2} onToggle={() => toggle(2)} emph={emph}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {staffList.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                <span className="w-1.5 h-1.5 bg-green-e rounded-full shrink-0 mt-1.5" />
                {s}
              </li>
            ))}
          </ul>
        </Item>
        <Item title={l.location} open={openIdx === 3} onToggle={() => toggle(3)} emph={emph}>
          <p className="text-ink text-sm leading-relaxed">
            {locationText}
            {lot ? ` ${lot.lot}.` : ''}
            {p.locationDetail ? ` ${txt(p.locationDetail, lang)}.` : ''}
          </p>
          {mapUrl && !emph && (
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-sm text-green-e underline underline-offset-4 decoration-[#b08d57] hover:text-gold transition-colors"
            >
              {l.map}
            </a>
          )}
        </Item>
      </div>
    </section>
  );
}
