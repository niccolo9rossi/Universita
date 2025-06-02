// Esercizio 1: Creare una Promise che simuli una lotteria. La lotteria dura 3 secondi e ha una probabilità di vincita di 0.0001 (1 su 10000). Se si vince, la Promise deve risolversi con il messaggio "Hai vinto!", altrimenti deve essere rifiutata con il messaggio "Hai perso!".
/*
const randomPromise = new Promise((resolve, reject) => {
    console.log("Inizia la lotteria...");
    setTimeout(function() {
        if(Math.random() >= 0.9999) {
            resolve("Hai vinto!");
        }
        else {
            reject("Hai perso!");
        }
    console.log("La lotteria è finita.");
    }, 3000);
});
*/
const promiseDelay = new Promise(function(resolve, reject){
    setTimeout(function(){
        //resolve("Hai vinto")}, 5000);
        reject(new Error("Hai perso"))}, 500);
});

promiseDelay.then(result => console.log(result)).catch(console.error);