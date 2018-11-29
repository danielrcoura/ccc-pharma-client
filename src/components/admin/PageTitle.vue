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
h1 {
  font-family: 'Roboto', sans-serif;
  border-bottom: 1px solid #ccc;
  padding-bottom: .3rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  color: #777;
  font-weight: normal;
}
</style>
