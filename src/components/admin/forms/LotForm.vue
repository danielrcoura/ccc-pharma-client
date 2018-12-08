<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <input class="title" ref="codigo" type="number" :value="lote.codigoProduto" placeholder="Código do Produto"/>
        <label>Data de validade</label>
        <input type="date" :value="lote.validade"/>
        <label>Quantidade de itens</label>
        <input type="number" :value="lote.quantidade"/>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button @click="registerProduct()" class="btn-confirm">Cadastrar lote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotForm',
  methods: {
    registerLot () {
      alert('Cadastrado com sucesso')
    }
  },
  props: {
    lote: {}
  },
  mounted () {
    this.$refs.codigo.focus()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
</style>
