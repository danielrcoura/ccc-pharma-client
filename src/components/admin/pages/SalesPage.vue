<template>
  <div>
    <page-title title="Vendas"/>
    <sales-table/>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'
import SalesTable from '@/components/admin/tables/SalesTable'

export default {
  name: 'SalesPage',
  components: {
    PageTitle,
    SalesTable,
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

</style>