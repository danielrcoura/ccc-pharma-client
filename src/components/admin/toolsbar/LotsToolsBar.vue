<template>
  <div class="tools-bar">
    <button @click="$emit('create')">
      <span class="icon">{{ plus }}</span>
      Cadastrar novo lote
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
@import 'src/assets/css/toolsbar.scss';
</style>
