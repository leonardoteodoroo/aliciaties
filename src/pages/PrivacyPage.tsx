import { privacyContent } from "../content/legal";
import { LegalPageTemplate } from "../components/ui/LegalPageTemplate";
import { PageMeta } from "../components/ui/PageMeta";

export function PrivacyPage() {
  return (
    <>
      <PageMeta
        description="Entenda como a Alicia's Ties utiliza as informações compartilhadas durante o atendimento e o processo de encomenda."
        title="Política de Privacidade | Alicia's Ties"
      />
      <LegalPageTemplate content={privacyContent} />
    </>
  );
}
