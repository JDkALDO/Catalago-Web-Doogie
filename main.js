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

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto cambio cada 5 segundos
setInterval(nextSlide, 5000);
