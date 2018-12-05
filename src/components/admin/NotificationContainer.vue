<template>
  <div>
    <notification-card v-for="(produto, index) in notifications" :key="index"
    :info="produto"/>
  </div>
</template>

<script>
import NotificationCard from '@/components/admin/NotificationCard'
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'NotificationContainer',
  components: {
    NotificationCard
  },
  computed: {
    ...mapState(['produtos', 'lotes']),
    listLotes () {
      return Object.values(this.lotes)
    },
    notifications () {
      return this.listLotes
        .map(this.processNotification)
        .filter(item => item.mensagem)
    }
  },
  methods: {
    isCloseToExpire (lote) {
      const monthDifference = moment(lote.validade).diff(moment(), 'months', true)
      return monthDifference <= 12 && lote.quantidade > 0
    },
    isCloseToExhausting (lote) {
      const loteDate = new Date(lote.validade)
      return loteDate >= Date.now() && lote.quantidade < 15
    },
    isExhausted (lote) {
      const loteDate = new Date(lote.validade)
      return loteDate >= Date.now() && lote.quantidade === 0
    },
    processNotification (lote) {
      const nomeProduto = this.produtos[lote.codigoProduto].nome
      let notification = { produto: nomeProduto, mensagem: '' }

      if (this.isCloseToExpire(lote)) notification.mensagem = 'O produto está próximo da validade'
      else if (this.isExhausted(lote)) notification.mensagem = 'O produto está esgotado'
      else if (this.isCloseToExhausting(lote)) notification.mensagem = 'O produto está próximo de esgotar'

      return notification
    }
  }
}
</script>
