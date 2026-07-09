import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données du site ${site.shortName}.`,
};

const sections = [
  {
    title: "Localisation et sécurité de vos données",
    body: (
      <p>
        Vos données sont principalement stockées en Suisse ou dans l&rsquo;Union européenne. Si,
        pour des raisons techniques, elles venaient à être transférées vers des pays tiers (comme
        les États-Unis), nous nous assurons que des garanties appropriées existent (par exemple,
        un niveau de protection reconnu par le Conseil fédéral suisse, les clauses contractuelles
        types de la Commission européenne ou la certification Data Privacy Framework) pour
        assurer un niveau de protection équivalent.
      </p>
    ),
  },
  {
    title: "Durée de conservation de vos données",
    body: (
      <>
        <p>
          Nous conservons vos données uniquement le temps nécessaire aux finalités pour
          lesquelles elles ont été collectées :
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Données clients/prospects : 3 ans après le dernier contact commercial ou la fin de la
            relation contractuelle, sauf obligations légales (ex. facturation).
          </li>
          <li>Données de navigation/cookies : 13 mois maximum.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Quels sont vos droits ?",
    body: (
      <>
        <p>
          Conformément à la LPD suisse et, le cas échéant, au RGPD, vous disposez des droits
          suivants concernant vos données :
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[var(--color-ink)]">Droit d&rsquo;accès</strong> : demander
            une copie des données que nous détenons sur vous.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit de rectification</strong> :
            demander la correction de données inexactes ou incomplètes.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit d&rsquo;effacement</strong> (droit
            à l&rsquo;oubli) : demander la suppression de vos données, sous certaines conditions.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit à la limitation du traitement</strong>{" "}
            : demander la suspension temporaire du traitement de vos données.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit d&rsquo;opposition</strong> : vous
            opposer au traitement de vos données pour des raisons légitimes.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit à la portabilité</strong> : recevoir
            vos données dans un format structuré et lisible par machine pour les transférer à un
            autre responsable de traitement.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">Droit de retirer votre consentement</strong>{" "}
            : à tout moment, si le traitement est basé sur votre consentement.
          </li>
        </ul>
        <p className="mt-3">
          Pour exercer ces droits, vous pouvez nous contacter à l&rsquo;adresse e-mail ou postale
          mentionnée dans nos{" "}
          <a href="/mentions-legales" className="link-underline">
            mentions légales
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Droit de réclamation",
    body: (
      <p>
        Si vous estimez que la protection de vos données n&rsquo;est pas assurée, vous avez le
        droit d&rsquo;introduire une réclamation auprès de l&rsquo;autorité de contrôle suisse
        compétente : le Préposé fédéral à la protection des données et à la transparence (PFPDT),{" "}
        <a
          href="https://www.edoeb.admin.ch/edoeb/fr/home.html"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          edoeb.admin.ch
        </a>
        .
      </p>
    ),
  },
  {
    title: "Modifications de cette politique de confidentialité",
    body: (
      <p>
        Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications
        prendront effet immédiatement après leur publication sur le site web. Nous vous encourageons
        à consulter régulièrement cette page pour prendre connaissance de la dernière version.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow mb-4">Vie privée</p>
      <h1 className="balance text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
        Politique de confidentialité
      </h1>
      <p className="mt-5 text-sm text-[var(--color-ink-soft)]">
        {site.name}
        {" "}attache une grande importance à la protection de vos données personnelles. Cette
        page explique comment vos données sont conservées et quels droits vous pouvez faire
        valoir, conformément à la loi suisse sur la protection des données (LPD) et, le cas
        échéant, au RGPD.
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
