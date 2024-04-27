function handlerEvents(){

    let indiceCero = document.getElementById('indice0');
    let indiceUno = document.getElementById('indice1');
    let indiceDos = document.getElementById('indice2');
    let indiceTres = document.getElementById('indice3');

    indiceCero.addEventListener('click', handlerClicks);
    indiceUno.addEventListener('click', handlerClicks);
    indiceDos.addEventListener('click', handlerClicks);
    indiceTres.addEventListener('click', handlerClicks);

}

function handlerClicks(e){
    let boton = e.target;
    let divs = document.getElementsByClassName('contenedor__info');

    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
        
    }
    let indicesVarios = document.getElementsByClassName('indice__link');
    let numero;

    for (let i = 0; i < indicesVarios.length; i++) {
        if(boton == indicesVarios [i]){
            numero = i;
        }  
    }
    
}

window.onload = handlerEvents;