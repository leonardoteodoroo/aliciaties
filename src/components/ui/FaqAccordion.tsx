import { Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "../../types/site";

interface FaqAccordionProps {
  items: FaqItem[];
  variant?: "panel" | "plain";
}

export function FaqAccordion({ items, variant = "panel" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div
      className={
        variant === "panel"
          ? "surface-panel divide-y divide-[rgba(187,175,165,0.38)] overflow-hidden"
          : "divide-y divide-[rgba(187,175,165,0.42)] overflow-hidden"
      }
    >
      {items.map((item, index) => {
        const panelId = `faq-panel-${index}`;
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="px-5 py-3 md:px-8 md:py-5">
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-3 text-left"
              onClick={() => toggleItem(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleItem(index);
                }
              }}
              type="button"
            >
              <span className="font-[var(--font-heading)] text-lg leading-snug md:text-xl">
                {item.question}
              </span>
              <Plus
                aria-hidden="true"
                className={`size-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen ? (
              <div
                className="max-w-[62ch] pb-4 pr-10 text-sm leading-7 text-[rgba(74,64,54,0.78)] md:text-base"
                id={panelId}
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
