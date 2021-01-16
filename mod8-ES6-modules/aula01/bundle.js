"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = 'Lucas';
var array = [30, 30, 30];
var arrray2 = [].concat(array, [40]);

var Pessoa = function Pessoa(nome, sobrenome, idade) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
};
