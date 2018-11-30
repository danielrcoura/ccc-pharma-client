<template>
  <div class="tools-bar">
    <button @click="$emit('create')">
      <span class="icon">{{ plus }}</span>
      Cadastrar novo produto
    </button>
  </div>
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
.tools-bar {
  margin-bottom: .5rem;
}
button {
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
