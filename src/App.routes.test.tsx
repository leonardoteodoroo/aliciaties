import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App routes", () => {
  it("renders the collections route with mixed internal and WhatsApp links", () => {
    window.history.pushState({}, "", "/colecoes");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /escolha o universo que mais combina com o seu momento/i,
      }),
    ).toBeInTheDocument();

    const petitLink = screen.getByRole("link", { name: /petit/i });
    expect(petitLink).toHaveAttribute(
      "href",
      expect.stringContaining("/colecoes/petit"),
    );

    const bridalLink = screen.getByRole("link", { name: /bridal/i });
    expect(bridalLink).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me/"),
    );
  }, 10000);

  it("renders the faq route with the expected questions", () => {
    window.history.pushState({}, "", "/faq");
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /dúvidas frequentes/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /qual é o prazo de produção e envio/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the legal placeholder route", () => {
    window.history.pushState({}, "", "/termos");
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /termos de uso/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /sobre o site e o atendimento/i }),
    ).toBeInTheDocument();
  });

  it("renders image placeholders on the atelier route for future uploads", () => {
    window.history.pushState({}, "", "/atelier");
    render(<App />);

    expect(
      screen.getByText(/o olhar percebe o que a pressa não percebe\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a delicadeza não precisa pedir atenção\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/algumas peças passam\. outras permanecem\./i),
    ).toBeInTheDocument();
  });
});
