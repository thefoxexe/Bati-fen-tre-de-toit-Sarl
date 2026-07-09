type Props = {
  label?: string;
  className?: string;
  /** Use a light dashed frame on a dark background instead of the default. */
  onDark?: boolean;
};

/**
 * Explicit stand-in for real photography that hasn't been delivered yet —
 * a dashed frame instead of decorative SVG art, so nobody mistakes a
 * placeholder for a finished visual once real photos land.
 */
export function PlaceholderMedia({ label = "Illustration à ajouter", className, onDark }: Props) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-dashed ${
        onDark ? "border-white/25 bg-white/[0.03] text-white/50" : "border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-ink-soft)]"
      } ${className ?? ""}`}
    >
      <span className="px-2 text-center text-[9px] font-semibold uppercase tracking-widest text-inherit opacity-80">
        {label}
      </span>
    </div>
  );
}
