import React, { useState, useEffect } from 'react';
import { Clock, Wrench, Sparkles, ArrowRight, Mail, Phone } from 'lucide-react';

const WorkInProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Diseño moderno y responsivo",
    "Sistema de citas en línea",
    "Portal de cursos interactivo",
    "Recursos terapéuticos digitales",
    "Plataforma de consultas virtuales"
  ];

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => setProgress(75), 500);
    
    // Cycle through features
    const featureTimer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(featureTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mt-6">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mr-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* <Brain className="w-10 h-10 text-white" /> */}
              <img className="w-20 h-20" src="/assets/logo/logo-main.png" alt="" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-white">INSTITUTO DE TERAPIA Y</h1>
              <p className="text-lg text-white">ANÁLISIS DE LA CONDUCTA</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white border-opacity-20">
            {/* Construction Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <Wrench className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center animate-ping">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Sitio en
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"> Construcción</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estamos trabajando arduamente para ofrecerte una experiencia digital excepcional. 
              Nuestro nuevo sitio web estará disponible muy pronto con herramientas innovadoras 
              para tu bienestar psicológico.
            </p>

            {/* Progress Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Progreso del desarrollo</span>
                <span className="text-teal-400 font-bold text-lg">{progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-2000 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Features Preview */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-teal-400" />
                Próximamente
              </h3>
              <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 min-h-[80px] flex items-center justify-center">
                <div className="flex items-center text-lg text-teal-300 font-medium">
                  <ArrowRight className="w-5 h-5 mr-3 text-teal-400" />
                  <span className="transition-all duration-500">
                    {features[currentFeature]}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
                <div className="flex items-start mb-3">
                  <Mail className="w-6 h-6 mr-3" />
                  <h4 className="font-semibold">Contáctanos</h4>
                </div>
                <p className="text-teal-100">informes@institutoterapiaconductual.com</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <div className="flex items-start mb-3">
                  <Phone className="w-6 h-6 mr-3" />
                  <h4 className="font-semibold">Llámanos</h4>
                </div>
                <p className="text-blue-100">55 5554220</p>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="space-y-4">
              <p className="text-gray-300">
                ¿Necesitas atención psicológica inmediata?
              </p>
              <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Agenda una consulta
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .duration-2000 {
          transition-duration: 2s;
        }
      `}</style>
    </div>
  );
};

export default WorkInProgress;