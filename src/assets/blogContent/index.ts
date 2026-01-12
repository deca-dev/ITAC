// src/assets/blogContent/index.ts
export const blogContentLoaders: Record<string, () => Promise<{ default: string }>> = {
  "analisis-del-comportamiento-clinico": () =>
    import("./analisis-del-comportamiento-clinico"),
  
    "como-elegir-formacion-contextual": () =>
    import("./como-elegir-formacion-contextual"),

    "investigacion-contextual-recientes": () =>
    import("./investigacion-contextual-recientes"),

    "psicoterapia-analitica-funcional-guia": () =>
    import("./psicoterapia-analitica-funcional-guia"),

    "que-es-la-terapia-analitico-funcional": () =>
    import("./que-es-la-terapia-analitico-funcional"),
};
