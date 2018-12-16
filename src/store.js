import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: [],
    lotes: [],
    vendas: []
  },
  mutations: {
    fetchProdutos (state, produtos) {
      state.produtos = produtos
    },
    addProduto (state, produto) {
      state.produtos.push(produto)
    },
    fetchLotes (state, lotes) {
      state.lotes = lotes
    },
    addLote (state, lote) {
      state.lotes.push(lote)
    },
    updateVendas (state, vendas) {
      state.vendas = vendas
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
    createLote ({ commit }, lote) {
      axios.post('/estoque/', lote)
        .then(res => {
          commit('addLote', res.data)
        })
    },
    getLotes ({ commit }) {
      axios.get('/estoque/')
        .then(lotes => {
          console.log(lotes.data)
          commit('fetchLotes', lotes.data)
        })
    },
    getVendas ({ commit }) {
      axios.get('/vendas')
        .then(vendas => {
          commit('updateVendas', vendas.data)
        })
    }
  }
})

export default store
