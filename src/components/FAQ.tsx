import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué significa el enfoque de Terapia Conductual Contextual (TCC)?",
      answer: "Terapias denominadas como CONTEXTUALISTAS de 3ra. generación, dentro de las cuales se encuentran la Terapia de Aceptación y Compromiso (ACT), la Terapia Dialéctica Conductual (DBT), Mindfulness Conductual y la Psicoterapia Analítica Funcional (FAP), entre otras. Todas estas terapias comparten el enfoque contextualista de la Terapia de Conducta."
    },
    {
      question: "¿Qué entendemos o a qué nos referimos con terapias con base empírica?",
      answer: "Se refiere a tratamientos psicológicos que han sido validados científicamente a través de investigación rigurosa y estudios controlados."
    },
    {
      question: "¿Puede usted la duración de las terapias que ofrecen?",
      answer: "La duración varía según el caso individual, pero generalmente oscila entre 12 a 24 sesiones para tratamientos estándar."
    },
    {
      question: "¿Cuáles son las terapias que se ofrecen online?",
      answer: "Ofrecemos todas nuestras modalidades terapéuticas en formato online, adaptadas a las necesidades actuales."
    },
    {
      question: "¿A quién va dirigido cada uno de nuestros programas?",
      answer: "Nuestros programas están dirigidos a profesionales de la salud mental, estudiantes de psicología y terapeutas en formación."
    },
    {
      question: "¿Con qué preparación académica cuentan los consultores terapeutas del instituto?",
      answer: "Todos nuestros terapeutas cuentan con formación especializada en terapias contextuales y certificaciones internacionales."
    },
    {
      question: "¿Cuál es la tarifa promedio?",
      answer: "Las tarifas varían según el tipo de servicio. Contactanos para información específica sobre costos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-teal-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;