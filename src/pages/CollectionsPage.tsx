import { collectionCards } from "../content/collections";
import { CollectionGrid } from "../components/sections/CollectionGrid";
import { PageMeta } from "../components/ui/PageMeta";
import { SectionReveal } from "../components/ui/SectionReveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { siteConfig } from "../config/site";

export function CollectionsPage() {
  return (
    <>
      <PageMeta
        description="Coleções artesanais da Alicia's Ties para bebês, noivas e primeiros dias, com atendimento consultivo e acabamento delicado."
        title="Coleções | Alicia's Ties"
      />
      <CollectionGrid
        description="Cada coleção nasce de um tipo de ocasião. Algumas peças pedem suavidade infantil. Outras pedem presença leve no casamento. Outras precisam acolher os primeiros dias com conforto visual e toque gentil."
        items={collectionCards}
        title="Escolha o universo que mais combina com o seu momento"
      />
      <SectionReveal as="section" className="page-shell section-space">
        <div className="surface-panel mx-auto max-w-3xl p-8 text-center md:p-12">
          <span className="eyebrow">Consultoria</span>
          <h2 className="section-title mt-4">
            Se você ainda não sabe qual peça faz sentido, isso é normal
          </h2>
          <p className="section-copy mt-5">
            Entre cor, caimento, ocasião, idade e acabamento, a escolha costuma
            ficar mais simples quando alguém olha o conjunto com você.
          </p>
          <WhatsappButton
            className="mt-8"
            message={siteConfig.whatsapp.collectionMessages.atelier}
          >
            Pedir orientação
          </WhatsappButton>
        </div>
      </SectionReveal>
    </>
  );
}
