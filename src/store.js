import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: [],
    lotes: [],
    vendas: [],
    vendaprodutos: []
  },
  mutations: {
    updateProdutos (state, produtos) {
      state.produtos = produtos
    },
    updateLotes (state, lotes) {
      state.lotes = lotes
    },
    updateVendas (state, vendas) {
      state.vendas = vendas
    },
    updateVendaProdutos (state, vendaprodutos) {
      state.vendaprodutos = vendaprodutos
    }
  },
  actions: {
    getProdutos ({ commit }) {
      axios.get('/produtos')
        .then(produtos => {
          commit('updateProdutos', produtos.data)
        })
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
      axios.get('vendaproduto')
        .then(vendaprodutos => {
          commit('updateVendaProdutos', vendaprodutos.data)
        })
    }
  }
})

export default store
