/**
 * Bespoke hero illustration: a dark roof pitch seen from inside, with a
 * skylight pouring warm light and drifting dust motes into the room — the
 * literal promise of the product ("plus de lumière chez vous"), not a
 * generic icon. Pure SVG + CSS animation, no JS needed to render or move.
 */
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 520" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="roofPlane" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a251d" />
          <stop offset="100%" stopColor="#171310" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-glow)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-glow)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="windowGlow" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="var(--color-glow-soft)" />
          <stop offset="60%" stopColor="var(--color-glow)" />
          <stop offset="100%" stopColor="#e2a94f" />
        </radialGradient>
        <radialGradient id="softGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-glow)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* roof pitch */}
      <path d="M0 500 L600 500 L522 55 L78 55 Z" fill="url(#roofPlane)" />
      <path
        d="M0 500 L600 500 L522 55 L78 55 Z"
        fill="none"
        stroke="var(--color-hero-line)"
        strokeWidth="1.5"
      />
      {/* rafter lines for texture */}
      <path
        d="M150 500 L182 55 M300 500 L300 55 M450 500 L418 55"
        stroke="var(--color-hero-line)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* soft ambient glow behind the window */}
      <circle cx="300" cy="190" r="180" fill="url(#softGlow)" className="hero-glow" />

      {/* light beam onto the floor */}
      <path d="M242 250 L172 500 L358 500 L308 250 Z" fill="url(#beam)" />

      {/* animated light lines (draw in on load) */}
      <path
        d="M255 252 L210 495"
        stroke="var(--color-glow)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        className="hero-line"
      />
      <path
        d="M300 252 L300 495"
        stroke="var(--color-glow)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        className="hero-line"
        style={{ animationDelay: "150ms" }}
      />
      <path
        d="M345 252 L390 495"
        stroke="var(--color-glow)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        className="hero-line"
        style={{ animationDelay: "300ms" }}
      />

      {/* the window itself */}
      <rect x="220" y="120" width="160" height="130" rx="4" fill="url(#windowGlow)" />
      <rect
        x="220"
        y="120"
        width="160"
        height="130"
        rx="4"
        fill="none"
        stroke="#171310"
        strokeWidth="6"
      />
      <path d="M220 185 H380 M300 120 V250" stroke="#171310" strokeWidth="4" />
      {/* brand accent dash, echoing the logo's roofline mark */}
      <path d="M232 132 L268 132" stroke="var(--color-accent)" strokeWidth="5" strokeLinecap="round" />

      {/* drifting dust motes */}
      <circle className="hero-mote" cx="255" cy="420" r="2.5" fill="var(--color-glow)" style={{ animationDelay: "0s" }} />
      <circle className="hero-mote" cx="290" cy="450" r="2" fill="var(--color-glow)" style={{ animationDelay: "1.2s" }} />
      <circle className="hero-mote" cx="320" cy="400" r="3" fill="var(--color-glow)" style={{ animationDelay: "2.4s" }} />
      <circle className="hero-mote" cx="270" cy="370" r="2" fill="var(--color-glow)" style={{ animationDelay: "3.6s" }} />
      <circle className="hero-mote" cx="335" cy="440" r="2.5" fill="var(--color-glow)" style={{ animationDelay: "0.8s" }} />
      <circle className="hero-mote" cx="245" cy="460" r="2" fill="var(--color-glow)" style={{ animationDelay: "2s" }} />
    </svg>
  );
}
