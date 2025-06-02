const express = require('express'); // Importa il framework Express per creare il server web
const app = express(); // Crea un'applicazione Express
const bodyparser = require('body-parser'); // Importa il modulo body-parser per gestire i dati inviati tramite POST

app.use(express.static('public')); // Rende accessibili i file statici nella cartella 'public'
app.use(bodyparser.urlencoded()) // Permette di leggere i dati inviati tramite form (urlencoded)

app.post('/elabData', (req, res) => { // Gestisce le richieste POST all'endpoint '/elabData'
    const data = req.body; // Estrae i dati inviati dal client nel corpo della richiesta

    console.log(data); // Stampa i dati ricevuti nella console del server
    res.send(`<h1>dati ricevuti</h1>`); // Risponde al client confermando la ricezione dei dati
})

app.listen(8080, () => { // Avvia il server sulla porta 8080
  console.log('Server is running on http://localhost:8080'); // Messaggio di conferma in console
});