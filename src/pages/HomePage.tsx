import { Link } from "react-router-dom";
import { collectionCards } from "../content/collections";
import { faqItems } from "../content/faq";
import { homeMemoryCards } from "../content/atelier";
import { homeAtelierSummary, homeHero } from "../content/home";
import { siteConfig } from "../config/site";
import { CollectionGrid } from "../components/sections/CollectionGrid";
import { FaqConversionSection } from "../components/sections/FaqConversionSection";
import { HomeEditorialHero } from "../components/sections/HomeEditorialHero";
import { MemoryGrid } from "../components/sections/MemoryGrid";
import { PageMeta } from "../components/ui/PageMeta";
import { SectionReveal } from "../components/ui/SectionReveal";

export function HomePage() {
  return (
    <>
      <PageMeta
        description="Peças artesanais para bebês e noivas, feitas com seda, pérolas e renda francesa. Atendimento consultivo pelo WhatsApp e criação cuidadosa para ocasiões especiais."
        title="Alicia's Ties | Acessórios artesanais para bebês e noivas"
      />
      <HomeEditorialHero
        content={homeHero}
        primaryMessage={siteConfig.whatsapp.defaultMessage}
      />
      <CollectionGrid
        description="Nem toda ocasião pede o mesmo gesto. Por isso a Alicia's Ties organiza suas peças em coleções pensadas para infância, casamento e primeiros dias, sempre com a mesma atenção ao acabamento."
        items={collectionCards}
        sectionId="colecoes"
        title="Delicadezas para momentos diferentes"
      />
      <SectionReveal as="section" className="page-shell section-space">
        <div className="atelier-summary-panel mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Atelier</span>
            <h2 className="section-title mt-4">{homeAtelierSummary.title}</h2>
            <p className="section-copy mt-5">
              {homeAtelierSummary.description}
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:text-left">
            <p className="max-w-xl text-sm leading-8 text-[rgba(74,64,54,0.76)] md:text-base">
              É por isso que o atendimento começa em conversa: entender roupa,
              idade, ocasião, referência e sensibilidade visual costuma evitar
              excesso, improviso e arrependimento.
            </p>
            <Link className="btn-secondary shrink-0" to="/atelier">
              {homeAtelierSummary.ctaLabel}
            </Link>
          </div>
        </div>
      </SectionReveal>
      <MemoryGrid
        description="A melhor prova não é um adjetivo. É ver como a peça entra na foto sem disputar atenção e continua bonita na lembrança."
        eyebrow="Histórias reais"
        items={homeMemoryCards}
        sectionId="depoimentos"
        title="Quando a peça encontra o momento certo"
      />
      <FaqConversionSection
        ctaCopy="Conte para a consultora o momento, a idade, a roupa ou a referência que você tem em mente. A partir disso, fica muito mais fácil indicar a peça certa."
        ctaTitle="Se a ocasião importa, a escolha também"
        description="Algumas perguntas se repetem porque toda peça delicada envolve ocasião, tempo e acabamento. Reunimos o essencial para a decisão ficar mais simples."
        eyebrow="Dúvidas"
        items={faqItems}
        sectionId="duvidas"
        title="Antes de escolher, vale saber disso"
      />
    </>
  );
}
