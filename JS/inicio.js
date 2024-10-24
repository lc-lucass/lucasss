// Función para cargar contenido de otra página en el div contenido
function cargarSeccion(seccion) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", seccion + ".html", true); // Carga la página correspondiente
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("contenido").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Función para cargar el contenido inicial o de inicio con el GIF
function cargarInicio() {
  document.getElementById("contenido").innerHTML = `
        <div class="contenido">
            <figure>
                <img src="img/Artificial Intelligence AI Stock Footage.gif" id="tamano" alt="GIF de inteligencia artificial">
            </figure>
        </div>
    `;
}

// Cargar la sección de inicio por defecto al cargar la página
window.onload = function () {
  cargarInicio(); // Por defecto cargamos el contenido de inicio con el GIF
};
