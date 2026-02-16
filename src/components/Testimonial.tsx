// src/components/AcademicFormation.tsx
import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: `Aunque tenía ya un acercamiento a ACT me fue muy enriquecedor y clarificador, ya que no comprendía muy bien cómo observar, identificar las funciones y formular un caso con la perspectiva. Pude comprender mejor conciencia plena, atención y relaciones.`,
    author: `Diana D. (Asistente Taller ACT)`,
  },
  {
    quote: `Fue un nuevo aprendizaje, no tenía conocimientos sobre ACT. Me pareció muy interesante y digerible la forma de presentarlo de parte de las ponentes. Muy práctico y ejemplos reales.`,
    author: `Nora V. (Asistente Taller ACT)`,
  },
  {
    quote: `Ha sido una jornada de mucho conocimiento, que tuvo la característica de ser experiencial y se dirige a su uso en la práctica clínica.`,
    author: `Gina C. (Asistente Taller ACT)`,
  },
  {
    quote: `Quedo muy satisfecha de estos dos días, la información, entrega y apertura de las ponentes fueron excelentes, muy claras en sus exposiciones y role-playing, ha sido un taller de mucho conocimiento y esperanza para llevarlo a los consultantes y familias peruanas, les agradezco su paciencia, conocimiento, cariño y buen ánimo`,
    author: `Karina L. (Asistente Taller Familias y parejas desde DBT)`,
  },
  {
    quote: `Me agradó la agilidad, la claridad y experiencia con la que las facilitadoras del taller compartieron los conocimientos sobre DBT en parejas y familias. Los juegos de roles reforzaron la teoría y clarificaron los temas impartidos. Me será de mucha utilidad para mi práctica clínica. ¡Gracias y muchas felicidades!`,
    author: `Ericka O. (Asistente Taller Familias y parejas desde DBT)`,
  },
  {
    quote: `La información proporcionada en el taller es muy clara y con muchos ejemplos. Las maestras fueron muy dinámicas y los ejercicios sirvieron para reafirmar lo aprendido.`,
    author: `Raquel G. (Asistente Taller Familias y parejas desde DBT)`,
  },
  {
    quote: `Estoy muy contenta por haber tenido la oportunidad de entrar a este taller, me llevo muchos conocimientos y nuevas habilidades. Además, pude tener claridad sobre conceptos que había leído sobre DBT y no los tenía aterrizados. Me voy muy contenta, agradeciendo su tiempo y conocimiento.`,
    author: `Yerani R. (Asistente Taller Familias y parejas desde DBT)`,
  },
];

export default function AcademicFormation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  // measure slide width (including gap) on mount + resize
  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;

      const first = el.querySelector<HTMLElement>("[data-slide]");
      if (!first) return;

      // gap is coming from space-x-8 => 2rem => 32px
      setSlideWidth(first.offsetWidth + 32);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goNext = () => {
    const el = containerRef.current;
    if (!el || !slideWidth) return;

    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: slideWidth, behavior: "smooth" });
  };

  const goPrev = () => {
    const el = containerRef.current;
    if (!el || !slideWidth) return;

    const atStart = el.scrollLeft <= 1;
    if (atStart) {
      // jump to last full slide
      const last = Math.max(0, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: last, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  // auto-slide
  useEffect(() => {
    if (!slideWidth || paused) return;

    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideWidth, paused]);

  return (
    <section className="py-16 bg[#D9D9D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-4xl text-gray-900 mb-6 !font-barlowCond">Testimonios</h2>
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10 p-2"
          >
            <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10 p-2"
          >
            <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="overflow-x-auto flex space-x-8 snap-x snap-mandatory -mx-4 px-4 scroll-smooth"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                data-slide
                className="snap-start flex-shrink-0 w-full px-4 font-serif font-bold"
              >
                <blockquote className="text-lg md:text-xl font-light text-gray-700 mb-4">
                  “{t.quote}”
                </blockquote>
                <cite className="block text-sm text-gray-600">- {t.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
