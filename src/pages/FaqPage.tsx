import { faqItems } from "../content/faq";
import { FaqConversionSection } from "../components/sections/FaqConversionSection";
import { PageMeta } from "../components/ui/PageMeta";

export function FaqPage() {
  return (
    <>
      <PageMeta
        description="Respostas sobre prazos, personalização, medidas e cuidados com os acessórios artesanais da Alicia's Ties."
        title="Dúvidas Frequentes | Alicia's Ties"
      />
      <FaqConversionSection
        ctaCopy="Às vezes, uma conversa rápida resolve mais do que várias abas abertas. Se quiser, descreva o momento que você tem em mente e seguimos a partir daí."
        ctaTitle="Se preferir, a gente orienta você no WhatsApp"
        description="Se você está escolhendo uma peça delicada para um momento importante, estas são as perguntas que mais ajudam a decidir com calma."
        eyebrow="Dúvidas"
        items={faqItems}
        title="Dúvidas frequentes"
        titleTag="h1"
      />
    </>
  );
}
