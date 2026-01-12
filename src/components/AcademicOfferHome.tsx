// src/components/AcademicFormation.tsx
import { courses, type Course } from "../assets/courses";
import { Link } from "react-router-dom";

export default function AcademicFormation() {
  return (
    <section className="pb-16 bg-white pt-[100px] bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl text-gray-900 mb-8 !font-barlowCond">
          Formación Académica
        </h2>

        {/* Grid of course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {courses.map((course: Course) => (
    <div
      key={course.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative group"
    >
      {/* Link que cubre toda la tarjeta */}
      <Link
        to={`/formacion-academica/${course.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Abrir ${course.title}`}
      />

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
        <h3 className="text-lg text-[#6C6767] font-bold mb-3 group-hover:underline">
          {course.title}
        </h3>

        <p className="text-sm  flex-grow whitespace-pre-wrap">
          {course.subtitle}
        </p>

        <p className="mt-4 text-sm text-[#719A9E] font-bold whitespace-pre-wrap">
          {course.dates}
        </p>

        {/* "Ver más" se mantiene con sus clases, pero debe ir arriba del overlay */}
        <Link
          to={`/formacion-academica/${course.slug}`}
          className="mt-6 inline-flex items-center font-medium text-sm relative z-20"
        >
          Ver más{" "}
          <span className="relative ml-1 border-solid px-4 py-2 transition-colors hover:text-white">
            <img
              className="w-3 absolute top-1/2 left-0 transform -translate-y-1/2"
              src="/assets/icons/right-chevron.png"
              alt=""
            />
          </span>
        </Link>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
