const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const entrada = 1000;

  const orcamentoMensal = (entradaDinheiro, despesas, callback) => {
    const totalDespesa = callback(despesas);
    console.log(totalDespesa)
    console.log(`Balanço do mês:
      Recebido: R$${entradaDinheiro},00
      Gasto: R$${totalDespesa},00
      Saldo: R$${entradaDinheiro - totalDespesa},00
      `);
  }

  const callback = (lancamentos) => {
    const ArrayDeValoresLancados = lancamentos.map((item) => Object.values(item) );
    return ArrayDeValoresLancados.reduce((valorAtual, proximoValor) => valorAtual += proximoValor[0], 0)
  }

orcamentoMensal(entrada,despesas,callback)