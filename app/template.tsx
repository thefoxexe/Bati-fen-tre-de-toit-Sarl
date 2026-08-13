"use client";

import { useEffect } from "react";

// Unlike layout.tsx, a template remounts on every navigation — that's what
// re-triggers the .page-enter CSS animation each time the route changes, and
// also makes this a reliable place to force a true scroll-to-top on every
// navigation. Next's own scroll restoration only scrolls the new page's
// <main> into view, deliberately leaving the shared root-layout header where
// it was — invisible when the header was `sticky`, but since it's no longer
// sticky (client request: it shouldn't stay fixed while scrolling), that
// left navigations landing just below the header instead of at the true top.
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="page-enter">{children}</div>;
}
