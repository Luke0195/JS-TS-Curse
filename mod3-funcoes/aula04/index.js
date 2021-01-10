//  Aula 04: Escopo Léxico
// A função sabe onde ele foi criada e sabe quais são os seus vizinhos.
const nome = 'Lucas Santos';

function showName(){
  const nome ='Igor Medeiros'; 
  console.log(nome);
}

function  useShowName(){
  showName();
}

useShowName();