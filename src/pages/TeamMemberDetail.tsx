// src/pages/TeamMemberDetail.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { teamMembers, type TeamMember } from "../assets/team";
import { teamResumes } from "../assets/teamResume";
import ContactTherapistModal from "../components/ContactTherapistModal";
import { useContactForm } from "../hooks/useContactForm";

const ensureArr = (val: string | string[]) => (Array.isArray(val) ? val : [val]);

// =======================
// ✅ Toast (CENTERED)
// =======================
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
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      <div
        className={`transform transition-all duration-300 ${
          open ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-[0.98]"
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

export default function TeamMemberDetail() {
  const { memberId } = useParams<{ memberId: string }>();

  const member = useMemo(() => {
    if (!memberId) return null;
    return teamMembers.find((m) => m.id === memberId) ?? null;
  }, [memberId]);

  const resume = useMemo(() => {
    if (!memberId) return null;
    return (teamResumes as any)[memberId] ?? null;
  }, [memberId]);

  if (!memberId) return <Navigate to="/team" replace />;
  if (!member) return <Navigate to="/team" replace />;

  // ✅ Display content
  const displayName = resume?.displayName ?? `${member.title} ${member.name}`.trim();
  const resumen = resume?.resumen ?? member.description ?? "";
  const bio: string[] = Array.isArray(resume?.bio) ? resume.bio : [];
  const phone: string | undefined = resume?.contacto?.phone;
  const emails: string[] = Array.isArray(resume?.contacto?.emails) ? resume.contacto.emails : [];

  const bannerSrc = resume?.bannerImage ?? `/assets/photos/headshots/${member.photo}.png`;

  const modes = ensureArr(member.mode);
  const idioms = ensureArr(member.idiom);
  const populations = ensureArr(member.population);

  // =======================
  // ✅ Contact modal state
  // =======================
  const [openModal, setOpenModal] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<TeamMember | null>(member);
  const [ctaSource, setCtaSource] = useState<"Agendar cita" | "Contacto" | "Enviar mensaje" | null>(null);

  const [form, setForm] = useState({
    _nombre: "",
    _apellido: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
    canal: "web" as const,
    _hp: "",
  });

  const { loading, ok, submit } = useContactForm();

  // =======================
  // ✅ Toast state
  // =======================
  const [toastOpen, setToastOpen] = useState(false);
  const [toastKind, setToastKind] = useState<ToastKind>("success");
  const [toastMsg, setToastMsg] = useState("");

  // keep therapist synced with the page member
  useEffect(() => {
    setSelectedTherapist(member);
  }, [member]);

  const openContact = (source: "Agendar cita" | "Contacto" | "Enviar mensaje") => {
    setCtaSource(source);
    setSelectedTherapist(member);
    setOpenModal(true);
  };

  const closeContact = () => {
    setOpenModal(false);
    setCtaSource(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTherapist) return;

    await submit({
      nombre: `${form._nombre ?? ""} ${form._apellido ?? ""}`.trim(),
      email: form.email,
      telefono: form.telefono || undefined,
      asunto: form.asunto || undefined,
      mensaje:
        `Terapeuta a contactar: ${selectedTherapist.title} ${selectedTherapist.name}\n` +
        `Botón: ${ctaSource ?? "N/A"}\n\n` +
        `${form.mensaje}`,
      canal: form.canal,
      _hp: form._hp,
    });
  };

  useEffect(() => {
    if (ok === true) {
      // ✅ show centered toast
      setToastKind("success");
      setToastMsg("¡Gracias! Hemos recibido tu mensaje.");
      setToastOpen(true);
      const t = setTimeout(() => setToastOpen(false), 3500);

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
      closeContact();

      return () => clearTimeout(t);
    }
  }, [ok]);

  return (
    <section className="bg-[#f3f6f8]">
      {/* Back bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/equipo"
            className="inline-flex items-center gap-2 text-[#0f2f45] hover:text-[#0b2333] text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al equipo
          </Link>
        </div>
      </div>

      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-[#05090b]">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#05090b]" />
          <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_18%_30%,rgba(15,118,110,0.22)_0%,rgba(0,0,0,0)_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_560px_at_70%_35%,rgba(15,118,110,0.14)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_45%,rgba(5,9,11,0.65)_68%,rgba(5,9,11,0.92)_82%,rgba(5,9,11,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.58)_68%,rgba(0,0,0,0.92)_100%)]" />
        </div>

        {/* subtle waves */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none -z-10">
          <img
            src="/assets/images/bg-nosotros-main-banner-waves.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
          <div className="grid gap-10 lg:grid-cols-[1fr,460px] items-center">
            {/* Left */}
            <div>
              <p className="text-white/70 text-sm mb-2">{member.specialty}</p>

              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
                {displayName}
              </h1>

              {resumen ? (
                <p className="mt-6 text-white/85 leading-relaxed max-w-2xl">{resumen}</p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                {/* ✅ opens modal */}
                <button
                  type="button"
                  onClick={() => openContact("Agendar cita")}
                  className="rounded-xl bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
                >
                  Agendar cita
                </button>

                {/* ✅ opens modal (instead of navigating away) */}
                <button
                  type="button"
                  onClick={() => openContact("Contacto")}
                  className="rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm font-semibold transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Right image (unchanged) */}
            <div className="relative hidden lg:block">
              <div className="relative h-[460px] w-[500px] overflow-visible">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(85% 90% at 58% 52%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.92) 100%)",
                    filter: "blur(22px)",
                    transform: "scale(1.10)",
                    opacity: 0.95,
                  }}
                />

                <img
                  src={bannerSrc}
                  alt={displayName}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    objectPosition: "58% 25%",
                    WebkitMaskImage:
                      "radial-gradient(68% 92% at 58% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0) 92%)",
                    maskImage:
                      "radial-gradient(68% 92% at 58% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0) 92%)",
                    filter: "brightness(1.10) contrast(1.06) saturate(1.03)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(5,9,11,1) 0%, rgba(5,9,11,0.75) 14%, rgba(5,9,11,0.25) 28%, rgba(5,9,11,0) 45%)",
                    mixBlendMode: "multiply",
                    opacity: 1,
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(75% 95% at 58% 48%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.20) 74%, rgba(0,0,0,0.90) 100%)",
                    mixBlendMode: "multiply",
                    opacity: 0.95,
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 75% at 58% 42%, rgba(15,118,110,0.09) 0%, rgba(15,118,110,0) 70%)",
                    mixBlendMode: "soft-light",
                    opacity: 0.85,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),360px] items-start">
          {/* Main */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-[#0f2f45]">Biografía</h3>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                {bio.length ? bio.map((p, idx) => <p key={idx}>{p}</p>) : <p>{member.description}</p>}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Contact */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-base font-bold text-[#0f2f45] mb-4">Contacto</h4>

              <div className="space-y-3">
                {phone ? (
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-5 h-5 text-[#6b8f8c]" />
                    <span>{phone}</span>
                  </div>
                ) : null}

                {emails.map((email) => (
                  <div key={email} className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-5 h-5 text-[#6b8f8c]" />
                    <span className="break-all">{email}</span>
                  </div>
                ))}

                {!phone && emails.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    Para agendar, visita nuestra página de contacto.
                  </p>
                ) : null}
              </div>

              {/* ✅ opens modal */}
              <button
                type="button"
                onClick={() => openContact("Enviar mensaje")}
                className="mt-2 block w-full text-center bg-white border border-slate-200 text-[#0f2f45] hover:bg-slate-50 px-4 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Enviar mensaje
              </button>
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-base font-bold text-[#0f2f45] mb-4">Detalles</h4>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="font-semibold w-24">Modalidad:</span>
                  <span className="flex-1">{modes?.length ? modes.join(", ") : "—"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold w-24">Idioma:</span>
                  <span className="flex-1">{idioms?.length ? idioms.join(", ") : "—"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold w-24">Población:</span>
                  <span className="flex-1">{populations?.length ? populations.join(", ") : "—"}</span>
                </div>
              </div>
            </div>

            {/* Help banner */}
            <div className="rounded-lg bg-[#b8d0d8] text-[#0f2f45] border border-white/50 p-5">
              <p className="font-semibold">¿Tienes dudas?</p>
              <p className="text-sm mt-1">
                Déjanos saber y con gusto te ayudamos a encontrar la mejor opción.
              </p>
              <Link
                to="/contacto"
                className="inline-block mt-4 bg-white/90 hover:bg-white text-[#0f2f45] px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Más información
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ✅ Modal (same component as Team.tsx) */}
      <ContactTherapistModal
        open={openModal}
        therapist={selectedTherapist}
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={onSubmit}
        onClose={closeContact}
      />

      {/* ✅ Centered Toast */}
      <Toast
        open={toastOpen}
        kind={toastKind}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </section>
  );
}
