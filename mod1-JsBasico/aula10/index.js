// Aula 10: Mais sobre String.
// As strings são indexadas
let umaString = 'Um Texto';
// Os indices começam com 0
// Qualquer range fora do range das strings é undefined
console.log(umaString.charAt(1)); // Mostra o valor armazenado na possição do array.
console.log(umaString.indexOf('t')); // Retorna o indice da palavra
console.log(umaString.lastIndexOf('o')); // retorna o último indice da palavras

const frase1 = 'O rato roeu a roupa do rei de roma';
console.log(frase1.length) // retorna o tamanho da string.

console.log(frase1.slice(7,11)); // Passamos o valor inicial e o final
console.log(frase1.slice(-4)); // Quando passamos valoeres negativos o metódo splice começa de trás para frente.
console.log(frase1.split(' '));
console.log(frase1.split(' ',2)); // Limite do máximo do split
console.log(frase1.toUpperCase())// Converte a string para uppercase
console.log(frase1.toLocaleLowerCase())// Converte uma string para minuscúlo.