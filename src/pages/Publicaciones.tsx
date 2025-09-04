// src/pages/Publicaciones.tsx
import React from "react";

type PublicationCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
  hasButton?: boolean;
};

const PublicationCard: React.FC<PublicationCardProps> = ({
  icon,
  title,
  description,
  items,
  hasButton = false,
}) => {
  return (
    <div className="flex gap-6 items-start mb-10">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-[#627b7e] flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">{description}</p>
        {items && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-slate-400">•</span>
                <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
        {hasButton && (
          <button className="mt-4 px-5 py-2 bg-[#1A3459] text-white rounded-md hover:bg-[#2a4469] transition-colors text-sm">
            Saber más
          </button>
        )}
      </div>
    </div>
  );
};

export default function Publicaciones() {
  return (
    <main className="bg-gray-50">
      {/* ============== HERO ============== */}
     <header className="relative isolate overflow-hidden h-[400px]">
        {/* Banner base */}
        <div className="bg-[#1A3459] bg-cover bg-center text-white h-[400px] px-8 mb-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 lg:h-full flex-col-reverse lg:flex-row lg:flex-nowrap flex-wrap items-center …">
            <div className="w-80 overflow-hidden relative lg:absolute right-0 lg:right-[15%] ">
              <img
                src="/assets/images/img-nosotros-main-banner-photo.png"
                alt="Academic lecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden relative lg:absolute right-0 hidden lg:block">
              <img
                src="/assets/images/bg-nosotros-main-banner-waves.png"
                alt="Academic lecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 lg:pr-80">
              <h2 className="mt-8 text-3xl font-bold mb-2">Publicaciones</h2>
              <p className="text-lg">
               Desde libros completos hasta revisiones técnicas, cada trabajo refleja nuestro compromiso con la excelencia y la divulgación psicológica.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ============== CONTENIDO PRINCIPAL ============== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Columna principal - 2/3 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-base text-slate-700 mb-8 font-medium">
                  Compartimos nuestro conocimiento a través de publicaciones porque creemos<br />
                  en la educación como herramienta transformadora que trasciende las barreras y<br />
                  llega a quienes buscan comprender la psicología en profundidad.
                </p>

                {/* Libros */}
                <PublicationCard
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                    </svg>
                  }
                  title="Libros"
                  description="Nuestro equipo de psicólogos combina la práctica diaria con la pasión por compartir conocimiento. Cada uno ha contribuido con capítulos en obras que tocan temas que realmente importan, nutriendo su enfoque terapéutico con investigación y reflexión continua."
                  hasButton={true}
                />

                {/* Capítulos de Libros */}
                <PublicationCard
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  }
                  title="Capítulos de Libros"
                  description="Nuestros psicólogos han participado en numerosas obras colectivas aportando capítulos especializados donde comparten investigaciones y reflexiones sobre áreas específicas de la salud mental. Estas contribuciones permiten profundizar en temas concretos desde múltiples perspectivas, enriqueciendo el diálogo académico mientras mantienen un pie en la realidad cotidiana de la consulta."
                  items={[
                    "Reyes, M. A., (2019) Intervención integrativa y transdiagnóstica dirigida a la regulación emocional. En A.Tena Suck (Comp). Psicoterapia Integrativa. Una aproximación a la psicoterapia basada en la evidencia. El Manual Moderno.",
                    "Reyes, M. A., Ascanio Guirado, M. & Kanter J. W. (2016) Consciencia, Valor y Amor como Procesos Transdiagnósticos y Blancos de Tratamiento en Psicoterapia Analítica Funcional. En J.R. Rodriguez (Comp) Psicología Comportamental-Contextual latinoamericana. Asociación Latinoamericana de Modificación de Conducta.",
                    "Reyes, M. A. & Vargas Salinas A. N. (2016) Terapia Conductual Contextual integrativa para el Trastorno Límite de la Personalidad. En J.R. Rodriguez (Comp). Psicología Comportamental latinoamericana. Asociación Latinoamericana de Modificación de Conducta.",
                    "Reyes, M. A., Vargas A. N. & Díaz, F. (2016) Historia de la Terapia conductual Contextual en México y Latinoamérica. En J.R. Rodriguez (Comp). Historia de la Modificación de Conducta Latinoamericana. Asociación Latinoamericana de Modificación de Conducta"
                  ]}
                />

                {/* Traducción de libros */}
                <PublicationCard
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                    </svg>
                  }
                  title="Traducción de libros"
                  description="El compromiso con la difusión del conocimiento nos ha llevado a traducir obras fundamentales que originalmente no estaban disponibles en nuestro idioma. Este trabajo meticuloso va más allá de las palabras: adaptamos conceptos a nuestro contexto cultural, haciendo accesibles teorías y técnicas innovadoras para profesionales y público hispanohablante."
                  items={[
                    "Mazza, J.J., Dexter-Mazza, E.T. Miller, Alec, L., Rathus, J.H. & Murphy, H.E. (2018). Manual DBT® Skills in Schools: Skills Training for emotional problem solving for adolescents (DBT Steps-A)."
                  ]}
                />

                {/* Revisiones técnicas de libros */}
                <PublicationCard
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  }
                  title="Revisiones técnicas de libros"
                  description="Participamos activamente en el proceso editorial como revisores técnicos, asegurando la precisión y relevancia de publicaciones especializadas antes de llegar al público. Esta labor silenciosa pero crucial garantiza la calidad de la literatura psicológica, verificando que los conceptos se presenten con rigor científico pero manteniendo la claridad necesaria para su difusión educativa efectiva."
                  items={[
                    "Barlow, D. H (2018). Manual clínico de trastornos psicológicos: Tratamiento paso a paso. Ciudad de México., El Manual Moderno.",
                    "De la Rosa Gómez, A. (2019). Intervención Transdiagnóstica para la Regulación Emocional en Adolescentes en Conflicto con la Ley. Ciudad de México., Universidad Nacional Autónoma de México - Facultad de Estudios Superiores Iztacala."
                  ]}
                />
              </div>
            </div>

            {/* Columna lateral - 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <img
                  src="/assets/images/publications-professionals.jpg"
                  alt="Profesionales revisando documentos"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}