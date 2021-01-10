// Aula 06: Funções de callback
function randomNumber(min = 0 , max = 5000){
  return Math.floor(Math.random()  * (max - min) + min);
}

function f1(callback){
 setTimeout( function (){
    console.log('função 1') 
    if(callback) callback();
 }, randomNumber())
}

function f2(callback){  
  setTimeout(function() {
    console.log('função 2')

    if(callback)   callback();
    
  }, randomNumber())
  
}

function f3(callback){
  setTimeout(function(){
    console.log('funcao 3')
    if(callback)  callback();
  
  },randomNumber())
}

/*
f1(function(){ 
    f2(function(){
      f3(function(){
        console.log('Terminei de executar todas as funcões')
      })
    })
})
*/

function f1Callback(){
  f2(f2Callback)
}

function f2Callback(){
  f3(f3Callback)
}

function f3Callback(){

    console.log('Terminei de executar todas as funções')
}

f1(f1Callback);
