// ... existing code ...

const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

// GET /persone - restituisce l'intero array di oggetti letto dal file
app.get('/persone', async (req, res) => {
  try {
    const data = await fs.readFile(path.join('./dati.json'), 'utf8');
    const persone = JSON.parse(data);
    res.json(persone);
  } catch (err) {
    console.error('Errore lettura dati:', err);
    res.status(500).json({ error: 'Errore lettura dati' });
  }
});

// GET /persone/:id - restituisce l'oggetto con l'id specificato nell'URL
app.get('/persone/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await fs.readFile(path.join('./dati.json'), 'utf8');
    const persone = JSON.parse(data);
    const persona = persone.find(p => p.id === id);
    if (!persona) return res.status(404).json({ error: 'Persona non trovata' });
    res.json(persona);
  } catch (err) {
    console.error('Errore lettura dati:', err);
    res.status(500).json({ error: 'Errore lettura dati' });
  }
});

// ... existing code ...