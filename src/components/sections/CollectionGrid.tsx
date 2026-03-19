import type { CollectionCard as CollectionCardType } from "../../types/site";
import { SectionReveal } from "../ui/SectionReveal";
import { CollectionCard } from "./CollectionCard";

interface CollectionGridProps {
  description?: string;
  items: CollectionCardType[];
  sectionId?: string;
  title: string;
}

export function CollectionGrid({
  description,
  items,
  sectionId,
  title,
}: CollectionGridProps) {
  return (
    <SectionReveal
      as="section"
      className="page-shell section-space"
      id={sectionId}
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Coleções</span>
        <h2 className="section-title mt-4">{title}</h2>
        {description ? (
          <p className="section-copy mt-5">{description}</p>
        ) : null}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CollectionCard item={items[0]} />
        </div>
        <div className="md:row-span-1">
          <CollectionCard item={items[1]} />
        </div>
        <div className="md:col-span-3">
          <CollectionCard item={items[2]} />
        </div>
      </div>
    </SectionReveal>
  );
}
