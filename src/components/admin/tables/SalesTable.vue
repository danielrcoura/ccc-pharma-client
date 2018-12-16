<template>
  <div class="scroll">
    <table class='table'>
      <thead>
        <tr>
          <th v-for="title in dinamicTitles" :key="title.property"
          @click="changeSort(title.property)">
            <span>{{ title.label }}</span>
            <span class="sort-arrow" :class="arrowDirection(title.property)"></span>
          </th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody v-for='(venda, index) in vendas' :key='index'>
        <sale-row :venda="venda" />
      </tbody>
    </table>
  </div>
</template>

<script>
import SaleRow from '@/components/admin/tables/SaleRow'
import vendasModel from '@/models/vendas'
import icons from 'glyphicons'
import { mapState } from 'vuex'

export default {
  name: 'SalesTable',
  data () {
    return {
      icons,
      sortProperty: 'data',
      dinamicTitles: [
        {label: 'Id', property: 'id'},
        {label: 'Data', property: 'data'},
        {label: 'Quant. Itens', property: 'quantidadeItens'},
        {label: 'Total (R$)', property: 'valorTotal'}
      ],
      sortConfig: { property: null, order: null }
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
    SaleRow
  },
  computed: {
    ...mapState(['vendas', 'vendaProdutos']),
    vendas () {
      const vendasCopy = this.$store.state.vendas.slice()
      const vendaProdutosCopy = this.$store.state.vendaProdutos.slice()
      return vendasModel.joinVendaProdutos(vendasCopy, vendaProdutosCopy)
    }
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
      let property = this.sortConfig.property || 'id'

      this.vendas.sort((a, b) => {
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
