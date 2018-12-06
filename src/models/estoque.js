import moment from 'moment'

function _isVencido (lotesProduto) {
  return lotesProduto.every(lote => moment(lote.validade) < moment())
}

function _isEmFalta (lotesProduto) {
  return lotesProduto.length === 0
}

function isDisponivel (lotes, codigo) {
  codigo = Number(codigo)
  const lotesProduto = lotes.filter(lote => lote.codigoProduto === codigo)

  return !_isVencido(lotesProduto) && !_isEmFalta(lotesProduto)
}

function getProdutosIndisponiveis (lotes, produtos) {
  let codProdutos = []
  for (let codigo in produtos) {
    !isDisponivel(lotes, codigo) && codProdutos.push(produtos[codigo])
  }

  return codProdutos
}

export default {
  getProdutosIndisponiveis,
  isDisponivel
}
