import Link from "next/link";
import { QuoteIcon } from "@/components/icons";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/** Fixed bottom tab bar for mobile, the primary navigation on small screens. */
export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-[var(--color-line)] bg-white md:hidden"
      aria-label="Navigation principale"
    >
      {items.slice(0, 2).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-[var(--color-ink-soft)]"
        >
          {item.label}
        </Link>
      ))}

      <Link href="/contact#devis" className="flex flex-1 flex-col items-center justify-center gap-1 py-1.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-md shadow-black/20">
          <QuoteIcon className="h-4 w-4" />
        </span>
        <span className="text-[11px] font-semibold text-[var(--color-accent)]">Devis</span>
      </Link>

      {items.slice(2).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-[var(--color-ink-soft)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
