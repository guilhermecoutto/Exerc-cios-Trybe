function soma(a, b){
    return a + b;
}
function subtracao (a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a / b;
}
function módulo(a, b){
    return a % b;
}

function maiorNum(a, b) {
if(a > b){
     return a + " é maior que " + b;
    } else {
        return b + "é maior que " + a;
    }
}
console.log(maiorNum(89, 77))

function maiorDeTresNum(priNum, segNum, terNum){
    if( priNum > segNum && priNum > terNum){
        return priNum + " é maior que " + segNum + " e " + terNum;
    } else if (segNum > priNum && segNum > terNum){
        return segNum + " é o maior!";
    } else {
        return terNum + "é o maior!";
    }
} 
console.log(maiorDeTresNum(59, 85, 7))

function parametro(valorUm){
    if ( valorUm > 0){
   return "positive";
 } else if (valorUm < 0){
    return "negative";
 } else {
    return "zero";
 }
} 
console.log(parametro(-7))

function triangulo(umAngulo, doisAngulo, tresAngulo){
    if (umAngulo + doisAngulo + tresAngulo === 180){
        return true;
    } else {
        return "A soma dos angulos não formam um triangulo!";
    }
}
console.log(triangulo(40, 50, 90))


