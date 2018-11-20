<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="title in titles" :key="title.property">{{ title.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="title in titles" :key="title.property">{{ item[title.property] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ItemsTable',
  props: {
    titles: Array,
    data: Array
  }
}
</script>

<style lang='scss' scoped>
table {
  border-collapse: collapse;
  width: 100%;
  thead {
    border-bottom: 1px solid #9c9c9c;
  }
  th, td {
    text-align: left;
  }
  th {
    font-weight: normal;
    color: #999;
    padding: .5rem 0;
  }
  td {
    color: #5a9cb6;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e5e5;
  }
  tbody tr:hover {
    cursor: pointer;
    background: #e4e4e4;
  }
}
</style>
