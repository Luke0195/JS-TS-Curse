// Aula 04: Express - Introdução
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(routes);
app.listen(3338, ()=>{
  console.log('Acessar http://localhost:3338')
  console.log('O servidor está rodando')
})
