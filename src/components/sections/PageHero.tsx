import { Link } from "react-router-dom";
import { SectionReveal } from "../ui/SectionReveal";
import { WhatsappButton } from "../ui/WhatsappButton";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaTo: string;
  primaryMessage?: string;
  badges?: Array<{ label: string; value: string }>;
}

export function PageHero({
  badges,
  description,
  eyebrow,
  image,
  imageAlt,
  primaryCtaLabel,
  primaryMessage,
  secondaryCtaLabel,
  secondaryCtaTo,
  title,
}: PageHeroProps) {
  return (
    <SectionReveal
      as="section"
      className="page-shell section-space grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]"
    >
      <div className="order-2 max-w-2xl lg:order-1">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title mt-5 max-w-[12ch]">{title}</h1>
        <p className="hero-copy mt-7 max-w-[60ch]">{description}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <WhatsappButton message={primaryMessage}>
            {primaryCtaLabel}
          </WhatsappButton>
          <Link className="btn-secondary" to={secondaryCtaTo}>
            {secondaryCtaLabel}
          </Link>
        </div>
        {badges ? (
          <div className="mt-10 grid gap-4 border-t border-[rgba(187,175,165,0.22)] pt-6 sm:grid-cols-3">
            {badges.map((badge) => (
              <div key={badge.label} className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {badge.label}
                </p>
                <p className="font-[var(--font-heading)] text-base italic text-[rgba(74,64,54,0.86)]">
                  {badge.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="order-1 lg:order-2">
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface)] shadow-[0_30px_80px_rgba(74,64,54,0.08)]">
          <img
            alt={imageAlt}
            className="aspect-[4/5] w-full object-cover object-center md:aspect-[16/10] lg:aspect-[4/5]"
            fetchPriority="high"
            src={image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,251,247,0)_0%,rgba(74,64,54,0.12)_100%)]" />
        </div>
      </div>
    </SectionReveal>
  );
}
