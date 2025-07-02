import React, { useState } from "react";
import { teamMembers, type TeamMember } from "../assets/team";

export default function TeamGeneral() {
  const [searchName, setSearchName] = useState<string>("");
  const [filterSpecialty, setFilterSpecialty] = useState<string>("");
  const [filterMode, setFilterMode] = useState<string>("");
  const [filterPopulation, setFilterPopulation] = useState<string>("");

  // derive unique filter options
  const specialties = Array.from(
    new Set(teamMembers.map((m) => m.specialty))
  ).sort();
  const modes = Array.from(new Set(teamMembers.map((m) => m.mode))).sort();
  const populations = Array.from(
    new Set(teamMembers.map((m) => m.population))
  ).sort();

  // apply filters
  const visibleMembers = teamMembers.filter((m: TeamMember) => {
    const matchesName = m.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesSpecialty = filterSpecialty
      ? m.specialty === filterSpecialty
      : true;
    const matchesMode = filterMode ? m.mode === filterMode : true;
    const matchesPopulation = filterPopulation
      ? m.population === filterPopulation
      : true;
    return matchesName && matchesSpecialty && matchesMode && matchesPopulation;
  });

  // reset all filters
  const resetFilters = () => {
    setSearchName("");
    setFilterSpecialty("");
    setFilterMode("");
    setFilterPopulation("");
  };

  return (
    <section className="pb-16 bg-gray-50 bg-pattern">
      <div>
        <div className="bg-[url('/assets/bg/bg-team-banner-green-texture.jpg')] bg-cover bg-center text-white h-[400px] px-8 mb-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 lg:h-full flex-col-reverse lg:flex-row lg:flex-nowrap flex-wrap items-center …">
            {/* on small: stays in flow; on lg: absolute */}
            <div className="w-80 overflow-hidden relative lg:absolute right-0 lg:right-[100px] ">
              <img
                src="/assets/photos/img-all-team-round.png"
                alt="Academic lecture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* give text a right padding equal to the image width so it never runs under it */}
            <div className="flex-1 lg:pr-80">
               <h2 className="mt-8 text-3xl font-bold mb-2">Nuestro equipo</h2>
            <p className="text-lg">
              Contamos con un equipo de profesionales altamente capacitados{" "}
              <br /> y apasionados por el bienestar psicológico y emocional.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <select
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">Especialidad</option>
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">Modalidad</option>
              {modes.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
            <select
              value={filterPopulation}
              onChange={(e) => setFilterPopulation(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">Población</option>
              {populations.map((pop) => (
                <option key={pop} value={pop}>
                  {pop}
                </option>
              ))}
            </select>
            <button
              onClick={resetFilters}
              className="border border-gray-300 rounded p-2 bg-white hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
          </div>

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
                    <p>{member.mode}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Población:</span>
                    <p>{member.population}</p>
                  </div>
                </div>

                <div className="flex gap-2 justify-center pt-8 mt-auto">
                  <button className="bg-white text-[#5a7e7b] border border-transparent border-[#5a7e7b] hover:bg-[#5a7e7b] hover:color-[#fff] px-4 py-2 rounded text-sm font-medium transition-colors">
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
