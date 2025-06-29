import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sara Sánchez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual e instructora de Mindfulness.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada"
    },
    {
      name: "Michel Reyes",
      title: "Psicólogo",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificado"
    },
    {
      name: "Sara Sánchez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada"
    },
    {
      name: "Claudia Ramírez",
      title: "Psicóloga",
      specialty: "Especialista en Terapia Cognitivo Conductual",
      description: "Maestría en Terapia Cognitivo Conductual, con especialidad en Terapia de Aceptación y Compromiso y en la Terapia Dialéctica Conductual.",
      years: "7+ años de Práctica Cognitiva",
      certification: "Certificada"
    }
  ];

  return (
    <section className="py-16 bg-[#1A3459] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
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

              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-600 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">¿Algunas dudas?</h3>
          <p className="mb-4">Déjanos aclarártelas y darte mayor información.</p>
          <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;