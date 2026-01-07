// src/components/FAQ.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué terapias ofrece el Instituto de Terapia y Análisis de la Consulta CDMX?",
    answer: `Terapias denominadas como Contextuales o de 3ra. generación, dentro de las cuales se encuentran: la Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítica Funcional (FAP), Activación Conductual (BA), Terapia Dialéctica Conductual y otras metodologías de Terapia de Conducta (como Exposición y Prevención de Respuesta).`,
  },
  {
    question: "¿Qué padecimientos o trastornos se tratan con estas terapias?",
    answer: `Activación Conductual – Es el tratamiento con fuerte apoyo empírico para la depresión.\nTerapia de Aceptación y Compromiso – Trastorno de ansiedad generalizada, trastorno de angustia, trastorno depresivo, trastorno obsesivo-compulsivo que desde esta terapia se denominan trastorno de evitación experiencial.\nPsicoterapia Analítica Funcional – Dificultades en las relaciones interpersonales para desarrollar y fortalecer clases de comportamientos alternativos que sirvan como facilitadores de una mejor interacción con uno mismo, las demás personas y los desafíos que la vida plantea.\nTerapia Dialéctica Conductual – Es un tratamiento ampliamente divulgado para trabajar con personas diagnosticadas con Trastorno Límite de la Personalidad (TLP) y otros problemas relacionados a la regulación emocional y la impulsividad.`,
  },
  {
    question: "¿Puedo saber la duración de las terapias que ofrecen?",
    answer: `La duración del proceso terapéutico varía, ya que cada persona requiere una valoración y plan de tratamiento personalizado. Y al finalizar la valoración, el consultor (terapeuta) del caso informa el panorama del camino psicoterapéutico que iniciarán.`,
  },
  {
    question: "¿Todas las terapias tienen el mismo costo?",
    answer: `El costo de la sesión varía de acuerdo a la especialidad del consultor (terapeuta) y también al enfoque terapéutico a trabajar.`,
  },
  {
    question: "¿Es forzoso que la sesión sea en modalidad presencial?",
    answer: `Ante las medidas por Pandemia que iniciaron en Marzo 2021, así como por la demanda de apoyo psicoterapéutico dentro y fuera de la república, el equipo del Instituto realiza sesiones de terapia en línea por medio de la plataforma Zoom o Skype; y en nuestras instalaciones continuamos con sesiones presenciales, bajo un protocolo de sanitización.`,
  },
  {
    question: "¿Cuentan con otras instalaciones o profesionales que den atención fuera de la CDMX?",
    answer: `El Instituto de Terapia Contextual CDMX únicamente cuenta con las instalaciones ubicadas en: Callejón Belisario Domínguez #141 Col. del Carmen, Coyoacán, CDMX; los consultores (terapeutas) se encuentran en estas instalaciones únicamente.`,
  },
  {
    question: "¿Con qué preparación académica cuentan los consultores (terapeutas) del Instituto?",
    answer: `El mínimo grado de estudios con el que cuentan los profesionales del Instituto son estudios de maestría y el máximo con Doctorado. Además, todos los consultores han realizado estudios especializados, certificaciones, entrenamientos dentro y fuera de México con representantes de las Terapias Contextuales a nivel internacional y por instituciones acreditadas. Y cada año realizan un mínimo de 48 horas de capacitación, además de supervisión.`,
  },
  {
    question: "¿Cuál es su oferta académica?",
    answer: `El Instituto de Terapia Contextual enseña y divulga la Ciencia y Terapia Contextual desde el año 2010; nuestros objetivos son la formación teórico-práctica en Análisis del Comportamiento Clínico y sus encarnaciones más conocidas como Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítica Funcional (FAP), Activación Conductual (BA), Terapia Dialéctica Conductual y otras metodologías de Terapia de Conducta (como Exposición y Prevención de Respuesta, Entrevista Motivacional, etc.). Durante el año se llevan a cabo diferentes entrenamientos en diferentes formatos como talleres, diplomados o cursos, tanto presenciales como en línea.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 bg-[#A2C6D2]">
      <img src="/assets/bg/vector-faq.png" className='absolute top-0 left-[-76px] z-[1]' alt="" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl text-gray-900 mb-6 !font-barlowCond">Preguntas frecuentes</h2>
        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-300 overflow-hidden px-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-900 hover:bg-gray-50 transition-colors font-bold"
                >
                  <span className="text-left font-medium">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
