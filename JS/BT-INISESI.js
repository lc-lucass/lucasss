document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mostrar-formulario").onclick = function () {
    var formulario = document.getElementById("login-form");
    var boton = document.getElementById("mostrar-formulario");

    if (
      formulario.style.display === "none" ||
      formulario.style.display === ""
    ) {
      formulario.style.display = "block"; // Muestra el formulario
      boton.style.display = "none"; // Oculta el botón
    }
  };
});
