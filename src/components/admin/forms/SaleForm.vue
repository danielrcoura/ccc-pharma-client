<template>
  <div class="modal">
    <div class="modal-content">
      <div class="container-search">
        <div class="search">
          <input type="text" v-model="search" placeholder="Pesquisar produto" autofocus/>
          <span>{{icons.magnifyingGlass}}</span>
        </div>
        <ul class="product-list">
          <li v-for="(produto, id) in filteredProducts" :key="id">
            <span>{{produto.nome}}</span>
            <button class="btn-addProduto" @click="addProduct(produto)">+</button>
          </li>
        </ul>
      </div>
      <div class="container-table">
        <div class="sale-products">
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(produto, id) in selectedProducts" :key="id">
                <td>{{produto.nome}}</td>
                <td>R$ {{produto.preco}}</td>
                <td>
                  <input type="number" min="1" v-model="produto.quantidade">
                  </td>
                <td>R$ {{produto.total()}}</td>
                <td href="#" @click="removeProduct(produto)" class="remove-icon">{{icons.cross}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="footer">
          <div class="total">Total <span>R$ {{totalCompra}}</span></div>
          <form>
            <div class="btn-group">
              <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
              <button @click="registerSale()" class="btn-confirm">Concluir venda</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from 'glyphicons'
import { mapState } from 'vuex'
import moment from 'moment'

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
      const data = moment().format('YYYY-MM-DD')
      const venda = {data: data, id: 1}
      console.log(venda)
      this.selectedProducts.forEach(produto => {
        const vendaPro = {
          id_venda: venda.id,
          id_produto: produto.id,
          quantidade: parseInt(produto.quantidade)
        }
        console.log('cadastrando vendaProduto')
        console.log(vendaPro)
      })
      this.$emit('close')
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/forms.scss';
.modal-content {
  display: grid;
  grid-template-columns: 1fr 2fr ;
  grid-gap: 2rem;
}
button, input {
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
}
.container-search {
  height: 65vh;
}
.container-table {
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    .total {
      text-align: right;
      color: #777;
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;
      span {
        margin-left: 2rem;
        color: #36d050;
        font-size: 1.5rem;
      }
    }
  }
}

.search {
  border: 1px solid #ddd;
  padding: .7rem 1.5rem .7rem 0;
  text-align: right;
  display: flex;
  input {
    margin-left: 1rem;
    width: 100%;
    color: #333;
  }
  span {
    color: #656565;
  }
}

.product-list {
  list-style: none;
  color: #777;
  max-height: 80%;
  overflow-x: auto;
  box-shadow: 0 2px 5px #aaa;
  margin-top: 1rem;
  li {
    padding: .5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    &:last-child {
      border-bottom: none;
    }
    &:hover{
      background-color: #dfdfdf;
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
        font-size: 1.7rem;
        padding: .5rem;
        color: #36d050;
        transition: background .3s;
        border-radius: .2rem;
        cursor: pointer;
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
  margin-top: .1rem;
  thead {
    border-bottom: 1px solid #ddd;
    th {
      text-align: left;
      color: #999;
      text-align: center;
      padding: .7rem 1rem;
    }
  }
  td {
    text-align: left;
    color: #777;
    text-align: center;
    padding: .4rem;
    input {
      width: 2.5rem;
      height: 2.5rem;
      text-align: center;
      border: 1px solid #eee;
      color: #777;
    }
  }
  tfoot tr td {
    border-bottom: none;
    &:last-child {
      color: #444;
      font-size: 1.5rem;
    }
  }
  .remove-icon {
    font-size: 1.3rem;
    color: #ca3636;
    cursor: pointer;
  }
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
