<template>
  <div>
    <page-title title="Produtos"/>
    <tools-bar/>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th v-for="title in dinamicTitles" :key="title.property"
            @click="changeSort(title.property)">
              <span>{{ title.label }}</span>
              <span class="sort-arrow" :class="arrowDirection(title.property)"></span>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody v-for="(produto, index) in produtos" :key="index">
          <product-row :produto="produto"/>
        </tbody>
      </table>
    </div>
    <transition name="modal">
      <product-form :produto="{}" @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import ProductRow from '@/components/admin/tables/ProductRow'
import PageTitle from '@/components/admin/PageTitle'
import ToolsBar from '@/components/admin/ToolsBar'

import icons from 'glyphicons'

export default {
  name: 'ProductsTable',
  data () {
    return {
      icons,
      showForm: false,
      dinamicTitles: [
        { label: 'Nome', property: 'nome' },
        { label: 'Fabricante', property: 'fabricante' },
        { label: 'Categoria', property: 'categoria' },
        { label: 'Preço (R$)', property: 'preco' }
      ],
      sortConfig: { property: null, order: null },
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
        },
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
        },
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
        },
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
        },
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
    ProductForm,
    ProductRow,
    PageTitle,
    ToolsBar
  },
  methods: {
    productForm () {
      var form = document.getElementById('productForm')
      form.style.display = 'block'
    },
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

      this.produtos.sort((a, b) => {
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
