"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, HomeIcon, MailIcon, QuoteIcon } from "@/components/icons";

const items = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/services", label: "Services", icon: GridIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavTab({ href, label, Icon, active }: { href: string; label: string; Icon: typeof HomeIcon; active: boolean }) {
  return (
    <Link
      href={href}
      className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium transition active:scale-95"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${
          active ? "bg-[var(--color-accent)] text-white" : "text-[var(--color-ink-soft)]"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className={active ? "font-semibold text-[var(--color-accent)]" : "text-[var(--color-ink-soft)]"}>
        {label}
      </span>
    </Link>
  );
}

/** Fixed bottom tab bar for mobile, the primary navigation on small screens. */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-[var(--color-line)] bg-white md:hidden"
      aria-label="Navigation principale"
    >
      {items.slice(0, 2).map((item) => (
        <NavTab key={item.href} href={item.href} label={item.label} Icon={item.icon} active={isActive(pathname, item.href)} />
      ))}

      <Link href="/contact#devis" className="flex flex-1 flex-col items-center justify-center gap-1 py-1.5 transition active:scale-95">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-md shadow-black/20">
          <QuoteIcon className="h-4 w-4" />
        </span>
        <span className="text-[11px] font-semibold text-[var(--color-accent)]">Devis</span>
      </Link>

      {items.slice(2).map((item) => (
        <NavTab key={item.href} href={item.href} label={item.label} Icon={item.icon} active={isActive(pathname, item.href)} />
      ))}
    </nav>
  );
}
