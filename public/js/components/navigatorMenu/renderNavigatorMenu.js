const renderNavigatorMenu = () => {
    const navigatorMenu = document.createElement("nav");
    navigatorMenu.classList.add("navigator-menu");
    navigatorMenu.innerHTML = `
    <ul class="navigator-list">
      <li class="navigator-list__item navigator-list__item--active"><a>List Monuments</a></li>
      <li class="navigator-list__item "><a>Create monument</a></li>
    </ul>
  `;
    return navigatorMenu;
};
export default renderNavigatorMenu;
//# sourceMappingURL=renderNavigatorMenu.js.map