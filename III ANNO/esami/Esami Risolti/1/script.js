// Caricamento dinamico articoli da dati.json
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("contenitore-articoli");
  fetch("dati.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const section = document.createElement("section");
        section.innerHTML = `<h2>${item.titolo}</h2><p>${item.contenuto}</p>`;
        container.appendChild(section);
      });
    });

  // Toggle menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuToggle.style.color = menu.classList.contains("show") ? "red" : "black";
  });

  const closeBtn = document.getElementById("close-overlay");
  const overlay = document.getElementById("overlay");
  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }
});

// Shuffle articoli
function shuffleArticoli() {
  const container = document.getElementById("contenitore-articoli");
  const articoli = Array.from(container.children);
  articoli.sort(() => Math.random() - 0.5);
  articoli.forEach(a => container.appendChild(a));
}
