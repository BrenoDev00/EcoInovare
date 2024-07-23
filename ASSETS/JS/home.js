document.addEventListener("DOMContentLoaded", function () {
  // Seção Depoimentos
  let count = 1;
  document.getElementById("radio-btn1").checked = true;

  function nextSlide() {
    count++;

    if (count > 3) {
      count = 1;
    }

    document.getElementById("radio-btn" + count).checked = true;
  }

  setInterval(nextSlide, 10000);

  // Seção Perguntas Frequentes
  const accordionItem = document.querySelectorAll(".accordion-item");

  accordionItem.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      accordion.classList.toggle("active-item");
    });
  });

  // Seção Formulário de Conversão
  const conversionForm = document.getElementById("conversion-form");
  const requiredFields = document.querySelectorAll(".required-field");
  const errorMessage = document.querySelectorAll(".error-message");
  const emailRegex =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  const placeHolder = document.getElementById("something-else");
  const formModal = document.getElementById("conversion-form-modal");

  // Validação de formulário em tempo real
  requiredFields[0].addEventListener("input", validateNameField);
  requiredFields[0].addEventListener("input", formatNameField);
  requiredFields[1].addEventListener("input", validateCompanyField);
  requiredFields[2].addEventListener("input", validatePhoneNumberField);
  requiredFields[2].addEventListener("input", formatPhoneNumberField);
  requiredFields[3].addEventListener("input", validateEmailField);

  // Validação de formulário após envio
  conversionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateNameField();
    validateCompanyField();
    validatePhoneNumberField();
    validateEmailField();
    showFormModal();
    closeFormModal();
  });

  function showErrorMessage(index) {
    errorMessage[index].style.display = "flex";
    requiredFields[index].style.border = "0.1rem solid var(--alert-color)";
  }

  function removeErrorMessage(index) {
    errorMessage[index].style.display = "none";
    requiredFields[index].style.border = "0.1rem solid var(--gray-color-2)";
  }

  function validateNameField() {
    if (requiredFields[0].value.trim().length < 3) {
      showErrorMessage(0);
    } else {
      removeErrorMessage(0);
    }
  }

  function formatNameField() {
    const nameField = requiredFields[0];
    nameField.addEventListener("input", function (event) {
      let value = event.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, "");
      event.target.value = value;
    });
  }

  function validateCompanyField() {
    if (requiredFields[1].value.trim() === "") {
      showErrorMessage(1);
    } else {
      removeErrorMessage(1);
    }
  }

  function validatePhoneNumberField() {
    if (requiredFields[2].value.length < 14) {
      showErrorMessage(2);
    } else {
      removeErrorMessage(2);
    }
  }

  function formatPhoneNumberField() {
    const phoneNumberField = requiredFields[2];
    phoneNumberField.addEventListener("input", function (event) {
      let value = event.target.value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");

      event.target.value = value;
    });
  }

  function validateEmailField() {
    if (emailRegex.test(requiredFields[3].value.trim())) {
      removeErrorMessage(3);
    } else {
      showErrorMessage(3);
    }
  }

  function clearConversionFormFields() {
    requiredFields[0].value = "";
    requiredFields[1].value = "";
    requiredFields[2].value = "";
    requiredFields[3].value = "";
    placeHolder.value = "";
  }

  // Exibe o Modal de formulário se todos os campos do formulário forem validados corretamente
  function showFormModal() {
    if (
      requiredFields[0].value.trim().length >= 3 &&
      requiredFields[1].value.trim() !== "" &&
      requiredFields[2].value.length >= 14 &&
      emailRegex.test(requiredFields[3].value.trim())
    ) {
      formModal.showModal();
      document.body.style.position = "fixed";

      clearConversionFormFields();
    }
  }

  function preventEscKeyFunctionality() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    });
  }

  function closeFormModal() {
    preventEscKeyFunctionality();

    const btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", function () {
      formModal.close();
      document.body.style.position = "static";
    });
  }
});
