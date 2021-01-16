class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

exports.Pessoa = Pessoa;
/*

Formas de se exportar o módulo
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.showFull = showFull;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.showFull = showFull;
this.mensagem = 'Mais uma mensagem para o modules.exports';
console.log(module.exports)

*/