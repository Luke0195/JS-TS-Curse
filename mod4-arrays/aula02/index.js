// Aula 02: Metódo splice 
//                0         1         2       3       4
const nomes = [ 'Lucas', 'Diego', 'Mayke', 'Rodz', 'Vini'];

// Parâmetros do metódo splice  
// 1° posição de indice,
// 2º quantos elemento eu deletar
// 3º Adicionar elementos

// shift -> remove o primeiro elemento do array
//console.log(nomes.splice(0, 1));

// push -> Adiciona um elemento no final do array
//nomes.splice(nomes.length, 0, 'Biro', 'Camila', 'Robson', 'Léo');
//console.log(nomes);

// unshift -> Adiciona um elemento no inicio do array.

nomes.splice(0,0, 'Thiago', 'Hugo','Capitão')
console.log(nomes);