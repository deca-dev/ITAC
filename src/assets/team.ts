
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
    id: 'aldo-rico',
    name: 'Aldo Rico',
    title: 'Psicólogo',
    specialty: 'Terapia Racional Emotiva Conductual',
    description:
      'Psicólogo Clínico licenciado, especializado en TREC y co-entrenador de grupos DBT para adultos y familias.',
    years: '5+ años de experiencia',
    certification: 'Licenciado',
    photo: 'aldo-rico',
    mode: ['En línea'],
    idiom: ['Español'],
    population: ['Adultos'],
  },
  {
    id: 'alejandra-castellanos',
    name: 'Alejandra Castellanos',
    title: 'Mtra.',
    specialty: 'Terapia Cognitivo Conductual',
    description:
      'Psicóloga Clínica especializada en Terapias Contextuales, con estudios de maestría en Terapia Cognitivo Conductual y terapeuta DBT certificada.',
    years: '15+ años de experiencia',
    certification: 'Maestra',
    photo: 'alejandra-castellanos',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español', 'Inglés'],
    population: ['Adultos'],
  },
  {
    id: 'amalia-castillo',
    name: 'Amalia Castillo',
    title: 'Mtra.',
    specialty: 'Terapia de Aceptación y Compromiso',
    description:
      'Psicoterapeuta Conductual Contextual, máster en Terapia de Aceptación y Compromiso y experta en Psicoterapia Analítica Funcional y Mindfulness.',
    years: '8+ años de experiencia',
    certification: 'Maestra',
    photo: 'amalia-castillo',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español'],
    population: ['Adultos'],
  },
  {
    id: 'claudia-ramirez',
    name: 'Claudia Ramírez',
    title: 'Mtra.',
    specialty: 'Terapia Cognitivo Conductual',
    description:
      'Psicóloga Clínica Institucional, maestra en Psicoterapia Cognitivo Conductual, coordinadora académica y supervisora clínica con formación en DBT, ACT y BA.',
    years: '25+ años de experiencia',
    certification: 'Maestra',
    photo: 'claudia-ramirez',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español'],
    population: ['Adultos'],
  },
  {
    id: 'fabiola-mora',
    name: 'Fabiola Mora',
    title: 'Psicóloga',
    specialty: 'Psicología Clínica',
    description:
      'Psicóloga Clínica, licenciada en Psicología y especialista en Psicooncología, con formación en ACT, DBT, BA y Mindfulness aplicado.',
    years: '5+ años de experiencia',
    certification: 'Licenciada',
    photo: 'fabiola-mora',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español'],
    population: ['Infancia', 'Adolescencia', 'Adultos'],
  },
  {
    id: 'karla-garza',
    name: 'Karla Garza',
    title: 'Psicóloga',
    specialty: 'Terapia Dialéctica Conductual',
    description:
      'Psicóloga Clínica, licenciada en Psicología con diplomado en intervenciones psicoterapéuticas, especializada en DBT grupal.',
    years: '7+ años de experiencia',
    certification: 'Licenciada',
    photo: 'karla-garza',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español'],
    population: ['Adultos'],
  },
  {
    id: 'karla-lopez',
    name: 'Karla López',
    title: 'Psicóloga',
    specialty: 'Psicología Clínica',
    description:
      'Psicóloga Clínica licenciada, maestra en Psicología Clínica, entrenadora líder en habilidades multifamiliares DBT.',
    years: '10+ años de experiencia',
    certification: 'Maestra',
    photo: 'karla-lopez',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español', 'Inglés'],
    population: ['Infancia', 'Adolescencia', 'Adultos'],
  },
  {
    id: 'liliana-fernandez',
    name: 'Liliana Fernández',
    title: 'Psicóloga',
    specialty: 'Neuropsicología Clínica',
    description:
      'Psicóloga Clínica licenciada, con formación en evaluación neuropsicológica y supervisora de programas DBT-A y FAP.',
    years: '6+ años de experiencia',
    certification: 'Licenciada',
    photo: 'liliana-fernandez',
    mode: ['Presencial', 'En línea'],
    idiom: ['Español'],
    population: ['Adolescencia','Adultos'],
  },
  {
    id: 'michel-reyes',
    name: 'Michel Reyes',
    title: 'Dr.',
    specialty: 'Investigación Psicológica',
    description:
      'Doctor en Investigación Psicológica, experto en DBT y ACT, autor de libros científicos y docente en programas de posgrado internacionales.',
    years: '20+ años de experiencia',
    certification: 'Doctor',
    photo: 'michel-reyes',
    idiom: ['Español', 'Inglés'],
    mode: ['En línea'],
    population: ['Adultos'],
  },
  {
    id: 'nancy-leal',
    name: 'Nancy Leal',
    title: 'Mtra.',
    specialty: 'Psicología Clínica',
    description:
      'Psicóloga Clínica, maestra en Psicología Clínica, terapeuta de adolescentes y entrenadora en habilidades DBT.',
    years: '7+ años de experiencia',
    certification: 'Maestra',
    photo: 'nancy-leal',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español', 'Inglés'],
    population: ['Adolescencia','Adultos'],
  },
  {
    id: 'patricia-mendoza',
    name: 'Patricia Mendoza',
    title: 'Mtra.',
    specialty: 'Psicología Clínica',
    description:
      'Psicóloga Clínica maestra, especializada en DBT y ACT, docente y supervisora en entornos hospitalarios.',
    years: '6+ años de experiencia',
    certification: 'Maestra',
    photo: 'patricia-mendoza',
    mode: 'En línea',
    idiom: ['Español', 'Inglés'],
    population: ['Infancia', 'Adolescencia'],
  },
  {
    id: 'sarai-sanchez',
    name: 'Sarai Sánchez',
    title: 'Mtra.',
    specialty: 'Terapia Cognitivo Conductual',
    description:
      'Maestra en Terapia Cognitivo Conductual, especializada en Terapias Contextuales para población infantil y adolescente, con amplia experiencia en Mindfulness e instructora escolar.',
    years: '5+ años de experiencia',
    certification: 'Maestra',
    photo: 'sarai-sanchez',
    mode: ['Presencial', 'En línea'],
    idiom: ['Español', 'Inglés'],
    population: ['Infancia', 'Adolescencia', 'Adultos'],
  },
  {
    id: 'uriel-xchel',
    name: 'Uriel Xchel',
    title: 'Psicólogo',
    specialty: 'Terapia de Aceptación y Compromiso',
    description:
      'Psicólogo Clínico licenciado con formación en ACT, DBT, BA y FAP, y facilitador de talleres socioemocionales.',
    years: '5+ años de experiencia',
    certification: 'Licenciado',
    photo: 'uriel-xchel',
    mode: ['En línea', 'Presencial'],
    idiom: ['Español', 'Inglés'],
    population: ['Adolescencia','Adultos'],
  },
];
