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
      currentFilter: 'disponiveis',
      filters: [
        {label: 'Disponíveis', property: 'disponiveis'},
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
  button {
    background: #fff;
    user-select: none;
    color: #62b6c7;
    border: 1px solid #23a7c2;
    &:first-child {
      border-right: none;
    }
  }
  .active {
    background: #23a7c2;
    color: #fff;
  }
}
</style>
