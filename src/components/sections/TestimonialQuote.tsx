import { Quote } from "lucide-react";
import { SectionReveal } from "../ui/SectionReveal";

interface TestimonialQuoteProps {
  author: string;
  quote: string;
}

export function TestimonialQuote({ author, quote }: TestimonialQuoteProps) {
  return (
    <SectionReveal
      as="section"
      className="surface-panel page-shell section-space mx-auto max-w-4xl px-6 py-10 text-center md:px-10 md:py-14"
    >
      <Quote
        aria-hidden="true"
        className="mx-auto size-8 text-[rgba(212,175,55,0.5)]"
      />
      <blockquote className="mx-auto mt-6 max-w-3xl font-[var(--font-heading)] text-2xl italic leading-[1.45] md:text-[2.25rem]">
        “{quote}”
      </blockquote>
      <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {author}
      </p>
    </SectionReveal>
  );
}
