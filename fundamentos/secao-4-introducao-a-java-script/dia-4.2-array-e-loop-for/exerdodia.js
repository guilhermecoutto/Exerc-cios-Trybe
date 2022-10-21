let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++){
    console.log(numbers[index])
} 
let result = 0;

for (let index = 0; index < numbers.length; index ++){
    result += numbers[index]
}

console.log(result)
let sum = 0;
for (let index = 0; index < numbers.length; index ++){
    sum += umbers[index]; 
}
let aritmetica = sum / numbers.length 

console.log(aritmetica)

if ( aritmetica > 20){
    console.log("valor maior que 20")
} else if (aritmetica <= 20) {
    console.log("valor menor ou igual a 20")
}
