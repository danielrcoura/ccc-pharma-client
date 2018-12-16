<template>
  <tr>
    <td>{{ produto.codigo }}</td>
    <td>{{ produto.nome }}</td>
    <td>{{ produto.fabricante }}</td>
    <td>{{ produto.categoria }}</td>
    <td>{{ produto.preco }}</td>
    <td>{{ isDisponivel ? 'Disponível' : 'Indisponível' }}</td>
    <td>
      <span class="btn edit" @click="showForm = true">{{ icons.edit }} Preço</span>
    </td>
    <transition name="modal">
      <preco-form :produto="produto" @close="showForm = false" v-if="showForm"/>
    </transition>
  </tr>
</template>

<script>
import PrecoForm from '@/components/admin/forms/PrecoForm'
import estoque from '@/models/estoque'
import icons from 'glyphicons'
import { mapState, mapActions } from 'vuex'

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
      return estoque.isDisponivel(this.lotes, this.produto)
    }
  },
  methods: {
    ...mapActions(['deleteProduto'])
  },
  props: {
    produto: Object
  },
  components: {
    PrecoForm
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/tables.scss';
</style>
