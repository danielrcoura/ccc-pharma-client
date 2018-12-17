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
    fetchLotes (state, lotes) {
      state.lotes = lotes
    },
    addLote (state, lote) {
      state.lotes.push(lote)
    },
    updateLotes (state, newLote) {
      state.lotes = state.lotes.map(lote => {
        return lote.id === newLote.id ? newLote : lote
      })
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
    },
    reset (state) {
      const privateStates = ['vendas', 'vendaProdutos']
      privateStates.forEach(key => {
        state[key] = []
      })
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
    createLote ({ commit }, lote) {
      axios.post('/estoques/', lote)
        .then(res => {
          commit('addLote', res.data)
        })
    },
    getLotes ({ commit }) {
      axios.get('/estoques/')
        .then(lotes => {
          commit('fetchLotes', lotes.data)
        })
    },
    updateLote ({ commit }, lote) {
      axios.put('/estoques/', lote)
        .then(res => {
          commit('updateLotes', res.data)
        })
    },
    getVendas ({ commit }) {
      axios.get('/vendas/')
        .then(vendas => {
          commit('updateVendas', vendas.data)
        })
    },
    getVendaProdutos ({ commit }) {
      axios.get('/vendaprodutos/')
        .then(vendaprodutos => {
          commit('updateVendaProdutos', vendaprodutos.data)
        })
    },
    async createVendaProduto ({ commit }, vendaProdutos) {
      const venda = (await axios.post('/vendas/', vendaProdutos.venda)).data
      commit('addVenda', venda)
      vendaProdutos.produtos.forEach(async (produto) => {
        const vendaProduto = (await axios.post('/vendaprodutos/', {venda, ...produto})).data
        commit('addVendaProduto', vendaProduto)
      })
    }
  }
})

export default store
