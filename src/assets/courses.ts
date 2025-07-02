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
  address: string; 
  text: string;
}

/**
 * Array of courses for "Formación Académica" pages.
 */
export const courses: Course[] = [
  {
    id: 1,
    slug: "diplomado-fundamentos-dbt",
    image: "/assets/images/FormacionAcademica-card-1.jpg",
    title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual (7ma Generación)",
    subtitle:
      "Formación teórico-práctica para desarrollar habilidades clínicas basadas en ACT, con énfasis en valores, mindfulness y flexibilidad psicológica.",
    dates: "04 abril, 2025 - 24 octubre, 2025",
    schedule: "Jueves 19hrs - 20hrs, Viernes 17hrs - 21hrs",
    mode: "Presencial y Online",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>Objetivo:</strong> Desarrollar las competencias de un terapeuta DBT para poder implementarlas al tratamiento de problemas psicológicos complejos de adultos y adolescentes. El diplomado enfatiza la integración de las competencias de DBT con otros procedimientos clínicos (no está dirigido exclusivamente a terapeutas que buscan formar parte de un equipo DBT).</p>
<p><strong>Inicio:</strong> 04 de abril, 2025</p>
<p><strong>Fin:</strong> 24 de octubre, 2025</p>
<p><strong>Horarios:</strong> Jueves 19 - 20 h y Viernes 17 - 21 h</p>
<p><strong>Duración:</strong> 120 horas (50 horas teóricas y 70 horas prácticas)</p>
<p>Aval de la Subdivisión de Graduados y Educación Continua de la División de Estudios de Posgrado de la Facultad de Medicina de la Universidad Nacional Autónoma de México.</p>
<ul>
  <li>Cupo limitado a 20 participantes</li>
  <li>Con valor curricular</li>
  <li>No se requiere formar un equipo DBT para inscribirte</li>
</ul>
<p><strong>Requisitos:</strong></p>
<ul>
  <li>Psicólogos titulados</li>
  <li>Residentes de psiquiatría</li>
</ul>
<p><strong>Se solicitará:</strong></p>
<ul>
  <li>Formato de inscripción (solicitar a este  <a href="mailto:diplomadositac@gmail.com">correo</a>)</li>
  <li>Copias de título y cédula profesional, comprobante de último grado de estudios, acta de nacimiento y credencial de elector</li>
</ul>
<p><strong>Requisitos de titulación:</strong></p>
<ul>
  <li>Asistencia al 80% de las horas de clase</li>
  <li>Promedio final de 8.00</li>
  <li>Entrega de trabajo final</li>
</ul>
<p><strong>Requisitos de permanencia:</strong></p>
<ul>
  <li>Aprobación de cada módulo con una calificación mínima de 8.00</li>
  <li>Pago de colegiatura de cada módulo dentro de los 5 primeros días de cada mes</li>
</ul>
<p>
  <strong>Informes e inscripción:</strong><br/>
  <a href="mailto:diplomadositac@gmail.com">diplomadositac@gmail.com</a>
</p>
    `,
  },
  {
    id: 2,
    slug: "curso-dbt-teams",
    image: "/assets/images/FormacionAcademica-card-2.jpg",
    title: "Curso-Taller: DBT TEAMS",
    subtitle: "Logrando los más altos estándares de calidad en DBT.",
    dates: "31 mayo y 1 junio, 2025",
    schedule: "Intensivo de fin de semana",
    mode: "Presencial en CDMX y Online",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>PONENTE:</strong><br/>
Ronda Reitz, PhD. La Dra. Reitz es capacitadora y consultora internacional de DBT para Behavioral Tech, institución fundada por la Dra. Marsha Linehan y es miembro de la junta y consultora del Instituto Linehan. Ha sido líder en la enseñanza e implementación de la Terapia Dialéctica Conductual (DBT) durante 25 años. Actualmente es Coordinadora de DBT en el Departamento de Salud Mental de Missouri, EUA., responsable de la capacitación, consultación, implementación, evaluación y supervisión de los servicios de DBT en todo el estado. Es colaboradora en investigación y desarrollo para el uso de habilidades de DBT para afrontar el cáncer. Doctorada en Psicología por la Universidad de Kansas. Ha sido estudiante de Rinzai Zen durante más de 20 años y estudió con Roshi Marsha Linehan y Roshi Alice Cabotaje.</p>
<p><strong>Fechas:</strong><br/>31 de mayo y 1º de junio de 2025</p>
<p><strong>Horario:</strong><br/>9am a 6pm</p>
<p><strong>Modalidad:</strong><br/>Presencial en CDMX y Online</p>
<p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>
<p><strong>Objetivos:</strong></p>
<ul>
  <li>Proveer a los equipos herramientas y habilidades para lograr la más alta calidad de tratamiento DBT para los consultantes, de acuerdo a los estándares de certificación de la DBT Linehan Board of Certification.</li>
  <li>Metodología como consultoría extendida.</li>
</ul>
<p><strong>Inscripciones:</strong><br/>
informes@institutodeterapiacontextual.com<br/>
+52 55 5554 7420
</p>
<p>
  <strong>Informes e inscripción:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
    `,
  },
  {
    id: 3,
    slug: "dbt-c-poblacion-infantil",
    image: "/assets/images/FormacionAcademica-card-3.jpg",
    title: "Entrenamiento Intensivo en DBT‑C",
    subtitle: "Terapia Dialéctica Conductual para población infantil.",
    dates: "5-7 diciembre, 2025 y 24-26 julio, 2026",
    schedule: "Sesiones prácticas y supervisión clínica",
    mode: "Presencial en CDMX, México",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>PONENTE:</strong><br/>
Francheska Perepletchikova, Ph.D. y María Ignacia Montt, Psic. Francheska Perepletchikova, clínica certificada por la Junta del DBT-Linehan, especialista en servicios psicológicos para niños y adolescentes con desregulación emocional y conductas graves. Fue estudiante de posgrado del Dr. Alan Kazdin en la Universidad de Yale y recibió capacitaciones avanzadas en DBT con el Linehan Institute Behavioral Tech. En 2009 fue reconocida como terapeuta con adherencia al tratamiento y evaluadora de adherencia a DBT por la Universidad de Washington. Es consultora de equipos de DBT en EUA, Rusia, Noruega y América Latina y miembro del Grupo Internacional de Planificación Estratégica de DBT.</p>
<p><strong>Fechas:</strong><br/>1ra parte: 5, 6 y 7 de diciembre de 2025<br/>2da parte: 24, 25 y 26 de julio de 2026</p>
<p><strong>Duración:</strong><br/>48 horas en total</p>
<p><strong>Horario:</strong><br/>9am a 6pm</p>
<p><strong>Modalidad:</strong><br/>Presencial en CDMX, México</p>
<p><strong>Idioma:</strong><br/>Inglés con traducción simultánea al español</p>
<p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>
<p><strong>Objetivos:</strong></p>
<ul>
  <li>Describir quién se beneficia de DBT-C y cómo se desarrolló a partir de DBT estándar.</li>
  <li>Explicar el modelo biosocial para desregulación emocional y la jerarquía de tratamiento de DBT-C.</li>
  <li>Organizar DBT-C para cumplir funciones requeridas y enseñar a los padres sobre dilemas dialécticos y modelo de cambio de conducta.</li>
  <li>Enseñar técnicas de modificación de conducta y planes de manejo de conducta.</li>
  <li>Crear entorno de validación y superar dificultades en la implementación.</li>
  <li>Participar en resolución de problemas y reestructuración cognitiva.</li>
  <li>Realizar análisis conductuales con los niños.</li>
  <li>Comprender emociones y describir modelo de cambio de emociones.</li>
  <li>Enseñar habilidades de DBT-C y adaptarlas al entorno.</li>
</ul>
<p>
  <strong>Inscripciones:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
    `,
  },
  {
    id: 4,
    slug: "retiro-mindfulness-zen",
    image: "/assets/images/FormacionAcademica-card-4.jpg",
    title: "Retiro de Mindfulness Zen 2025",
    subtitle: "Encuentro intensivo de práctica contemplativa y meditación.",
    dates: "22-25 mayo, 2025",
    schedule: "Retiro residencial de 4 días",
    mode: "Presencial",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0198859575526!2d-98.75199119999999!3d19.1506068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3ca1390ca895%3A0xc58b7e9f9e9f87c7!2sC.%2010%20de%20Mayo%2012%2C%2056940%20Santiago%20Cuauhtenco%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1751430678828!5m2!1sen!2smx",
    text: `
<p><strong>PONENTE:</strong><br/>Roshi Randy Wolbert</p>
<p>Nuestro retiro ofrece la oportunidad de realizar un período prolongado de práctica donde nos separamos de nuestros asuntos cotidianos para sumergirnos profundamente en la práctica, libres para trascender de la charla de fondo de nuestras mentes ocupadas. Estos retiros siguen el estilo y el formato iniciado por Willigis Jaeger, O.S.B. (Ko-un Rōshi).</p>
<p>Se realizan prácticas formales e informales. Practicamos juntos pero no interactuamos.</p>
<p><strong>Lugar:</strong><br/>
Casa de Retiros Agua Viva<br/>
Habitación individual por participante<br/>
10 de Mayo #12, Santiago Cuauhtenco, Amecameca, Edo. de México.<br/>
<a href="https://goo.gl/maps/m65jWgusHiZd5W5F7" target="_blank" rel="noopener">Ver en Google Maps</a>
</p>
<p><strong>Fecha:</strong><br/>22 al 25 de mayo de 2025</p>
<p><strong>Horario:</strong><br/>22 de mayo a las 3pm hasta 25 de mayo a las 12pm</p>
<p>
  <strong>Inscripciones:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
    `,
  },
  {
    id: 5,
    slug: "curso-dbt-teams-2",
    image: "/assets/images/FormacionAcademica-card-5.jpg",
    title: "Curso-Taller: DBT-TEAMS 2",
    subtitle: "Capacitación avanzada en DBT con Kelly Koerner, PhD.",
    dates: "6-7 junio, 2026",
    schedule: "9am a 6pm",
    mode: "Presencial en Guadalajara, México",
    address:
      "",
    text: `
<p><strong>PONENTE:</strong><br/>Kelly Koerner, PhD</p>
<p>Kelly es una terapeuta experta, supervisora clínica y entrenadora internacional de DBT, reconocida por su estilo cálido, interesante y práctico. Fue profesora en la Universidad de Washington y ha publicado numerosos artículos y libros, incluyendo capítulos en “Process-Based CBT: The Science and Core Clinical Competencies of Cognitive Behavioral Therapy”. Autora de "Doing Dialectical Behavior Therapy: A Practical Guide" y coautora de "Dialectical Behavior Therapy in Clinical Practice: Second Edition".</p>
<p><strong>Fecha:</strong><br/>6 y 7 de junio de 2026</p>
<p><strong>Duración:</strong><br/>16 horas en total</p>
<p><strong>Horario:</strong><br/>9am a 6pm</p>
<p><strong>Modalidad:</strong><br/>Presencial en Guadalajara, México</p>
<p><strong>Idioma:</strong><br/>Inglés con traducción simultánea al español</p>
<p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>
<p><strong>Próximamente más información.</strong></p>
    `,
  },
]
