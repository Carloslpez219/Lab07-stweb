"use strict";

require("@babel/polyfill");
window.onload = function () {
  var newReleases = [{
    title: "Volver a empezar",
    author: "Colleen Hoover",
    link: "volver-a-empezar.html"
  }, {
    title: "Trenza del mar esmeralda",
    author: "Brandon Sanderson",
    link: "trenza-del-mar-esperanza.html"
  }, {
    title: "Los templos del júbilo",
    author: "Kate Atkinson",
    link: "los-templos-del-jubilo.html"
  }, {
    title: "El ladrón de rostros",
    author: "Ibon Martin",
    link: "el-ladron-de-rostros.html"
  }, {
    title: "El ancho mundo",
    author: "Pierre Lemaitre",
    link: "el-ancho-mundo.html"
  }, {
    title: "Mi historia",
    author: "Carlos López",
    link: "../page4/contexto.html"
  }];
  var newReleasesList = document.getElementById("new-releases");
  newReleases.forEach(function (book) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    var strong = document.createElement("b");
    var em = document.createElement("i");
    a.href = book.link;
    strong.textContent = book.title;
    em.textContent = book.author;
    a.appendChild(strong);
    a.appendChild(document.createTextNode(", de "));
    a.appendChild(em);
    li.classList.add("animated", "bounce");
    li.appendChild(a);
    newReleasesList.appendChild(li);
  });
};