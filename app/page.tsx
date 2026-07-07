import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/icons";
import { HeroArt } from "@/components/HeroArt";
import { SkylightIllustration } from "@/components/SkylightIllustration";
import { Reveal } from "@/components/Reveal";
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
      <section style={{ background: "var(--color-hero)" }} className="overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-16 md:grid-cols-2 md:items-center md:px-8 md:pb-24 md:pt-20">
          <div>
            <p className="eyebrow eyebrow-on-dark hero-fade mb-5">Installateur de fenêtres de toit</p>
            <h1
              className="balance hero-fade text-4xl font-semibold leading-[1.1] text-white md:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Plus de lumière chez vous.
            </h1>
            <p
              className="hero-fade mt-5 max-w-md text-lg text-white/70"
              style={{ animationDelay: "260ms" }}
            >
              Installation et rénovation de fenêtres de toit par des artisans qualifiés.
            </p>
            <p
              className="hero-fade mt-4 max-w-md text-sm text-white/50"
              style={{ animationDelay: "380ms" }}
            >
              De l&rsquo;étude de faisabilité à la pose finale, {site.shortName} vous accompagne
              pour transformer vos combles avec une fenêtre de toit bien installée, bien isolée,
              durable.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-3" style={{ animationDelay: "500ms" }}>
              <Link href="/contact" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <a href={site.phoneHref} className="btn btn-on-photo">
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="hero-fade" style={{ animationDelay: "200ms" }}>
            <HeroArt className="mx-auto w-full max-w-md" />
          </div>
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
      <Reveal>
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
              <Link href="/a-propos" className="link-underline mt-5 inline-flex items-center gap-2 text-sm">
                En savoir plus sur {site.shortName} <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Services teaser */}
      <Reveal>
        <section className="border-t border-[var(--color-line)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading eyebrow="Nos prestations" bold="Un service complet," rest="de la pose neuve au dépannage." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.slice(0, 3).map((service, i) => (
                <div key={service.slug} className="panel panel-hover p-6">
                  <SkylightIllustration
                    variant={i === 0 ? "single" : i === 1 ? "twin" : "dormer"}
                    className="h-16 w-16"
                  />
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{service.title}</h3>
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
      </Reveal>

      {/* Portfolio teaser */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="Réalisations"
            bold="Des chantiers menés"
            rest="avec rigueur, du premier appel à la dernière finition."
          />
          <div className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-3">
            {(["single", "twin", "dormer"] as const).map((variant) => (
              <div key={variant} className="flex aspect-[4/3] items-center justify-center bg-white">
                <SkylightIllustration variant={variant} className="h-20 w-20 opacity-70" />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/portfolio" className="link-underline inline-flex items-center gap-2 text-sm">
              Voir nos réalisations <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Final CTA */}
      <Reveal>
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
      </Reveal>
    </>
  );
}
