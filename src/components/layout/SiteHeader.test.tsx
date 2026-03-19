import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value,
    writable: true,
  });
}

describe("SiteHeader", () => {
  it("hides the menu during the first fold of the home page", () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(
      screen.queryByRole("link", { name: /^coleções$/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /alicia's ties/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /^memórias$/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /^dúvidas$/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /pedir orientação/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /abrir menu/i }),
    ).not.toBeInTheDocument();
  });

  it("shows the menu on the home page after the first fold", () => {
    setScrollY(900);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /alicia's ties/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^coleções$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^memórias$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^dúvidas$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /pedir orientação/i }),
    ).toBeInTheDocument();
  });

  it("reveals the menu when scrolling down from the top of the home page", () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(
      screen.queryByRole("link", { name: /^coleções$/i }),
    ).not.toBeInTheDocument();

    act(() => {
      setScrollY(900);
      window.dispatchEvent(new Event("scroll"));
    });

    expect(
      screen.getByRole("link", { name: /^coleções$/i }),
    ).toBeInTheDocument();
  });

  it("renders the menu immediately on internal pages", () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={["/atelier"]}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /alicia's ties/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /^coleções$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^memórias$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^dúvidas$/i }),
    ).toBeInTheDocument();
  });
});
