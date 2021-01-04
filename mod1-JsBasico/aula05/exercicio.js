// Exercicio pratico 


const nome = 'Lucas Alves';
const sobrenome = 'Santos';
const idade = 26;
const  peso = 89;
const alturaEmM = 1.90;
let nascimento = 2020 - idade;
let imc = peso/(alturaEmM * alturaEmM);


console.log('Resultado');
console.log(`${nome} dos ${sobrenome} tem ${idade}, pesa ${peso}kg tem ${alturaEmM} e seu ImC é de ${imc}.
${nome} nasceu em ${nascimento} `)