function getRandomNumber(min, max){
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function execFunction(msg, temp){
  return new Promise((resolve, reject)=>{
    setTimeout(() =>{
      resolve(msg)
    },temp)
    
  })
}

execFunction('Acordar', getRandomNumber(1, 3))
.then(response =>{
    console.log(response);
    return execFunction('Tomar café ', getRandomNumber(1, 3))
    .then(response =>{
      console.log(response);
      return  execFunction('Trabalhar',getRandomNumber(1,3))
    }).then(response =>{
      console.log(response);
      }).then(()=>{
        console.log('Executei todas as funçoes');
      }
    
      })
    }) 
    
})
