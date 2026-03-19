import { buildWhatsAppUrl } from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("creates a wa.me URL with encoded message text", () => {
    expect(
      buildWhatsAppUrl({
        phone: "+55 (00) 00000-0000",
        message: "Olá! Quero ver a coleção Bridal.",
      }),
    ).toBe(
      "https://wa.me/5500000000000?text=Ol%C3%A1%21%20Quero%20ver%20a%20cole%C3%A7%C3%A3o%20Bridal.",
    );
  });
});
