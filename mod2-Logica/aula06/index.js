// Aula 06 : Objeto Date
/*
const tresHoras = (60 * 60) * 3 * 1000; // forma de se calcular horas no Javascript
const umDia = (60 * 60) * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());
*/

const data = new Date('2021-01-07 15:28:59'); // O 0 equivale o mês 1 utilizando o metódo date.
console.log('Dia',data.toString()); // Converte a data em string;
console.log('Data',data.getDate()); // Retorna o dia daquele data.
console.log('Mes',data.getMonth()); // Retorna o mês
console.log('Year',data.getFullYear());// Retorna o ano
console.log('Hour',data.getHours()); // Retorna a hora
console.log('Minutes', data.getMinutes()); // Retorna os minutos.
console.log('Seconds', data.getSeconds());
console.log('Retorna o dia da semana', data.getDay());

// 0 é domingo e 6 é sábado.



