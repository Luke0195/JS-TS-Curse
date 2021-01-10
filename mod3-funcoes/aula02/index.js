// Aula 02: Parâmetros da função

function funcao(nome){
 let total = 0;
 for(let indice of arguments){
   total = indice + total;
  }
  console.log(total);
}

funcao(1,2,3,4,5,6,7,8,9,10)