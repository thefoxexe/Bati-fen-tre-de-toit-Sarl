"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, PhoneIcon, UserIcon } from "@/components/icons";
import { FormField } from "@/components/FormField";
import { encodeForNetlify } from "@/components/formUtils";

type Status = "idle" | "sending" | "sent" | "error";

/** General-question form — kept deliberately shorter than DevisForm (no
 * service picker, phone optional) since it's for things other than a quote
 * request: a question, a follow-up, feedback. Own Netlify form ("contact"). */
export function GeneralContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
      <div className="panel rounded-2xl p-10 text-center">
        <p className="text-lg font-bold text-[var(--color-ink)]">Merci, votre message a bien été envoyé.</p>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">Nous vous répondons rapidement.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="company"
      className="panel space-y-5 rounded-2xl p-8 md:p-10"
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

      <FormField label="Nom complet" name="name" required autoComplete="name" icon={UserIcon} />
      <FormField label="E-mail" name="email" type="email" required autoComplete="email" icon={MailIcon} />
      <FormField label="Téléphone (optionnel)" name="phone" type="tel" autoComplete="tel" icon={PhoneIcon} />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink)]">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Une question, un suivi de dossier, une remarque…"
          className="w-full rounded-lg border border-[var(--color-line)] px-4 py-3 text-sm transition focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm font-semibold text-[var(--color-accent-dark)]">{errorMessage}</p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
