"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin progress bar at the very top of the viewport, shown while a page
 * transition is in flight. Starts on any internal link click (so it appears
 * instantly, before Next.js has even fetched the destination), and completes
 * as soon as the pathname actually changes.
 */
export function RouteLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as HTMLElement)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.target === "_blank") return;

      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(15);
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p < 82 ? p + (82 - p) * 0.15 : p));
      }, 120);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(100);
    const t = setTimeout(() => setProgress(0), 260);
    return () => clearTimeout(t);
  }, [pathname]);

  if (progress === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
      <div
        className="h-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? "width 0.2s ease, opacity 0.3s ease 0.1s" : "width 0.2s ease",
        }}
      />
    </div>
  );
}
