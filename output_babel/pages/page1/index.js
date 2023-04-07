"use strict";

require("@babel/polyfill");
window.onload = function () {
  // crea el enlace Libros populares
  var linkPopulares = document.createElement("a");
  linkPopulares.href = "../page2/libros-populares.html";
  linkPopulares.textContent = "Libros populares                       ";
  document.body.appendChild(linkPopulares);

  // crea el enlace Nuevos lanzamientos
  var linkLanzamientos = document.createElement("a");
  linkLanzamientos.href = "../page3/nuevos-lanzamientos.html";
  linkLanzamientos.textContent = "Nuevos lanzamientos";
  document.body.appendChild(linkLanzamientos);

  // crea el título h1 Biblioteca
  var titulo = document.createElement("h1");
  titulo.textContent = "Biblioteca";
  titulo.classList.add("animated", "bounce");
  document.body.appendChild(titulo);

  // crea la imagen
  var imagen = document.createElement("img");
  imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biblioteca_Barzio.jpg/1200px-Biblioteca_Barzio.jpg";
  imagen.alt = "imagen";
  imagen.classList.add("animated", "bounce");
  document.body.appendChild(imagen);
};