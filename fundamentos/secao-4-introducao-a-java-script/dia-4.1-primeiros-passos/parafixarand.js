const currentHour = 12;
let message = '';
if ( currentHour >= 22){
    message = "Não deveriamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22){
    message = "rango da noite, vamos jantar :D";
} else if ( currentHour >= 14 && currentHour < 18){
    message = "vamos fazer um bolo pro café";
} else if (currentHour >= 11 && currentHour < 14){
    message = "hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11){
    message = "hcafe da manhã!!!";
}
console.log(message)
