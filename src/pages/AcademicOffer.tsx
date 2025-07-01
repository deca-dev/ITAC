// src/components/AcademicOffer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { courses, type Course } from "../assets/courses";
import "./css/academicoffer.css"; 

export default function AcademicOffer() {
  return (
    <section className="pb-16 bg-gray-50">
      <div className=" mx-auto ">
        {/* Hero Banner */}
       <div className="bg-[#1A3459] bg-[url('/assets/bg/bg-pattern-academic-offer.png')] bg-cover bg-center text-white h-[400px] py-12 px-8 mb-12 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
          <div className="w-80 overflow-hidden absolute right-[-5rem] top-1/2 transform-translate-y-1/2 academic-offer-banner">
              <img
                src="/assets/photos/academic-offer-banner-woman.png"
                alt="Academic lecture"
                className="w-full h-full object-cover"
              />
          </div>
          </div>
          <div className="mt-8 max-w-7xl mx-auto px-4">
            <h2 className="font-serif text-3xl mb-4">Formación académica</h2>
            <p className="text-lg">
              Sesiones impartidas por expertos para todos los niveles de
              experiencia.
            </p>
          </div>
        </div>
        <div className="max-w-7xl px-8 mx-auto bg-pattern">
          {/* Introduction */}
          <div className="max-w-7xl mb-8">
            <p className="text-gray-600 mb-6">
              Nuestra oferta académica está diseñada para brindar formación de
              vanguardia a profesionales de la salud, la psicología y otras
              áreas. Con programas de diplomados, cursos especializados y
              talleres prácticos, nuestros programas están estructurados por
              expertos con un sólido enfoque teórico-práctico, preparados para
              potenciar el desarrollo de habilidades clínicas y generar un
              impacto positivo en la vida de los consultantes.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="max-w-7xl  grid md:grid-cols-3 gap-8">
            {courses.map((course: Course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {course.subtitle}
                  </p>
                  <Link
                    to={`/academic-offer/${course.slug}`}
                    className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                  >
                    Ver más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
