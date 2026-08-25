// Medição — GA4 + Meta Pixel.
// ⚠️ Substituir os IDs abaixo pelos IDs reais do cliente antes de publicar.
export const GA4_ID = 'G-XXXXXXXXXX'; // TODO: ID do Google Analytics 4
export const META_PIXEL_ID = '000000000000000'; // TODO: ID do pixel da Meta

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
let initialized = false;

export function hasConsent(): boolean {
  try { return !!localStorage.getItem(CONSENT_KEY); } catch { return false; }
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
    window.gtag = function gtag(...args: unknown[]) { window.dataLayer!.push(args); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
  }
  if (META_OK) {
    const n = (window.fbq = window.fbq || function (...args: unknown[]) {
      (n as unknown as { queue: unknown[] }).queue.push(args);
    }) as unknown as { queue: unknown[]; loaded?: boolean; version?: string };
    n.queue = n.queue || [];
    n.loaded = true;
    n.version = '2.0';
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    window.fbq!('init', META_PIXEL_ID);
    window.fbq!('track', 'PageView');
  }
}

/** Evento de clique no WhatsApp. `origin` ex.: 'footer' | 'imovel' | 'home' | 'servicos' */
export function trackWhatsApp(origin: string, houseId?: string) {
  window.gtag?.('event', 'click_whatsapp', { origin, house: houseId ?? '' });
  window.fbq?.('trackCustom', 'ClickWhatsApp', { origin, house: houseId ?? '' });
}

/** Evento de envio de formulário de contato. */
export function trackContact(houseId?: string) {
  window.gtag?.('event', 'submit_contact', { house: houseId ?? '' });
  window.fbq?.('track', 'Contact', { house: houseId ?? '' });
}
