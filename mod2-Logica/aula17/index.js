// Aula 17: Tratando e lançando erro(try, catch, throw)


function addSum(x, y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('X e Y precisam ser números');
  }
  return x + y;
}


try{
 console.log(addSum(1,2));
 console.log(addSum('3', 2))

}catch(error){
  console.log(error)
} 
