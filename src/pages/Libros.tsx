// src/pages/Libros.tsx
import React from "react";

type Book = {
    id: string;
    cover: string;         // ruta a la portada
    title: string;         // título visible
    citation: string;      // línea de cita/autores/año/editorial
    blurb?: string;        // breve descripción opcional
    buyUrl?: string;       // enlace para comprar/ver
};

const books: Book[] = [
    {
        id: "itac-01",
        cover: "/assets/books/act-contextual-aplicada.jpg",
        title:
            "Activación Conductual Adaptada para el Tratamiento del Estrés Postraumático (AC-TEPT).",
        citation:
            "Reyes, M. A. (2024).​ Activación Conductual Adaptada para el Tratamiento del Estrés Postraumático (AC-TEPT). Córdoba, Brujas.",
        blurb:
            "Aborda la integración de procesos contextuales en la atención a pacientes oncológicos, con guías de intervención y casos clínicos.",
        buyUrl: "#",
    },
    {
        id: "itac-02",
        cover: "/assets/books/activacion-conductual.jpg",
        title:
            "Activación conductual para depresión resistente al tratamiento.",
        citation:
            "Reyes, M. A. & Téllez, J. (2024).​ Activación conductual para depresión resistente al tratamiento. Córdoba, Brujas.",
        blurb:
            "Protocolo paso a paso con herramientas prácticas y registros conductuales para su aplicación clínica.",
        buyUrl: "#",
    },
    {
        id: "itac-03",
        cover: "/assets/books/guia-clinica-suicida.jpg",
        title:
            "Guía de evaluación y tratamiento del comportamiento Suicida",
        citation:
            "Reyes, M. A. & Strosahl, K. D. Comps (2020). Guía de evaluación y tratamiento del comportamiento Suicida. Ciudad de México, El Manual Moderno",
        blurb:
            "Modelos de formulación funcional y estrategias de intervención basadas en evidencia para la prevención del suicidio.",
        buyUrl: "#",
    },
    {
        id: "itac-04",
        cover: "/assets/books/duelo.jpg",
        title:
            "Duelo: Tratamiento basado en la Terapia de Aceptación y Compromiso.",
        citation:
            "Cruz J. I., Reyes, M.A. & Corona I. Z. (2017). Duelo: Tratamiento basado en la Terapia de Aceptación y Compromiso. México D.F., El Manual Moderno.",
        blurb:
            "Conjunto de procedimientos y ejercicios para desarrollar repertorios clínicos desde FAP.",
        buyUrl: "#",
    },
    {
        id: "itac-05",
        cover: "/assets/books/publicacion-metodos.jpg",
        title:
            "Psicoterapia Analítica Funcional: Maximizando el efecto de la relación terapéutica.",
        citation:
            "Reyes, M. A. & Kanter, J. W. (2017). Psicoterapia Analítica Funcional: Maximizando el efecto de la relación terapéutica. Córdoba, Brujas.",
        blurb:
            "Lecturas comentadas y rúbricas de competencias clínicas asociadas a procesos de ACT.",
        buyUrl: "#",
    },
    {
        id: "itac-06",
        cover: "/assets/books/proyecto-escolar.jpg",
        title:
            "Regulación emocional en la práctica clínica, una guía para terapeutas.",
        citation:
            "Reyes, M. A. & Tena Suck, A. (2016). Regulación emocional en la práctica clínica, una guía para terapeutas. México D.F., El Manual Moderno.",
        blurb:
            "Programa estructurado para grupos psicoeducativos en contextos escolares, con planes de sesión.",
        buyUrl: "#",
    },
];

export default function Libros() {
    return (
        <main className="bg-gray-50">
            {/* ================= HERO (responsive, no overlap) ================= */}
            <header className="relative isolate overflow-hidden">
                {/* background color + waves */}
                <div className="bg-[#1A3459]">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* waves overlay */}
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                            <img
                                src="/assets/images/bg-nosotros-main-banner-waves.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* grid avoids overlap; stacks on <md */}
                        <div className="relative grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-8 items-center py-10 md:py-14 lg:py-16 min-h-[240px]">
                            {/* left: text */}
                            <div className="text-white">
                                <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                                    Libros Terapias Contextuales
                                </h1>
                                <p className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed">
                                    Una lista de libros escritos por miembros de nuestro equipo y publicados por editoriales de prestigio que cuentan con revisión de calidad por pares. 
                                </p>
                            </div>

                            {/* right: image (own column, no absolute) */}
                            <div className="hidden md:block justify-self-end">
                                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full">
                                    <img
                                        src="/assets/images/woman-book.png"
                                        alt="Portada libros"
                                        className="absolute inset-0 w-full  object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* ================= LISTA ================= */}
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {books.map((b, idx) => (
                        <div
                            key={b.id}
                            className={`${idx % 2 === 1 ? "bg-[#e6f0f2]" : "bg-white"} border-y border-slate-200/60`}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div className="grid grid-cols-1 md:grid-cols-[180px,1fr] gap-6 items-center">
                                    {/* Portada + título (card con borde/sombra) */}
                                    <div className="md:justify-self-start">
                                        <figure className="w-[180px] rounded-xl bg-white p-3 shadow-md ring-1 ring-slate-200">
                                            <img
                                                src={b.cover}
                                                alt={b.title}
                                                className="w-full h-auto object-contain rounded"
                                            />
                                            <figcaption className="mt-3 text-xs font-semibold text-slate-800 leading-snug">
                                                {b.title}
                                            </figcaption>
                                        </figure>
                                    </div>

                                    {/* Detalle */}
                                    <div>
                                        <p className="text-sm text-slate-700">{b.citation}</p>

                                        {b.blurb && (
                                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                                {b.blurb}
                                            </p>
                                        )}

                                        <div className="mt-4">
                                            <a
                                                href={b.buyUrl || "#"}
                                                onClick={(e) => {
                                                    if (!b.buyUrl) e.preventDefault();
                                                }}
                                                className="inline-flex items-center rounded-md bg-[#1A3459] text-white text-xs sm:text-sm px-4 py-2 hover:bg-[#2a4469] transition-colors"
                                            >
                                                Comprar libro
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
