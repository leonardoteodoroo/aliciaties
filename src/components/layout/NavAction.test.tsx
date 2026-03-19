import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { SectionScrollManager } from "../../app/SectionScrollManager";
import { navItems } from "../../config/site";
import { NavAction } from "./NavAction";

function RoutedShell() {
  return (
    <>
      <SectionScrollManager />
      <Outlet />
    </>
  );
}

describe("NavAction", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("navigates from an internal page to the home memórias anchor", async () => {
    const memoriesItem = navItems.find((item) => item.label === "Memórias");

    expect(memoriesItem?.kind).toBe("anchor");

    render(
      <MemoryRouter initialEntries={["/atelier"]}>
        <Routes>
          <Route element={<RoutedShell />}>
            <Route
              path="/"
              element={
                <section id="depoimentos">
                  <h1>Peças que encontraram o seu lugar na memória</h1>
                </section>
              }
            />
            <Route
              path="/atelier"
              element={
                memoriesItem ? (
                  <NavAction className="nav-link" item={memoriesItem} />
                ) : null
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /^memórias$/i }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /peças que encontraram o seu lugar na memória/i,
        }),
      ).toBeInTheDocument();
    });

    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});
