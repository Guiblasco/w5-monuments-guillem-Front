import renderApp from "./components/app/renderApp.js";
import { getMonuments } from "./components/getMonuments.js";
const root = document.querySelector(".root");
if (!root) {
    throw new Error("Root element not found");
}
const app = renderApp();
await getMonuments("monuments");
root.appendChild(app);
//# sourceMappingURL=index.js.map