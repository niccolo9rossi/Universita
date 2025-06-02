//npm -i --global nodemon installa nodemon globalmente

const express = require('express');
const app = express(); //funzione che genera delle app

app.get('/', (req, res) => {
    res.send('ciao'); //scrive ciao
})

const PORT = 8080; //porta
app.listen(PORT, (err) => {
    console.log(`Server is running on port ${PORT}`); //messaggio di avvio
})


//npm run dev sul terminale per avviare lo script in package.json che contiene il comando per avviare il server

// npm i --save-dev nodemon installa nodemon 
/* Nodemon è uno strumento utile per lo sviluppo di applicazioni Node.js. La sua funzione principale è monitorare i file del progetto per rilevare eventuali modifiche e riavviare automaticamente il server quando vengono apportate modifiche al codice. Questo elimina la necessità di riavviare manualmente il server ogni volta che si modifica un file, rendendo il processo di sviluppo più rapido ed efficiente.

### Come funziona:
1. **Monitoraggio dei file**: Nodemon osserva i file del progetto (di default, i file `.js`) e rileva eventuali modifiche.
2. **Riavvio automatico**: Quando un file viene modificato e salvato, Nodemon riavvia automaticamente il server per applicare le modifiche.
3. **Configurazione personalizzabile**: Puoi configurare Nodemon per monitorare file specifici, ignorare determinati file o directory, o persino eseguire comandi personalizzati.

### Esempio pratico:
Nel tuo file `package.json`, probabilmente hai uno script come questo per avviare il server con Nodemon:
```json
"scripts": {
  "dev2": "nodemon index.js"
}
```
Quando esegui `npm run dev2` nel terminale, Nodemon avvia il file index.js e continua a monitorarlo. Se modifichi il file, Nodemon riavvierà automaticamente il server.

### Vantaggi:
- **Risparmio di tempo**: Non devi fermare e riavviare manualmente il server.
- **Miglior flusso di lavoro**: Ideale per lo sviluppo, poiché puoi vedere immediatamente l'effetto delle modifiche al codice.

In breve, Nodemon è un "watcher" che semplifica il ciclo di sviluppo per applicazioni Node.js.*/

//npm run dev2 avviare il server con nodemon
