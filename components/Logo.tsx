import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Wrap in a white chip so the logo's true brand colors stay legible on a dark background (footer, mobile menu). */
  onDark?: boolean;
  /** Use the square mark instead of the full horizontal wordmark. */
  markOnly?: boolean;
  /** Tailwind height class for the image itself. Defaults to "h-9". */
  size?: string;
  /** Skip lazy-loading for the header's above-the-fold instance. */
  priority?: boolean;
};

export function Logo({ className, onDark, markOnly, size = "h-9", priority }: LogoProps) {
  const image = markOnly ? (
    <Image
      src="/logo/bati-fenetre-de-toit-logo-carre.png"
      alt="Bati Fenêtre de Toit Sàrl"
      width={2071}
      height={2130}
      className={`${size} w-auto`}
      priority={priority}
    />
  ) : (
    <Image
      src="/logo/bati-fenetre-de-toit-logo.png"
      alt="Bati Fenêtre de Toit Sàrl, Velux Expert"
      width={2725}
      height={1068}
      className={`${size} w-auto`}
      priority={priority}
    />
  );

  if (!onDark) {
    return (
      <span className={`inline-flex items-center ${className ?? ""}`}>
        {image}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center rounded-md bg-white px-3 py-1.5 ${className ?? ""}`}>
      {image}
    </span>
  );
}
