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
      <tbody v-for="(lote, index) in getLots()" :key="index">
        <lot-row :lote="lote" :nomeProduto="produtos[lote.codigoProduto].nome"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import LotRow from '@/components/admin/tables/LotRow'
import { mapState } from 'vuex'
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
    ...mapState(['lotes', 'produtos']),
    listLotes () {
      return Object.values(this.lotes)
    },
    lotesVencidos () {
      return this.listLotes.filter(lote => {
        const lotDate = new Date(lote.validade)
        return lotDate < Date.now()
      })
    },
    lotesValidos () {
      return this.listLotes.filter(lote => {
        const lotDate = new Date(lote.validade)
        return lotDate >= Date.now()
      })
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
    sort () {
      let property = this.sortConfig.property || 'nomeProduto'
      this.listLotes.sort((a, b) => {
        if (this.sortConfig.order === 'desc') [a, b] = [b, a]

        if (property === 'nomeProduto') return this.sortByNomeProduto(a, b)
        else return this.generalSort(a, b)
      })
    },
    generalSort (a, b) {
      const property = this.sortConfig.property
      return this.compare(a[property], b[property])
    },
    sortByNomeProduto (a, b) {
      const nomeProdutoA = this.produtos[a.codigoProduto].nome
      const nomeProdutoB = this.produtos[b.codigoProduto].nome

      return this.compare(nomeProdutoA, nomeProdutoB)
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
    getLots () {
      if (this.currentFilter === 'vencido') return this.lotesVencidos
      else return this.lotesValidos
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
