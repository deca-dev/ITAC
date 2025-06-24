import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AcademicOfferDetail = () => {
  const { courseId } = useParams();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/academic-offer" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Oferta Académica
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Diplomado en Terapia de Aceptación y Compromiso
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Formación teórico-práctica para desarrollar habilidades clínicas basadas en ACT, con énfasis en valores, mindfulness y flexibilidad psicológica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-blue-200 p-8 rounded-lg">
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Objetivo:</h4>
                <p>Desarrollar las competencias clínicas y herramientas conceptuales para implementar ACT tanto en el tratamiento psicoterapéutico de diversos trastornos psicológicos, como en el desarrollo de habilidades clínicas y el impacto positivo en la vida de los consultantes.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Fechas:</h4>
                <p>25-26 Septiembre, Junio 8 y 9 de Marzo 2025</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Horario:</h4>
                <p>Sábado: 9:00 a.m. a 2:00 p.m. y Viernes 4:7 p.m.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Duración:</h4>
                <p>120 horas (60 horas teóricas y 60 horas prácticas)</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Ponentes:</h4>
                <p>Dr. Armando Canto</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Dirigido:</h4>
                <p>Calzada Belisario Domínguez #161 Col. del Carmen, Coyoacán, CDMX</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Modalidad:</h4>
                <p>Presencial con Certificación en Educación Continua por la Universidad de Ciencias y Artes de Chiapas</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Dirigido a:</h4>
                <p>Estudiantes de Psicología de la Facultad de Medicina de la Universidad Nacional Autónoma de México</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Informes e Inscripción:</h4>
                <p>informes@institutoterapiaconductual.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-500 font-semibold">Imagen circular</span>
              </div>
              <img 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Terapia de Aceptación y Compromiso"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-4">Explora los Especialistas</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm">ATOYAC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm">Participantes</span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Calz. Belisario Domínguez 141<br/>
                    Col. Belisario Domínguez Secc 16<br/>
                    Tlalpan, 14080 Ciudad de<br/>
                    México, CDMX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicOfferDetail;