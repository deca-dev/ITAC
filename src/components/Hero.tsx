import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Users, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Diplomado en Terapia de Aceptación y Compromiso",
      subtitle: "Formación especializada en ACT (3ra Generación)",
      date: "Marzo - Septiembre 2025",
      schedule: "Sábados 9:00 - 14:00hrs",
      mode: "Presencial y Online",
      icon: Brain,
      bgColor: "from-blue-600 to-indigo-700",
      accentColor: "bg-yellow-400",
      features: ["Certificación Universitaria", "120 horas académicas", "Práctica supervisada", "Enfoque contextual"]
    },
    {
      id: 2,
      title: "Curso-Taller: DBT TEAMS",
      subtitle: "Logrando los más altos estándares de calidad en DBT",
      date: "31 de Mayo y 1 de Junio 2025",
      schedule: "Intensivo de fin de semana",
      mode: "Presencial y Online",
      icon: Users,
      bgColor: "from-teal-600 to-cyan-700",
      accentColor: "bg-orange-400",
      features: ["Ponente: Ronda Reitz, PhD.", "Metodología intensiva", "Certificado internacional", "Trabajo en equipo"]
    },
    {
      id: 3,
      title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual",
      subtitle: "DBT para población infantil y adolescente",
      date: "6 y 7 de Junio 2025",
      schedule: "Guadalajara, México",
      mode: "Presencial",
      icon: BookOpen,
      bgColor: "from-green-600 to-emerald-700",
      accentColor: "bg-pink-400",
      features: ["Especialización infantil", "Enfoque familiar", "Técnicas adaptadas", "Supervisión clínica"]
    },
    {
      id: 4,
      title: "Entrenamiento Intensivo en DBT-C",
      subtitle: "Terapia Dialéctica Conductual para población infantil",
      date: "Diciembre 2025 - Julio 2026",
      schedule: "CDMX, México",
      mode: "Programa extendido",
      icon: Award,
      bgColor: "from-purple-600 to-violet-700",
      accentColor: "bg-green-400",
      features: ["Ponentes internacionales", "Certificación avanzada", "Práctica clínica", "Seguimiento personalizado"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 
                index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`relative h-full bg-gradient-to-br ${slide.bgColor}`}>
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white bg-opacity-5 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
                </div>
                
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className="text-white">
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 ${slide.accentColor} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-sm font-medium opacity-90">
                            INSTITUTO DE TERAPIA Y ANÁLISIS DE LA CONDUCTA
                          </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                          {slide.title}
                        </h1>
                        
                        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
                          {slide.subtitle}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-sm font-semibold mb-1">Fechas</div>
                            <div className="text-lg">{slide.date}</div>
                          </div>
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-sm font-semibold mb-1">Modalidad</div>
                            <div className="text-lg">{slide.mode}</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {slide.features.map((feature, idx) => (
                            <span key={idx} className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Más información
                          </button>
                          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                            Inscríbete ahora
                          </button>
                        </div>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                          <div className={`w-80 h-80 ${slide.accentColor} rounded-3xl transform rotate-12 opacity-20`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                              <IconComponent className="w-32 h-32 text-white opacity-80" />
                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                            <div className="text-2xl font-bold text-white">{slide.id}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-white rounded-full' 
                : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20 z-10">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default Hero;