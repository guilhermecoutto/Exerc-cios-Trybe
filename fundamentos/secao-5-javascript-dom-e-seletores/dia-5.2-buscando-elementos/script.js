const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

const pai = elementoOndeVoceEsta.parentElement 
pai.style.color = "red";

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Sim, eu lembro Trybe ;/";

 const primeiroFilho = pai.firstElementChild;

 const primeiroFilhoo = elementoOndeVoceEsta.previousElementSibling;

 const atention = elementoOndeVoceEsta.nextSibling;

 const terceiroFilho = elementoOndeVoceEsta.nextElementSibling
 const terceiroFilhoo = pai.lastElementChild.previousElementSibling