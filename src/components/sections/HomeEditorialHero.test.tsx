import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { homeHero } from "../../content/home";
import { HomeEditorialHero } from "./HomeEditorialHero";

describe("HomeEditorialHero", () => {
  it("renders the editorial hero with the selected mobile halo treatment as the default", () => {
    render(
      <MemoryRouter>
        <HomeEditorialHero content={homeHero} />
      </MemoryRouter>,
    );

    const heroSection = screen.getByTestId("hero-section");
    const copyPanel = screen.getByTestId("hero-copy-panel");
    const mediaPanel = screen.getByTestId("hero-media-panel");
    const featureStrip = screen.getByRole("list", {
      name: /selos do atelier/i,
    });

    expect(heroSection).toHaveClass("hero-surface-warm");
    expect(copyPanel).toHaveClass("hero-copy-panel-mobile-ivory-fade-halo");
    expect(mediaPanel).toBeInTheDocument();
    expect(
      within(mediaPanel).getByRole("img", { name: /editorial hero/i }),
    ).toBeInTheDocument();
    expect(within(mediaPanel).getByText(/^100$/)).toBeInTheDocument();
    expect(within(mediaPanel).getByText(/^0$/)).toBeInTheDocument();
    expect(within(copyPanel).getByText(/afeto/i)).toBeInTheDocument();
    expect(
      within(copyPanel).getByRole("link", { name: /encomendar via whatsapp/i }),
    ).toBeInTheDocument();
    expect(
      within(copyPanel).getByRole("link", { name: /ver coleções/i }),
    ).toBeInTheDocument();
    expect(featureStrip).toBeInTheDocument();
    expect(featureStrip).toHaveClass("hero-feature-strip-three-up");
    expect(
      within(featureStrip).getAllByTestId("hero-feature-card"),
    ).toHaveLength(3);
    expect(
      within(copyPanel).getByRole("button", { name: /role para descobrir/i }),
    ).toBeInTheDocument();
    expect(within(copyPanel).getByRole("heading")).toHaveClass(
      "home-hero-title-mobile-ivory-fade-halo",
    );
  });
});
