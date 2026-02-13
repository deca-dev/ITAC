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
    "sensibles",
    "transferencias",
    "cookies",
    "arco",
    "modificaciones",
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
  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
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
      <div
        className="fixed left-0 top-0 h-screen w-1 bg-slate-200/70 z-40 hidden sm:block"
        aria-hidden
      />
      <div
        className="fixed left-0 top-0 w-1 bg-sky-500 z-50 rounded-r hidden sm:block"
        style={{ height: `${progress * 100}%` }}
        aria-hidden
      />

      {/* ─────────────── Hero ─────────────── */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0  bg-[url('/assets/bg/bg-aviso-privacidad.jpg')] bg-center bg-cover" />
        {/* <div className="absolute inset-0 -z-10 bg-black/40" /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center flex justify-center items-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow">
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
              <h2 className="text-slate-700 font-semibold mb-3 h2-revert">
                Tabla de contenidos
              </h2>
              <ol className="space-y-1">
                <li>
                  <a
                    href="#top-aviso"
                    onClick={(e) => handleTocClick(e, "top-aviso")}
                    className={linkCls("top-aviso")}
                  >
                    Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#integral"
                    onClick={(e) => handleTocClick(e, "integral")}
                    className={linkCls("integral")}
                  >
                    Aviso de Privacidad Integral
                  </a>
                  <ol className="ml-4 mt-1 space-y-1 list-none">
                    <li>
                      <a
                        href="#finalidades"
                        onClick={(e) => handleTocClick(e, "finalidades")}
                        className={linkCls("finalidades")}
                      >
                        Finalidades
                      </a>
                    </li>
                    <li>
                      <a
                        href="#datos-personales"
                        onClick={(e) => handleTocClick(e, "datos-personales")}
                        className={linkCls("datos-personales")}
                      >
                        Datos personales que pueden ser recabados
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sensibles"
                        onClick={(e) => handleTocClick(e, "sensibles")}
                        className={linkCls("sensibles")}
                      >
                        Consentimiento para datos sensibles
                      </a>
                    </li>
                    <li>
                      <a
                        href="#transferencias"
                        onClick={(e) => handleTocClick(e, "transferencias")}
                        className={linkCls("transferencias")}
                      >
                        Transferencias de datos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookies"
                        onClick={(e) => handleTocClick(e, "cookies")}
                        className={linkCls("cookies")}
                      >
                        Cookies y tecnologías de rastreo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#arco"
                        onClick={(e) => handleTocClick(e, "arco")}
                        className={linkCls("arco")}
                      >
                        Derechos ARCO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#modificaciones"
                        onClick={(e) => handleTocClick(e, "modificaciones")}
                        className={linkCls("modificaciones")}
                      >
                        Modificaciones
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Artículo (copy intacto) */}
          <article className="prose prose-slate sm:prose-lg max-w-none leading-relaxed lg:col-span-9">
            {/* ====== AVISO DE PRIVACIDAD ====== */}
            <h2
              id="top-aviso"
              className="mb-2 scroll-mt-24 h2-revert"
            >
              Instituto de Terapia y Análisis de la Conducta, S. C.
            </h2>

            <p className="mb-3">
              El Instituto de Terapia y Análisis de la Conducta, S. C., es responsable del tratamiento de los datos personales que se recaben por esta entidad para el registro de usted en calidad de alumno, docente, conferencista o invitado externo, visitante o consultante (nacional o extranjero). Dichos datos serán utilizados con fines académicos, clínicos, estadísticos y para control administrativo.
            </p>
            <p className="mb-3">
              En todo momento, el Instituto de Terapia y Análisis de la Conducta, S. C., debe contar con la autorización de los titulares de la información, con la finalidad de utilizar estos datos única y exclusivamente para los fines institucionales justificados, y de conformidad con la legislación vigente. Los datos personales no serán comercializados ni utilizados para fines distintos a los establecidos en el presente Aviso de Privacidad.
            </p>
            <p className="mb-3">
              La información deberá ser proporcionada de forma voluntaria por el titular de los datos personales, previa lectura y conocimiento del Aviso de Privacidad mediante escrito libre, presentado en las instalaciones del Instituto, y por cualquier medio electrónico. El titular podrá manifestar su negativa para el tratamiento de sus datos personales conforme a las finalidades descritas en este Aviso, así como respecto de aquellas transferencias que requieran su consentimiento.
            </p>
            <p className="mb-3">
              Para cumplir las finalidades necesarias anteriormente descritas, u otras que sean exigidas legalmente por las autoridades competentes, el Instituto de Terapia y Análisis de la Conducta, S. C., podrá realizar transferencias de datos personales sin requerir el consentimiento adicional del titular, cuando dichas transferencias sean necesarias para la prestación de los servicios profesionales, el cumplimiento de obligaciones legales, fiscales o administrativas, o para el uso de plataformas tecnológicas necesarias para la atención, seguimiento clínico o académico, siempre garantizando la confidencialidad y seguridad de la información.
            </p>
            <p className="mb-3">
              El titular podrá ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación u Oposición) enviando su solicitud al correo electrónico: recepcion.itc1@gmail.com, misma que será atendida conforme a los plazos y procedimientos establecidos en la legislación aplicable.
            </p>
            <p className="mb-3">
              El Aviso de Privacidad Integral puede ser consultado en la página electrónica del Instituto:
              <br />
              <a
                href="https://institutodeterapiacontextual.com/"
                target="_blank"
                rel="noopener"
                className="blue-color"
              >
                https://institutodeterapiacontextual.com/
              </a>
            </p>

            <hr />

            {/* ====== AVISO DE PRIVACIDAD INTEGRAL ====== */}
            <h2
              id="integral"
              className="mb-2 scroll-mt-24 h2-revert"
            >
              AVISO DE PRIVACIDAD INTEGRAL
            </h2>

            <p className="mb-3">
              <strong>Instituto de Terapia y Análisis de la Conducta, S. C.</strong>
            </p>

            <p className="mb-3">
              El Instituto de Terapia y Análisis de la Conducta, S. C. con domicilio en CALLEJÓN BELISARIO DOMÍNGUEZ 141, INTERIOR 2, COLONIA DEL CARMEN, ALCALDÍA COYOACÁN, 04100, CIUDAD DE MÉXICO, es responsable del tratamiento de los datos personales que se recaben por esta entidad, de conformidad con lo dispuesto en los artículos 1, 6, 8, 9, 14, 15, 16 y demás relativos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.
            </p>

            <p className="mb-3">
              El Instituto de Terapia y Análisis de la Conducta, S. C., recaba sus datos personales y es responsable del tratamiento que se les dé. En todo momento, el Instituto debe contar con la autorización de los titulares de la información, con la finalidad de utilizar los datos única y exclusivamente para los fines institucionales justificados y de conformidad con la legislación vigente. En ningún caso los datos personales serán comercializados.
            </p>

            {/* ANCLA */}
            <span
              id="finalidades"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-3">
              Si eres alumno, docente, conferencista o invitado externo, visitante o consultante (nacional o extranjero), los datos personales que recabamos de usted serán utilizados para las siguientes finalidades:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>La prestación de servicios terapéuticos, clínicos y académicos.</li>
              <li>La integración y administración de expedientes clínicos y académicos.</li>
              <li>Informar de los asuntos escolares y administrativos.</li>
              <li>Inscripción a eventos o cualquier servicio o actividad que contribuya a la formación integral.</li>
              <li>Actualizar la base de datos de alumnos, estudiantes, docentes y consultantes.</li>
              <li>Realizar reportes semanales, mensuales y anuales académicos, escolares o estadísticos.</li>
              <li>Evaluar el desempeño académico y extracurricular.</li>
              <li>Otorgar becas o apoyos económicos en caso de cumplir los requisitos establecidos.</li>
              <li>Contactar a familiares o terceros, en casos de emergencia.</li>
              <li>Cumplimiento de obligaciones legales, fiscales y administrativas.</li>
            </ul>

            <p className="mb-3">
              Recabamos sus datos personales al usar los mecanismos remotos de comunicación electrónica consistentes en la página web, correo electrónico institucional, plataformas virtuales de educación o atención psicológica, o bien, al aplicar a un curso, diplomado, seminario, simposio, taller, conferencia o análogo.
            </p>

            {/* ANCLA */}
            <span
              id="datos-personales"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Datos personales que pueden ser recabados:
            </p>

            <p className="mb-3">
              Datos de identificación: Nombre(s) y apellidos, teléfono, correo electrónico, fotografía.
              <br />
              Datos académicos y profesionales: Grados de estudios, institución donde los cursó, ocupación, experiencia profesional.
              <br />
              Datos de contacto de emergencia: Nombre, teléfono y relación con el titular.
              <br />
              Datos personales sensibles (voluntarios): Estado de salud física, psicológica o emocional, antecedentes terapéuticos, adicciones, situación de vulnerabilidad o discapacidad, información necesaria para la adecuada prestación de servicios psicológicos.
            </p>

            {/* ANCLA */}
            <span
              id="sensibles"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Consentimiento para datos sensibles
            </p>

            <p className="mb-4">
              El titular otorga su consentimiento expreso y por escrito para el tratamiento de sus datos personales sensibles, de conformidad con lo dispuesto en el artículo 9 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>

            {/* ANCLA */}
            <span
              id="transferencias"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Transferencias de datos
            </p>

            <p className="mb-3">
              El Instituto podrá transferir datos personales sin requerir consentimiento adicional del titular cuando dichas transferencias sean necesarias para:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Prestación de servicios profesionales relacionados con la atención psicológica o académica.</li>
              <li>Uso de plataformas tecnológicas de videollamadas, expedientes digitales o sistemas administrativos.</li>
              <li>Cumplimiento de obligaciones legales ante autoridades competentes.</li>
            </ul>

            <p className="mb-4">
              En ningún caso se transferirán datos personales con fines comerciales o publicitarios.
            </p>

            {/* ANCLA */}
            <span
              id="cookies"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Uso de cookies y tecnologías de rastreo
            </p>

            <p className="mb-4">
              La página web utiliza cookies y web beacons a través de los cuales es posible generar información estadística. Las cookies permiten recordar preferencias de navegación, así como datos técnicos relacionados con el uso del sitio. Estas tecnologías pueden ser deshabilitadas directamente desde el navegador del usuario.
            </p>

            {/* ANCLA */}
            <span
              id="arco"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Derechos ARCO
            </p>

            <p className="mb-3">
              El titular de los datos personales tiene derecho a conocer qué información posee el Instituto, para qué se utiliza y las condiciones de uso (ACCESO); solicitar la corrección de su información (RECTIFICACIÓN); solicitar la eliminación de los datos cuando se determine que han sido utilizados de forma inadecuada (CANCELACIÓN); así como oponerse al tratamiento de sus datos para fines específicos (OPOSICIÓN).
            </p>

            <p className="mb-4">
              Para ejercer estos derechos, el titular deberá enviar su solicitud al correo electrónico:
              <br />
              <strong>recepcion.itc1@gmail.com</strong>
            </p>

            {/* ANCLA */}
            <span
              id="modificaciones"
              className="block h-px scroll-mt-24"
              aria-hidden="true"
            ></span>

            <p className="mb-2 font-semibold h3-revert">
              Modificaciones al Aviso de Privacidad
            </p>

            <p className="mb-3">
              El presente aviso de privacidad podrá sufrir modificaciones o actualizaciones. Dichas modificaciones estarán disponibles al público en el sitio web:
              <br />
              <a
                href="https://institutodeterapiacontextual.com/"
                target="_blank"
                rel="noopener"
                className="blue-color"
              >
                https://institutodeterapiacontextual.com/
              </a>
              <br />
              Se recomienda consultar este Aviso de Privacidad de manera periódica.
            </p>

            <p className="mt-8 text-sm text-slate-600 italic text-right">
              Fecha de última actualización: 24 de enero de 2026
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyNotice;
