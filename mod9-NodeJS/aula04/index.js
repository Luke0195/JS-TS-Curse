// Aula 04: Express - Introdução
const express = require('express')
const app = express();

app.get('/', (request, response) =>{
  return response.json({message: 'Redux na pratíca '});
});

app.listen(3338, ()=>{
  console.log('Acessar http://localhost:3338')
  console.log('O servidor está rodando')
})
