const nome = 'Lucas Santos';
// O for of só pode ser usado em string e array.
for(let value of nome){
  console.log(value);
}

const array = [' Lucas', 'Otavio', 'Luiz'];

array.forEach(function(elemento, indice, array){
  console.log(elemento, indice, array)
})

// Não podemos usar o for of em objetos 
// For classico => somente interaveis
// For in => pode ser usado em interaveis e objetos eles sempre retornar o indice.
// For of => só retorna o conteúdo em interaveis.