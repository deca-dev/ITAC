// src/components/Hero.tsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import "../components/css/hero.css"; // Import custom styles

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

type Slide = {
  image: string;
  alt: string;
  title: React.ReactNode;
  // optional meta blocks
  metaLeftLabel?: string;
  metaLeftValue?: string;
  metaRightLabel?: string;
  metaRightText?: string;
  // optional CTA
  cta?: { label: string; url: string }; // relative or absolute
};

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const length = 4;
  const intervalRef = useRef<number | null>(null);

  // ✅ SWIPE refs (solo para mobile)
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const isSwipingRef = useRef(false);

  // Define control theme per slide (same as your original)
  const controlThemes: ("light" | "dark")[] = [
    "dark", // Slide 1
    "light", // Slide 2
    "light", // Slide 3
    "dark", // Slide 4
  ];

  const slides: Slide[] = [
    {
      image: "/assets/bg/bg-banner-homepage-1.jpg",
      alt: "Fundamentos de Terapia Dialéctica Conductual",
      title: (
        <>
          Diplomado en{" "}
          <strong>Fundamentos de Terapia Dialéctica Conductual</strong>
        </>
      ),
      metaLeftLabel: "Fechas:",
      metaLeftValue: "12, 13 y 14 de Junio",
      metaRightLabel: "Modalidad:",
      metaRightText: "Híbrido",
      cta: { label: "Ver curso", url: "/formacion-academica/diplomado-fundamentos-dbt" },
    },
    {
      image: "/assets/bg/bg-banner-homepage-2.jpg",
      alt: "Para entrenar habilidades DBT",
      title: (
        <>
          Curso: <br /> <strong>Para entrenar habilidades DBT</strong>
        </>
      ),
      metaLeftLabel: "Fechas:",
      metaLeftValue: "22, 23 y 24 de Mayo.",
      metaRightLabel: "Modalidad:",
      metaRightText: "Híbrido",

      cta: { label: "Ver curso", url: "/formacion-academica/curso-entrenar-habilidades-dbt" },
    },
    {
      image: "/assets/bg/bg-banner-homepage-3.jpg",
      alt: "Curso-Taller DBT Familias",
      title: (
        <>
          <strong>Curso-Taller: DBT Familias</strong>
        </>
      ),
      metaLeftLabel: "Fechas:",
      metaLeftValue: "12, 13 y 14 de Junio",
      metaRightLabel: "Modalidad:",
      metaRightText: "Híbrido",

      cta: { label: "Ver curso", url: "/formacion-academica/dbt-familias" },
    },
    {
      image: "/assets/bg/bg-banner-homepage-4.jpg",
      alt: "Nivel inicial RO-DBT",
      title: (
        <>
          <strong>Nivel inicial RO-DBT</strong>
        </>
      ),
      metaLeftLabel: "Fechas:",
      metaLeftValue: "22 y 23 de agosto",
      metaRightLabel: "Modalidad:",
      metaRightText: "Híbrido",

      cta: { label: "Ver curso", url: "/formacion-academica/curso-nivel-inicial-ro-dbt" },
    },
  ];

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);
  const goTo = (i: number) => setCurrent(i);

  useEffect(() => {
    if (intervalRef.current != null) clearInterval(intervalRef.current);
    if (!isPaused) intervalRef.current = window.setInterval(next, 6000);
    return () => {
      if (intervalRef.current != null) clearInterval(intervalRef.current);
    };
  }, [isPaused, current]);

  const togglePause = () => setIsPaused((p) => !p);

  // Determine button styles based on current slide theme (same as your original logic)
  const isLight = controlThemes[current] === "light";
  const btnClasses = isLight
    ? "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
    : "bg-black/20 backdrop-blur-sm hover:bg-black/30 text-black";

  // ✅ SWIPE handlers (touch)
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startXRef.current = t.clientX;
    startYRef.current = t.clientY;
    isSwipingRef.current = true;
    // Pausa autoplay mientras el usuario interactúa
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (
      !isSwipingRef.current ||
      startXRef.current == null ||
      startYRef.current == null
    )
      return;

    const t = e.touches[0];
    const dx = t.clientX - startXRef.current;
    const dy = t.clientY - startYRef.current;

    // Si el usuario está scrolleando vertical, no interceptar
    if (Math.abs(dy) > Math.abs(dx)) return;

    // Evita scroll horizontal/bounce mientras se swipa
    e.preventDefault();
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (
      !isSwipingRef.current ||
      startXRef.current == null ||
      startYRef.current == null
    )
      return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startXRef.current;
    const dy = t.clientY - startYRef.current;

    const THRESHOLD = 50; // sensibilidad del swipe

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      if (dx < 0) next(); // swipe left -> next
      else prev(); // swipe right -> prev
    }

    startXRef.current = null;
    startYRef.current = null;
    isSwipingRef.current = false;

    // Reanuda autoplay después de un momentito (opcional)
    window.setTimeout(() => setIsPaused(false), 900);
  };

  const renderCta = (cta?: Slide["cta"]) => {
    if (!cta?.url) return null;

    const base =
      "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors";

    // CTA also respects slide theme (light vs dark controls)
    const ctaClasses = isLight
      ? "bg-[#606f70] text-white hover:bg-[#4f5d5e] shadow-sm"     // darker slate-teal
      : "bg-[#2e7279] text-white hover:bg-[#245d62] backdrop-blur-sm"; // darker teal


    if (isExternalUrl(cta.url)) {
      return (
        <a
          href={cta.url}
          target="_blank"
          rel="noreferrer"
          className={`${base} ${ctaClasses}`}
        >
          {cta.label}
        </a>
      );
    }

    return (
      <Link to={cta.url} className={`${base} ${ctaClasses}`}>
        {cta.label}
      </Link>
    );
  };

  return (
    <section
      className="relative h-[400px] lg:h-[500px] overflow-hidden"
      // ✅ Swipe en mobile
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      // ✅ Permite scroll vertical normal, y swipe horizontal dentro del componente
      style={{ touchAction: "pan-y" }}
    >
      {slides.map((s, idx) => {
        const isActive = current === idx;

        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
          >
            {/* Load only active slide image */}
            {isActive && (
              <img
                src={s.image}
                alt={s.alt}
                className={`absolute inset-0 w-full h-full object-cover z-0 ${idx === 0
                  ? "object-left"
                  : idx === 1
                    ? "object-left md:object-right"
                    : idx === 2
                      ? "object-left"
                      : "object-left lg:object-right"
                  }`}
                fetchPriority={idx === 0 ? "high" : undefined}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1920}
                height={1080}
              />
            )}

            <div className="relative h-full flex items-center z-10">
              <div
                className={`sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 w-full ${idx === 2 ? "" : "lg:flex"
                  }`}
              >
                {/* Keep slide text colors like your original (per slide) */}
                <div
                  className={
                    idx === 0
                      ? "text-[#1A2F3F] w-full md:w-[70%]"
                      : idx === 1
                        ? "text-white w-full md:w-[60%]"
                        : idx === 2
                          ? "text-white w-full md:w-[68%]"
                          : "text-[#000000]"
                  }
                >
                  <h2
                    className={`text-3xl md:text-4xl mb-2 ${idx === 2 || idx === 3 ? "font-bold" : ""
                      }`}
                  >
                    {s.title}
                  </h2>

                  {/* Meta (structured like Slide 1) */}
                  <div
                    className={`${idx === 0
                      ? "grid md:grid-cols-2 lg:gap-6 mt-6"
                      : "grid md:grid-cols-2 lg:gap-6"
                      }`}
                  >
                    <div>
                      {s.metaLeftLabel ? (
                        <p className="text-sm uppercase opacity-80">
                          {s.metaLeftLabel}
                        </p>
                      ) : null}

                      {s.metaLeftValue ? (
                        <p className="text-base mt-1 whitespace-pre-line">
                          {s.metaLeftValue}
                        </p>
                      ) : null}
                    </div>

                    <div>

                      {s.metaRightLabel ? (
                        <p className="text-sm uppercase opacity-80">{s.metaRightLabel}</p>
                      ) : null}

                      {s.metaRightText ? (
                        <p className="text-base mt-1 whitespace-pre-line">{s.metaRightText}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* ✅ Optional CTA */}
                  {s.cta?.url ? (
                    <div className="mt-6">{renderCta(s.cta)}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows (hidden on mobile) */}
      <button
        onClick={prev}
        className={`hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110 ${btnClasses} z-10`}
        aria-label="Prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className={`hidden sm:block absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110 ${btnClasses} z-10`}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots and Pause/Play */}
      <div className=" absolute bottom-1 sm:bottom-6 left-1/2 -translate-x-1/2 sm:flex items-center space-x-4 z-10">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 ${idx === current
              ? `${isLight ? "bg-white" : "bg-black"} w-12 h-3 rounded-full`
              : `${isLight
                ? "bg-white/50 hover:bg-white/75"
                : "bg-black/50 hover:bg-black/75"
              } w-3 h-3 rounded-full`
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          onClick={togglePause}
          className={`hidden sm:block p-3 rounded-full transition hover:scale-110 ${btnClasses}`}
          aria-label="Play/Pause"
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>
      </div>

      {/* Progress bar (adjust color per theme) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-10">
        <div
          className={`h-full transition-all duration-300 ease-linear ${isLight ? "bg-white" : "bg-black"
            }`}
          style={{ width: `${((current + 1) / length) * 100}%` }}
        />
      </div>
    </section>

  );
}
