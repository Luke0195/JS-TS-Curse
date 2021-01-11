// Aula 08: Funções Fabrica (Factory Functions)
// São funções que retornam objetos

function createPeople(firstName, lastName, age, altura, peso){
  return{
    firstName,
    lastName,
    age,
    showPeopleInfo:function() {
      console.log(` My first name is ${this.firstName}`);
      console.log(` My last name is ${this.lastName}`);
      console.log(` My age is ${this.age}`); 
      console.log(` My weight is ${this.altura}`);
      console.log(` My height is ${this.peso}`)
    },
    altura,
    peso,

  get imc(){ // Simular uma atributo é o metódo acessores.
      return  this.peso / (Math.pow(this.altura, 2))
    },

  set fullName( valor){
   valor = valor.split(' ');
   this.firstName = valor.shift();
   this.lastName= valor.pop();
   return `${this.firstName} ${this.lastName}`
  },

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  
  }
}


const people1 = new createPeople('Lucas', 'Santos', 26);
people1.altura= 1.90;
people1.peso = 89;
console.log(people1.imc);

people1.fullName = 'Lucas Santos';
console.log(people1.fullName)