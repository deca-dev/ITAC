import React from "react";

const About = () => {
  const stats = [
    {
      number: "10+ años",
      label: "de experiencia editorial",
      icon: "/assets/icons/open-book.png",
    },
    {
      number: "50k",
      label: "lectores alcanzados",
      icon: "/assets/icons/eyeglasses.png",
    },
    {
      number: "+25",
      label: "colaboradores",
      icon: "/assets/icons/copy-writing.png",
    },
  ];

  return (
    <section className="py-16 bg-white bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              src="/assets/photos/Team_1.png"
              alt="Profesional de la salud mental"
              className="max-width-80 object-cover"
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span>
                <img
                  className="w-7 pr-3"
                  src="/assets/logo/logo_icon.png"
                  alt="Logo"
                />
              </span>
              <span className="text-sm">Nuestras publicaciones</span>
            </div>
            <h2 className="text-3xl  text-gray-900 mb-6 font-serif">
              Creando una Sociedad Mentalmente Saludable
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro compromiso es difundir el conocimiento a través de
              publicaciones científicas, investigación y desarrollo de prácticas
              especializadas.
            </p>

            <div className="bg-[#0f2c57] md:py-10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white divide-y md:divide-y-0 md:divide-x divide-white/30 text-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-4 py-4 flex justify-center items-center gap-3"
                  >
                    <div>
                      <img
                        src={stat.icon}
                        alt={`Icono ${stat.label}`}
                        className="w-16 md:w-17 object-contain filter-invert"
                      />
                    </div>
                    <div>
                      <div className="text-2xl text-yellow-400 font-serif">
                        {stat.number}
                      </div>
                      <div className="text-sm font-serif leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="pt-6 text-gray-600">
              Gracias a nuestro equipo multidisciplinario, acercamos los avances
              más recientes en salud mental a la comunidad hispanohablante
              mediante la publicación, traducción y colaboración en libros,
              impulsando el crecimiento profesional y la actualización constante
              en el área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
