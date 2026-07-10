import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { ArrowIcon } from "@/components/icons";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: `Fenêtres de toit, toit plat, verrières modulaires, stores, smart home et Sun-Tunnel par ${site.shortName}, partenaire agréé Velux Expert.`,
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
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 60}>
            <Link
              href={`/services/${service.slug}`}
              className="grid gap-3 py-10 transition-opacity hover:opacity-70 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,2fr)_auto] md:items-center md:gap-8"
            >
              <PlaceholderMedia label="Photo" className="h-14 w-14 shrink-0" />
              <h2 className="text-lg font-semibold text-[var(--color-ink)]">{service.title}</h2>
              <p className="text-sm text-[var(--color-ink-soft)]">{service.summary}</p>
              <span className="link-underline inline-flex items-center gap-2 whitespace-nowrap text-sm">
                En savoir plus <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
