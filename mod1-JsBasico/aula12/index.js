// Aula 12: Objeto Math

let num1 = 9.8484848;
console.log(Math.floor(num1)); // Math.floor
let num2 = 9.5;
console.log(Math.ceil(num2)); // arrendonda o número para cima
let num3 = Math.round(num2) // retorna o número mais próximo 
console.log(num3)

console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // Retorna o maior número da sequencia
console.log(Math.min(300, 200, 100, 99)) // Retorna o menor número

// Random gera o número aleatório

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio)