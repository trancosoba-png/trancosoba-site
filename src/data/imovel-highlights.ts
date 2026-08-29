/**
 * Pilotos do bloco "Por que esta casa" — apenas os 3 imóveis aprovados.
 * Cada item é uma característica objetiva e confirmada no cadastro
 * (features, amenities, staff, suites/guests, locationDetail de properties.ts).
 * Nada é inferido: se não estiver confirmado no cadastro, não aparece.
 * Imóveis fora desta lista não renderizam o bloco.
 */
export interface ImovelHighlights {
  pt: string[];
  en: string[];
  es: string[];
}

export const IMOVEL_HIGHLIGHTS: Record<string, ImovelHighlights> = {
  // Piloto 1 — pé na areia. Cadastro: features ['pe-na-areia','piscina','vista-mar'],
  // amenities "Casa totalmente pé na areia, de frente para o mar", 7 suítes / 14 hóspedes.
  'villa-martini-itapororoca': {
    pt: ['Pé na areia', 'Vista para o mar', '7 suítes · até 14 hóspedes'],
    en: ['Beachfront', 'Ocean view', '7 suites · up to 14 guests'],
    es: ['Pie en la arena', 'Vista al mar', '7 suites · hasta 14 huéspedes'],
  },
  // Piloto 2 — condomínio de alto padrão. Cadastro: location 'Altos de Trancoso',
  // features ['condominio','piscina'], amenity "Piscina privativa",
  // staff: cozinheira, auxiliar de cozinha, arrumadeiras, jardineiro/piscineiro.
  'casa-do-fer-altos-de-trancoso': {
    pt: ['Condomínio Altos de Trancoso', 'Staff completo incluído', 'Piscina privativa'],
    en: ['Altos de Trancoso Condominium', 'Full staff included', 'Private pool'],
    es: ['Condominio Altos de Trancoso', 'Personal completo incluido', 'Piscina privada'],
  },
  // Piloto 3 — próximo ao Quadrado. Cadastro: location 'Quadrado',
  // locationDetail "Ao lado do Quadrado", 6 suítes / 13 hóspedes,
  // staff: 2 arrumadeiras, 1 cozinheira e 1 auxiliar de cozinha.
  'casa-do-bosque': {
    pt: ['Próximo ao Quadrado', 'Staff completo incluído', '6 suítes · até 13 hóspedes'],
    en: ['Next to the Quadrado', 'Full staff included', '6 suites · up to 13 guests'],
    es: ['Junto al Quadrado', 'Personal completo incluido', '6 suites · hasta 13 huéspedes'],
  },
};
