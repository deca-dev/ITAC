// src/data/courses.ts

/**
 * Defines the shape of each course object.
 */
export interface Course {
  id: number;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  dates: string;
  schedule: string;
  mode: string;
  text: string;
}

/**
 * Array of courses for "Formación Académica" pages.
 */
export const courses: Course[] = [
  {
    id: 1,
    slug: "diplomado-fundamentos-dbt",
    image: "/assets/images/course-1.jpg",
    title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual (7ma Generación)",
    subtitle:
      "Formación teórico-práctica para desarrollar habilidades clínicas basadas en ACT, con énfasis en valores, mindfulness y flexibilidad psicológica.",
    dates: "04 abril, 2025 - 24 octubre, 2025",
    schedule: "Jueves 19hrs - 20hrs, Viernes 17hrs - 21hrs",
    mode: "Presencial y Online",
    text: `
      <p>El <strong>Diplomado en Fundamentos de Terapia Dialéctica Conductual</strong> está diseñado para profesionales de la salud mental interesados en profundizar en técnicas avanzadas de DBT. A lo largo de 120 horas (80 teóricas y 40 prácticas), los participantes:</p>
      <ul>
        <li>Comprenderán el modelo biosocial y su aplicación clínica.</li>
        <li>Desarrollarán habilidades de regulación emocional y tolerancia al malestar.</li>
        <li>Realizarán prácticas supervisadas con casos reales.</li>
        <li>Recibirán feedback continuo de instructores certificados por Behavioral Tech.</li>
      </ul>
      <p>Al finalizar, recibirás un certificado avalado por la UNAM y acceso a la comunidad de exalumnos.</p>
    `,
  },
  {
    id: 2,
    slug: "curso-dbt-teams",
    image: "/assets/images/course-2.jpg",
    title: "Curso‑Taller: DBT TEAMS",
    subtitle: "Logrando los más altos estándares de calidad en DBT para equipos clínicos.",
    dates: "31 mayo y 1 junio, 2025",
    schedule: "Intensivo de fin de semana",
    mode: "Presencial y Online",
    text: `
      <p>En este curso intensivo de dos días, la Dra. Ronda Reitz proporcionará herramientas para:</p>
      <ol>
        <li>Implementar protocolos DBT en entornos hospitalarios y comunitarios.</li>
        <li>Supervisar y certificar terapeutas bajo el estándar Linehan Institute.</li>
        <li>Diseñar planes de tratamiento individualizados para poblaciones diversas.</li>
      </ol>
      <p>Incluye materiales oficiales de Behavioral Tech, casos de estudio y sesiones de role‑play.</p>
    `,
  },
  {
    id: 3,
    slug: "dbt-c-poblacion-infantil",
    image: "/assets/images/course-3.jpg",
    title: "Entrenamiento Intensivo en DBT‑C",
    subtitle: "Terapia Dialéctica Conductual para población infantil.",
    dates: `1ra parte: 5, 6 y 7 diciembre, 2025<br/>2da parte: 24, 25 y 26 julio, 2025`,
    schedule: "Sesiones prácticas y supervisión clínica",
    mode: "Presencial",
    text: `
      <p>El Programa <strong>DBT‑C</strong> está especialmente adaptado para niños y preadolescentes con comportamientos desregulados. Incluye:</p>
      <ul>
        <li>Intervenciones lúdicas basadas en DBT.</li>
        <li>Sesiones de entrenamiento de habilidades para cuidadores.</li>
        <li>Supervisión grupal y asesoría individual.</li>
      </ul>
      <p>Requisitos: Licenciatura en Psicología o áreas afines y experiencia mínima de 2 años en salud mental.</p>
    `,
  },
  {
    id: 4,
    slug: "retiro-mindfulness-zen",
    image: "/assets/images/course-4.jpg",
    title: "Curso‑Taller: Retiro de Mindfulness Zen 2025",
    subtitle: "Encuentro intensivo de práctica contemplativa y meditación.",
    dates: "22 mayo, 2025 - 25 mayo, 2025",
    schedule: "Retiro residencial de 4 días",
    mode: "Presencial",
    text: `
      <p>Este retiro ofrece un espacio de silencio y práctica profunda de mindfulness zen. Incluye:</p>
      <ul>
        <li>Sesiones de meditación guiada.</li>
        <li>Charlas sobre filosofía zen y psicología contemplativa.</li>
        <li>Tiempo de práctica individual en entorno natural.</li>
      </ul>
      <p>Plazas limitadas. Incluye alojamiento y alimentación vegetariana.</p>
    `,
  },
];
