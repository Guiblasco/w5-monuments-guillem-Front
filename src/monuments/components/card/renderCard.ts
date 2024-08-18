import type { Monument } from "../../types";
import "./styles/styles.css";

export const renderCard = (monument: Monument): HTMLElement => {
  const card = document.createElement("article");

  card.classList.add("card-list__card");

  card.innerHTML = `
    <h2>${monument.name}</h2>
  `;

  return card;
};
