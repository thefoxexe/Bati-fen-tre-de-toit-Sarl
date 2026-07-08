import Link from "next/link";
import { nav, site } from "@/lib/site";
import { MenuIcon, CloseIcon, UserIcon, ImageIcon, HelpIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

// Items already reachable from the mobile bottom bar (Accueil / Services / Contact)
// don't need to repeat in the mobile "more" panel — only the secondary pages do,
// each paired with its own icon so the panel doesn't read as plain text links.
const secondaryNav = [
  { href: "/a-propos", label: "À propos", icon: UserIcon },
  { href: "/portfolio", label: "Réalisations", icon: ImageIcon },
  { href: "/faq", label: "FAQ", icon: HelpIcon },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
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

        {/* Mobile: primary destinations live in the fixed bottom bar; this menu only
            surfaces the secondary pages (À propos, Réalisations, FAQ). Pure CSS
            checkbox toggle — labels/panel must stay direct siblings of the checkbox
            for the peer-checked/general-sibling selectors in globals.css to apply.
            The panel is positioned `absolute top-full` off the header's own box
            (not a hardcoded pixel offset), so it always starts exactly where the
            header ends instead of risking an overlap on narrower screens. */}
        <input id="nav-toggle" type="checkbox" className="nav-toggle peer" aria-hidden="true" />
        <label
          htmlFor="nav-toggle"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] peer-checked:hidden md:hidden"
          aria-label="Plus de pages"
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

        <label
          htmlFor="nav-toggle"
          aria-hidden="true"
          className="nav-backdrop fixed inset-0 md:hidden"
        />

        <div className="nav-panel absolute inset-x-0 top-full z-40 flex flex-col gap-1 rounded-b-2xl border-t border-[var(--color-line)] bg-white px-5 py-4 shadow-xl md:hidden">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-2 py-3 text-base font-semibold text-[var(--color-ink)] transition hover:bg-black/[0.03]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <item.icon className="h-[18px] w-[18px]" />
              </span>
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="btn btn-outline mt-2 w-full">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
