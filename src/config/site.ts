import type { NavItem, SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  siteName: "Alicia's Ties",
  basePath: import.meta.env.BASE_URL,
  instagramUrl: "https://instagram.com/aliciaties",
  whatsapp: {
    phone: "+55 (00) 00000-0000",
    defaultMessage:
      "Olá! Vim pelo site da Alicia's Ties e gostaria de orientação para escolher uma peça para uma ocasião especial.",
    collectionMessages: {
      petit:
        "Olá! Vim pela coleção Petit e quero entender qual peça combina melhor com a ocasião que tenho em mente.",
      bridal:
        "Olá! Vim pela coleção Bridal e gostaria de orientação para escolher um acessório delicado para o meu casamento.",
      "recem-nascido":
        "Olá! Vim pela coleção Recém-Nascido e queria ajuda para escolher uma peça confortável e delicada para os primeiros dias do bebê.",
      atelier:
        "Olá! Quero conversar sobre uma peça personalizada da Alicia's Ties e entender as possibilidades de criação.",
    },
  },
};

export const navItems: NavItem[] = [
  { kind: "route", label: "Coleções", to: "/colecoes" },
  { kind: "route", label: "Atelier", to: "/atelier" },
  {
    kind: "anchor",
    label: "Memórias",
    to: "/",
    sectionId: "depoimentos",
    futurePagePath: "/depoimentos",
  },
  {
    kind: "anchor",
    label: "Dúvidas",
    to: "/",
    sectionId: "duvidas",
  },
];
