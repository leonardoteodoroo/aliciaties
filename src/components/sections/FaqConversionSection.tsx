import type { FaqItem } from "../../types/site";
import { SectionReveal } from "../ui/SectionReveal";
import { FaqAccordion } from "../ui/FaqAccordion";
import { WhatsappButton } from "../ui/WhatsappButton";

interface FaqConversionSectionProps {
  ctaCopy: string;
  ctaTitle: string;
  description: string;
  eyebrow: string;
  items: FaqItem[];
  sectionId?: string;
  title: string;
  titleTag?: "h1" | "h2";
}

export function FaqConversionSection({
  ctaCopy,
  ctaTitle,
  description,
  eyebrow,
  items,
  sectionId,
  title,
  titleTag = "h2",
}: FaqConversionSectionProps) {
  const TitleTag = titleTag;

  return (
    <SectionReveal
      as="section"
      className="page-shell section-space"
      id={sectionId}
    >
      <div className="faq-conversion-shell mx-auto max-w-[960px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <TitleTag className="section-title mt-4">{title}</TitleTag>
          <p className="section-copy mt-5">{description}</p>
        </div>
        <div className="faq-conversion-block mx-auto mt-12 max-w-[840px]">
          <div className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-[var(--color-primary)]" />
          <div className="mx-auto max-w-[720px]">
            <FaqAccordion items={items} variant="plain" />
          </div>
          <div className="mt-16 flex flex-col items-center text-center">
            <h2 className="faq-conversion-title">{ctaTitle}</h2>
            <p className="faq-conversion-copy mt-4 max-w-xl">{ctaCopy}</p>
            <WhatsappButton className="mt-8">
              Pedir orientação no WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
