// Aula 08: Mais diferenças entra var e let 

// Let tem escopo de bloco  {... bloco }

let nome = 'Lucas'
var nome2 = 'Santos'
function execTeste(){;
  var nome2= 'Mayke'; 
  console.log(nome, nome2);
}

execTeste();
/*  
let nome = 'Lucas';
var nome2 = 'Lucas';

const isTrue = true;

if (isTrue){
  let nome = 'Otavio';
  var nome2 = 'Rogerio'
  console.log(nome, nome2);

  if(isTrue){
    let nome = 'Igor';
    var nome2 = 'Ronaldo';
  }
}

console.log(nome, nome2);

*/



