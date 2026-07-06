import type { Metadata } from "next";
import Link from "next/link";
import { RoofWindowIllustration } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations",
  description: `Exemples de chantiers de ${site.shortName} : installation, rénovation et pose de fenêtres de toit.`,
};

const placeholderProjects = [
  { title: "Installation neuve", context: "Combles aménagés" },
  { title: "Remplacement de fenêtre de toit", context: "Rénovation villa" },
  { title: "Pose de volet roulant", context: "Fenêtre de toit existante" },
  { title: "Étanchéité & finitions", context: "Reprise après sinistre" },
  { title: "Dépannage", context: "Remplacement de vitrage" },
  { title: "Installation neuve", context: "Chambre sous toiture" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow mb-4">Réalisations</p>
        <h1 className="balance max-w-2xl text-4xl font-extrabold leading-tight text-[var(--color-ink)] md:text-5xl">
          Nos chantiers, <span className="font-normal">en images.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="card flex flex-col items-start gap-4 border-dashed p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-[var(--color-ink-soft)]">
            Cette galerie attend vos photos de chantier. Les cartes ci-dessous sont des gabarits de
            mise en page — envoyez-nous vos photos avant/après pour les remplacer.
          </p>
          <Link href="/contact" className="btn btn-outline btn-sm shrink-0">
            Envoyer des photos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="flex aspect-[4/3] items-center justify-center bg-[var(--color-bg-subtle)]">
                <RoofWindowIllustration className="h-16 w-16 text-[var(--color-accent-dark)]/60" />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-[var(--color-ink)]">{project.title}</p>
                <p className="text-xs text-[var(--color-ink-soft)]">{project.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
