<template>
  <div>
    <button class="btn-cadastrar" @click="showForm = true">
      <span class="icon">{{ icons.plus }}</span>Novo
    </button>
    <table class='table'>
      <thead>
        <tr>
          <th v-for="title in dinamicTitles" :key="title.property"
          @click="changeSort(title.property)">
            <span>{{ title.label }}</span>
            <span class="sort-arrow" :class="arrowDirection(title.property)"></span>
          </th>
        </tr>
      </thead>
      <tbody v-for="(lote, index) in lotes" :key="index">
        <lot-row :lote="lote"/>
      </tbody>
    </table>
    <transition name="modal">
      <lot-form :lote="{}" @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import LotRow from '@/components/admin/tables/LotRow'
import icons from 'glyphicons'

export default {
  name: 'LotsTable',
  data () {
    return {
      icons,
      showForm: false,
      dinamicTitles: [
        { label: 'Produto', property: 'produto' },
        { label: 'Quantidade', property: 'quantidade' },
        { label: `Validade`, property: 'validade' }
      ],
      sortConfig: { property: null, order: null },
      lotes: [
        {
          produto: 'Paracetamol',
          quantidade: 15,
          validade: '2020/12/09'
        },
        {
          produto: 'Buscopan',
          quantidade: 30,
          validade: '2020/11/04'
        },
        {
          produto: 'Benegrip',
          quantidade: 10,
          validade: '2020/05/10'
        }
      ]
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
    LotForm,
    LotRow
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
    closeToValidity () {
      const lotsByValidity = lotes.filter((lote) => {
        const currentDate = new Date();
        const lotDate = new Date(lote.validade);
        return currentDate > lotDate && lote.quantidade > 0;
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
</style>
