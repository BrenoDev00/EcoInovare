document.addEventListener("DOMContentLoaded", function () {
  // Conteúdo Principal

  // Validação de formulário utilizando orientação a objetos
  class Form {
    constructor(contactForm) {
      this.contactForm = contactForm;
      this.requiredFields = document.querySelectorAll(".required-field");
      this.errorMessages = document.querySelectorAll(".error-message");
    }

    validateNameField() {
      this.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        try {
          if (this.requiredFields[0].value.trim().length < 3) {
            throw "Mínimo 3 caracteres";
          } else {
            this.errorMessages[0].style.display = "none";
          }
        } catch (error) {
          this.errorMessages[0].style.display = "inline";
          this.errorMessages[0].textContent = error;
        }
      });
    }

    validateCompanyField() {
      this.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        try {
          if (this.requiredFields[1].value.trim() === "") {
            throw "Informe o nome da empresa";
          } else {
            this.errorMessages[1].style.display = "none";
          }
        } catch (error) {
          this.errorMessages[1].style.display = "inline";
          this.errorMessages[1].textContent = error;
        }
      });
    }
  }

  const contactForm = new Form(document.getElementById("contact-form"));

  contactForm.validateNameField();
  contactForm.validateCompanyField();

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
