import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, ArrowLeft } from 'lucide-react';

const TeamMemberDetail = () => {
  const { memberId } = useParams();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/team" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Equipo
          </Link>
        </div>

        <div className="bg-gray-900 text-white py-12 px-8 rounded-lg mb-12 relative overflow-hidden">
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-48 h-48 bg-white bg-opacity-20 rounded-lg">
              <img 
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                alt="Mtra. A. Sarai Sánchez Morales"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Mtra. A. Sarai Sánchez Morales</h2>
            <p className="text-lg">
              Psicoterapeuta Conductual Contextual especializada en niños y adolescentes. 
              Maestra en Terapia Cognitivo Conductual, con especialidad en Terapia de 
              Aceptación y Compromiso y en la Terapia Dialéctica Conductual e instructora de 
              Mindfulness.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded mr-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">📚</span>
                </div>
                Educación
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>• Maestría en Terapia Cognitivo Conductual.</li>
                <li>• Especialista en Terapia de Aceptación y Compromiso con niños y adolescentes por el Madrid Institute of Contextual Psychology</li>
                <li>• Especialista en Mindfulness aplicado en la terapia con adolescentes por el Center for Adolescent Studies (California, EUA).</li>
                <li>• Instructora de Mindfulness en el contexto escolar por Mindful Schools Organization (California, EUA).</li>
                <li>• Especialista en Terapia de Aceptación y Compromiso por:</li>
                <li className="ml-6">• Instituto ACT España</li>
                <li className="ml-6">• Madrid Institute of Contextual Psychology</li>
                <li className="ml-6">• Association for Contextual Behavioral Science</li>
                <li className="ml-6">• Latinoamérica Contextual</li>
                <li>• Entrenamiento en Análisis Conductual Aplicado (ABA).</li>
                <li>• Entrenamiento en Activación Conductual para la Depresión (BA).</li>
                <li>• Entrenamiento en Terapia de Procesamiento Cognitivo (CPT) con R. Robinow y K. Strachan.</li>
                <li>• Entrenamiento certificado en Terapia Dialéctica Conductual (DBT), incluyendo:</li>
                <li className="ml-6">• DBT para adolescentes y adultos</li>
                <li className="ml-6">• DBT para TEPT Complejo</li>
                <li className="ml-6">• Exposición Prolongada</li>
                <li className="ml-6">• Terapia de Procesamiento Cognitivo</li>
                <li>• Todos avalados por Behavioral Tech del Linehan Institute y DBT Iberoamérica</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded mr-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💼</span>
                </div>
                Experiencia
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Tipografía en azul</p>
                </div>
                <ul className="space-y-2">
                  <li>• Psicoterapeuta Conductual Contextual especializada en niños y adolescentes</li>
                  <li>• Coordinadora del área de Mindfulness en el Instituto de Terapia y Análisis de la Conducta, tratamientos y privados.</li>
                  <li>• Terapeuta integrante al trabajo clínico con niños, adolescentes y sus familias.</li>
                  <li>• Docente de Diplomado en Psicología Clínica e Intervenciones Psicoterapéuticas en la UNAM (Facultad de Medicina)</li>
                  <li>• Supervisora de estudiantes de psicología en prácticas profesionales en México y Argentina.</li>
                  <li>• Supervisora Clínica individual y grupal en México y Argentina.</li>
                  <li>• Miembro del equipo de investigación en Terapia Dialéctica Conductual (CDMX), equipo verificado por Behavioral Tech y el Linehan Institute.</li>
                  <li>• Miembro del equipo DBT México – Clínica de Especialidad en Terapia Dialéctica Conductual (CDMX), equipo verificado por Behavioral Tech y el Linehan Institute.</li>
                  <li>• Instructora de Mindfulness en el contexto escolar.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">55-55-547420</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">sarai.sanchez@itst-mexico.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">sarai.sanchez@institutoterapiaconductual.com</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Agendar Cita
              </button>
            </div>

            <div className="bg-teal-100 p-6 rounded-lg">
              <div className="w-32 h-32 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-24 h-24 bg-teal-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;