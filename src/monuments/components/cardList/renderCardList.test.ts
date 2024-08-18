import { type Monument } from "../../types";
import { renderCardList } from "./renderCardList";

describe("Given the function renderCardList", () => {
  describe("When it receives 2 monuments named 'Coliseo' and 'Sagrada Familia'", () => {
    test("Then it should show 2 monuments in an article with heading monument's name ", () => {
      const screen = document.createElement("div");
      const monumentsName: string[] = ["Coliseo", "Sagrada Familia"];
      const monuments: Monument[] = [
        {
          name: "Coliseo",
          city: "",
          country: "",
          description: "",
          id: "",
          imageUrl: "",
        },
        {
          name: "Sagrada Familia",
          city: "",
          country: "",
          description: "",
          id: "",
          imageUrl: "",
        },
      ];

      const cardList = renderCardList(monuments);
      screen.appendChild(cardList);

      const monumentsList = screen.querySelectorAll("h2");

      monumentsList.forEach((monument, monumentPosition) => {
        expect(monument).not.toBeNull();
        expect(monument.textContent).toBe(monumentsName[monumentPosition]);
      });
    });
  });
});
