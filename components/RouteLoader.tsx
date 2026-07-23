"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MIN_VISIBLE_MS = 350;
const FADE_MS = 180;
const SESSION_KEY = "route-loader-shown";

/**
 * Full white overlay with a small progress bar. Shown once per browser
 * session, on the very first internal navigation only — after that, the
 * site behaves like a normal set of static pages with no loader getting in
 * the way when clicking around (services, à propos, etc.).
 */
export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const shownAtRef = useRef(0);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;
      const link = (event.target as HTMLElement)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.target === "_blank") return;

      sessionStorage.setItem(SESSION_KEY, "1");
      if (intervalRef.current) clearInterval(intervalRef.current);
      shownAtRef.current = Date.now();
      setFading(false);
      setVisible(true);
      setProgress(20);
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p < 85 ? p + (85 - p) * 0.2 : p));
      }, 100);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    if (!shownAtRef.current) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(100);

    const elapsed = Date.now() - shownAtRef.current;
    const wait = Math.max(MIN_VISIBLE_MS - elapsed, 0);
    const t = setTimeout(() => {
      setFading(true);
      const t2 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
        shownAtRef.current = 0;
      }, FADE_MS);
      return () => clearTimeout(t2);
    }, wait);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      style={{ opacity: fading ? 0 : 1, transition: `opacity ${FADE_MS}ms ease` }}
      aria-hidden="true"
    >
      <div className="h-[3px] w-32 overflow-hidden rounded-full bg-[var(--color-line)]">
        <div
          className="h-full rounded-full bg-[var(--color-accent)]"
          style={{ width: `${progress}%`, transition: "width 0.2s ease" }}
        />
      </div>
    </div>
  );
}
