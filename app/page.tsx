import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RoofWindowIllustration, CheckIcon, ArrowIcon } from "@/components/icons";
import { services, site } from "@/lib/site";

const reassurance = [
  "Devis gratuit sous 48h",
  "Pose soignée par des artisans qualifiés",
  "Intervention rapide, y compris en dépannage",
  "Travaux garantis",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:px-8 md:pb-24 md:pt-20">
          <div>
            <p className="eyebrow mb-4">Installateur de fenêtres de toit</p>
            <h1 className="balance text-4xl font-extrabold leading-[1.08] text-[var(--color-ink)] md:text-5xl">
              Plus de lumière chez vous.{" "}
              <span className="font-normal">
                Installation et rénovation de fenêtres de toit par des artisans qualifiés.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-[var(--color-ink-soft)]">
              De l&rsquo;étude de faisabilité à la pose finale, {site.shortName} vous accompagne
              pour transformer vos combles avec une fenêtre de toit bien installée, bien isolée,
              durable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <a href={site.phoneHref} className="btn btn-outline">
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center rounded-3xl bg-[var(--color-bg-subtle)] p-10 md:p-14">
            <RoofWindowIllustration className="h-56 w-56 text-[var(--color-accent-dark)] md:h-72 md:w-72" />
          </div>
        </div>
      </section>

      {/* Reassurance bar */}
      <section className="border-y border-[var(--color-line)] bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {reassurance.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-[var(--color-ink)]">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <SectionHeading
            bold="Un artisan à votre écoute."
            rest="Chaque projet de fenêtre de toit est différent — nous prenons le temps de comprendre le vôtre."
          />
          <div>
            <p className="text-base text-[var(--color-ink-soft)]">
              {site.name}{" "}
              intervient pour l&rsquo;installation, la rénovation et le dépannage de fenêtres de
              toit, avec le même souci du détail à chaque étape : étanchéité, finitions et respect
              des délais annoncés.
            </p>
            <Link
              href="/a-propos"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]"
            >
              En savoir plus sur {site.shortName} <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section-tinted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nos prestations"
            bold="Un service complet,"
            rest="de la pose neuve au dépannage."
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div key={service.slug} className="card card-hover p-6">
                <h3 className="text-base font-bold text-[var(--color-ink)]">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{service.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Réalisations"
          bold="Des chantiers menés"
          rest="avec rigueur, du premier appel à la dernière finition."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(["single", "twin", "dormer"] as const).map((variant) => (
            <div key={variant} className="card card-hover flex aspect-[4/3] items-center justify-center bg-[var(--color-bg-subtle)]">
              <RoofWindowIllustration variant={variant} className="h-20 w-20 text-[var(--color-accent-dark)]/70" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
            Voir nos réalisations <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="card flex flex-col items-start gap-6 bg-[var(--color-ink)] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="balance text-2xl font-extrabold md:text-3xl">
              Un projet de fenêtre de toit ? Parlons-en.
            </h2>
            <p className="mt-2 text-sm text-white/70">Devis gratuit, réponse sous 48h.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demander un devis
            </Link>
            <a href={site.phoneHref} className="btn btn-on-photo">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
