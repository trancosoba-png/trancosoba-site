// Bloco editorial de parceria (Luara Lopes · Pé na Areia Assessoria),
// inserido no artigo de casamentos pelo marcador :::parceria-luara
// (ver GuiaArtigo.tsx). Textos vêm do dicionário i18n (t.guia.partner*),
// então o bloco acompanha o idioma do site independentemente da tradução
// do artigo em si.
import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';

const WA_NUMBER = '5573988088809';

export default function GuiaParceria() {
  const { t } = useLang();
  const g = t.guia;
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(g.partnerWa)}`;
  return (
    <aside className="my-12 md:my-16 border border-green-e/15 bg-white/70">
      <div className="grid md:grid-cols-[260px,1fr] lg:grid-cols-[300px,1fr]">
        <div className="relative overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
          <img src="/img/guia/luara-lopes.webp"
            srcSet="/img/guia/luara-lopes-400.webp 400w, /img/guia/luara-lopes-800.webp 800w"
            sizes="(min-width: 768px) 300px, 100vw"
            alt={g.partnerPhotoAlt} loading="lazy" decoding="async" draggable={false}
            width={800} height={1067}
            className="h-64 w-full object-cover object-top md:h-full md:absolute md:inset-0" />
          <span className="photo-shield" aria-hidden="true" />
        </div>
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="h-px w-10 bg-gold/70" aria-hidden="true" />
          <p className="mt-5 eyebrow text-green-e/50">{g.partnerEyebrow}</p>
          <p className="mt-2 font-serif-e text-2xl md:text-[28px] text-green-e leading-snug">
            Luara Lopes <span className="text-ink/45 text-lg md:text-xl">· {g.partnerRole}</span>
          </p>
          <div className="mt-4 space-y-3.5 text-[15px] text-ink/65 leading-relaxed">
            <p>{g.partnerP1}</p>
            <p>{g.partnerP2}</p>
            <p>{g.partnerP3}</p>
            <p>{g.partnerP4}</p>
            <p className="italic">{g.partnerP5}</p>
          </div>
          <div className="mt-7">
            <p className="mb-3 text-[12px] tracking-[0.14em] uppercase text-ink/55">
              Luara Lopes · {g.partnerRole}
            </p>
            <a href={waHref} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] tracking-[0.14em] uppercase bg-green-e text-ivory hover:bg-green-e/90 transition-colors">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              {g.partnerWhats}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
