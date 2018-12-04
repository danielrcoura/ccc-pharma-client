import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produtos: {
      1235: {
        nome: 'Produto2',
        codigo: 1235,
        fabricante: 'Fab3',
        categoria: 'Higiene pessoal',
        preco: 30.0
      },
      1234: {
        nome: 'Produto1',
        codigo: 1234,
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
    lotes: [
      {
        produto: 'Paracetamol',
        quantidade: 15,
        validade: '2020/12/09'
      },
      {
        produto: 'Buscopan',
        quantidade: 30,
        validade: '2020/11/04'
      },
      {
        produto: 'Benegrip',
        quantidade: 10,
        validade: '2020/05/10'
      },
      {
        produto: 'Neosoro',
        quantidade: 20,
        validade: '2016/12/07'
      },
      {
        produto: 'Dipirona',
        quantidade: 16,
        validade: '2017/05/26'
      },
      {
        produto: 'Dorflex',
        quantidade: 5,
        validade: '2019/11/10'
      },
      {
        produto: 'Ibuprofeno',
        quantidade: 0,
        validade: '2022/08/11'
      },
      {
        produto: 'Torsilax',
        quantidade: 0,
        validade: '2021/02/15'
      }
    ]
  }
})

export default store
