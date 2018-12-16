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
    updateProdutos (state, produtos) {
      state.produtos = produtos
    },
    addProduto (state, produto) {
      state.produtos.push(produto)
    },
    removeProduto (state, id) {
      state.produtos = state.produtos.filter(produto => produto._id !== id)
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
      axios.get('/produtos')
        .then(produtos => {
          commit('updateProdutos', produtos.data)
        })
    },
    createProduto ({ commit }, produto) {
      axios.post('/produtos', produto)
        .then(res => commit('addProduto', res.data))
    },
    updateProduto (context, produto) {
      axios.put(`/produtos/${produto._id}`, produto)
        .then()
    },
    deleteProduto ({ commit }, produto) {
      axios.delete(`/produtos/${produto._id}`)
        .then(res => commit('removeProduto', produto._id))
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
      axios.get('/vendaproduto')
        .then(vendaprodutos => {
          commit('updateVendaProdutos', vendaprodutos.data)
        })
    }
  }
})

export default store
