const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;

const transformaJson = JSON.parse(jsonInfo);
 
const empresasQueUsam = document.getElementById('corporations-used-by');
const vantagens = document.getElementById('advantages')
const linguagensQueUtilizam = document.getElementById('languages-used-by')

transformaJson.muitasEmpresasUsam.map((empresas) => {
  const newli = document.createElement('li');
  newli.innerText = empresas;
  empresasQueUsam.appendChild(newli)
})

transformaJson.temVariasVantagens.map((verificaVantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = verificaVantagens;
  vantagens.appendChild(newLi);
})

transformaJson.muitasLinguagensDaoSuporte.map((linguagem) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagem;
  linguagensQueUtilizam.appendChild(newLi);
})


  

  
  
  // const usoJSONPorque = JSON.parse(jsonInfo);
  // console.log(usoJSONPorque.muitasEmpresasUsam)
  
  // const corporationsList = document.getElementById('corporations-used-by');
  // const advantagesList = document.getElementById('advantages');
  // const languagesList = document.getElementById('languages-used-by');
  
  // usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  //   const newLi = document.createElement('li');
  //   newLi.innerText = empresa;
  //   corporationsList.appendChild(newLi);
  // });
  
  // usoJSONPorque.temVariasVantagens.map((vantagens) => {
  //   const newLi = document.createElement('li');
  //   newLi.innerText = vantagens;
  //   advantagesList.appendChild(newLi);
  // });
  
  // usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  //   const newLi = document.createElement('li');
  //   newLi.innerText = linguagens;
  //   languagesList.appendChild(newLi);
  // });