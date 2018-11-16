<template>
  <div class="produto-card">
    <div class="nome">{{produto.nome}}</div>
    <div class="fabricante">by {{produto.fabricante}}</div>
    <div class="preco">{{precoProcessado}}</div>
  </div>
</template>

<script>
export default {
  name: 'ProdutoCard',
  props: {
    produto: Object
  },
  computed: {
    precoProcessado () {
      return `R\$ ${this.produto.preco.toFixed(2)}`
    }
  }
}    
</script>

<style lang="scss" scoped>
.produto-card {
  border: 1px solid #eee;
  padding: 1rem;
  font-size: 1.3rem;
  width: 23%;
}
.nome {
  color: #06b1d3;
}
.fabricante {
  color: #999;
  font-size: .9rem;
}
.preco {
  font-size: 1.3rem;
  color: #555;
  margin-top: 1rem;
}
</style>
