import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez ${site.name}, votre installateur de fenêtres de toit.`,
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
        <p className="eyebrow mb-6 justify-center">À propos</p>
        <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          L&rsquo;installation de fenêtres de toit, un métier de précision.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[var(--color-ink-soft)]">
          {site.name}{" "}
          accompagne les particuliers dans leurs projets de fenêtres de toit : installation
          neuve, remplacement, volets et dépannage. Notre approche : comprendre votre projet,
          vous conseiller sur le bon modèle, et livrer un travail soigné, du premier
          rendez-vous à la dernière finition.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Partenaire agréé Velux Expert
        </p>
      </section>

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

      <section className="section-dark">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
              Zone d&rsquo;intervention
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Basés dans le canton de Vaud, nous intervenons à Lausanne et dans la région.
              Contactez-nous avec votre localité pour confirmer rapidement votre éligibilité.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
