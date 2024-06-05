document.addEventListener("DOMContentLoaded", function () {
  // Seção Formulário de Conversão
  const conversionForm = document.getElementById("conversion-form");
  const requiredFields = document.querySelectorAll("error-message");

  conversionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateNameField();
  });

  function validateNameField() {
    requiredFields.addEventListener("input", function () {
      if (requiredFields[0].value.length < 3) {
        requiredFields[0].style.display = "flex";
      } else {
        requiredFields[0].style.display = "none";
      }
    });
  }
});
