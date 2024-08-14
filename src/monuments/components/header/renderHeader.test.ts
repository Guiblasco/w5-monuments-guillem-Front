import renderHeader from "./renderHeader.js";

describe("Given de header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show Monuments inside heading", () => {
      const screen = document.createElement("div");
      const header = renderHeader();
      const expectedHeadingTitle = "Monuments";

      screen.appendChild(header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedHeadingTitle);
    });
  });
});
