// Aula 03: Avaliação de Curto-Circuito( Short-Circuit)

// falsy values : 0 , false, '', null, undefined, NaN

console.log('Lucas Santos' && ' Jorge');

function teste(){
  return 'Test is runing ';
}

const execTest = false;

console.log('oi' && teste());