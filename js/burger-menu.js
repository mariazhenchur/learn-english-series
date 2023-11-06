const headerNav = document.querySelector(".header__nav-list");
const burger = document.querySelector(".header__nav__burger-menu");
const closeIcon = `<svg class="header__nav__burger-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g id="Menu / Close_MD">
    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
</svg>`;
const burgerIcon = `<svg
class="header__nav__burger-menu-icon"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M4 18L20 18" stroke-width="2" stroke-linecap="round" />
<path d="M4 12L20 12" stroke-width="2" stroke-linecap="round" />
<path d="M4 6L20 6" stroke-width="2" stroke-linecap="round" />
</svg>`;

function toggleMenu() {
  if (headerNav.style.display === "flex") {
    headerNav.style.display = "none";
    burger.innerHTML = burgerIcon;
  } else {
    headerNav.style.display = "flex";
    burger.innerHTML = closeIcon;
  }
}

burger.addEventListener("click", toggleMenu);