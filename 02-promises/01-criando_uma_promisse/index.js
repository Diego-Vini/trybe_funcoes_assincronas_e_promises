const promise = new Promise((resolve,reject) => {
  const number = Math.floor(Math.random() * 11)

  if(number <= 5){
    return reject(number);
  } else {
    resolve(number)
  }
})
.then((number) => console.log(`Que sucesso :) nosso numero foi ${number}`) )
.then((msg) => msg )
.catch((number) => console.log(`Que fracasso =( Nosso número foi ${number}`))

