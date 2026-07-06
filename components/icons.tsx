"use client";

import { useId } from "react";

type IconProps = { className?: string };

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19.9c0 .6-.4 1-1 1C9.6 20.9 3.1 14.4 3.1 5.9c0-.6.4-1 1-1H7.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-1.9 1.9z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 8h12M6 12h8M6 16h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

type RoofVariant = "single" | "twin" | "dormer";

/**
 * Decorative line-art of a roof window, standing in for real project photography.
 * Three compositions (single opening / twin openings / dormer with shutter) so the
 * same graphic isn't just stamped repeatedly across cards.
 */
export function RoofWindowIllustration({
  className,
  variant = "single",
}: IconProps & { variant?: RoofVariant }) {
  const uid = useId();
  const glowId = `roof-glow-${uid}`;

  return (
    <svg viewBox="0 0 220 176" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {variant === "single" && (
        <circle cx="168" cy="42" r="34" fill={`url(#${glowId})`} />
      )}
      {variant !== "single" && (
        <circle cx="44" cy="38" r="30" fill={`url(#${glowId})`} />
      )}

      {/* roofline */}
      <path
        d="M14 156 L110 26 L206 156 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* tile hatching */}
      <path
        d="M40 130 L58 106 M58 140 L82 108 M84 146 L104 118"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M180 130 L162 106 M162 140 L138 108 M136 146 L116 118"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {variant === "single" && (
        <g>
          <rect x="84" y="62" width="52" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M84 82 H136M110 62 V102" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M186 20v8M186 56v8M164 42h8M200 42h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="186" cy="42" r="12" stroke="currentColor" strokeWidth="2.5" />
        </g>
      )}

      {variant === "twin" && (
        <g>
          <rect x="62" y="66" width="38" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M62 82 H100M81 66 V98" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="112" y="66" width="38" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M112 82 H150M131 66 V98" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      )}

      {variant === "dormer" && (
        <g>
          <rect x="88" y="60" width="46" height="38" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M88 79 H134M111 60 V98" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* rolled shutter, half-drawn over the opening */}
          <path d="M92 64 H130" stroke="var(--color-accent, currentColor)" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
          <rect x="90" y="60" width="44" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.7" />
        </g>
      )}

      <path d="M14 156 H206" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
