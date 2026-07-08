"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

// Netlify Forms expects a classic urlencoded POST to "/" with a "form-name"
// field matching the form's `name` — see components/ContactForm.tsx's
// data-netlify form and public/forms.html for the static counterpart Netlify's
// build-time scan needs to register the form.
function encodeForNetlify(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value ?? ""))}`)
    .join("&");
}

export function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real visitors never fill this hidden field.
    if (data.company) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({ "form-name": "contact", ...data }),
      });

      if (!res.ok) {
        throw new Error("Une erreur est survenue.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "sent") {
    return (
      <div className="panel p-10 text-center">
        <p className="text-lg font-bold text-[var(--color-ink)]">Merci, votre demande a bien été envoyée.</p>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          Nous revenons vers vous sous 48h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="company"
      className="panel space-y-5 p-8 md:p-10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nom complet" name="name" required autoComplete="name" />
        <Field label="Téléphone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <Field label="E-mail" name="email" type="email" required autoComplete="email" />

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
          Type de demande
        </label>
        <select
          id="service"
          name="service"
          defaultValue={initialService ?? ""}
          className="w-full border border-[var(--color-line)] px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
        >
          <option value="">Sélectionnez un service (optionnel)</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet : type de toiture, nombre de fenêtres, échéance souhaitée…"
          className="w-full border border-[var(--color-line)] px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm font-semibold text-[var(--color-accent-dark)]">{errorMessage}</p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-[var(--color-line)] px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
      />
    </div>
  );
}
