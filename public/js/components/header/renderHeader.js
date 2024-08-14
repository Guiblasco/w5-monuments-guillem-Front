import renderNavigatorMenu from "../navigatorMenu/renderNavigatorMenu.js";
const renderHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    const navigationMenu = renderNavigatorMenu();
    header.innerHTML = `
    <h1 class="main-heading">Monuments</h1>
    ${navigationMenu.outerHTML}
  `;
    return header;
};
export default renderHeader;
//# sourceMappingURL=renderHeader.js.map