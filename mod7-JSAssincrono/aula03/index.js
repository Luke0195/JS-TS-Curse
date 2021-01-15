// Aula  03: Async Await

function rand(min = 0, max = 3000){
  min *=1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min ) + min);
}

function showMessage(msg, timer){
       setTimeout(()=>{
      console.log(msg)
     },timer)
  }

 async function exec(){
   try{
  const fase1 = await showMessage('Message 1', rand());
  console.log(fase1)
  const fase2 = await showMessage('Message 2', rand());
  console.log(fase2)
  const fase3 = await showMessage('Message 1', rand());
  console.log(fase3)

  console.log('Terminamos na fase 3 ')
   }catch(error){
     console.log(error);
   }

 }
exec();

/*
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
*/