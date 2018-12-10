<template>
  <div class="modal">
    <div class="modal-content">
      <div class="container">
        <div class="search">
          <input type="text" v-model="search" placeholder="Pesquisar produto"/>
          <span>{{icons.magnifyingGlass}}</span>
        </div>
        
        <ul class="product-list">
          <li v-for="(produto, id) in filteredProducts" :key="id">

              {{produto.nome}}
              <span>R$ {{produto.preco}}</span>
              <button class="btn-addProduto" @click="addProduct(produto)">adicionar</button>

          </li>
        </ul>
      </div>
      <div class="container">

        <div class="sale-value">
         <h2><small>Total</small> R$ {{totalCompra}}</h2>
        </div>

        <div class="sale-products">
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(produto, id) in selectedProducts" :key="id">
                <td>{{produto.nome}}</td>
                <td>
                  <input type="number" min="1" v-model="produto.quantidade">
                  <a href="#" @click="removeProduct(produto)" class="product">remover</a>
                  </td>
                <td>R$ {{produto.total()}}</td>
              </tr>
            </tbody>

          </table>
        </div>
        <form>
          <div class="btn-group">
            <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
            <button @click="registerSale()" class="btn-confirm">Concluir venda</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import icons from 'glyphicons'
import { mapState } from 'vuex'

export default {
  name: 'SaleForm',
  data () {
    return {
      icons,
      search: '',
      selectedProducts: []
    }
  },
  computed: {
    ...mapState(['produtos']),

    filteredProducts () {
      return Object.values(this.produtos).filter(produto =>
        produto.nome.includes(this.search) && !this.conteinsProduct(produto)
      )
    },

    totalCompra () {
      let total = 0
      this.selectedProducts.forEach(p => {
        total += p.total()
      })
      return total
    }
  },
  methods: {
    conteinsProduct (produto) {
      let contains = false
      this.selectedProducts.forEach(p => {
        if (p.nome === produto.nome) contains = true
      })
      return contains
    },

    addProduct (produto) {
      this.selectedProducts.push({...produto, quantidade: 1, total: function () { return this.quantidade * this.preco }})
    },
    removeProduct (produto) {
      this.selectedProducts = this.selectedProducts.filter(p => p.nome !== produto.nome)
    },

    registerSale () {
      alert('Venda efeivada com sucesso!')
      this.$emit('close')
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/forms.scss';
.modal-content {
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 2fr ;
  grid-gap: 1rem;
  
}

@media(max-width: 600px){
  .modal-content {
    width: 100vh;
    height: 100vh;
    grid-template-columns: 1fr;
  }
}

button, input {
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
}

.container {
  height: 70vh;
}

.search {
  border-radius: 15px;
  border: 0.05rem solid #999;
  padding: 5px;
  text-align: right;
  display: flex;
  input {
    margin-left: 1rem;
    width: 100%;
    color: #333;
  }
}

.product-list {
  list-style: none;
  margin-top: 10px;
  color: #333;
  max-height: 80%;
  overflow-x: auto;
  border: 1px solid #999;
  border-radius: 10px;
  li {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    border-bottom: 1px solid #999;

    &:hover{
      background-color: #f1f1f1;
      .seta {
          background-color: #06b1d3;
          border-radius: 10px;
      }
    }
    span {
      color: #999;
      font-size: .9rem;
    }
    .btn-addProduto {
        background-color: #36add0;
        padding: .5rem;
        color: #fff;
        transition: background .3s;
        border-radius: .2rem;
        cursor: pointer;
        &:hover, &:focus {
          background: #2dc1e1;
          
        }
    }
  }
}

.sale-products{
  max-height: 70%;
  overflow-x: auto;
}

table {
  max-height: 80%;
  overflow-x: auto;
  border-collapse: collapse;
  width: 100%;
  thead {
    border-bottom: 1px solid #999;
    th {
    font-weight: normal;
    color: #fff;
    text-align: center;
    padding: .4rem 1rem;
    border-right: 1px solid #ccc;
    background: #23aac5;
    &:last-child {
      border-right: none;
    }
  }
  }
  
  td {
    text-align: center;
    padding: 1rem;
    border-bottom: 0.1rem solid #999;
    input {
      width: 3rem;
    }
  }
}
</style>
