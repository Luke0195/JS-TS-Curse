//  Aula 04: Métodos úteis para objetos.

// Já vimos
// Object.keys => retorna as chaves do objeto.
// Object.freze => congela  objeto.
/*Object.freeze(p1)
p1.lastName = 'Miranda';

console.log(p1);
*/
// Object.defineProperty(define uma propriedade do objeto)
// Object.defineProperties(define as propriedades do objetos)

function CreatePeople(firstName, lastName, age){
  this.firstName = firstName,
  this.lastName =  lastName,
  this.age = age;
}

const p1 = new CreatePeople('Lucas', 'Santos',25);

const p1_2 = {...p1, height: 1.90}

console.log(p1_2);

// Object.assing
// Esse metódo passa todas as propriedades as chaves para o novo objeto criado é similar ao spread operator
const produto ={ nome: 'Produto', preco: 1.8}
const caneca = Object.assign({ }, produto) 
caneca.nome = 'Caneca do Star Wars',
caneca.preco = 20


//Object.getOwnPropertyDescriptor
// Esse metódo nos mostra as informações da chave do objetivo se ele é enumerable, writable,configurable.
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


// Objet.entries -> O metódo entries retorna todo o nosso objeto em um array.

console.log(Object.entries(produto));

for(let [chave , valor] of Object.entries(produto)){
   console.log(chave, valor)
}