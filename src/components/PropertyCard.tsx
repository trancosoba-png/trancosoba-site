import { memo } from 'react';
import { Link } from 'react-router';
import { useLang, txt } from '../i18n';
import type { Property } from '../data/properties';

type CardProperty = Pick<Property, 'id' | 'name' | 'location' | 'suites' | 'guests' | 'image' | 'price' | 'priceLow'>;
import { cardPrice } from '../data/price';
import { imgSources } from '../data/imgset';
import { Reveal } from './Layout';
import HeartButton from './HeartButton';

interface Props {
  p: CardProperty;
  /** 'featured' = card da home (padding py-5, h3); 'grid' = listagens (pt-5, h2) */
  variant?: 'grid' | 'featured';
  /** primeiro destaque da home: proporção mais larga */
  featuredLarge?: boolean;
  /** mostra o link "Ver imóvel" (listagem de casas) */
  showView?: boolean;
}

/** Card de imóvel compartilhado entre Home, Casas e Favoritos. */
function PropertyCard({ p, variant = 'grid', featuredLarge = false, showView = false }: Props) {
  const { t, lang, rate } = useLang();
  const featured = variant === 'featured';
  return (
    <Reveal className={featuredLarge ? 'lg:col-span-2 lg:row-span-1' : ''}>
      <Link to={`/imovel/${p.id}`} className={`group block img-zoom ${featured ? 'overflow-hidden bg-ivory' : ''}`}>
        <div className="overflow-hidden relative" onContextMenu={(e) => e.preventDefault()}>
          <picture>
            <source type="image/webp" srcSet={imgSources(p.image).webpSrcSet} sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'} />
            <img src={p.image} alt={txt(p.name, lang)} loading="lazy" decoding="async" draggable={false}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              className={`w-full object-cover ${featured ? (featuredLarge ? 'aspect-[2/1] lg:aspect-[21/10]' : 'aspect-[3/2]') : 'aspect-[3/2]'}`} />
          </picture>
          <span className="photo-shield" aria-hidden="true" />
          <HeartButton id={p.id} />
        </div>
        <div className={featured ? 'py-5' : 'pt-5'}>
          {featured
            ? <h3 className="font-serif-e text-2xl text-green-e group-hover:text-gold transition-colors">{txt(p.name, lang)}</h3>
            : <h2 className="font-serif-e text-2xl text-green-e group-hover:text-gold transition-colors">{txt(p.name, lang)}</h2>}
          {featured ? (
            <p className="text-[13px] md:text-sm text-ink/55 mt-1.5 whitespace-nowrap">{p.location} · {p.suites} {t.imovel.suites} · {p.guests} {t.imovel.guests}</p>
          ) : (
            <>
              <p className="text-sm text-ink/55 mt-1">{p.location}</p>
              <p className="text-sm text-ink/55">{p.suites} {t.imovel.suites} · {p.guests} {t.imovel.guests}</p>
            </>
          )}
          <p className={`${featured ? 'text-xs tracking-[0.16em] mt-3' : 'mt-2.5 text-[13px] tracking-wide'} uppercase text-gold`}>
            {cardPrice((p.priceLow ?? p.price).pt, lang, rate)}
          </p>
          {showView && (
            <span className="inline-block mt-3 text-xs tracking-[0.18em] uppercase text-green-e border-b border-gold pb-0.5 group-hover:text-gold transition-colors">
              {t.casas.view}
            </span>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

export default memo(PropertyCard);
