import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { SunIcon, HomeIcon, UserIcon, ShieldIcon, PhoneIcon, CheckIcon } from "@/components/icons";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `${site.name} : installateur Velux agréé à ${site.address.city}, canton de Vaud. Depuis ${site.experienceSinceYear}, la même méthode : étudier la toiture avant de proposer un modèle.`,
  alternates: { canonical: "/a-propos" },
};

const lightBenefits = [
  {
    title: "Un vrai effet sur le sommeil",
    text: "La lumière naturelle règle l'horloge interne. Une pièce sous toiture bien éclairée se ressent dès les premiers jours.",
    icon: SunIcon,
  },
  {
    title: "Une gamme large, un choix précis",
    text: "Velux décline ses fenêtres de toit en de nombreuses tailles et finitions : on choisit celle qui correspond à votre comble, pas l'inverse.",
    icon: HomeIcon,
  },
  {
    title: "Un conseil avant la vente",
    text: "L'étude de votre toiture précède toujours le choix du modèle, jamais l'inverse.",
    icon: UserIcon,
  },
];

const values = [
  {
    title: "Précision",
    text: "Un raccord d'étanchéité mal repris se voit à la première pluie. On ne quitte pas un chantier sur ce doute.",
    icon: ShieldIcon,
  },
  {
    title: "Un seul interlocuteur",
    text: "La même personne répond au téléphone, établit le devis et monte sur le toit, du premier appel à la remise des clés.",
    icon: PhoneIcon,
  },
  {
    title: "Travail garanti",
    text: "Un problème après notre passage reste notre problème, pas le vôtre.",
    icon: CheckIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-16 text-center md:px-8 md:pb-24 md:pt-24">
        <p className="eyebrow mb-6 justify-center">À propos</p>
        <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          Une fenêtre de toit mal posée, ça se voit. Et ça se sent au premier hiver.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[var(--color-ink-soft)]">
          Hasan Bati pose des fenêtres de toit depuis {site.experienceSinceYear}. Il fonde{" "}
          {site.name} en {site.foundedYear}, à {site.address.city}, dans le canton de Vaud :
          remplacement, stores Velux, entretien et dépannage. La méthode n&rsquo;a pas changé
          depuis le premier chantier : comprendre la toiture avant de proposer un modèle, et ne
          quitter les lieux qu&rsquo;une fois l&rsquo;étanchéité vérifiée.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[var(--color-line)] px-4 py-2.5 text-sm font-medium text-[var(--color-ink)]">
            Expérience depuis {site.experienceSinceYear}
          </span>
          <span className="inline-flex items-center rounded-full border border-[var(--color-line)] px-4 py-2.5 text-sm font-medium text-[var(--color-ink)]">
            Entreprise depuis {site.foundedYear}
          </span>
          <a
            href="https://www.velux.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Velux Expert (velux.ch, nouvel onglet)"
            className="inline-flex items-center rounded-full border border-[var(--color-line)] px-6 py-2.5 transition hover:border-[var(--color-accent)]"
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
        <section className="border-t border-[var(--color-line)] bg-[#f7f5f2] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading bold="Trois principes," rest="qui ne changent pas d'un chantier à l'autre." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="panel p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{value.title}</h3>
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
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {lightBenefits.map((item) => (
                <div key={item.title} className="panel p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-accent grain">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
                  Zone d&rsquo;intervention
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/70">
                  Basés dans le canton de Vaud, nous intervenons notamment à :
                </p>
              </div>
              <Magnetic>
                <Link href="/contact" className="btn btn-on-accent shrink-0">
                  Nous contacter
                </Link>
              </Magnetic>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {serviceAreas.map((city) => (
                <li key={city} className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white/90">
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/70">
              Votre commune n&rsquo;apparaît pas dans la liste ? Contactez-nous, nous intervenons
              plus largement dans la région.
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
