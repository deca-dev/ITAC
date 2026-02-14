import React, { useEffect } from "react";
import type { TeamMember } from "../assets/team";

type ContactTherapistForm = {
  _nombre: string;
  _apellido: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
  canal: "web";
  _hp: string;
};

export default function ContactTherapistModal({
  open,
  therapist,
  form,
  setForm,
  loading,
  onSubmit,
  onClose,
}: {
  open: boolean;
  therapist: TeamMember | null;
  form: ContactTherapistForm;
  setForm: React.Dispatch<React.SetStateAction<ContactTherapistForm>>;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => Promise<void> | void;
  onClose: () => void;
}) {
  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // lock body scroll only while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !therapist) return null;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contactar terapeuta"
    >
      {/* Backdrop (click to close). IMPORTANT: it’s clickable but the wrapper is not blocking after close */}
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/45"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative z-[9999] w-full max-w-lg rounded-xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-200">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Contactar terapeuta
            </p>
            <h3 className="text-lg font-semibold text-slate-900 truncate">
              {therapist.title} {therapist.name}
            </h3>
            {/* <p className="mt-1 text-xs text-slate-600">
              {therapist.specialty}
            </p> */}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
            aria-label="Cerrar"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
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
                <option value="cita-terapeuta">Agendar cita con terapeuta</option>
                <option value="info-terapia">Quiero información de terapia</option>
                <option value="info-cursos">Quiero información sobre cursos</option>
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

              {/* Buttons */}
              <div className="pt-1 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-[#1A3459] px-5 py-2 text-white text-sm font-semibold shadow-sm hover:bg-[#2a4469] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando…" : "Enviar"}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancelar
                </button>
              </div>

              {/* Therapist context (visual hint) */}
              <p className="text-[11px] text-slate-500 pt-1">
                En breve te contactaremos —{" "}
                <span className="font-medium">
                  {therapist.title} {therapist.name}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
