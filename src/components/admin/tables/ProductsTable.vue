<template>
  <div class="scroll">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="title in dinamicTitles" :key="title.property"
          @click="changeSort(title.property)">
            <span>{{ title.label }}</span>
            <span class="sort-arrow" :class="arrowDirection(title.property)"></span>
          </th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody v-for="(produto, index) in produtos" :key="index">
        <product-row :produto="produto"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductRow from '@/components/admin/tables/ProductRow'
import { mapState } from 'vuex'
import estoque from '@/models/estoque'
import icons from 'glyphicons'

export default {
  name: 'ProductsTable',
  data () {
    return {
      icons,
      dinamicTitles: [
        { label: 'Nome', property: 'nome' },
        { label: 'Fabricante', property: 'fabricante' },
        { label: 'Categoria', property: 'categoria' },
        { label: 'Preço (R$)', property: 'preco' },
        { label: 'Situação', property: 'situacao' }
      ],
      sortConfig: { property: null, order: null }
    }
  },
  computed: {
    ...mapState(['lotes']),
    produtos () {
      const produtosCopy = this.$store.state.produtos.slice()

      const property = this.sortConfig.property
      return produtosCopy.sort((a, b) => {
        if (this.sortConfig.order === 'desc') [a, b] = [b, a]

        if (property === 'situacao') return this.sortBySituacao(a, b)
        else return this.generalSort(a, b)
      })
    },
    listLotes () {
      return Object.values(this.lotes)
    }
  },
  components: {
    ProductRow
  },
  methods: {
    changeSort (property) {
      if (this.sortConfig.property === property) {
        if (this.sortConfig.order === 'asc') {
          this.sortConfig.order = 'desc'
        } else {
          this.sortConfig.property = null
          this.sortConfig.order = null
        }
      } else {
        this.sortConfig.property = property
        this.sortConfig.order = 'asc'
      }
    },
    sortBySituacao (a, b) {
      const isDisponivelA = estoque.isDisponivel(this.lotes, a)
      const isDisponivelB = estoque.isDisponivel(this.lotes, b)

      if (isDisponivelA && !isDisponivelB) return -1
      else if (!isDisponivelA && isDisponivelB) return 1
      else return 0
    },
    generalSort (a, b) {
      const property = this.sortConfig.property || 'nome'

      if (a[property] < b[property]) return -1
      else if (a[property] > b[property]) return 1
      else return 0
    },
    arrowDirection (property) {
      return {
        'arrow-down': this.sortConfig.property === property && this.sortConfig.order === 'desc',
        'arrow-up': this.sortConfig.property === property && this.sortConfig.order === 'asc'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
