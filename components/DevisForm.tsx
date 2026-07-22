"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";
import { ChevronDownIcon, MailIcon, PhoneIcon, UserIcon } from "@/components/icons";
import { FormField } from "@/components/FormField";
import { encodeForNetlify } from "@/components/formUtils";

type Status = "idle" | "sending" | "sent" | "error";

/** Quote-request form — distinct Netlify form ("devis") from the general
 * contact form, so the two kinds of leads land in separate inboxes/tabs. */
export function DevisForm({ initialService }: { initialService?: string }) {
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
        body: encodeForNetlify({ "form-name": "devis", ...data }),
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
      <div className="panel rounded-2xl p-10 text-center">
        <p className="text-lg font-bold text-[var(--color-ink)]">Merci, votre demande de devis a bien été envoyée.</p>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          Nous revenons vers vous rapidement avec un devis personnalisé.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="devis"
      data-netlify="true"
      data-netlify-honeypot="company"
      className="panel space-y-5 rounded-2xl p-8 md:p-10"
    >
      <input type="hidden" name="form-name" value="devis" />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Nom complet" name="name" required autoComplete="name" icon={UserIcon} />
        <FormField label="Téléphone" name="phone" type="tel" required autoComplete="tel" icon={PhoneIcon} />
      </div>

      <FormField label="E-mail" name="email" type="email" required autoComplete="email" icon={MailIcon} />

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
          Service concerné
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            defaultValue={initialService ?? ""}
            className="w-full appearance-none rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 pr-10 text-sm text-[var(--color-ink)] transition focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
          >
            <option value="">Sélectionnez un service (optionnel)</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-ink-soft)]" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet : type de toiture, nombre de fenêtres, échéance souhaitée…"
          className="w-full rounded-lg border border-[var(--color-line)] px-4 py-3 text-sm transition focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm font-semibold text-[var(--color-accent-dark)]">{errorMessage}</p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Envoi en cours…" : "Demander mon devis"}
      </button>
    </form>
  );
}
