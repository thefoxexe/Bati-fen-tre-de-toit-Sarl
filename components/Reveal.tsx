"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Fades a section up into place the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      // threshold 0 + a margin that extends the viewport on both sides: catches
      // the section as it approaches, even on a fast scroll/fling that would
      // otherwise jump clean over a tall element between two rendered frames
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
