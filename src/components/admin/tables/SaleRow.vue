<template>
  <tr>
    <td>{{ venda.id }}</td>
    <td>{{ venda.data }}</td>
    <td>{{ venda.quantidadeItens }}</td>
    <td>{{ venda.valorTotal }}</td>
    <td class="small">
      <span class="btn edit" @click="showDetails = true">{{ icons.clipboard }}</span>
    </td>
    <transition name="modal">
      <sale-details :venda="venda" @close="showDetails = false" v-if="showDetails"/>
    </transition>
  </tr>
</template>

<script>
import SaleDetails from '@/components/admin/tables/SaleDetails'
import icons from 'glyphicons'

export default {
  name: 'SaleRow',
  data () {
    return {
      icons,
      showDetails: false
    }
  },
  props: {
    venda: Object
  },
  components: {
    SaleDetails
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
.small {
  width: 140px;
}
</style>
