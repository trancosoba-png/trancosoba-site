// Gera <picture> sources com WebP 800/1600 para capas e hero.
// As variantes (-800.webp, -1600.webp) são geradas no pipeline de imagens.

export function imgSources(jpgPath: string): { webpSrcSet: string; jpgSrcSet: string } {
  const stem = jpgPath.replace(/\.(jpe?g|webp)$/i, '');
  return {
    webpSrcSet: `${stem}-thumb.webp 400w, ${stem}-800.webp 800w, ${stem}-1600.webp 1600w`,
    jpgSrcSet: `${jpgPath} 1600w`,
  };
}
