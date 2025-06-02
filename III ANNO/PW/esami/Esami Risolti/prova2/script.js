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
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    datiJSON.forEach((item, index) => {
        const square = document.createElement("div");
        square.className = "square";
        square.style.backgroundColor = item.colore;
        square.style.width = `${70}px`; // Adjusted size to match CSS rule
        square.style.height = `${70}px`; // Adjusted size to match CSS rule

        // Punto 5: Posizionamento assoluto in percentuale rispetto al main
        square.style.left = `calc(${item.pos_orizz}% - 35px)`; // Adjusted calculation for centering
        square.style.top = `calc(${item.pos_vert}% - 35px)`; // Adjusted calculation for centering

        // Punto 6: Listener arrow function per eliminare il quadrato al click
        square.addEventListener("click", () => {
            square.remove(); // Remove the square on click
        });

        mainContent.appendChild(square);
    });
}
