// src/components/FAQ.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué significa el enfoque de Terapia Conductual Contextual (TCC)?",
    answer: `Terapias denominadas como CONTEXTUALISTAS de 3ra. generación, dentro de las cuales se encuentran la Terapia de Aceptación y Compromiso (ACT), la Terapia Dialéctica Conductual (DBT), Mindfulness Conductual y la Psicoterapia Analítica Funcional (FAP), entre otras. Todas estas terapias comparten el enfoque contextualista de la Terapia de Conducta.`,
  },
  {
    question: "¿Qué entendemos o a qué nos referimos con terapias con base empírica?",
    answer: `Se refiere a tratamientos psicológicos que han sido validados científicamente a través de investigación rigurosa y estudios controlados.`,
  },
  {
    question: "¿Puede usted la duración de las terapias que ofrecen?",
    answer: `La duración varía según el caso individual, pero generalmente oscila entre 12 a 24 sesiones para tratamientos estándar.`,
  },
  {
    question: "¿Cuáles son las terapias que se ofrecen online?",
    answer: `Ofrecemos todas nuestras modalidades terapéuticas en formato online, adaptadas a las necesidades actuales.`,
  },
  {
    question: "¿A quién va dirigido cada uno de nuestros programas?",
    answer: `Nuestros programas están dirigidos a profesionales de la salud mental, estudiantes de psicología y terapeutas en formación.`,
  },
  {
    question: "¿Con qué preparación académica cuentan los consultores terapeutas del instituto?",
    answer: `Todos nuestros terapeutas cuentan con formación especializada en terapias contextuales y certificaciones internacionales.`,
  },
  {
    question: "¿Cuál es la tarifa promedio?",
    answer: `Las tarifas varían según el tipo de servicio. Contáctanos para información específica sobre costos.`,
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
        <h2 className="text-4xl text-gray-900 mb-6 font-serif">Preguntas frecuentes</h2>
        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-300 overflow-hidden px-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-900 hover:bg-gray-50 transition-colors"
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
