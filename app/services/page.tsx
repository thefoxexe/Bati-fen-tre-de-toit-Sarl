import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { ArrowIcon, RoofWindowIllustration } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Installation, remplacement, volets et dépannage de fenêtres de toit par ${site.shortName}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow mb-4">Services</p>
        <h1 className="balance max-w-2xl text-4xl font-extrabold leading-tight text-[var(--color-ink)] md:text-5xl">
          Un service complet <span className="font-normal">autour de votre fenêtre de toit.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} id={service.slug} className="card flex flex-col p-7">
              <RoofWindowIllustration className="h-12 w-12 text-[var(--color-accent-dark)]" />
              <h2 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{service.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{service.description}</p>
              <Link
                href={`/contact?service=${service.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]"
              >
                Devis pour ce service <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
