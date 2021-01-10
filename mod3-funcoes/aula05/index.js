// Aula 05: Closures: é a forma que a função tem de assumir seu valor.

function showName(){
 const  nome = 'Luiz';
 return function (){
    return nome;
 }
}

const funcao = showName();
console.log(funcao());