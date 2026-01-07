// src/components/AcademicOffer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { courses, type Course } from "../assets/courses";
import "./css/academicoffer.css";

export default function AcademicOffer() {
  return (
    <section className="pb-16 bg-white bg-pattern">
      <header className="relative isolate overflow-hidden mb-12">
        {/* background color + waves */}
        <div className="bg-[#1A3459]">
           {/* waves overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img
                src="/assets/bg/bg-pattern-academic-formation.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           

            {/* grid avoids overlap; stacks on <md */}
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-8 items-center py-10 md:py-14 lg:py-16 min-h-[240px]">
              {/* left: text */}
              <div className="text-white">
                <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  Formación Académica
                </h1>
                <p className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed">
                  Sesiones impartidas por expertos para todos los niveles de experiencia.
                </p>
              </div>

              {/* right: image (own column, no absolute) */}
              <div className="hidden md:block justify-self-end">
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full">
                  <img
                    src="/assets/images/academic-formation-woman.png"
                    alt="Portada libros"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="pb-16">Nuestra oferta académica está diseñada para brindar formación de vanguardia a profesionales de la salud, la psicología y otras áreas. Con programas de diplomados, cursos y talleres prácticos, ofrecemos herramientas basadas en evidencia para el manejo de diversas problemáticas emocionales y conductuales. Todos nuestros programas están impartidos por expertos con enfoque teórico y práctico, preparados para potenciar el desarrollo de habilidades clínicas y el impacto positivo en la vida de los pacientes.</p>


        {/* Grid of course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg text-[#6C6767] font-bold mb-3">
                  {course.title}
                </h3>
                <p className="text-sm  flex-grow whitespace-pre-wrap">
                  {course.subtitle}
                </p>
                <p className="mt-4 text-sm text-[#719A9E] font-bold whitespace-pre-wrap">
                  {course.dates}
                </p>
                <Link
                  to={`/formacion-academica/${course.slug}`}
                  className="mt-6 inline-flex items-center font-medium text-sm"
                >
                  Ver más{" "}
                  <span className="relative ml-1 border-solid px-4 py-2 transition-colors hover:text-white">
                    <img
                      className="w-3 absolute top-1/2 left-0 transform -translate-y-1/2"
                      src="/assets/icons/right-chevron.png"
                      alt=""
                    />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
