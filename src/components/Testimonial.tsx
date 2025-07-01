// src/components/AcademicFormation.tsx
import React, { useRef, useEffect } from 'react';

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
  const slideWidth =  containerRef.current?.firstChild instanceof HTMLElement
    ? (containerRef.current.firstChild as HTMLElement).offsetWidth + 32
    : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      // scroll by one slide width, loop
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: slideWidth, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideWidth]);

  return (
    <section className="py-16 bg[#D9D9D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={containerRef}
          className="overflow-x-auto flex space-x-8 snap-x snap-mandatory -mx-4 px-4 scroll-smooth"
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-full px-4 font-serif font-bold">
              <blockquote className="text-lg md:text-xl font-light text-gray-700 mb-4">
                “{t.quote}”
              </blockquote>
              <cite className="block text-sm text-gray-600">- {t.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
