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
        </tr>
      </thead>
      <tbody v-for="(lote, index) in filteredLotes()" :key="index">
        <lot-row :lote="lote"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import LotRow from '@/components/admin/tables/LotRow'
import { mapState } from 'vuex'
import moment from 'moment'
import icons from 'glyphicons'

export default {
  name: 'LotsTable',
  data () {
    return {
      icons,
      sortProperty: 'nomeProduto',
      dinamicTitles: [
        { label: 'Produto', property: 'nomeProduto' },
        { label: 'Quantidade', property: 'quantidade' },
        { label: `Validade`, property: 'validade' }
      ],
      sortConfig: { property: null, order: null }
    }
  },
  computed: {
    ...mapState(['produtos']),
    lotes () {
      const lotesCopy = this.$store.state.lotes.slice()

      return lotesCopy.sort((a, b) => {
        if (this.sortConfig.order === 'desc') [a, b] = [b, a]

        if (this.sortConfig.property === 'nomeProduto') return this.sortByNomeProduto(a, b)
        else return this.generalSort(a, b)
      })
    }
  },
  components: {
    LotRow
  },
  props: {
    currentFilter: String
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
    generalSort (a, b) {
      const property = this.sortConfig.property
      return this.compare(a[property], b[property])
    },
    sortByNomeProduto (a, b) {
      return this.compare(a.produto.nome, b.produto.nome)
    },
    compare (a, b) {
      if (a < b) return -1
      else if (a > b) return 1
      else return 0
    },
    arrowDirection (property) {
      return {
        'arrow-down': this.sortConfig.property === property && this.sortConfig.order === 'desc',
        'arrow-up': this.sortConfig.property === property && this.sortConfig.order === 'asc'
      }
    },
    filteredLotes () {
      if (this.currentFilter === 'vencido') {
        return this.lotes
          .filter(lote => moment(lote.validade, 'DD/MM/YYYY').isBefore(moment()))
      } else {
        return this.lotes
          .filter(lote => moment(lote.validade, 'DD/MM/YYYY').isSameOrAfter(moment()))
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
