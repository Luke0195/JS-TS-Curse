// Aula 01: Promises

// As promises viram com a ideia de melhorar a utilização de callbacks.
function getRandomNumber(min, max){
  min*= 1000;
  max*= 1000;
  return Math.floor(Math.random()  * (max - min) + min)
}
function esperaAi(msg, temp){
  return new Promise((resolve,reject) =>{
    if(typeof msg !== 'string'){
      reject('BadValue')
    }
    setTimeout( () => {
      resolve(msg);
  
    },temp)
  })
};

esperaAi('Frase1', getRandomNumber(1, 3))
  .then(response =>{
    console.log(response);
    return esperaAi('Frase2', getRandomNumber(1,5))
    .then(response =>{
      console.log(response);
      return esperaAi(8, getRandomNumber(1, 4))
      .then(response => {
        console.log(response)
      }).then(() =>{
        console.log('Terminei de executar as funções');
      })
    })
  })
  .catch( e => {
    console.log('Erro', e)
  })