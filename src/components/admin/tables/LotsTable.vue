<template>
  <div>
    <button class='btn-cadastrar' @click='lotForm()'><span class='icon'>{{icons.plus}}</span>  Novo</button>
    <lots-form/>
    <table class='table'>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Qtd em estoque</th>
          <th>Data de validade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(lote, index) in lotes' :key='index'>
          <td>{{ lote.produto }}</td>
          <td>{{ lote.quantidade }}</td>
          <td>{{ lote.data_validade }}</td>
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
      lotes: [
        {
          produto: 'Paracetamol',
          quantidade: 15,
          data_validade: '12/09/2020'
        },
        {
          produto: 'Buscopan',
          quantidade: 30,
          data_validade: '11/04/2020'
        },
        {
          produto: 'Benegrip',
          quantidade: 10,
          data_validade: '05/10/2020'
        }
      ]
    }
  },
  components: {
    LotsForm
  },
  methods: {
    lotForm () {
      var form = document.getElementById('lotForm')
      form.style.display = 'block'
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
  margin: 2rem 0 1rem 0;
  color: #888;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.icon {
  margin-right: .7rem;
  color: #55b42f;
  font-size: 1rem;
}

table {
  border-collapse: collapse;
  width: 60%;
  thead {
    border-bottom: 1px solid #ddd;
  }
  th {
    font-weight: normal;
    color: #999;
    padding: .5rem 0;
  }
  td {
    color: #5a9cb6;
    padding: 1rem 0;
  }
  tbody tr:hover {
    cursor: pointer;
    background: #e4e4e4;
  }
}

table th, table td {
  text-align: left;
}

</style>
