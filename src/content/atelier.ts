import atelierArtisanalImage from "../assets/images/atelier-artisanal.webp";
import atelierMaterialsImage from "../assets/images/atelier-materials.webp";
import memoryBabyBowImage from "../assets/images/memory-baby-bow.webp";
import memoryBrideVineImage from "../assets/images/memory-bride-vine.webp";
import memoryDetailSquareImage from "../assets/images/memory-detail-square.webp";
import memoryEditorialPortraitImage from "../assets/images/memory-editorial-portrait.webp";
import memoryLaceHeadbandImage from "../assets/images/memory-lace-headband.webp";
import memoryMotherBabyImage from "../assets/images/memory-mother-baby.webp";
import memoryProcessSquareImage from "../assets/images/memory-process-square.webp";
import memoryWeddingDetailsImage from "../assets/images/memory-wedding-details.webp";
import type { MemoryCard, StoryBlock } from "../types/site";

export const atelierIntro = {
  title:
    "O atelier existe para uma coisa simples: fazer a delicadeza parecer inevitável",
  description:
    "Quando material, proporção e acabamento conversam entre si, a peça não parece excessiva nem improvisada. Parece pertencer ao momento.",
};

export const atelierStoryBlocks: StoryBlock[] = [
  {
    eyebrow: "01 — Mão e tempo",
    title: "Artesanal de verdade",
    description:
      "Há diferenças que só aparecem de perto: o caimento da fita, a limpeza do acabamento, a firmeza sem rigidez, a delicadeza sem fragilidade visual. É isso que o trabalho à mão preserva.",
    image: atelierArtisanalImage,
    imageAlt: "Mãos costurando renda clara em um ambiente de atelier.",
  },
  {
    eyebrow: "02 — Matéria e presença",
    title: "Materiais que sustentam a delicadeza",
    description:
      "Seda, pérolas e renda francesa não entram aqui por status. Entram porque textura, brilho e caimento mudam completamente o resultado de uma peça pequena.",
    image: atelierMaterialsImage,
    imageAlt: "Carretéis de fita e pérolas espalhadas sobre uma mesa clara.",
    reverse: true,
  },
];

export const atelierQuote = {
  quote:
    "A peça mais linda que minha filha já usou. Senti o cuidado em cada milímetro do tecido quando abri a caixa.",
  author: "Mariana V., mãe da Sofia",
};

const memoryImageCards: MemoryCard[] = [
  {
    id: "memory-bride-vine",
    kind: "image",
    image: memoryBrideVineImage,
    imageAlt: "Noiva usando acessório perolado e floral.",
    size: "portrait",
  },
  {
    id: "memory-baby-bow",
    kind: "image",
    image: memoryBabyBowImage,
    imageAlt: "Bebê dormindo com laço suave em tom rosado.",
    size: "square",
  },
  {
    id: "memory-lace-headband",
    kind: "image",
    image: memoryLaceHeadbandImage,
    imageAlt: "Close de uma faixa delicada com renda clara.",
    size: "square",
  },
  {
    id: "memory-wedding-details",
    kind: "image",
    image: memoryWeddingDetailsImage,
    imageAlt: "Detalhes de casamento com fita de seda e luz quente.",
    size: "portrait",
  },
  {
    id: "memory-mother-baby",
    kind: "image",
    image: memoryMotherBabyImage,
    imageAlt: "Mãe segurando bebê com acessório floral delicado.",
    size: "landscape",
  },
];

export const homeMemoryCards: MemoryCard[] = [
  memoryImageCards[0],
  memoryImageCards[1],
  memoryImageCards[2],
  memoryImageCards[3],
  {
    id: "memory-detail-square",
    kind: "image",
    image: memoryDetailSquareImage,
    imageAlt: "Detalhe em close do acabamento artesanal de um laço de seda creme.",
    size: "square",
  },
  {
    id: "memory-process-square",
    kind: "image",
    image: memoryProcessSquareImage,
    imageAlt: "Mãos de artesã amarrando laço de seda em bancada de ateliê com materiais ao redor.",
    size: "square",
  },
  memoryImageCards[4],
  {
    id: "memory-editorial-portrait",
    kind: "image",
    image: memoryEditorialPortraitImage,
    imageAlt: "Noiva de perfil com acessório de renda e pérolas no cabelo.",
    size: "portrait",
  },
];

export const atelierMemoryCards: MemoryCard[] = [
  memoryImageCards[0],
  memoryImageCards[1],
  memoryImageCards[2],
  memoryImageCards[3],
  {
    id: "atelier-detail-square",
    kind: "image",
    image: memoryDetailSquareImage,
    imageAlt: "Macro do tecido de seda mostrando acabamento artesanal e costura à mão.",
    size: "square",
  },
  {
    id: "atelier-process-square",
    kind: "image",
    image: memoryProcessSquareImage,
    imageAlt: "Vista de cima de artesã trabalhando com seda, pérolas e tesoura dourada.",
    size: "square",
  },
  memoryImageCards[4],
  {
    id: "atelier-editorial-portrait",
    kind: "image",
    image: memoryEditorialPortraitImage,
    imageAlt: "Retrato editorial de noiva com acessório de renda francesa e pérolas no cabelo.",
    size: "portrait",
  },
];
