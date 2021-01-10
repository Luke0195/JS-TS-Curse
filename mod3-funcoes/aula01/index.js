// Aula 01: Maneiras de declarar funções 

function teste(){ // Forma declarativa
  console.log('Test is runing');
}


const teste2 = function(){ // Atribuindo uma função em uma função
  console.log('Test2 is runing');
}

teste2();

// Podemos atribuir uma função em uma função


function execFuncao2(funcao){
  console.log('Executando a função abaixo');
  funcao();
}

execFuncao2(teste)

const soma = (x , y ) =>  x + y;


console.log(soma(2,2))