// src/components/AcademicOfferHome.tsx
import { courses, type Course } from "../assets/courses";
import { Link } from "react-router-dom";

export default function AcademicOfferHome() {
  const featured = courses.slice(0, 3);

  return (
    <section className="pb-16 bg-white pt-[100px] bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-4xl text-gray-900 !font-barlowCond">
            Formación Académica
          </h2>
        </div>

        {/* Grid of course cards (first 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((course: Course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative group"
            >
              {/* Link overlay */}
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
                  loading="lazy"
                  decoding="async"
                  width={384}
                  height={192}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg text-[#6C6767] font-bold mb-3 group-hover:underline">
                  {course.title}
                </h3>

                <p className="text-sm flex-grow whitespace-pre-wrap">
                  {course.subtitle}
                </p>

                <p className="mt-4 text-sm text-[#719A9E] font-bold whitespace-pre-wrap">
                  {course.dates}
                </p>

                {/* "Ver más" above overlay */}
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

        {/* Mobile button */}
        <div className="sm:hidden mt-8">
          <Link
            to="/formacion-academica"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#1E5864] text-white px-4 py-3 text-sm font-semibold hover:bg-[#16464f] transition-colors"
          >
            Ver más cursos
          </Link>
        </div>

        {/* Desktop button (bottom-right) */}
        <div className="hidden sm:flex justify-end mt-8">
          <Link
            to="/formacion-academica"
            className="inline-flex items-center justify-center rounded-md bg-[#1E5864] text-white px-4 py-2 text-sm font-semibold hover:bg-[#16464f] transition-colors"
          >
            Ver más cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
