<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <input class="title" ref="name" type="text" v-model="produto.nome" placeholder="Nome"/>
        <label>Código de barras</label>
        <input type="number" v-model="produto.codigo"/>
        <label>Fabricante</label>
        <input type="text" v-model="produto.fabricante"/>
        <label>Preço</label>
        <input type="number" v-model="produto.preco" step="0.01"/>
        <label>Categoria</label>
        <select class="select-field" v-model="produto.categoria">
          <option selected disabled hidden></option>
          <option :selected="produto.categoria === 'Medicamentos'" value="medicamento">Medicamentos</option>
          <option :selected="produto.categoria === 'Higiene pessoal'" value="higiene">Higiene pessoal</option>
          <option :selected="produto.categoria === 'Cosméticos'" value="cosmetico">Cosméticos</option>
          <option :selected="produto.categoria === 'Alimentos'" value="alimento">Alimentos</option>
        </select>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button @click="submit()" class="btn-confirm">{{ isCreate ? 'Cadastrar produto' : 'Atualizar produto' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductForm',
  methods: {
    ...mapActions(['updateProduto', 'createProduto']),
    submit () {
      if (this.isCreate) this.createProduto(this.produto)
      else this.updateProduto(this.produto)

      this.$emit('close')
    }
  },
  props: {
    produto: {},
    isCreate: Boolean
  },
  mounted () {
    this.$refs.name.focus()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
</style>
