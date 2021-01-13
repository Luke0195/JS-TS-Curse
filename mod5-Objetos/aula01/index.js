// Aula 01: Revisando Objetos.

// Declaração de uma objeto literal.(é quando criamos um objeto sem a palavra new )

const pessoa = {
  firstName: 'Lucas',
  lastName: 'Santos',
  age: 26,
  teste:function(){
      return `${this.firstName} was executing the test`;
  }
}

console.log(pessoa.teste());
// Também podemos acessar a chave do objeto através da anotação de ponto.

console.log(pessoa['firstName'])
// Podemos também instância o objeto através da palavra chave new
const pessoa1 = new Object();

pessoa1.nome = 'Matheus';
pessoa1.idade = 20;

// Podemos criar um objeto através de uma função fabrica

function createPeople(firstName, lastName, age){
  return{
    firstName,
    lastName,
    age,
    get showFullName(){
      return ` ${this.firstName} ${this.lastName}`;
    }
  }
}

const people1 = createPeople('Lucas', 'Santos', 26);
console.log(people1.showFullName)
