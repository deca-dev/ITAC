import React from "react";
import "./css/termsconditions.css";

/**
 * Aviso de Privacidad con TOC + smooth scroll + scroll-spy basado en top
 * - No cambia el copy.
 * - TOC resalta cuando la sección toca el tope visible (offset 96px ~ scroll-mt-24).
 */
const PrivacyNotice: React.FC = () => {
  // ───────────────────────── Config ─────────────────────────
  const sectionIds = [
    "top-aviso",
    "integral",
    "finalidades",
    "datos-personales",
    "datos-familiares",
    "laborales",
    "academicos",
    "sociales",
    "sensibles",
    "emergencia",
    "cookies",
    "enlaces",
    "modificaciones",
    "fn1",
    "fn2",
  ];

  const [activeId, setActiveId] = React.useState<string>("top-aviso");
  const [progress, setProgress] = React.useState<number>(0);

  // Smooth scroll robusto (además de la clase Tailwind)
  React.useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  // Helper: determina la sección activa por la posición del TOP (con offset del header)
  const OFFSET_PX = 96; // scroll-mt-24 ≈ 6rem ≈ 96px
  const computeActiveId = React.useCallback(() => {
    let current = sectionIds[0];
    let bestTop = -Infinity;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top - OFFSET_PX;
      if (top <= 0 && top > bestTop) {
        bestTop = top;
        current = id;
      }
    }
    return current;
  }, [sectionIds]);

  // Scroll progress bar + sección activa por top line
  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setProgress(p);

        // Calcula sección activa por línea superior (offset)
        setActiveId(computeActiveId());
        ticking = false;
      });
    };
    onScroll(); // inicial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [computeActiveId]);

  // Forzar alineado al TOP al hacer click en el TOC
  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    history.pushState(null, "", `#${id}`);
  };

  const linkCls = (id: string) =>
    `block px-2 py-1 rounded transition ${
      activeId === id
        ? "text-sky-700 font-semibold bg-sky-50"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <main className="bg-gray-50 min-h-screen scroll-smooth">
      {/* ─────────────── Barra de progreso fija ─────────────── */}
      <div className="fixed left-0 top-0 h-screen w-1 bg-slate-200/70 z-40 hidden sm:block" aria-hidden />
      <div
        className="fixed left-0 top-0 w-1 bg-sky-500 z-50 rounded-r hidden sm:block"
        style={{ height: `${progress * 100}%` }}
        aria-hidden
      />

      {/* ─────────────── Hero ─────────────── */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[url('/assets/bg/bg-blue-pattern-aviso-privacidad.png')] bg-center bg-cover" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-semibold drop-shadow">
            Aviso de Privacidad
          </h1>
        </div>
      </header>

      {/* ─────────────── Contenido + TOC ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav
              aria-label="Tabla de contenidos"
              className="sticky top-24 rounded-xl border bg-white p-4 shadow-sm text-sm"
            >
              <h2 className="text-slate-700 font-semibold mb-3">Tabla de contenidos</h2>
              <ol className="space-y-1">
                <li>
                  <a href="#top-aviso" onClick={(e)=>handleTocClick(e,"top-aviso")} className={linkCls("top-aviso")}>
                    Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#integral" onClick={(e)=>handleTocClick(e,"integral")} className={linkCls("integral")}>
                    Aviso de Privacidad Integral
                  </a>
                  <ol className="ml-4 mt-1 space-y-1 list-none">
                    <li><a href="#finalidades" onClick={(e)=>handleTocClick(e,"finalidades")} className={linkCls("finalidades")}>Finalidades</a></li>
                    <li><a href="#datos-personales" onClick={(e)=>handleTocClick(e,"datos-personales")} className={linkCls("datos-personales")}>Datos personales</a></li>
                    <li><a href="#datos-familiares" onClick={(e)=>handleTocClick(e,"datos-familiares")} className={linkCls("datos-familiares")}>Datos familiares</a></li>
                    <li><a href="#laborales" onClick={(e)=>handleTocClick(e,"laborales")} className={linkCls("laborales")}>Laborales</a></li>
                    <li><a href="#academicos" onClick={(e)=>handleTocClick(e,"academicos")} className={linkCls("academicos")}>Académicos</a></li>
                    <li><a href="#sociales" onClick={(e)=>handleTocClick(e,"sociales")} className={linkCls("sociales")}>Sociales</a></li>
                    <li><a href="#sensibles" onClick={(e)=>handleTocClick(e,"sensibles")} className={linkCls("sensibles")}>Datos personales sensibles</a></li>
                    <li><a href="#emergencia" onClick={(e)=>handleTocClick(e,"emergencia")} className={linkCls("emergencia")}>Datos de contacto de emergencia</a></li>
                    <li><a href="#cookies" onClick={(e)=>handleTocClick(e,"cookies")} className={linkCls("cookies")}>Cookies y web beacons</a></li>
                    <li><a href="#enlaces" onClick={(e)=>handleTocClick(e,"enlaces")} className={linkCls("enlaces")}>Vínculos de ayuda</a></li>
                    <li><a href="#modificaciones" onClick={(e)=>handleTocClick(e,"modificaciones")} className={linkCls("modificaciones")}>Modificaciones</a></li>
                  </ol>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Artículo (copy intacto) */}
          <article className="prose prose-slate sm:prose-lg max-w-none leading-relaxed lg:col-span-9">
            {/* ----- Sección corta ----- */}
            <h2 id="top-aviso" className="mb-2 scroll-mt-24">Aviso de Privacidad</h2>

            <p><strong>Instituto de Terapia Contextual, CDMX.</strong></p>
            <p className="mb-3">
              El Instituto de Terapia Contextual, CDMX, es el sujeto obligado y responsable del tratamiento de los datos
              personales que se recaben por esta entidad para el registro de usted en calidad de alumno, docente,
              conferencista o invitado externo, visitante o consultante (nacional o extranjero). Dichos datos serán
              utilizados con fines académicos, clínicos, estadísticos y para control administrativo. 
            </p>
            <p className="mb-3">
              En todo momento, el Instituto de Terapia Contextual, CDMX debe contar con la autorización de los titulares de la información, con la finalidad de utilizar estos datos única y exclusivamente para los fines institucionales justificados, y de conformidad con la legislación vigente, sin proporcionarla a terceros. Los datos personales no podrán ser transferidos o tratados por personas diversas ajenas a él Instituto. 
            </p>
            <p className="mb-3">
              La información deberá ser proporcionada de forma voluntaria por el titular de los datos personales, previa lectura y conocimiento del Aviso de Privacidad mediante escrito libre, presentado en las instalaciones del Instituto, y por cualquier medio electrónico. El titular podrá, manifestar su negativa para el tratamiento de sus datos personales conforme a las finalidades descritas en este Aviso y en relación a la transferencia de datos que requieran su consentimiento. 
            </p>
            <p className="mb-3">
              Para cumplir las finalidades necesarias anteriormente descritas, u otras que sean exigidas legalmente por las autoridades competentes, podrá transferir sus datos personales. Podrá ejercer sus derechos ARCO a través de la Plataforma Nacional de Transparencia (
              <a href="http://www.plataformadetransparencia.org.mx/" target="_blank" rel="noopener" className="blue-color">
                http://www.plataformadetransparencia.org.mx/
              </a>
              ). 
            </p>
            <p className="mb-3">
              El Aviso de Privacidad Integral puede ser consultado en la página electrónica del Instituto: <a href="https://terapiascontextuales.mx" target="_blank" rel="noopener" className="blue-color">https://terapiascontextuales.mx</a>
            </p>

            <hr />

            {/* ----- Aviso Integral ----- */}
            <h2 id="integral" className="mb-2 scroll-mt-24">Aviso de Privacidad Integral. </h2>
            <p className="mb-3"><strong>Instituto de Terapia Contextual, CDMX.</strong></p>

            <p className="mb-3">
              El Instituto de Terapia Contextual, CDMX, con domicilio en Calle Canadá 177, Colonia Barrio San Lucas, Alcaldía de Coyoacán, Ciudad de México, C.P. 04030, es el sujeto obligado y responsable del tratamiento de los datos personales que se recaben por esta entidad, de conformidad con lo establecido en los artículos 6°, fracción II y VII, y 16, segundo párrafo, de la Constitución Política de los Estados Unidos Mexicanos; 3°, fracción XXXIII, 4°, 16, 17 y 18 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
            </p>

            <p className="mb-3">
              El Instituto de Terapia Contextual, CDMX, recaba sus datos personales, y es responsable del tratamiento que se les dé. En todo momento, el Instituto de Terapia Contextual, CDMX, debe contar con la autorización de los titulares de la información, con la finalidad de utilizar los datos única y exclusivamente para los fines institucionales justificados, y de conformidad con la legislación vigente, sin proporcionarla a terceros. Los datos personales no podrán ser transferidos o tratados por personas diversas ajenas al Instituto. 
            </p>

            {/* ANCLA: h-px para observer/scroll top confiable */}
            <span id="finalidades" className="block h-px scroll-mt-24" aria-hidden="true"></span>
            <p>
              Si eres alumno, docente, conferencista o invitado externo, visitante o consultante (nacional o extranjero), los datos personales que recabamos de usted serán utilizados para las siguientes finalidades: 
            </p>

            <ol className="list-disc pl-6 mb-3">
              <li>La difusión de conocimientos científicos, culturales, tecnológicos y profesionales.</li>
              <li>Informar de los asuntos escolares y administrativos.</li>
              <li>Inscripción a eventos o cualquier servicio o actividad que contribuya a la formación integral. </li>
              <li>Actualizar la base de datos de alumnos, estudiantes, docentes, consultantes, así como sus respectivos contactos en caso de emergencia.</li>
              <li>Prestar los servicios y realizar actividades que resulten necesarias para el desarrollo o formación académica, profesional y extracurricular. </li>
              <li>Realizar reportes semanales, mensuales y anuales académicos, escolares o estadísticos. </li>
              <li>Evaluar el desempeño académico y extracurricular. </li>
              <li>Otorgar becas o apoyos económicos en caso de cumplir los requisitos establecidos. </li>
              <li>Contactar a familiares o terceros, en casos de una emergencia. </li>
            </ol>

            <p className="mb-3">
              Recabamos sus datos personales al usar los mecanismos remotos de comunicación electrónica consistentes en la página web y correo electrónico institucional, así como la plataforma virtual de educación a distancia institucional; o bien, al aplicar a un curso, diplomado, seminario, simposio, taller, mesa redonda, conferencia o análogo; o la participación bajo cualquier formato en procedimientos de adjudicación directa de productos o servicios; medios a través de los cuales se recaban los siguientes datos personales: 
            </p>

            <p className="mb-3">
              El titular<sup>1</sup> de los datos personales proporcionará de manera libre la siguiente información: 
            </p>

            {/* ANCLA: h-px para observer/scroll top confiable */}
            <span id="datos-personales" className="block h-px scroll-mt-24" aria-hidden="true"></span>
            <h3 className="mt-6 font-semibold">Datos personales: </h3>
            <ul className="list-decimal pl-6 space-y-1">
              <li>Nombre(s) y apellidos. </li>
              <li>Fecha de nacimiento. </li>
              <li>Género.</li>
              <li>Estado Civil. </li>
              <li>Número de hijos. </li>
              <li>Teléfono de casa, celular y de trabajo. </li>
              <li>Correo electrónico.</li>
              <li>Fotografía. </li>
            </ul>

            <h3 id="datos-familiares" className="mt-6 scroll-mt-24 font-semibold">Datos familiares: </h3>
            <ul className="list-none pl-6 space-y-1">
              <li>1.1 Nombre(s) y apellidos de sus padres. </li>
              <li>1.2. Nombre y apellidos de su esposo (a) o concubina(o). </li>
            </ul>

            <h3 id="laborales" className="mt-6 scroll-mt-24 font-semibold">Laborales: </h3>
            <ul className="list-none pl-6 space-y-1">
              <li>2.1. Nombre(s) y apellidos. </li>
              <li>2.2. Nombre y sector de la empresa o institución donde trabaja. </li>
              <li>2.3. Estado de la República donde se ubica. </li>
              <li>2.4. Puesto y condición laboral en esa empresa o institución. </li>
              <li>2.5. Relación laboral con su actual profesión. </li>
              <li>2.6. Grado de satisfacción laboral y salarial. </li>
              <li>2.7. Monto de ingresos mensuales.  </li>
              <li>2.8. Actualizaciones profesionales (cursos, diplomados, seminarios, idiomas) y  organización en la(s) que lo(s) ha tomado. </li>
              <li>2.9. Si es autoempleado o si está desempleado, motivos por lo que no trabaja, tiempo que ha permanecido sin laborar:  </li>
            </ul>

            <h3 id="academicos" className="mt-6 scroll-mt-24 font-semibold">Académicos: </h3>
            <ul className="list-none pl-6 space-y-1">
              <li>Nombre(s) y apellidos. </li>
              <li>3.1. Grados de estudios. </li>
              <li>3.2 Institución donde los cursó. </li>
              <li>3.3. Motivos por los cuales los realizó. </li>
              <li>3.4. Valoración de la experiencia adquirida relativa a su formación (plan de estudios y a la calidad de enseñanza y a la carga académica). </li>
              <li>3.5 Tiempo que tardo en titularse. </li>
              <li>3.6 Realizó servicio social y dónde. </li>
            </ul>

            <p id="fn1" className="my-5 text-sm text-slate-600 italic text-right scroll-mt-24">
              1 Titular: La persona física a quien corresponden los datos personales. Artículo 3°, fracción XXXI, Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados. 
            </p>

            <hr className="my-5"/>

            <ul className="list-none pl-6 space-y-1">
              <li>3.7 ¿Si se tituló? </li>
              <li>3.8. Dominio del idioma inglés u otro. </li>
              <li>3.9. Tipo de habilidades desarrolladas durante su formación profesional. </li>
              <li>3.10. ¿Son necearías para desempeñar su trabajo? </li>
              <li>3.11. Años de inicio y término de sus estudios. </li>
              <li>3.12. País de ubicación de la escuela.</li>
              <li>3.13. Nombre de la institución donde cursó bachillerato, plantel, clave y domicilio y elección de ingreso (área, carrera, sistema y plantel escolar). </li>
            </ul>

            <h3 id="sociales" className="mt-6 scroll-mt-24 font-semibold">Sociales: </h3>
            <ul className="list-none pl-6 space-y-1">
              <li>4.1. Si es miembro de una organización o asociación.</li>
              <li>4.2. Denominación o razón social de ésta. </li>
              <li>4.3. Si hay interés por participar en programas de beneficio social.</li>
            </ul>

            <h3 id="sensibles" className="mt-6 scroll-mt-24 font-semibold">Datos personales sensibles: (voluntarios y opcionales): </h3>
            <ul className="list-none pl-6 space-y-1">
              <li>Modo de vida. </li>
              <li>5.1. Práctica de deporte o ejercicio. </li>
              <li>5.2. Temporalidad. </li>
              <li>5.3 Cuidado de su salud. </li>
              <li>5.4 Frecuencia con que practica o asiste a eventos de arte y/o deporte. </li>
              <li>5.5. Estado de salud física, psico-emocional, adicciones (existencia y tipo), problemas y situación familiar, manifestación de estado de vulnerabilidad o discapacidad.</li>
            </ul>

            <h3 id="emergencia" className="mt-6 scroll-mt-24 font-semibold">Datos de Contacto de emergencia: </h3>
            <ul className="list-none pl-6 space-y-1 mb-4">
              <li>6.1. Nombre(s) y apellido de contacto de emergencia. </li>
              <li>6.2 Teléfono (fijo y móvil), dirección y relación con el titular de lainformación. </li>
            </ul>

            <p id="cookies" className="scroll-mt-24">
              La página web utiliza cookies y web beacons a través de los cuales es posible generar información estadística. 
            </p>
            <p className="mb-3">
              Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar al servidor de Internet algunos datos sobre este usuario, entre ellos, sus preferencias para la visualización de las páginas en ese servidor, nombre y contraseña. Asimismo, el sitio web contiene anuncios publicitarios que pueden enviar cookies de nuestros usuarios. 
            </p>
            <p className="mb-3">
              Las web beacons son imágenes insertadas en una página de Internet o correo electrónico, que puede ser utilizado para monitorear el comportamiento de un visitante, como almacenar información sobre la dirección IP del usuario, duración del tiempo de interacción en dicha página y el tipo de navegador utilizado, entre otros. Dicha información se almacena en las bitácoras de nuestro servidor y es la siguiente: 
            </p>

            <ul className="list-none pl-6 space-y-1 mb-4">
              <li>a) Tipo de navegador y sistema operativo.</li>
              <li>b) Si cuenta o no con software como java script o flash. </li>
              <li>c) Sitio que visitó antes de entrar al nuestro.</li>
              <li>d) Vínculos web que sigue en Internet.</li>
              <li>e) Su dirección IP (Internet Protocol). </li>
            </ul>

            <p id="enlaces" className="scroll-mt-24 mb-3">
              Estas cookies y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte los siguientes vínculos: 
            </p>
            <ul className="roman pl-6 space-y-1 mb-4">
              <li>
                Microsoft Edge:{" "}
                <a
                  href="https://support.microsoft.com/es-mx/help/4468242/microsoft-edge- browsing-data-and-privacy-microsoft-privacy"
                  target="_blank"
                  rel="noopener"
                  className="blue-color"
                >
                  https://support.microsoft.com/es-mx/help/4468242/microsoft-edge- browsing-data-and-privacy-microsoft-privacy 
                </a>
              </li>
              <li>
                Mozilla Firefox:{" "}
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios- web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener"
                  className="blue-color"
                >
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios- web-rastrear-preferencias 
                </a>
              </li>
              <li>
                Google Chrome:{" "}
                <a
                  href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop& hl=es"
                  target="_blank"
                  rel="noopener"
                  className="blue-color"
                >
                  https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop& hl=es 
                </a>
              </li>
              <li>
                Apple Safari:{" "}
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener"
                  className="blue-color"
                >
                  https://support.apple.com/es-es/guide/safari/sfri11471/mac 
                </a>
              </li>
            </ul>

            <p className="mb-3">
              En el caso de empleo de cookies, el botón de "ayuda" que se encuentra en la barra de herramientas de la mayoría de los navegadores, le dirá cómo evitar aceptar nuevas cookies, cómo hacer que el navegador le notifique cuando recibe una nueva cookie o cómo deshabilitar todas las cookies. 
            </p>
            <p className="mb-3">
              La información deberá ser proporcionada de forma voluntaria por el titular de los datos personales previa lectura y conocimiento del Aviso de Privacidad. A través de escrito libre presentado en el Instituto de Terapia Contextual, CDMX y por cualquier medio, el titular podrá manifestar su negativa para el tratamiento de sus datos personales para las finalidades descritas en este Aviso y la transferencia de datos que requieran su consentimiento. 
            </p>
            <p id="fn2" className="scroll-mt-24">
              El titular<sup>2</sup> de los datos personales tiene derecho a conocer qué información tiene Instituto de Terapia Contextual, CDMX, para qué es utilizada y las condiciones del uso que se le dan (ACCESO). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (RECTIFICACIÓN). De igual manera, tiene derecho a solicitar que su información se elimine de los registros o bases de datos cuando se determine, con base en la ley, que la misma se ha utilizado en forma inadecuada (CANCELACIÓN), así como también oponerse al uso de sus datos personales para fines específicos distintos a los señalados (OPOSICIÓN). También podrá enviar su solicitud al correo electrónico: recepcion.itc1@gmail.com
            </p>

            <h3 id="modificaciones" className="mt-6 scroll-mt-24">Modificaciones al Aviso de Privacidad: </h3>
            <p className="mb-3">
              El presente aviso de privacidad puede sufrir modificaciones o actualizaciones. Dichas actualizaciones o modificaciones estarán disponibles al público, por lo que podrá consultarlas en el sitio web: <a href="http://terapiascontextuales.mx/" target="_blank" rel="noopener" className="blue-color">http://terapiascontextuales.mx/</a> en la sección Aviso de Privacidad. Se recomienda y requiere consultar el Aviso de Privacidad, por lo menos semestralmente para estar actualizado de las condiciones y términos de éste. 
            </p>

            <p className="my-5 text-sm text-slate-600 italic text-right scroll-mt-24">
              2 Titular: La persona física a quien corresponden los datos personales. Artículo 3°, fracción XXXI, Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados. 
            </p>

            <h3>
              Fecha de última actualización: 13/abril/2021 
            </h3>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyNotice;
