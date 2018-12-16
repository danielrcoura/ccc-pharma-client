import moment from 'moment'

function getProdutosVenda (venda, vendaprodutos) {
  const vendaProdutos = vendaprodutos.filter(vendaprod => vendaprod.venda.vendaId === venda.vendaId)
  let produtoslist = _getProdutosVenda(vendaProdutos)
  let quantidadeItens = produtoslist.reduce((acc, current) => acc + current.quantidade, 0)
  return {
    id: venda.vendaId,
    data: venda.data,
    quantidadeItens,
    valorTotal: venda.valorTotal,
    produtos: produtoslist
  }
}

function _getProdutosVenda (vendaProdutos) {
  return vendaProdutos.map(vendaProd => {
    const produto = vendaProd.produto
    return {
      codigo: produto.codigo,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: vendaProd.quantidade,
      subTotal: vendaProd.subTotal
    }
  })
}

function joinVendaProdutos (vendas, vendaprodutos) {
  return vendas.map(venda => {
    return getProdutosVenda(venda, vendaprodutos)
  })
}

function receitaArrecadada (vendas) {
  return vendas.reduce((acc, current) =>
    acc + current.valorTotal, 0)
}

function receitaPorMes (vendas) {
  let vendaspormes = []
  for (let i = 0; i < 12; i++) {
    vendaspormes[i] = 0
  }
  vendas.forEach(venda => {
    let data = moment(venda.data).format('DD/MM/YYYY')
    vendaspormes[moment(data).month()] += venda.valorTotal
  })
  return vendaspormes
}

export default {
  joinVendaProdutos,
  receitaArrecadada,
  receitaPorMes
}
