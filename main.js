// ===================
// Ventana emergente
// ===================
const overlay = document.getElementById('overlay');
const btnAgendar = document.getElementById('btnAgendar'); // ahora solo el derecho

btnAgendar.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

function cerrarEncuesta() {
  overlay.style.display = 'none';
}

// ===================
// Envío del formulario a WhatsApp
// ===================
document.getElementById('formCita').addEventListener('submit', (e) => {
  e.preventDefault();

  // Capturamos los valores del formulario
  const form = e.target;
  const nombre = form.nombre.value;
  const telefono = form.telefono.value;
  const perrito = form.perrito.value;
  const para_quien = form.para_quien.value;
  const acostumbrado = form.acostumbrado.value;
  const servicio = form.servicio.value;
  const antipulgas = form.antipulgas.value;
  const nudos = form.nudos.value;
  const pulgas = form.pulgas.value;

  // Creamos el mensaje
  const mensaje = `📋 Nueva cita:\n
👤 Nombre: ${nombre}
📞 Teléfono: ${telefono}
🐶 Nombre del perrito: ${perrito}
➡️ Para: ${para_quien}
✅ Acostumbrado: ${acostumbrado}
✂️ Servicio: ${servicio}
💊 Antipulgas: ${antipulgas}
🌀 Nudos: ${nudos}
🐛 Pulgas: ${pulgas}`;

  // Número de WhatsApp (cambia este por el tuyo con lada, ej: 5215512345678)
  const numero = "5215512345678";

  // URL de WhatsApp
  const url = `https://wa.me/${528131314975}?text=${encodeURIComponent(mensaje)}`;

  // Abrimos WhatsApp en una nueva pestaña
  window.open(url, "_blank");

  // Cerramos la encuesta
  cerrarEncuesta();
});

// ===================
// Menu
// ===================
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});



const app = new Vue({
  el: '#app'
});

// ===================
// Carrusel de fotos
// ===================
const carruselContainer = document.querySelector(".carrusel-container");
const slides = document.querySelectorAll(".carrusel-slide");
const prevBtn = document.querySelector(".carrusel-btn.prev");
const nextBtn = document.querySelector(".carrusel-btn.next");

let index = 0;

// Función para mostrar slide
function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  carruselContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Botones
prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Automático cada 5s
setInterval(() => showSlide(index + 1), 5000);
