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
