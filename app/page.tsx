import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon, PhoneIcon, QuoteIcon, ShieldIcon } from "@/components/icons";
import { HeroArt } from "@/components/HeroArt";
import { SkylightIllustration } from "@/components/SkylightIllustration";
import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site";

const reassurance = [
  { icon: QuoteIcon, text: "Devis gratuit sous 48h" },
  { icon: CheckIcon, text: "Partenaire agréé Velux Expert" },
  { icon: PhoneIcon, text: "Dépannage rapide, urgences comprises" },
  { icon: ShieldIcon, text: "Travaux garantis dans la durée" },
];

const whyUs = [
  { title: "Partenaire Velux Expert", text: "Un agrément qui garantit une pose conforme aux standards du fabricant." },
  { title: "Rapidité d'intervention", text: "Réponse sous 48h, intervention rapide y compris pour les urgences." },
  { title: "Devis gratuit", text: "Une visite technique et un devis détaillé, sans engagement." },
  { title: "Travaux garantis", text: "Nous restons responsables de la qualité de nos installations dans la durée." },
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
              De la première visite technique à la dernière finition, {site.shortName}{" "}
              s&rsquo;occupe de tout : une fenêtre de toit bien posée, bien isolée, qui tient dans
              la durée.
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
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-8 text-sm font-medium text-[var(--color-ink)] md:grid-cols-4 md:px-8">
          {reassurance.map((item) => (
            <li key={item.text} className="flex flex-col items-center gap-2 text-center md:flex-row md:items-start md:text-left">
              <item.icon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              {item.text}
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
              rest="Chaque toiture a ses contraintes — on les étudie avant de sortir le premier outil."
            />
            <div>
              <p className="text-base text-[var(--color-ink-soft)]">
                {site.name}{" "}
                installe, rénove et dépanne des fenêtres de toit dans tout le canton de Vaud, avec
                le même soin à chaque étape : une étanchéité qui tient, des finitions propres et des
                délais tenus.
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
            <SectionHeading eyebrow="Nos prestations" bold="Un service complet," rest="du remplacement au dépannage." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="panel panel-hover group p-6">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent)]/[0.06] transition group-hover:bg-[var(--color-accent)]/[0.1]">
                    <SkylightIllustration
                      variant={service.variant}
                      className="h-11 w-11 transition duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{service.summary}</p>
                </Link>
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

      {/* Pourquoi nous choisir */}
      <Reveal>
        <section className="section-dark">
          <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
            <SectionHeading eyebrow="Pourquoi nous choisir" bold="Un partenaire de confiance," rest="pas juste un installateur." onDark />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{item.text}</p>
                  </div>
                </div>
              ))}
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
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] md:grid-cols-3">
            {(["single", "twin", "dormer"] as const).map((variant) => (
              <div
                key={variant}
                className="group flex aspect-[4/3] items-center justify-center bg-white transition-colors hover:bg-[var(--color-accent)]/[0.04]"
              >
                <SkylightIllustration
                  variant={variant}
                  className="h-24 w-24 transition duration-300 group-hover:scale-105"
                />
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
