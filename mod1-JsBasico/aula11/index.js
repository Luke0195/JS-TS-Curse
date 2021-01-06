// Aula 11 : Mais sobre Numbers

let num1 = 10;
let num2 = 2.5;
const preco = 30.828928;

console.log(typeof(num1.toString() + num2));

// Retornar o valor para um string
console.log(num1.toString(2));
// Retorna 2 casas decimais para o número.
console.log(preco.toFixed(2)); 

console.log(Number.isInteger(num2)); // Verifica se o número é um inteiro.

let temp = num1 * 'Olá'
console.log(temp); // NaN -> not a number

console.log(Number.isNaN(temp)); // verifica se essa conta é um not a number
