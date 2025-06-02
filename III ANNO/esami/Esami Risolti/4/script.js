// Quando la pagina è completamente caricata, esegue la funzione asincrona
window.onload = async function() {
    // Recupera il riferimento all'elemento con id "lista" (dove andranno i quadrati numerati)
    const lista = document.getElementById('lista');
    // Recupera il riferimento all'elemento con id "box" (dove verrà mostrata la frase)
    const box = document.getElementById('box');
    // Effettua una richiesta HTTP per ottenere tutte le citazioni dal server
    const res = await fetch('/citations');
    // Converte la risposta in formato JSON
    const json = await res.json();
    // Se la richiesta ha avuto successo
    if (json.status === "success") {
        // Svuota il contenuto di "lista"
        lista.innerHTML = '';
        // Per ogni citazione ricevuta
        json.data.forEach(cit => {
            // Crea un nuovo div per il quadrato numerato
            const div = document.createElement('div');
            // Assegna la classe CSS "quadrato" per lo stile
            div.className = 'quadrato';
            // Imposta il testo del quadrato con l'ID della citazione
            div.textContent = cit.ID;
            // Aggiunge un gestore di click al quadrato
            div.onclick = async function() {
                // Quando cliccato, effettua una richiesta per ottenere la citazione specifica
                const res2 = await fetch(`/citation/${cit.ID}`);
                // Converte la risposta in JSON
                const json2 = await res2.json();
                // Se la richiesta ha avuto successo
                if (json2.status === "success") {
                    // Mostra la frase e il valore nel box centrale
                    box.innerHTML = `<div>${json2.data.frase}</div><span class="valore">${json2.data.valore}</span>`;
                } else {
                    // In caso di errore, mostra un messaggio di errore
                    box.textContent = "Errore nel recupero della citazione.";
                }
            };
            // Aggiunge il quadrato alla lista
            lista.appendChild(div);
        });
        // Mostra la prima frase di default nel box, se ci sono citazioni
        if (json.data.length > 0) {
            box.innerHTML = `<div>${json.data[0].frase}</div><span class="valore">${json.data[0].valore}</span>`;
        }
    } else {
        // In caso di errore nel caricamento delle citazioni, mostra un messaggio di errore
        lista.textContent = "Errore nel caricamento delle citazioni.";
    }
};