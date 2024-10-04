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

  /* Botão de voltar ao topo da página */
  const scrollTopBtn = document.querySelector(".btn-back-to-top");

  function toggleScrollBtn() {
    document.addEventListener("wheel", function (event) {
      if (event.deltaY > 0) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    document.addEventListener("touchmove", function (event) {
      if (event.touches.length > 0) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    scrollTopBtn.addEventListener("click", function () {
      scrollTopBtn.style.display = "none";
    });
  }

  toggleScrollBtn();
});
