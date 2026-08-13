"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Clicking a nav link to the page you're already on (header, footer, bottom
 * nav — any of them) doesn't trigger a Next.js navigation, since the URL
 * doesn't change, so nothing resets the scroll position on its own. Handled
 * once here, globally, instead of hand-wiring the same check into every
 * place a nav link appears.
 */
export function ScrollResetOnSameLink() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      // Next's own <Link> always calls preventDefault to handle navigation
      // itself, even for a same-URL click that ends up doing nothing — so
      // this can't bail out on event.defaultPrevented like a normal click
      // interceptor would, or it would never run for a real Link at all.
      const link = (event.target as HTMLElement)?.closest("a");
      if (!link) return;
      if (link.target === "_blank") return;
      const href = link.getAttribute("href");
      if (href !== pathname) return;

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
