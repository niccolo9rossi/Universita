const express = require('express');
const app = express();
const cors = require('cors'); // Importa il middleware CORS per gestire le richieste cross-origin

app.use(express.json()); // Middleware per gestire i dati JSON
app.use(cors()); // Abilita CORS per tutte le richieste, permettendo l'accesso da altri domini

app.post("/data", (req, res) => { // Gestisce le richieste POST all'endpoint "/data"
    const data = req.body; // Estrae i dati inviati dal client nel corpo della richiesta
    console.log(data); // Stampa i dati ricevuti nella console del server

    res.json({ // Risponde inviando un oggetto JSON al client
        status: "Success", // Indica che l'operazione è andata a buon fine
        message: "Data received successfully", // Messaggio di conferma per il client
        data: req.body // Restituisce i dati ricevuti nella richiesta
    });
});

const PORT = 3000; // Porta su cui il server ascolterà
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});