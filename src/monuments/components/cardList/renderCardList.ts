import type { Monument } from "../../types";

export const renderCardList = (monuments: Monument[]): HTMLElement => {
  const cardList = document.createElement("ul");

  cardList.innerHTML = `
    <li></li>
  `;

  return cardList;
};
