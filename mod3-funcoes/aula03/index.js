// Aula 03: Retorno da função

function createPeople(firstName, lastName){
  return{
    firstName,
    lastName
  }
}

const people1 = createPeople('Lucas', 'Santos');
console.log(people1.firstName);


function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto
  }
  return falaResto;
}

const chamaFuncao = falaFrase('Olá');
console.log(chamaFuncao('Mundo!'))


function criaMultiplicador(numero){
 return function calculaMultiplicador(valor){
     return numero * valor;
   }
   
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2));
console.log(quadriplica(2));



function MultiplicaSoma(multiplicador){ // Podemos usar o escopo em parametros tbm. 
  // A função vai lembrar dos seus vizinhos
 return  function soma(x , y ){
    const resultado =  x + y;
    return  resultado * multiplicador;
  }
}

const testaSoma = MultiplicaSoma(2);
console.log(testaSoma(3, 30));


function teste(nome){
 return function notaPessao(numeroNota){
    return ` ${nome} é nota ${numeroNota}`;
  }
}

const nomePessoa = teste('Lucas Alves Dos Santos');
console.log(nomePessoa(10))