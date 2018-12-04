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
      <tbody v-for="(produto, index) in listProdutos" :key="index">
        <product-row :produto="produto"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductRow from '@/components/admin/tables/ProductRow'
import { mapState } from 'vuex'
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
        { label: 'Preço (R$)', property: 'preco' }
      ],
      sortConfig: { property: null, order: null }
    }
  },
  computed: {
    ...mapState(['produtos']),
    listProdutos () {
      return Object.values(this.produtos)
    }
  },
  mounted () {
    this.sort()
  },
  watch: {
    sortConfig: {
      handler () {
        this.sort()
      },
      deep: true
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
    sort () {
      let property = this.sortConfig.property || 'nome'

      this.listProdutos.sort((a, b) => {
        if (this.sortConfig.order === 'desc') {
          let temp = a
          a = b
          b = temp
        }

        if (a[property] < b[property]) return -1
        else if (a[property] > b[property]) return 1
        else return 0
      })
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
