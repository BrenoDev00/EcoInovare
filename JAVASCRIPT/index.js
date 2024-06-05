document.addEventListener("DOMContentLoaded", function () {
  // Seção Formulário de Conversão
  const conversionForm = document.getElementById("conversion-form");
  const requiredFields = document.querySelectorAll("required-field");
  const errorMessage = document.querySelectorAll("error-message");

  conversionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateNameField();
  });

  function validateNameField() {
    requiredFields[0].addEventListener("input", function () {
      if (requiredFields[0].value.length < 3) {
        errorMessage[0].style.display = "flex";
      } else {
        errorMessage[0].style.display = "none";
      }
    });
  }
});
