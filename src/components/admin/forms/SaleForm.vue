<template>
  <div class="modal">
    <div class="modal-content">

      <div class="search-container">
        <button class="search">
          <input type="text" v-model="search" placeholder="Pesquisar produto"/>
          <span>{{icons.magnifyingGlass}}</span>
        </button>
        
        <ul class="product-list">
          <li v-for="(produto, id) in filteredProducts" :key="id">
            {{produto.nome}}
          </li>
        </ul>      
      </div>

      <div class="sale-box"></div>
      <form>
      <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import icons from 'glyphicons'
export default {
  name: 'SaleForm',
  data() {
    return {

      icons,
      search:'',
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
    };
  },
  computed: {
    filteredProducts () {
      return this.produtos.filter( produto => produto.nome.includes(this.search)
      );
    }
  },
  methods: {
    
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/forms.scss';
</style>


