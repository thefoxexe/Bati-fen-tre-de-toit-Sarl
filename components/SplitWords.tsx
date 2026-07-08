/**
 * Splits a headline into words, each masked and slid up into place with a
 * stagger — used instead of a flat opacity fade so the hero reads as
 * deliberately motion-designed rather than a generic fade-in template.
 */
export function SplitWords({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="word-mask">
          <span style={{ animationDelay: `${startDelay + i * 70}ms` }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </>
  );
}
