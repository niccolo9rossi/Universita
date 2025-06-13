const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(__dirname)); // Serve i file statici (HTML, CSS, JS)
app.use(express.json());

// GET /tasks - restituisce la lista delle attività
app.get('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync('./dati.json'));
  res.json(tasks);
});

// POST /tasks/complete/:id - segna come completata
app.post('/tasks/complete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let tasks = JSON.parse(fs.readFileSync(path.join(__dirname, 'dati.json')));
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Attività non trovata' });
  tasks[idx].completed = true;
  fs.writeFileSync(path.join(__dirname, 'dati.json'), JSON.stringify(tasks, null, 2));
  res.json(tasks);
});

app.listen(3000, () => console.log('Server avviato su http://localhost:3000'));