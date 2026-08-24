import { Link, Navigate, useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLang } from '../i18n';
import { Reveal } from '../components/Layout';
import { guiaBySlug, guiaRelated, guiaDate } from '../data/guia';

// Estilos do corpo do artigo: mesma tipografia e paleta do site, sem criar
// identidade nova. H1 único vem do próprio Markdown (os artigos já passam por
// auditoria de estrutura antes de entrar em src/content/guia/).
const md = {
  h1: (p: object) => <h1 className="font-serif-e text-4xl md:text-5xl text-green-e leading-tight" {...p} />,
  h2: (p: object) => <h2 className="mt-12 mb-4 font-serif-e text-3xl text-green-e" {...p} />,
  h3: (p: object) => <h3 className="mt-8 mb-3 font-serif-e text-2xl text-green-e" {...p} />,
  p: (p: object) => <p className="mb-5 text-ink/80 leading-relaxed" {...p} />,
  ul: (p: object) => <ul className="mb-5 list-disc pl-6 space-y-2 text-ink/80" {...p} />,
  ol: (p: object) => <ol className="mb-5 list-decimal pl-6 space-y-2 text-ink/80" {...p} />,
  li: (p: object) => <li className="leading-relaxed" {...p} />,
  strong: (p: object) => <strong className="font-medium text-ink" {...p} />,
  blockquote: (p: object) => (
    <blockquote className="my-8 border-l-2 border-gold pl-5 font-serif-e italic text-xl md:text-2xl text-green-e/90 leading-relaxed" {...p} />
  ),
  hr: () => <hr className="my-10 border-green-e/15" />,
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt ?? ''} loading="lazy" decoding="async" draggable={false} className="w-full my-8" />
  ),
  a: ({ href = '', children }: { href?: string; children?: React.ReactNode }) => {
    const cls = 'text-green-e underline decoration-gold/60 underline-offset-2 hover:text-gold transition-colors';
    if (href.startsWith('/')) return <Link to={href} className={cls}>{children}</Link>;
    return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  },
  table: (p: object) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm text-ink/80" {...p} />
    </div>
  ),
  th: (p: object) => <th className="border-b border-green-e/25 py-2.5 pr-4 text-left text-[12px] tracking-[0.12em] uppercase text-green-e/70 font-medium" {...p} />,
  td: (p: object) => <td className="border-b border-green-e/10 py-2.5 pr-4 align-top" {...p} />,
};

export default function GuiaArtigo() {
  const { slug = '' } = useParams();
  const { t } = useLang();
  const article = guiaBySlug(slug);
  if (!article) return <Navigate to="/guia" replace />;
  const related = guiaRelated(article);

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

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
          {article.markdown}
        </ReactMarkdown>
      </div>

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
