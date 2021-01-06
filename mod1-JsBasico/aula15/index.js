// Aula 15: Objetos(Básicos)

// Objeto Literal;
const pessoa1 = {
  nome: 'Lucas',
  sobrenome: 'Santos',
  idade: 26,
  showInfo(){
    console.log('Informations of this Person');
    console.log(`First name: ${this.nome}`);
    console.log(`Last Name: ${this.sobrenome}`);
    console.log(`Age : ${this.idade}`)
  },

  incrementAge(){
    this.idade ++;
  }
}
// função fabrica
function criarPessoa(nome, sobrenome, idade){ // Função Factory(Fabríca)
  return{
    nome,
    sobrenome,
    idade
  }
}


pessoa1.showInfo();
pessoa1.incrementAge();
pessoa1.showInfo();