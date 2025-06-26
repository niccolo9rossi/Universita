var dati = undefined
window.onload = function () {
    const lista = document.getElementById("list")
    fetch("http://localhost:3000/data").then(response => response.json())
    .then(data => {dati = data.msg
        console.log(dati)
        lista.textContent = JSON.stringify(data.msg, null, 2)})
    
   const bottone = document.getElementById("convert")
   const listConv = document.getElementById("2")
   bottone.addEventListener("click", ()=>{
        lista.style.display = "none"
        
        listConv.style.display = "block"
        dati.forEach(element => {
            const elemento = document.createElement("li")
            elemento.textContent = element.prodotto + " " + element.desc
            listConv.appendChild(elemento)
        });
    bottone.style.display= "none"
   })
}

