<template>
  <div class="produtos-cliente">
    <header>
      <navbar/>
    </header>
    <main class="produtos">
      <produto-card v-for="produto in produtos" :key="produto.id"
      :produto="produto" :disponivel="isDisponivel(produto.id)"/>
    </main>
  </div>
</template>

<script>
import ProdutoCard from '@/components/client/ProdutoCard'
import { mapState } from 'vuex'
import estoque from '@/models/estoque'
import Navbar from '@/components/client/Navbar'

export default {
  name: 'ProdutosCliente',
  computed: {
    ...mapState(['lotes', 'produtos']),
    produtosIndisponiveis () {
      return estoque.getProdutosIndisponiveis(Object.values(this.lotes), this.produtos)
    }
  },
  components: {
    ProdutoCard,
    Navbar
  },
  methods: {
    isDisponivel (id) {
      return !this.produtosIndisponiveis.find(produto => produto.id === id)
    }
  }
}
</script>

<style scoped>
.produtos-cliente {
  background: #f5f5f5;
  height: 100vh;
}
.produtos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 80%;
  margin: auto;
}
</style>
