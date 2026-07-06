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

/** Decorative line-art of a roof window, used in place of real project photography. */
export function RoofWindowIllustration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <path d="M10 150 L100 20 L190 150 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="76" y="55" width="48" height="36" rx="2" transform="rotate(0 100 73)" stroke="currentColor" strokeWidth="2.5" />
      <path d="M76 73 H124" stroke="currentColor" strokeWidth="2" />
      <path d="M100 55 V91" stroke="currentColor" strokeWidth="2" />
      <circle cx="158" cy="38" r="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M158 18v6M158 52v6M138 38h6M172 38h6M144.5 24.5l4.2 4.2M167.3 47.3l4.2 4.2M144.5 51.5l4.2-4.2M167.3 28.7l4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 150 H190" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
