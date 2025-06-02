// Questo script Node.js legge due file JSON ("data.json" e "data2.json") dal file system.
// - Converte il contenuto di "data.json" in un array di oggetti e stampa ogni elemento.
// - Converte il contenuto di "data2.json" in un oggetto e stampa il valore della proprietà "nome".
// - Infine, cicla su tutte le proprietà di "data2.json" stampando nome e valore di ciascuna.

const fs = require('fs'); // Importa il modulo 'fs' per lavorare con il file system

// legge il file data.json come stringa in formato UTF-8
const data = fs.readFileSync('data.json', 'utf8');

// converte la stringa JSON in un array di oggetti JavaScript
const data_json = JSON.parse(data);

// per ogni elemento dell'array, stampa l'elemento sulla console
data_json.forEach((element) => {
    console.log(element);
});

// legge e converte il file data2.json direttamente in un oggetto JavaScript
const data2 = JSON.parse(fs.readFileSync("data2.json"));

// stampa il valore della proprietà 'nome' dell'oggetto data2
console.log(data2.nome);

// cicla su tutte le proprietà dell'oggetto data2 e stampa nome proprietà e valore
for (k in data2) {
    console.log(k, data2[k]);
}
