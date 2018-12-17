<template>
  <div class="content">
    <div>Lotes válidos: {{ lotesInfo.numLotes }}</div>
    <div>Produtos: {{ lotesInfo.numItems }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EstoqueInfo',
  computed: {
    ...mapState(['lotes']),
    lotesInfo () {
      let numLotes = 0
      let numItems = 0
      this.lotes.forEach(lote => {
        const loteDate = new Date(lote.validade)
        if (lote.quantidade > 0 && loteDate >= Date.now()) {
          numLotes++
          numItems += lote.quantidade
        }
      })

      return {numLotes, numItems}
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.content {
  align-items: center;
  color: #666;
  text-align: center;
  margin: 0 5rem;
  animation: fade .5s 1;
  & > * {
    padding: .5rem;
    &:first-child {
      border-bottom: 1px solid #e1e1e1;
    }
  }
}
</style>
