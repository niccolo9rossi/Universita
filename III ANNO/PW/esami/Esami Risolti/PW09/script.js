window.onload = function (){

    setTimeout(()=>{
        
        fetch("http://localhost:3000/prod")
        .then(resp => resp.json())
        .then(data => {

            const containerBoxDom = document.getElementById("contenitore-box");

            data.message.forEach(element => {

                const prodotto = element.prodotto
                var numero = element.numero
                const colore = element.colore

                const boxDom = document.createElement("div")
                boxDom.classList.add("box")
                boxDom.innerHTML = `<p>Prodotto: ${prodotto}</p><p>Numero: ${numero}</p>`;
                boxDom.style.color = colore

                containerBoxDom.appendChild(boxDom)

                boxDom.addEventListener("click", () => {

                    if(numero > 0){
                        numero--;
                        boxDom.innerHTML = `<p>Prodotto: ${prodotto}</p><p>Numero: ${numero}</p>`;
                    }
                })
                
            });

        })



    },1000);
}