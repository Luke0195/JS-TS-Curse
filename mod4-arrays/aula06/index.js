// Aula 06: Reduce:  Reduzindo o array.

// è utilizado para reduzir os valores do array para um único valor. 
// A função reducer é possui um parâmetro adicional chamado acumulador.
// Some todos os números (reduce)
// Retorne um array coms os pares(Filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor){
  if(valor  % 2 === 0){
    acumulador+=valor;
  }
  return acumulador;
},0)

console.log(total);

// Retorne a pessoa mais velha
const pessoas =[
  { name: 'Lucas', age: 26},
  { name: 'Jorge', age: 13},
  { name: 'Eduardo', age: 55},
  { name: 'Leticia', age: 19},
  { name: 'Rosana', age: 32},
  { name: 'Wallece', age: 47}
]

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.age > valor.age) return acumulador;
  return valor;

})

console.log(pessoaMaisVelha);

