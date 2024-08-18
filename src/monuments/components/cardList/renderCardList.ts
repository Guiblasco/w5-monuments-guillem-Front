import type { Monument } from "../../types";
import { renderCard } from "../card/renderCard";
import "./styles/styles.css";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");

  cardList.classList.add("card-list");

  const card = renderCard(monuments[0]);

  cardList.innerHTML = `
    <li>${card.outerHTML}</li>
  `;

  return cardList;
};
