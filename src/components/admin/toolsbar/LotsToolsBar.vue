<template>
  <div class="tools-bar">
    <button @click="$emit('create')">
      <span class="icon">{{ plus }}</span>
      Cadastrar novo lote
    </button>
    <div class="filters">
      <button v-for="filter in filters" :key="filter.property"
        @click="selectFilter(filter.property)"
        :class="{active: filter.property === currentFilter}">
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { plus } from 'glyphicons'

export default {
  name: 'LotsToolsBar',
  data () {
    return {
      plus,
      currentFilter: 'nenhum',
      filters: [
        {label: 'Todos', property: 'nenhum'},
        {label: 'Em falta', property: 'falta'},
        {label: 'Vencidos', property: 'vencido'}
      ]
    }
  },
  methods: {
    selectFilter (filter) {
      this.$emit('changeFilter', filter)
      this.currentFilter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/toolsbar.scss';
.filters {
  float: right;
  * {
    background: #d6d6d6;
    border-right: 1px solid #ccc;
    user-select: none;
    &:last-child {
      border-right: none;
    }
  }
  .active {
    background: #23aac5;
  }
}
</style>
