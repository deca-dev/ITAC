// src/assets/blogPosts.ts
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;           // ISO (YYYY-MM-DD)
  category: string;       // p.ej. "Terapia", "Investigación", "Formación"
  excerpt: string;
  thumbnail: string;      // ruta a imagen
  readMinutes?: number;
  tags?: string[];
  authors?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
   slug: "psicoterapia-analitica-funcional-guia",
  title: "Psicoterapia Analítica Funcional (FAP): guía práctica",
  date: "2025-12-05",
  category: "Terapias Contextuales",
  excerpt:
    "Principios básicos de FAP, cómo identificar conductas clínicamente relevantes (CCR) y pautas para reforzar cambios en sesión.",
  thumbnail: "/assets/blog/fap-guia-practica.jpg",
  readMinutes: 7,
  tags: ["FAP", "conducta verbal", "terapia"]
  },
  {
    id: "2",
    slug: "que-es-la-terapia-analitico-funcional",
    title: "¿Qué es la Psicoterapia Analítico-Funcional (FAP)?",
    date: "2025-10-05",
    category: "Terapia",
    excerpt: "Un vistazo práctico a la FAP: racional, aplicaciones y recursos para clínicos.",
    thumbnail: "/assets/blog/fap-intro.jpg",
    readMinutes: 5,
    tags: ["FAP", "clínica"]
  },
  {
    id: "3",
    slug: "investigacion-contextual-recientes",
    title: "Investigación contextual reciente: temas clave",
    date: "2025-08-14",
    category: "Investigación",
    excerpt: "Resumen de estudios publicados y por qué importan para la práctica.",
    thumbnail: "/assets/blog/research-contextual.jpg",
    readMinutes: 7,
    tags: ["papers", "resumen"]
  },
  {
    id: "4",
    slug: "como-elegir-formacion-contextual",
    title: "¿Cómo elegir tu formación en terapias contextuales?",
    date: "2025-07-29",
    category: "Formación",
    excerpt: "Criterios prácticos para evaluar diplomados, cursos y certificaciones.",
    thumbnail: "/assets/blog/formacion-contextual.jpg",
    readMinutes: 4,
    tags: ["cursos", "docencia"]
  },
   {
    id: "5",
    slug: "analisis-del-comportamiento-clinico",
    title: "Análisis del comportamiento clínico",
    date: "2026-01-06",
    category: "Investigación",
    authors: ["William C. Follette", "Sabrina M. Darrow"],
    excerpt:
      "El análisis del comportamiento clínico se apega a los principios conductuales y centra sus intervenciones en consultantes verbalmente competentes en entornos ambulatorios.",
    thumbnail: "/assets/blog/analisis-comportamiento.jpg",
    readMinutes: 8
  }
];
