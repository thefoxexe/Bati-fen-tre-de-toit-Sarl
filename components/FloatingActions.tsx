import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, QuoteIcon } from "@/components/icons";

/** Persistent mobile shortcuts, inspired by the floating action icons used on Griesser.com. */
export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3 md:hidden">
      <Link
        href="/contact"
        aria-label="Demander un devis"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white text-[var(--color-accent)] shadow-lg"
      >
        <QuoteIcon className="h-5 w-5" />
      </Link>
      <a
        href={site.phoneHref}
        aria-label="Appeler maintenant"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] text-white shadow-lg"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
