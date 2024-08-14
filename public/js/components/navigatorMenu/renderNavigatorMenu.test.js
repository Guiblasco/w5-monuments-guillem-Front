import renderNavigatorMenu from "./renderNavigatorMenu.js";
describe("Given the navigator menu component", () => {
    describe("When it is rendered", () => {
        test("Then it should show List Monuments as text", () => {
            const screen = document.createElement("div");
            const expectedTextListMonuments = "List Monuments";
            const navigatorMenu = renderNavigatorMenu();
            screen.appendChild(navigatorMenu);
            const listItems = screen.querySelectorAll("a");
            expect(listItems[0]).not.toBeNull();
            expect(listItems[0]?.textContent).toBe(expectedTextListMonuments);
        });
        test("Then it should show Create Monumets as text", () => {
            const screen = document.createElement("div");
            const expectedTextCreateMonuments = "Create monument";
            const navigatorMenu = renderNavigatorMenu();
            screen.appendChild(navigatorMenu);
            const listItems = screen.querySelectorAll("a");
            expect(listItems[1]).not.toBeNull();
            expect(listItems[1].textContent).toBe(expectedTextCreateMonuments);
        });
    });
});
//# sourceMappingURL=renderNavigatorMenu.test.js.map