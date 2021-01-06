// Aula 13: Array (Básico)
// Acessamos os elementos dos arrays  através de índice
const nomes = [ 'Lucas', 'Luiz', 'Otavio'];

nomes[2] = 'Cleber' // Altera a posição do array.
console.log(nomes[0][0]);
console.log(nomes.length);

nomes.push('Mario'); // Adiciona o valor no final do array.
console.log(nomes);

nomes.unshift('Eduardo'); // Aiciona no final
console.log(nomes);

const nomeExcluido1 = nomes.pop(); // Remove do final
console.log(nomeExcluido1);

const nomeExcluido2 =nomes.shift(); // Removi do inicio.

console.log(nomeExcluido2); 


console.log(nomes);
delete nomes[1]; // delete o conteúdo da tela.
// deletando um indice do array

console.log('_______________');

const cores = ['Amarelo', 'Roxo', 'Vermelho', 'Cinza', 'Bege'];

console.log(cores.slice(0, 3));

console.log(nomes instanceof Array)