<template>
  <div class="faltantes-list">
    <div class="title">Produtos indisponíveis</div>
    <ul>
      <li v-for="produto in faltantes" :key="produto.codigo">
        <span>{{ produto.nome }}</span> <button @click="callForm(produto.codigo)"><b>+</b> Lote</button>
      </li>
    </ul>
    <transition name="modal">
      <lot-form v-if="showForm" @close="showForm = false" :lote="formData"/>
    </transition>
  </div>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import icons from 'glyphicons'
import { mapState } from 'vuex'

export default {
  name: 'FaltantesList',
  data () {
    return {
      icons,
      showForm: false,
      formData: {}
    }
  },
  computed: {
    ...mapState(['lotes', 'produtos']),
    listLotes () {
      return Object.values(this.lotes)
    },
    faltantes () {
      let codProdutos = []
      for (let codProduto in this.produtos) {
        let isEmpty = this.listLotes
        .filter(lote => lote.codigoProduto === Number(codProduto))
        .every(lote => lote.quantidade > 0)
        
        !isEmpty && codProdutos.push(codProduto)
      }
      return codProdutos.map(codigo => this.produtos[codigo])
    }
  },
  methods: {
    callForm (codigoProduto) {
      this.formData = { codigoProduto }
      this.showForm = true
    }
  },
  components: {
    LotForm
  }
}
</script>

<style lang="scss" scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

.faltantes-list {
  box-shadow: 0 2px 10px #aaa;
  & > * {
    padding: 0 1rem;
  }
}
.title {
  font-family: sans-serif;
  font-weight: bold;
  padding: 1rem 0;
  margin-bottom: .2rem;
  color: #777;
  text-align: center;
}
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1rem 6px;
  border-top: 1px solid #ddd;
  color: #777;
  button {
    border: none;
    background: none;
    color: #2d9932;
    font-size: .9rem;
    cursor: pointer;
  }
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
}
</style>
