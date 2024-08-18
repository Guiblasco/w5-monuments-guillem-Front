import { type Monument } from "../../types";
import { renderCard } from "./renderCard";

describe("Given the function renderCard", () => {
  describe("When it receives a monument named 'Coliseo'", () => {
    test("Then it should render a card with heading 'Coliseo'", () => {
      const screen = document.createElement("div");
      const monumentName = "Coliseo";
      const monument: Partial<Monument> = {
        name: monumentName,
      };

      const card = renderCard(monument as Monument);
      screen.appendChild(card);

      const cardTitle = screen.querySelector("h2");

      expect(cardTitle).not.toBeNull();
      expect(cardTitle?.textContent).toBe(monumentName);
    });
  });
});
