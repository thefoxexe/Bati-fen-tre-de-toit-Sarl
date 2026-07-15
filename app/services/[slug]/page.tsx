import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceAreas, site } from "@/lib/site";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { DevisForm } from "@/components/DevisForm";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  // Kept under ~160 characters (the practical limit before Google truncates
  // the snippet in search results) — service.summary is at most 130 chars,
  // this suffix adds ~30, so every combination stays inside the budget.
  return {
    title: service.title,
    description: `${service.summary} Velux Expert, devis gratuit.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "RoofingContractor",
      name: site.name,
      telephone: site.phoneHref.replace("tel:", ""),
      url: site.url,
    },
    areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
    url: `${site.url}/services/${service.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
    ],
  };

  const faqJsonLd = service.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}

      {/* Hero */}
      <section style={{ background: "var(--color-hero)" }} className="grain text-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[auto_1fr] md:items-center md:px-8 md:py-20">
          <PlaceholderMedia onDark className="h-24 w-24" />
          <div>
            <p className="eyebrow eyebrow-on-dark mb-4">Services</p>
            <h1 className="balance text-3xl font-semibold leading-tight text-white md:text-4xl">{service.title}</h1>
            <p className="mt-4 max-w-xl text-white/70">{service.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Magnetic>
                <a href="#devis" className="btn btn-primary">
                  Demander un devis gratuit
                </a>
              </Magnetic>
              <Magnetic>
                <a href={site.phoneHref} className="btn btn-on-photo">
                  {site.phoneDisplay}
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-base text-[var(--color-ink-soft)]">{service.description}</p>
        </section>
      </Reveal>

      {/* Avantages */}
      <Reveal>
        <section className="border-t border-[var(--color-line)] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Avantages</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.avantages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-ink-soft)]">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Gammes de produits (stores : occulter / tamiser / protéger) */}
      {service.productGroups ? (
        <Reveal>
          <section className="border-t border-[var(--color-line)] py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Nos gammes de stores</h2>
              <div className="mt-8 grid gap-10 md:grid-cols-3">
                {service.productGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{group.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{group.subtitle}</p>
                    <ul className="mt-5 space-y-5">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <PlaceholderMedia label="Photo à venir" className="aspect-[4/3] w-full" />
                          <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{item.name}</p>
                          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Déroulement */}
      <Reveal>
        <section className="border-t border-[var(--color-line)] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Déroulement de l&rsquo;intervention</h2>
            <ol className="mt-6 space-y-5">
              {service.etapes.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="shrink-0 text-sm font-semibold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[var(--color-ink-soft)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      {/* Photos (placeholder) */}
      <Reveal>
        <section className="border-t border-[var(--color-line)] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Réalisations</h2>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
              Nos prochains chantiers de {service.title.toLowerCase()} viendront illustrer cette
              section.
            </p>
            <PlaceholderMedia label="Photos à venir" className="mt-6 aspect-[21/9] w-full" />
          </div>
        </section>
      </Reveal>

      {/* CTA band */}
      <Reveal>
        <section className="section-dark grain">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-lg font-semibold text-white">Un projet de {service.title.toLowerCase()} ?</p>
            <div className="flex flex-wrap gap-3">
              <a href="#devis" className="btn btn-primary">
                Demander un devis
              </a>
              <a href={site.phoneHref} className="btn btn-on-photo">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FAQ spécifique */}
      {service.faq.length > 0 && (
        <Reveal>
          <section className="border-t border-[var(--color-line)] py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-5 md:px-8">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Questions fréquentes</h2>
              <div className="mt-6 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {service.faq.map((item) => (
                  <details key={item.question} className="faq py-5">
                    <summary className="flex items-center justify-between gap-4">
                      <span className="text-base font-medium text-[var(--color-ink)]">{item.question}</span>
                      <span className="faq-icon shrink-0 text-xl font-light text-[var(--color-ink-soft)]">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {/* Formulaire de devis */}
      <section id="devis" className="border-t border-[var(--color-line)] py-16 md:py-20">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <h2 className="text-xl font-semibold text-[var(--color-ink)]">Demander un devis pour ce service</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">Réponse sous 48h ouvrées.</p>
          <div className="mt-8">
            <DevisForm initialService={service.slug} />
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-xl font-semibold text-[var(--color-ink)]">Autres services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="panel panel-hover p-5">
              <PlaceholderMedia label="Photo" className="h-12 w-12" />
              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{s.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
