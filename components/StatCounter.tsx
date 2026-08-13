"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

/** Counts up from 0 to `value` the first time it scrolls into view — the
 * "décompte" effect the client pointed to on the agency's own site. Jumps
 * straight to the final value under prefers-reduced-motion. */
export function StatCounter({ value, suffix = "", prefix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced-motion preference collapses the animation to a single frame,
    // but the setState still happens inside the observer callback below
    // (not synchronously in the effect body) rather than being special-cased here.
    const effectiveDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : duration;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        function tick(now: number) {
          const progress = effectiveDuration === 0 ? 1 : Math.min((now - start) / effectiveDuration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
