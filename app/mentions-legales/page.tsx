import type { Metadata } from "next";
import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.shortName}.`,
  alternates: { canonical: "/mentions-legales" },
};

const sections = [
  {
    title: "Propriété intellectuelle",
    body: (
      <p>
        L&rsquo;ensemble du contenu présent sur le site de {site.name}, incluant, de manière non
        limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et
        icônes ainsi que leur mise en forme sont la propriété exclusive de la société {site.name}{" "}
        à l&rsquo;exception des marques, logos ou contenus appartenant à d&rsquo;autres sociétés
        partenaires ou auteurs.
        <br />
        <br />
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
        même partielle, de ces différents éléments est strictement interdite sans l&rsquo;accord
        exprès par écrit de {site.name}.
      </p>
    ),
  },
  {
    title: "Limitation de responsabilité",
    body: (
      <p>
        {site.name}
        {" "}s&rsquo;efforce d&rsquo;assurer au mieux de ses possibilités, l&rsquo;exactitude et
        la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de
        corriger, à tout moment et sans préavis, le contenu. Toutefois,{" "}
        {site.name}
        {" "}ne peut garantir l&rsquo;exactitude, la précision ou l&rsquo;exhaustivité des
        informations mises à la disposition sur ce site.
        <br />
        <br />
        L&rsquo;utilisateur utilise le site à ses risques et périls. La société ne saurait être
        tenue pour responsable de dommages directs ou indirects, de quelque nature que ce soit,
        résultant de l&rsquo;accès ou de l&rsquo;utilisation du site.
      </p>
    ),
  },
  {
    title: "Droit applicable et juridiction compétente",
    body: (
      <p>
        Le présent site est soumis au droit suisse. Tout litige en relation avec
        l&rsquo;utilisation du site {site.name}
        {" "}est soumis à la compétence exclusive des tribunaux ordinaires du canton de Vaud, en
        Suisse.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow mb-4">Informations légales</p>
      <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
        Mentions légales
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        Conformément aux dispositions légales suisses (Code des obligations, Loi sur le commerce
        électronique, etc.), vous trouverez ci-dessous les informations relatives à
        l&rsquo;éditeur, à la réalisation et à l&rsquo;hébergeur du site{" "}
        {site.url.replace("https://www.", "")}.
      </p>

      {/* Éditeur — key facts as a business-card panel rather than a wall of text */}
      <div className="panel mt-12 rounded-2xl p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">
          Éditeur du site (responsable du contenu)
        </p>
        <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
          {site.name}
        </p>
        <p className="text-sm text-[var(--color-ink-soft)]">
          Société à responsabilité limitée ({site.legalForm})
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="flex gap-3">
            <UserIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            <div className="text-sm text-[var(--color-ink-soft)]">
              <p className="font-semibold text-[var(--color-ink)]">Représentant légal / Gérant</p>
              <p>{site.manager}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            <div className="text-sm text-[var(--color-ink-soft)]">
              <p className="font-semibold text-[var(--color-ink)]">Contact</p>
              <p>{site.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            <div className="text-sm text-[var(--color-ink-soft)]">
              <p className="font-semibold text-[var(--color-ink)]">Téléphone</p>
              <p>{site.phoneDisplay}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-[var(--color-accent)]" />
            <div className="text-sm text-[var(--color-ink-soft)]">
              <p className="font-semibold text-[var(--color-ink)]">Siège social</p>
              <p>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}, {site.address.country}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-[var(--color-line)] pt-5 text-sm text-[var(--color-ink-soft)]">
          Le contenu et les droits sur ce site appartiennent à {site.name}. Sa conception, sa
          réalisation graphique et sa maintenance technique sont en revanche assurées par Webalp
          (voir « Hébergement » ci-dessous), le prestataire à contacter pour toute modification
          technique du site.
        </p>
      </div>

      {/* Hébergement */}
      <div className="mt-12">
        <div className="flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] text-sm font-bold text-[var(--color-accent)]">
            1
          </span>
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Hébergement &amp; nom de domaine</h2>
        </div>
        <div className="mt-4 grid gap-5 pl-[52px] sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-line)] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">Hébergeur</p>
            <p className="mt-2 font-semibold text-[var(--color-ink)]">Webalp</p>
            <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
              Rue de la Jonction
              <br />
              1950 Sion, Suisse
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-line)] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">
              Nom de domaine {site.url.replace("https://www.", "")}
            </p>
            <p className="mt-2 font-semibold text-[var(--color-ink)]">Infomaniak Network SA</p>
            <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
              Rue Eugène-Marziano 25
              <br />
              1227 Les Acacias (Genève), Suisse
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((section, i) => (
          <div key={section.title} className="border-t border-[var(--color-line)] pt-8">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] text-sm font-bold text-[var(--color-accent)]">
                {i + 2}
              </span>
              <h2 className="text-lg font-semibold text-[var(--color-ink)]">{section.title}</h2>
            </div>
            <div className="mt-4 pl-[52px] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              {section.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
