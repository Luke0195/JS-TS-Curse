// Aula 02: modulos(2)


module.exports = class Cachorro{
   constructor(nome){
     this.nome = nome;
   }
   
   latir(){
     console.log(`${this.nome} está fazendo au au`);
   }
}