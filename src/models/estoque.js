import moment from 'moment'

function _isVencido (lotesProduto) {
  return lotesProduto.every(lote => moment(lote.validade).isBefore(moment()))
}

function _isEmFalta (lotesProduto) {
  return lotesProduto.length === 0
}

function isDisponivel (lotes, produto) {
  const lotesProduto = lotes.filter(lote => lote.produto.id === produto.id)

  return !_isVencido(lotesProduto) && !_isEmFalta(lotesProduto)
}

function getProdutosIndisponiveis (lotes, produtos) {
  return produtos.filter(produto => !isDisponivel(lotes, produto))
}

function isProximoDaValidade (lote) {
  const intervaloEmMeses = moment(lote.validade).diff(moment(), 'months', true)
  return intervaloEmMeses > 0 && intervaloEmMeses <= 1
}

function isProximoDeEsgotar (lotes, produto) {
  const lotesFiltrados = lotes.filter(lote => {
    const naValidade = moment(lote.validade).isAfter(moment())
    return lote.produto.id === produto.id && naValidade
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
