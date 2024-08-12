const renderNavigatorMenu = (): HTMLElement => {
  const navigatorMenu = document.createElement("nav");

  navigatorMenu.classList.add("navigator-menu");
  navigatorMenu.innerHTML = `
    <ul class="navigator-menu__list">
      <li class="navigator-menu__item--active"><a href="">List Monuments</a></li>
      <li class="navigator-menu__item--active"><a href="">Create monument</a></li>
    </ul>
  `;

  return navigatorMenu;
};

export default renderNavigatorMenu;
