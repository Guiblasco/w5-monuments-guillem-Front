import type { Monument } from "../../types";
import { renderCard } from "../card/renderCard";
import "./renderCardList.css";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");

  cardList.classList.add("card-list");

  monuments.forEach((monument) => {
    const card = renderCard(monument);
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card-list__container");
    cardListItem.appendChild(card);
    cardList.appendChild(cardListItem);
  });

  return cardList;
};
