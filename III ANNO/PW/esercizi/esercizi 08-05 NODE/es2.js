const fs = require("fs")

//Metodo asincrono manda in background
fs.readFile("data.txt", (err, data) =>{
    if(err){
        console.error(err, message)
        return
    }else{
        console.log("Async: "+data)
    }
})

//metodo sincrono
const data = fs.readFileSync("data.txt","utf-8")

console.log(data)

//esegue node es2.js su terminale e stampa il contenuto del file data

