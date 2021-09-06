const fetch = require('node-fetch');

//Resolvendo a promise da Api com construtor promise
 function verifiedFetch(url) {
   return new Promise((resolve, reject) => {
     if(url === 'https://api.chucknorris.io/jokes/random?category=dev'){
       fetch(url)
         .then((r) => r.json())
         .then((r) => resolve(r.value));
     }else {
      reject(new Error('endpoint não existe'))
     }
   })
 }

//Resolvendo a promise da função
function sendJokeFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
  //Solução para a promise não retornar <pending>
  //adicionar o console log dentro do .then
  //.then((joke) => console.log(`Oi ${name}, ouve essa: ${joke}`) ) 
    .then((joke) => `Oi ${name}, ouve essa ${joke}`)
    .catch((err) => err);
  console.log(message)
}

sendJokeFriend('Diego')