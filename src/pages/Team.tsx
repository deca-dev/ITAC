import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 'alejandra-castellanos',
      name: "Alejandra Castellanos",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual e instructora de Mindfulness.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'michel-reyes',
      name: "Michel Reyes",
      title: "Psicólogo",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificado",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'sara-sanchez',
      name: "Sara Sánchez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual e instructora de Mindfulness.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'claudia-ramirez',
      name: "Claudia Ramírez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'claudia-ramirez-2',
      name: "Claudia Ramírez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'karla-lopez',
      name: "Karla López",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'amalia-castillo',
      name: "Amalia Castillo",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'karla-garza',
      name: "Karla Garza",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'liliana-hernandez',
      name: "Liliana Hernández",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'ana-mira',
      name: "Ana Mira",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'nancy-leal',
      name: "Nancy Leal",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'patricia-mendoza',
      name: "Patricia Mendoza",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'susana-morales',
      name: "Susana Morales",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'liliana-fernandez',
      name: "Liliana Fernández",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'fabiola-mira',
      name: "Fabiola Mira",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada",
      order: "Orden alfabético - TBC"
    },
    {
      id: 'uriel-xicol',
      name: "Uriel Xicol Carreño",
      title: "Psicólogo",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificado",
      order: "Orden alfabético - TBC"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-600 text-white py-12 px-8 rounded-lg mb-12 relative overflow-hidden">
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-red-500 font-bold text-lg">Equipo infancia</span>
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Nuestro equipo</h2>
            <p className="text-lg">
              Contamos con un equipo de profesionales altamente capacitados y 
              apasionados por el bienestar psicológico y emocional.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-900">Confirmar especialidad - TBC</h3>
            <p className="text-blue-800">Especialistas</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Actividad física</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Mindfulness (En línea o presencial)</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Evaluación (Niños, adulto, adulto mayor, etc.)</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">TBC</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10 text-gray-600" />
              </div>
              
              <h3 className="font-bold text-lg text-center mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-3">{member.title}</p>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex-shrink-0 mt-0.5"></div>
                  <p>{member.specialty}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex-shrink-0 mt-0.5"></div>
                  <p>{member.description}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex-shrink-0 mt-0.5"></div>
                  <p>{member.years}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex-shrink-0 mt-0.5"></div>
                  <p>{member.certification}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 text-center space-y-2">
                <Link 
                  to={`/team/${member.id}`}
                  className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Ver Perfil
                </Link>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;