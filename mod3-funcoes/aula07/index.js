// Funções imediatas IFFE (Imediately invoked function expression)

// Essa função fugi do escopo global.
(function(){
  console.log('Teste')
}
)();


(function soma(x, y){
  return x + y
}

,console.log(2,3));