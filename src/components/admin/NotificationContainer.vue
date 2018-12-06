<template>
  <div>
    <notification-card v-for="(lote, index) in notifications" :key="index"
    :info="lote"/>
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
      return monthDifference <= 1 && lote.quantidade > 0
    },
    isCloseToExhausting (lote) {
      const loteDate = new Date(lote.validade)
      return loteDate >= Date.now() && lote.quantidade < 15
    },
    processNotification (lote) {
      const loteName = 'Lote ' + this.lotes[lote.id].id
      let notification = { titulo: loteName, mensagem: '' }

      if (this.isCloseToExpire(lote)) notification.mensagem = 'O lote está próximo da validade'
      else if (this.isCloseToExhausting(lote)) notification.mensagem = 'O lote está próximo de esgotar'

      return notification
    }
  }
}
</script>
