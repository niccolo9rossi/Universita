// Importa il modulo express per creare il server web
const express = require('express');
// Importa il modulo fs per leggere file dal filesystem
const fs = require('fs');
// Importa la funzione parse dal modulo path (non utilizzata in questo codice)
const { parse } = require('path');

// Crea un'applicazione Express
const app = express();

// Legge e fa il parsing del file prof.json, caricando i dati in memoria
const data = JSON.parse(fs.readFileSync('prof.json'));

// Definisce una route GET per /api/v1/profs che restituisce tutti i professori
app.get('/api/v1/profs', (req, res) => {
    // Risponde con status 200 e i dati dei professori in formato JSON
    res.status(200).json(data);
});

// Avvia il server sulla porta 3000
app.listen(3000, (err) => {
    // Se c'è un errore, lo stampa a console
    if (err) {
        console.error(err.message);
    } else {
        // Altrimenti conferma che il server è avviato
        console.log('Server is running on port 3000');
    }
});

// Definisce una route GET per /api/v1/profs/:id che restituisce un professore specifico
app.get('/api/v1/profs/:id', (req, res) => {
    // Estrae l'id dalla richiesta e lo converte in intero
    const id = parseInt(req.params.id);
    // Cerca il professore con l'id corrispondente nei dati
    const prof = data.find(el=>el.id === id);

    // Se il professore esiste, lo restituisce con status 200
    if(prof) {
        res.status(200).json(prof); 
    }else{
        // Altrimenti restituisce errore 404 e un messaggio
        res.status(404).json({message: 'Prof not trovato'});
    }
});
