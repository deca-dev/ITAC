// src/pages/TeamGeneral.tsx
import React, { useState } from "react";
import { teamMembers, type TeamMember } from "../assets/team";

export default function TeamGeneral() {
  const [searchName, setSearchName] = useState<string>("");
  const [filterSpecialty, setFilterSpecialty] = useState<string>("");
  const [filterMode, setFilterMode] = useState<string>("");
  const [filterIdiom, setFilterIdiom] = useState<string>("");
  const [filterPopulation, setFilterPopulation] = useState<string>("");

  // helper to ensure we always get an array
  const ensureArr = (val: string | string[]) =>
    Array.isArray(val) ? val : [val];

  // derive unique filter options by flattening and sort alphabetically
  const specialties = Array.from(
    new Set(teamMembers.map((m) => m.specialty))
  ).sort((a, b) => a.localeCompare(b));

  const modes = Array.from(
    new Set(teamMembers.flatMap((m) => ensureArr(m.mode)))
  ).sort((a, b) => a.localeCompare(b));

  const idioms = Array.from(
    new Set(teamMembers.flatMap((m) => ensureArr(m.idiom)))
  ).sort((a, b) => a.localeCompare(b));

  const populations = Array.from(
    new Set(teamMembers.flatMap((m) => ensureArr(m.population)))
  ).sort((a, b) => a.localeCompare(b));

  // apply filters
  const visibleMembers = teamMembers.filter((m: TeamMember) => {
    const nameMatch = m.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const specialtyMatch = filterSpecialty
      ? m.specialty === filterSpecialty
      : true;

    const modeMatch = filterMode
      ? ensureArr(m.mode).includes(filterMode)
      : true;

    const idiomMatch = filterIdiom
      ? ensureArr(m.idiom).includes(filterIdiom)
      : true;

    const populationMatch = filterPopulation
      ? ensureArr(m.population).includes(filterPopulation)
      : true;

    return (
      nameMatch &&
      specialtyMatch &&
      modeMatch &&
      idiomMatch &&
      populationMatch
    );
  });

  // reset all filters
  const resetFilters = () => {
    setSearchName("");
    setFilterSpecialty("");
    setFilterMode("");
    setFilterIdiom("");
    setFilterPopulation("");
  };

  return (
    <section className="pb-16 bg-gray-50 bg-pattern">
      <div>
        <div className="bg-[url('/assets/bg/bg-team-banner-green-texture.jpg')] bg-cover bg-center text-white h-[400px] px-8 mb-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 lg:h-full flex-col-reverse lg:flex-row lg:flex-nowrap flex-wrap items-center …">
            <div className="w-80 overflow-hidden relative lg:absolute right-0 lg:right-[15%] ">
              <img
                src="/assets/photos/img-all-team-round.png"
                alt="Academic lecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 lg:pr-80">
              <h2 className="mt-8 text-3xl font-bold mb-2">Nuestro equipo</h2>
              <p className="text-lg">
                Contamos con un equipo de profesionales altamente capacitados{" "}
                <br /> y apasionados por el bienestar psicológico y emocional.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* filter row with labels */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Especialidad
              </label>
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded p-2"
              >
                <option value="">Todos</option>
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Modalidad
              </label>
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
              <label className="block text-sm font-medium text-gray-700">
                Idioma
              </label>
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
              <label className="block text-sm font-medium text-gray-700">
                Población
              </label>
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
                    <img
                      src="/assets/icons/education-vector.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p>{member.specialty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/briefcase-vector.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p>{member.years}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src="/assets/icons/checklist.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p>{member.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Modalidad:</span>
                    <p>
                      {filterMode
                        ? filterMode
                        : ensureArr(member.mode).join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Idioma:</span>
                    <p>
                      {filterIdiom
                        ? filterIdiom
                        : ensureArr(member.idiom).join(", ")}
                    </p>
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

                <div className="flex gap-2 justify-center pt-8 mt-auto">
                  <button className="bg-white text-[#5a7e7b] border border-transparent  hover:border-[#5a7e7b]  px-4 py-2 rounded text-sm font-medium transition-colors">
                    Ver Perfil
                  </button>
                  <button className="bg-[#6b8f8c] hover:bg-[#5a7e7b] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    Contacto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}