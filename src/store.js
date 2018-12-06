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
      }
    },
    lotes: {
      123: {
        id: 123,
        codigoProduto: 1235,
        quantidade: 15,
<<<<<<< HEAD
        validade: '2020/12/09'
      },
      124: {
        id: 124,
        codigoProduto: 1236,
        quantidade: 30,
        validade: '2019/12/04'
=======
        validade: '2020-12-09'
>>>>>>> 0bdf0e1065b4d104b355d97f641175aa21da472d
      },
      125: {
        id: 125,
        codigoProduto: 1234,
        quantidade: 10,
        validade: '2021-05-10'
      },
      127: {
        id: 127,
        codigoProduto: 1234,
        quantidade: 10,
        validade: '2020-05-10'
      }
    }
  }
})

export default store
