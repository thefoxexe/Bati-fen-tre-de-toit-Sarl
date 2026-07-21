import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] md:px-8">
        <div>
          <Logo onDark />
          <p className="mt-3 max-w-xs text-sm text-white/60">{site.tagline}</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bati Fenêtre de Toit sur Instagram (nouvel onglet)"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Contact</p>
          <p className="mt-4 text-sm text-white/80">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1.5 text-sm text-white/80">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-white/60">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Un projet ?</p>
          <p className="mt-4 text-sm text-white/80">
            Demandez un devis gratuit, réponse sous 48h.
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
              className="inline-flex items-center rounded-md bg-white px-2.5 py-2"
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-white/70">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white/70">
              Politique de confidentialité
            </Link>
            <p>Canton de Vaud</p>
            <a
              href="https://webalp.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              Powered by Webalp.ch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
