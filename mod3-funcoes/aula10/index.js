//  Aula 10 :Função recursivas.

function recursiva(max){
  if(max > 10) return
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0)