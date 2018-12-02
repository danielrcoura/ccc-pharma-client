<template>
  <div class="scroll">
    <table class='table'>
      <thead>
        <tr>
          <th v-for="title in dinamicTitles" :key="title.property"
          @click="sortProperty=title.property">
            {{ title.label }}
            <span v-if="sortProperty === title.property">{{ icons.arrowTriD }}</span>
            <span v-else style="color: #ddd">{{ icons.arrowTriU }}</span>
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
      vendas: [
        {
          id: 1,
          data: '20/10/2018',
          cpfCliente: '111.111.111-11',
          quantidadeItens: 2,
          valorTotal: 30,
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
              preco: 20,
              quantidade: 1,
              subTotal: 20
            },
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
              preco: 20,
              quantidade: 1,
              subTotal: 20
            },
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
              preco: 20,
              quantidade: 1,
              subTotal: 20
            },
          ]
        },
        {
          id: 2,
          data: '20/10/2018',
          cpfCliente: '121.121.121-12',
          quantidadeItens: 4,
          valorTotal: 120
        },
        {
          id: 3,
          data: '18/10/2018',
          cpfCliente: '113.113.113-13',
          quantidadeItens: 1,
          valorTotal: 45
        },
        {
          id: 4,
          data: '21/10/2018',
          cpfCliente: '411.411.411-41',
          quantidadeItens: 6,
          valorTotal: 23
        }
      ]
    }
  },
  components: {
    SaleRow
  },
  mounted () {
    this.sort()
  },
  watch: {
    sortProperty () {
      this.sort()
    }
  },

  methods: {
    sort () {
      this.vendas.sort((a, b) => {
        if (a[this.sortProperty] < b[this.sortProperty]) return -1
        else if (a[this.sortProperty] > b[this.sortProperty]) return 1
        else return 0
      })
    },
    details(venda) {
      alert(venda.cpfCliente)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import 'src/assets/css/tables.scss';
</style>
