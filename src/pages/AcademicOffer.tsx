import React from 'react';
import { Link } from 'react-router-dom';

const AcademicOffer = () => {
  const courses = [
    {
      id: 'act-therapy',
      title: "Diplomado en Terapia de Aceptación y Compromiso",
      description: "Aprende a aplicar la Terapia de Aceptación y Compromiso (ACT) para el tratamiento psicoterapéutico de diversos trastornos psicológicos, así como para el desarrollo de habilidades clínicas y el impacto positivo en la vida de los consultantes.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-sud',
      title: "Curso-Taller: Terapia Dialéctica Conductual para Consultores de Sustancias (DBT-SUD)",
      description: "Diseña estrategias para analizar la regulación emocional, la tolerancia al malestar y las habilidades de efectividad interpersonal en el contexto del abuso de sustancias clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-fundamentals',
      title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual (La Comprensión)",
      description: "Aprende a aplicar la DBT desde una perspectiva de la terapia conductual de tercera generación para el tratamiento de diversos trastornos de la personalidad y otros trastornos de salud mental clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'act-therapy-2',
      title: "Diplomado en Terapia de Aceptación y Compromiso",
      description: "Aprende a aplicar la Terapia de Aceptación y Compromiso (ACT) para el tratamiento psicoterapéutico de diversos trastornos psicológicos, así como para el desarrollo de habilidades clínicas y el impacto positivo en la vida de los consultantes.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-sud-2',
      title: "Curso-Taller: Terapia Dialéctica Conductual para Consultores de Sustancias (DBT-SUD)",
      description: "Diseña estrategias para analizar la regulación emocional, la tolerancia al malestar y las habilidades de efectividad interpersonal en el contexto del abuso de sustancias clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-fundamentals-2',
      title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual (La Comprensión)",
      description: "Aprende a aplicar la DBT desde una perspectiva de la terapia conductual de tercera generación para el tratamiento de diversos trastornos de la personalidad y otros trastornos de salud mental clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'act-therapy-3',
      title: "Diplomado en Terapia de Aceptación y Compromiso",
      description: "Aprende a aplicar la Terapia de Aceptación y Compromiso (ACT) para el tratamiento psicoterapéutico de diversos trastornos psicológicos, así como para el desarrollo de habilidades clínicas y el impacto positivo en la vida de los consultantes.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-sud-3',
      title: "Curso-Taller: Terapia Dialéctica Conductual para Consultores de Sustancias (DBT-SUD)",
      description: "Diseña estrategias para analizar la regulación emocional, la tolerancia al malestar y las habilidades de efectividad interpersonal en el contexto del abuso de sustancias clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      id: 'dbt-fundamentals-3',
      title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual (La Comprensión)",
      description: "Aprende a aplicar la DBT desde una perspectiva de la terapia conductual de tercera generación para el tratamiento de diversos trastornos de la personalidad y otros trastornos de salud mental clínica.",
      date: "Ver más →",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 text-white py-12 px-8 rounded-lg mb-12 relative overflow-hidden">
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full">
              <img 
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                alt="Academic offering"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Oferta académica</h2>
            <p className="text-lg">
              Sesiones impartidas por expertos para todos los niveles de experiencia.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-6">
            Nuestra oferta académica está diseñada para brindar formación de vanguardia a profesionales de la salud, la psicología y otras áreas. Con programas de diplomados, cursos especializados y talleres prácticos, nuestros programas están estructurados por nuestros expertos con enfoque teórico y práctico, preparados para potenciar el desarrollo de habilidades clínicas y el impacto positivo en la vida de los consultantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                <Link 
                  to={`/academic-offer/${course.id}`}
                  className="text-teal-600 font-semibold text-sm cursor-pointer hover:text-teal-700 transition-colors"
                >
                  {course.date}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicOffer;