import Link from "next/link";
import { nav, site } from "@/lib/site";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link href="/" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Devis gratuit
          </Link>
        </div>

        {/* Mobile menu, pure CSS checkbox toggle (no client JS). Labels/panel must stay
            direct siblings of the checkbox for the peer-checked sibling selector to apply. */}
        <input id="nav-toggle" type="checkbox" className="nav-toggle peer" aria-hidden="true" />
        <label
          htmlFor="nav-toggle"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] peer-checked:hidden md:hidden"
          aria-label="Ouvrir le menu"
        >
          <MenuIcon className="h-5 w-5" />
        </label>
        <label
          htmlFor="nav-toggle"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] peer-checked:flex md:hidden"
          aria-label="Fermer le menu"
        >
          <CloseIcon className="h-4 w-4" />
        </label>

        <div className="nav-panel peer-checked:flex fixed inset-x-0 top-[65px] z-40 flex-col gap-1 border-t border-[var(--color-line)] bg-white px-5 py-4 shadow-lg md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-3 text-base font-semibold text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary mt-3 w-full">
            Devis gratuit
          </Link>
          <a href={site.phoneHref} className="btn btn-outline mt-2 w-full">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
