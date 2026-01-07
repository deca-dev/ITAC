// src/pages/Contacto.tsx
import React, { useEffect, useState } from "react";
import { useContactForm } from "../hooks/useContactForm";

// ---- Toast minimalista (no altera layout) ----
type ToastKind = "success" | "error";
function Toast({
  open,
  kind,
  message,
  onClose,
}: {
  open: boolean;
  kind: ToastKind;
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

export default function Contacto() {
  const { loading, ok, error, submit } = useContactForm();

  // estado local controlado
  const [form, setForm] = useState({
    nombre: "",
    _nombre: "",
    _apellido: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
    canal: "web",
    _hp: "",
  });

  // estado del toast
  const [toastOpen, setToastOpen] = useState(false);
  const [toastKind, setToastKind] = useState<ToastKind>("success");
  const [toastMsg, setToastMsg] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      nombre: `${form._nombre ?? ""} ${form._apellido ?? ""}`.trim(),
      email: form.email,
      telefono: form.telefono || undefined,
      asunto: form.asunto || undefined,
      mensaje: form.mensaje,
      canal: form.canal,
      _hp: form._hp,
    };

    await submit(payload);
    // Quitamos los alert(). El feedback se hace con el toast en useEffect.
  };

  // Mostrar toast al cambiar ok/error, y limpiar formulario si ok=true
  useEffect(() => {
    if (ok === true) {
      setToastKind("success");
      setToastMsg("¡Gracias! Hemos recibido tu mensaje.");
      setToastOpen(true);
      setForm({
        nombre: "",
        _nombre: "",
        _apellido: "",
        telefono: "",
        email: "",
        asunto: "",
        mensaje: "",
        canal: "web",
        _hp: "",
      });
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
    <main className="bg-gray-50">
      {/* ================== HERO ================== */}
      <header className="relative isolate overflow-hidden mb-12">
        {/* background color + waves */}
        <div className="bg-[#96B6C3]">
          {/* waves overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img
              src="/assets/bg/bg-pattern-contact.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* grid avoids overlap; stacks on <md */}
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-8 items-center py-10 md:py-14 lg:py-16 min-h-[240px]">
              {/* left: text */}
              <div className="text-white">
                <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  Contacto
                </h1>
                <p className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed">
                  Ponte en contacto con nosotros.
                </p>
              </div>

              {/* right: image (own column, no absolute) */}
              <div className="hidden md:block justify-self-end">
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden">
                  {/* Imagen opcional */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================== CUERPO (datos + formulario) ================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,420px] gap-8">
          {/* Columna izquierda: datos */}
          <aside className="space-y-8 bg-white/60 rounded-2xl p-6">
            {/* Ubicación */}
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white shadow ring-1 ring-slate-200 grid place-items-center">
                {/* Pin icon */}
                <svg
                  className="w-5 h-5 text-slate-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Nuestra ubicación</h3>
                <p className="text-sm text-slate-700 mt-1">
                  Callejón Belisario Domínguez #141, Col. del Carmen, Coyoacán, CDMX
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white shadow ring-1 ring-slate-200 grid place-items-center">
                <svg
                  className="w-5 h-5 text-slate-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.6 10.2a15.1 15.1 0 0 0 7.2 7.2l2.4-2.4a1 1 0 0 1 1-.24 11.6 11.6 0 0 0 3.6.6 1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1A18.8 18.8 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.6 11.6 0 0 0 .6 3.6 1 1 0 0 1-.24 1Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Llámanos</h3>
                <a
                  href="tel:+525555547420"
                  className="mt-1 block text-sm text-slate-700 hover:text-slate-900"
                >
                  55 55547420
                </a>
              </div>
            </div>

            {/* Correos */}
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-white shadow ring-1 ring-slate-200 grid place-items-center">
                <svg
                  className="w-5 h-5 text-slate-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Escríbenos</h3>
                <a
                  href="mailto:informes@institutodeterapiacontextual.com"
                  className="block text-sm text-slate-700 hover:text-slate-900 mt-1"
                >
                  informes@institutodeterapiacontextual.com
                </a>
                <a
                  href="mailto:recepcion.itc1@gmail.com"
                  className="block text-sm text-slate-700 hover:text-slate-900 mt-1"
                >
                  recepcion.itc1@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* Columna derecha: tarjeta formulario */}
          <section className="lg:justify-self-end">
            <div className="rounded-xl bg-slate-100 p-3 sm:p-4 ring-1 ring-slate-200 shadow-inner">
              <form className="space-y-3" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    name="_nombre"
                    value={form._nombre}
                    onChange={onChange}
                    placeholder="Nombre*"
                    className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                  <input
                    required
                    name="_apellido"
                    value={form._apellido}
                    onChange={onChange}
                    placeholder="Apellido*"
                    className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={onChange}
                    placeholder="Teléfono*"
                    className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Correo*"
                    className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <select
                  name="asunto"
                  value={form.asunto}
                  onChange={onChange}
                  required
                  className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                >
                  <option value="" disabled>
                    ¿Cómo podemos ayudarte?
                  </option>
                  <option value="info-cursos">Quiero información sobre cursos</option>
                  <option value="cita-ninos">Agendar cita para niños</option>
                  <option value="cita-adolescentes">Agendar cita para adolescentes</option>
                  <option value="cita-adultos">Agendar cita para adultos</option>
                  <option value="otro">Otro</option>
                </select>

                <textarea
                  rows={4}
                  name="mensaje"
                  value={form.mensaje}
                  onChange={onChange}
                  placeholder="Comentarios*"
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />

                {/* honeypot invisible */}
                <input
                  type="text"
                  name="_hp"
                  value={form._hp}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-md bg-[#1A3459] px-5 py-2 text-white text-sm font-semibold shadow-sm hover:bg-[#2a4469] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando…" : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>

      {/* ================== MAPA ================== */}
      <section className="w-full">
        <div className="w-full h-[360px] sm:h-[420px] lg:h-[520px]">
          <iframe
            title="Mapa ITAC"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=Callej%C3%B3n%20Belisario%20Dom%C3%ADnguez%20141%2C%20Coyoac%C3%A1n%2C%20CDMX&output=embed`}
          />
        </div>
      </section>

      {/* ---- Toast montado al final, fuera del flujo ---- */}
      <Toast
        open={toastOpen}
        kind={toastKind}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </main>
  );
}
