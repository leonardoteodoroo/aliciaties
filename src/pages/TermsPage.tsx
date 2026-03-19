import { termsContent } from "../content/legal";
import { LegalPageTemplate } from "../components/ui/LegalPageTemplate";
import { PageMeta } from "../components/ui/PageMeta";

export function TermsPage() {
  return (
    <>
      <PageMeta
        description="Informações sobre uso do site, atendimento, encomendas e funcionamento comercial da Alicia's Ties."
        title="Termos de Uso | Alicia's Ties"
      />
      <LegalPageTemplate content={termsContent} />
    </>
  );
}
