type LogoProps = {
  className?: string;
  /** Use light border/text on a dark background (footer). */
  onDark?: boolean;
  /** Narrower box, no room implied for a wordmark. */
  markOnly?: boolean;
};

/**
 * Placeholder standing in for the real HD logo file, which hasn't been
 * delivered yet. Deliberately plain (not a hand-recreated guess at the real
 * mark) so it reads unmistakably as "swap this" rather than a finished asset.
 */
export function Logo({ className, onDark, markOnly }: LogoProps) {
  return (
    <span
      className={`inline-flex h-9 items-center justify-center border border-dashed px-4 text-[10px] font-semibold uppercase tracking-[0.2em] ${
        onDark ? "border-white/25 text-white/60" : "border-[var(--color-line)] text-[var(--color-ink-soft)]"
      } ${markOnly ? "w-9 px-0" : "w-auto"} ${className ?? ""}`}
    >
      Logo
    </span>
  );
}
