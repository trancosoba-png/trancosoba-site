// Bloco editorial de parceria (Luara Lopes · Pé na Areia Assessoria),
// inserido no artigo de casamentos pelo marcador :::parceria-luara
// (ver GuiaArtigo.tsx). Textos vêm do dicionário i18n (t.guia.partner*),
// então o bloco acompanha o idioma do site independentemente da tradução
// do artigo em si. Versão enxuta: retrato pequeno ao lado do texto em
// qualquer viewport (nada de foto grande no topo do mobile).
import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';

const WA_NUMBER = '5573988088809';

export default function GuiaParceria() {
  const { t } = useLang();
  const g = t.guia;
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(g.partnerWa)}`;
  return (
    <aside className="my-10 md:my-12 border border-green-e/15 bg-white/70 px-6 py-7 md:px-9 md:py-9">
      <div className="flex items-start gap-5 md:gap-8">
        <div className="relative w-24 md:w-36 flex-none overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
          <img src="/img/guia/luara-lopes.webp"
            srcSet="/img/guia/luara-lopes-400.webp 400w, /img/guia/luara-lopes-800.webp 800w"
            sizes="(min-width: 768px) 144px, 96px"
            alt={g.partnerPhotoAlt} loading="lazy" decoding="async" draggable={false}
            width={800} height={1067}
            className="w-full aspect-[3/4] object-cover object-top" />
          <span className="photo-shield" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <div className="h-px w-10 bg-gold/70" aria-hidden="true" />
          <p className="mt-4 eyebrow text-green-e/50">{g.partnerEyebrow}</p>
          <p className="mt-1.5 font-serif-e text-xl md:text-2xl text-green-e leading-snug">
            Luara Lopes <span className="text-ink/45 text-base md:text-lg">· {g.partnerRole}</span>
          </p>
          <div className="mt-3 space-y-3 text-[14px] md:text-[15px] text-ink/65 leading-relaxed">
            <p>{g.partnerP1}</p>
            <p>{g.partnerP2}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-green-e/10 pt-5">
        <p className="mb-3 text-[11px] tracking-[0.14em] uppercase text-ink/55">
          Luara Lopes · {g.partnerRole}
        </p>
        <a href={waHref} target="_blank" rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] tracking-[0.14em] uppercase bg-green-e text-ivory hover:bg-green-e/90 transition-colors">
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          {g.partnerWhats}
        </a>
      </div>
    </aside>
  );
}
