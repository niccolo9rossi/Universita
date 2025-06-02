"use strict";
let freddy_sentences =[
    "ride my bicycle",
    "break free",
    "it all",
    "it now"
];
let pics = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/1200px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U7x_ofQWO-ggg9LxjhUH5XU443iNKG92pw&s",
    "https://media-assets.ad-italia.it/photos/6448db5e595977d1ddb1f7df/1:1/w_3453,h_3453,c_limit/%C2%A9Denis%20O%E2%80%99Regan%20(www.denis.uk)%20CAPTION%20Freddie%20Mercury,%20Queen%20-%20Wembley%20Stadium%201986,%20Photograph%20by%20%C2%A9Denis%20O%E2%80%99Regan.jpg",
    "https://barlettaweb24.it/wp-content/uploads/2024/11/Copertine-Rossana-1-20-741x486.png"

]

function changeImage() {
    // Take a random image from the array
    let random_image = pics[Math.floor(Math.random() * pics.length)];
    // Change image
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("src", random_image);
}

document.getElementById("submit").addEventListener("click", function(){
    // Take a random sentence from the array
    let random_sentence = freddy_sentences[Math.floor(Math.random() * freddy_sentences.length)];
    console.log(random_sentence);

    let list = document.getElementById("want-list");
    let txt = document.createTextNode(random_sentence);
    let li = document.createElement("li");
    li.appendChild(txt);
    list.appendChild(li);

    // Cambia immagine
    changeImage();
});
