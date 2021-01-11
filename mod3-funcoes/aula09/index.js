// Aula 09 : Função construtoras  retorna objetos.

function Pessoa(nome, sobrenome){
   const idade = 26;
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.showInfo = function(){
     console.log(` Nome da pessoa ${this.nome}`);
     console.log(` Nome do sobrenom ${this.sobrenome}`)
   }
}


const p1 = new Pessoa('Lucas', 'Santos');
const p2 = new Pessoa('Matheus', 'Guerra');
const p3 = new Pessoa('Diego', 'Fernandes');

console.log(p1.idade);