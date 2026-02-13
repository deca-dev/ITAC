
/**
 * Describes a team member.
 */
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  description: string;
  years: string;
  certification: string;
  photo: string;
  mode: Array<string> | string; // Can be a single mode or an array of modes
  idiom: Array<string> | string; // Can be a single mode or an array of modes
  population: Array<string> | string; // Can be a single population or an array of populations
}

/**
 * Array of all team members
 */
export const teamMembers: TeamMember[] = [
  {
    id: "aldo-rico-leyva",
    name: "Aldo Rico Leyva",
    title: "Psic.",
    specialty: "Psicólogo Clínico",
    description:
      "Psicólogo entrenado en Terapias Contextuales, co-entrenador de grupos en Terapia Dialéctica Conductual y Terapeuta individual en DBT y Activación Conductual.",
    years: "Terapeuta Individual, Entrenador y Docente.",
    certification: "Licenciado",
    photo: "aldo-rico",
    mode: ["En línea"],
    idiom: ["Español"],
    population: ["Adultos"],
  },
  {
    id: "alejandra-castellanos-espinosa",
    name: "Alejandra Castellanos Espinosa",
    title: "Mtra.",
    specialty: "Maestría en Psicoterapia",
    description:
      "Directora General del ITAC, psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapeuta DBT. Docente de Psicología Clínica y Terapias Contextuales en ITAC y UNAM.",
    years: "Terapeuta Individual, Entrenadora, Supervisora y Docente",
    certification: "Maestra",
    photo: "alejandra-castellanos",
    mode: ["En línea", "Presencial"],
    idiom: ["Español", "Inglés"],
    population: ["Adultos"],
  },
  {
    id: "amalia-castillo-rosales",
    name: "Amalia Castillo Rosales",
    title: "Psic.",
    specialty: "Maestría en Psicoterapia",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia Dialéctica Conductual (DBT), Terapia de Aceptación y compromiso (ACT), Psicoterapia Analítica Funcional (FAP) y Mindfulness.",
    years: "Terapeuta Individual",
    certification: "Maestra",
    photo: "amalia-castillo",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adultos"],
  },
  {
    id: "claudia-e-ramirez-avila",
    name: "Claudia E. Ramírez Avila",
    title: "Dra.",
    specialty: "Doctora en Educación",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctica Conductual (DBT), Psicoterapia Analítico Funcional (FAP) y Terapia Centrada en la Compasión (CFT); es académica de la UNAM.",
    years: "Terapeuta Individual",
    certification: "Doctora",
    photo: "claudia-ramirez",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adultos"],
  },
  {
    id: "fabiola-mora-sanchez",
    name: "Fabiola Mora Sánchez",
    title: "Psic.",
    specialty: "Psicóloga clínica",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, terapeuta individual DBT para adolescentes y adultos, entrenadora líder en Grupo Multifamiliar de Habilidades y en grupo de adultos DBT.",
    years: "Terapeuta Individual y Entrenadora de Habilidades",
    certification: "Licenciada",
    photo: "fabiola-mora",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Infancia", "Adolescencia", "Adultos"],
  },
  {
    id: "karla-garza-gallegos",
    name: "Karla Garza Gallegos",
    title: "Psic.",
    specialty: "Psicóloga clínica",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia Dialéctica Conductual (DBT).",
    years: "Terapeuta Individual",
    certification: "Licenciada",
    photo: "karla-garza",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adultos"],
  },
  {
    id: "karla-y-lopez-villagran",
    name: "Karla Y. López Villagrán",
    title: "Mtra.",
    specialty: "Maestría en Psicoterapia",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapeuta y Entrenadora de habilidades DBT. Docente en Programas del ITAC y en la UNAM.",
    years: "Terapeuta Individual, Entrenadora y Docente",
    certification: "Maestra",
    photo: "karla-lopez",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Infancia", "Adolescencia", "Adultos"],
  },
  {
    id: "liliana-fernandez-alejo",
    name: "Liliana Fernández Alejo",
    title: "Psic.",
    specialty: "Psicóloga clínica",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, terapeuta individual DBT para adolescentes, entrenadora líder en Grupo Multifamiliar de Habilidades DBT.",
    years: "Terapeuta Individual y Entrenadora de Habilidades",
    certification: "Licenciada",
    photo: "liliana-fernandez",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adolescencia", "Adultos"],
  },
  {
    id: "michel-reyes-ortega",
    name: "Michel Reyes Ortega",
    title: "Dr.",
    specialty: "Doctor en Investigación Psicológica",
    description:
      "Coordinador del Área Académica ITAC, psicólogo clínico especializado en el tratamiento de trastornos de la personalidad y emocionales. Autor de libros y artículos científicos. Docente en Psicología Clínica en programas de México, E.U.A., Latinoamérica y Europa.",
    years: "Terapeuta Individual, Docente y Supervisor",
    certification: "Doctor",
    photo: "michel-reyes",
    mode: ["En línea"],
    idiom: ["Español", "Inglés"],
    population: ["Adultos"],
  },
  {
    id: "nancy-leal-zambrano",
    name: "Nancy Leal Zambrano",
    title: "Mtra.",
    specialty: "Maestría en Psicología Clínica",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, terapeuta individual DBT para adolescentes, entrenadora líder en Grupo Multifamiliar de Habilidades DBT.",
    years: "Terapeuta Individual y Entrenadora de Habilidades",
    certification: "Maestra",
    photo: "nancy-leal",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adolescencia", "Adultos"],
  },
  {
    id: "patricia-mendoza-rodriguez",
    name: "Patricia Mendoza Rodríguez",
    title: "Mtra.",
    specialty: "Maestría en Psicología",
    description:
      "Psicóloga clínica especializada en Terapias Conductuales Contextuales, terapeuta individual DBT para adolescentes, co-entrenadora en Grupo Multifamiliar de Habilidades DBT.",
    years: "Terapeuta Individual y Entrenadora de Habilidades",
    certification: "Maestra",
    photo: "patricia-mendoza",
    mode: ["Presencial"],
    idiom: ["Español"],
    population: ["Infancia", "Adolescencia"],
  },
  {
    id: "sarai-sanchez-morales",
    name: "A. Sarai Sánchez Morales",
    title: "Mtra.",
    specialty: "Maestría en Psicoterapia",
    description:
      "Coordinadora del Área Clínica y del Área de Infancia y Adolescencia del ITAC, psicóloga clínica especializada en Terapias Conductuales Contextuales (DBT, ACT y Mindfulness). Docente en Programas de ITAC, UNAM, México y Latinoamérica.",
    years: "Terapeuta Individual, Entrenadora, Supervisora y Docente",
    certification: "Maestra",
    photo: "sarai-sanchez",
    mode: ["En línea", "Presencial"],
    idiom: ["Español", "Inglés"],
    population: ["Infancia", "Adolescencia", "Adultos"],
  },
  {
    id: "susana-morelos-flores",
    name: "Susana Morelos Flores",
    title: "Mtra.",
    specialty: "Maestría en Psicoterapia",
    description:
      "Psicóloga clínica entrenada en Terapias Contextuales, co-entrenadora de grupos de familiares y allegados en Terapia Dialéctica Conductual y Terapeuta individual en DBT, en Terapia de Aceptación y Compromiso y Activación Conductual.",
    years: "Terapeuta Individual y co-entrenadora.",
    certification: "Maestra",
    photo: "susana-morelos",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adultos"],
  },
  {
    id: "uriel-xchel-cordero-bastida",
    name: "Uriel Xchel Cordero Bastida",
    title: "Psic.",
    specialty: "Psicólogo clínico",
    description:
      "Psicólogo clínico especializado en Terapias Conductuales Contextuales, terapeuta individual DBT, entrenador en Grupo Multifamiliar de Habilidades DBT.",
    years: "Terapeuta Individual y co-entrenador de Habilidades",
    certification: "Licenciado",
    photo: "uriel-xchel",
    mode: ["En línea", "Presencial"],
    idiom: ["Español"],
    population: ["Adolescencia", "Adultos"],
  },
];

