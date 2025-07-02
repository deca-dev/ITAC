// src/pages/AcademicOfferDetail.tsx
import { useParams, Navigate } from "react-router-dom";
import { courses, type Course } from "../assets/courses";

export default function AcademicOfferDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/formacion-academica" replace />;

  return (
    <section className="py-16 bg-gray-50 bg-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + subtitle */}
        <h1 className="text-4xl font-bold mb-4 font-serif">{course.title}</h1>
        <p className="text-[gray-600] mb-8">{course.subtitle}</p>

        {/* course details as responsive flex */}
        <div className="flex min-w-0 flex-col-reverse lg:flex-row items-start gap-y-6 lg:gap-x-8 bg-[#A2C6D2] max-w-5xl p-8 rounded-lg mb-12 relative">
          {/* text + button */}
          <div
            className={`
              min-w-0
              flex-1 text-[#4F4C4C]
              [&_p]:mb-4
              [&_p:has(+ul)]:mb-0
              [&_ul]:mt-0
              [&_ul]:mb-4
              [&_ul]:list-disc
              [&_ul]:pl-6
              [&_a]:text-[#043B81]
              [&_a]:font-semibold
              [&_a]:no-underline
              [&_a]:hover:underline
              [&_a]:hover:text-[#043B81]
            `}
          >
            <div
              className="lg:max-w-2xl"
              dangerouslySetInnerHTML={{ __html: course.text }}
            />
            <button className="bg-[#1A3459] text-white px-6 py-2 rounded-lg mt-5 hover:bg-[#12243d] transition-colors duration-200 self-start">
              Inscribirme
            </button>
          </div>

          {/* image */}
          <div className="flex-shrink-0  sm:w-60 h-60 w-60 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden mx-auto lg:mx-0 lg:absolute lg:right-[-10%] lg:top-[20%]">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* full‑width map */}
        <div className="mt-12 h-96">
          {course.address ? (
            <iframe
              title={`Ubicación de ${course.title}`}
              className="w-full h-full rounded-lg shadow-md border-0"
              src={course.address}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <p className="text-center text-gray-500">Mapa no disponible</p>
          )}
        </div>
      </div>
    </section>
  );
}
