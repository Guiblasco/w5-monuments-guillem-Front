import renderApp from "./components/app/renderApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root element not found");
}

const app = renderApp();

root.appendChild(app);
