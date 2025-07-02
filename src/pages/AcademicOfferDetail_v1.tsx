// src/pages/AcademicOfferDetail.tsx
import { useParams, Navigate } from "react-router-dom";
import { courses, type Course } from "../assets/courses";

export default function AcademicOfferDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/oferta-academica" replace />;

  return (
    <section className="py-16 bg-gray-50 bg-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + subtitle */}
        <h1 className="text-4xl font-bold mb-4 font-serif">{course.title}</h1>
        <p className="text-[gray-600] mb-8">{course.subtitle}</p>

        {/* course details */}
        <div
          className={`
            bg-[#A2C6D2] max-w-5xl p-8 rounded-lg mb-12 relative
            text-[#4F4C4C]

            /* 1. give every <p> mb-4 by default */
            [&_p]:mb-4

            /* 2. but if a <p> has a <ul> immediately after it, kill its mb */
            [&_p:has(+ul)]:mb-0

            /* 3. keep lists flush on top and then mb-4 below them */
            [&_ul]:mt-0
            [&_ul]:mb-4

            /* 4. disc bullets + left indent on lists */
            [&_ul]:list-disc
            [&_ul]:pl-6

            /* 5. link styling */
               [&_a]:text-[#043B81] [&_a]:font-semibold [&_a]:no-underline
               [&_a]:hover:underline [&_a]:hover:text-[#043B81]
        `}
        >
          <div
            className="max-w-2xl"
            dangerouslySetInnerHTML={{ __html: course.text }}
          />

          {/* floating circle image */}
          <div className="absolute right-[-10%] top-[20%] w-60 h-60 rounded-full overflow-hidden transform -translate-y-1/2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* call‑to‑action */}
          <button className="bg-[#1A3459] text-white px-6 py-2 rounded-lg mt-5 hover:bg-[#12243d] transition-colors duration-200">
            Inscribirme
          </button>
        </div>

        {/* full‑width map */}
        {/* <div className="mt-12 h-96">
          <iframe
            title="Ubicación del diplomado"
            className="w-full h-full rounded-lg shadow-md border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div> */}
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
