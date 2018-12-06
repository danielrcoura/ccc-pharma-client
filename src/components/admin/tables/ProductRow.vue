<template>
  <tr>
    <td>{{ produto.codigo }}</td>
    <td>{{ produto.nome }}</td>
    <td>{{ produto.fabricante }}</td>
    <td>{{ produto.categoria }}</td>
    <td>{{ produto.preco.toFixed(2) }}</td>
    <td>{{ isDisponivel ? 'Disponível' : 'Indisponível' }}</td>
    <td class="small">
      <span class="btn edit" @click="showForm = true">{{ icons.edit }}</span>
      <span class="btn remove">{{ icons.cancel }}</span>
    </td>
    <transition name="modal">
      <product-form :produto="produto" @close="showForm = false" v-if="showForm"/>
    </transition>
  </tr>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import estoque from '@/models/estoque'
import icons from 'glyphicons'
import { mapState } from 'vuex'

export default {
  name: 'ProductRow',
  data () {
    return {
      icons,
      showForm: false
    }
  },
  computed: {
    ...mapState(['lotes']),
    isDisponivel () {
      return estoque.isDisponivel(Object.values(this.lotes), this.produto.codigo)
    }
  },
  props: {
    produto: Object
  },
  components: {
    ProductForm
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/tables.scss';
</style>
