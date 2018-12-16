<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <header class="title">{{produto.nome}}</header>
        <label>Preço</label>
        <input type="number" ref="preco" v-model="preco" step="0.01"/>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button @click="submit()" class="btn-confirm">Atualizar Preço</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PrecoForm',
  data () {
    return { preco: this.produto.preco }
  },
  mounted () {
    this.$refs.preco.focus()
  },
  methods: {
    ...mapActions(['updateProduto']),
    submit () {
      this.produto.preco = this.preco
      this.updateProduto(this.produto)
      this.$emit('close')
    }
  },
  props: {
    produto: Object
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/forms.scss';
</style>
