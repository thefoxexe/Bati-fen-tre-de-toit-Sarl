"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { Magnetic } from "@/components/Magnetic";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Re-derive from the URL whenever it changes, without an effect: this
  // render-time adjustment (React's documented pattern for "resetting state
  // when a prop changes") closes the menu on navigation, avoiding the extra
  // render an effect-based setState would cause. See BottomNav for the same pattern.
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setOpen(false);
  }

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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`hamburger flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] md:hidden ${open ? "is-open" : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Full-screen takeover menu. Rendered outside <header> so its z-50 is
          compared against BottomNav's z-40 in the same (body-level) stacking
          context, instead of being trapped inside header's own stacking
          context, where it would lose to BottomNav despite the higher z-index. */}
      <div
        className={`nav-panel fixed inset-0 z-50 flex flex-col bg-white text-[var(--color-ink)] md:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="hamburger is-open flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)]"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--color-line)] py-4 text-3xl font-medium"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-[var(--color-line)] px-8 py-8 text-sm text-[var(--color-ink-soft)]">
          <a href={site.phoneHref} className="flex items-center gap-3 text-[var(--color-ink)]">
            <PhoneIcon className="h-4 w-4 text-[var(--color-accent)]" />
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[var(--color-ink)]">
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
