//faccio nel terminale npm init per creare il package.json
const moment = require('moment')
//installo modulo moment con npm install moment

//bl è una funzione che stampa a video la data e l'ora attuale e il testo passato come parametro
const bl = function(txt){
    console.log(moment().format('DD/MM/YYYY HH:mm:ss') + ' - ' + txt)
}


//esporto la funzione bl
module.exports = bl
