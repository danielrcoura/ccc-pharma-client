<template>
  <div class="modal">
    <div class="modal-content">
      <form @submit.prevent="cadastrar()">
        <select v-model="lote.produto.id">
          <option v-for="produto in produtos" :value="produto.id" :key="produto.id">{{produto.nome}}</option>
        </select>
        <label>Data de validade</label>
        <input type="text" name="input" placeholder="dd/mm/yyyy" v-model="lote.validade"
        pattern="(?:30))|(?:(?:0[13578]|1[02])-31))/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])"/>
        <label>Quantidade de itens</label>
        <input type="number" v-model="lote.quantidade"/>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button type="submit" class="btn-confirm">Cadastrar lote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LotForm',
  data () {
    return {
      lote: { produto: {} }
    }
  },
  computed: {
    ...mapState(['produtos'])
  },
  methods: {
    ...mapActions(['createLote']),
    cadastrar () {
      this.createLote(this.lote)
      this.$emit('close')
    }
  },
  mounted () {
    this.$refs.codigo.focus()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
</style>
