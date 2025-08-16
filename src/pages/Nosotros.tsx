// src/pages/AcercaDe.tsx
import React from "react";
import { Link } from "react-router-dom";

type SectionProps = {
  id: string;
  title: string;
  side?: "left" | "right"; // dónde va la ilustración
  imgSrc: string; // reemplaza por tu imagen final
  imgAlt: string;
  children: React.ReactNode;
};

const SectionCard: React.FC<SectionProps> = ({
  id,
  title,
  side = "right",
  imgSrc,
  imgAlt,
  children,
}) => {
  const hasLeft = side === "left";
  return (
    <article
      id={id}
      className="relative rounded-xl bg-white shadow-md p-6 sm:p-8"
    >
      {/* Contenedor ilustración lateral (reserva de imagen) */}
      <div
        className={`hidden md:flex absolute inset-y-6 w-48 ${
          hasLeft ? "left-8 justify-start" : "right-8 justify-end"
        }`}
        aria-hidden
      >
        <div className="relative w-48 h-48">
          {/* Reemplaza imgSrc por tu archivo final */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Marco de reserva visible si la imagen falta */}
          <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-xl" />
        </div>
      </div>

      {/* Contenido (deja margen si hay imagen) */}
      <div className={`${hasLeft ? "md:pl-56" : "md:pr-56"}`}>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
          {title}
        </h3>
        <div className="prose prose-slate max-w-none">{children}</div>
      </div>
    </article>
  );
};

