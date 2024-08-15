import renderApp from "./monuments/components/app/renderApp.js";
import { getMonuments } from "./monuments/api/getMonuments.js";
import "@fontsource/nanum-gothic";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root element not found");
}

const app = renderApp();

(async () => {
  await getMonuments("monuments");
  root.appendChild(app);
})();
