import moment from 'moment'

function getProdutosIndisponiveis (lotes, produtos) {
  let codProdutos = []
  for (let codigo in produtos) {
    codigo = Number(codigo)
    const lotesProduto = lotes.filter(lote => lote.codigoProduto === codigo)
    if (lotesProduto.length === 0) {
      codProdutos.push(codigo)
    } else {
      const isVencido = lotesProduto.every(lote => moment(lote.validade) < moment())
      isVencido && codProdutos.push(codigo)
    }
  }
  return codProdutos.map(codigo => produtos[codigo])
}

export default { getProdutosIndisponiveis }
