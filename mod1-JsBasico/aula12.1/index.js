let numero =Number(prompt('Informe o número'));

const resultado = document.getElementById('valor').innerHTML =`${numero}`

const text= document.getElementById('texto')
text.innerHTML+=`<p> Raiz Quadrada ${Math.sqrt(numero)} </p> <br/>`;
text.innerHTML+=`<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p> <br/>`;
text.innerHTML+=`<p> É  NaN: ${Number.isNaN(numero)} </p> <br/>`;
text.innerHTML+= `<p> Arrendondando para baixo ${Math.floor(numero)}</p>`;
text.innerHTML+= `<p> Arrendodando para cima ${Math.ceil(numero)} </p>`;
text.innerHTML+= ` <p> Com duas casas decimais ${numero.toFixed(2)} </p>`;