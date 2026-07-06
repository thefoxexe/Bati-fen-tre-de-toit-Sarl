type Props = {
  eyebrow?: string;
  bold: string;
  rest?: string;
  center?: boolean;
  className?: string;
};

/** Two-part headline pattern (bold statement + regular continuation) echoed from Griesser.com. */
export function SectionHeading({ eyebrow, bold, rest, center, className }: Props) {
  return (
    <div className={`${center ? "text-center" : ""} ${className ?? ""}`}>
      {eyebrow ? <p className="eyebrow mb-4 justify-center">{eyebrow}</p> : null}
      <h2 className="balance text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
        {bold} {rest ? <span className="font-normal text-[var(--color-ink-soft)]">{rest}</span> : null}
      </h2>
    </div>
  );
}
