const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if(url === 'https://api.chucknorris.io/jokes/random?category=dev'){
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }else {
    throw new Error('endpoint não existe')
   }
}


//Resolvendo a promise da função com async/await
async function sendJokeFriend(name) {
  try {
    const message = await verifiedFetch('https:///api.chucknorris.io/jokes/random?category=dev')  
    console.log(`Oi ${name}, ouve essa: ${message}`);
} catch (error) {
    console.error(error.message)
  }
}

sendJokeFriend('Diego')