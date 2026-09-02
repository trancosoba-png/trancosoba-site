import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { useMemo } from 'react';
import { useLang } from '../i18n';
import { Reveal } from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import GuiaCta from '../components/GuiaCta';
import { guiaBySlug, guiaRelated, guiaText } from '../data/guia';
import { guiaHouses } from '../data/guia-casas';
import { guiaCtaRegion, guiaCtaRegionFinal, guiaCtaGeneric } from '../data/guia-cta';

// O corpo do artigo chega como HTML pronto em article.html — compilado no
// prebuild por scripts/guia-md.mjs com a mesma tipografia/paleta do site
// (antes o react-markdown rodava no navegador e custava ~1–1,6 s de thread
// principal por artigo).
// H1 único: com o hero imersivo, o título sai do corpo e vira o <h1> sobre a
// foto — o <h1> inicial do HTML compilado é removido abaixo para não duplicar.

// Remove o <h1> inicial do HTML compilado (ele é exibido no hero, sobre a
// imagem). Só roda quando há hero; artigo sem imagem mantém o H1 no corpo.
const stripLeadingH1 = (html: string) => html.replace(/^<h1[^>]*>[\s\S]*?<\/h1>/, '');

// Divide o corpo para o CTA do meio: depois do primeiro parágrafo que segue o
// SEGUNDO h2 do artigo (~1/3 da leitura). Artigos curtos (< 2 h2) não têm
// CTA intermediário — só o final.
function splitForMidCta(html: string): [string, string] | null {
  const marks = [...html.matchAll(/<\/h2>/g)];
  if (marks.length < 2) return null;
  const afterH2 = marks[1].index + '</h2>'.length;
  const p = html.indexOf('</p>', afterH2);
  const cut = p >= 0 ? p + '</p>'.length : afterH2;
  return [html.slice(0, cut), html.slice(cut)];
}

