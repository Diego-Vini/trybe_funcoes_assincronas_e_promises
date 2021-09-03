const fetch = require('node-fetch');

const fetchJoke = () => {
  const param = { headers: {Accept: 'application/json'}};
  fetch('https://icanhazdadjoke.com/search?term=spider', param)
    .then((response) => response.json() )
    .then((data) => console.log(`Piada de aranha: ${data.results[0].joke}` ) )
}

fetchJoke();
