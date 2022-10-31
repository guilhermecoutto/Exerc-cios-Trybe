const filho = document.createElement("h1");
filho.innerText = "Exercício - JavaScript DOM";
filho.className = "title"
document.body.appendChild(filho);

const filho2 = document.createElement("main");
filho2.className = "main-content";
document.body.appendChild(filho2);

const filho3 = document.createElement("section");
filho3.className = "center-content";
filho2.appendChild(filho3);


const filho4 = document.createElement("p");
filho4.innerText = "SHOOWW";
filho3.appendChild(filho4);

const filho5 = document.createElement("section");
filho5.className = "left-content";
filho2.appendChild(filho5);

const filho6 = document.createElement("section");
filho6.className = "right-content";
filho2.appendChild(filho6);

const filho7 = document.createElement("img");
filho7.className = "src";
filho7.src = "https://picsum.photos/200";
filho5.appendChild(filho7);

const filho8 = document.createElement("ul");
filho6.appendChild(filho8);
const numeros = ["um", "dois", "trẽs", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
for (let num in  numeros){
    const li = document.createElement("li");
    li.innerHTML = numeros[num];
    filho8.appendChild(li)
}

for (let index = 1; index<= 3; index++){
    const filho9 = document.createElement("h3")
    filho9.innerText = "Show" + index;
    filho9.className = "description"
    filho2.appendChild(filho9)
}
const rmfilho5 = document.getElementsByTagName("section")[0];
      filho2.removeChild(rmfilho5);


