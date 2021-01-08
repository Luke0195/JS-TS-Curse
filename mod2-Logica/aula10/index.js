// Aula 10: Atribuição via desestruturação (Arrays)

const  numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

const [firstIndex,  , thirdIndex,  , fithyIndex,  ,sevenIndex,  ,nineIndex , ...resto] = numberArray

const oddArray = [firstIndex,thirdIndex,fithyIndex, sevenIndex, nineIndex];

const arrayOfNumbers = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

const [, [, , number6]] = arrayOfNumbers; // Para pegar os array precisamos desestruturar o array do array.


const [[firstNumber], [, numberFithy], [, , numberNine] ] = arrayOfNumbers;

console.log(firstNumber, numberFithy, numberNine);

const [ [ , , numberThree], [, number5 ] , [number7] ] = arrayOfNumbers;

console.log(numberThree, number5, number7);