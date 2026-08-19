// Catálogo enxuto para listagens, cards e meta tags — sem descrições longas,
// galerias e amenities (esses ficam no chunk da página de imóvel).
// O JSON é gerado no prebuild por scripts/generate-properties-meta.mjs.
import meta from './properties-meta.json';
import type { Purpose, Feature } from './properties';

export interface PropertyMeta {
  id: string;
  code: string;
  name: { pt: string; en: string };
  purpose: Purpose[];
  location: string;
  suites: number;
  guests: number;
  image: string;
  price: { pt: string; en: string };
  priceLow: { pt: string; en: string } | undefined;
  salePrice: { pt: string; en: string } | undefined;
  featured: boolean;
  features: Feature[];
  desc1pt: string;
}

export const PROPERTIES_META = meta as PropertyMeta[];

/** Diária extraída do preço em texto ("R$ 3.500/noite" → 3500). */
export function dailyPriceMeta(p: PropertyMeta): number | null {
  const m = p.price.pt.replace(/\./g, '').match(/R\$\s*(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}
