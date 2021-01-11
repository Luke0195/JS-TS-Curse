// Aula 01: Revisão do básico em Arrays

const nomes = ['Lucas', 'Eduardo', 'Maria', 'Joana'];
const valores =[...nomes, 'Mayke', 'Diego', 'Lana', 'Camila'];
const v1 = valores.join(' ');
console.log(v1)
const removeValue = valores.pop();
const newArray = valores.slice(0, -3);

console.log(newArray);
//  Metódo shift -> adiciona no começo
//  Metódo unshift -> remove do começo
//  Metódo pop -> remove do final
//  Metódo push -> adiciona do final
//  Metódo slice -> corta do array do indice inicial até o final.
//  Método join -> uni todos os indices do array.
const nome = 'Lucas Alves Dos Santos';
const newArrayNome = nome.split(' ');

