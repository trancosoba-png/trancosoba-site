import { useState } from 'react';
import { Link } from 'react-router';
import { useLang } from '../i18n';
import { PageHero, Reveal } from '../components/Layout';
import { guiaArticles, guiaFeatured, guiaUsedCategories, guiaDate, type GuiaArticle } from '../data/guia';

function ArticleCard({ a, heading = 'h3' }: { a: GuiaArticle; heading?: 'h2' | 'h3' }) {
  const { t } = useLang();
  const H = heading;
  return (
    <Reveal>
      <Link to={`/guia/${a.slug}`} className="group block h-full bg-ivory">
        {a.image && (
          <div className="overflow-hidden relative img-zoom" onContextMenu={(e) => e.preventDefault()}>
            <img src={a.image} alt={a.title} loading="lazy" decoding="async" draggable={false}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              className="w-full object-cover aspect-[3/2]" />
            <span className="photo-shield" aria-hidden="true" />
          </div>
        )}
        <div className="py-5">
          <p className="eyebrow text-green-e/50">{a.category}</p>
          <H className="mt-2 font-serif-e text-2xl text-green-e group-hover:text-gold transition-colors">{a.title}</H>
          <p className="mt-2.5 text-sm text-ink/60 leading-relaxed">{a.description}</p>
          <p className="mt-3.5 text-xs tracking-[0.16em] uppercase text-gold">
            {guiaDate(a.publishedAt)} · {t.guia.readMore}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Guia() {
  const { t } = useLang();
  const [cat, setCat] = useState<string>('');
  const featured = guiaFeatured();
  const categories = guiaUsedCategories();
  const list = cat ? guiaArticles.filter((a) => a.category === cat) : guiaArticles;

  const chip = (active: boolean) =>
    `text-[12px] tracking-[0.12em] uppercase border px-4 py-2 transition-colors ${active
      ? 'bg-green-e text-ivory border-green-e'
      : 'border-green-e/30 text-green-e hover:border-gold hover:text-gold'}`;

  return (
    <>
      <PageHero title={t.guia.title} sub={t.guia.sub} image="/img/hero.webp" />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="max-w-3xl text-lg text-ink/70 leading-relaxed">{t.guia.intro}</p>
          </Reveal>

          {featured.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <p className="eyebrow text-green-e/50">{t.guia.featuredEyebrow}</p>
                <h2 className="mt-2 font-serif-e text-3xl md:text-4xl text-green-e">{t.guia.featuredTitle}</h2>
              </Reveal>
              <div className="mt-8 grid md:grid-cols-3 gap-x-8 gap-y-10">
                {featured.map((a) => <ArticleCard key={a.slug} a={a} />)}
              </div>
            </div>
          )}

          {categories.length > 1 && (
            <Reveal className="mt-16">
              <div className="flex flex-wrap gap-2.5">
                <button className={chip(cat === '')} onClick={() => setCat('')}>{t.guia.all}</button>
                {categories.map((c) => (
                  <button key={c} className={chip(cat === c)} onClick={() => setCat(c)}>{c}</button>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {list.map((a) => <ArticleCard key={a.slug} a={a} heading="h3" />)}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-center text-ink/55">{t.guia.empty}</p>
          )}
        </div>
      </section>
    </>
  );
}
