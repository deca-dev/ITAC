// src/components/AcademicFormation.tsx
import { courses, type Course } from '../assets/courses';

export default function AcademicFormation() {
  return (
    <section className="pb-16 bg-white pt-[100px] bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl text-gray-900 mb-8 font-serif">
          Formación Académica
        </h2>

        {/* Grid of course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course) => (
            <div
              key={course.id}
              className="bg-white border border-teal-300 rounded-xl overflow-hidden shadow-sm flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow whitespace-pre-wrap">
                  {course.subtitle}
                </p>
                <p className="mt-4 text-sm text-teal-600 whitespace-pre-wrap">
                  {course.dates}
                </p>
                <a
                  href={`/cursos/${course.slug}`}
                  className="mt-6 inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm"
                >
                  Ver más <span className="ml-1">➤</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
