// Bloco de CTA contextual dos artigos do Guia — discreto, na identidade
// TrancosoBA (sem cara de banner): hairline dourada, serifada, dois caminhos
// (catálogo filtrado / WhatsApp contextual). Os dados vêm de
// src/data/guia-cta.ts; a posição no artigo é decidida por GuiaArtigo.tsx.
import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import type { GuiaCtaData } from '../data/guia-cta';

export default function GuiaCta({ cta, variant = 'full' }: { cta: GuiaCtaData; variant?: 'full' | 'whats' }) {
  return (
    <aside className="my-10 md:my-12 border border-green-e/15 bg-white/70 px-6 py-8 md:px-10 md:py-10">
      <div className="h-px w-10 bg-gold/70" aria-hidden="true" />
      <p className="mt-5 font-serif-e text-2xl md:text-[28px] text-green-e leading-snug">{cta.title}</p>
      <p className="mt-3 text-[15px] text-ink/65 leading-relaxed max-w-xl">{cta.text}</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        {variant === 'full' && (
          <Link to={cta.housesHref}
            className="inline-flex items-center justify-center px-6 py-3 text-[12px] tracking-[0.14em] uppercase border border-green-e/40 text-green-e hover:bg-green-e hover:text-ivory transition-colors">
            {cta.housesLabel}
          </Link>
        )}
        <a href={cta.whatsHref} target="_blank" rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] tracking-[0.14em] uppercase bg-green-e text-ivory hover:bg-green-e/90 transition-colors">
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          {cta.whatsLabel}
        </a>
      </div>
    </aside>
  );
}
