<template>
  <div>
    <button class='btn-cadastrar' @click='lotForm()'><span class='icon'>{{icons.plus}}</span>  Novo</button>
    
    <button v-for="filter in filters" :key="filter.property" 
      @click="currentFilter=filter.property">
      <span class='icon'></span> {{ filter.label }}
    </button>

    <lots-form/>
    <table class='table'>
      <thead>
        <tr>
          <th v-for="title in dinamicTitles" :key="title.property"
          @click="sortProperty=title.property">
            {{ title.label }}
            <span v-if="sortProperty === title.property">{{ icons.arrowTriD }}</span>
            <span v-else style="color: #ddd">{{ icons.arrowTriU }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(lote, index) in getLots()' :key='index'>
          <td>{{ lote.produto }}</td>
          <td>{{ lote.quantidade }}</td>
          <td>{{ lote.validade }}</td>
          <td class='small'><span class='icon clickable' @click="editRow(lote)">{{icons.pencil}}</span></td>
          <td class='small'><span class='icon clickable cross' @click="removeRow(index)">{{icons.cross}}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LotsForm from '@/components/admin/forms/LotsForm'
import icons from 'glyphicons'

export default {
  name: 'LotsTable',
  data () {
    return {
      icons,
      sortProperty: 'produto',
      currentFilter: 'nenhum',
      filters: [
        { label: 'Todos', property: 'nenhum'},
        { label: 'Em falta', property: 'falta'},
        { label: 'Vencidos', property: 'vencido'}
      ],
      dinamicTitles: [
        { label: 'Produto', property: 'produto' },
        { label: 'Quantidade', property: 'quantidade' },
        { label: `Validade`, property: 'validade' }
      ],
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
        },
        {
          produto: 'Neosoro',
          quantidade: 20,
          validade: '2016/12/07'
        },
        {
          produto: 'Dipirona',
          quantidade: 16,
          validade: '2017/05/26'
        },
        {
          produto: 'Dorflex',
          quantidade: 5,
          validade: '2019/11/10'
        },
        {
          produto: 'Ibuprofeno',
          quantidade: 0,
          validade: '2022/08/11'
        },
        {
          produto: 'Torsilax',
          quantidade: 0,
          validade: '2021/02/15'
        }
      ]
    }
  },
  mounted () {
    this.sort()
  },
  watch: {
    sortProperty () {
      this.sort()
    }
  },
  components: {
    LotsForm
  },
  methods: {
    lotForm () {
      var form = document.getElementById('lotForm')
      form.style.display = 'block'
    },
    sort () {
      this.lotes.sort((a, b) => {
        if (a[this.sortProperty] < b[this.sortProperty]) return -1
        else if (a[this.sortProperty] > b[this.sortProperty]) return 1
        else return 0
      })
    },
    editRow (lote) {
      let form = document.getElementById('lotForm')
      let date = new Date(lote.validade)
      document.getElementById('nome').value = lote.produto
      document.getElementById('validade').value = date.toISOString().slice(0, 10)
      document.getElementById('quantidade').value = lote.quantidade
      form.style.display = 'block'
    },
    removeRow (index) {
      this.lotes.splice(index, 1)
    },
    getLots() {
      if (this.currentFilter === 'vencido') {
        const currentDate = new Date();
        return this.lotes.filter((lote) => {
          const lotDate = new Date(lote.validade);
          return lotDate < currentDate && lote.quantidade > 0;
        });
      } else if (this.currentFilter === 'falta') {
        return this.lotes.filter((lote) => {
          return lote.quantidade <= 0;
        })
      } else {
        return this.lotes;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/tables.scss';
.btn:focus {
  background: magenta;
}
</style>
