import Link from "next/link";
import { nav, site } from "@/lib/site";
import { MenuIcon, CloseIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { Magnetic } from "@/components/Magnetic";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <Link href="/" aria-label={site.name}>
            <Logo priority />
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
            <Magnetic strength={8}>
              <Link href="/devis" className="btn btn-primary btn-sm">
                Devis gratuit
              </Link>
            </Magnetic>
          </div>

          <label
            htmlFor="nav-toggle"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] md:hidden"
            aria-label="Ouvrir le menu"
          >
            <MenuIcon className="h-5 w-5" />
          </label>
        </div>
      </header>

      {/* Full-screen takeover menu, pure CSS checkbox toggle. The checkbox and
          panel must be direct siblings (both rendered here, outside <header>)
          for the `.nav-toggle:checked ~ .nav-panel` selector in globals.css to
          apply, and so the panel's z-50 is compared against BottomNav's z-40
          in the same (body-level) stacking context instead of being trapped
          inside header's own stacking context, where it would lose to
          BottomNav despite the higher z-index. */}
      <input id="nav-toggle" type="checkbox" className="nav-toggle" aria-hidden="true" />
      <div className="nav-panel fixed inset-0 z-50 flex flex-col bg-[var(--color-hero)] text-white md:hidden">
        <div className="flex items-center justify-between px-5 py-5">
          <Logo markOnly onDark size="h-14" />
          <label
            htmlFor="nav-toggle"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Fermer le menu"
          >
            <CloseIcon className="h-4 w-4" />
          </label>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-4 text-3xl font-medium"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-white/10 px-8 py-8 text-sm text-white/60">
          <a href={site.phoneHref} className="flex items-center gap-3 text-white/80">
            <PhoneIcon className="h-4 w-4 text-[var(--color-accent)]" />
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/80">
            <MailIcon className="h-4 w-4 text-[var(--color-accent)]" />
            {site.email}
          </a>
          <p className="pt-1">
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </div>
      </div>
    </>
  );
}
