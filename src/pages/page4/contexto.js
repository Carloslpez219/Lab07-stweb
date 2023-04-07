import '@babel/polyfill';
window.onload = function() {

    const container = document.getElementById("container");
    
    const img = document.createElement("img");
    img.setAttribute("alt", "imagen");
    img.setAttribute("src", "https://img.gruporeforma.com/imagenes/960x640/6/331/5330048.jpg");
    img.classList.add("animated", "bounce");
    
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = "Joven promesa del fútbol";
    const p = document.createElement("p");
    p.innerHTML = "Un estudiante de 17 años, llamado Javier Hernández se encuentra jugando la final del campeonato juvenil con la selección de su instituto. Se sabe que al partido llegan reclutadores de dos equipos importantes de su país. Para poder sobresalir e impresionar a los reclutadores tiene que jugar a su mejor nivel. <b>Ayúdalo a tomar las mejores deciciones!</b>";
    article.appendChild(h2);
    article.appendChild(p);
    article.classList.add("animated", "bounce");
    
    const div = document.createElement("div");
    const audio = document.createElement("audio");
    audio.setAttribute("controls", "");
    const source = document.createElement("source");
    source.setAttribute("src", "src/assets/audios/himno-champions-league-original.mp3");
    source.setAttribute("type", "audio/mpeg");
    audio.appendChild(source);
    div.appendChild(audio);
    
    const progressP = document.createElement("p");
    const progress = document.createElement("progress");
    progress.setAttribute("max", "100");
    progress.setAttribute("value", "14");
    const span = document.createElement("span");
    span.textContent = "14%";
    progressP.appendChild(document.createTextNode("Progreso: "));
    progressP.appendChild(progress);
    progressP.appendChild(span);
    
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    
    const a = document.createElement("a");
    a.setAttribute("href", "../page5/segundo-paso.html");
    a.textContent = "Siguiente";
    
    container.appendChild(img);
    container.appendChild(article);
    container.appendChild(div);
    container.appendChild(progressP);
    container.appendChild(br1);
    container.appendChild(br2);
    container.appendChild(a);
}

