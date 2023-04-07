import '@babel/polyfill';
window.onload = function() {
    const body = document.querySelector('body');
      
      const article = document.createElement('article');
      article.classList.add("animated", "bounce");
      const h2 = document.createElement('h2');
      const p1 = document.createElement('p');
      const progress = document.createElement('progress');
      const span1 = document.createElement('span');
      const br1 = document.createElement('br');
      const br2 = document.createElement('br');
      const p2 = document.createElement('p');
      const a1 = document.createElement('a');
      const p3 = document.createElement('p');
      const a2 = document.createElement('a');

      h2.textContent = 'El partido agoniza';
      p1.textContent =
        'Minuto 85, en un contragolpe que Javier ha iniciado luego de un tiro de esquina a favor del rival se le presentan dos opciones:';
      progress.setAttribute('max', '100');
      progress.setAttribute('value', '42');
      span1.textContent = '42%';
      p2.textContent = 'Tirar a portería (se encuentra a 25m del arco, pero el portero está un poco adelantado).';
      a1.href = 'tercer-paso-uno.html';
      a1.textContent = 'Siguiente';
      p3.textContent = 'Pasarsela a el lateral izquierdo de su equipo y correr hacia el centro.';
      a2.href = 'tercer-paso-dos.html';
      a2.textContent = 'Siguiente';

      body.appendChild(article);
      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(progress);
      article.appendChild(span1);
      article.appendChild(br1);
      article.appendChild(br2);
      article.appendChild(p2);
      article.appendChild(a1);
      article.appendChild(br1);
      article.appendChild(p3);
      article.appendChild(a2);
}