import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: [],
    lotes: [],
    vendas: [],
    vendaProdutos: []
  },
  mutations: {
    fetchProdutos (state, produtos) {
      state.produtos = produtos
    },
    addProduto (state, produto) {
      state.produtos.push(produto)
    },
    updateLotes (state, lotes) {
      state.lotes = lotes
    },
    updateVendas (state, vendas) {
      state.vendas = vendas
    },
    updateVendaProdutos (state, vendaprodutos) {
      state.vendaProdutos = vendaprodutos
    }
  },
  actions: {
    getProdutos ({ commit }) {
      axios.get('/produtos/')
        .then(produtos => {
          commit('fetchProdutos', produtos.data)
        })
    },
    createProduto ({ commit }, produto) {
      axios.post('/produtos/', produto)
        .then(res => {
          commit('addProduto', res.data)
        })
    },
    updateProduto (context, produto) {
      axios.put(`/produtos/`, produto)
        .then()
    },
    getLotes ({ commit }) {
      axios.get('/lotes')
        .then(lotes => {
          commit('updateLotes', lotes.data)
        })
    },
    getVendas ({ commit }) {
      axios.get('/vendas')
        .then(vendas => {
          commit('updateVendas', vendas.data)
        })
    },
    getVendaProdutos ({ commit }) {
      axios.get('/vendaprodutos')
        .then(vendaprodutos => {
          commit('updateVendaProdutos', vendaprodutos.data)
        })
    },
    createVendaProduto ({ commit }, vendaProdutos) {
      axios.post('/vendas', vendaProdutos.venda)
        .then(venda => {
          commit('updateVendas', venda.data)
          return venda.data
        })
        .then(venda => {
          vendaProdutos.produtos.forEach(produto => {
            axios.post('/vendaprodutos', {venda, ...produto})
              .then(vendaprod => {
                commit('updateVendaProdutos', vendaprod.data)
              })
          })
        })
    }
  }
})

export default store
