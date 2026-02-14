import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers, type TeamMember } from "../assets/team";
import { Link } from "react-router-dom";
import ContactTherapistModal from "../components/ContactTherapistModal";
import { useContactForm } from "../hooks/useContactForm";

// ✅ Toast (CENTERED)
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

          <div
            className={`h-1 w-full rounded-b-lg ${
              kind === "success" ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

const Team = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  // ✅ modal state + form
  const [openModal, setOpenModal] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<TeamMember | null>(null);
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

  const { loading, ok, error, submit } = useContactForm();

  // ✅ toast state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastKind, setToastKind] = useState<ToastKind>("success");
  const [toastMsg, setToastMsg] = useState("");

  const openContact = (member: TeamMember) => {
    setSelectedTherapist(member);
    setOpenModal(true);
  };
  const closeContact = () => {
    setOpenModal(false);
    setSelectedTherapist(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTherapist) return;

    await submit({
      nombre: `${form._nombre ?? ""} ${form._apellido ?? ""}`.trim(),
      email: form.email,
      telefono: form.telefono || undefined,
      asunto: form.asunto || undefined,
      mensaje: `Terapeuta a contactar: ${selectedTherapist.title} ${selectedTherapist.name}\n\n${form.mensaje}`,
      canal: form.canal,
      _hp: form._hp,
    });
  };

  // ✅ success toast + reset + close
  useEffect(() => {
    if (ok === true) {
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

  // ✅ error toast
  useEffect(() => {
    if (ok === false && error) {
      setToastKind("error");
      setToastMsg(error);
      setToastOpen(true);
      const t = setTimeout(() => setToastOpen(false), 4500);
      return () => clearTimeout(t);
    }
  }, [ok, error]);

  // ✅ FIX: inputs/select look white/transparent inside modal
  // This forces the input text to be dark and background solid,
  // even if the modal inherits "text-white" from this section.
  useEffect(() => {
    if (!openModal) return;

    // limit the scope to the modal "dialog"
    const dialog = document.querySelector('[role="dialog"]') as HTMLElement | null;
    if (!dialog) return;

    const fields = dialog.querySelectorAll("input, textarea, select");
    fields.forEach((el) => {
      el.classList.add("bg-white", "text-slate-900");
      el.classList.remove("text-white", "bg-transparent", "text-white/70", "text-white/80");
    });
  }, [openModal]);

  return (
    <section className="pt-16 bg-[#1A3459] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl mb-4 !font-barlowCond">Nuestro Equipo</h2>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft className="text-[#1A3459]" />
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronRight className="text-[#1A3459]" />
          </button>

          <div className="keen-slider max-w-[90%] mx-auto" ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col keen-slider__slide bg-white text-gray-900 rounded-lg p-6 px-4 shadow-lg"
              >
                <div className="flex justify-center gap-2 items-center">
                  <div className="w-[80px] h-[80px] rounded-full mb-4 flex items-center justify-center">
                    <img
                      src={`/assets/photos/headshots/${member.photo}.png`}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-600">{member.title}</p>
                    <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                  </div>
                </div>

                <div className="space-y-2 text-xs pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <img src="/assets/icons/education-vector.png" alt="" className="w-4 h-4" />
                    <p>{member.specialty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/assets/icons/briefcase-vector.png" alt="" className="w-4 h-4" />
                    <p>{member.years}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src="/assets/icons/checklist.png" alt="" className="w-4 h-4" />
                    <p>{member.description}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center pt-8 text-center mt-auto">
                  <Link
                    to={`/team/${member.id}`}
                    className="bg-white text-[#5a7e7b] border border-transparent hover:border-[#5a7e7b] px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Ver Perfil
                  </Link>
                  <button
                    type="button"
                    onClick={() => openContact(member)}
                    className="bg-[#6b8f8c] hover:bg-[#5a7e7b] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Contacto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative top-[58px] lg:top-[70px] bg-white p-6 shadow-lg z-10">
          <div className=" bg-[#a7c9d5] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 ">
            {/* Text */}
            <div className="text-white text-lg md:text-2xl font-serif leading-snug text-center md:text-left ">
              <p className="font-semibold italic">¿Tienes dudas?</p>
              <p className="font-semibold">Déjanos aclaráralas y darte mayor información.</p>
            </div>

            {/* Button */}
            <a href="https://wa.link/nkyfl2">
              <button className="bg-[#1a4c59] hover:bg-[#153e48] text-white px-6 py-2 rounded-md font-medium transition-colors">
                Más información
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <ContactTherapistModal
        open={openModal}
        therapist={selectedTherapist}
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={onSubmit}
        onClose={closeContact}
      />

      {/* ✅ Toast (centered) */}
      <Toast
        open={toastOpen}
        kind={toastKind}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </section>
  );
};

export default Team;
