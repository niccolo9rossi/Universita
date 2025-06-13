//Punto 3 – CSS mobile-first e hamburger
// Hamburger menu mobile
document.getElementById('hamburger').onclick = function() {
    document.getElementById('menu').classList.toggle('open');
};

//Punto 4 – JS “Mostra dettagli”
// Carica articoli dal server e popola la lista
async function caricaArticoli() {
    const res = await fetch('/articoli');
    const articoli = await res.json();
    const lista = document.getElementById('articoli-list');
    lista.innerHTML = '';
    articoli.forEach(a => {
        // Mostra solo anteprima (primi 60 caratteri)
        const anteprima = a.contenuto.length > 60 ? a.contenuto.substring(0, 60) + '…' : a.contenuto;
        const box = document.createElement('div');
        box.className = 'articolo-box';
        box.innerHTML = `
            <h3>${a.titolo}</h3>
            <div class="autore">Autore: ${a.autore}</div>
            <div class="anteprima">${anteprima}</div>
            <button class="btn-dettagli">Mostra dettagli</button>
        `;
        // Punto 4: Mostra dettagli in alert
        box.querySelector('.btn-dettagli').onclick = () => {
            alert(
                `Titolo: ${a.titolo}\nAutore: ${a.autore}\nContenuto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tincidunt sapien.`
            );
        };
        lista.appendChild(box);
    });
}

// Punto 5: Modale autori
const btnAutori = document.getElementById('btn-autori');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal-autori');
const closeModal = document.getElementById('close-modal');
const listaAutori = document.getElementById('lista-autori');

btnAutori.onclick = async function() {
    // Mostra overlay e modale
    overlay.style.display = 'block';
    modal.style.display = 'block';
    // Fetch autori dal server
    const res = await fetch('/autori');
    const autori = await res.json();
    listaAutori.innerHTML = '';
    autori.forEach(autore => {
        const li = document.createElement('li');
        li.textContent = autore;
        listaAutori.appendChild(li);
    });
};
closeModal.onclick = nascondiModale;
overlay.onclick = nascondiModale;

function nascondiModale() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

// Inizializzazione
window.onload = caricaArticoli;