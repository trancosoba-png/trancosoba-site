// Conversão BRL → USD para a versão em inglês do site.
// Cotação buscada 1x/dia em API gratuita; se falhar, usa a taxa de reserva abaixo.

export const FX_FALLBACK_BRL_PER_USD = 5.60; // taxa de reserva — atualizar manualmente se necessário

const FX_API = 'https://open.er-api.com/v6/latest/BRL';
const CACHE_KEY = 'trancosoba-fx-v1';

export async function getBrlPerUsd(): Promise<number> {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'null');
    if (cached?.day === today && cached?.rate > 0) return cached.rate;
  } catch { /* ignora */ }
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(FX_API, { signal: ctrl.signal });
    clearTimeout(timer);
    const json = await res.json();
    const usdRate = json?.rates?.USD;
    if (typeof usdRate === 'number' && usdRate > 0) {
      const rate = 1 / usdRate;
      localStorage.setItem(CACHE_KEY, JSON.stringify({ day: today, rate }));
      return rate;
    }
  } catch { /* cai no fallback */ }
  return FX_FALLBACK_BRL_PER_USD;
}

function roundClean(v: number): number {
  const step = v >= 10000 ? 500 : v >= 1000 ? 50 : v >= 100 ? 10 : 5;
  return Math.round(v / step) * step;
}

// Converte uma string de preço em PT (ex.: 'R$ 15.000 / diária') para US$ (ex.: 'US$ 2,700 / night')
export function usd(ptStr: string, rate: number): string {
  if (/consulta/i.test(ptStr)) return 'Upon request';
  return ptStr
    .replace(/diária/g, 'night')
    .replace('R$', 'US$')
    .replace(/(\d{1,3}(?:\.\d{3})+)/g, m => {
      const brl = parseInt(m.replace(/\./g, ''), 10);
      return roundClean(brl / rate).toLocaleString('en-US');
    });
}

export type PriceLang = 'pt' | 'en' | 'es';

// Preço exibido nos cards: sempre a partir da baixa temporada
export function cardPrice(ptStr: string, lang: PriceLang, rate: number): string {
  if (/consulta/i.test(ptStr)) return lang === 'pt' ? 'Sob consulta' : lang === 'es' ? 'A consultar' : 'Upon request';
  if (lang === 'pt') return `A partir de ${ptStr.replace('/ diária', ' / noite')}`;
  if (lang === 'es') return `Desde ${usd(ptStr, rate).replace(/night/g, 'noche')}`;
  return `From ${usd(ptStr, rate)}`;
}
