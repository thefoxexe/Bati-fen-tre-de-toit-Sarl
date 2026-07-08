type Props = { className?: string; onDark?: boolean };

/**
 * Section divider built from the logo's own receding-roofline zigzag instead
 * of a plain straight rule — a small recurring signature so the page reads as
 * this brand's site specifically, not a generic template edge.
 */
export function RoofDivider({ className, onDark }: Props) {
  const color = onDark ? "rgba(255,255,255,0.14)" : "var(--color-line)";
  return (
    <svg
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className={`h-4 w-full ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M0 16 L20 4 L40 16 L60 4 L80 16 L100 4 L120 16 L140 4 L160 16 L180 4 L200 16 L220 4 L240 16 L260 4 L280 16 L300 4 L320 16 L340 4 L360 16 L380 4 L400 16"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
