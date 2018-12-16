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
    updateLotes (state, lotes) {
      state.lotes = lotes
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
    }
  }
})

export default store
