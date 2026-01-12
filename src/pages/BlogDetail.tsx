// src/pages/BlogDetail.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { blogPosts } from "../assets/blogPosts";
import { blogContentLoaders } from "../assets/blogContent";

type TocItem = { id: string; text: string };

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const articleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slug) return;
    window.scrollTo(0, 0);
    setLoading(true);
    setLoadError(null);
    setHtml(null);

    const loader = blogContentLoaders[slug];
    if (!loader) {
      setLoading(false);
      setLoadError(`No existe contenido para “${slug}”.`);
      return;
    }
    loader()
      .then((mod) => {
        if (typeof mod.default !== "string") {
          setLoadError("El asset no exporta un string por default.");
        } else {
          setHtml(mod.default);
        }
      })
      .catch((e) => {
        console.error(e);
        setLoadError("No se pudo cargar el contenido.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // Genera TOC (h2) cuando ya tenemos HTML en el DOM
  useEffect(() => {
    if (!articleRef.current) return;
    const headings = Array.from(articleRef.current.querySelectorAll("h2"));
    const items: TocItem[] = headings.map((h, i) => {
      if (!h.id) {
        const safe =
          h.textContent?.toLowerCase().trim().replace(/[^\w]+/g, "-") ||
          `sec-${i}`;
        h.id = safe;
      }
      return { id: h.id, text: h.textContent || `Sección ${i + 1}` };
    });
    setToc(items);
  }, [html]);

  const dateStr = useMemo(() => {
    if (!post?.date) return "";
    try {
      return new Date(post.date).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
    } catch {
      return post?.date ?? "";
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="bg-gray-50">
      {/* ====== HERO ====== */}
      <header className="relative isolate overflow-hidden">
        <div className="bg-[#1A3459]">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img
              src="/assets/images/bg-nosotros-main-banner-waves.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            <h1 className="text-white font-barlowCond text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 text-slate-100/90 text-sm">
              {post.authors?.length ? (
                <>
                  <span className="font-medium">{post.authors.join(", ")}</span>
                  <span className="opacity-60">•</span>
                </>
              ) : null}
              <span className="opacity-90">{dateStr}</span>
              {post.readMinutes ? (
                <>
                  <span className="opacity-60">•</span>
                  <span className="opacity-90">{post.readMinutes} min</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </header>


      {/* ====== CUERPO ====== */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Banner 1180x315, centrado */}
          {(post.banner || post.thumbnail) && (
            <figure className="mb-6">
              <div className="mx-auto w-full max-w-[1180px] h-[315px] bg-slate-100 overflow-hidden">
                <img
                  src={post.banner || post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </figure>
          )}


          {/* Contenido + Sidebar (debajo del banner) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),340px] gap-8">
            {/* ====== MAIN ====== */}
            <article className="min-w-0">
              {post.summary && (
                <div className="mb-6 rounded-lg bg-[#f5fafb] border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-800 mb-1">Resumen</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              )}

              {loading && <p className="text-slate-600">Cargando contenido…</p>}

              {!loading && loadError && (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-800">
                  {loadError}
                </div>
              )}

              {!loading && !loadError && html && (
                <div
                  ref={articleRef}
                className="
    prose prose-slate max-w-none
    prose-headings:font-semibold
    prose-h2:text-slate-900 prose-h2:scroll-mt-28
    prose-a:text-[#0d5cab] hover:prose-a:underline
    prose-li:my-1

    [&_h2:has(+p)]:mb-0
  "
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )}

              <div className="mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-[#0d5cab] hover:underline"
                >
                  ← Volver al blog
                </Link>
              </div>
            </article>

            {/* ====== SIDEBAR ====== */}
            <aside className="lg:pt-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Índice */}
                <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="px-4 py-3 border-b border-slate-200">
                    <p className="text-sm font-semibold text-slate-800">
                      En este artículo
                    </p>
                  </div>
                  <nav className="px-4 py-3">
                    {toc.length === 0 ? (
                      <p className="text-sm text-slate-500">
                        No hay secciones detectadas.
                      </p>
                    ) : (
                      <ul className="space-y-2 text-sm">
                        {toc.map((t) => (
                          <li key={t.id}>
                            <a
                              href={`#${t.id}`}
                              className="block hover:text-[#0d5cab] text-slate-700"
                            >
                              {t.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </nav>
                </div>

                {/* CTA lateral */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    ¿Te gustó este artículo?
                  </p>
                  <p className="text-sm text-slate-600 mb-3">
                    Explora nuestra oferta académica y cursos especializados.
                  </p>
                  <Link
                    to="/formacion-academica"
                    className="inline-flex items-center justify-center rounded-md bg-[#1A3459] px-4 py-2 text-white text-sm font-semibold hover:bg-[#2a4469] transition-colors"
                  >
                    Ver cursos
                  </Link>
                </div>

                {/* Recomendados */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800 mb-3">
                    Artículos recomendados
                  </p>
                  <ul className="space-y-3">
                    {blogPosts.slice(0, 3).map((p) => (
                      <li key={p.slug} className="text-sm">
                        <Link
                          to={`/blog/${p.slug}`}
                          className="text-[#0d5cab] hover:underline"
                        >
                          {p.title}
                        </Link>
                        <div className="text-xs text-slate-500">
                          {new Date(p.date).toLocaleDateString("es-MX")}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </main>
  );
}
