import type { MemoryCard } from "../../types/site";
import { SectionReveal } from "../ui/SectionReveal";

interface MemoryGridProps {
  description: string;
  eyebrow: string;
  items: MemoryCard[];
  sectionId?: string;
  title: string;
}

export function MemoryGrid({
  description,
  eyebrow,
  items,
  sectionId,
  title,
}: MemoryGridProps) {
  const getSizeClasses = (size: MemoryCard["size"]) => {
    if (size === "portrait") {
      return {
        container: "row-span-2",
        media: "aspect-[3/4]",
      };
    }

    if (size === "landscape") {
      return {
        container: "col-span-2",
        media: "aspect-[16/9]",
      };
    }

    return {
      container: "",
      media: "aspect-square",
    };
  };

  return (
    <SectionReveal
      as="section"
      className="page-shell section-space"
      id={sectionId}
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-4">{title}</h2>
        <p className="section-copy mt-5">{description}</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-flow-dense md:gap-6">
        {items.map((item) => {
          const sizeClasses = getSizeClasses(item.size);

          return (
            <div
              key={item.id}
              className={`overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface)] shadow-[0_20px_50px_rgba(74,64,54,0.08)] ${sizeClasses.container}`}
            >
              {item.kind === "image" ? (
                <img
                  alt={item.imageAlt}
                  className={`h-full w-full object-cover ${sizeClasses.media}`}
                  loading="lazy"
                  src={item.image}
                />
              ) : (
                <div
                  className={`flex h-full flex-col justify-center bg-[linear-gradient(180deg,rgba(253,251,247,0.95),rgba(249,242,240,0.98))] p-5 ${sizeClasses.media} border border-dashed border-[rgba(187,175,165,0.55)] md:p-6`}
                >
                  <div className="space-y-2">
                    <p className="font-[var(--font-heading)] text-xl italic leading-tight text-[var(--color-text)]">
                      {item.title}
                    </p>
                    <p className="text-sm leading-7 text-[rgba(74,64,54,0.76)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
