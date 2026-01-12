// src/pages/Blog.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "../assets/blogPosts";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}

const categories = Array.from(new Set(blogPosts.map(p => p.category))).sort();
const years = Array.from(
  new Set(blogPosts.map(p => new Date(p.date).getFullYear()))
).sort((a, b) => b - a);

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="
        group block w-full max-w-[291px] mx-auto
        lg:max-w-[283px]
      "
    >
      <article
        className="
          bg-white rounded-xl shadow-md overflow-hidden
          ring-1 ring-slate-200/60
          transition-shadow
          hover:shadow-lg
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
        "
      >
        <div className="w-full h-28 sm:h-32 lg:h-36 bg-slate-100 overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-xs font-semibold text-sky-700 mb-1">
            {post.category}
          </div>

          <div className="text-slate-900 font-semibold leading-snug group-hover:underline">
            {post.title}
          </div>

          <div className="mt-2 text-xs text-slate-500">
            {formatDate(post.date)}
            {post.readMinutes ? ` · ${post.readMinutes} min` : null}
          </div>
        </div>
      </article>
    </Link>
  );
}




export default function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [yr, setYr] = useState<string>("all");

  const filtered = useMemo(() => {
    const q2 = q.trim().toLowerCase();
    return blogPosts
      .slice()
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .filter(p => (cat === "all" ? true : p.category === cat))
      .filter(p => (yr === "all" ? true : String(new Date(p.date).getFullYear()) === yr))
      .filter(p => {
        if (!q2) return true;
        const haystack = [
          p.title,
          p.excerpt,
          p.category,
          ...(p.tags || []),
        ].join(" ").toLowerCase();
        return haystack.includes(q2);
      });
  }, [q, cat, yr]);

  return (
    <main className="bg-gray-50">
      {/* ======= HERO coherente con el resto ======= */}
      <header className="relative isolate overflow-hidden">
        {/* background color + waves */}
        <div className="bg-[#1A3459]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* waves overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img
                src="/assets/images/bg-nosotros-main-banner-waves.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* grid avoids overlap; stacks on <md */}
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-8 items-center py-10 md:py-14 lg:py-16 min-h-[240px]">
              {/* left: text */}
              <div className="text-white">
                <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  Blog
                </h1>
                <p className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed">
                  Noticias, artículos y recursos sobre terapias contextuales, investigación y formación.
                </p>
              </div>

              {/* right: image (own column, no absolute) */}
              <div className="hidden md:block justify-self-end">
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden ring-4 ring-white/20 bg-white/5">
                  <img
                    src="/assets/images/bnr-blog-comportamiento.jpg"
                    alt="Portada libros"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======= BUSCADOR + FILTROS ======= */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full h-11 rounded-md pl-10 pr-3 border border-slate-300 bg-white text-sm outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Buscar artículos, temas o etiquetas…"
              />
            </div>

            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
            >
              <option value="all">Todas las categorías</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select
              value={yr}
              onChange={(e) => setYr(e.target.value)}
              className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
            >
              <option value="all">Todos los años</option>
              {years.map(y => <option key={y} value={String(y)}>{y}</option>)}
            </select>

            <button
              onClick={() => { setQ(""); setCat("all"); setYr("all"); }}
              className="h-11 px-4 rounded-md bg-slate-100 border border-slate-300 text-sm hover:bg-slate-200"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* ======= GRID DE CARDS ======= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-slate-600">No encontramos entradas con esos filtros.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
