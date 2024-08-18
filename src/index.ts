import renderApp from "./monuments/components/app/renderApp.js";
import "@fontsource/nanum-gothic";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root element not found");
}

(async () => {
  const app = await renderApp();
  root.appendChild(app);
})();
