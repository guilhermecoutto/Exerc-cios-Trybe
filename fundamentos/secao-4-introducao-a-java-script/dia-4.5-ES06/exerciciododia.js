
const pessoa = {
    name: 'Henri',
    idade: 20
}
pessoa.name = "Luna"
pessoa.idade = 19
console.log('Nome:', pessoa.name);
console.log('Idade:', pessoa.idade);

numeroAleatorio = () => Math.random () 

console.log(numeroAleatorio());

hello = (nome) => `Olá, ${nome}` 
    
  let nomee = 'Ivan';
  console.log(hello(nomee));

nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome)); 

let speed = 90;
const speedCar = (speed) => (
speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);
console.log(speedCar(speed));