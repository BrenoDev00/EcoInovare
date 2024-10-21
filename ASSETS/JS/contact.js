document.addEventListener("DOMContentLoaded", function () {
  // Conteúdo Principal

  // Validação de formulário utilizando orientação a objetos
  class Form {
    constructor(contactForm) {
      this.contactForm = contactForm;
    }

    preventDefault() {
      this.contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
  }

  const contactForm = new Form(document.getElementById("contact-form"));

  contactForm.preventDefault();

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
