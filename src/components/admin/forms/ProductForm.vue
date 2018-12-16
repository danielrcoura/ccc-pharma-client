<template>
  <div class="modal">
    <div class="modal-content">
      <form @submit.prevent="cadastrar()">
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
          <option :selected="produto.categoria === 'Medicamentos'" value="medicamentos">Medicamentos</option>
          <option :selected="produto.categoria === 'Higiene pessoal'" value="higiene-pessoal">Higiene pessoal</option>
          <option :selected="produto.categoria === 'Cosméticos'" value="cosmeticos">Cosméticos</option>
          <option :selected="produto.categoria === 'Alimentos'" value="alimentos">Alimentos</option>
        </select>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button type="submit" class="btn-confirm">Cadastrar produto</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductForm',
  data () {
    return {
      produto: {}
    }
  },
  methods: {
    ...mapActions(['updateProduto', 'createProduto']),
    cadastrar () {
      this.createProduto(this.produto)
      this.$emit('close')
    }
  },
  mounted () {
    this.$refs.name.focus()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
</style>
