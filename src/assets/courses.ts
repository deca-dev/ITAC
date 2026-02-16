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
    image: "/assets/images/FormacionAcademica-card-1.webp",
    title: "Diplomado en Fundamentos de Terapia Dialéctica Conductual",
    subtitle: "Competencias DBT para el tratamiento de adultos y adolescentes.",
    dates: "Anual",
    schedule: "Jueves 19hrs - 20hrs, Viernes 17hrs - 21hrs",
    mode: "Presencial y Online",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>Objetivo:</strong> Desarrollar las competencias de un terapeuta DBT para poder implementarlas al tratamiento de problemas psicológicos complejos de adultos y adolescentes. El diplomado enfatiza la integración de las competencias de DBT con otros procedimientos clínicos (no está dirigido exclusivamente a terapeutas que buscan formar parte de un equipo DBT).</p>
<p><strong>Inicio:</strong> Continuo</p>
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
<p>
  <strong>Whatsapp:</strong><br/>
  <a href="https://wa.link/mrznze">5565383566</a>
</p>
    `,
  },
  {
    id: 2,
    slug: "curso-entrenar-habilidades-dbt",
    image: "/assets/images/FormacionAcademica-card-2.webp",
    title: "Curso-Taller: para entrenar habilidades DBT",
    subtitle: "Cómo enseñar habilidades DBT en consulta individual y grupal.",
    dates: "22 - 24 mayo 2026",
    schedule: "Intensivo de fin de semana",
    mode: "Híbrida",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>PONENTE:</strong><br/>
Mtra. A. Sarai Sánchez Morales</p>
<p><strong>Objetivos:</strong></p>
<p>Este curso-taller se centra en las habilidades básicas de la DBT. Aprenderás a utilizar y enseñar la atención plena, la regulación emocional, la efectividad interpersonal y la tolerancia al malestar con tus consultantes que experimentan abrumo emocional, comportamiento impulsivo, conflictos interpersonales y sentirse como atrapada/o en el sufrimiento. Aprenderás a utilizarlos en ambientes grupales e individuales. Aprenderás cómo funciona cada habilidad, cuándo utilizarla y cómo enseñarla de una manera atractiva, enfocada, estructurada y clínicamente útil para tus consultantes. Identificarás cómo adaptarlas a tu estilo clínico y a las necesidades de tus consultantes, manteniéndose dentro del marco de la DBT. Participar de juegos de roles y demostraciones clínicas.
</p><br/>
<p><strong>Objetivos específicos:</strong></p>
<ul>
  <li>Comprensión y sobre todo práctica de cómo enseñar las habilidades de la DBT tanto en entornos individuales como grupales.</li>
  <li>Estrategias para integrar las habilidades de DBT en su trabajo terapéutico actual.</li>
  <li>Construir maestría para introducir las habilidades de manera flexible y completa, según las necesidades de los consultantes.</li>
  <li>Herramientas para ayudar a los consultantes a desarrollar una mayor estabilidad, conexión y dirección hacia su vida valiosa.</li>
</ul>
<p><strong>Temario:</strong></p>
<ul>
  <li>Estructura del grupo y del Entrenamiento de Habilidades DBT</li>
  <li>Mindfulness o Atención Plena</li>
  <li>Tolerancia al Malestar</li>
  <li>Regulación Emocional</li>
  <li>Efectividad Interpersonal</li>
  <li>Habilidades terapéuticas del Entrenador/Entrenadora de Habilidades DBT</li>
  <li>Manteniendo la adherencia al Entrenamiento de Habilidades DBT</li>
  <li>Manejando los desafíos que implica entrenar en Habilidades DBT</li>
</ul>
<p><strong>Fechas:</strong><br/>Mayo 2026<br/></p>
<ul>
    <li>Viernes 22</li>
    <li>Sábado 23</li>
    <li>Domingo 24</li>
</ul>
<p><strong>Horario:</strong><br/>9am a 5pm</p>
<p><strong>Modalidad:</strong><br/>Híbrida<br/></p>
<ul>
    <li><strong>Presencial:</strong> Cjón. Belisario Domínguez #141. Coyoacán, CdMx</li>
    <li><strong>En línea:</strong> Plataforma Zoom</li>
</ul>
<p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>
<p><strong>Inscripciones:</strong><br/>
informes@institutodeterapiacontextual.com<br/>
+52 55 5554 7420
</p>
  `,
  },
  {
    id: 3,
    slug: "dbt-familias",
    image: "/assets/images/FormacionAcademica-card-3.webp",
    title: "Curso-Taller: DBT Familias",
    subtitle: "Intervenciones DBT para familiares y allegados.",
    dates: "12 -14 junio 2026",
    schedule: "Sesiones prácticas y supervisión clínica",
    mode: "Presencial en CDMX, México",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
<p><strong>PONENTE:</strong><br/>
Mtra. Alejandra M. Castellanos Espinosa
</p>
<p><strong>Objetivos:</strong></p>
<p>Al finalizar este curso, comprenderás y serás capaz de aplicar técnicas de DBT para el trabajo con familiares y allegados de personas con dificultades en la regulación emocional, así como orientar a las familias para poder lograr una vida que merezca la pena ser vivida.</p>
<br/>
<p><strong>Objetivos específicos:</strong></p>
<ul>
  <li>Comprender la relevancia del trabajo con familiares y allegados desde DBT.</li>
  <li>Comprender y aplicar el modelo transaccional en las interacciones familiares.</li>
  <li>Familiarizarse con la expresión precisa desde el tratamiento para familiares y allegados, así como el entrenamiento en validación.</li>
  <li>Identificar los principales elementos de la atención plena de las relaciones.</li>
  <li>Comprender el mecanismo de la reactividad emocional para ser capaces de disminuirla y posteriormente reactivar y recondicionar las relaciones.</li>
  <li>Hacer uso de las estrategias de cambio identificando los procesos familiares coercitivos que se han establecido a lo largo de los años.</li>
  <li>Planear de manera efectiva para el establecimiento de límites.</li>
  <li>Hacer uso de estrategias de efectividad interpersonal, así como de aceptación radical y autovalidación.</li>
</ul>
<p><strong>Temario:</strong></p>
<ul>
  <li>Relevancia del trabajo con familiares y allegados</li>
  <li>Modelo transaccional</li>
  <li>Expresión precisa</li>
  <li>Entrenamiento en validación</li>
  <li>Atención plena de las relaciones</li>
  <li>Disminuyendo la reactividad emocional</li>
  <li>Reactivando y recondicionando las relaciones</li>
  <li>Estrategias de cambio</li>
  <li>Procesos familiares coercitivos</li>
  <li>Límites</li>
  <li>Efectividad interpersonal</li>
  <li>Aceptación radical</li>
  <li>Autovalidación</li>
</ul>
<p><strong>Fechas:</strong><br/>Junio 2026<br/></p>
<ul>
    <li>Viernes 12</li>
    <li>Sábado 13</li>
    <li>Domingo 14</li>
</ul>
<p><strong>Duración:</strong><br/>21 horas en total</p>
<p><strong>Horario:</strong><br/>9am a 5pm</p>
<p><strong>Modalidad:</strong><br/>Híbrida<br/></p>
<ul>
    <li><strong>Presencial:</strong> Cjón. Belisario Domínguez #141. Coyoacán, CdMx</li>
    <li><strong>En línea:</strong> Plataforma Zoom</li>
</ul>
<p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>
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
    image: "/assets/images/FormacionAcademica-card-4.webp",
    title: "Retiro de Mindfulness Zen",
    subtitle: "Práctica contemplativa intensiva de atención plena en silencio.",
    dates: "Anual",
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
<p><strong>Fecha:</strong><br/>Anual</p>
<p>
  <strong>Inscripciones:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
    `,
  },
  {
    id: 5,
    slug: "curso-nivel-inicial-ro-dbt",
    image: "/assets/images/FormacionAcademica-card-5.webp",
    title: "Nivel inicial RO-DBT ",
    subtitle: "RO-DBT: sobrecontrol y conexión social como mecanismo de cambio.",
    dates: "22 y 23 agosto 2026",
    schedule: "9am a 5pm",
    mode: "Híbrido",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
  <p><strong>PONENTE:</strong><br/>Mtra. Karla Y. López Villagrán</p>
  <p><strong>Objetivos:</strong></p>
<p>Al finalizar este curso, comprenderás los fundamentos teóricos y clínicos de la Terapia Dialéctica Conductual Radicalmente Abierta (RO-DBT), el modelo biosocial del sobre control, la población objetivo, los principios del tratamiento, la postura terapéutica radicalmente abierta y los mecanismos de cambio basados en la conexión social.</p>
<br/>
<p><strong>Objetivos específicos:</strong></p>
<ul> 
  <li>Explicar qué es RO-DBT, su origen, sus fundamentos y sus diferencias con la DBT estándar.</li> <li>Comprender el modelo biopsicosocial del sobre control, incluyendo vulnerabilidades temperamentales y contextos de aprendizaje.</li> <li>Diferenciar clínicamente el sobre control y el bajo control, reconociendo las implicaciones de esta distinción para la práctica terapéutica.</li> <li>Identificar la población clínica para la cual RO-DBT está indicada, así como sus principales aplicaciones transdiagnósticas.</li> <li>Reconocer los objetivos terapéuticos centrales de RO-DBT y entender la conexión social como mecanismo principal de cambio.</li> <li>Comprender la estructura general del tratamiento RO-DBT y el rol activo del terapeuta dentro del modelo.</li> <li>Reconocer la postura terapéutica radicalmente abierta, incluyendo el uso clínico de la autenticidad, la auto revelación estratégica y la cercanía relacional.</li> <li>Identificar las principales áreas de habilidades de RO-DBT, a nivel introductorio.</li> <li>Reconocer los alcances, límites y requisitos formativos posteriores a este nivel introductorio.</li> 
</ul>
<p><strong>Temario:</strong></p>
<ul> 
  <li>Fundamentos y marco general de RO-DBT</li> 
  <li>Modelo biosocial del sobrecontrol</li> 
  <li>Diferencias entre sobrecontrol y bajo control</li> <li>Población objetivo y aplicaciones técnicas</li> 
  <li>Objetivos terapéuticos y mecanismos de cambio</li> 
  <li>Estructura general del tratamiento RO-DBT</li> <
  li>Principios y postura terapéutica en RO DBT</li> 
  <li>Introducción a las habilidades de RO-DBT</li> 
</ul>
  <p><strong>Fechas:</strong><br/>Agosto 2026<br/></p>
<ul>
    <li>Sábado 22</li>
    <li>Domingo 23</li>
</ul>
<p><strong>Duración:</strong><br/>14 horas en total</p>
<p><strong>Horario:</strong><br/>9am a 5pm</p>
<p><strong>Modalidad:</strong><br/>Híbrida<br/></p>
<ul>
    <li><strong>Presencial:</strong> Cjón. Belisario Domínguez #141. Coyoacán, CdMx</li>
    <li><strong>En línea:</strong> Plataforma Zoom</li>
</ul>
  <p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>

<p>
  <strong>Inscripciones:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
      `,
  },
  {
    id: 6,
    slug: "curso-activacion-conductual",
    image: "/assets/images/FormacionAcademica-card-6.webp",
    title: "Curso-Taller: Activación Conductual",
    subtitle: "Activación Conductual: análisis funcional y programación de actividades.",
    dates: "23 - 25 octubre 2026",
    schedule: "9am a 5pm",
    mode: "Híbrido",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.164321!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1234567890%3A0xabcdef1234567890!2sC.%20Belisario%20Dom%C3%ADnguez%2C%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1698781234567",
    text: `
  <p><strong>PONENTE:</strong><br/>Dr. Michel Reyes O.</p>
  <p><strong>Objetivos:</strong></p>
<p>Ensayar las competencias básicas de la activación conductual y conocer sus adaptaciones para diferentes problemáticas clínicas.</p>
<br/>
<p><strong>Objetivos específicos:</strong></p>
<ul> 
  <li>Análisis funcional y formulación de caso.</li> 
  <li>Establecimiento del contrato terapéutico.</li> 
  <li>Diseño de plan de programación de actividades personalizado.</li> 
  <li>Resolución de problemas emergentes en el tratamiento.</li> 
  <li>Desarrollo de plan de prevención de recaídas.</li> 
</ul>

<p><strong>Temario:</strong></p>
<ul> 
  <li>Teoría de la Activación Conductual.</li> 
  <li>Las 4 competencias básicas de la activación conductual.</li> 
  <li>La activación conductual simple y compleja.</li> 
  <li>Adaptaciones para depresión, ansiedad, trauma y trastorno bipolar.</li> 
</ul>
  <p><strong>Fechas:</strong><br/>Octubre 2026<br/></p>
<ul>
    <li>Viernes 23</li>
    <li>Sábado 24</li>
    <li>Domingo 25</li>
</ul>
<p><strong>Duración:</strong><br/>21 horas en total</p>
<p><strong>Horario:</strong><br/>9am a 5pm</p>
<p><strong>Modalidad:</strong><br/>Híbrida<br/></p>
<ul>
    <li><strong>Presencial:</strong> Cjón. Belisario Domínguez #141. Coyoacán, CdMx</li>
    <li><strong>En línea:</strong> Plataforma Zoom</li>
</ul>
  <p><strong>Dirigido a:</strong><br/>Psicólogos y Psiquiatras que cuentan con formación de los fundamentos de DBT.</p>

<p>
  <strong>Inscripciones:</strong><br/>
  <a href="mailto:informes@institutodeterapiacontextual.com">informes@institutodeterapiacontextual.com</a> <br>
  +52 55 5554 7420
</p>
      `,
  },
]
