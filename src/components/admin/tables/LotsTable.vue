<template>
  <div>
    <button class='btn-cadastrar' @click='lotForm()'><span class='icon'>{{icons.plus}}</span>  Novo</button>
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
        <tr v-for='(lote, index) in lotes' :key='index'>
          <td>{{ lote.produto }}</td>
          <td>{{ lote.quantidade }}</td>
          <td>{{ lote.validade }}</td>
          <td><span class='icon small' @click="editRow(lote)">{{icons.pencil}}</span></td>
          <td><span class='icon small cross' @click="removeRow(index)">{{icons.cross}}</span></td>
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
    editRow(lote) {
      let form = document.getElementById('lotForm')
      let date = new Date(lote.validade);
      document.getElementById('name').value = lote.produto
      document.getElementById('validade').value = date.toISOString().slice(0, 10)
      document.getElementById('quantidade').value = lote.quantidade
      form.style.display = 'block'
    },
    removeRow(index) {
      console.log(this.lotes)
      console.log(this.icons)
      this.lotes.splice(index, 1);
    }
  }
}
</script>

<style lang='scss' scoped>

.btn-cadastrar {
  background-color: #fff;
  border: none;
  box-shadow: 0 1px 7px #aaa;
  border-radius: 24px;
  padding: .8rem 1.2rem;
  margin: 2rem 0;
  color: #888;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.icon {
  margin-right: .7rem;
  color: #55b42f;
  font-size: 15px;
}

.small {
  margin-right: 0;
  cursor: pointer;
}

.cross {
  color: #dd1818;
  font-size: 18px;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  width: 100%;
  thead {
    border-bottom: 1px solid #ddd;
  }
  th {
    font-weight: normal;
    color: #999;
    padding: .5rem 0;
    cursor: pointer;
    &:hover {
      color: #777;
    }
  }
  td {
    color: #5a9cb6;
    padding: 1rem 0;
    cursor: default;
  }
  tbody tr:hover {
    background: #f1f1f1;
  }
}

table th, table td {
  text-align: left;
}

</style>
