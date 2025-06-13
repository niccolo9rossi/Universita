document.addEventListener("DOMContentLoaded", () => {
  fetch("/articoli")
    .then(res => res.json())
    .then(articoli => {
      const main = document.getElementById("main-content");
      articoli.forEach(a => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerHTML = `<h3>${a.titolo}</h3><p><strong>${a.autore}</strong></p><p>${a.contenuto}</p><button onclick="alert('Titolo: ${a.titolo}\nAutore: ${a.autore}\nContenuto: ${a.contenuto}')">Mostra dettagli</button>`;
        main.appendChild(box);
      });
    });

  document.getElementById("show-authors").addEventListener("click", () => {
    fetch("/autori")
      .then(res => res.json())
      .then(autori => {
        document.getElementById("overlay").classList.remove("hidden");
        document.getElementById("modal").classList.remove("hidden");
        const list = document.getElementById("authors-list");
        list.innerHTML = "";
        autori.forEach(a => {
          const li = document.createElement("li");
          li.textContent = a;
          list.appendChild(li);
        });
      });
  });

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("overlay").classList.add("hidden");
    document.getElementById("modal").classList.add("hidden");
  });
});
