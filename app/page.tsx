import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon, PhoneIcon, QuoteIcon, ShieldIcon } from "@/components/icons";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { RoofDivider } from "@/components/RoofDivider";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { Magnetic } from "@/components/Magnetic";
import { services, site } from "@/lib/site";

const reassurance = [
  { icon: QuoteIcon, text: "Devis gratuit sous 48h" },
  { icon: CheckIcon, text: "Partenaire agréé Velux Expert" },
  { icon: PhoneIcon, text: "Dépannage rapide, urgences comprises" },
  { icon: ShieldIcon, text: "Travaux garantis dans la durée" },
];

const process = [
  {
    step: "01",
    title: "Prise de contact",
    text: "Vous décrivez votre projet par téléphone ou via le formulaire de devis.",
  },
  {
    step: "02",
    title: "Visite technique",
    text: "Un artisan se déplace pour évaluer la toiture, prendre les mesures et répondre à vos questions.",
  },
  {
    step: "03",
    title: "Devis détaillé",
    text: "Vous recevez un devis clair et chiffré, sans engagement, sous 48h ouvrées.",
  },
  {
    step: "04",
    title: "Installation soignée",
    text: "Pose, étanchéité et finitions, avec un contrôle qualité avant de quitter le chantier.",
  },
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
      <section style={{ background: "var(--color-hero)" }} className="grain relative overflow-hidden text-white">
        <svg
          viewBox="0 0 200 90"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:h-[58rem]"
        >
          <path
            d="M30 78 L55 20 L85 62 L112 32 L138 62 L165 45"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-glow) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
          <p className="eyebrow eyebrow-on-dark hero-fade mb-5 justify-center">Installateur de fenêtres de toit</p>
          <h1 className="balance text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
            <SplitWords text="Plus de lumière chez vous." startDelay={80} />
          </h1>
          <p
            className="hero-fade mx-auto mt-5 max-w-xl text-lg text-white/70"
            style={{ animationDelay: "260ms" }}
          >
            Installation et rénovation de fenêtres de toit par des artisans qualifiés.
          </p>
          <p
            className="hero-fade mx-auto mt-4 max-w-xl text-sm text-white/50"
            style={{ animationDelay: "380ms" }}
          >
            De la première visite technique à la dernière finition, {site.shortName}{" "}
            s&rsquo;occupe de tout : une fenêtre de toit bien posée, bien isolée, qui tient dans
            la durée.
          </p>
          <div className="hero-fade mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "500ms" }}>
            <Magnetic>
              <Link href="/devis" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
            </Magnetic>
            <Magnetic>
              <a href={site.phoneHref} className="btn btn-on-photo">
                {site.phoneDisplay}
              </a>
            </Magnetic>
          </div>
          <a
            href="https://www.velux.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Velux Expert, partenaire agréé (velux.ch, nouvel onglet)"
            className="hero-fade mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            style={{ animationDelay: "600ms" }}
          >
            <Image
              src="/logo/velux-expert-partenaire-agree.png"
              alt=""
              width={7000}
              height={1002}
              className="h-4 w-auto"
            />
            <span className="text-xs font-medium text-white/70">Partenaire agréé Velux Expert</span>
          </a>
        </div>
      </section>

      {/* Reassurance bar */}
      <section className="border-b border-[var(--color-line)]">
        <RoofDivider className="text-[var(--color-line)]" />
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
              rest="Chaque toiture a ses contraintes. On les étudie avant de sortir le premier outil."
            />
            <div>
              <p className="text-base text-[var(--color-ink-soft)]">
                {site.name}{" "}
                installe, rénove et dépanne des fenêtres de toit dans tout le canton de Vaud, avec
                le même soin à chaque étape : une étanchéité qui tient, des finitions propres et des
                délais tenus.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["Étanchéité", "Isolation", "Finitions soignées"].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink-soft)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Link href="/a-propos" className="link-underline mt-6 inline-flex items-center gap-2 text-sm">
                En savoir plus sur {site.shortName} <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Services teaser */}
      <section className="border-t border-[var(--color-line)] bg-[#f7f5f2] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Nos prestations" bold="Un service complet," rest="du remplacement au dépannage." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <Link href={`/services/${service.slug}`} className="panel panel-hover group block h-full overflow-hidden">
                  <PlaceholderMedia className="aspect-[4/3] w-full" />
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{service.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{service.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <Reveal>
        <section className="border-t border-[var(--color-line)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading eyebrow="Déroulement" bold="Comment ça se passe," rest="du premier contact à la pose." />
            <div className="relative mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-line)] md:block" />
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 110}>
                  <div className="relative">
                    <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] text-sm font-bold text-[var(--color-accent)]">
                      {item.step}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Pourquoi nous choisir */}
      <section className="section-dark grain">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="Pourquoi nous choisir" bold="Un partenaire de confiance," rest="pas juste un installateur." onDark />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="Réalisations"
            bold="Des chantiers menés"
            rest="avec rigueur, du premier appel à la dernière finition."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <PlaceholderMedia key={i} className="aspect-[4/3] w-full border-none" />
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
        <section className="section-dark grain">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
                Une idée de projet&nbsp;? Parlons-en sans engagement.
              </h2>
              <p className="mt-2 text-sm text-white/60">Visite technique, devis chiffré sous 48h.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/devis" className="btn btn-primary">
                  Obtenir mon devis
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={site.phoneHref} className="btn btn-on-photo">
                  {site.phoneDisplay}
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
