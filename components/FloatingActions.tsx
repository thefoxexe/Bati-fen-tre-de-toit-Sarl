import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

/**
 * Floating call button, sitting just above the mobile bottom tab bar.
 * "Devis" already lives in the bottom bar, so only the call shortcut floats —
 * the client specifically flagged click-to-call as high-value for this trade.
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-[74px] right-4 z-30 md:hidden">
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
