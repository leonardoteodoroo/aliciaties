import type { HomeSectionId } from "../types/site";

interface HomeSectionNavigationState {
  homeSectionId?: HomeSectionId;
}

export function buildHomeSectionState(
  sectionId: HomeSectionId,
): HomeSectionNavigationState {
  return { homeSectionId: sectionId };
}

export function getHomeSectionState(
  value: unknown,
): HomeSectionNavigationState | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as HomeSectionNavigationState;

  if (!candidate.homeSectionId) {
    return null;
  }

  return candidate;
}

export function scrollToHomeSection(sectionId: HomeSectionId) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });

  return true;
}
