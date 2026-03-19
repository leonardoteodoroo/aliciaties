import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

describe("HomePage", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
      writable: true,
    });
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders depoimentos and dúvidas as anchored home sections", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(document.getElementById("depoimentos")).toBeInTheDocument();
    expect(document.getElementById("duvidas")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /onde o afeto se transforma em acessórios memoráveis/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/^afeto$/i).tagName.toLowerCase()).toBe("em");
    expect(screen.getByText(/^memoráveis$/i).tagName.toLowerCase()).toBe("em");
    expect(
      screen.getByRole("heading", { name: /peças em histórias reais/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /vamos criar algo único/i }),
    ).toBeInTheDocument();
  }, 10000);
});
