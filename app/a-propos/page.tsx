import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `${site.name} : installateur Velux agréé à ${site.address.city}, canton de Vaud. Découvrez notre savoir-faire et nos valeurs.`,
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Sérieux & précision",
    text: "Une pose soignée, des finitions propres et une étanchéité durable — sur chaque chantier, sans exception.",
  },
  {
    title: "Proximité & réactivité",
    text: "Un interlocuteur unique du premier appel à la remise des clés, disponible pour répondre à vos questions.",
  },
  {
    title: "Travail garanti",
    text: "Nous nous tenons responsables de la qualité de nos installations après la fin du chantier.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-16 text-center md:px-8 md:pb-24 md:pt-24">
        <PlaceholderMedia label="Photo de l'équipe" className="mx-auto h-24 w-24 rounded-full" />
        <p className="eyebrow mb-6 mt-6 justify-center">À propos</p>
        <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          L&rsquo;installation de fenêtres de toit, un métier de précision.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[var(--color-ink-soft)]">
          {site.name}{" "}
          accompagne les particuliers dans leurs projets de fenêtres de toit : remplacement,
          stores Velux, entretien et dépannage. Notre approche : comprendre votre projet,
          vous conseiller sur le bon modèle, et livrer un travail soigné, du premier
          rendez-vous à la dernière finition.
        </p>
        <a
          href="https://www.velux.ch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Velux Expert — velux.ch (nouvel onglet)"
          className="mt-6 inline-flex items-center border border-[var(--color-line)] px-4 py-2.5 transition hover:border-[var(--color-accent)]"
        >
          <Image src="/velux-expert.png" alt="Velux Expert" width={3235} height={463} className="h-5 w-auto" />
        </a>
      </section>

      <Reveal>
        <section className="border-t border-[var(--color-line)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading bold="Nos valeurs," rest="au cœur de chaque chantier." />
            <div className="mt-12 grid divide-y divide-[var(--color-line)] md:grid-cols-3 md:divide-x md:divide-y-0">
              {values.map((value) => (
                <div key={value.title} className="py-6 md:px-8 md:py-0 md:first:pl-0">
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-dark grain">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
                  Zone d&rsquo;intervention
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/60">
                  Basés dans le canton de Vaud, nous intervenons notamment à :
                </p>
              </div>
              <Magnetic>
                <Link href="/contact" className="btn btn-primary shrink-0">
                  Nous contacter
                </Link>
              </Magnetic>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {serviceAreas.map((city) => (
                <li key={city} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80">
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/50">
              Votre commune n&rsquo;apparaît pas dans la liste ? Contactez-nous, nous intervenons
              plus largement dans la région.
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
