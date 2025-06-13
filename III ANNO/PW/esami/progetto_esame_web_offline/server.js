const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/articoli', (req, res) => {
  const data = JSON.parse(fs.readFileSync('dati.json'));
  res.json(data);
});

app.get('/autori', (req, res) => {
  const data = JSON.parse(fs.readFileSync('dati.json'));
  const autori = data.map(a => a.autore);
  res.json(autori);
});

app.listen(PORT, () => console.log(`Server avviato su http://localhost:${PORT}`));
