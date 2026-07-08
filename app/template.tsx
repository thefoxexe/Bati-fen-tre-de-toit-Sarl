// Unlike layout.tsx, a template remounts on every navigation — that's what
// re-triggers the .page-enter CSS animation each time the route changes.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
