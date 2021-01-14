// Aula 05 : Prototypes
/* Javascript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.
 
 Definição de protótipo.
 Protótipo é o termo usado para referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

 Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para
 criá-lo. Quando tentamos acessar um membro de um objeto, primeioro o motor do Js vai tentar encontrar este membro do próprio objeto e depis a cadea de prótipos 
 é usada até o topo (nulll) até encontrar(ou não) tal membro.
*/


// Construtora = molde(classe)

function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomCompleto  = () => `${this.nome} ${this.sobrenome}`;
}  

// Toda função construtora tem um prototype(um objeto intercalado com o objeto criado na função exemplo:Pessoa)
// Se eu tiver a msm função com msm nome a função dentro do método será sobreescrita .
Pessoa.prototype.nomCompleto = () => `${this.nome} ${this.sobrenome}`


// Instância 
const pessoa1 = new Pessoa('Luiz' , 'Otavio');
const pessoa2 = new Pessoa('Lucas', 'Santos');

console.log(pessoa1)

