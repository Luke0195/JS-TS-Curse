// Aula 05: Map -> Mapeando o array.

// Dobre os números

const numeros = [5, 50, 80, 1, 2 , 3 , 5, 8, 7, 11, 15, 22, 27 ];
const arrayMapeado = numeros.map(valor => valor * 2);
console.log(arrayMapeado);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto

const pessoas =[
  { name: 'Lucas', age: 26},
  { name: 'Jorge', age: 13},
  { name: 'Eduardo', age: 55},
  { name: 'Leticia', age: 19},
  { name: 'Rosana', age: 32},
  { name: 'Wallece', age: 47}
]

const onlyName = pessoas.map(valor => valor.name);
console.log(onlyName);
/*
const onlyAge = pessoas.map(function(valor){
  delete valor.name;
  return valor;
});
*/

const onlyAge = pessoas.map(valor => ({ idade: valor.age}));

console.log(onlyAge);

const addId = pessoas.map(function(valor, indice){
   const newObj = {...valor}
    newObj.id = indice;

   return newObj;
})


console.log(addId);