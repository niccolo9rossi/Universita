const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve i file statici (HTML, CSS, JS)
app.use(express.static(__dirname));

// Funzione per leggere le citazioni dal file JSON
function getCitations() {
  const dataPath = path.join(__dirname, 'data.json');
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Endpoint per ottenere tutte le citazioni
app.get('/citations', (req, res) => {
  const citations = getCitations();
  res.json({
    status: "success",
    data: citations
  });
});

// Endpoint per ottenere una singola citazione tramite ID
app.get('/citation/:id', (req, res) => {
  const citations = getCitations();
  const id = parseInt(req.params.id);
  const citation = citations.find(c => c.ID === id);
  if (!citation) {
    return res.status(404).json({
      status: "fail",
      data: { message: "ID non trovato" }
    });
  }
  res.json({
    status: "success",
    data: citation
  });
});

// Gestione degli endpoint non trovati
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint non trovato"
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
