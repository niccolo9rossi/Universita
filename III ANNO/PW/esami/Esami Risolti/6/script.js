//4) Funzione JS che carica la lista persone da /persone

// Carica e mostra la lista delle persone
async function caricaPersone() {
  const res = await fetch('/persone'); // Chiamata all'endpoint
  const persone = await res.json();
  const lista = document.getElementById('lista-persone');
  lista.innerHTML = '';
  persone.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nome} ${p.cognome}`;
    li.addEventListener('click', () => {
      alert(`${p.nome} ${p.cognome} - Età: ${p.età}`);
    });
    lista.appendChild(li);
  });
}

// Cambia i colori della pagina
function aggiornaColori() {
  document.body.style.background = '#00796b';

  document.querySelectorAll('.menu li a').forEach(link => {
    link.style.color = '#313131';
  });
}

// Gestione menu hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Inizializzazione
window.onload = () => {
  caricaPersone(); // Eseguita al caricamento pagina
  document.getElementById('btn-colori').addEventListener('click', aggiornaColori);
};