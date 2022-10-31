const pai = document.getElementById("pai");
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoPrimeiroFilhodoFilho = document.createElement("section");
filhoDoPrimeiroFilhodoFilho.id = "filhoDoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhodoFilho);

const terceiroFilho = filhoDoPrimeiroFilhodoFilho.parentElement.previousElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(terceiroFilho);