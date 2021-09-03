const fetch = require('node-fetch');

const url = 'https://api.jokes.one/jod?category=animal'

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json) )