import atelierArtisanalImage from "../assets/images/atelier-artisanal.webp";
import atelierMaterialsImage from "../assets/images/atelier-materials.webp";
import memoryBabyBowImage from "../assets/images/memory-baby-bow.webp";
import memoryBrideVineImage from "../assets/images/memory-bride-vine.webp";
import memoryLaceHeadbandImage from "../assets/images/memory-lace-headband.webp";
import memoryMotherBabyImage from "../assets/images/memory-mother-baby.webp";
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
    id: "placeholder-detail-square",
    kind: "placeholder",
    title: "Nem toda delicadeza pede excesso.",
    description:
      "Às vezes a peça certa só confirma o que o momento já tinha de bonito.",
    idealDimensions: "1080 x 1080 px",
    idealRatio: "1:1",
    size: "square",
  },
  {
    id: "placeholder-process-square",
    kind: "placeholder",
    title: "O acabamento muda a memória da foto.",
    description:
      "Quando a escolha é cuidadosa, a peça envelhece melhor no olhar e no álbum.",
    idealDimensions: "1080 x 1080 px",
    idealRatio: "1:1",
    size: "square",
  },
  memoryImageCards[4],
  {
    id: "placeholder-editorial-portrait",
    kind: "placeholder",
    title: "O que hoje entra no look, amanhã entra na história.",
    description:
      "É por isso que algumas escolhas pequenas ficam tanto tempo com a gente.",
    idealDimensions: "1200 x 1800 px",
    idealRatio: "2:3",
    size: "portrait",
  },
];

export const atelierMemoryCards: MemoryCard[] = [
  memoryImageCards[0],
  memoryImageCards[1],
  memoryImageCards[2],
  memoryImageCards[3],
  {
    id: "placeholder-detail-square",
    kind: "placeholder",
    title: "O olhar percebe o que a pressa não percebe.",
    description:
      "Acabamento, textura e proporção mudam o resultado, mesmo quando a peça é pequena.",
    idealDimensions: "1080 x 1080 px",
    idealRatio: "1:1",
    size: "square",
  },
  {
    id: "placeholder-process-square",
    kind: "placeholder",
    title: "A delicadeza não precisa pedir atenção.",
    description:
      "Quando a escolha é boa, ela entra no visual com leveza e fica na lembrança pelo cuidado.",
    idealDimensions: "1080 x 1080 px",
    idealRatio: "1:1",
    size: "square",
  },
  memoryImageCards[4],
  {
    id: "placeholder-editorial-portrait",
    kind: "placeholder",
    title: "Algumas peças passam. Outras permanecem.",
    description: "É isso que o atelier tenta construir em cada encomenda.",
    idealDimensions: "1200 x 1800 px",
    idealRatio: "2:3",
    size: "portrait",
  },
];
