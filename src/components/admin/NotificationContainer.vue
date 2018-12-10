<template>
  <div>
    <notification-card v-for="notificacao in produtosProximosDeEsgotar" :key="notificacao.title"
    :info="notificacao"/>
    <notification-card v-for="notificacao in lotesProximosDaValidade" :key="notificacao.title"
    :info="notificacao"/>
  </div>
</template>

<script>
import NotificationCard from '@/components/admin/NotificationCard'
import estoque from '@/models/estoque'
import { mapState } from 'vuex'

export default {
  name: 'NotificationContainer',
  components: {
    NotificationCard
  },
  computed: {
    ...mapState(['produtos', 'lotes']),
    lotesProximosDaValidade () {
      return this.lotes
        .filter(estoque.isProximoDaValidade)
        .map(this.loteToNotification)
    },
    produtosProximosDeEsgotar () {
      return this.produtos
        .filter(produto => estoque.isProximoDeEsgotar(this.lotes, produto))
        .map(this.produtoToNotification)
    }
  },
  methods: {
    loteToNotification (lote) {
      const titulo = `${this.produtos.find(p => lote.idProduto === p.id).nome} - Lote #${lote.id}`
      return { titulo: titulo, mensagem: 'O lote está próximo da validade' }
    },
    produtoToNotification (produto) {
      const titulo = produto.nome
      return { titulo: titulo, mensagem: 'O produto está próximo de esgotar' }
    }
  }
}
</script>
