// Fetch per caricare gli articoli
fetch("articles.json")
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById("articles");
        data.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.innerHTML = `<h3>${article.titolo}</h3><p>${article.contenuto}</p>`;
            articlesContainer.appendChild(articleDiv);
        });
    });

// Funzione per il menu mobile
document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
    this.style.color = menu.classList.contains("show-menu") ? "red" : "white";
});

// Funzione per randomizzare gli articoli
document.getElementById("articoli-title").addEventListener("click", function() {
    let articles = Array.from(document.getElementsByClassName("article"));
    let articlesContainer = document.getElementById("articles");
    articles.sort(() => Math.random() - 0.5);
    articlesContainer.innerHTML = "";
    articles.forEach(article => articlesContainer.appendChild(article));
});
