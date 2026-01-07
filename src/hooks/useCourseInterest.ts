// src/hooks/useCourseInterest.ts
import { useState } from "react";

export function useCourseInterest() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: {
    nombre: string;
    email: string;
    telefono?: string;
    mensaje?: string;
    courseSlug: string;
    courseTitle: string;
    sheet?: string;      // e.g. "Interes Cursos" (Apps Script lo usará para elegir hoja)
    type?: string;       // e.g. "course_interest"
    _hp?: string;
  }) => {
    setLoading(true);
    setOk(null);
    setError(null);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (!endpoint) throw new Error("No hay endpoint configurado");

      // validación básica
      if (!payload.nombre || !payload.email) {
        throw new Error("Por favor completa nombre y email.");
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: new URLSearchParams({
          nombre: payload.nombre,
          email: payload.email,
          telefono: payload.telefono || "",
          asunto: "info-curso",
          mensaje:
            payload.mensaje ||
            `Interés en el curso: ${payload.courseTitle} (${payload.courseSlug})`,
          canal: "web",
          _hp: payload._hp || "",
          // extras para Apps Script
          type: payload.type || "course_interest",
          courseSlug: payload.courseSlug,
          courseTitle: payload.courseTitle,
          sheet: payload.sheet || "Interes Cursos",
        }),
      });

      const json = await res.json().catch(() => ({} as any));
      if (!json.ok) throw new Error(json.error || "No se pudo enviar");

      setOk(true);
    } catch (err: any) {
      setOk(false);
      setError(err.message || "Error al enviar");
    } finally {
      setLoading(false);
    }
  };

  return { loading, ok, error, submit };
}
