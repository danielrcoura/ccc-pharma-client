<template>
  <div>
    <button class='btn-cadastrar' @click='productForm()'><span class='icon'>{{icons.plus}}</span>  Novo</button>
    <product-form/>
    <items-table :titles="headTable" :data="produtos"/>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import ItemsTable from '@/components/admin/ItemsTable'
import icons from 'glyphicons'

export default {
  name: 'ProductsTable',
  data () {
    return {
      icons,
      headTable: [
        { label: 'Cód. Barras', property: 'codigo' },
        { label: 'Nome', property: 'nome' },
        { label: 'Fabricante', property: 'fabricante' },
        { label: 'Categoria', property: 'categoria' },
        { label: 'Preço (R$)', property: 'preco' }
      ],
      produtos: [
        {
          nome: 'Produto1',
          codigo: 1234,
          fabricante: 'Fab1',
          categoria: 'Medicamentos',
          preco: 20.0
        },
        {
          nome: 'Produto2',
          codigo: 1235,
          fabricante: 'Fab3',
          categoria: 'Higiene pessoal',
          preco: 30.0
        },
        {
          nome: 'Produto3',
          codigo: 123523,
          fabricante: 'Fab3',
          categoria: 'Higiene pessoal',
          preco: 30.0
        }
      ]
    }
  },
  components: {
    ProductForm,
    ItemsTable
  },
  methods: {
    productForm () {
      var form = document.getElementById('productForm')
      form.style.display = 'block'
    }
  },
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
  width: 100%;
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
