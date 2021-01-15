// Aula 05: fetch Api.

fetch('pagina1.html').then(response => {
  if(response.status !== 200) throw new Error('Error 404');
  return response.text().then(response=>{
    console.log(response)
  })
}).catch(e => console.log(e));