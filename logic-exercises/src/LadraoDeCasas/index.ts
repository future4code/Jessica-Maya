function ladraoDeCasa(casas: number[]) {
    let valor = []
  
    for(let i = 0; i < casas.length; i++) {
      let casaAtual = casas[i];
      let casaAnterior: any = valor[i - 1] || 0;
      let duasCasaAnterior: any = valor[i - 2] || 0;
      valor.push(Math.max(casaAtual + duasCasaAnterior, casaAnterior));
    }
  
    return valor[casas.length - 1];
  }
  console.log(ladraoDeCasa([1,2,3,1]))
  console.log(ladraoDeCasa([2,7,9,3,1]))
  console.log(ladraoDeCasa([2,3,6,12,3,9,11,4]))
  
  function ladraoDeCasa2(casas: number[]) {
    let casasAtuais = 0;
    let casasAnteriores = 0;
  
    for(let i = 0; i < casas.length; i++) {
      let casa = casas[i];
      let novaCasa = Math.max(casasAtuais, casasAnteriores + casa)
      casasAnteriores = casasAtuais;
      casasAtuais = novaCasa;
    }
  
    return casasAtuais
  } 
  console.log(ladraoDeCasa2([1,2,3,1]))
  console.log(ladraoDeCasa2([2,7,9,3,1]))
  console.log(ladraoDeCasa2([2,3,6,12,3,9,11,4]))