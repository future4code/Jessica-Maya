enum CATEGORIA {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Intimas"
  }
  
  enum DESCONTO {
    VERAO = 0.05,
    INVERNO = 0.1,
    BANHO = 0.04,
    INTIMAS = 0.07
  }
  
  type Produto = {
    nome: string,
    preco: number,
    tipo: CATEGORIA,
    precoComDesconto?: number
  }
  
  const mockProdutos: Produto[] = [
    {
      nome: "blusa",
      preco: 50,
      tipo: CATEGORIA.INVERNO
    },
    {
      nome: "regata",
      preco: 25,
      tipo: CATEGORIA.VERAO
    }
  ]
  
  function adicionaDesconto(produtos: Produto[]): Produto[] {
    return produtos.map(produto => {
      let desconto = 0
      
      switch (produto.tipo) {
        case CATEGORIA.VERAO:
          desconto = DESCONTO.VERAO
          break
        case CATEGORIA.INVERNO:
          desconto = DESCONTO.INVERNO
          break
        case CATEGORIA.BANHO:
          desconto = DESCONTO.BANHO
          break
        case CATEGORIA.INTIMAS:
          desconto = DESCONTO.INTIMAS
          break
        default:
          console.log("Tipo inválido")
      }
  
      return {
        nome: produto.nome,
        preco: produto.preco,
        tipo: produto.tipo,
        precoComDesconto: (produto.preco * (1 - desconto))
      }
    })
  }
  
  console.log(adicionaDesconto(mockProdutos))