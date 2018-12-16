<template>
  <tr>
    <td>{{ lote.id }}</td>
    <td>{{ lote.produto.nome }}</td>
    <td>{{ lote.quantidade }}</td>
    <td>{{ lote.validade }}</td>
    <transition name="modal">
      <lot-form :lote="lote" @close="showForm = false" v-if="showForm"/>
    </transition>
  </tr>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import icons from 'glyphicons'

export default {
  name: 'LotRow',
  data () {
    return {
      icons,
      showForm: false
    }
  },
  props: {
    lote: Object
  },
  components: {
    LotForm
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
