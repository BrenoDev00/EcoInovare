document.addEventListener("DOMContentLoaded", function () {
  // Menu de Navegação
  const menuBtn = document.querySelector(".btn-menu");
  const navigationItems = document.querySelector(".navigation-items");

  function toggleMenu() {
    menuBtn.addEventListener("click", function () {
      navigationItems.classList.toggle("navigation-open");

      if (navigationItems.classList.contains("navigation-open")) {
        menuBtn.src = "ASSETS/IMAGES/HOME/icone-fechar-menu-hamburguer.svg";
      } else {
        menuBtn.src = "ASSETS/IMAGES/HOME/icone-menu-hamburguer.svg";
      }
    });
  }

  toggleMenu();
});
