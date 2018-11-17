<template>
  <div class="search-bar">
    <select name="">
      <option value="volvo">Nome</option>
      <option value="saab">Fabricante</option>
      <option value="vw">Categoria</option>
    </select>
    <input type="text" placeholder="Buscar produto">
    <button>{{ magnifyingGlass }}</button>
  </div>
</template>

<script>
import { magnifyingGlass } from 'glyphicons'

export default {
  name: 'SearchBar',
  data () {
    return {
      magnifyingGlass
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  box-shadow: 0 1px 7px #aaa;
  & > * {
    outline: none;
    color: #666;
    background: #fff;
    font-size: .9rem;
    border: none;
    padding: 1rem;
  }
  input {
    padding: .5rem 1rem;
    margin-top: 6px;
    margin-bottom: 6px;
    border-left: 1px solid #ddd;
  }
  select {
    margin-right: .5rem;
  }
}
</style>
