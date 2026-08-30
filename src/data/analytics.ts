// Medição — GA4 + Meta Pixel.
// Consentimento: nenhum script carrega e nenhum evento é enviado antes do aceite
// (localStorage 'tba-cookie-ok'). Após o aceite, GA4 e Pixel são inicializados.
//
// ATENÇÃO — wrappers: o gtag.js e o fbevents.js SÓ processam comandos empurrados
// como objeto `arguments`. Empurrar arrays reais (spread `...args`) faz os dois
// ignorarem silenciosamente todos os comandos — foi o que deixou a medição muda.
// Não "modernizar" os wrappers abaixo.
import { PROPERTIES_META } from './meta';

export const GA4_ID = 'G-FJSQZD61J8';
export const META_PIXEL_ID = '912292478419002';

const GA_OK = !GA4_ID.startsWith('G-XXXX');
const META_OK = !META_PIXEL_ID.startsWith('0000');

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = 'tba-cookie-ok';
const LANG_KEY = 'trancosoba-lang';
const SITE = 'https://www.trancosoba.com';
let initialized = false;

export function hasConsent(): boolean {
  try { return !!localStorage.getItem(CONSENT_KEY); } catch { return false; }
}

/** Idioma real da interface (pt/en/es), persistido pelo seletor de idioma. */
export function getLang(): string {
  try { return localStorage.getItem(LANG_KEY) || 'pt'; } catch { return 'pt'; }
}

/** Tipo de página a partir do path — usado em page_view, click_whatsapp e submit_contact. */
export function pageTypeFromPath(path: string): string {
  const p = path.length > 1 ? path.replace(/\/+$/, '') : path;
  if (p === '/') return 'home';
  if (p.startsWith('/imovel/')) return 'imovel';
  if (p.startsWith('/casas')) return 'casas';
  if (p.startsWith('/guia')) return 'guia';
  if (p.startsWith('/contato')) return 'contato';
  if (p.startsWith('/servicos')) return 'servicos';
  if (p.startsWith('/favoritos')) return 'favoritos';
  if (p.startsWith('/anuncie')) return 'anuncie';
  if (p.startsWith('/faq')) return 'faq';
  if (p.startsWith('/trancoso')) return 'trancoso';
  if (p.startsWith('/nos')) return 'nos';
  if (p.startsWith('/reveillon')) return 'reveillon';
  if (p.startsWith('/carnaval')) return 'carnaval';
  if (p.startsWith('/privacidade')) return 'privacidade';
  return 'outras';
}

/** house_id/house_code quando o path é uma página de imóvel; {} caso contrário. */
export function houseFromPath(path: string): { house_id?: string; house_code?: string } {
  const m = path.match(/^\/imovel\/([^/]+)/);
  if (!m) return {};
  const meta = PROPERTIES_META.find(x => x.id === m[1]);
  return meta ? { house_id: meta.id, house_code: meta.code } : { house_id: m[1] };
}

/** Chamado ao aceitar o aviso de cookies: grava o consentimento e inicia a medição. */
export function grantConsent() {
  try { localStorage.setItem(CONSENT_KEY, '1'); } catch { /* sem storage */ }
  initAnalytics();
}

export function initAnalytics() {
  if (initialized) return;
  initialized = true;
  if (GA_OK) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    // wrapper no padrão oficial: empurra `arguments` (não array)
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    // send_page_view: false — o page_view (entrada + SPA) é disparado via
    // trackPageView(), garantindo exatamente 1 por navegação.
    window.gtag('config', GA4_ID, { send_page_view: false });
  }
  if (META_OK) {
    // snippet oficial do Meta (completo): empurra `arguments` na fila e registra
    // n.push/_fbq para o fbevents.js adotar o stub ao carregar
    const w = window as unknown as { fbq?: unknown; _fbq?: unknown };
    if (!w.fbq) {
      const n = function () {
        const self = n as unknown as { callMethod?: (...a: unknown[]) => void; queue: unknown[] };
        if (self.callMethod) { self.callMethod.apply(n, arguments as unknown as unknown[]); }
        else { self.queue.push(arguments); }
      } as unknown as { queue: unknown[]; loaded?: boolean; version?: string; push?: unknown };
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
    }
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    window.fbq!('init', META_PIXEL_ID);
    // PageView NÃO é disparado aqui: o trackPageView abaixo mede a página atual
    // e o PageTracker mede 1 por navegação SPA, sem duplicidade.
  }
  // Mede a página atual na inicialização (o efeito do PageTracker na montagem
  // roda antes do init e vira no-op; as navegações seguintes ficam com ele).
  trackPageView(window.location.pathname.replace(/\/+$/, '') || '/');
}

/** page_view — chamado pelo PageTracker na entrada e a cada mudança de rota do SPA. */
export function trackPageView(path: string) {
  if (!initialized || !hasConsent()) return;
  const page_type = pageTypeFromPath(path);
  window.gtag?.('event', 'page_view', {
    page_location: `${SITE}${path}`,
    page_path: path,
    page_title: document.title,
    page_type,
    lang: getLang(),
    ...houseFromPath(path),
  });
  window.fbq?.('track', 'PageView');
}

export interface WhatsAppClick {
  /** Posição do CTA. Na página de imóvel: tarifario | header | float | footer.
   *  Nas demais páginas: conteudo | formulario | header | float | footer. */
  cta: string;
  page_type: string;
  house_id?: string;
  house_code?: string;
}

/** Evento de clique no WhatsApp — schema padronizado. */
export function trackWhatsApp(click: WhatsAppClick) {
  const params = { ...click, lang: getLang() };
  window.gtag?.('event', 'click_whatsapp', params);
  window.fbq?.('trackCustom', 'ClickWhatsApp', params);
}

/** Atalho para CTAs de template (header/footer/float) e de conteúdo:
 *  deriva page_type e house_id/house_code da URL atual automaticamente. */
export function trackWhatsAppClick(cta: string) {
  const path = window.location.pathname;
  trackWhatsApp({ cta, page_type: pageTypeFromPath(path), ...houseFromPath(path) });
}

export interface ContactSubmit {
  form: string; // ex.: 'contato' | 'anuncie'
  page_type: string;
  house_id?: string;
  house_code?: string;
}

/** Evento de envio de formulário de contato. */
export function trackContact(submit: ContactSubmit) {
  const params = { ...submit, lang: getLang() };
  window.gtag?.('event', 'submit_contact', params);
  window.fbq?.('track', 'Contact', params);
}
