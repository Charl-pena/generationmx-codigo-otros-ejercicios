const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Cambiar la query para buscar clase en lugar de elemento para $n
const $n = document.querySelector('.name');
// Cambiar la query para buscar clase en lugar de id para $b
const $b = document.querySelector('.blog');
// En el html crear un elemento p con el nombre de la clase location 
const $l = document.querySelector('.location');

// Agregamos la palabra clave async
async function displayUser(username) {
  $n.textContent = 'cargando...';

  // Agregamos await a la llamada fetch
  const response  = await fetch(`${usersEndpoint}/${username}`);
  
  // Declaramos data dado que no existia y ademas parseamos la respuesta json a un objecto js
  let data  = await response.json();
  
  console.log(data);
  
  // Hacian falta las backsticks en la string para que la interpolacion funcionara correctamente 
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);