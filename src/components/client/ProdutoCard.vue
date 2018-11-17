<template>
  <div class="produto-card">
    <img :src="categoriaImage" :alt="produto.categoria" :title="produto.categoria" class="logo">
    <div class="title">{{produto.nome}}</div>
    <div class="subtitle">by {{produto.fabricante}}</div>
    <div v-if="produto.disponivel" class="footer">{{`R$ ${produto.preco.toFixed(2)}`}}</div>
    <div v-else class="footer discreet">Produto não disponível</div>
  </div>
</template>

<script>
export default {
  name: 'ProdutoCard',
  props: {
    produto: Object
  },
  computed: {
    categoriaImage () {
      if (this.produto.categoria === 'Medicamentos') return require('../../assets/medicamentos.png')
      if (this.produto.categoria === 'Cosméticos') return require('../../assets/cosmeticos.png')
      if (this.produto.categoria === 'Alimentos') return require('../../assets/alimentos.png')
      if (this.produto.categoria === 'Higiene pessoal') return require('../../assets/higiene-pessoal.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.produto-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: .5rem;
  font-size: 1.3rem;
  .logo {
    margin: auto;
    margin-bottom: 1rem;
  }
  .title {
    color: #06b1d3;
  }
  .subtitle {
    color: #999;
    font-size: .9rem;
  }
  .footer {
    font-size: 1.3rem;
    color: #555;
    margin-top: 1rem;
    align-self: flex-end;
  }
  .discreet {
    font-size: 1rem;
    color: #bbb;
  }
}
</style>
