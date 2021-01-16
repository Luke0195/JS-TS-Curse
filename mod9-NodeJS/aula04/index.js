// Aula 04: Express - Introdução
const express = require('express')
const app = express();

app.get('/', (request, response) =>{
  return response.json({message: 'Guia definitivo de redux na pratica '});
});

app.listen(3338, ()=>{
  console.log('Acessar http://localhost:3338')
  console.log('O servidor está rodando')
})
