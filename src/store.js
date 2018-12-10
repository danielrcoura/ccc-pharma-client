import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: [],
    lotes: []
  },
  mutations: {
    updateProdutos (state, produtos) {
      state.produtos = produtos
    },
    updateLotes (state, lotes) {
      state.lotes = lotes
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
    }
  }
})

export default store
