import React from "react";
import { User, Phone, Mail } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Team = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  const teamMembers = [
    {
      name: "Sara Sánchez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description:
        "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual e instructora de Mindfulness.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
    },
    {
      name: "Michel Reyes",
      title: "Psicólogo",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description:
        "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificado",
    },
    {
      name: "Sara Sánchez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description:
        "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
    },
    {
      name: "Claudia Ramírez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description:
        "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
    },
  ];

  return (
    <section className="pt-16 bg-[#1A3459] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl mb-4 font-serif">Nuestro Equipo</h2>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft className="text-[#1A3459]" />
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronRight className="text-[#1A3459]" />
          </button>

          <div className="keen-slider max-width-90 mx-auto" ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white text-gray-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="flex flex-col items-start ">
                    {/* Name & Title */}
                    <p className="text-sm text-gray-600 text-center ">
                      {member.title}
                    </p>
                    <h3 className="font-bold text-lg text-start mb-1">
                      {member.name}
                    </h3>
                  </div>
                </div>
                {/* Specialty */}
                <div className="space-y-2 text-xs pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <img
                      src="/assets/icons/education-vector.png"
                      alt=""
                      className="w-4 h-4 mt-1"
                    />
                    <p>{member.specialty}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src="/assets/icons /briefcase-vector.png"
                      alt=""
                      className="w-4 h-4 mt-1"
                    />
                    <p>{member.years}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center mt-4 pt-4 text-center">
                  <button className="bg-[#ffff] hover:bg-[#5a7e7b] text-[#5a7e7b] px-4 py-2 rounded text-sm font-medium transition-colors">
                    Ver Perfil
                  </button>
                  <button className="bg-[#6b8f8c] hover:bg-[#5a7e7b] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    Contacto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:top-[70px] bg-white p-6">
          <div className=" bg-[#a7c9d5] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text */}
          <div className="text-white text-lg md:text-2xl font-serif leading-snug text-center md:text-left">
            <p className="font-semibold italic">¿Tienes dudas?</p>
            <p className="font-semibold">
              Déjanos aclaráralas y darte mayor información.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#1a4c59] hover:bg-[#153e48] text-white px-6 py-2 rounded-md font-medium transition-colors">
            Más información
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
