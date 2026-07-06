import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/icons";
import { services, site } from "@/lib/site";

const reassurance = [
  "Devis gratuit sous 48h",
  "Partenaire agréé Velux Expert",
  "Intervention rapide, y compris en dépannage",
  "Travaux garantis",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-20 text-center md:px-8 md:pb-24 md:pt-28">
        <p className="eyebrow mb-6 justify-center">Installateur de fenêtres de toit</p>
        <h1 className="balance text-4xl font-semibold leading-[1.15] text-[var(--color-ink)] md:text-6xl">
          Plus de lumière chez vous.
        </h1>
        <p className="balance mt-4 text-lg text-[var(--color-ink-soft)] md:text-xl">
          Installation et rénovation de fenêtres de toit par des artisans qualifiés.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-ink-soft)]">
          De l&rsquo;étude de faisabilité à la pose finale, {site.shortName} vous accompagne
          pour transformer vos combles avec une fenêtre de toit bien installée, bien isolée,
          durable.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Demander un devis gratuit
          </Link>
          <a href={site.phoneHref} className="btn btn-outline">
            {site.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Reassurance bar */}
      <section className="border-y border-[var(--color-line)]">
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 text-sm text-[var(--color-ink)] md:grid-cols-4 md:px-8">
          {reassurance.map((item) => (
            <li key={item} className="text-center md:text-left">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
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
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-ink)]"
            >
              En savoir plus sur {site.shortName} <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-t border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading eyebrow="Nos prestations" bold="Un service complet," rest="de la pose neuve au dépannage." />
          <div className="mt-12 grid divide-y divide-[var(--color-line)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.slice(0, 3).map((service) => (
              <div key={service.slug} className="py-6 md:px-8 md:py-0 md:first:pl-0">
                <h3 className="text-base font-semibold text-[var(--color-ink)]">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{service.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Réalisations"
          bold="Des chantiers menés"
          rest="avec rigueur, du premier appel à la dernière finition."
        />
        <div className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex aspect-[4/3] items-center justify-center bg-white">
              <span className="text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">
                Photo à venir
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-ink)]">
            Voir nos réalisations <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
              Un projet de fenêtre de toit&nbsp;? Parlons-en.
            </h2>
            <p className="mt-2 text-sm text-white/60">Devis gratuit, réponse sous 48h.</p>
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
