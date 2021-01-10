//  Aula 13 : For In -> Estrutura de repetição
// O for in retorna o índice de cada elemento


const array = ['Inverno', 'Outono', 'Primeira', 'Verao'];

for(index  in array) {
  console.log(index, array[index]);
}

const people = {
  name: 'Lucas',
  lastName: 'Santos',
  age: 26,
  height: 1.90,
  weight: 89,
}

for( key in people){
  console.log(`${key}: ${people[key]}`);
}
/*
const  array1 = [1, 2, 3];
const [number1, , number3] = array1;
console.log(number1, number3);

const people= {
  firstName: 'Lucas',
  lastName: 'Santos',
  age: 26,
  adress:{
    avenue: 'Av Brasil',
    number: 80
  }
}

const { firstName: nome, lastName: sobrenome} = people;
console.log( nome, sobrenome)

const { adress: {avenue: avenida}} = people;
console.log(avenida);

const arrays = [
        // 0                                1                           2
//  0        1       2             0      1        2         0          1         2
  ['Yan', 'Diego', 'Mayke'],   ['Rodz' , 'Vini', 'Biro'],  ['Robson', 'Rafaela','Leo' ]
]

console.log(arrays[2][0]);
*/