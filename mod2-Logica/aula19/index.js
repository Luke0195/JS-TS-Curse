// setInterval e setTimeout
// setInterfaval define quantas vezes a função será executada.
function mostrarHora(){
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', { 
    hour12:false
  });
}

// Função para executar intervalos 

function funcaoDoInterval(){
  console.log(mostrarHora())
}

const timer = setInterval(function(){
  console.log(mostrarHora())
}, 1000)

setTimeout( function() { // Só executa uma vez
  clearInterval(timer);
}, 50000)