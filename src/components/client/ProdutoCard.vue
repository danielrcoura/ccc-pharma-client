<template>
  <div class="produto-card">
    <img :src="categoriaImage" :alt="produto.categoria" :title="produto.categoria" class="logo">
    <div class="title">{{produto.nome}}</div>
    <div class="subtitle">by {{produto.fabricante}}</div>
    <div v-if="disponivel" class="footer">{{`R$ ${produto.preco}`}}</div>
    <div v-else class="footer discreet">Produto não disponível</div>
  </div>
</template>

<script>
export default {
  name: 'ProdutoCard',
  props: {
    produto: Object,
    disponivel: Boolean
  },
  computed: {
    categoriaImage () {
      return require(`../../assets/${this.produto.categoria}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.produto-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px #ddd;
  padding: .5rem;
  font-size: 1.3rem;
  background: #fff;
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
