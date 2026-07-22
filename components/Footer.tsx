import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-[var(--color-ink-soft)]">{site.tagline}</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bati Fenêtre de Toit sur Instagram (nouvel onglet)"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-soft)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">Contact</p>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
            <a href={site.phoneHref} className="hover:text-[var(--color-accent)]">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">
            <a href={`mailto:${site.email}`} className="hover:text-[var(--color-accent)]">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">Un projet ?</p>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
            Demandez un devis gratuit, sans engagement.
          </p>
          <div className="mt-4 flex flex-col items-start gap-4">
            <Link href="/devis" className="btn btn-primary btn-sm inline-flex">
              Demander un devis
            </Link>
            <a
              href="https://www.velux.ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Velux Expert, partenaire agréé (velux.ch, nouvel onglet)"
              className="inline-flex items-center rounded-md border border-[var(--color-line)] px-2.5 py-2 transition hover:border-[var(--color-accent)]"
            >
              <Image
                src="/logo/velux-expert-partenaire-agree.png"
                alt="Velux Expert, partenaire agréé"
                width={7000}
                height={1002}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-[var(--color-ink-soft)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-[var(--color-accent)]">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-[var(--color-accent)]">
              Politique de confidentialité
            </Link>
            <a
              href="https://webalp.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)]"
            >
              Powered by Webalp.ch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
