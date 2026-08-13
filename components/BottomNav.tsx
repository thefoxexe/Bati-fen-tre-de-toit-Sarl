"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, HelpIcon, HomeIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

const items = [
  { href: "/", label: "Accueil", icon: HomeIcon, match: (p: string) => p === "/" },
  { href: "/services", label: "Services", icon: GridIcon, match: (p: string) => p.startsWith("/services") },
  { href: "/faq", label: "FAQ", icon: HelpIcon, match: (p: string) => p === "/faq" },
  { href: "/contact", label: "Contact", icon: MailIcon, match: (p: string) => p === "/contact" },
];

function matchIndex(pathname: string) {
  const index = items.findIndex((item) => item.match(pathname));
  return index === -1 ? 0 : index;
}

/** Floating tab bar for mobile, detached from the screen edges rather than a
 * fixed full-width bar — closer to the iOS-style floating nav the client
 * asked for. The active tab's icon sits inside a red roundel that slides
 * between tabs. A separate Instagram button floats alongside it. */
export function BottomNav() {
  const pathname = usePathname();
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  const [activeIndex, setActiveIndex] = useState(() => matchIndex(pathname));

  // Re-derive the active tab from the URL whenever it changes, without an
  // effect: this render-time adjustment (React's documented pattern for
  // "resetting state when a prop changes") avoids the extra render an
  // effect-based setState would cause.
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setActiveIndex(matchIndex(pathname));
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    setActiveIndex(0);
    // Already on the home page: there's no navigation for Link to trigger a
    // scroll reset on, so do it ourselves instead of letting the click no-op.
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 lg:hidden">
      <nav
        className="relative flex flex-1 max-w-xs items-stretch rounded-full border border-[var(--color-line)] bg-white/95 px-1.5 py-1.5 shadow-xl shadow-black/15 backdrop-blur-md"
        aria-label="Navigation principale"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 h-10 w-10 rounded-full bg-[var(--color-accent)] shadow-md shadow-black/20 transition-[left] duration-300 ease-out"
          style={{ left: `calc(${activeIndex} * (100% / 4) + (100% / 8) - 20px)` }}
        />
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(event) => {
              if (item.href === "/") {
                handleHomeClick(event);
              } else {
                setActiveIndex(i);
              }
            }}
            className="relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-1.5 text-[10px] font-medium transition active:scale-95"
          >
            <span className="flex h-10 w-10 items-center justify-center">
              <item.icon className={`h-5 w-5 transition-colors duration-200 ${i === activeIndex ? "text-white" : "text-[var(--color-ink-soft)]"}`} />
            </span>
            <span className={i === activeIndex ? "font-semibold text-[var(--color-accent)]" : "text-[var(--color-ink-soft)]"}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bati Fenêtre de Toit sur Instagram (nouvel onglet)"
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/95 text-[var(--color-ink-soft)] shadow-xl shadow-black/15 backdrop-blur-md transition active:scale-95"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
