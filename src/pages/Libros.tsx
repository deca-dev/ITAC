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
            "",
        buyUrl: "https://wa.link/animxn",
    },
    {
        id: "itac-02",
        cover: "/assets/books/activacion-conductual.jpg",
        title:
            "Activación conductual para depresión resistente al tratamiento.",
        citation:
            "Reyes, M. A. & Téllez, J. (2024).​ Activación conductual para depresión resistente al tratamiento. Córdoba, Brujas.",
        blurb:
            "",
        buyUrl: "https://wa.link/b68hvc",
    },
    {
        id: "itac-03",
        cover: "/assets/books/guia-clinica-suicida.jpg",
        title:
            "Guía Clínica De Evaluación Y Tratamiento Del Comportamiento Suicida",
        citation:
            "Reyes, M. A. & Strosahl, K. D. Comps (2020). Guía de evaluación y tratamiento del comportamiento Suicida. Ciudad de México, El Manual Moderno.",
        blurb:
            "",
        buyUrl: "https://www.amazon.com.mx/Cl%C3%ADnica-Evaluaci%C3%B3n-Tratamiento-Comportamiento-Suicida/dp/6074488363/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1614026904&sr=8-1",
    },
    {
        id: "itac-04",
        cover: "/assets/books/duelo.jpg",
        title:
            "Duelo: Tratamiento basado en la Terapia de Aceptación y Compromiso.",
        citation:
            "Cruz J. I., Reyes, M.A. & Corona I. Z. (2017). Duelo: Tratamiento basado en la Terapia de Aceptación y Compromiso. México D.F., El Manual Moderno.",
        blurb:
            "",
        buyUrl: "https://www.amazon.com.mx/Duelo-Zenyazenn-Ivonne-Cruz-Gait%C3%A1n/dp/6074486301/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Duelo%3A+Tratamiento+basado+en+la+Terapia+de+Aceptaci%C3%B3n+y+Compromiso&qid=1614026560&sr=8-2",
    },
    {
        id: "itac-05",
        cover: "/assets/books/publicacion-metodos.jpg",
        title:
            "Psicoterapia Analítica Funcional: Maximizando el efecto de la relación terapéutica.",
        citation:
            "Reyes, M. A. & Kanter, J. W. (2017). Psicoterapia Analítica Funcional: Maximizando el efecto de la relación terapéutica. Córdoba, Brujas.",
        blurb:
            "",
        buyUrl: "https://www.editorialbrujas.com.ar/libros/detalle/408",
    },
    {
        id: "itac-06",
        cover: "/assets/books/proyecto-escolar.jpg",
        title:
            "Regulación emocional en la práctica clínica, una guía para terapeutas.",
        citation:
            "Reyes, M. A. & Tena Suck, A. (2016). Regulación emocional en la práctica clínica, una guía para terapeutas. México D.F., El Manual Moderno.",
        blurb:
            "",
        buyUrl: "https://www.amazon.com.mx/Regulaci%C3%B3n-emocional-pr%C3%A1ctica-cl%C3%ADnica-terapeutas/dp/6074485704/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1614027408&sr=8-1",
    },
    {
        id: "itac-07",
        cover: "/assets/books/manual-programa-grupal-individual.jpg",
        title:
            "Manual del programa grupal-individual de desarrollo de habilidades de aceptación y control del malestar para pacientes con trastornos de regulación emocional. ",
        citation:
            "Reyes, M. A., (2011). Manual del programa grupal-individual de desarrollo de habilidades de aceptación y control del malestar para pacientes con trastornos de regulación emocional. Guadalajara Jalisco, Instituto Jalisciense de Salud Mental.",
        blurb:
            "",
        buyUrl: "https://wa.link/4thnau",
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
                                        loading="lazy"
                                        decoding="async"
                                        width={272}
                                        height={409}
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
                                                loading="lazy"
                                                decoding="async"
                                                width={156}
                                                height={242}
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
                                                target="_blank"
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
