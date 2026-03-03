// src/components/ContactTherapistModal.tsx
import React, { useEffect, useState } from "react";
import type { TeamMember } from "../assets/team";
import { useContactForm } from "../hooks/useContactForm";

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

// ---- Toast modal-ish (CENTERED) but DOES NOT block clicks ----
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
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-black/35 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`transform transition-all duration-300 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-[0.98] opacity-0"
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

export default function ContactTherapistModal({
  open,
  therapist,
  form,
  setForm,
  onClose,
}: {
  open: boolean;
  therapist: TeamMember | null;
  form: ContactTherapistForm;
  setForm: React.Dispatch<React.SetStateAction<ContactTherapistForm>>;
  onClose: () => void;
}) {
  const { loading, ok, error, submit } = useContactForm();

  // toast state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastKind, setToastKind] = useState<ToastKind>("success");
  const [toastMsg, setToastMsg] = useState("");

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

  // Show toast on ok/error + reset on success
  useEffect(() => {
    if (!open) return;

    if (ok === true) {
      setToastKind("success");
      setToastMsg("¡Gracias! Hemos recibido tu mensaje.");
      setToastOpen(true);

      // reset modal form
      setForm({
        _nombre: "",
        _apellido: "",
        telefono: "",
        email: "",
        asunto: "",
        mensaje: "",
        canal: "web",
        _hp: "",
      });

      // optional: close modal after success
      const closeT = setTimeout(() => onClose(), 600);

      const t = setTimeout(() => setToastOpen(false), 3500);
      return () => {
        clearTimeout(t);
        clearTimeout(closeT);
      };
    }

    if (ok === false && error) {
      setToastKind("error");
      setToastMsg(error);
      setToastOpen(true);

      const t = setTimeout(() => setToastOpen(false), 4500);
      return () => clearTimeout(t);
    }
  }, [ok, error, open, setForm, onClose]);

  if (!open || !therapist) return null;

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
      // 👇 aquí añadimos terapeuta para que llegue al sheet/email
      mensaje: `Terapeuta: ${therapist.title} ${therapist.name}\n\n${form.mensaje}`,
      canal: form.canal,
      _hp: form._hp,
    };

    await submit(payload);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Contactar terapeuta"
      >
        {/* Backdrop */}
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

      {/* Center toast */}
      <Toast
        open={toastOpen}
        kind={toastKind}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}