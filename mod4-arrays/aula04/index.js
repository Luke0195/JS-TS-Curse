// Aula 04: Filtrando o array 


// A função filter retorna true ou false baseado na condição
// O filter sempre vai retornar um array ou menos do valor original.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
function callbackFilter( valor){
   return valor > 10
}
*/

const arrayFiltrado = numeros.filter(function(valor, indice, array) {
  console.log(valor);
  console.log(indice);
  console.log(array);
  return valor > 10;
});

console.log(arrayFiltrado);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a.
// Aprendendemos o novo método endsWith
const pessoas =[
  { name: 'Lucas', age: 26},
  { name: 'Jorge', age: 13},
  { name: 'Eduardo', age: 55},
  { name: 'Leticia', age: 19},
  { name: 'Rosana', age: 32},
  { name: 'Wallece', age: 47}
]

const pessoasComNomeGrande = pessoas.filter(valor =>  valor.name.length >= 7 );
//console.log(pessoasComNomeGrande);

const pessoasAcimade50anos = pessoas.filter(valor => valor.age > 50);
//console.log(pessoasAcimade50anos);

const peopleWithLastLetterA = pessoas.filter(valor => valor.name.toLowerCase().endsWith('a'));
console.log(peopleWithLastLetterA);