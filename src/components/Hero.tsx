// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export const slides = [
  {
    id: 1,
    title: "Diplomado en Terapia de Aceptación y Compromiso",
    subtitle: "Formación especializada en ACT (3ra Generación)",
    date: "Marzo - Septiembre 2025",
    schedule: "Sábados 9:00 - 14:00 hrs",
    mode: "Presencial y Online",
    icon: Brain,
    bgGradient: "from-blue-600 to-indigo-700",
    bgSvg: "/waves/wave1.svg",
    features: [
      "Certificación Universitaria",
      "120 horas académicas",
      "Práctica supervisada",
      "Enfoque contextual",
    ],
  },
  {
    id: 2,
    title: "Curso-Taller: DBT TEAMS",
    subtitle: "Logrando los más altos estándares de calidad en DBT",
    date: "31 de Mayo y 1 de Junio 2025",
    schedule: "Intensivo de fin de semana",
    mode: "Presencial y Online",
    // icon: Users,
    bgGradient: "from-teal-600 to-cyan-700",
    bgSvg: "/waves/wave2.svg",
    features: [
      "Ponente: Ronda Reitz, PhD.",
      "Metodología intensiva",
      "Certificado internacional",
      "Trabajo en equipo",
    ],
  },
  {
    id: 3,
    title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual",
    subtitle: "DBT para población infantil y adolescente",
    date: "06 – 07 Junio 2025",
    schedule: "Guadalajara, México",
    mode: "Presencial",
    // icon: BookOpen,
    bgGradient: "from-green-600 to-emerald-700",
    bgSvg: "/waves/wave3.svg",
    features: [
      "Especialización infantil",
      "Enfoque familiar",
      "Técnicas adaptadas",
      "Supervisión clínica",
    ],
  },
  {
    id: 4,
    title: "Entrenamiento Intensivo en DBT-C",
    subtitle: "Terapia Dialéctica Conductual para población infantil",
    date: "Dic 2025 – Jul 2026",
    schedule: "CDMX, México",
    mode: "Programa extendido",
    // icon: Award,
    bgGradient: "from-purple-600 to-violet-700",
    bgSvg: "/waves/wave4.svg",
    features: [
      "Ponentes internacionales",
      "Certificación avanzada",
      "Práctica clínica",
      "Seguimiento personalizado",
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);
  const goTo = (i) => setCurrent(i);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => {
        const Icon = slide.icon;
        return (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-800 ease-in-out
              ${i === current ? "opacity-100 translate-x-0" : "opacity-0"}
            `}
          >
            {/* background wave */}
            <img
              src={slide.bgSvg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            />
            {/* gradient overlay */}
            <div
              className={`relative h-full bg-gradient-to-br ${slide.bgGradient}`}
            >
              {/* content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Text block */}
                    <div className="text-white z-10">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 ${slide.bgGradient
                            .split(" ")[0]
                            .replace("from-", "bg-")} rounded-2xl
                          flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-sm font-medium opacity-90">
                          INSTITUTO DE TERAPIA Y ANÁLISIS DE LA CONDUCTA
                        </div>
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
                        {slide.subtitle}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-sm font-semibold mb-1">
                            Fechas
                          </div>
                          <div className="text-lg">{slide.date}</div>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-sm font-semibold mb-1">
                            Modalidad
                          </div>
                          <div className="text-lg">{slide.mode}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-8 z-10">
                        {slide.features.map((f, idx) => (
                          <span
                            key={idx}
                            className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                          Más información
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                          Inscríbete ahora
                        </button>
                      </div>
                    </div>
                    {/* Big decorative icon */}
                    <div className="hidden lg:flex justify-center items-center z-10">
                      <div className="relative">
                        <div
                          className={`w-80 h-80 ${slide.bgGradient
                            .split(" ")[1]
                            .replace("to-", "bg-")} rounded-3xl transform rotate-12 opacity-20`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-64 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Icon className="w-32 h-32 text-white opacity-80" />
                          </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                          <div className="text-2xl font-bold text-white">
                            {slide.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-4 rounded-full transition transform hover:scale-110 z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-4 rounded-full transition transform hover:scale-110 z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 ${
              idx === current
                ? "w-12 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full"
            }`}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20 z-10">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((current + 1) / length) * 100}%` }}
        />
      </div>
    </section>
  );
}
