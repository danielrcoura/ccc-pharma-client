<template>
  <div class="tools-bar">
    <button @click="$emit('create')">
      <span class="icon">{{ plus }}</span>
      Cadastrar nova Venda
    </button>
  </div>
</template>

<script>
import { plus } from 'glyphicons'


export default {
  name: 'SalesToolsBar',
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
