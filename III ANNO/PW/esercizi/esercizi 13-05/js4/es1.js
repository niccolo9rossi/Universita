const moment = require('moment')
//installo modulo moment con npm install moment
const dotenv = require('dotenv')
//installo modulo dotenv con npm install dotenv

const chalk = require('chalk')
//installo modulo chalk con npm install chalk@4.x per avere la versione 4.x

//installo modulo betterlog con npm install betterlog 

const bl = require('betterlog')
//importo la funzione bl dal modulo betterlog
bl("Ciao con un LOG")

//stampo a video Hello world! in rosso
console.log(chalk.red('Hello world!'))

dotenv.config()

console.log(process.env.APIKEY)

const now = moment();
//creo una variabile now che contiene la data e l'ora attuale
//stampo a video la data e l'ora attuale in formato HH:mm:ss
console.log(now.format('HH:mm:ss'))

//con npm i installo tutti i moduli presenti nel package.json

