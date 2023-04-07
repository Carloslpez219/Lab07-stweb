import '@babel/polyfill';
window.onload = function() {
    const article = document.getElementById("article");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Comienza el partido";
    article.appendChild(h2);
    article.classList.add("animated", "bounce");
    const p1 = document.createElement("p");
    p1.innerHTML = "El partido inicia, el primer tiempo transcurre sin ninguna novedad. Lamentablemente al iniciar la seguna parte una gran jugada del equipo rival les da la ventaja en el marcador. Hay malas sensaciones y el tiempo juega en contra del equipo de Javier.";
    article.appendChild(p1);
    const progress = document.getElementById("progress");
    const progressBar = document.createElement("progress");
    progressBar.max = "100";
    progressBar.value = "28";
    progress.appendChild(progressBar);
    const progressPercentage = document.createElement("span");
    progressPercentage.innerHTML = "28%";
    progress.appendChild(progressPercentage);
    const link = document.getElementById("link");
    link.href = "../page6/tercer-paso.html";

}