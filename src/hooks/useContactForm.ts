// src/hooks/useContactForm.ts
import { useState } from "react";

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

        try {
            const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
            if (!endpoint) throw new Error("No hay endpoint configurado");

            // Básica validación front
            if (!payload.nombre || !payload.email || !payload.mensaje) {
                throw new Error("Por favor completa nombre, email y mensaje.");
            }

            const res = await fetch(endpoint, {
                method: "POST",
                // IMPORTANT: no headers → keep it a "simple request" (no preflight)
                body: (() => {
                    const fd = new FormData();
                    fd.append("nombre", `${payload.nombre}`);
                    fd.append("email", payload.email);
                    if (payload.telefono) fd.append("telefono", payload.telefono);
                    if (payload.asunto) fd.append("asunto", payload.asunto);
                    fd.append("mensaje", payload.mensaje);
                    fd.append("canal", payload.canal || "web");
                    fd.append("_hp", payload._hp || "");
                    return fd;
                })(),
            });
     

            const json = await res.json().catch(() => ({}));
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
