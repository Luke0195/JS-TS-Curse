// Aula 11 : Atribuição via desestruturação(Objetos)


const pessoa  ={
  name: 'Lucas',
   lastName: 'Santos',
   age: 26,
   adress:{
     avenue: 'Av Brasil',
     number: 320
   }
}

//const { name = 'Default Value ', lastName, age } = pessoa; // Atribuição de via desestruturação.

// Podemos alterar o nome da chave do objeto

const { name: test, lastName: lastTest, age: ageTest }  = pessoa;

console.log(test, lastTest, ageTest);

const { adress } = pessoa;
console.log(adress)

const {adress : { avenue: avenida , number: numero} } = pessoa;

console.log(avenida, numero);
