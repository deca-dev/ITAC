// src/pages/TeamMemberDetail.tsx
import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { teamMembers } from "../assets/team";
import { teamResumes } from "../assets/teamResume";

const ensureArr = (val: string | string[]) => (Array.isArray(val) ? val : [val]);


export default function TeamMemberDetail() {
  const { memberId } = useParams<{ memberId: string }>();

  const member = useMemo(() => {
    if (!memberId) return null;
    return teamMembers.find((m) => m.id === memberId) ?? null;
  }, [memberId]);

  const resume = useMemo(() => {
    if (!memberId) return null;
    // teamResumes should be keyed by memberId
    return (teamResumes as any)[memberId] ?? null;
  }, [memberId]);

  if (!memberId) return <Navigate to="/team" replace />;
  if (!member) return <Navigate to="/team" replace />;

  // ✅ Use only the “long details” from teamResume.ts (resumen + bio + contacto)
  const displayName =
    resume?.displayName ?? `${member.title} ${member.name}`.trim();

  const resumen = resume?.resumen ?? member.description ?? "";

  const bio: string[] = Array.isArray(resume?.bio) ? resume.bio : [];

  const phone: string | undefined = resume?.contacto?.phone;
  const emails: string[] = Array.isArray(resume?.contacto?.emails)
    ? resume.contacto.emails
    : [];

  // const photoKey = member.photo; // reuse team.ts photo key
  const bannerSrc = resume?.bannerImage ?? `/assets/photos/headshots/${member.photo}.png`;

  const modes = ensureArr(member.mode);
  const idioms = ensureArr(member.idiom);
  const populations = ensureArr(member.population);

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
          {/* base */}
          <div className="absolute inset-0 bg-[#05090b]" />

          {/* teal haze */}
          <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_18%_30%,rgba(15,118,110,0.22)_0%,rgba(0,0,0,0)_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_560px_at_70%_35%,rgba(15,118,110,0.14)_0%,rgba(0,0,0,0)_60%)]" />

          {/* right wash to match photo blacks */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_45%,rgba(5,9,11,0.65)_68%,rgba(5,9,11,0.92)_82%,rgba(5,9,11,1)_100%)]" />

          {/* vignette */}
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
                <button className="rounded-xl bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-sm font-semibold transition-colors">
                  Agendar cita
                </button>
                <Link
                  to="/contacto"
                  className="rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm font-semibold transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Right: photo fully blended (no visible rectangle) */}
            <div className="relative hidden lg:block">
              <div className="relative h-[460px] w-[500px] overflow-visible">
                {/* Big dark “bed” behind the photo to unify tones */}
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

                {/* Use IMG so mask behaves consistently */}
                <img
                  src={bannerSrc}
                  alt={displayName}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    // IMPORTANT: crop the studio edges away (contain keeps them!)
                    objectPosition: "58% 25%",

                    // This feather kills corners + sides
                    WebkitMaskImage:
                      "radial-gradient(68% 92% at 58% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0) 92%)",
                    maskImage:
                      "radial-gradient(68% 92% at 58% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0) 92%)",

                    // Lift subject a bit
                    filter: "brightness(1.10) contrast(1.06) saturate(1.03)",
                  }}
                />

                {/* Seam killer: specifically fades LEFT edge of the image */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(5,9,11,1) 0%, rgba(5,9,11,0.75) 14%, rgba(5,9,11,0.25) 28%, rgba(5,9,11,0) 45%)",
                    mixBlendMode: "multiply",
                    opacity: 1,
                  }}
                />

                {/* Edge darkener: only affects outer rim so the rectangle disappears */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(75% 95% at 58% 48%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.20) 74%, rgba(0,0,0,0.90) 100%)",
                    mixBlendMode: "multiply",
                    opacity: 0.95,
                  }}
                />

                {/* Subtle teal tint to match site palette */}
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
            {/* ✅ ONLY long resume content from TeamResume.ts */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-[#0f2f45]">Biografía</h3>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                {bio.length ? (
                  bio.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{member.description}</p>
                )}
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

              {/* <button className="mt-6 w-full bg-[#6b8f8c] hover:bg-[#5a7e7b] text-white px-4 py-3 rounded-md text-sm font-semibold transition-colors">
                Agendar cita
              </button> */}

              <Link
                to="/contacto"
                className="mt-2 block w-full text-center bg-white border border-slate-200 text-[#0f2f45] hover:bg-slate-50 px-4 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Enviar mensaje
              </Link>
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
                  <span className="flex-1">
                    {populations?.length ? populations.join(", ") : "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* Help banner (like your homepage strip) */}
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
    </section>
  );
}