export default function AcercaDe() {
  return (
    <main className="bg-gray-50">
      {/* ============== HERO (igual a tu layout) ============== */}
      <header className="relative isolate overflow-hidden">
        {/* Banner base */}
        <div className="bg-[#1A3459]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
            {/* Waves decor */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none">
              <img
                src="/assets/bg/waves-overlay.png" // coloca tus ondas aquí
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto circular derecha */}
            <div className="hidden md:block absolute right-6 lg:right-16 top-6">
              <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-white/20">
                <img
                  src="/assets/photos/img-all-team-round.png" // reemplaza por tu imagen final
                  alt="Equipo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto izquierda */}
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl font-bold">Acerca de</h1>
              <p className="mt-3 text-base sm:text-lg">
                {/* COPY EXACTO */}
                Formamos profesionales expertos en ciencia y práctica de Terapia
                Contextual.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ============== STATEMENT BAND (ilustración izq + texto der) ============== */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl border bg-white shadow-sm px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-[220px,1fr] gap-6 items-center">
            <div className="w-44 mx-auto md:mx-0">
              <img
                src="/assets/illustrations/statement-illustration.png" // reemplaza por tu ilustración
                alt="Ilustración"
                className="w-full h-full object-contain"
              />
              <div
                className="border-2 border-dashed border-slate-300 rounded-xl mt-2"
                aria-hidden
              />
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {/* COPY EXACTO */}
              Democratizar el conocimiento psicológico mediante publicaciones
              que conectan la investigación con la práctica, inspirando
              transformaciones personales y profesionales a través de la
              educación.
            </p>
          </div>
        </div>
      </section>

      {/* ============== PANEL AZUL CON TARJETAS ============== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-[#cfe3e6]">
        <div className="max-w-6xl mx-auto rounded-2xl  p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* --- Biografía del instituto --- */}
          <SectionCard
            id="biografia"
            title="Biografía del instituto"
            side="right"
            imgSrc="/assets/acerca/itac-illustration.png" // PON TU IMAGEN
            imgAlt="Ilustración ITAC"
          >
            {/* COPIA EXACTA AQUÍ: NO MODIFICAR */}
            <p>
              Con un equipo que enseña y divulga la Ciencia y Terapia Contextual
              desde el año 2010, somos una institución de formación,
              investigación y atención psicológica especializada en Terapia
              Contextual. Nuestros objetivos son la formación teórico-práctica
              en Análisis del Comportamiento Clínico y sus encarnaciones más
              conocidas como Terapia de Aceptación y Compromiso (ACT),
              Psicoterapia Analítica Funcional (FAP), Activación Conductual (BA)
              y otras metodologías de Terapia de Conducta (como Exposición y
              Prevención de Respuesta, Entrevista Motivacional, etc.); y la
              asesoría a instituciones que deseen desarrollar investigación o
              capacitarse en estas intervenciones.
            </p>
            <p>
              Actualmente, nuestro equipo colabora en distintos niveles con
              programas de formación de prestigiosas instituciones de México y
              otros lugares de América Latina y España. Nuestro equipo se
              constituye de terapeutas, ponentes y supervisores reconocidos
              internacionalmente, que participan como ponentes en congresos
              internacionales de Terapia Contextual, y realizan investigación en
              la materia con importantes Universidades e Instituciones de Salud
              pública del país.
              <br />
              Conoce más sobre las terapias contextuales (
              <a
                className="text-sky-700 hover:text-sky-900"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Reyes-Ortega, 2017
              </a>
              ).
            </p>
          </SectionCard>

          {/* --- Activación conductual (izquierda) --- */}
          <SectionCard
            id="ac"
            title="Activación conductual"
            side="left"
            imgSrc="/assets/acerca/ac-illustration.png" // PON TU IMAGEN
            imgAlt="Activación conductual"
          >
            {/* COPIA EXACTA AQUÍ: NO MODIFICAR */}
            <p>
              La Activación Conductual (BA, en adelante) puede definirse como un
              tratamiento estructurado, parsimonioso en su aplicación,
              teóricamente fundamentado y ya bien establecido como terapia con
              fuerte apoyo empírico para el tratamiento de la depresión (APA
              Division 12, 2015). Si se tiene en cuenta la duración de la
              intervención y el número de estrategias empleadas, la severidad de
              los cuadros en que ha tenido éxito, el rango de cambio en las
              puntuaciones de los cuestionarios con propiedades psicométricas
              más contrastadas, la ausencia de recaídas tras dos años de
              tratamiento, el abandono de fármacos antidepresivos y el rigor
              metodológico de los ensayos clínicos aleatorizados presentados
              como evidencia, la AC se corona como la opción terapéutica que
              aúna más ventajas para el clínico y el consultante (Barraca,
              2009). La AC no parte de un modelo psicopatológico, aboga, en
              cambio, por el uso de conceptos filosóficos o históricos que
              despatologizan (o desmedicalizan) los estados de ánimo bajos. La
              depresión, se vería como una respuesta normal o esperable ante un
              determinado contexto vital, se explicaría a partir de las
              circunstancias presentes en ese momento y se afianzaría
              fundamentalmente como consecuencia de las mismas respuestas o
              reacciones del individuo a ese entorno. La BA sostiene que es el
              contexto y no factores internos (como determinadas cogniciones o
              desequilibrios de la neurotransmisión) lo que aporta una
              explicación de la depresión más eficiente y representa un ámbito
              de intervención más eficaz. La BA buscaría ayudar a las personas a
              comprender las fuentes ambientales de su depresión y localizar
              aquellas conductas que están manteniendo o empeorando la
              depresión. Los métodos de la AC son:
            </p>
            {/* pega aquí el resto de tus párrafos y listas tal como los tienes */}
            <ol>
              <li>La programación y estructuración de actividades.</li>
              <li>La solución de problemas;</li>
              <li>
                El reforzamiento positivo directo del comportamiento
                antidepresivo;
              </li>
              <li>El desvanecimiento.</li>
              <li>El entrenamiento en habilidades sociales.</li>
              <li>
                Los métodos para facilitar un contacto directo con la
                experiencia antidepresiva.
              </li>
            </ol>
            <p>
              En México, miembros de nuestro equipo han participado de
              desarrollos clínicos en su aplicación para problemas relacionados
              con la depresión y las adicciones (
              <a
                className="text-sky-700 hover:text-sky-900"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Sánchez-Anguiano et al., 2020
              </a>
              ) y de la adaptación de instrumentos para evaluar sus mecanismos (
              <a
                className="text-sky-700 hover:text-sky-900"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Sánchez-Anguiano et al., 2018
              </a>
              ).
            </p>
          </SectionCard>

          {/* --- ACT (derecha) --- */}
          <SectionCard
            id="act"
            title="Terapia de aceptación y compromiso"
            side="right"
            imgSrc="/assets/acerca/act-illustration.png" // PON TU IMAGEN
            imgAlt="ACT"
          >
            {/* COPIA EXACTA AQUÍ: NO MODIFICAR */}
            <p>
              La Terapia de Aceptación y Compromiso —que se suele denominar de
              forma abreviada con el acrónimo ACT, proveniente del original
              inglés: Acceptance and Commitment Therapy, lleva a sus espaldas
              más de 35 años de investigación y desarrollo. ACT difiere
              significativamente del tratamiento convencional, pues si en éste
              el foco se dirige hacia la eliminación de las conductas-problema
              que favorecen la aparición o el mantenimiento de los síntomas, ACT
              postula en cambio la necesidad de abandonar los esfuerzos para
              desembarazarse de las sensaciones, los pensamientos o los
              sentimientos aversivos, y aceptarlos tal y como son.
            </p>
            <p>
              Esta invitación a modificar la forma más habitual de actuar se
              justifica por la practicidad de renunciar a una lucha estéril
              contra el malestar cuando esta actitud de lucha paraliza la vida
              del consultante y le impide dirigirse hacia unos objetivos
              personalmente valorados.
            </p>
            <p>
              ACT integra muchos de los problemas tradicionalmente clasificados
              en diferentes trastornos psicopatológicos (ansiedad generalizada,
              trastorno de angustia, trastorno depresivo, trastorno
              obsesivo-compulsivo, etc.) en un cuadro denominado trastorno de
              evitación experiencial, puesto que la mayoría de los síntomas que
              se dan en esos problemas pueden entenderse, desde un punto de
              vista funcional, como una complicación derivada del deseo
              consciente de no entrar en contacto con unas experiencias privadas
              dolorosas. ACT ha demostrado ser útil en el tratamiento de estas
              condiciones y constituirse como una de las alternativas en
              psicoterapia mejor estudiadas y de utilidad para mayor número de
              condiciones de sufrimiento humano, en aislamiento o combinación (
              <a
                className="text-sky-700 hover:text-sky-900"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Gloster et al. 2020 y APA División 12, 2020.
              </a>
              )
            </p>
            {/* pega aquí el resto de tus párrafos y referencias exactas */}
          </SectionCard>

          {/* --- FAP (izquierda) --- */}
          <SectionCard
            id="fap"
            title="Psicoterapia analítica funcional"
            side="left"
            imgSrc="/assets/acerca/fap-illustration.png" // PON TU IMAGEN
            imgAlt="FAP"
          >
            {/* COPIA EXACTA AQUÍ: NO MODIFICAR */}
            <p>
              La Psicoterapia Analítico-Funcional (de ahora en adelante FAP, del
              inglés Functional Analytic Psychotherapy) surgió hace poco más de
              30 años como una nueva aportación y desarrollo de la terapia de
              conducta clásica y una alternativa a la psicoterapia tradicional.
              La FAP se centra fundamentalmente en el análisis de la relación
              interpersonal entre el terapeuta y el consultante como un contexto
              en el que pueden ocurrir problemáticas similares a las que el
              consultante experimenta en su vida diaria, y donde pueden
              intentarse soluciones equivalentes a las que podrían intentarse
              ahí. FAP hace uso del reforzamiento natural positivo y el
              moldeamiento para desarrollar y fortalecer clases de
              comportamientos alternativos que sirvan como facilitadores de una
              mejor interacción con uno mismo, las demás personas, y los
              desafíos que la vida plantea. Las aportaciones más desarrolladas
              de la FAP se han centrado en la terapia, pero también en la
              conceptuación de diversas alteraciones y fenómenos conductuales
              como el trastorno depresivo, el trastorno por estrés
              postraumático, trastornos de personalidad, tabaquismo, problemas
              en la relación de parejas, o aspectos psicológicos del dolor
              crónico (Kanter et al. 2017). Otra de sus aportaciones es su
              teoría de la personalidad, donde se explica cómo surge el concepto
              de “uno  mismo” como un fenómeno de conducta verbal
              (Fernández-Parra & Ferro García, 2006). En México, miembros de
              nuestro equipo han participado en investigaciones sobre los
              impactos de FAP en la fatiga de profesionales de la salud mental
              (Reyes-Ortega et al. 2019), trastornos de la personalidad (Arango
              et al. 2019; Reyes-Ortega et al. 2020), investigaciones sobre su
              eficacia (Kanter et al. 2017), y han publicado manuales sobre su
              aplicación (Reyes-Ortega & Kanter, 2017).
            </p>
            {/* pega aquí el resto de tu copy con citas y enlaces tal cual */}
          </SectionCard>
        </div>
      </section>
    </main>
  );
}
