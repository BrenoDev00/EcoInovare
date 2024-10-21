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
    }

    validateCompanyField() {
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
    }

    validatePhoneNumberField() {
      try {
        if (this.requiredFields[2].value.length < 14) {
          throw "Informe o número de telefone";
        } else {
          this.errorMessages[2].style.display = "none";
        }
      } catch (error) {
        this.errorMessages[2].style.display = "inline";
        this.errorMessages[2].textContent = error;
      }
    }

    formatPhoneNumberField() {
      this.requiredFields[2].addEventListener("input", function (event) {
        let value = event.target.value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");

        event.target.value = value;
      });
    }

    validateFormInRealTime() {
      this.formatPhoneNumberField();
    }

    validateFormAfterSubmission() {
      this.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        this.validateNameField();
        this.validateCompanyField();
        this.validatePhoneNumberField();
      });
    }
  }

  const contactForm = new Form(document.getElementById("contact-form"));

  contactForm.validateFormAfterSubmission();
  contactForm.validateFormInRealTime();

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
