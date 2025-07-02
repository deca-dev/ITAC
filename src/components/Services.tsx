// src/components/Services.tsx
import React, { useState } from 'react';
import './css/services.css'; 
import { MessageCircle } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Activación Conductual",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description:
        "Activación Conductual (BA) es un tratamiento con respaldo empírico que aborda la depresión modificando factores contextuales. Considera el ánimo bajo como respuesta normal a circunstancias vitales y emplea estrategias como programación de actividades y reforzamiento positivo. En México ha mostrado eficacia en depresión y adicciones."
    },
    {
      title: "Terapia de Aceptación y Compromiso",
      image: "/assets/photos/woman-therapy.jpg",
      description:
        "ACT, con más de 35 años de investigación, cambia el enfoque de eliminar conductas problema a aceptar sensaciones, pensamientos y emociones aversivas. Al dejar de luchar contra el malestar, se avanza hacia objetivos valiosos. Considera muchos trastornos como evitación experiencial y ha demostrado eficacia, incluso en estudios realizados en México."
    },
    {
      title: "Terapia Cognitivo Conductual",
      image: "/assets/photos/couple.jpg",
      description:
        "La FAP, surgida hace 30 años, se basa en reforzar de manera natural conductas alternativas en la relación terapeuta-cliente. Ofrece soluciones para problemas cotidianos y múltiples trastornos, aportando también una teoría de la personalidad. En México, se ha investigado su eficacia y publicado manuales sobre su aplicación."
    },
    {
      title: "Psicoterapia analitica funcional",
      image: "/assets/photos/guy-therapy.jpg",
      description:
        "DBT combina análisis conductual, budismo Zen y dialéctica, y consta de terapia individual, entrenamiento grupal, soporte telefónico y consulta al terapeuta. Tiene fuerte evidencia en TLP y se adapta a otras patologías. Nuestro equipo investiga versiones abreviadas y adaptaciones para población estudiantil en México."
    }
  ];

  return (
    <section className="pt-16 bg-pattern ">
      <div className="mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col items-center px-4">
          <img className="w-16" src="/assets/logo/logo-main.png" alt="Logo" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quienes somos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una institución especializada en Terapia Contextual que forma, investiga y brinda atención psicológica desde 2010. Ofrecemos capacitación en Análisis del Comportamiento Clínico y métodos como ACT, FAP y BA. Además, asesoramos a instituciones en investigación y capacitación sobre estos enfoques. Colaboramos con programas de formación en México, América Latina y España, y participamos en congresos e investigaciones internacionales.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre terapias contextuales{" "}
            <a href="https://dbt-mexico.com/" className="services__header__anchor">
              aquí
            </a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-4 items-center">
            {/* Conoce DBT México Button */}
            <a
              href="https://dbt-mexico.com/"
              target="_blank"
              className="group flex items-center relative bg-slate-700 hover:bg-slate-800 text-white font-medium h-12 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <span className="relative z-10">Conoce DBT México</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* WhatsApp Contact Button */}
            <a
              href=""
              target="_blank"
              className="group relative bg-green-500 hover:bg-green-600 text-white font-medium h-12 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out flex items-center justify-center gap-3"
            >
              <img
                src="/assets/logo/whatsapp_logo.png"
                alt="Whatsapp Logo"
                className="w-10 z-10"
              />
              <span className="relative z-10">Contacto por Whatsapp</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        </div>

        <div className="services__explore__services__container">
          <div className="p-6 rounded-lg mb-8 max-w-7xl mx-auto">
            <h3 className="text-4xl font-semibold mb-2">
              Explora nuestros servicios especializados
            </h3>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform group-hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-all duration-500"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                      hoveredCard === index ? 'opacity-90' : 'opacity-60'
                    }`}
                  />

                  {/* Title & Description */}
                  <div className="absolute bottom-0 text-left p-4 flex flex-col">
                    <h4
                      className={`text-white font-semibold transition-all duration-500 ${
                        hoveredCard === index ? 'text-lg mb-3' : 'text-base'
                      }`}
                    >
                      {service.title}
                    </h4>

                    <div
                      className={`transition-all duration-500 overflow-auto flex-1 ${
                        hoveredCard === index
                          ? 'max-h-96 opacity-100 transform translate-y-0'
                          : 'max-h-0 opacity-0 transform translate-y-4'
                      }`}
                    >
                      <p className="text-white text-sm leading-tight">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
