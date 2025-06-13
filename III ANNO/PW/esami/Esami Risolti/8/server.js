//Punto 1 – File JSON e endpoint Node.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const DATA_PATH = path.join('./dati.json'); // Percorso del file dati

app.use(express.static("./")); // oppure la cartella dove si trova index.html

// Endpoint GET /articoli (3 punti) ok
app.get('/articoli', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Errore lettura dati' });
    res.json(JSON.parse(data));
  });
});

// Endpoint GET /autori (5 punti) ok
app.get('/autori', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Errore lettura dati' });
        const articoli = JSON.parse(data);
        // Estrae tutti gli autori in modo dinamico e rimuove i duplicati
        const autoriSet = new Set();
        articoli.forEach(a => autoriSet.add(a.autore));
        const autori = Array.from(autoriSet);
        res.json(autori);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});