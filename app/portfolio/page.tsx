import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Réalisations",
  description: `Exemples de chantiers de ${site.shortName} : installation, rénovation et pose de fenêtres de toit.`,
  alternates: { canonical: "/portfolio" },
};

const placeholderProjects = [
  { title: "Installation neuve", context: "Combles aménagés", variant: "single" },
  { title: "Remplacement de fenêtre de toit", context: "Rénovation villa", variant: "twin" },
  { title: "Pose de volet roulant", context: "Fenêtre de toit existante", variant: "dormer" },
  { title: "Étanchéité & finitions", context: "Reprise après sinistre", variant: "twin" },
  { title: "Dépannage", context: "Remplacement de vitrage", variant: "single" },
  { title: "Installation neuve", context: "Chambre sous toiture", variant: "dormer" },
] as const;

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <p className="eyebrow mb-4">Réalisations</p>
        <h1 className="balance max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          Nos chantiers, <span className="font-normal text-[var(--color-ink-soft)]">en images.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-8 md:px-8">
        <div className="flex flex-col items-start gap-4 border border-[var(--color-line)] p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-[var(--color-ink-soft)]">
            Cette galerie de chantiers récents est en cours de constitution. Pour des exemples
            correspondant à votre projet, contactez-nous directement.
          </p>
          <Link href="/contact" className="btn btn-outline btn-sm shrink-0">
            Nous contacter
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <div className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div className="bg-white transition-transform duration-300 hover:-translate-y-1">
                <PlaceholderMedia label="Photo à venir" className="aspect-[4/3] w-full border-x-0 border-t-0" />
                <div className="p-5">
                  <p className="text-sm font-medium text-[var(--color-ink)]">{project.title}</p>
                  <p className="text-xs text-[var(--color-ink-soft)]">{project.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
