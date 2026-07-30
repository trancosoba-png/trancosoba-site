import { Link } from 'react-router';
import { useLang, txt } from '../i18n';
import { PROPERTIES, WHATSAPP } from '../data/properties';
import { useFavorites } from '../data/favorites';
import { trackWhatsApp } from '../data/analytics';
import { PageHero, Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';

const SITE = 'https://www.trancosoba.com';

export default function Favoritos() {
  const { t, lang } = useLang();
  const { favs } = useFavorites();
  const houses = PROPERTIES.filter((p) => favs.includes(p.id));

  const waText = [t.fav.waMsg, ...houses.map((p) => `• ${txt(p.name, lang)} (${p.location}) — ${SITE}/imovel/${p.id}`)].join('\n');
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  return (
    <>
      <PageHero title={t.fav.title} sub={t.fav.sub} image="/img/vilas75/01.jpg" />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {houses.length === 0 ? (
            <Reveal className="text-center py-16">
              <p className="text-ink/60 max-w-md mx-auto">{t.fav.empty}</p>
              <Link to="/casas" className="inline-block mt-8 text-xs tracking-[0.18em] uppercase text-green-e border-b border-gold pb-1 hover:text-gold transition-colors">
                {t.fav.cta}
              </Link>
            </Reveal>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-12">
                {houses.map((p) => <PropertyCard key={p.id} p={p} />)}
              </div>
              <Reveal className="text-center">
                <a href={waLink} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp('favoritos')}
                  className="inline-block bg-green-e text-ivory text-xs tracking-[0.18em] uppercase px-10 py-4 hover:bg-green-deep transition-colors">
                  {t.fav.send} ({houses.length})
                </a>
              </Reveal>
            </>
          )}
        </div>
      </section>
    </>
  );
}
