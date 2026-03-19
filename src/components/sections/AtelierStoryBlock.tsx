import type { StoryBlock } from "../../types/site";
import { SectionReveal } from "../ui/SectionReveal";

interface AtelierStoryBlockProps {
  story: StoryBlock;
}

export function AtelierStoryBlock({ story }: AtelierStoryBlockProps) {
  return (
    <SectionReveal
      as="section"
      className={`grid items-center gap-10 md:gap-14 lg:grid-cols-[1fr_1fr] ${
        story.reverse
          ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
          : ""
      }`}
    >
      <div className="space-y-5">
        <span className="eyebrow">{story.eyebrow}</span>
        <h2 className="section-title !text-left">{story.title}</h2>
        <p className="section-copy !text-left">{story.description}</p>
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface)] shadow-[0_24px_60px_rgba(74,64,54,0.08)]">
        <img
          alt={story.imageAlt}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          src={story.image}
        />
      </div>
    </SectionReveal>
  );
}
