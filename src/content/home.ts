import heroImage from "../assets/images/hero-bride-baby.webp";
import type { HomeHeroContent } from "../types/site";

export const homeHero: HomeHeroContent = {
  titleSegments: [
    { text: "Onde o ", row: 1 },
    { text: "afeto", emphasized: true, tone: "warm", row: 1 },
    { text: " se transforma em acessórios ", row: 2 },
    { text: "memoráveis", emphasized: true, tone: "warm", row: 3 },
    { text: ".", row: 3 },
  ],
  description:
    "A Alicia's Ties cria acessórios artesanais para bebês e noivas com seda, pérolas e renda francesa. Cada encomenda nasce em conversa próxima, para que a delicadeza não seja um detalhe improvisado, mas parte da memória da ocasião.",
  primaryCta: "PEDIR ORIENTAÇÃO NO WHATSAPP",
  secondaryCta: "CONHECER AS COLEÇÕES",
  image: heroImage,
  imageAlt:
    "Fotografia editorial com bebê e noiva em luz natural suave, usada como imagem principal da Alicia’s Ties.",
  scrollCueLabel: "Role para descobrir",
  featureCards: [
    { label: "MATERIAIS", value: "Seda, pérolas e renda francesa" },
    { label: "FEITO À MÃO", value: "Acabamento cuidadoso, peça por peça" },
    { label: "ATENDIMENTO", value: "Orientação pessoal do início ao envio" },
  ],
};

export const homeAtelierSummary = {
  title: "O cuidado aparece antes mesmo da peça ficar pronta",
  description:
    "No atelier, escolha de material, escala, base e acabamento não são detalhes soltos. São decisões que fazem a peça parecer inevitável para aquele momento.",
  ctaLabel: "Conhecer o atelier",
};
