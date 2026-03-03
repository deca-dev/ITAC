// src/hooks/useContactForm.ts
import { useState } from "react";

const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyZ45y-AGIhnnNbpTEvQZPiojgVgr8YHF9ryTV8emKnLh1cDT5xy3rCDST4wTPr8ZYs/exec";

type ContactResponse = { ok?: boolean; error?: string };

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: {
    nombre: string;
    email: string;
    telefono?: string;
    asunto?: string;
    mensaje: string;
    canal?: string;
    _hp?: string; // honeypot
  }) => {
    setLoading(true);
    setOk(null);
    setError(null);

    const endpoint =
      import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || CONTACT_ENDPOINT;

    // Basic front validation
    if (!payload.nombre?.trim() || !payload.email?.trim() || !payload.mensaje?.trim()) {
      setLoading(false);
      setOk(false);
      setError("Por favor completa nombre, email y mensaje.");
      return;
    }

    const fd = new FormData();
    fd.append("nombre", payload.nombre.trim());
    fd.append("email", payload.email.trim());
    if (payload.telefono) fd.append("telefono", payload.telefono.trim());
    if (payload.asunto) fd.append("asunto", payload.asunto);
    fd.append("mensaje", payload.mensaje.trim());
    fd.append("canal", payload.canal || "web");
    fd.append("_hp", payload._hp || "");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000); // 15s

    try {
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