export default function GuiaArtigo() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLang();
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
  const [bodyHtml, midSplit] = useMemo(() => {
    if (!article) return ['', null] as const;
    const html = guiaText(article, lang).html;
    const clean = article.image ? stripLeadingH1(html) : html;
    return [clean, splitForMidCta(clean)] as const;
  }, [article, lang]);
  if (!article) return <Navigate to="/guia" replace />;
  const g = guiaText(article, lang);
  const related = guiaRelated(article);

  // Casas associadas ao artigo pelo mapeamento editorial centralizado de
  // src/data/guia-casas.ts (região ou coleção do catálogo). Sem associação
  // ou sem casas correspondentes → o bloco não aparece.
  const housesBlock = guiaHouses(article.slug, lang);

  // CTAs contextuais (src/data/guia-cta.ts): meio do texto só para artigos
  // com região associada e corpo longo; final em todos (região → foco em
  // WhatsApp, pois o botão de casas já aparece no meio e no bloco de casas;
  // demais artigos → CTA genérico com os dois caminhos).
  const ctaMid = midSplit ? guiaCtaRegion(article.slug, t.guia) : null;
  const ctaFinal = guiaCtaRegionFinal(article.slug, t.guia);
  const ctaGeneric = !ctaFinal ? guiaCtaGeneric(t.guia) : null;

  const srcSet = article.image.startsWith('/img/guia/')
    ? `${article.image.replace('.webp', '-400.webp')} 400w, ${article.image} 800w, ${article.image.replace('.webp', '-1200.webp')} 1200w`
    : undefined;

  return (
    <article className={article.image ? 'pb-16 md:pb-24' : 'pt-24 md:pt-32 pb-16 md:pb-24'}>
      {article.image ? (
        /* Hero imersivo: foto em destaque com categoria + H1 + data sobre a
           imagem (overlay verde-escuro sutil, da paleta do site, para
           legibilidade sem esconder a foto). Acima da dobra: eager +
           fetchPriority high (par do <link rel="preload"> do shell). */
        <header className="relative h-[62vh] min-h-[420px] max-h-[680px] overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
          <img src={article.image}
            {...(srcSet ? { srcSet, sizes: '100vw' } : {})}
            alt={g.title} loading="eager" fetchPriority="high" decoding="async" draggable={false}
            width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-e/85 via-green-e/30 to-green-e/10" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col justify-end px-5 pb-10 md:px-8 md:pb-14">
            <p className="eyebrow text-ivory/80">{g.category}</p>
            <h1 className="mt-3 font-serif-e text-3xl md:text-5xl text-ivory leading-tight">{g.title}</h1>
          </div>
          <span className="photo-shield" aria-hidden="true" />
        </header>
      ) : (
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal className="mt-8">
            <p className="eyebrow text-green-e/50">{g.category}</p>
            <p className="mt-5 mb-10 text-lg md:text-xl text-ink/65 leading-relaxed font-serif-e italic">
              {g.description}
            </p>
          </Reveal>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <nav aria-label="breadcrumb" className={`${article.image ? 'mt-8' : ''} text-[13px] text-ink/50 tracking-wide`}>
          <Link to="/" className="hover:text-gold transition-colors">{t.guia.breadcrumbHome}</Link>
          <span className="mx-2 text-ink/30">›</span>
          <Link to="/guia" className="hover:text-gold transition-colors">{t.guia.breadcrumbGuia}</Link>
          <span className="mx-2 text-ink/30">›</span>
          <span className="text-ink/70">{g.title}</span>
        </nav>

        {article.image && (
          <p className="mt-6 mb-8 text-lg md:text-xl text-ink/65 leading-relaxed font-serif-e italic">
            {g.description}
          </p>
        )}

        {/* Nota editorial sazonal (frontmatter `nota:`): só renderiza quando
            existe informação nova e confirmada — nunca um carimbo automático. */}
        {g.nota && (
          <p className="mb-8 border-l-2 border-gold pl-4 text-sm text-ink/60 italic leading-relaxed">
            {g.nota}
          </p>
        )}

        {/* HTML compilado no prebuild (scripts/guia-md.mjs) — conteúdo nosso,
            dos .md versionados em src/content/guia/; não é entrada de usuário. */}
        {midSplit && ctaMid ? (
          <>
            <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: midSplit[0] }} />
            <GuiaCta cta={ctaMid} />
            <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: midSplit[1] }} />
          </>
        ) : (
          <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        )}

      </div>

      {/* Bloco de casas ANTES do CTA final: quem termina o artigo vê primeiro
          os imóveis da região (próximo passo natural) e o CTA fecha a página
          como ação final — sem interromper a leitura no meio do corpo. */}
      {housesBlock && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-20">
          <Reveal>
            <p className="eyebrow text-green-e/50">{t.guia.housesEyebrow}</p>
            <h2 className="mt-2 font-serif-e text-3xl text-green-e">{housesBlock.title}</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {housesBlock.houses.map((p) => (
              <Reveal key={p.id}>
                <PropertyCard p={p} variant="grid" showView />
              </Reveal>
            ))}
          </div>
          {housesBlock.viewAllHref && housesBlock.total > housesBlock.houses.length && (
            <div className="mt-10 text-center">
              <Link to={housesBlock.viewAllHref}
                className="inline-block border border-green-e/30 px-7 py-3 text-[12px] tracking-[0.18em] uppercase text-green-e hover:bg-green-e hover:text-ivory transition-colors">
                {housesBlock.viewAllLabel || t.guia.housesViewAll}
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {ctaFinal && <GuiaCta cta={ctaFinal} variant="whats" />}
        {ctaGeneric && <GuiaCta cta={ctaGeneric} />}
      </div>

      {g.htmlRelated && (
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: g.htmlRelated }} />
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
                      <img src={a.image} alt={guiaText(a, lang).title} loading="lazy" decoding="async" draggable={false} className="w-full object-cover aspect-[3/2]" />
                      <span className="photo-shield" aria-hidden="true" />
                    </div>
                  )}
                  <div className="py-5">
                    <p className="eyebrow text-green-e/50">{guiaText(a, lang).category}</p>
                    <h3 className="mt-2 font-serif-e text-2xl text-green-e group-hover:text-gold transition-colors">{guiaText(a, lang).title}</h3>
                    <p className="mt-2.5 text-sm text-ink/60 leading-relaxed">{guiaText(a, lang).description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Assinatura editorial: reforço discreto de autoria local, no fim da
          página — sem caixa de autor, sem foto, sem marketing. */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 mt-16 md:mt-20">
        <Reveal>
          <div className="border-t border-green-e/10 pt-8 text-center">
            <p className="font-serif-e text-lg text-green-e">{t.guia.signatureTitle}</p>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{t.guia.signatureText}</p>
            <Link to="/nos" className="mt-3 inline-block text-xs tracking-[0.16em] uppercase text-gold hover:text-green-e transition-colors">
              {t.guia.signatureLink}
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
