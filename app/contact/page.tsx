import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Demandez un devis gratuit à ${site.shortName}, réponse sous 48h.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)]">
            Demandez votre devis gratuit.
          </h1>
          <p className="mt-4 max-w-sm text-sm text-[var(--color-ink-soft)]">
            Décrivez votre projet, nous revenons vers vous sous 48h ouvrées avec un devis
            personnalisé.
          </p>

          <div className="mt-8 space-y-3">
            <a href={site.phoneHref} className="flex items-center gap-3 text-sm font-medium text-[var(--color-ink)]">
              <PhoneIcon className="h-4 w-4 text-[var(--color-ink-soft)]" />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm font-medium text-[var(--color-ink)]">
              <MailIcon className="h-4 w-4 text-[var(--color-ink-soft)]" />
              {site.email}
            </a>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-soft)]">
            Disponibilité
          </p>
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
            Du lundi au vendredi — réponse sous 24 à 48h.
          </p>
        </div>

        <ContactForm initialService={service} />
      </div>
    </section>
  );
}
