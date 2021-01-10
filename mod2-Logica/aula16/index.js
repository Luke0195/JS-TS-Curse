// Aula 16: Break e Continue

const numeros = [1 , 2, 3, 4, 5, 6, 7, 8, 9];

for(numero of numeros){
  if(numero === 2 || numero === 5){
    continue;
  }
  console.log(numero)
}