import { petiteIntro, petitProducts } from "../content/collections";
import { PageMeta } from "../components/ui/PageMeta";
import { SectionReveal } from "../components/ui/SectionReveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";

export function CollectionPetitPage() {
  return (
    <>
      <PageMeta
        description="Laços, flores e acessórios delicados para infância, batizados e celebrações especiais, com orientação consultiva pelo WhatsApp."
        title="Coleção Petit | Alicia's Ties"
      />
      <SectionReveal as="section" className="page-shell section-space">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{petiteIntro.eyebrow}</span>
          <h1 className="page-title mt-4">{petiteIntro.title}</h1>
          <p className="section-copy mt-6">{petiteIntro.description}</p>
          <WhatsappButton className="mt-8">
            {petiteIntro.ctaLabel}
          </WhatsappButton>
        </div>
      </SectionReveal>
      <SectionReveal as="section" className="page-shell section-space">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {petitProducts.map((product) => (
            <article
              key={product.name}
              className="surface-panel overflow-hidden shadow-[0_24px_60px_rgba(74,64,54,0.08)]"
            >
              <img
                alt={product.imageAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                src={product.image}
              />
              <div className="space-y-4 p-6">
                <h2 className="font-[var(--font-heading)] text-2xl italic text-[var(--color-text)]">
                  {product.name}
                </h2>
                <p className="text-sm leading-7 text-[rgba(74,64,54,0.78)] md:text-base">
                  {product.description}
                </p>
                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="font-[var(--font-heading)] text-xl text-[var(--color-primary)]">
                    {product.priceLabel}
                  </span>
                  <WhatsappButton
                    className="!h-11 !px-4 !text-[11px]"
                    message={product.whatsappMessage}
                  >
                    Consultar
                  </WhatsappButton>
                </div>
              </div>
            </article>
          ))}
          <article className="surface-panel flex flex-col justify-between p-7 shadow-[0_24px_60px_rgba(74,64,54,0.08)]">
            <div>
              <span className="eyebrow">Sob medida</span>
              <h2 className="section-title mt-4 !text-left !text-[2rem]">
                Nem toda ocasião pede uma peça pronta
              </h2>
              <p className="mt-5 text-sm leading-7 text-[rgba(74,64,54,0.78)] md:text-base">
                Para batizados, aniversários, ensaios e presentes especiais, o
                atelier desenvolve peças com ajustes de cor, escala, base e
                acabamento.
              </p>
            </div>
            <WhatsappButton
              className="mt-8"
              message="Olá! Vim pela coleção Petit e quero criar uma peça exclusiva para uma ocasião especial."
            >
              Quero criar uma peça exclusiva
            </WhatsappButton>
          </article>
        </div>
      </SectionReveal>
      <SectionReveal as="section" className="page-shell section-space">
        <div className="surface-panel mx-auto max-w-4xl p-8 text-center md:p-12">
          <h2 className="section-title">
            Quer ajustar cor, tamanho ou acabamento?
          </h2>
          <p className="section-copy mt-5">
            Se você gostou de uma referência, mas ainda quer adaptar tom,
            proporção ou base, a consultora pode orientar a melhor versão para a
            ocasião.
          </p>
          <WhatsappButton className="mt-8">Pedir orientação</WhatsappButton>
        </div>
      </SectionReveal>
    </>
  );
}
