import React from 'react';

const About = () => {
  const stats = [
    { number: "10+", label: "años de experiencia" },
    { number: "500+", label: "pacientes atendidos" },
    { number: "25+", label: "profesionales certificados" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-600 text-white p-2 rounded-lg inline-block mb-4">
              <span className="text-sm font-semibold">Nuestras publicaciones</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Creando una Sociedad Mentalmente Saludable
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro compromiso es difundir el conocimiento a través de publicaciones 
              científicas, investigación y desarrollo de prácticas especializadas.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-900 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              Somos el primer equipo multidisciplinario, preparado con estándares que requiere un análisis 
              científico y una metodología clínica especializada, orientada a la prevención, evaluación y 
              tratamiento de los trastornos psicológicos.
            </p>
          </div>

          <div>
            <img 
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
              alt="Profesional de la salud mental"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;