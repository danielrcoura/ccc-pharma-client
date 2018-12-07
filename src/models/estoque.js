import moment from 'moment'

function _isVencido (lotesProduto) {
  return lotesProduto.every(lote => moment(lote.validade).isBefore(moment()))
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

function isProximoDaValidade (lote) {
  const intervaloEmMeses = moment(lote.validade).diff(moment(), 'months', true)
  return intervaloEmMeses <= 1
}

function isProximoDeEsgotar (lotes, codigo) {
  codigo = Number(codigo)
  const lotesFiltrados = lotes.filter(lote => {
    const naValidade = moment(lote.validade).isAfter(moment())
    return lote.codigoProduto === codigo && naValidade
  })
  const qtdItens = lotesFiltrados
    .reduce((soma, current) => soma + current.quantidade, 0)

  return qtdItens > 0 && qtdItens < 15
}

export default {
  getProdutosIndisponiveis,
  isDisponivel,
  isProximoDaValidade,
  isProximoDeEsgotar
}
