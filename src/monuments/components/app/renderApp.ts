import renderHeader from "../header/renderHeader.js";

const renderApp = (): HTMLElement => {
  const app = document.createElement("div");

  app.classList.add("app-container");

  const header = renderHeader();

  app.appendChild(header);

  return app;
};

export default renderApp;
