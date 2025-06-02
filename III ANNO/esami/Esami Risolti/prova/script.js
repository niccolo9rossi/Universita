// funzione per leggere la lista JSON e inserire contenuti dinamici
function caricaContenuti() {
  fetch('dati.json')
    .then(response => response.json())
    .then(data => {
      const articoli = data.map((articolo) => (
        `<section id="${articolo.titolo}">
          <h2 class="title">${articolo.titolo}</h2>
          <p>${articolo.contenuto}</p>
        </section>`
      ));
      document.getElementById('main-content').innerHTML += articoli.join('');
    });
}

// funzione di shuffle per ordine casuale degli articoli
function shuffleArticoli() {
  const articoli = document.querySelectorAll('main section');
  let arr = Array.from(articoli).map((articolo, index) => ({
    id: articolo.id,
    text: articolo.textContent
  }));
  arr.sort(() => Math.random() - 0.5);
  arr.forEach(item => {
    articoli.forEach(articolo => {
      if (articolo.id === item.id) {
        articolo.remove();
        document.body.appendChild(document.createElement('section')).innerHTML = `
          <h2 class="title">${item.text}</h2>
          ${item.text}
        `;
      }
    });
  });
}

// funzione per nascondere e mostrare il menu
function showMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    document.getElementById('menu-btn').style.color = '#000';
  } else {
    menu.style.display = 'block';
    document.getElementById('menu-btn').style.color = '#333';
  }
}

// evento di click sul bottone "MENU"
document.getElementById('menu-btn').onclick = showMenu;

// chiamare le funzioni
caricaContenuti();
