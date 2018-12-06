<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

h1 {
  font-family: 'Nunito', sans-serif;
  border-bottom: 1px solid #ccc;
  padding-bottom: .3rem;
  padding-left: 0rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  color: #999;
  font-weight: normal;
}
</style>
