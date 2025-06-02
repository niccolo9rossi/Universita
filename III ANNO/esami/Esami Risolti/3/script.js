let datiJSON = [];

// Punto 3: Caricamento JSON e salvataggio in variabile globale
window.addEventListener("DOMContentLoaded", () => {
    fetch("dati.json")
        .then(res => res.json())
        .then(data => {
            datiJSON = data;
            drawSquares(); // Punto 5: Disegna i quadrati al caricamento
        });
});

// Punto 5: Funzione che disegna i quadrati nel main
function drawSquares() {
    const main = document.getElementById("main-content");
    main.innerHTML = "";
    const mainW = main.clientWidth;
    const mainH = main.clientHeight;
    const size = 70; // px, come da CSS

    datiJSON.forEach((el, idx) => {
        const div = document.createElement("div");
        div.className = "square";
        div.style.background = el.colore;
        div.style.width = size + "px";
        div.style.height = size + "px";
        // Punto 5: Posizionamento assoluto in percentuale rispetto al main
        div.style.left = `calc(${el.pos_orizz}% - ${size/2}px)`;
        div.style.top = `calc(${el.pos_vert}% - ${size/2}px)`;
        // Punto 6: Listener arrow function per eliminare il quadrato al click
        div.addEventListener("click", e => e.target.remove());
        main.appendChild(div);
    });
}