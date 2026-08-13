"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, HelpIcon, HomeIcon, MailIcon } from "@/components/icons";

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

/** Fixed bottom tab bar for mobile, docked flush to the screen edge — like
 * WhatsApp's tab bar, not a floating pill. The active tab's icon sits inside
 * a red roundel that slides between tabs instead of a permanent one. */
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

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-[var(--color-line)] bg-white lg:hidden"
      aria-label="Navigation principale"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2 h-9 w-9 rounded-full bg-[var(--color-accent)] shadow-md shadow-black/20 transition-[left] duration-300 ease-out"
        style={{ left: `calc(${activeIndex} * (100% / 4) + (100% / 8) - 18px)` }}
      />
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setActiveIndex(i)}
          className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium transition active:scale-95"
        >
          <span className="flex h-9 w-9 items-center justify-center">
            <item.icon className={`h-5 w-5 transition-colors duration-200 ${i === activeIndex ? "text-white" : "text-[var(--color-ink-soft)]"}`} />
          </span>
          <span className={i === activeIndex ? "font-semibold text-[var(--color-accent)]" : "text-[var(--color-ink-soft)]"}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
