// Se corrigen los nombres comparado con html

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');
const $l = document.querySelector('location');

  // Se usa una funcion Async por que existe un await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  // Se agrega try, // se añade catch
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  
}
catch(e){
  handleError(e)

}
}


function handleError(err) {
  console.log('OH NO!');
  //Se cambia las comillas para imprimir
  console.log('err');
  $n.textContent = `Algo salió mal: ${err}`;

  
}

displayUser('stolinski').catch(handleError); 