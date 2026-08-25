import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { useLang } from '../i18n';
import { Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { guiaBySlug, guiaRelated, guiaDate } from '../data/guia';
import { PROPERTIES_META } from '../data/meta';
import { canonicalLocation } from '../data/locations';

// O corpo do artigo chega como HTML pronto em article.html — compilado no
// prebuild por scripts/guia-md.mjs com a mesma tipografia/paleta do site
// (antes o react-markdown rodava no navegador e custava ~1–1,6 s de thread
// principal por artigo). H1 único vem do próprio Markdown.
export default function GuiaArtigo() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const { t } = useLang();
  const article = guiaBySlug(slug);

  // Links internos do HTML compilado são <a href="/..."> comuns; aqui eles
  // voltam a navegar como SPA (sem full reload). Externos já abrem em nova aba.
  const onBodyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  };
  if (!article) return <Navigate to="/guia" replace />;
  const related = guiaRelated(article);

  // Casas da região/condomínio do artigo, puxadas do catálogo pela mesma
  // normalização de localização usada no filtro de /casas (canonicalLocation).
  // Artigo sem `location` ou sem casas correspondentes → bloco não aparece.
  const houses = article.location
    ? PROPERTIES_META.filter((p) => canonicalLocation(p.location) === article.location)
        .sort((a, b) => Number(b.featured) - Number(a.featured))
        .slice(0, 6)
    : [];

  return (
    <article className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <nav aria-label="breadcrumb" className="text-[13px] text-ink/50 tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">{t.guia.breadcrumbHome}</Link>
          <span className="mx-2 text-ink/30">›</span>
          <Link to="/guia" className="hover:text-gold transition-colors">{t.guia.breadcrumbGuia}</Link>
          <span className="mx-2 text-ink/30">›</span>
          <span className="text-ink/70">{article.title}</span>
        </nav>

        <Reveal className="mt-8">
          <p className="eyebrow text-green-e/50">{article.category}</p>
          <p className="mt-2 text-[13px] text-ink/50 tracking-wide">
            {t.guia.publishedLabel} {guiaDate(article.publishedAt)}
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <> · {t.guia.updatedLabel} {guiaDate(article.updatedAt)}</>
            )}
          </p>
          <p className="mt-5 mb-10 text-lg md:text-xl text-ink/65 leading-relaxed font-serif-e italic">
            {article.description}
          </p>
        </Reveal>

        {article.image && (
          <Reveal>
            <div className="relative overflow-hidden mb-10" onContextMenu={(e) => e.preventDefault()}>
              <img src={article.image} alt={article.title} loading="lazy" decoding="async" draggable={false} className="w-full object-cover" />
              <span className="photo-shield" aria-hidden="true" />
            </div>
          </Reveal>
        )}

        {/* HTML compilado no prebuild (scripts/guia-md.mjs) — conteúdo nosso,
            dos .md versionados em src/content/guia/; não é entrada de usuário. */}
        <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>

      {houses.length > 0 && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-20">
          <Reveal>
            <p className="eyebrow text-green-e/50">{t.guia.housesEyebrow}</p>
            <h2 className="mt-2 font-serif-e text-3xl text-green-e">
              {t.guia.housesTitle} · {article.location}
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {houses.map((p) => (
              <Reveal key={p.id}>
                <PropertyCard p={p} variant="grid" showView />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {article.htmlRelated && (
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: article.htmlRelated }} />
        </div>
      )}

      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-20 md:mt-28">
          <Reveal>
            <p className="eyebrow text-green-e/50">{t.guia.title}</p>
            <h2 className="mt-2 font-serif-e text-3xl text-green-e">{t.guia.relatedTitle}</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-x-8 gap-y-10">
            {related.map((a) => (
              <Reveal key={a.slug}>
                <Link to={`/guia/${a.slug}`} className="group block h-full">
                  {a.image && (
                    <div className="overflow-hidden relative img-zoom" onContextMenu={(e) => e.preventDefault()}>
                      <img src={a.image} alt={a.title} loading="lazy" decoding="async" draggable={false} className="w-full object-cover aspect-[3/2]" />
                      <span className="photo-shield" aria-hidden="true" />
                    </div>
                  )}
                  <div className="py-5">
                    <p className="eyebrow text-green-e/50">{a.category}</p>
                    <h3 className="mt-2 font-serif-e text-2xl text-green-e group-hover:text-gold transition-colors">{a.title}</h3>
                    <p className="mt-2.5 text-sm text-ink/60 leading-relaxed">{a.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
