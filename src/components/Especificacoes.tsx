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

function Item({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div className="border border-[#b08d57]/35">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-4 md:py-5 text-left transition-colors hover:bg-[#b08d57]/5"
      >
        <span className="font-serif-e text-lg md:text-xl font-normal tracking-wide text-green-e/90">{title}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-green-e/60 text-[10px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Especificacoes({ p }: { p: Property }) {
  const { t, lang } = useLang();
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
    <section className="mt-14" aria-label={l.title}>
      <h2 className="font-serif-e text-3xl md:text-4xl text-green-e text-center">{l.title}</h2>
      <div className="flex items-center justify-center gap-4 mt-4 mb-8" aria-hidden="true">
        <span className="h-px w-16 bg-[#b08d57]/70" />
        <span className="text-[#b08d57] text-sm leading-none">❁</span>
        <span className="h-px w-16 bg-[#b08d57]/70" />
      </div>
      <div className="space-y-3 max-w-3xl mx-auto">
        <Item title={l.amenities} open={openIdx === 0} onToggle={() => toggle(0)}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {amenitiesList.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                {a}
              </li>
            ))}
          </ul>
        </Item>
        <Item title={l.suites} open={openIdx === 1} onToggle={() => toggle(1)}>
          <p className="text-ink/70 text-sm leading-relaxed">{suitesText}</p>
        </Item>
        <Item title={l.staff} open={openIdx === 2} onToggle={() => toggle(2)}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {staffList.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed">
                <span className="w-1.5 h-1.5 bg-green-e rounded-full shrink-0 mt-1.5" />
                {s}
              </li>
            ))}
          </ul>
        </Item>
        <Item title={l.location} open={openIdx === 3} onToggle={() => toggle(3)}>
          <p className="text-ink/70 text-sm leading-relaxed">
            {locationText}
            {lot ? ` ${lot.lot}.` : ''}
            {p.locationDetail ? ` ${txt(p.locationDetail, lang)}.` : ''}
          </p>
          {mapUrl && (
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
