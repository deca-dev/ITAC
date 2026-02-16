// src/pages/TeamGeneral.tsx
import { useState, useEffect } from "react";
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
        className={`transform transition-all duration-300 ${open ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-[0.98]"
          }`}
      >
        <div className="pointer-events-auto max-w-sm rounded-lg shadow-lg ring-1 ring-black/10 bg-white">
          <div className="flex items-start gap-3 p-4">
            <div
              className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full ${kind === "success" ? "bg-emerald-500" : "bg-rose-500"
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
            className={`h-1 w-full rounded-b-lg ${kind === "success" ? "bg-emerald-500" : "bg-rose-500"
              }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function TeamGeneral() {
  const [searchName, setSearchName] = useState<string>("");
  const [filterMode, setFilterMode] = useState<string>("");
  const [filterIdiom, setFilterIdiom] = useState<string>("");
  const [filterPopulation, setFilterPopulation] = useState<string>("");

  // helper to ensure we always get an array
  const ensureArr = (val: string | string[]) => (Array.isArray(val) ? val : [val]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<TeamMember | null>(null);

  // ✅ form state (same fields as Contacto)
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

  // ✅ send hook
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

  // ✅ close + reset on success
  useEffect(() => {
    if (ok === true) {
      // ✅ toast success
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

  // ✅ show toast on error (centered)
  useEffect(() => {
    if (ok === false && error) {
      setToastKind("error");
      setToastMsg(error);
      setToastOpen(true);
      const t = setTimeout(() => setToastOpen(false), 4500);
      return () => clearTimeout(t);
    }
  }, [ok, error]);

  const modes = Array.from(new Set(teamMembers.flatMap((m) => ensureArr(m.mode)))).sort((a, b) =>
    a.localeCompare(b)
  );

  const idioms = Array.from(new Set(teamMembers.flatMap((m) => ensureArr(m.idiom)))).sort((a, b) =>
    a.localeCompare(b)
  );

  const populations = Array.from(
    new Set(teamMembers.flatMap((m) => ensureArr(m.population)))
  ).sort((a, b) => a.localeCompare(b));

  // apply filters
  const visibleMembers = teamMembers.filter((m: TeamMember) => {
    const nameMatch = m.name.toLowerCase().includes(searchName.toLowerCase());

    const modeMatch = filterMode ? ensureArr(m.mode).includes(filterMode) : true;

    const idiomMatch = filterIdiom ? ensureArr(m.idiom).includes(filterIdiom) : true;

    const populationMatch = filterPopulation
      ? ensureArr(m.population).includes(filterPopulation)
      : true;

    return nameMatch && modeMatch && idiomMatch && populationMatch;
  });

  // reset all filters
  const resetFilters = () => {
    setSearchName("");
    setFilterMode("");
    setFilterIdiom("");
    setFilterPopulation("");
  };

  return (
    <section className="pb-16 bg-gray-50 bg-pattern">
      <div>
        <header className="relative isolate overflow-hidden mb-12">
          {/* background color + waves */}
          <div className="bg-[url('/assets/bg/bg-team-banner-green-texture.jpg')]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* waves overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

              {/* grid avoids overlap; stacks on <md */}
              <div className="relative grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-8 items-center py-10 md:py-14 lg:py-16 min-h-[240px]">
                {/* left: text */}
                <div className="text-white">
                  <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                    Nuestro equipo
                  </h1>
                  <p className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed">
                    Contamos con un equipo de profesionales altamente capacitados{" "}
                    <br /> y apasionados por el bienestar psicológico y emocional.
                  </p>
                </div>

                {/* right: image (own column, no absolute) */}
                <div className="hidden md:block justify-self-end">
                  <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden ring-4 ring-white/20 bg-white/5">
                    <img
                      src="/assets/photos/img-all-team-round.png"
                      alt="Portada libros"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* filter row with labels */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Modalidad</label>
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              >
                <option value="">Todos</option>
                {modes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Idioma</label>
              <select
                value={filterIdiom}
                onChange={(e) => setFilterIdiom(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              >
                <option value="">Todos</option>
                {idioms.map((id) => (
                  <option key={id} value={id}>
                    {id}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Población</label>
              <select
                value={filterPopulation}
                onChange={(e) => setFilterPopulation(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              >
                <option value="">Todos</option>
                {populations.map((pop) => (
                  <option key={pop} value={pop}>
                    {pop}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <button
                onClick={resetFilters}
                className="mt-1 w-full border border-gray-300 rounded p-2 bg-white hover:bg-gray-100 transition-colors"
              >
                Borrar filtros
              </button>
            </div>
          </div>

          {/* member cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleMembers.map((member: TeamMember) => (
              <div
                key={member.id}
                className="flex flex-col bg-white text-gray-900 rounded-lg p-6 px-4 shadow-lg"
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

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Modalidad:</span>
                    <p>{filterMode ? filterMode : ensureArr(member.mode).join(", ")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Idioma:</span>
                    <p>{filterIdiom ? filterIdiom : ensureArr(member.idiom).join(", ")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Población:</span>
                    <p>
                      {filterPopulation
                        ? filterPopulation
                        : ensureArr(member.population).join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 justify-center pt-8 text-center mt-auto">
                  <Link
                    to={`/team/${member.id}`}
                    className="
      bg-white text-[#5a7e7b]
      border border-[#5a7e7b]
      hover:bg-[#1A3459] hover:text-white hover:border-[#1A3459]
      px-4 py-2 rounded text-sm font-medium transition-colors
    "
                  >
                    Ver Perfil
                  </Link>

                  <button
                    type="button"
                    onClick={() => openContact(member)}
                    className="
      bg-[#6b8f8c] text-white
      border border-transparent
      hover:bg-white hover:text-[#6b8f8c] hover:border-[#6b8f8c]
      px-4 py-2 rounded text-sm font-medium transition-colors
    "
                  >
                    Contacto
                  </button>
                </div>

              </div>
            ))}
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
        </div>
      </div>

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
