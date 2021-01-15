// Aula 02 : Método úteis para Promises

// Promises.all  -> retorna todas as promises 
// Promises.race  -> retorna a primeira promise executada.
// Promises.resolve -> retorna o primeiro resolve .
// Promises.reject -> retorna o primeira reject

function rand(min, max){
  min *=1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min ) + min);
}

function showMessage(msg, timer){
  return new Promise((resolve, reject) =>{
    if(typeof message !== 'number') reject()
     setTimeout(()=>{
        resolve(msg)
     },timer)
  })

}


showMessage('Message 1 ', rand(1, 3))
  .then(response =>{
  console.log(response);
  return showMessage('Message 2', rand(1, 5))
  .then(response =>{
    console.log(response);
    return showMessage('Message 3', rand(1,4))
    .then((response)=>{
      console.log(response)
    }).then(() =>{
      console.log('Terminei de executar as funções')
    })
  }) 
}).catch(e => {
  console.log('Error', e)
})

const promisses = 
[ 
  'Primeiro Valor' , 
  showMessage('Promise 1', rand(1, 3)),
  showMessage('Promise 2', rand(1, 5)),
  showMessage('Promise 3', rand(1, 3)),
  'Outro valor'
];

Promise.all(promisses).then(function(valor){
  console.log(valor);
}).then(function(error){
  console.log(error)
})