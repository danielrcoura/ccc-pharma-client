<template>
  <div class="scroll">
    <table class="table">
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
      <tbody v-for="(lote, index) in getLots()" :key="index">
        <lot-row :lote="lote"/>
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
      sortProperty: 'produto',
      dinamicTitles: [
        { label: 'Produto', property: 'produto' },
        { label: 'Quantidade', property: 'quantidade' },
        { label: `Validade`, property: 'validade' }
      ],
      sortConfig: { property: null, order: null }
    }
  },
  computed: {
    ...mapState(['lotes'])
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
      let property = this.sortConfig.property || 'nome'
      this.lotes.sort((a, b) => {
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
    },
    getLots () {
      if (this.currentFilter === 'vencido') {
        const currentDate = new Date()
        return this.lotes.filter((lote) => {
          const lotDate = new Date(lote.validade)
          return lotDate < currentDate && lote.quantidade > 0
        })
      } else if (this.currentFilter === 'falta') {
        return this.lotes.filter((lote) => {
          return lote.quantidade <= 0
        })
      } else {
        return this.lotes
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
