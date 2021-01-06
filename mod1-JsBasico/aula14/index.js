// Aula 14: Funções (Básico)

function sum(x, y) {
  const result = x + y;
  return result;
}

console.log(sum(5, 5));

const result = sum(3, 5);

console.log(result);


const sqrtNumber = function(number){
   return Math.sqrt(number);
}

console.log(sqrtNumber(25))

const powNumber = (number, pot) => {
  return Math.pow(number, pot)
}

console.log(powNumber(3,3))