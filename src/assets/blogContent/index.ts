// src/assets/blogContent/index.ts
export const blogContentLoaders: Record<string, () => Promise<{ default: string }>> = {
  "analisis-del-comportamiento-clinico": () =>
    import("./analisis-del-comportamiento-clinico"),
};
