"use strict";

require("@babel/polyfill");
window.onload = function () {
  var librosPopulares = [{
    titulo: 'El señor de los anillos (Trilogía)',
    autor: 'J. R. R. Tolkien',
    url: 'el-señor-de-los-anillos.html'
  }, {
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    url: 'orgullo-y-prejuicio.html'
  }, {
    titulo: 'Crimen y castigo',
    autor: 'Fiódor Dostoyevski',
    url: 'crimen-y-castigo.html'
  }, {
    titulo: 'Madame Bovary',
    autor: 'Gustave Flaubert',
    url: 'madame-bovary.html'
  }, {
    titulo: 'En busca del tiempo perdido',
    autor: 'Marcel Proust',
    url: 'en-busca-del-tiempo-perdido.html'
  }];
  var lista = document.getElementById('libros-populares');
  librosPopulares.forEach(function (libro) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var b = document.createElement('b');
    var i = document.createElement('i');
    b.textContent = libro.titulo;
    i.textContent = libro.autor;
    a.setAttribute('href', libro.url);
    a.appendChild(b);
    a.appendChild(document.createTextNode(', de '));
    a.appendChild(i);
    li.classList.add("animated", "bounce");
    li.appendChild(a);
    lista.appendChild(li);
  });
};