type Props = {
  eyebrow?: string;
  bold: string;
  rest?: string;
  center?: boolean;
  onDark?: boolean;
  className?: string;
};

/** Two-part headline pattern (bold statement + regular continuation) echoed from Griesser.com. */
export function SectionHeading({ eyebrow, bold, rest, center, onDark, className }: Props) {
  return (
    <div className={`${center ? "text-center" : ""} ${className ?? ""}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 justify-center ${onDark ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`balance text-3xl font-semibold leading-tight md:text-4xl ${onDark ? "text-white" : "text-[var(--color-ink)]"}`}
      >
        {bold} {rest ? <span className={`font-normal ${onDark ? "text-white/60" : "text-[var(--color-ink-soft)]"}`}>{rest}</span> : null}
      </h2>
    </div>
  );
}
