//localStorage

console.log(localStorage.length);
localStorage.setItem('firstname', 'Adam');
localStorage.setItem('lastname', 'Smith');
console.log(localStorage.getItem('lastname'));
console.log(localStorage.length);
localStorage.removeItem('lastname');
console.log(localStorage.length);
localStorage.clear(); 
console.log(localStorage.length);

//sessionStorage

console.log(sessionStorage.length); 
sessionStorage.setItem('firstname', 'Adam'); 
sessionStorage.setItem('lastname', 'Smith');
console.log(sessionStorage.getItem('lastname')); 
console.log(sessionStorage.length);
sessionStorage.removeItem('lastname'); 
console.log(sessionStorage.length); 
sessionStorage.clear(); 
console.log(sessionStorage.length); 