"use strict";

require("@babel/polyfill");
window.onload = function () {
  var article = document.getElementById("article");
  var h2 = document.createElement("h2");
  h2.innerHTML = "Comienza el partido";
  article.appendChild(h2);
  article.classList.add("animated", "bounce");
  var p1 = document.createElement("p");
  p1.innerHTML = "El partido inicia, el primer tiempo transcurre sin ninguna novedad. Lamentablemente al iniciar la seguna parte una gran jugada del equipo rival les da la ventaja en el marcador. Hay malas sensaciones y el tiempo juega en contra del equipo de Javier.";
  article.appendChild(p1);
  var progress = document.getElementById("progress");
  var progressBar = document.createElement("progress");
  progressBar.max = "100";
  progressBar.value = "28";
  progress.appendChild(progressBar);
  var progressPercentage = document.createElement("span");
  progressPercentage.innerHTML = "28%";
  progress.appendChild(progressPercentage);
  var link = document.getElementById("link");
  link.href = "../page6/tercer-paso.html";
};