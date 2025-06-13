const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const DATA_PATH = path.join('./dati.json');

app.use(express.static("./"));
app.use(express.json());

// GET /persone - restituisce l'intero array di oggetti letto dal file
app.get('/persone', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Errore lettura dati' });
    const persone = JSON.parse(data);
    res.json(persone);
  });
});

// GET /persone/:id - restituisce l'oggetto con l'id specificato nell'URL
app.get('/persone/:id', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Errore lettura dati' });
    const persone = JSON.parse(data);
    const persona = persone.find(p => p.id === parseInt(req.params.id));
    if (!persona) return res.status(404).json({ error: 'Persona non trovata' });
    res.json(persona);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});