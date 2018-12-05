<template>
  <div class="faltantes-list">
    <div class="title">Em falta</div>
    <ul>
      <li><span>Produto 1</span> <button><b>+</b> Lote</button> </li>
      <li><span>Produto 2</span> <button><b>+</b> Lote</button> </li>
      <li><span>Produto 3</span> <button><b>+</b> Lote</button> </li>
      <li><span>Produto 4</span> <button><b>+</b> Lote</button> </li>
      <li><span>Produto 5</span> <button><b>+</b> Lote</button> </li>
    </ul>
  </div>
</template>

<script>
import icons from 'glyphicons'

export default {
  name: 'FaltantesList',
  data () {
    return {
      icons
    }
  }
}
</script>

<style lang="scss" scoped>
.faltantes-list {
  box-shadow: 0 0 10px #ccc;
  & > * {
    padding: 0 1rem;
  }
}
.title {
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 0;
  margin-bottom: .2rem;
  border-top: 3px solid #d87979;
  color: #777;
  text-align: center;
}
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1rem 6px;
  border-top: 1px solid #ddd;
  button {
    border: none;
    background: none;
    color: #2d9932;
    font-size: .9rem;
  }
  &:last-child {
    border-bottom: 1px solid #ddd;
  }  
}
</style>
