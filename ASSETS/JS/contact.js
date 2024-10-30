document.addEventListener("DOMContentLoaded", function () {
  // Conteúdo Principal

  // Validação de formulário utilizando orientação a objetos
  class Modal {
    constructor(feedbackModal) {
      this.feedbackModal = feedbackModal;
      this.btnCloseModal = document.getElementById("btn-close-modal");
    }

    showModal() {
      this.feedbackModal.showModal();
    }

    closeModal() {
      this.feedbackModal.close();
    }
  }

  class Form {
    constructor(contactForm) {
      this.contactForm = contactForm;
      this.requiredFields = document.querySelectorAll(".required-field");
      this.textArea = document.getElementById("something-else");
      this.errorMessages = document.querySelectorAll(".error-message");
      this.emailRegex =
        /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
      this.feedbackModal = new Modal(
        document.getElementById("contact-form-modal")
      );
    }

    validateNameField() {
      try {
        if (this.requiredFields[0].value.trim().length < 3) {
          throw new Error("Mínimo 3 caracteres");
        } else {
          this.errorMessages[0].style.display = "none";
          this.requiredFields[0].style.border =
            "0.1rem solid var(--gray-color-2)";
        }
      } catch (error) {
        this.errorMessages[0].style.display = "inline";
        this.errorMessages[0].textContent = error.message;
        this.requiredFields[0].style.border = "0.1rem solid var(--alert-color)";
      }
    }

    formatNameField() {
      this.requiredFields[0].addEventListener("input", function (event) {
        let value = event.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, "");
        event.target.value = value;
      });
    }

    validateCompanyField() {
      try {
        if (this.requiredFields[1].value.trim() === "") {
          throw new Error("Informe o nome da empresa");
        } else {
          this.errorMessages[1].style.display = "none";
          this.requiredFields[1].style.border =
            "0.1rem solid var(--gray-color-2)";
        }
      } catch (error) {
        this.errorMessages[1].style.display = "inline";
        this.errorMessages[1].textContent = error.message;
        this.requiredFields[1].style.border = "0.1rem solid var(--alert-color)";
      }
    }

    validatePhoneNumberField() {
      try {
        if (this.requiredFields[2].value.length < 14) {
          throw new Error("Informe o número de telefone");
        } else {
          this.errorMessages[2].style.display = "none";
          this.requiredFields[2].style.border =
            "0.1rem solid var(--gray-color-2)";
        }
      } catch (error) {
        this.errorMessages[2].style.display = "inline";
        this.errorMessages[2].textContent = error.message;
        this.requiredFields[2].style.border = "0.1rem solid var(--alert-color)";
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

    validateEmailField() {
      const emailField = this.requiredFields[3];
      const emailFieldValue = this.requiredFields[3].value.trim();

      try {
        if (this.emailRegex.test(emailFieldValue)) {
          this.errorMessages[3].style.display = "none";
          emailField.style.border = "0.1rem solid var(--gray-color-2)";
        } else {
          throw new Error("Informe um e-mail válido");
        }
      } catch (error) {
        this.errorMessages[3].style.display = "inline";
        this.errorMessages[3].textContent = error.message;
        emailField.style.border = "0.1rem solid var(--alert-color)";
      }
    }

    formatFormInRealTime() {
      this.formatNameField();
      this.formatPhoneNumberField();
    }

    clearContactFormFields() {
      this.requiredFields[0].value = "";
      this.requiredFields[1].value = "";
      this.requiredFields[2].value = "";
      this.requiredFields[3].value = "";
      this.textArea.value = "";
    }

    showFeedbackModal() {
      if (
        this.requiredFields[0].value.trim().length >= 3 &&
        this.requiredFields[1].value.trim() !== "" &&
        this.requiredFields[2].value.length >= 14 &&
        this.emailRegex.test(this.requiredFields[3].value.trim())
      ) {
        this.feedbackModal.showModal();
        document.body.style.position = "fixed";

        this.clearContactFormFields();
      }
    }

    preventEscKeyFunctionality() {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
        }
      });
    }

    closeFeedbackModal() {
      this.preventEscKeyFunctionality();

      this.feedbackModal.btnCloseModal.addEventListener("click", () => {
        this.feedbackModal.closeModal();
        document.body.style.position = "static";
      });
    }

    validateFormAfterSubmission() {
      this.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        this.validateNameField();
        this.validateCompanyField();
        this.validatePhoneNumberField();
        this.validateEmailField();
        this.showFeedbackModal();
        this.closeFeedbackModal();
      });
    }
  }

  const contactForm = new Form(document.getElementById("contact-form"));

  contactForm.formatFormInRealTime();
  contactForm.validateFormAfterSubmission();

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
