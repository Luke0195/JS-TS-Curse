// Aula 18: Tratando e lancando erros( try, catch, finally);


function retornaHora(data){
  if(data instanceof Date){
    const dataHour = data.getHours();
    throw new Error('Por favor informe uma data valida');
  }
  return dataHour;
}

try{
  console.log(retornaHora(new Date()));
}catch(error){
  console.log(error)
}finally{
  console.log('Função Executada');
}
