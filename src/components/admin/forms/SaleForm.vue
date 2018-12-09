<template>
  <div class="modal">
    <div class="modal-content">

      <div class="search-container">
        <div class="search">
          <input type="text" v-model="search" placeholder="Pesquisar produto"/>
          <span>{{icons.magnifyingGlass}}</span>
        </div>
        <ul class="product-list">
          <li v-for="(produto, id) in filteredProducts" :key="id">

              <p class="product">{{produto.nome}}</p>
              <p class="preco">R$ {{produto.preco}}</p>
              <p class="seta">adicionar</p>

          </li>
        </ul>
      </div>

      <div class="sale-container">
        <div class="">R$ 10,00</div>
        <form>
          <div class="btn-group">
            <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
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
      search: ''
    }
  },
  computed: {
    ...mapState(['produtos']),

    filteredProducts () {
      return Object.values(this.produtos).filter(produto => produto.nome.includes(this.search)
      )
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/css/forms.scss';

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.search-container {
  border-right: 0.05rem solid #999;
  padding: 2rem;

}
.search {

  border-radius: 15px;
  border: 0.05rem solid #999;
  padding: 5px;
  text-align: right;
  display: flex;

  input {
    margin-left: 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    color: #333;
    }
}

.product-list {
  list-style: none;
  margin-top: 10px;
  color: #333;
  max-height: 60vh;
  overflow-x: auto;
  border: 1px solid #999;
  border-radius: 10px;
  li {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    border-bottom: 1px solid #999;

    cursor: pointer;
    &:hover{
      background-color: #f1f1f1;
      .seta {
          background-color: #06b1d3;
          border-radius: 10px;
      }
    }

    p {
      display: inline-block;
      padding: 10px;
    }

    .preco {
      color: #999;
    }

    .seta {
      color: white;
    }
  }
}
</style>
