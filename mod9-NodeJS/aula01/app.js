const axios = require('axios');
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Lucas', 'Santos');
console.log(p1);

axios('https://pokeapi.co/api/v2/pokemon/charmeleon').then(response =>{
  console.log(response);
}).catch(error => {
  console.log(error)
})

