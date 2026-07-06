import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo onDark />
          <p className="mt-3 max-w-xs text-sm text-white/60">{site.tagline}</p>
          <p className="mt-6 text-sm text-white/80">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="text-sm text-white/80">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
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
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Un projet ?</p>
          <p className="mt-4 text-sm text-white/80">
            Demandez un devis gratuit, réponse sous 48h.
          </p>
          <Link href="/contact" className="btn btn-primary btn-sm mt-4 inline-flex">
            Demander un devis
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <p>Suisse — sur devis</p>
        </div>
      </div>
    </footer>
  );
}
