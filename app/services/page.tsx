import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Installation, remplacement, volets et dépannage de fenêtres de toit par ${site.shortName}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
        <p className="eyebrow mb-4">Services</p>
        <h1 className="balance max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          Un service complet <span className="font-normal text-[var(--color-ink-soft)]">autour de votre fenêtre de toit.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-5xl divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] px-5 pb-24 md:px-8">
        {services.map((service) => (
          <div key={service.slug} id={service.slug} className="grid gap-2 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-baseline md:gap-8">
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">{service.title}</h2>
            <p className="text-sm text-[var(--color-ink-soft)]">{service.description}</p>
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-ink)]"
            >
              Devis pour ce service <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
