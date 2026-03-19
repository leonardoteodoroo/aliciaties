import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { collectionCards } from "../content/collections";
import { faqItems } from "../content/faq";
import {
  atelierIntro,
  atelierMemoryCards,
  atelierQuote,
  atelierStoryBlocks,
  homeMemoryCards,
} from "../content/atelier";
import { homeHero } from "../content/home";
import { siteConfig } from "../config/site";
import { AtelierStoryBlock } from "../components/sections/AtelierStoryBlock";
import { CollectionGrid } from "../components/sections/CollectionGrid";
import { FaqConversionSection } from "../components/sections/FaqConversionSection";
import { HomeEditorialHero } from "../components/sections/HomeEditorialHero";
import { MemoryGrid } from "../components/sections/MemoryGrid";
import { PageMeta } from "../components/ui/PageMeta";
import { SectionReveal } from "../components/ui/SectionReveal";
import { TestimonialQuote } from "../components/sections/TestimonialQuote";
import { WhatsappButton } from "../components/ui/WhatsappButton";

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

      <SectionReveal
        as="section"
        className="page-shell section-space text-center"
        id="atelier"
      >
        <span className="eyebrow">Atelier</span>
        <h2 className="section-title mt-4">{atelierIntro.title}</h2>
        <p className="section-copy mx-auto mt-6 max-w-3xl">
          {atelierIntro.description}
        </p>
      </SectionReveal>

      <div className="page-shell section-space space-y-16">
        {atelierStoryBlocks.map((story) => (
          <AtelierStoryBlock key={story.title} story={story} />
        ))}
      </div>

      <TestimonialQuote
        author={atelierQuote.author}
        quote={atelierQuote.quote}
      />

      <MemoryGrid
        description="Essas imagens fazem um trabalho melhor do que qualquer promessa: mostram como a delicadeza certa pode pertencer ao momento com naturalidade."
        eyebrow="Histórias reais"
        items={atelierMemoryCards}
        title="Peças que encontraram o seu lugar na memória"
      />

      <SectionReveal as="section" className="page-shell section-space">
        <div className="surface-panel mx-auto flex max-w-4xl flex-col gap-6 p-8 text-center md:p-12">
          <h2 className="section-title">Continue a conversa fora do site</h2>
          <p className="section-copy">
            Se quiser ver mais referências, o Instagram mostra o universo visual
            da marca. Se já tiver uma ocasião em mente, o WhatsApp é o caminho
            mais rápido para começar.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="btn-secondary"
              href={siteConfig.instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ver mais no Instagram
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <Link to="/atelier" className="btn-secondary">
              Página Completa do Atelier
            </Link>
            <WhatsappButton>Falar com a consultora</WhatsappButton>
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
