// Selecciona la imagen del dragón
const dragonImage = document.querySelector("#dragon-image img");

// Añade un evento cuando el mouse está sobre la imagen
dragonImage.addEventListener("mouseenter", () => {
  // Comienza un efecto de vibración o movimiento
  dragonImage.style.transition = "transform 0.5s";
  dragonImage.style.transform = "scale(1.2) rotate(3deg)";
});

// Vuelve la imagen a su estado original cuando el mouse sale
dragonImage.addEventListener("mouseleave", () => {
  dragonImage.style.transform = "scale(1)";
});
