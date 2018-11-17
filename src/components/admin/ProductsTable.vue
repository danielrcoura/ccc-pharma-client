<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Fabricante</th>
        <th>Disponível</th>
        <th>Categoria</th>
        <th>Preço (R$)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(produto, index) in produtos" :key="index">
        <td>{{ produto.codigo }}</td>
        <td>{{ produto.nome }}</td>
        <td>{{ produto.fabricante }}</td>
        <td>{{ produto.disponivel ? 'Em estoque' : 'Em falta'}}</td>
        <td>{{ produto.categoria }}</td>
        <td>{{ produto.preco }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductsTable',
  data () {
    return {
      produtos: [
        {
          nome: 'Produto1',
          codigo: 1234,
          fabricante: 'Fab1',
          disponivel: false,
          categoria: 'Medicamentos',
          preco: 20.0
        },
        {
          nome: 'Produto2',
          codigo: 1235,
          fabricante: 'Fab3',
          disponivel: true,
          categoria: 'Higiene pessoal',
          preco: 30.0
        },
        {
          nome: 'Produto3',
          codigo: 1236,
          fabricante: 'Fab1',
          disponivel: false,
          categoria: 'Cosméticos',
          preco: 10.0
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
  width: 100%;
  margin: 0 30px;
  thead {
    border-bottom: 1px solid #999;
  }
  th {
    font-weight: normal;
    color: #999;
  }
  td {
    color: #666;
  }
}

table th, table td {
  text-align: left;
  padding: 1rem 0;
}

tr:nth-child(even) {
  background: var(--light-blue);
}
</style>
