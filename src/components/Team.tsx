import React from "react";
import { User, Phone, Mail } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers, type TeamMember } from '../assets/team';


const Team = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });


  // const teamMembers = [
  //   {
  //     name: "Aldo Rico",
  //     title: "Psicólogo",
  //     specialty: "Terapia Racional Emotiva Conductual",
  //     description:
  //       "Psicólogo Clínico licenciado, especializado en TREC y co-entrenador de grupos DBT para adultos y familias.",
  //     years: "5+ años de experiencia",
  //     certification: "Licenciado",
  //     photo: "aldo-rico",
  //   },
  //   {
  //     name: "Alejandra Castellanos",
  //     title: "Mtra.",
  //     specialty: "Terapia Cognitivo Conductual",
  //     description:
  //       "Psicóloga Clínica especializada en Terapias Contextuales, con estudios de maestría en Terapia Cognitivo Conductual y terapeuta DBT certificada.",
  //     years: "15+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "alejandra-castellanos",
  //   },
  //   {
  //     name: "Amalia Castillo",
  //     title: "Mtra.",
  //     specialty: "Terapia de Aceptación y Compromiso",
  //     description:
  //       "Psicoterapeuta Conductual Contextual, máster en Terapia de Aceptación y Compromiso y experta en Psicoterapia Analítica Funcional y Mindfulness.",
  //     years: "8+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "amalia-castillo",
  //   },
  //   {
  //     name: "Claudia Ramírez",
  //     title: "Mtra.",
  //     specialty: "Terapia Cognitivo Conductual",
  //     description:
  //       "Psicóloga Clínica Institucional, maestra en Psicoterapia Cognitivo Conductual, coordinadora académica y supervisora clínica con formación en DBT, ACT y BA.",
  //     years: "25+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "claudia-ramirez",
  //   },
  //   {
  //     name: "Fabiola Mora",
  //     title: "Psicóloga",
  //     specialty: "Psicología Clínica",
  //     description:
  //       "Psicóloga Clínica, licenciada en Psicología y especialista en Psicooncología, con formación en ACT, DBT, BA y Mindfulness aplicado.",
  //     years: "5+ años de experiencia",
  //     certification: "Licenciada",
  //     photo: "fabiola-mora",
  //   },
  //   {
  //     name: "Karla Garza",
  //     title: "Psicóloga",
  //     specialty: "Terapia Dialéctica Conductual",
  //     description:
  //       "Psicóloga Clínica, licenciada en Psicología con diplomado en intervenciones psicoterapéuticas, especializada en DBT grupal.",
  //     years: "7+ años de experiencia",
  //     certification: "Licenciada",
  //     photo: "karla-garza",
  //   },
  //   {
  //     name: "Karla López",
  //     title: "Psicóloga",
  //     specialty: "Psicología Clínica",
  //     description:
  //       "Psicóloga Clínica licenciada, maestra en Psicología Clínica, entrenadora líder en habilidades multifamiliares DBT.",
  //     years: "10+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "karla-lopez",
  //   },
  //   {
  //     name: "Liliana Fernández",
  //     title: "Psicóloga",
  //     specialty: "Neuropsicología Clínica",
  //     description:
  //       "Psicóloga Clínica licenciada, con formación en evaluación neuropsicológica y supervisora de programas DBT-A y FAP.",
  //     years: "6+ años de experiencia",
  //     certification: "Licenciada",
  //     photo: "liliana-fernandez",
  //   },
  //   {
  //     name: "Michel Reyes",
  //     title: "Dr.",
  //     specialty: "Investigación Psicológica",
  //     description:
  //       "Doctor en Investigación Psicológica, experto en DBT y ACT, autor de libros científicos y docente en programas de posgrado internacionales.",
  //     years: "20+ años de experiencia",
  //     certification: "Doctor",
  //     photo: "michel-reyes",
  //   },
  //   {
  //     name: "Nancy Leal",
  //     title: "Mtra.",
  //     specialty: "Psicología Clínica",
  //     description:
  //       "Psicóloga Clínica, maestra en Psicología Clínica, terapeuta de adolescentes y entrenadora en habilidades DBT.",
  //     years: "7+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "nancy-leal",
  //   },
  //   {
  //     name: "Patricia Mendoza",
  //     title: "Mtra.",
  //     specialty: "Psicología Clínica",
  //     description:
  //       "Psicóloga Clínica maestra, especializada en DBT y ACT, docente y supervisora en entornos hospitalarios.",
  //     years: "6+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "patricia-mendoza",
  //   },
  //   {
  //     name: "Sarai Sánchez",
  //     title: "Mtra.",
  //     specialty: "Terapia Cognitivo Conductual",
  //     description:
  //       "Maestra en Terapia Cognitivo Conductual, especializada en Terapias Contextuales para población infantil y adolescente, con amplia experiencia en Mindfulness e instructora escolar.",
  //     years: "5+ años de experiencia",
  //     certification: "Maestra",
  //     photo: "sarai-sanchez",
  //   },
  //   {
  //     name: "Uriel Xchel",
  //     title: "Psicólogo",
  //     specialty: "Terapia de Aceptación y Compromiso",
  //     description:
  //       "Psicólogo Clínico licenciado con formación en ACT, DBT, BA y FAP, y facilitador de talleres socioemocionales.",
  //     years: "5+ años de experiencia",
  //     certification: "Licenciado",
  //     photo: "uriel-xchel",
  //   },
  // ];

  return (
    <section className="pt-16 bg-[#1A3459] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl mb-4 font-serif">Nuestro Equipo</h2>
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

          <div className="keen-slider max-w-[82%] mx-auto" ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col keen-slider__slide bg-white text-gray-900 rounded-lg p-6 px-4 shadow-lg"
              >
                <div className="flex justify-center gap-2 items-center">
                  {/* Avatar */}
                  <div className="w-[80px] h-[80px] rounded-full mb-4 flex items-center justify-center">
                    <img
                       src={`/assets/photos/headshots/${member.photo}.png`}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex flex-col items-start ">
                    {/* Name & Title */}
                    <p className="text-sm text-gray-600 text-start ">
                      {member.title}
                    </p>
                    <h3 className="font-bold text-sm text-start mb-1">
                      {member.name}
                    </h3>
                  </div>
                </div>
                {/* Specialty */}
                <div className="space-y-2 text-xs pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/education-vector.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p>{member.specialty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/briefcase-vector.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p>{member.years}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center pt-8 text-center mt-auto">
                  <button className="bg-white text-[#5a7e7b] border border-transparent hover:border-[#5a7e7b] px-4 py-2 rounded text-sm font-medium transition-colors">
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

        <div className="relative top-[58px] lg:top-[70px] bg-white p-6 shadow-lg z-10">
          <div className=" bg-[#a7c9d5] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 ">
            {/* Text */}
            <div className="text-white text-lg md:text-2xl font-serif leading-snug text-center md:text-left ">
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
