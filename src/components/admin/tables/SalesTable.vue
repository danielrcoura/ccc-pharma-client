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
import icons from 'glyphicons'

export default {
  name: 'SalesTable',
  data () {
    return {
      icons,
      sortProperty: 'data',
      dinamicTitles: [
        {label: 'Id', property: 'id'},
        {label: 'Cliente', property: 'cpfCliente'},
        {label: 'Data', property: 'data'},
        {label: 'Quant. Itens', property: 'quantidadeItens'},
        {label: 'Total (R$)', property: 'valorTotal'}
      ],
      sortConfig: { property: null, order: null },
      vendas: [
        {
          id: 1,
          data: '20/10/2018',
          cpfCliente: '111.111.111-11',
          quantidadeItens: 3,
          valorTotal: 90,
          produtos:[
            {
              nome: 'Produto1',
              codigo: 1234,
              categoria: 'Medicamentos',
              preco: 10,
              quantidade: 1,
              subTotal: 10
            },
            {
              nome: 'Produto2',
              codigo: 1235,
              categoria: 'Medicamentos',
              preco: 40,
              quantidade: 2,
              subTotal: 80
            },
          ]
        },
        {
          id: 2,
          data: '20/10/2018',
          cpfCliente: '121.121.121-12',
          quantidadeItens: 3,
          valorTotal: 111,
          produtos:[
            {
              nome: 'Produto6',
              codigo: 1872,
              categoria: 'Medicamentos',
              preco: 5,
              quantidade: 1,
              subTotal: 5
            },
            {
              nome: 'Produto4',
              codigo: 1235,
              categoria: 'Medicamentos',
              preco: 10,
              quantidade: 2,
              subTotal: 20
            },
            {
              nome: 'Produto3',
              codigo: 4238,
              categoria: 'Medicamentos',
              preco: 86,
              quantidade: 1,
              subTotal: 86
            },

          ]
        },
        {
          id: 3,
          data: '18/10/2018',
          cpfCliente: '113.113.113-13',
          quantidadeItens: 2,
          valorTotal: 60,
          produtos:[
            {
              nome: 'Produto1',
              codigo: 1234,
              categoria: 'Medicamentos',
              preco: 10,
              quantidade: 5,
              subTotal: 50
            },
            {
              nome: 'Produto4',
              codigo: 1235,
              categoria: 'Medicamentos',
              preco: 10,
              quantidade: 1,
              subTotal: 10
            }
          ]
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
    SaleRow
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
