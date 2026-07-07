"use client";

import { useId } from "react";

type Variant = "single" | "twin" | "dormer";

/**
 * Companion piece to HeroArt for light backgrounds: the same roof-and-glow
 * language at a smaller scale, used on service and portfolio cards instead
 * of generic line-art icons.
 */
export function SkylightIllustration({
  className,
  variant = "single",
}: {
  className?: string;
  variant?: Variant;
}) {
  const uid = useId();
  const glowId = `sky-glow-${uid}`;
  const beamId = `sky-beam-${uid}`;

  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={glowId} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fff6e4" />
          <stop offset="100%" stopColor="var(--color-glow, #ffd9a0)" />
        </radialGradient>
        <linearGradient id={beamId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d="M6 165 L214 165 L182 20 L38 20 Z" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />

      {variant === "single" && (
        <>
          <path d="M92 92 L72 165 L148 165 L128 92 Z" fill={`url(#${beamId})`} />
          <rect x="82" y="58" width="56" height="44" rx="3" fill={`url(#${glowId})`} stroke="var(--color-ink)" strokeWidth="2.5" />
          <path d="M82 80 H138 M110 58 V102" stroke="var(--color-ink)" strokeWidth="1.6" />
          <path d="M88 64 L110 64" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
        </>
      )}

      {variant === "twin" && (
        <>
          <path d="M56 100 L40 165 L96 165 L86 100 Z" fill={`url(#${beamId})`} />
          <path d="M124 100 L114 165 L170 165 L154 100 Z" fill={`url(#${beamId})`} />
          <rect x="48" y="66" width="40" height="34" rx="3" fill={`url(#${glowId})`} stroke="var(--color-ink)" strokeWidth="2.5" />
          <path d="M48 83 H88 M68 66 V100" stroke="var(--color-ink)" strokeWidth="1.4" />
          <rect x="116" y="66" width="40" height="34" rx="3" fill={`url(#${glowId})`} stroke="var(--color-ink)" strokeWidth="2.5" />
          <path d="M116 83 H156 M136 66 V100" stroke="var(--color-ink)" strokeWidth="1.4" />
          <path d="M54 70 L68 70" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
        </>
      )}

      {variant === "dormer" && (
        <>
          <path d="M88 92 L70 165 L142 165 L124 92 Z" fill={`url(#${beamId})`} />
          <rect x="80" y="56" width="52" height="44" rx="3" fill={`url(#${glowId})`} stroke="var(--color-ink)" strokeWidth="2.5" />
          <path d="M80 78 H132 M106 56 V100" stroke="var(--color-ink)" strokeWidth="1.6" />
          {/* half-drawn roller shutter over the opening */}
          <rect x="80" y="56" width="52" height="16" fill="var(--color-ink)" opacity="0.85" />
          <path d="M80 64 H132" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </>
      )}

      <path d="M6 165 H214" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
