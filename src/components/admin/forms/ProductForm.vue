<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <input class="title" ref="name" type="text" :value="produto.nome" placeholder="Nome"/>
        <label>Código de barras</label>
        <input type="number" :value="produto.codigo"/>
        <label>Fabricante</label>
        <input type="text" :value="produto.fabricante"/>
        <label>Preço</label>
        <input type="number" :value="produto.preco" step="0.01"/>
        <label>Categoria</label>
        <select class="select-field">
          <option selected disabled hidden></option>
          <option :selected="produto.categoria === 'Medicamentos'" value="medicamento">Medicamentos</option>
          <option :selected="produto.categoria === 'Higiene pessoal'" value="higiene">Higiene pessoal</option>
          <option :selected="produto.categoria === 'Cosméticos'" value="cosmetico">Cosméticos</option>
          <option :selected="produto.categoria === 'Alimentos'" value="alimento">Alimentos</option>
        </select>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button @click="registerProduct()" class="btn-confirm">Cadastrar produto</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  methods: {
    registerProduct () {
      alert('Cadastrado com sucesso')
      this.$emit('close')
    }
  },
  props: {
    produto: {}
  },
  mounted () {
    this.$refs.name.focus()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
</style>
