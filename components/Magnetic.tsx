"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * Wraps a CTA so it drifts slightly toward the cursor on hover and springs
 * back on leave — the kind of tactile micro-interaction that reads as
 * hand-tuned rather than a template default. Desktop-only by convention
 * (skip wrapping anything also reachable via touch-only bottom nav).
 */
export function Magnetic({ children, strength = 14 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  function handleMove(event: MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </span>
  );
}
