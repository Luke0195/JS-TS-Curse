const nome = prompt('Informe o seu nome Completo ');


document.body.innerHTML+= `Seu nome é ${nome} <br/>`;
document.body.innerHTML +=`Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML +=`A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`;
document.body.innerHTML += `QUal o primeiro indice da letra LETRA no seu nome? ${nome[0]} <br/>`;
document.body.innerHTML += `Qual o último indice da letra LETRA no seu nome? ${nome.slice(-1)} <br/>`;
document.body.innerHTML += ` As ultimas 3 letras do seu nome são ${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br/>`;
document.body.innerHTML +=` Seu nome com letras maiúsculas  ${nome.toLocaleUpperCase()}<br/>`;
document.body.innerHTML += `Seu nome com letras minusculas  ${nome.toLowerCase()}`
