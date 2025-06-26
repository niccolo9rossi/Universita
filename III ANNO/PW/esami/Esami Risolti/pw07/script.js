window.onload = function () {

    const galleriaDom = document.getElementById("galleria")
    const bottoneDom = document.getElementById("carica")
    const modale = document.getElementById("mostra")

    var ultimoIndice = 0

    fetch("http://localhost:3000/list")
    .then(resp => resp.json())
    .then(data => {

        var visti = 1;
        data.message.forEach(element => {

            if(visti <= 4){
                
                const id = element
                const elementoDom = document.createElement("li")
                elementoDom.classList.add("box-galleria")

                const linkElemento = document.createElement("a")
                linkElemento.textContent = id

                elementoDom.appendChild(linkElemento)
                galleriaDom.appendChild(elementoDom)

                elementoDom.addEventListener("click", () => {

                    fetch("http://localhost:3000/pics/" + id)
                        .then(resp => resp.json())
                        .then(data => {

                            const descrizione = data.message.desc

                            modale.innerHTML = `<h3>${descrizione}</h3>`;
                            modale.style.display = "block";
                        })
                })

                visti++
                ultimoIndice++
            
            }
        });

        console.log(ultimoIndice);
    })


    bottoneDom.addEventListener("click", () => {

        fetch("http://localhost:3000/list")
          .then((resp) => resp.json())
          .then((data) => {

            var indiceCorrente = 0
            var visti = 1;
            data.message.forEach((element) => {

            if (indiceCorrente >= ultimoIndice && visti <= 4) {

                const id = element;
                const elementoDom = document.createElement("li");
                elementoDom.classList.add("box-galleria");

                const linkElemento = document.createElement("a");
                linkElemento.textContent = id;

                elementoDom.appendChild(linkElemento);
                galleriaDom.appendChild(elementoDom);

                visti++;
                indiceCorrente++;
                ultimoIndice++;
            }else{
                indiceCorrente++;
            }
            });
          });
    });





}