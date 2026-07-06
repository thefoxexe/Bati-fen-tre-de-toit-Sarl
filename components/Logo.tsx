import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Use light text on a dark background (footer). */
  onDark?: boolean;
  /** Show only the roofline mark, no wordmark. */
  markOnly?: boolean;
};

/**
 * Recreation of the client's existing logo mark: a receding roofline (three
 * gables, tallest to shortest) with a red accent dash on each slope, plus the
 * "BATI / FENÊTRE DE TOIT" wordmark. Rebuilt as SVG + text from the real logo
 * so the new site carries the brand the client already has.
 */
export function Logo({ className, onDark, markOnly }: LogoProps) {
  const inkColor = onDark ? "#fff" : "var(--color-ink)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg viewBox="0 0 200 90" className="h-8 w-auto shrink-0" aria-hidden="true">
        <circle cx="30" cy="78" r="5" fill={inkColor} />
        <path
          d="M30 78 L55 20 L85 62 L112 32 L138 62 L165 45"
          fill="none"
          stroke={inkColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M68 55 L86 40" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />
        <path d="M118 50 L132 42" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />
        <path d="M144 56 L156 50" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />
      </svg>
      {!markOnly && (
        <span className="leading-none">
          <span
            className="block text-xl font-black tracking-tight"
            style={{ color: "var(--color-accent)" }}
          >
            BATI
          </span>
          <span
            className="block text-[0.6rem] font-semibold tracking-wide"
            style={{ color: inkColor }}
          >
            {site.tagline.toUpperCase()}
          </span>
        </span>
      )}
    </span>
  );
}
