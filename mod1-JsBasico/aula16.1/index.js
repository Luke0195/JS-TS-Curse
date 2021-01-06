function myEscop(){
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  const pessoas = [];
  form.addEventListener('submit', function() {
    event.preventDefault();
    const nome = form.querySelector('.nome').value
    const sobrenome = form.querySelector('.sobrenome').value
    const peso = form.querySelector('.peso').value
    const altura = form.querySelector('.altura').value
    
    
    
    
    
    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura,
    })
    
    console.log(pessoas);
    resultado.innerHTML+= `<p>${nome} ${sobrenome} ${altura} ${peso}</p> `
  })
}

myEscop();

// Criar uma função IIFE( Imediaty invoc function express)