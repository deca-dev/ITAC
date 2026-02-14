// src/assets/teamResume.ts

export type TeamResume = {
    /** Optional override to display full name with title */
    displayName?: string;

    bannerImage?: string;

    /** Optional: short “Resumenes de CV” (punto 3 o resumen) */
    resumen?: string;

    /** Optional: longer narrative paragraphs (kept verbatim) */
    bio?: string[];

    /** Optional: education/training bullets (kept verbatim) */
    educacion?: string[];

    /** Optional: experience bullets (kept verbatim) */
    experiencia?: string[];

    /** Optional: small “Extracto” blocks (kept verbatim) */
    extracto?: string;

    /** Contact info */
    contacto?: {
        phone?: string;
        emails?: string[];
    };
};

export const teamResumes: Record<string, TeamResume> = {
    // ─────────────────────────────────────────────────────────
    // Alejandra
    // ─────────────────────────────────────────────────────────
    "alejandra-castellanos-espinosa": {
        displayName: "Mtra. Alejandra Castellanos Espinosa",
        bannerImage: "/assets/photos/banners/Alejandra.jpg",
        resumen:
            "Directora General del ITAC, psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapeuta DBT. Docente de Psicología Clínica y Terapias Contextuales en ITAC y UNAM.",
        bio: [
            "Alejandra es Licenciada en Psicología y cuenta con la Maestría en Terapia Cognitivo Conductual con múltiples entrenamientos en las diferentes Terapias Contextuales como la Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítica Funcional (FAP), Terapia Dialéctico Conductual (DBT) y Activación Conductual (BA). Ha dedicado su vida profesional a la docencia y a la práctica clínica.",
            "Miembro del equipo DBT México - Clínica de Especialidad en Terapia Dialéctica Conductual del Instituto de Terapia y Análisis de la Conducta ITAC, único equipo en México verificado por Behavioral Tech y The Linehan Institute, fungiendo como terapeuta individual y entrenadora de habilidades en el grupo para familiares y allegados.",
            "Cuenta con el entrenamiento intensivo en Terapia Dialéctico Conductual por parte de The Linehan Institute, Behavioral Tech y DBT Latinoamérica.",
            "Alejandra participó como coordinadora y ponente del Curso: ACTuar para Construir Resiliencia en Personal Sanitario del Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina de la UNAM, el cual contó con más de 1000 asistentes de diversos países.",
            "Ha participado como ponente de varias generaciones del Diplomado en Identificación, Valoración e Intervención del Comportamiento Suicida para Profesionales de la Red Nacional de Servicios de Salud, organizado por la OPS - Organización Panamericana de la Salud, durante 2021 y 2022.",
            "Ha participado como supervisora del programa Contacto Joven – Red Nacional de Atención Juvenil por parte de la Facultad de Medicina de la UNAM y el Instituto Mexicano de la Juventud IMJUVE.",
            "Es profesora de la materia de Supervisión de Práctica Clínica en el Diplomado de Psicología Clínica e Intervenciones Psicoterapéuticas en el Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina de la UNAM, así como profesora del Diplomado de Terapia Dialéctica Conductual de DBT México.",
            "Alejandra es miembro activo y académico del Instituto de Terapia y Análisis de la Conducta ITAC y de la Association for Contextual Behavioral Science ACBS desde 2015.",
            "Ha participado como traductora de diversos libros de Terapias Contextuales.",
        ],
        contacto: {
            phone: "55 55547420",
            emails: [
                "alejandra.castellanos@dbt-mexico.com",
                "alejandra.castellanos@institutodeterapiacontextual.com",
            ],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Michel
    // ─────────────────────────────────────────────────────────
    "michel-reyes-ortega": {
        displayName: "Dr. Michel Reyes Ortega",
        bannerImage: "/assets/photos/banners/Michel.jpg",
        resumen:
            "Coordinador del Área Académica ITAC, psicólogo clínico especializado en el tratamiento de trastornos de la personalidad y emocionales. Autor de libros y artículos científicos. Docente en Psicología Clínica en programas de México, E.U.A., Latinoamérica y Europa.",
        bio: [
            "Michel es Doctor en Investigación Psicológica, Maestro en Psicología Clínica, Licenciado en Psicología y Especialista es Sociología. Como Psicoterapeuta, Michel es experto y supervisor de terapeutas en Terapia Dialéctica Conductual (DBT), y está capacitado en la implementación de sus adaptaciones para Trauma Complejo (DBT PTSD), Estrés Postraumático (DBT-PE), y Adolescentes y Familias (DBT A). También es experto en Activación Conductual (BA), Terapia de Aceptación y Compromiso (ACT), y otros Procedimientos Clínicos Cognitivos y Conductuales. Terapeuta Supervisado en Terapia Dialéctica Conductual Radicalmente Abierta (RO DBT), también cuenta con entrenamientos y supervisión en el Protocolo de Evaluación y Manejo Colaborativo del Riesgo de Suicidio (CAMS), Terapia Basada en Mentalización (MBT) y Terapia Focalizada en las Emociones (EFT).",
            "Michel es Profesor de Posgrados en Psicología Clínica y Terapias Contextuales en Instituciones de México, España, Brasil, Argentina y EUA, impartiendo asignaturas relacionadas a la Evaluación y Tratamiento de Trastornos de la Personalidad, Trastornos Afectivos y Supervisión de Práctica Clínica. Miembro del Consejo Técnico de tres programas de formación en Posgrado en Psicología Clínica, en México, Brasil y Argentina.",
            "Consultor de tres clínicas de atención psicológica universitarias, dos en México y una en EUA. Ha sido entrenador invitado en tres compañías de capacitación en psicoterapia de EUA.",
            "Autor de dos libros sobre Regulación Emocional desde el marco de la Terapia Dialéctica Conductual, un libro sobre Tratamiento del Comportamiento Suicida y otro sobre Psicoterapia Analítica Funcional (FAP), es coautor de un libro sobre Terapia de Aceptación y Compromiso, Revisor Técnico y Traductor de libros en materia de Terapia Conductual, y autor de varios capítulos de libros y artículos científicos.",
            "Michel fue el primer presidente del Capítulo Mexicano de la Association for Contextual Behavioral Science (ACBS) y actualmente es miembro de la Society of Clinical Psychology  División 12- de la American Psychological Association (APA) y la Association for Behavioral & Cognitive Therapies (ABCT).",
        ],
    },

    // ─────────────────────────────────────────────────────────
    // Sarai
    // ─────────────────────────────────────────────────────────
    "sarai-sanchez-morales": {
        displayName: "Mtra. A. Sarai Sánchez Morales",
        bannerImage: "/assets/photos/banners/Sarai.jpg",
        resumen:
            "Coordinadora del Área Clínica y del Área de Infancia y Adolescencia del ITAC, psicóloga clínica especializada en Terapias Conductuales Contextuales (DBT, ACT y Mindfulness). Docente en Programas de ITAC, UNAM, México y Latinoamérica.",
        bio: [
            "Consultora clínica para psicólogos, pedagogos y cuidadores que intervienen con niños y adolescentes en instituciones gubernamentales y privadas.",
            "Terapeuta Conductual Contextual especializada en niños y adolescentes, integrando el trabajo con sus familiares.",
            "Docente del Diplomado en Psicología Clínica e Intervenciones Psicoterapéuticas por parte del Departamento de Psiquiatría y Salud Mental, de la Facultad de Medicina de la Universidad Nacional Autónoma de México.",
            "Académico del Instituto de Terapia y Análisis de la Conducta, así como en diversas instituciones dentro de la República Mexicana, y fuera de México en: Argentina, Perú y Ecuador.",
            "Supervisora Clínica individual y grupal en México y Argentina.",
            "Miembro del capítulo mexicano de la Association for Contextual Behavioral Science (ACBS).",
            "Ponente en el Congreso Internacional 2020 de la Association for Contextual Behavioral Science (ACBS), de la International Obsessive and Compulsive Disorder Conference y ponente en diversos congresos nacionales e internacionales de habla hispana.",
            "Miembro del equipo DBT México - Clínica de Especialidad en Terapia Dialéctica Conductual en CDMX, equipo verificado por Behavioral Tech y el Linehan Institute.",
            "Instructora de Mindfulness en el contexto clínico y escolar.",
        ],
        educacion: [
            "Cuenta con diversos entrenamientos y especialidades como:",
            "Especialidad en Terapia de Aceptación y Compromiso con niños y adolescentes, por parte del Madrid Institute of Contextual Psychology (MICPSY). Con grado de Maestría en Terapia Cognitivo Conductual. Instructora de Mindfulness en el contexto escolar por Mindful Schools Organization y especialista en Mindfulness aplicado en la terapia en adolescentes por el Center for Adolescents Studies, ambas instituciones en California, EUA.",
            "Entrenamientos especializados en Terapia de Aceptación y Compromiso con el Instituto ACT España, Madrid Institute of Contextual Psychology, la Association for Contextual Behavioral Science y Latinoamérica Contextual.",
            "Entrenamientos y supervisión con especialistas a nivel internacional, en Terapia de Aceptación y Compromiso en niños y adolescentes, así como entrenamiento en el modelo DNA-V; todos con especialistas avalados por la Association for Contextual Behavioral Science.",
            "Entrenamientos en Terapia de Aceptación y Compromiso Focalizada (fACT) con los especialistas P. Robinson y K. Strosahl.",
            "Entrenamientos en Análisis Conductual Aplicado (ABA), Entrenamiento en Activación Conductual para la Depresión (BA), Entrenamientos certificados en Psicoterapia Analítica Funcional (FAP) con aval por la Association for Contextual Behavioral Science y Latinoamérica Contextual.",
            "Además de entrenamientos certificados en Terapia Dialéctica Conductual y especialidad en Terapia Dialéctica Conductual para: niños dirigido a clínicos expertos, para adolescentes, para Trastorno por Estrés Postraumático Complejo, para Exposición Prolongada y de Entrenamiento de Habilidades con adultos y adolescentes, avalados todos por Behavioral Tech del Linehan Institute. Así como entrenamientos especializados en DBT por parte de DBT Iberoamérica.",
        ],
        contacto: {
            phone: "55 55547420",
            emails: [
                "sarai.sanchez@dbt-mexico.com",
                "sarai.sanchez@institutodeterapiacontextual.com",
            ],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Claudia
    // ─────────────────────────────────────────────────────────
    "claudia-e-ramirez-avila": {
        displayName: "Dra. Claudia E. Ramírez Avila",
        bannerImage: "/assets/photos/banners/Claudia.jpg",
        resumen:
            "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctica Conductual (DBT), Psicoterapia Analítico Funcional (FAP) y Terapia Centrada en la Compasión (CFT); es académica de la UNAM.",
        extracto:
            "Dra en Educación, Mtra. en Psicoterapia Cognitivo Conductual, con\nEspecialidad en Psicología Clínica. Académica de Tiempo Completo y Responsable\ndel Área de Capacitación Continua en la Facultad de Medicina UNAM.",
        bio: [
            "Doctora en Educación, Maestra en Psicoterapia Cognitivo Conductual, con\nEspecialidad en Psicología Clínica y Licenciada en Psicología con Mención\nHonorífica. Es Académica de Tiempo Completo y Responsable del Área de\nCapacitación Continua en el Departamento de Psiquiatría y Salud Mental de la\nFacultad de Medicina, UNAM, donde coordina y funge como profesora titular del\nDiplomado en Psicología Clínica e Intervenciones Psicoterapéuticas.",
            "Ha sido corresponsable del diseño e implementación de la capacitación en\nintervenciones psicosociales a prestadores de servicio social, voluntarios/as y\nsupervisores/as del programa CONTACTO JOVEN. Red Nacional de Atención Juvenil\npara el Apoyo Psicosocial vía remota a adolescentes y jóvenes en México,\norganizado por el Instituto Mexicano de la Juventud, la Secretaría de Bienestar,\nUNICEF y los Servicios de Atención Psiquiátrica (SAP) del Gobierno de la Ciudad de\nMéxico.",
            "Cuenta con amplia experiencia clínica y docente en el ámbito de la salud mental,\nespecializada en terapias contextuales de tercera generación como Terapia de\nAceptación y Compromiso (ACT), Terapia Dialéctica Conductual (DBT), Psicoterapia\nAnalítico Funcional (FAP) y Terapia Centrada en la Compasión (CFT). Ha impartido\nmúltiples cursos y talleres a nivel posgrado en la UNAM sobre regulación\nemocional, trauma, duelo, activación conductual, sobrecontrol emocional y\nmindfulness.",
            "Es vicepresidenta de la Federación Mexicana Auditora y Certificadora de\nTerapeutas e Investigadores Conductuales Contextuales (FEMACCC), miembro\nprofesional de la Association for Contextual Behavioral Science (ACBS) y miembro\nactivo del Instituto de Terapia y Análisis de la Conducta (ITAC).",
            "Ha participado en actividades académicas nacionales e internacionales, con\npublicaciones, ponencias y talleres en temas relacionados con psicoterapia,\ndocencia e investigación en salud mental.",
        ],
    },

    // ─────────────────────────────────────────────────────────
    // Karla Y. López
    // ─────────────────────────────────────────────────────────
    "karla-y-lopez-villagran": {
        displayName: "Mtra. Karla Y. López Villagrán",
        bannerImage: "/assets/photos/banners/Karla-Lopez.jpg",
        resumen:
            "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapeuta y Entrenadora de habilidades DBT. Docente en Programas del ITAC y en la UNAM.",
        bio: [
            "Karla es Maestra en Psicología Clínica, Especialista en Psicología de la Salud y Licenciada en Psicología. Egresa con mención honorífica y con reconocimiento summa cum laude. Como Psicoterapeuta, Karla se ha entrenado y capacitado en Terapia de Aceptación y Compromiso (ACT), Activación Conductual (BA), Terapia Dialéctica Conductual (DBT), y está en constante formación en terapias cognitivo y conductual.",
            "Su experiencia laboral se ha centrado en el desarrollo psicoemocional de la niñez, adolescencia y juventud, así como en población vulnerable en proceso de enfermedad e inserción social. Ha participado en investigación y desarrollo de programas psicoemocionales y talleres en el sector privado de la salud, en pediatría y gineco-obstetricia, principalmente. Es entrenadora líder en el Grupo de Habilidades Multifamiliar (DBT-A) del Instituto de Terapia y Análisis de la Conducta.",
            "Docente en el Diplomado de Psicología Clínica e Intervenciones Psicoterapéuticas del Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina de la Universidad Nacional Autónoma de México (UNAM). Docente del curso de Especialización en Psiquiatría del Departamento de Psiquiatría y Salud Mental, UNAM.",
        ],
        contacto: {
            phone: "55 55547420",
            emails: ["informes@institutodeterapiacontextual.com"],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Amalia
    // ─────────────────────────────────────────────────────────
    "amalia-castillo-rosales": {
        displayName: "Psic. Amalia Castillo Rosales",
        bannerImage: "/assets/photos/banners/Amalia.jpg",
        resumen:
            "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia Dialéctica Conductual (DBT), Terapia de Aceptación y compromiso (ACT), Psicoterapia Analítica Funcional (FAP) y Mindfulness.",
        bio: [
            "Amalia Castillo Rosales es Licenciada en Psicología egresada de la Universidad Gestalt.",
            "Estudió la maestría en Terapia Cognitivo Conductual en el Instituto de Terapia Cognitivo Conductual.",
            "Tiene el Master en Terapia de Aceptación y Compromiso (ACT) Mindfulness y Terapia Analítico Funcional (FAP) por el Instituto ACT de Madrid, España.",
            "Realizó el Entrenamiento Intensivo en Terapia Dialéctico Comportamental (DBT) en The Linehan Institute. DBT Latinoamérica.",
            "Como parte de su desarrollo académico ha tomado cursos y talleres nacionales e internacionales, entre ellos se encuentran:",
            "·        Focused Acceptance and Commitment Therapy (FACT).",
            "·       Terapia de activación conductual para el tratamiento de la depresión (BA).",
            "·        Terapia Integral de Pareja, una aproximación conductual contextual.",
            "·        Curso Superior de Especialización en Terapias Contextuales.",
            "·  DBT, tratamiento de problemas afectivos crónicos (desesperación silenciosa).",
            "·    Psicoterapia analítico funcional (FAP) conciencia, valor y amor en el contexto terapéutico.",
            "·  Intervenciones de Terapia Dialéctica Conductual (DBT) para la prevención del suicidio.",
            "En el ejercicio de su práctica profesional ha trabajado con pacientes diagnosticados con enfermedades crónico-degenerativas tales como cáncer, SIDA y esclerosis.",
            "Actualmente es miembro del equipo DBT México, el primer grupo de Terapia Dialéctico Conductual verificado por Behavioral Tech y The Linehan Institute.",
            "Asimismo, atiende en terapia individual a adultos con depresión, ansiedad e inestabilidad emocional (DBT).",
        ],
        contacto: {
            phone: "55 55547420",
            emails: ["informes@institutodeterapiacontextual.com"],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Karla Garza
    // ─────────────────────────────────────────────────────────
    "karla-garza-gallegos": {
        displayName: "Psic. Karla Garza Gallegos",
        bannerImage: "/assets/photos/banners/Karla-Garza.jpg",
        resumen:
            "Psicóloga clínica especializada en Terapias Conductuales Contextuales, Terapia Dialéctica Conductual (DBT).",
        bio: [
            "Karla es Licenciada en Psicología, con formación adicional en Psicología Clínica e Intervenciones Psicoterapéuticas obtenida a través del Diplomado en la Universidad Nacional Autónoma de México (UNAM). Actualmente está ampliando su formación en DBT mediante el Diplomado en Fundamentos de Terapia Dialéctica Conductual en el Instituto de Terapia y Análisis de la Conducta (ITAC), avalado por la Subdivisión de Graduados y Educación Continua de la División de Estudios de Posgrado de la Facultad de Medicina de la UNAM. Además, posee un Diplomado en R y RStudio: Programación para Estadística Aplicada, que complementa su capacidad para el análisis de datos en el ámbito clínico.",
            "En ITAC, Karla se dedica a la psicoterapia individual para adultos con un enfoque conductual-contextual, ha participado en el Grupo de Entrenamiento en Habilidades DBT. Además, trabaja en el Hospital Infantil de México \"Federico Gómez\", donde realiza el proceso de reclutamiento, evaluación psicométrica y elaboración de reportes psicométricos para la selección del personal de la institución.",
            "Ha participado en investigaciones sobre el Trastorno por Déficit de Atención e Hiperactividad (TDAH) en el Instituto Nacional de Psiquiatría “Ramón de la Fuente Muñiz”, siendo coautora de artículos científicos presentados en congresos nacionales e internacionales.",
            "Fue profesora adjunta en el Diplomado en Psicología Clínica e Intervenciones Psicoterapéuticas organizado por el Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina - UNAM, contribuyendo con la formación académica y práctica de los estudiantes del programa.",
        ],
    },

    // ─────────────────────────────────────────────────────────
    // Aldo
    // ─────────────────────────────────────────────────────────
    "aldo-rico-leyva": {
        displayName: "Psic. Aldo Rico Leyva",
        bannerImage: "/assets/photos/banners/Aldo.jpg",
        resumen:
            "Psicólogo entrenado en Terapias Contextuales, co-entrenador de grupos en Terapia Dialéctica Conductual y Terapeuta individual en DBT y Activación Conductual.",
        extracto:
            "Extracto: Psicólogo entrenado en Terapias Contextuales, co-entrenador de grupos en Terapia Dialéctica Conductual y Terapeuta individual en DBT y Activación Conductual.",
        bio: [
            "Egresado de la Facultad de Psicología de la Universidad Nacional Autónoma de México (UNAM), donde realizó entrenamiento teórico/práctico en Terapias Narrativas y Posmodernas; y prácticas en escenarios especializados en la Terapia Racional Emotiva Conductual (TREC).",
            "Obtuvo formación para psicólogos en el “Modelo de Atención Plena Compasiva para adicciones” del Centro de Formación y Prevención en Adicciones “Dr. Héctor Ayala Velázquez”, UNAM, y Capacitación en “Atención Plena para terapeutas” mediante la coordinación de la Residencia en Medicina Conductual, UNAM.",
            "Cursó el Diplomado de “Psicología Clínica e Intervenciones Psicoterapéuticas” bajo una orientación conductual contextual del Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina, UNAM; donde realizó prácticas profesionales aplicando la terapia de Activación Conductual en consultantes con depresión resistente a tratamiento (DRT), proyecto de investigación del Instituto Nacional de Psiquiatría Ramón de la Fuente Muñiz.",
            "Cursó el Diplomado “Fundamentos en Terapia Dialéctica Conductual DBT” en el Instituto de Terapia y Análisis de la Conducta ITAC; donde es co-entrenador del grupo de Habilidades DBT tanto para adultos como familiares y allegados así como docente en el Diplomado de Terapia Dialéctica Conductual.",
            "Cuenta con diversos entrenamientos desde la orientación conductual – contextual.",
        ],

    },

    // ─────────────────────────────────────────────────────────
    // Nancy
    // ─────────────────────────────────────────────────────────
    "nancy-leal-zambrano": {
        displayName: "Mtra. Nancy Leal Zambrano",
        bannerImage: "/assets/photos/banners/Nancy.jpg",
        resumen:
            "Psicóloga clínica especializada en Terapias Conductuales Contextuales, terapeuta individual DBT para adolescentes, entrenadora líder en Grupo Multifamiliar de Habilidades DBT.",
        bio: [
            "Nancy es Maestra en Psicología Clínica con Especialidad en Psicología de la salud, Licenciada en Psicología.",
            "Como Psicoterapeuta, Nancy se ha capacitado y especializado en Terapias contextuales cursando diplomados y talleres en relación a estás, como el Diplomado en Psicología Clínica e intervenciones psicoterapéuticas en el Departamento de Psiquiatría y Salud Mental (DPSM) en la facultad de medicina, dónde también atendió consultantes realizando sus prácticas profesionales supervisadas, Diplomado en terapias de tercera generación, Diplomado en Terapia de Aceptación y Compromiso (ACT), Taller de abordaje del riesgo suicida.",
            "Actualmente cuenta con entrenamiento concluido en Terapia Dialéctica Conductual (DBT) y se encuentra colaborando con el equipo de Infancia y Adolescencia del ITAC como terapeuta individual de adolescentes, entrenadora de Entrenamiento Multifamiliar para adolescentes y Co-coordinadora del programa de DBT en Escuelas.",
            "Y docente en el Diplomado de Terapia Dialéctica Conductual del ITAC.",
        ],

    },

    // ─────────────────────────────────────────────────────────
    // Patricia
    // ─────────────────────────────────────────────────────────
    "patricia-mendoza-rodriguez": {
        displayName: "Mtra. Patricia Mendoza Rodríguez",
        bannerImage: "/assets/photos/banners/Patricia.jpg",
        extracto:
            "Extracto: Psicóloga clínica especializada en población infanto juvenil y en pacientes con enfermedades crónicas. Docente de pregrado en Psicología",
        bio: [
            "Paty tiene una maestría en Psicología, Residencia en Medicina Conductual por la UNAM, Licenciatura en Psicología por la UDLA.",
            "Como Psicoterapeuta, su enfoque es conductual contextual en la población infantojuvenil, capacitada en Terapia Dialéctica Conductual (DBT), en la Terapia de Aceptación y Compromiso (ACT), con formación previa en la Terapia Cognitivo Conductual (TCC).",
            "También trabaja en un Hospital Pediátrico Infantil de la Secretaría de Salud, con pacientes con enfermedad renal crónica y que requieren un trasplante.",
            "Paty es Profesora de Pregrado en Psicología en dos Universidades, Supervisora de Prácticas Clínicas y de Servicio Social en el contexto hospitalario, profesora invitada en otros Hospitales y en formación de médicos de pregrado.",
            "También ha sido ponente en cursos y conferencias relacionadas a la población infantojuvenil, y al manejo de pacientes con enfermedad renal.",
            "Se encuentra en Protocolos de Investigación relacionados a la Psicología Hospitalaria.",
        ],

    },

    // ─────────────────────────────────────────────────────────
    // Susana
    // ─────────────────────────────────────────────────────────
    "susana-morelos-flores": {
        displayName: "Mtra. Susana Morelos Flores",
        bannerImage: "/assets/photos/banners/Susana.jpg",
        resumen:
            "Psicóloga clínica entrenada en Terapias Contextuales, co-entrenadora de grupos de familiares y allegados en Terapia Dialéctica Conductual y Terapeuta individual en DBT, en  Terapia de Aceptación y Compromiso y Activación Conductual.",
        bio: [
            "Susana es Maestra en Psicoterapia Cognitivo Conductual y en Neuropsicología Clínica, Licenciada en Psicología y Especialista en Terapias Contextuales, entre ellas: Terapia Dialéctica Conductual (DBT), Terapia de Aceptación y Compromiso (ACT), así como Activación Conductual (BA).",
            "Está capacitada para trabajar con pacientes con sintomatología de Ansiedad, Depresión, Trauma, Trastorno Límite de la Personalidad (TLP) y Estrés Postraumático (TEPT). Terapeuta supervisada en Terapia de Aceptación y Compromiso, así como en Terapia Dialéctica Conductual.",
            "Susana ha sido profesora de los últimos semestres de la Licenciatura en Psicología, correspondientes al área de Neuropsicología Clínica en la Facultad de Psicología, UNAM y profesora de posgrado en Neuropsicología Clínica y Psicoterapia Cognitivo Conductual en Instituciones privadas.",
            "Supervisora de prácticas profesionales durante dos años, de alumnos en los últimos semestres de la Licenciatura en Psicología, en el Centro de Servicios Psicológicos “Dr. Guillermo Dávila” en la Facultad de Psicología, UNAM, en las áreas clínicas de Terapia Cognitivo Conductual y Neuropsicología.",
            "Actualmente es colaboradora y supervisora de prácticas profesionales asociadas a la enseñanza de psicoterapia cognitivo conductual y conductual contextual.",
        ],

    },

    // ─────────────────────────────────────────────────────────
    // Liliana
    // ─────────────────────────────────────────────────────────
    "liliana-fernandez-alejo": {
        displayName: "Psic. Liliana Fernández Alejo",
        bannerImage: "/assets/photos/banners/Liliana.jpg",
        extracto:
            "Extracto: Psicóloga especializada en el área Clínica bajo una orientación Conductual Contextual.",
        bio: [
            "Liliana es Licenciada en Psicología por la Facultad de Psicología de la Universidad Autónoma de México (UNAM).",
            "Tiene formación en evaluación neuropsicológica e intervención psicoterapéutica Cognitivo Conductual por el Centro de Servicios Psicológicos \"Dr. Guillermo Dávila\" de la Facultad de Psicología de la UNAM, así como formación en la intervención psicoterapéutica Conductual Contextual por el Departamento de Psiquiatría y Salud Mental (DPSM) de la Facultad de Medicina de la UNAM; asimismo, cuenta con formación en la Terapia Dialéctica Conductual (DBT) por el Instituto de Terapia y Análisis de la Conducta (ITAC) y el DPSM, también cuenta con entrenamiento en la Terapia Dialéctica Conductual para Adolescentes (DBT-A) por la institución DBT Iberoamérica, y cuenta con capacitación en intervenciones basadas en evaluaciones funcionales.",
            "Es Terapeuta en DBT para población adulta y adolescente, así como co-líder y líder de los talleres de Entrenamiento Multifamiliar de Habilidades DBT-A para los programas dirigidos a población adolescente y a los cuidadores.",
            "Adicionalmente, brinda atención bajo la Terapia de Activación Conductual para la Depresión y la Terapia de Aceptación y Compromiso.",
        ],

        contacto: {
            phone: "55 55547420",
            emails: ["informes@institutodeterapiacontextual.com"],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Fabiola
    // ─────────────────────────────────────────────────────────
    "fabiola-mora-sanchez": {
        displayName: "Psic. Fabiola Mora Sánchez",
        bannerImage: "/assets/photos/banners/Fabiola.jpg",
        resumen: "Psicóloga Clínica bajo una orientación Conductual Contextual.",
        bio: [
            "Licenciada en Psicología, actualmente especializándose en Psicooncología y realizando su Maestría.",
            "Formación de diplomados en Psicología Clínica e Intervenciones Psicoterapéuticas (Terapias Contextuales o de Tercera Generación: Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctica Conductual (DBT), Activación Conductual (BA), Mindfulness y Terapia Analítico Funcional (FAP), Cuidados Paliativos, Psicooncología y Fundamentos de Terapia Dialéctica Conductual (DBT).",
            "Entrenamiento en Terapia Dialéctica Conductual para Adolescentes (DBT-A), taller de Terapia de Aceptación y Compromiso (ACT) en Niños y Adolescentes, curso-taller de Terapias Contextuales aplicadas a Trauma y taller de Aceptación Radical y Atención Plena basada en el Zen.",
            "Psicoterapeuta en el área de Infancia y Adolescencia, terapeuta en Terapia Dialéctica Conductual en adultos y Entrenadora líder en el Grupo de Habilidades Multifamiliar (DBT-A) y de Grupo de adultos (DB) del Instituto de Terapia y Análisis de la Conducta.",
            "Actualmente participa como profesora adjunta en el Diplomado de Psicología Clínica e Intervenciones Psicoterapéuticas del Departamento de Psiquiatría y Salud Mental de la Facultad de Medicina de la Universidad Nacional Autónoma de México (UNAM).",
        ],

        contacto: {
            phone: "55 55547420",
            emails: ["informes@institutodeterapiacontextual.com"],
        },
    },

    // ─────────────────────────────────────────────────────────
    // Uriel
    // ─────────────────────────────────────────────────────────
    "uriel-xchel-cordero-bastida": {
        displayName: "Psic. Uriel Xchel Cordero Bastida",
        bannerImage: "/assets/photos/banners/Uriel.jpg",
        resumen: "Psicólogo entrenado en Intervenciones Psicoterapéuticas Conductuales Contextuales.",
        bio: [
            "Licenciado en Psicología. Formado en el Diplomado en Psicología Clínica e Intervenciones Psicoterapéuticas, incluidas terapias contextuales como: Terapia de Aceptación y compromiso (ACT), Terapia Dialéctica Conductual (DBT), Activación Conductual (BA), Mindfulness y Terapia Analítico Funcional (FAP).",
            "Entrenamiento en Terapia Dialéctica Conductual para Adolescentes, Talleres en Terapia de Aceptación y Compromiso aplicada al Trastorno de Ansiedad Generalizada, Terapia Conductual Contextual para el Duelo Complicado, Potencializar las habilidades del Terapeuta en FAP.",
            "Colaborador en Talleres de Habilidades Socio-emocionales en población infantil en escuelas, así como Manejo del estrés y Regulación emocional en universitarios.",
            "Actualmente entrenador en el Grupo de Habilidades Multifamiliar (DBT-A) del Instituto de Terapia y Análisis de la Conducta.",
        ],

    },
};
