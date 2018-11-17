<template>
  <div>
    <header>
      <navbar/>
    </header>
    <main class="produtos">
      <produto-card v-for="(produto, index) in produtos" :key="index" :produto="produto"/>
    </main>
  </div>
</template>

<script>
import ProdutoCard from '@/components/client/ProdutoCard'
import Navbar from '@/components/client/Navbar'

export default {
  name: 'ProdutosCliente',
  data () {
    return {
      produtos: [
        {
          nome: 'Produto1',
          categoria: 'Medicamentos',
          fabricante: 'Fab1',
          disponivel: false,
          preco: 10.00
        },
        {
          nome: 'Produto2',
          categoria: 'Higiene pessoal',
          fabricante: 'Fab2',
          disponivel: true,
          preco: 20.00
        },
        {
          nome: 'Produto3',
          categoria: 'Cosméticos',
          fabricante: 'Fab3',
          disponivel: true,
          preco: 30.00
        },
        {
          nome: 'Produto4',
          categoria: 'Alimentos',
          fabricante: 'Fab4',
          disponivel: false,
          preco: 40.00
        },
        {
          nome: 'Produto4',
          categoria: 'Alimentos',
          fabricante: 'Fab4',
          disponivel: true,
          preco: 40.00
        },
        {
          nome: 'Produto3',
          categoria: 'Cosméticos',
          fabricante: 'Fab3',
          disponivel: false,
          preco: 30.00
        },
        {
          nome: 'Produto2',
          categoria: 'Higiene pessoal',
          fabricante: 'Fab2',
          disponivel: false,
          preco: 20.00
        },
        {
          nome: 'Produto1',
          categoria: 'Medicamentos',
          fabricante: 'Fab1',
          disponivel: true,
          preco: 10.00
        }
      ]
    }
  },
  components: {
    ProdutoCard,
    Navbar
  }
}
</script>

<style scoped>
.produtos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 80%;
  margin: auto;
}
</style>
