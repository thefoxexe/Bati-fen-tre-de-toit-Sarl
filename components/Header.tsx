"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, services, site } from "@/lib/site";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { Magnetic } from "@/components/Magnetic";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Desktop dropdown normally opens on hover, but touch devices (iPad in
  // particular) never fire hover events, so tapping the trigger has to open
  // it too. Once it's opened by a tap, there's no mouseleave to close it, so
  // close on the next tap anywhere outside the dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    function handlePointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [servicesOpen]);
  // Re-derive from the URL whenever it changes, without an effect: this
  // render-time adjustment (React's documented pattern for "resetting state
  // when a prop changes") closes the menu on navigation, avoiding the extra
  // render an effect-based setState would cause. See BottomNav for the same pattern.
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <Link href="/" aria-label={site.name}>
            <Logo priority />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => {
                      // Touch devices (iPad in particular) never fire the
                      // hover above, so the tap has to open the dropdown
                      // instead of navigating straight through. Force it
                      // open rather than toggling: touch emulation can fire
                      // a compatibility mouseenter right before the click,
                      // which would otherwise immediately toggle it shut.
                      if (window.matchMedia("(hover: none)").matches) {
                        event.preventDefault();
                        setServicesOpen(true);
                      }
                    }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-sm font-semibold text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition duration-200 ${
                      servicesOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-2 shadow-xl shadow-black/[0.08]">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[#f7f5f2]"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="mt-1 block rounded-xl border-t border-[var(--color-line)] px-4 pb-1 pt-3 text-sm font-semibold text-[var(--color-accent)]"
                      >
                        Tous les services
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
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
            className={`hamburger flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] lg:hidden ${open ? "is-open" : ""}`}
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
        className={`nav-panel fixed inset-0 z-50 flex flex-col bg-white text-[var(--color-ink)] lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="flex shrink-0 items-center justify-between px-5 py-5">
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

        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-8 py-2">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="border-b border-[var(--color-line)]">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-4 text-3xl font-bold"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`flex flex-col gap-1 pb-5 transition-opacity duration-300 ${
                        mobileServicesOpen ? "opacity-100 delay-100" : "opacity-0"
                      }`}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setOpen(false)}
                          className="py-2 text-base text-[var(--color-ink-soft)]"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setOpen(false)}
                        className="py-2 text-base font-semibold text-[var(--color-accent)]"
                      >
                        Tous les services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--color-line)] py-4 text-3xl font-bold"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="shrink-0 space-y-2 border-t border-[var(--color-line)] px-8 py-6 text-sm text-[var(--color-ink-soft)]">
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
