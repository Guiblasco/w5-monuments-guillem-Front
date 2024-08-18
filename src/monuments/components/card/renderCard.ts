import type { Monument } from "../../types";
import "./renderCard.css";

export const renderCard = ({
  name,
  city,
  country,
  description,
  imageUrl,
}: Monument): HTMLElement => {
  const card = document.createElement("article");

  card.classList.add("card-list__card");

  card.innerHTML = `
    <h2 class="card__title">${name}</h2>
    <img class="card__image" src="${imageUrl}" alt="one monumnent" width=300 heigth=300>
    <span class="card__country">${country}</span>
    <span class="card__city">${city}</span>
    <p class="card__description">${description}</p>
  `;

  return card;
};
