import { ArrowUpRight } from "lucide-react";
import {
  atelierIntro,
  atelierMemoryCards,
  atelierQuote,
  atelierStoryBlocks,
} from "../content/atelier";
import { siteConfig } from "../config/site";
import { AtelierStoryBlock } from "../components/sections/AtelierStoryBlock";
import { MemoryGrid } from "../components/sections/MemoryGrid";
import { TestimonialQuote } from "../components/sections/TestimonialQuote";
import { PageMeta } from "../components/ui/PageMeta";
import { SectionReveal } from "../components/ui/SectionReveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";

export function AtelierPage() {
  return (
    <>
      <PageMeta
        description="Conheça o atelier da Alicia's Ties: criação artesanal, materiais delicados e atendimento consultivo para peças memoráveis."
        title="Atelier | Alicia's Ties"
      />
      <SectionReveal
        as="section"
        className="page-shell section-space text-center"
      >
        <span className="eyebrow">Atelier</span>
        <h1 className="page-title mt-4">{atelierIntro.title}</h1>
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
            <WhatsappButton>Falar com a consultora</WhatsappButton>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
