// Aula 01: Criando Classes 

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  exec(){
    console.log(`${this.nome} está executando o teste`);
  }
}

const p1 = new Pessoa('Lucas', 'Santos');
console.log(p1);
p1.exec();

const p2 = new Pessoa('Marcela', 'Lima');
p2.exec();