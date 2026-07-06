import type { Metadata } from "next";
import Link from "next/link";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Questions fréquentes sur nos prestations de ${site.shortName.toLowerCase()}.`,
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow mb-4">FAQ</p>
      <h1 className="balance text-4xl font-extrabold leading-tight text-[var(--color-ink)] md:text-5xl">
        Questions fréquentes
      </h1>

      <div className="mt-10 divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq group p-5 md:p-6">
            <summary className="flex items-center justify-between gap-4">
              <span className="text-base font-bold text-[var(--color-ink)]">{faq.question}</span>
              <span className="faq-icon shrink-0 text-xl font-light text-[var(--color-accent)]">+</span>
            </summary>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 card flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--color-ink-soft)]">Une autre question ? Contactez-nous directement.</p>
        <Link href="/contact" className="btn btn-primary btn-sm shrink-0">
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
