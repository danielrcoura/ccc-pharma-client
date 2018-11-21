<template>
  <div>
    <button class='btn-cadastrar' @click='productForm()'><span class='icon'>{{icons.plus}}</span>  Novo</button>
    <product-form/>
    <table class='table'>
      <thead>
        <tr>
          <th>#</th>
          <th v-for="title in dinamicTitles" :key="title.property" 
          @click="sortProperty=title.property">
            {{ title.label }}
            <span v-if="sortProperty === title.property">{{ icons.arrowTriD }}</span>
            <span v-else style="color: #ddd">{{ icons.arrowTriU }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(produto, index) in produtos' :key='index'>
          <td>{{ produto.codigo }}</td>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.fabricante }}</td>
          <td>{{ produto.categoria }}</td>
          <td>{{ produto.preco }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import icons from 'glyphicons'

export default {
  name: 'ProductsTable',
  data () {
    return {
      icons,
      dinamicTitles: [
        { label: 'Nome', property: 'nome' },
        { label: 'Fabricante', property: 'fabricante' },
        { label: 'Categoria', property: 'categoria' },
        { label: 'Preço (R$)', property: 'preco' }
      ],
      sortProperty: 'nome',
      produtos: [
        {
          nome: 'Produto2',
          codigo: 1235,
          fabricante: 'Fab3',
          categoria: 'Higiene pessoal',
          preco: 30.0
        },
        {
          nome: 'Produto1',
          codigo: 1234,
          fabricante: 'Fab1',
          categoria: 'Medicamentos',
          preco: 20.0
        },
        {
          nome: 'Produto3',
          codigo: 1236,
          fabricante: 'Fab1',
          categoria: 'Cosméticos',
          preco: 10.0
        }
      ]
    }
  },
  watch: {
    sortProperty () {
      this.sort()
    }
  },
  components: {
    ProductForm
  },
  methods: {
    productForm () {
      var form = document.getElementById('productForm')
      form.style.display = 'block'
    },
    sort () {
      this.produtos.sort((a, b) => {
        if (a[this.sortProperty] < b[this.sortProperty]) return -1
        else if (a[this.sortProperty] > b[this.sortProperty]) return 1
        else return 0
      })
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
  font-size: 1rem;
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
  }
  tbody tr:hover {
    background: #f1f1f1;
  }
}

table th, table td {
  text-align: left;
}

</style>
