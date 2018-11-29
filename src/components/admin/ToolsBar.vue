<template>
  <button class="btn-cadastrar" @click="showForm = true">
    <span class="icon">{{ plus }}</span>
    Cadastrar novo produto
  </button>
</template>

<script>
import { plus } from 'glyphicons'

export default {
  name: 'ToolsBar',
  data () {
    return {
      plus
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-cadastrar {
  background-color: #42db8f;
  border: none;
  padding: .8rem 1rem;
  color: #fff;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  .icon {
    margin-right: .4rem;
  }
}
</style>
