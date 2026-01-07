// src/pages/AcademicOfferDetail.tsx
import { useParams, Navigate } from "react-router-dom";
import { courses, type Course } from "../assets/courses";
import React, { useEffect, useState } from "react";
import { useCourseInterest } from "../hooks/useCourseInterest";

function Toast({
  open,
  kind,
  message,
  onClose,
}: {
  open: boolean;
  kind: "success" | "error";
  message: string;
  onClose: () => void;
}) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-end p-4 sm:p-6"
    >
      <div
        className={`transform transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="pointer-events-auto max-w-sm rounded-lg shadow-lg ring-1 ring-black/10 bg-white">
          <div className="flex items-start gap-3 p-4">
            <div
              className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full ${
                kind === "success" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {kind === "success" ? (
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              )}
            </div>
            <div className="flex-1 text-sm text-slate-800">{message}</div>
            <button
              type="button"
              onClick={onClose}
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none"
              aria-label="Cerrar notificación"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <div className={`h-1 w-full rounded-b-lg ${kind === "success" ? "bg-emerald-500" : "bg-rose-500"}`} />
        </div>
      </div>
    </div>
  );
}

export default function AcademicOfferDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    _hp: "",
  });

  // toast state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastKind, setToastKind] = useState<"success" | "error">("success");
  const [toastMsg, setToastMsg] = useState("");

  const { loading, ok, error, submit } = useCourseInterest();

  if (!course) return <Navigate to="/formacion-academica" replace />;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono || undefined,
      mensaje: `Interés en el curso ${course.title}`,
      courseSlug: course.slug,
      courseTitle: course.title,
      sheet: "Interes Cursos",    // <- pon el nombre exacto de la hoja para registrar interesados
      type: "course_interest",
      _hp: form._hp,
    });
  };

  // feedback con toast + reset
  useEffect(() => {
    if (ok === true) {
      setToastKind("success");
      setToastMsg("¡Gracias! Registramos tu interés. Te contactaremos pronto.");
      setToastOpen(true);
      setForm({ nombre: "", email: "", telefono: "", _hp: "" });
      close();
      const t = setTimeout(() => setToastOpen(false), 3500);
      return () => clearTimeout(t);
    }
    if (ok === false && error) {
      setToastKind("error");
      setToastMsg(error);
      setToastOpen(true);
      const t = setTimeout(() => setToastOpen(false), 4500);
      return () => clearTimeout(t);
    }
  }, [ok, error]);

  return (
    <>
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
                w-full break-words
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
              <button
                onClick={open}
                className="bg-[#1A3459] text-white px-6 py-2 rounded-lg mt-5 hover:bg-[#12243d] transition-colors duration-200 self-start"
              >
                Inscribirme
              </button>
            </div>

            {/* image */}
            <div className="flex-shrink-0 sm:w-60 h-60 w-60 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden mx-auto lg:mx-0 lg:absolute lg:right-[-10%] lg:top-[9%]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* full-width map */}
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

      {/* ============== MODAL ============== */}
      {openModal && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
            aria-hidden="true"
          />
          {/* Card */}
          <div className="relative z-[9999] w-full max-w-md rounded-xl bg-white p-6 shadow-2xl ring-1 ring-black/10">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Pre-inscripción: {course.title}
              </h3>
              <button
                onClick={close}
                className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
                aria-label="Cerrar"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <input
                required
                name="nombre"
                value={form.nombre}
                onChange={onChange}
                placeholder="Nombre completo*"
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Correo*"
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={onChange}
                placeholder="Teléfono"
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              />

              {/* honeypot */}
              <input
                type="text"
                name="_hp"
                value={form._hp}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-[#1A3459] px-5 py-2 text-white text-sm font-semibold shadow-sm hover:bg-[#2a4469] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando…" : "Enviar interés"}
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      <Toast
        open={toastOpen}
        kind={toastKind}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
