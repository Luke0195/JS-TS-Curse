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