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
      {eyebrow ? <p className="eyebrow mb-3 justify-center">{eyebrow}</p> : null}
      <h2 className="balance text-3xl font-extrabold leading-tight text-[var(--color-ink)] md:text-4xl">
        {bold} {rest ? <span className="font-normal">{rest}</span> : null}
      </h2>
    </div>
  );
}
