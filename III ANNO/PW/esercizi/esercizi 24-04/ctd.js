"use script"
document.getElementById("myDiv").addEventListener("click", function(){
    alert("Bravo Coglione")}
)


function moveDiv() {
    let div = document.getElementById("myDiv")
    let body = document.body;
    let rndX = Math.floor(Math.random() * (window.innerWidth - 300));
    let rndY = Math.floor(Math.random() * (window.innerHeight - 200));
    div.style.position = "absolute";
    div.style.left = rndX + "px";
    div.style.top = rndY + "px";
    if(div.style.backgroundColor == "black") {
        div.style.backgroundColor = "red";
        body.style.backgroundColor = "black";
    }else {
        div.style.backgroundColor = "black";
        body.style.backgroundColor = "red";
    }

}
setInterval(function () {
    moveDiv()
}, 1000)

