import renderNavigatorMenu from "./renderNavigatorMenu";

describe("Given the navigator menu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show List Monuments as text", () => {
      const screen = document.createElement("div");
      const expectedTextListMonuments = "List Monuments";
      const navigatorMenu = renderNavigatorMenu();

      screen.appendChild(navigatorMenu);
      const listItem = screen.querySelector("li");

      expect(listItem).not.toBeNull();
      expect(listItem?.textContent).toBe(expectedTextListMonuments);
    });
  });
});
