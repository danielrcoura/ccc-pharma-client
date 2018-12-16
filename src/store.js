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
    addVenda (state, venda) {
      state.vendas.push(venda)
    },
    addVendaProduto (state, vendaproduto) {
      state.vendaProdutos.push(vendaproduto)
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
        .then(res => commit('addProduto', res.data))
    },
    updateProduto (context, produto) {
      axios.put(`/produtos/`, produto)
        .then()
    },
    getLotes ({ commit }) {
      axios.get('/estoque/')
        .then(lotes => {
          commit('updateLotes', lotes.data)
        })
    },
    getVendas ({ commit }) {
      axios.get('/vendas/')
        .then(vendas => {
          commit('updateVendas', vendas.data)
        })
    },
    getVendaProdutos ({ commit }) {
      axios.get('/vendaproduto/')
        .then(vendaprodutos => {
          commit('updateVendaProdutos', vendaprodutos.data)
        })
    },
    async createVendaProduto ({ commit }, vendaProdutos) {
      const venda = (await axios.post('/vendas/', vendaProdutos.venda)).data
      commit('addVenda', venda)
      vendaProdutos.produtos.forEach(async (produto) => {
        const vendaProduto = (await axios.post('/vendaproduto/', {venda, ...produto})).data
        commit('addVendaProduto', vendaProduto)
      })
    }
  }
})

export default store
