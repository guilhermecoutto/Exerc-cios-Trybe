document.getElementsByTagName("p")[1].innerText = "Programador senior !!!";
document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.background = "white";
document.getElementsByTagName("h1")[0].innerText = "Exercício - JavaScript"
document.getElementsByTagName("p")[0].innerText = "TEXTO PADRÃO DO NOSSO SITE";
function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();