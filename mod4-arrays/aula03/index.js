// Aula 03: Concatenando Arrays

const array1 = [ 1, 2, 3, 4, 5 ];
const array2 = [6, 7 , 8 , 9 ,10 ];

const array3 = array1.concat(array2);
const array4 =[...array1, ...array2];

console.log(array4);