// Aula 08:  Object Map

const pessoas = [
  {id:3,  nome: 'Lucas '},
  {id:2,  nome: 'Diego'},
  {id:1,  nome: 'Mayke'},
]

/* 

const novasPessoas = {};
for (const pessoas of pessoas){
  const { id } = pessoas
  novasPessoas[id] = {...pesssoa}
} 
*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas.get(2));