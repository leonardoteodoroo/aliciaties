import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CollectionCard as CollectionCardType } from "../../types/site";

interface CollectionCardProps {
  item: CollectionCardType;
}

export function CollectionCard({ item }: CollectionCardProps) {
  const content = (
    <>
      <img
        alt={item.imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        loading="lazy"
        src={item.image}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,64,54,0.04),rgba(74,64,54,0.52))]" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
        <h3 className="font-[var(--font-heading)] text-3xl italic text-white md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[30ch] text-sm leading-6 text-[rgba(253,251,247,0.85)] md:text-base">
          {item.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[rgba(253,251,247,0.94)]">
          {item.ctaLabel}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  const commonClassName =
    "group relative block overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface)] min-h-[320px] shadow-[0_24px_60px_rgba(74,64,54,0.08)]";

  if (item.ctaMode === "route") {
    return (
      <Link aria-label={item.title} className={commonClassName} to={item.href}>
        {content}
      </Link>
    );
  }

  return (
    <a
      aria-label={item.title}
      className={commonClassName}
      href={item.href}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}
