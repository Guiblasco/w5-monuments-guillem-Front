import { getMonuments } from "../../../api/getMonuments.js";
import { renderCardList } from "../cardList/renderCardList.js";
import renderHeader from "../header/renderHeader.js";
import "./renderApp.css";

const renderApp = async (): Promise<HTMLElement> => {
  const app = document.createElement("div");

  app.classList.add("app-container");

  const header = renderHeader();

  const monuments = await getMonuments();

  const cardList = renderCardList(monuments.monuments);

  app.appendChild(header);
  app.appendChild(cardList);

  return app;
};

export default renderApp;
