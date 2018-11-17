<template>
  <table class="table">
    <thead>
      <tr>
        <th>Produto</th>
        <th>Qtd em estoque</th>
        <th>Data de validade</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(lote, index) in lotes" :key="index">
        <td>{{ lote.produto }}</td>
        <td>{{ lote.quantidade }}</td>
        <td>{{ lote.data_validade }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'LotsTable',
  data () {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

div {
  font-family: 'Nunito', sans-serif;
  --principal-color: #06b1d3;
  --light-blue: #d2eff4;
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
