// Exercicio de fixação de callback


const nome = 'Lucas Santos';
const email = 'lucas@rocketseat.com.br';

function randomNumber(min = 1000, max = 5000 ){
  return Math.floor(Math.random() * (max - min) + min);
}

function signUp(callback){
 setTimeout(function(){
  console.log('--------------------------------------');
  console.log('Cadastrando usuário...');
  console.log('Usuário cadastrado');
  console.log('---------------------------------------');
  if(callback){
      callback()
  }
 }, randomNumber())
}

function confirmationOfEmail(callback){
 setTimeout(function(){
  console.log('--------------------------------------');
  console.log(` Seja muito bem-vindo ${nome}.`);
  console.log(` Em breve te enviaremos um email de confirmação para o endereço ${email}`);
  console.log(' Confirmando o seu cadastro');
  console.log('--------------------------------------')
  if(callback) {
     callback();
  }
 }, randomNumber())
}

function welcomePage(callback){
setTimeout(function(){
  console.log('--------------------------------------')
  console.log(` Sua confirmação  de email foi realizada com sucesso `);
  console.log(` Seja muito bem-vindo ao nosso time`)
  console.log('--------------------------------------')
  if(callback){
    callback();
  }
}, randomNumber())
}


function signUpCallBack(){
  confirmationOfEmail(confirmationOfEmailCallBack);
}

function  confirmationOfEmailCallBack(){
   welcomePage(welcomePageCallback);
}

function welcomePageCallback(){
   console.log('Terminei de executar as funções')
}

signUp(signUpCallBack);