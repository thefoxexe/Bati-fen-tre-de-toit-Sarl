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

const lightBenefits = [
  {
    title: "Un bienfait pour la santé",
    text: "La lumière naturelle aide à réguler le rythme circadien, réduit le stress et améliore l'humeur au quotidien.",
  },
  {
    title: "Conçues pour en profiter",
    text: "Les fenêtres de toit Velux apportent un maximum de lumière naturelle, dans une large gamme de dimensions et de styles.",
  },
  {
    title: "Un accompagnement de A à Z",
    text: "De l'étude de votre comble à la pose finale, nous vous conseillons le modèle le plus adapté à votre intérieur.",
  },
];

const values = [
  {
    title: "Sérieux & précision",
    text: "Une pose soignée, des finitions propres et une étanchéité durable, sur chaque chantier, sans exception.",
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
          Basée à {site.address.city}, dans le canton de Vaud, {site.name}{" "}
          accompagne les particuliers dans leurs projets de fenêtres de toit : remplacement,
          stores Velux, entretien et dépannage. Spécialisé dans l&rsquo;installation de fenêtres de
          toit depuis {site.experienceSinceYear}, Hasan Bati a fondé l&rsquo;entreprise en{" "}
          {site.foundedYear} pour en faire un partenaire de confiance en Suisse Romande. Notre
          approche : comprendre votre projet, vous conseiller sur le bon modèle, et livrer un
          travail soigné, du premier rendez-vous à la dernière finition.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center border border-[var(--color-line)] px-4 py-2.5 text-sm font-medium text-[var(--color-ink)]">
            Expérience depuis {site.experienceSinceYear}
          </span>
          <span className="inline-flex items-center border border-[var(--color-line)] px-4 py-2.5 text-sm font-medium text-[var(--color-ink)]">
            Entreprise depuis {site.foundedYear}
          </span>
          <a
            href="https://www.velux.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Velux Expert (velux.ch, nouvel onglet)"
            className="inline-flex items-center border border-[var(--color-line)] px-4 py-2.5 transition hover:border-[var(--color-accent)]"
          >
            <Image
              src="/logo/velux-expert-partenaire-agree.png"
              alt="Velux Expert, partenaire agréé"
              width={7000}
              height={1002}
              className="h-5 w-auto"
            />
          </a>
        </div>
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
        <section className="border-t border-[var(--color-line)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading eyebrow="Pourquoi la lumière naturelle" bold="Plus qu'un confort," rest="un vrai bienfait au quotidien." />
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {lightBenefits.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.text}</p>
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
