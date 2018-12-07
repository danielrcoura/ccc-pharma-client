import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: {
      1234: {
        nome: 'Produto2',
        codigo: 1234,
        fabricante: 'Fab3',
        categoria: 'Higiene pessoal',
        preco: 30.0
      },
      1235: {
        nome: 'Produto1',
        codigo: 1235,
        fabricante: 'Fab1',
        categoria: 'Medicamentos',
        preco: 20.0
      },
      1236: {
        nome: 'Produto3',
        codigo: 1236,
        fabricante: 'Fab1',
        categoria: 'Cosméticos',
        preco: 10.0
      },
      1237: {
        nome: 'Produto4',
        codigo: 1237,
        fabricante: 'Fab32',
        categoria: 'Higiene pessoal',
        preco: 30.0
      }
    },
    lotes: {
      123: {
        id: 123,
        codigoProduto: 1235,
        quantidade: 15,
        validade: '2019-01-01'
      },
      125: {
        id: 125,
        codigoProduto: 1234,
        quantidade: 5,
        validade: '2021-05-10'
      },
      127: {
        id: 127,
        codigoProduto: 1234,
        quantidade: 5,
        validade: '2020-05-10'
      },
      128: {
        id: 128,
        codigoProduto: 1237,
        quantidade: 20,
        validade: '2019-01-01'
      },
      129: {
        id: 129,
        codigoProduto: 1237,
        quantidade: 20,
        validade: '2019-03-02'
      },
      130: {
        id: 130,
        codigoProduto: 1237,
        quantidade: 20,
        validade: '2014-03-02'
      }
    }
  }
})

export default store
