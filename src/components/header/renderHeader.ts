import renderNavigationMenu from "../navigatorMenu/renderNavigatorMenu.js";

const renderHeader = (): HTMLElement => {
  const header = document.createElement("header");

  header.classList.add("header");

  const navigationMenu = renderNavigationMenu();

  header.innerHTML = `
    <h1 class="main-heading">Monuments</h1>
    ${navigationMenu.outerHTML}
    `;

  return header;
};

export default renderHeader;
