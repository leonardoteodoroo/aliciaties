import collectionBridalImage from "../assets/images/collection-bridal.webp";
import collectionNewbornImage from "../assets/images/collection-newborn.webp";
import collectionPetitImage from "../assets/images/collection-petit.webp";
import petitChampagneImage from "../assets/images/petit-champagne.webp";
import petitLaceHeirloomImage from "../assets/images/petit-lace-heirloom.webp";
import petitOrganzaFlowerImage from "../assets/images/petit-organza-flower.webp";
import petitPearlRibbonImage from "../assets/images/petit-pearl-ribbon.webp";
import petitSilkRoseImage from "../assets/images/petit-silk-rose.webp";
import { siteConfig } from "../config/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import type { CollectionCard, ProductCard } from "../types/site";

export const collectionCards: CollectionCard[] = [
  {
    slug: "petit",
    title: "Petit",
    description:
      "Laços, flores e acabamentos suaves para batizados, festas, retratos e celebrações que pedem delicadeza sem excesso.",
    ctaLabel: "Ver detalhes",
    image: collectionPetitImage,
    imageAlt: "Criança usando acessório artesanal delicado da coleção Petit.",
    href: "/colecoes/petit",
    ctaMode: "route",
  },
  {
    slug: "bridal",
    title: "Bridal",
    description:
      "Pérolas, renda e composições sob medida para noivas que querem presença leve, beleza sutil e memória duradoura.",
    ctaLabel: "Conversar sobre Bridal",
    image: collectionBridalImage,
    imageAlt: "Noiva com acessório floral e perolado da coleção Bridal.",
    href: buildWhatsAppUrl({
      phone: siteConfig.whatsapp.phone,
      message: siteConfig.whatsapp.collectionMessages.bridal,
    }),
    ctaMode: "whatsapp",
  },
  {
    slug: "recem-nascido",
    title: "Recém-Nascido",
    description:
      "Toques gentis, bases macias e detalhes delicados para os primeiros dias, as primeiras fotos e as primeiras lembranças.",
    ctaLabel: "Conversar sobre Recém-Nascido",
    image: collectionNewbornImage,
    imageAlt: "Acessórios delicados para recém-nascido sobre tecido neutro.",
    href: buildWhatsAppUrl({
      phone: siteConfig.whatsapp.phone,
      message: siteConfig.whatsapp.collectionMessages["recem-nascido"],
    }),
    ctaMode: "whatsapp",
  },
];

export const petiteIntro = {
  eyebrow: "Infância delicada",
  title: "Coleção Petit",
  description:
    "A coleção Petit reúne laços, flores e acabamentos suaves para batizados, aniversários, retratos e ocasiões em que a delicadeza precisa aparecer sem roubar a cena do momento.",
  ctaLabel: "Falar com a consultora",
};

export const petitProducts: ProductCard[] = [
  {
    name: "Laço de Seda Rosa",
    description:
      "Blush suave em seda italiana, com presença delicada e acabamento limpo para retratos, festas e cerimônias.",
    priceLabel: "R$ 185",
    image: petitSilkRoseImage,
    imageAlt: "Laço de seda rosa sobre fundo claro.",
    whatsappMessage:
      "Olá! Gostaria de consultar o Laço de Seda Rosa da coleção Petit.",
  },
  {
    name: "Renda Herança",
    description:
      "Estrutura leve em renda clara para composições românticas, batizados e ocasiões em que menos chama mais atenção.",
    priceLabel: "R$ 220",
    image: petitLaceHeirloomImage,
    imageAlt: "Acessório delicado em renda clara da coleção Petit.",
    whatsappMessage:
      "Olá! Gostaria de consultar o modelo Renda Herança da coleção Petit.",
  },
  {
    name: "Fita de Pérolas",
    description:
      "Caimento leve com brilho discreto para looks delicados, editoriais infantis e celebrações especiais.",
    priceLabel: "R$ 198",
    image: petitPearlRibbonImage,
    imageAlt: "Fita delicada com acabamento perolado da coleção Petit.",
    whatsappMessage:
      "Olá! Gostaria de consultar a Fita de Pérolas da coleção Petit.",
  },
  {
    name: "Laço Petit Champagne",
    description:
      "Tafetá de seda em tom champagne para quem quer um toque elegante, suave e fácil de combinar.",
    priceLabel: "R$ 140",
    image: petitChampagneImage,
    imageAlt: "Laço pequeno em tom champagne da coleção Petit.",
    whatsappMessage:
      "Olá! Gostaria de consultar o Laço Petit Champagne da coleção Petit.",
  },
  {
    name: "Flor de Organza",
    description:
      "Pétalas moldadas à mão para um efeito leve, feminino e artesanal, sem aparência rígida.",
    priceLabel: "R$ 210",
    image: petitOrganzaFlowerImage,
    imageAlt: "Flor de organza delicada da coleção Petit.",
    whatsappMessage:
      "Olá! Gostaria de consultar a Flor de Organza da coleção Petit.",
  },
];
