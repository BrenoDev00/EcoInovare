document.addEventListener("DOMContentLoaded", function () {
  // Seção Formulário de Conversão
  const conversionForm = document.getElementById("conversion-form");
  const requiredFields = document.querySelectorAll(".required-field");
  const errorMessage = document.querySelectorAll(".error-message");
  const emailRegex =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

  // Validação de formulário em tempo real
  requiredFields[0].addEventListener("input", validateNameField);
  requiredFields[1].addEventListener("input", validateCompanyField);
  requiredFields[2].addEventListener("input", validatePhoneNumberField);
  requiredFields[3].addEventListener("input", validateEmailField);

  // Validação de formulário no envio
  conversionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateNameField();
    validateCompanyField();
    validatePhoneNumberField();
    validateEmailField();
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
    if (requiredFields[0].value.length < 3) {
      showErrorMessage(0);
    } else {
      removeErrorMessage(0);
    }
  }

  function validateCompanyField() {
    if (requiredFields[1].value === "") {
      showErrorMessage(1);
    } else {
      removeErrorMessage(1);
    }
  }

  function validatePhoneNumberField() {
    if (requiredFields[2].value === "") {
      showErrorMessage(2);
    } else {
      removeErrorMessage(2);
    }
  }

  function validateEmailField() {
    if (emailRegex.test(requiredFields[3].value)) {
      removeErrorMessage(3);
    } else {
      showErrorMessage(3);
    }
  }
});
