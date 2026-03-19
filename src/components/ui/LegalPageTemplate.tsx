import type { LegalPageContent } from "../../types/site";

interface LegalPageTemplateProps {
  content: LegalPageContent;
}

export function LegalPageTemplate({ content }: LegalPageTemplateProps) {
  return (
    <article className="page-shell py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">Documento</span>
        <h1 className="page-title mt-4">{content.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Atualizado em {content.lastUpdated}
        </p>
        <div className="surface-panel mt-10 space-y-10 p-6 md:p-10">
          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-[var(--font-heading)] text-2xl italic text-[var(--color-text)]">
                {section.heading}
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[rgba(74,64,54,0.82)] md:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
