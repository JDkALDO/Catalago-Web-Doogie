// ✅ Abre modal con imagen y texto del item
function expandir(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = element.src; // Solo la imagen
}

// ✅ Cierra modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
