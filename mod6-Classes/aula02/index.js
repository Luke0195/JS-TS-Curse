// Aula 02: Getters e Setters em classes

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');


  }
}
const pessoa = new Pessoa('Lucas', 'Santos');

console.log(pessoa.nomeCompleto);

/*
const _velocidade = Symbol('velocidade') // Propriedade privada
class Carro{
  constructor(nome, velocidade){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade(){
    return this[_velocidade];
  }

  set velocidade(valor){
   if(typeof valor !== 'number') return;
   if(valor >= 100 || valor <= 0)  return;
   this[_velocidade] = valor;

  }
  acelerar(){
    if(this[_velocidade] >=  100) return;
    this[_velocidade]++;
  }

  freiar(){
    if(this[_velocidade] <=0 ) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro('Porsche',0);

carro1.velocidade = 80

console.log(carro1.velocidade);
*/