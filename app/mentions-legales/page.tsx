import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.shortName}.`,
};

const sections = [
  {
    title: "1. Éditeur du site (responsable du contenu)",
    body: (
      <>
        <p>Le présent site web est édité par :</p>
        <p className="mt-3 font-semibold text-[var(--color-ink)]">
          {site.name}
          <br />
          Société à responsabilité limitée ({site.legalForm})
        </p>
        <p className="mt-3">
          Siège social :
          <br />
          {site.address.street}
          <br />
          {site.address.postalCode} {site.address.city}
          <br />
          {site.address.country}
        </p>
        <p className="mt-3">
          Contact :
          <br />
          E-mail : {site.email}
          <br />
          Téléphone : {site.phoneDisplay}
        </p>
        <p className="mt-3">
          Représentant légal / Gérant : {site.manager}
        </p>
      </>
    ),
  },
  {
    title: "2. Hébergement",
    body: (
      <>
        <p>L&rsquo;hébergement du site internet est assuré par :</p>
        <p className="mt-3 font-semibold text-[var(--color-ink)]">Webalp</p>
        <p className="mt-1">
          Rue de la Jonction
          <br />
          1950 Sion
          <br />
          Suisse
        </p>
        <p className="mt-4">
          Le nom de domaine {site.url.replace("https://www.", "")} est enregistré auprès de :
        </p>
        <p className="mt-3 font-semibold text-[var(--color-ink)]">Infomaniak Network SA</p>
        <p className="mt-1">
          Rue Eugène-Marziano 25
          <br />
          1227 Les Acacias (Genève)
          <br />
          Suisse
        </p>
      </>
    ),
  },
  {
    title: "3. Propriété intellectuelle",
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
    title: "4. Limitation de responsabilité",
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
    title: "5. Droit applicable et juridiction compétente",
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
      <p className="mt-5 text-sm text-[var(--color-ink-soft)]">
        Conformément aux dispositions légales suisses (Code des obligations, Loi sur le commerce
        électronique, etc.), vous trouverez ci-dessous les informations relatives à
        l&rsquo;éditeur et à l&rsquo;hébergeur du site {site.url.replace("https://www.", "")}.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <div key={section.title} className="border-t border-[var(--color-line)] pt-8">
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">{section.title}</h2>
            <div className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {section.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
