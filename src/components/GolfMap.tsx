import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { GOLF_MAP } from '../data/golflots';

function Pin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <span className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${x}%`, top: `${y}%` }}>
      <span className="relative flex flex-col items-center">
        <span className="bg-[#b08d57] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
          {label}
        </span>
        <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#b08d57]" />
        <span className="absolute -bottom-1.5 w-2.5 h-2.5 bg-[#b08d57] rounded-full border border-white" />
      </span>
    </span>
  );
}

export function GolfMap({ lot, lang }: { lot: { lot: string; x: number; y: number }; lang: 'pt' | 'en' | 'es' }) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const touch = useRef<{ d: number; s: number; x: number; y: number; px: number; py: number } | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    // abre já com zoom 2x centrado no lote
    const s = 2;
    setScale(s);
    requestAnimationFrame(() => {
      const el = wrap.current;
      if (!el) return;
      const cw = el.clientWidth, ch = el.clientHeight;
      const imgH = cw * (1024 / 1536);
      setPos({ x: cw / 2 - (lot.x / 100) * cw * s, y: ch / 2 - (lot.y / 100) * imgH * s });
    });
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, lot]);

  const dist = (t: React.TouchEvent) => {
    const [a, b] = [t.touches[0], t.touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      touch.current = { d: dist(e), s: scale, x: pos.x, y: pos.y, px: (e.touches[0].clientX + e.touches[1].clientX) / 2, py: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
    } else if (e.touches.length === 1) {
      touch.current = { d: 0, s: scale, x: pos.x, y: pos.y, px: e.touches[0].clientX, py: e.touches[0].clientY };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touch.current) return;
    e.preventDefault();
    if (e.touches.length === 2 && touch.current.d > 0) {
      const ns = Math.min(6, Math.max(1, touch.current.s * (dist(e) / touch.current.d)));
      setScale(ns);
    } else if (e.touches.length === 1 && touch.current.d === 0) {
      setPos({ x: touch.current.x + (e.touches[0].clientX - touch.current.px), y: touch.current.y + (e.touches[0].clientY - touch.current.py) });
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(s => Math.min(6, Math.max(1, s * (e.deltaY < 0 ? 1.15 : 0.87))));
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="relative block w-full cursor-zoom-in" aria-label={lang === 'pt' ? 'Abrir mapa em tela cheia' : 'Open map fullscreen'}>
        <img draggable={false} src={GOLF_MAP} alt="Mapa do condomínio Terravista Golf" loading="lazy" decoding="async" className="w-full" />
        <Pin x={lot.x} y={lot.y} label={`${lang === 'pt' ? 'Lote' : 'Lot'} ${lot.lot}`} />
      </button>

      {open && createPortal(
        <div className="fixed inset-0 flex flex-col" role="dialog" aria-modal="true" style={{ zIndex: 80, backgroundColor: 'rgba(24, 43, 35, 1)' }}>
          <div className="flex items-center justify-between px-5 py-4 shrink-0">
            <p className="text-ivory/80 text-sm">
              {lang === 'pt' ? `Terravista Golf — Lote ${lot.lot} destacado. Use pinça para ampliar.` : `Terravista Golf — Lot ${lot.lot} highlighted. Pinch to zoom.`}
            </p>
            <button onClick={() => setOpen(false)} aria-label="Fechar" className="text-ivory/80 hover:text-ivory p-1.5"><X size={22} /></button>
          </div>
          <div ref={wrap} className="flex-1 overflow-hidden touch-none relative"
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onWheel={onWheel}
            onDoubleClick={() => { setScale(s => (s > 1.5 ? 1 : 3)); if (scale > 1.5) setPos({ x: 0, y: 0 }); }}>
            <div className="absolute origin-top-left" style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, width: '100%' }}>
              <img draggable={false} src={GOLF_MAP} alt="" className="w-full select-none" />
              <Pin x={lot.x} y={lot.y} label={`${lang === 'pt' ? 'Lote' : 'Lot'} ${lot.lot}`} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
