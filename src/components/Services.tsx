import React, { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Activación Conductual",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Aplicación Conductual del Análisis Funcional en el tratamiento de los trastornos de ansiedad y depresión. Una terapia basada en evidencia que se enfoca en aumentar las actividades significativas y placenteras para mejorar el estado de ánimo y reducir los síntomas depresivos."
    },
    {
      title: "Terapia de Aceptación y Compromiso",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "ACT: una nueva forma de abordar los problemas de salud mental desde una perspectiva contextual. Esta terapia ayuda a las personas a desarrollar flexibilidad psicológica, aceptar experiencias difíciles y comprometerse con acciones basadas en valores personales."
    },
    {
      title: "Terapia Cognitivo Conductual",
      image: "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "La terapia cognitivo conductual como tratamiento de primera línea para diversos trastornos psicológicos. Se enfoca en identificar y modificar patrones de pensamiento y comportamiento disfuncionales para mejorar el bienestar emocional."
    },
    {
      title: "Terapia de Pareja y Familia",
      image: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Un enfoque sistémico para abordar los conflictos familiares y de pareja desde una perspectiva conductual. Trabajamos en mejorar la comunicación, resolver conflictos y fortalecer los vínculos familiares a través de técnicas basadas en evidencia."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una institución especializada en Terapia Conductual que brinda servicios y cursos 
            de formación en el área de la psicología clínica y educativa.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-teal-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-teal-900 mb-2">
              Explora nuestros servicios especializados
            </h3>
            <p className="text-teal-800">
              Pasa el cursor sobre cada servicio para conocer más detalles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-90' : 'opacity-60'
                  }`} />
                  
                  {/* Title - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className={`text-white font-semibold transition-all duration-500 ${
                      hoveredCard === index ? 'text-lg mb-3' : 'text-base'
                    }`}>
                      {service.title}
                    </h4>
                    
                    {/* Description - Shows on hover */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      hoveredCard === index 
                        ? 'max-h-96 opacity-100 transform translate-y-0' 
                        : 'max-h-0 opacity-0 transform translate-y-4'
                    }`}>
                      <p className="text-white text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <button className="mt-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Más información
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full transition-all duration-300 ${
                    hoveredCard === index ? 'scale-150 bg-teal-300' : 'scale-100'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Articles Section */}
        <div className="bg-teal-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-teal-900 mb-6">
            Explora nuestros artículos especializados
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                Aplicación Conductual del Análisis Funcional en el tratamiento de los trastornos de ansiedad y depresión.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                ACT: una nueva forma de abordar los problemas de salud mental desde una perspectiva contextual.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                La terapia cognitivo conductual como tratamiento de primera línea para diversos trastornos psicológicos.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                Un enfoque sistémico para abordar los conflictos familiares y de pareja desde una perspectiva conductual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;