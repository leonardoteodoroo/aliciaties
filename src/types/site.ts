export interface SiteConfig {
  siteName: string;
  basePath: string;
  instagramUrl: string;
  whatsapp: {
    phone: string;
    defaultMessage: string;
    collectionMessages: Record<string, string>;
  };
}

export type HomeSectionId = "colecoes" | "depoimentos" | "duvidas";

export interface RouteNavItem {
  kind: "route";
  label: string;
  to: string;
}

export interface AnchorNavItem {
  kind: "anchor";
  label: string;
  to: string;
  sectionId: Extract<HomeSectionId, "depoimentos" | "duvidas">;
  futurePagePath?: string;
}

export type NavItem = RouteNavItem | AnchorNavItem;

export interface CollectionCard {
  slug: "petit" | "bridal" | "recem-nascido";
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaMode: "route" | "whatsapp";
}

export interface ProductCard {
  name: string;
  description: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: Array<{ heading: string; body: string[] }>;
}

export interface HeroWordSegment {
  text: string;
  emphasized?: boolean;
  tone?: "default" | "warm";
  row?: number;
}

export interface HeroFeatureCard {
  label: string;
  value: string;
}

export interface HomeHeroContent {
  titleSegments: HeroWordSegment[];
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  imageAlt: string;
  scrollCueLabel: string;
  featureCards: HeroFeatureCard[];
}

export interface StoryBlock {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

interface MemoryCardBase {
  id: string;
  size: "portrait" | "landscape" | "square";
}

export interface MemoryImageCard extends MemoryCardBase {
  kind: "image";
  image: string;
  imageAlt: string;
}

export interface MemoryPlaceholderCard extends MemoryCardBase {
  kind: "placeholder";
  title: string;
  description: string;
  idealDimensions: string;
  idealRatio: string;
}

export type MemoryCard = MemoryImageCard | MemoryPlaceholderCard;
