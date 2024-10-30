document.addEventListener("DOMContentLoaded", function () {
  // Botão de voltar ao topo da página
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
