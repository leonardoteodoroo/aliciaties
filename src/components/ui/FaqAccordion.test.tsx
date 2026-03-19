import { fireEvent, render, screen } from "@testing-library/react";
import { FaqAccordion } from "./FaqAccordion";

describe("FaqAccordion", () => {
  it("expands an item on click and keyboard interaction", () => {
    render(
      <FaqAccordion
        items={[
          {
            question: "Qual é o prazo de produção e envio?",
            answer: "Trabalhamos com produção artesanal sob encomenda.",
          },
        ]}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: /qual é o prazo de produção e envio/i,
    });

    expect(
      screen.queryByText(/trabalhamos com produção artesanal sob encomenda/i),
    ).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(
      screen.getByText(/trabalhamos com produção artesanal sob encomenda/i),
    ).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Enter" });

    expect(
      screen.queryByText(/trabalhamos com produção artesanal sob encomenda/i),
    ).not.toBeInTheDocument();
  });
});
