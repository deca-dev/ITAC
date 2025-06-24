import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-8">
          "Fue un nuevo aprendizaje, no tenía conocimientos sobre ACT. Me pareció 
          muy interesante y digerible la forma de presentarlo de parte de las ponentes. 
          Muy práctico y ejemplos reales."
        </blockquote>
        <cite className="text-lg text-gray-600">
          - Nora V. (Asistente Taller ACT)
        </cite>
      </div>
    </section>
  );
};

export default Testimonial;