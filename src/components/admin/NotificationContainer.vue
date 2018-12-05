<template>
  <div>
    <notification-card v-for="(produto, index) in getLotesVencidos()" :key="index" 
    :info="produto"/>
  </div>
</template>

<script>
import NotificationCard from '@/components/admin/NotificationCard'
import { mapState } from 'vuex'

export default {
  name: 'NotificationContainer',
  components: {
    NotificationCard
  },
  computed: {
    ...mapState(['produtos', 'lotes']),
    listLotes () {
      return Object.values(this.lotes)
    }
  },
  methods: {
    getLotesVencidos () {
      const currentDate = new Date()
      const lotesVencidos = this.listLotes.filter((lote) => {
        const loteDate = new Date(lote.validade)
        return loteDate < currentDate && lote.quantidade > 0
      })
      return lotesVencidos.map(element => {
        return {
          produto: this.produtos[element.codigoProduto].nome,
          mensagem: 'O produto está próximo da validade'
        }
      })
    },
    getLotesFaltantes () {
      const currentDate = new Date()
      return this.listLotes.filter((lote) => {
        const loteDate = new Date(lote.validade)
        return lote.quantidade <= 0 && loteDate >= currentDate
      })
    }
  }

}
</script>
