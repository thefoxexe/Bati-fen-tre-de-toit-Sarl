import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RoofWindowIllustration } from "@/components/icons";
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
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">À propos</p>
            <h1 className="balance text-4xl font-extrabold leading-tight text-[var(--color-ink)] md:text-5xl">
              L&rsquo;installation de fenêtres de toit,{" "}
              <span className="font-normal">un métier de précision.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-[var(--color-ink-soft)]">
              {site.name}{" "}
              accompagne les particuliers dans leurs projets de fenêtres de toit : installation
              neuve, remplacement, volets et dépannage. Notre approche : comprendre votre projet,
              vous conseiller sur le bon modèle, et livrer un travail soigné, du premier
              rendez-vous à la dernière finition.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[var(--color-bg-subtle)] p-10 md:p-14">
            <RoofWindowIllustration className="h-56 w-56 text-[var(--color-accent-dark)]" />
          </div>
        </div>
      </section>

      <section className="section-tinted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading bold="Nos valeurs," rest="au cœur de chaque chantier." center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <h3 className="text-base font-bold text-[var(--color-ink)]">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="balance text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
              Zone d&rsquo;intervention
            </h2>
            <p className="mt-2 max-w-md text-sm text-[var(--color-ink-soft)]">
              Contactez-nous avec votre localité : nous vous confirmons rapidement si votre projet
              se trouve dans notre zone d&rsquo;intervention.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
