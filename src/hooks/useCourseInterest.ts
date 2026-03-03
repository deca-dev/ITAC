// src/hooks/useCourseInterest.ts
import { useState } from "react";

const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyZ45y-AGIhnnNbpTEvQZPiojgVgr8YHF9ryTV8emKnLh1cDT5xy3rCDST4wTPr8ZYs/exec";

type ContactResponse = { ok?: boolean; error?: string };

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
    sheet?: string; // "Interes Cursos"
    type?: string;  // "course_interest"
    _hp?: string;
  }) => {
    setLoading(true);
    setOk(null);
    setError(null);

    const endpoint =
      import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || CONTACT_ENDPOINT;

    // validación básica
    if (!payload.nombre?.trim() || !payload.email?.trim()) {
      setLoading(false);
      setOk(false);
      setError("Por favor completa nombre y email.");
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000); // 15s

    try {
      const fd = new FormData();
      fd.append("nombre", payload.nombre.trim());
      fd.append("email", payload.email.trim());
      if (payload.telefono) fd.append("telefono", payload.telefono.trim());

      fd.append("asunto", "info-curso");
      fd.append(
        "mensaje",
        (payload.mensaje?.trim() &&
          payload.mensaje.trim()) ||
          `Interés en el curso: ${payload.courseTitle} (${payload.courseSlug})`
      );

      fd.append("canal", "web");
      fd.append("_hp", payload._hp || "");

      // extras para Apps Script
      fd.append("type", payload.type || "course_interest");
      fd.append("courseSlug", payload.courseSlug);
      fd.append("courseTitle", payload.courseTitle);
      fd.append("sheet", payload.sheet || "Interes Cursos");

      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });

      const text = await res.text();
      let json: ContactResponse = {};
      try {
        json = text ? (JSON.parse(text) as ContactResponse) : {};
      } catch {
        // keep json = {}
      }

      if (!res.ok) throw new Error(json.error || `Error HTTP ${res.status}`);
      if (!json.ok) throw new Error(json.error || "No se pudo enviar");

      setOk(true);
    } catch (err: any) {
      setOk(false);
      setError(
        err?.name === "AbortError"
          ? "Tiempo de espera agotado. Intenta de nuevo."
          : err?.message || "Error al enviar"
      );
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return { loading, ok, error, submit };
}