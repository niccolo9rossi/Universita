// Caricamento dinamico articoli da dati.json
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("contenitore-articoli");
  fetch("dati.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const section = document.createElement("section");
        section.style.backgroundColor = item.colore;
        section.innerHTML = `<h3>${item.titolo}</h3>`;
        container.appendChild(section);
      });
    });

  // Toggle menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav ul");

  menuToggle?.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuToggle.style.color = menu.classList.contains("show") ? "red" : "black";
  });

  // Overlay
  const overlay = document.getElementById("overlay");
  const closeOverlay = document.getElementById("close-overlay");

  closeOverlay?.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});



