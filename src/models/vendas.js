
function getProdutosVenda (venda, vendaprodutos, produtos) {
  const vendaProdutos = vendaprodutos.filter(vendaprod => vendaprod.id_venda === venda.id)
  let produtoslist = _getProdutosVenda(vendaProdutos, produtos)
  let total = produtoslist.reduce((acc, current) => acc + current.subTotal, 0)
  let quantidadeItens = produtoslist.reduce((acc, current) => acc + current.quantidade, 0)
  return {
    id: venda.id,
    data: venda.data,
    quantidadeItens,
    valorTotal: total,
    produtos: produtoslist
  }
}

function _getProdutosVenda (vendaProdutos, produtos) {
  return vendaProdutos.map(vendaProd => {
    const produto = (findProdutoById(vendaProd.id_produto, produtos))
    return {
      codigo: produto.codigo,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: vendaProd.quantidade,
      subTotal: produto.preco * vendaProd.quantidade
    }
  })
}

function findProdutoById (id, produtos) {
  let produto = {}
  produtos.forEach(prod => {
    if (prod.id === id) produto = prod
  })

  return produto
}

function joinVendaProdutos (vendas, vendaprodutos, produtos) {
  return vendas.map(venda => {
    return getProdutosVenda(venda, vendaprodutos, produtos)
  })
}

export default {
  joinVendaProdutos
}
