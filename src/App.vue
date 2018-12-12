<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  mounted () {
    this.getProdutos()
    this.getLotes()
    this.getVendas()
  },
  methods: {
    ...mapActions(['getProdutos', 'getLotes', 'getVendas'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
