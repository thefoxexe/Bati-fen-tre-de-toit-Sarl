import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon, PhoneIcon, QuoteIcon, ShieldIcon } from "@/components/icons";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { RoofDivider } from "@/components/RoofDivider";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { Magnetic } from "@/components/Magnetic";
import { StatCounter } from "@/components/StatCounter";
import { services, serviceAreas, site } from "@/lib/site";

const stats = [
  { value: new Date().getFullYear() - site.experienceSinceYear, suffix: "+", label: "ans d'expérience terrain" },
  { value: serviceAreas.length, suffix: "", label: "villes couvertes dans le canton de Vaud" },
  { value: 100, suffix: "%", label: "devis gratuits, sans engagement" },
];

const reassurance = [
  { icon: QuoteIcon, text: "Devis gratuit" },
  { icon: CheckIcon, text: "Partenaire agréé Velux Expert" },
  { icon: PhoneIcon, text: "Dépannage rapide, urgences comprises" },
  { icon: ShieldIcon, text: "Garantie sur la pose et l'étanchéité" },
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
    text: "Vous recevez un devis clair et chiffré, sans engagement.",
  },
  {
    step: "04",
    title: "Installation soignée",
    text: "Pose, étanchéité et finitions, avec un contrôle qualité avant de quitter le chantier.",
  },
];

const whyUs = [
  { title: "Partenaire Velux Expert", text: "Un agrément qui garantit une pose conforme aux standards du fabricant." },
  { title: "Rapidité d'intervention", text: "Le téléphone décroché, une visite planifiée sous quelques jours, une urgence traitée en priorité." },
  { title: "Devis gratuit", text: "Une visite technique et un devis détaillé, sans engagement." },
  { title: "Travaux garantis", text: "Un problème après la pose ? Nous revenons le régler, sans discussion." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed photo instead of a split text/image layout */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden text-white md:items-center">
        <Image
          src="/photos/fenetre-de-toit-velux-salon-lumineux.jpg"
          alt="Fenêtres de toit Velux ouvertes dans un salon lumineux, vue sur les arbres"
          fill
          priority
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 text-center md:px-8 md:pb-28 md:pt-32 md:text-left">
          <p className="eyebrow hero-fade mb-5 justify-center text-white/90 md:justify-start">
            Installateur de fenêtres de toit
          </p>
          <h1 className="balance text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
            <SplitWords text="Plus de lumière chez vous." startDelay={80} />
          </h1>
          <p
            className="hero-fade mx-auto mt-5 max-w-xl text-lg text-white/85 md:mx-0"
            style={{ animationDelay: "260ms" }}
          >
            Remplacement, installation et entretien de fenêtres de toit Velux, dans tout le canton de Vaud.
          </p>
          <p
            className="hero-fade mx-auto mt-4 max-w-xl text-sm text-white/70 md:mx-0"
            style={{ animationDelay: "380ms" }}
          >
            Devis gratuit, visite technique sur place et pose soignée : {site.shortName}{" "}
            s&rsquo;occupe de votre projet du premier appel à la dernière finition.
          </p>
          <div
            className="hero-fade mt-9 flex flex-wrap justify-center gap-3 md:justify-start"
            style={{ animationDelay: "500ms" }}
          >
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
            className="hero-fade mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 shadow-lg transition hover:shadow-xl"
            style={{ animationDelay: "600ms" }}
          >
            <Image
              src="/logo/velux-expert-partenaire-agree.png"
              alt=""
              width={7000}
              height={1002}
              className="h-4 w-auto"
            />
            <span className="text-xs font-medium text-[var(--color-ink-soft)]">Partenaire agréé Velux Expert</span>
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

      {/* Chiffres clés — the "décompte" the client liked on the agency's own site */}
      <Reveal>
        <section className="border-b border-[var(--color-line)] py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 sm:grid-cols-4 md:px-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="text-center">
                <p className="text-3xl font-extrabold text-[var(--color-accent)] md:text-4xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium text-[var(--color-ink-soft)] md:text-sm">{stat.label}</p>
              </Reveal>
            ))}
            <Reveal delay={stats.length * 90} className="text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-medium text-[var(--color-ink-soft)] md:text-sm">
                Partenaire agréé Velux Expert
              </p>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* About teaser */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionHeading
              bold="Chaque toiture a ses contraintes."
              rest="On les étudie avant de sortir le premier outil."
            />
            <div>
              <p className="text-base text-[var(--color-ink-soft)]">
                {site.name}{" "}
                installe, rénove et dépanne des fenêtres de toit dans tout le canton de Vaud. Une
                toiture inclinée, une toiture plate, un bâti ancien ou une extension récente : la
                pose change à chaque fois, la rigueur non.
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
                  {service.heroImage ? (
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      width={service.heroImage.width}
                      height={service.heroImage.height}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderMedia className="aspect-[4/3] w-full" />
                  )}
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
      <section className="section-accent grain">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="Pourquoi nous choisir" bold="On reste après la pose," rest="pas seulement le temps du chantier." onDark />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 transition hover:border-white/25 hover:bg-white/15">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{item.text}</p>
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
        <section className="section-accent grain">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <h2 className="balance text-2xl font-semibold text-white md:text-3xl">
                Une idée de projet&nbsp;? Parlons-en sans engagement.
              </h2>
              <p className="mt-2 text-sm text-white/70">Visite technique, devis chiffré, sans engagement.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/devis" className="btn btn-on-accent">
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
