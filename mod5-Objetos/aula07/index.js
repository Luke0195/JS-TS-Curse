// Aula 07: Herança Prototypes

// Produto 
// Camisa, caneca 

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(valor){
  this.preco = this.preco + valor;
}

Produto.prototype.desconto = function(valor){
  this.preco = this.preco - (this.preco * (valor/100));
  return this.preco
}

Produto.prototype.showInfo = function(){
  console.log('Informações do produto');
  console.log(`Nome do produto ${this.nome}`);
  console.log(`Nome do produto ${this.preco}`);
}
const product1 = new Produto('Camiseta', 20);
const product2 = new Produto('Caneta', 30);

product1.cor = 'Preta';
product2.material = 'vidro';

console.log(product1.desconto(10));
