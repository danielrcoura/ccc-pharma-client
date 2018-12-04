<template>
  <div>
    <page-title title="Vendas"/>
    <sales-tools-bar/>
    <sales-table/>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'
import SalesTable from '@/components/admin/tables/SalesTable'
import SalesToolsBar from '@/components/admin/toolsbar/SalesToolsBar'

export default {
  name: 'SalesPage',
  components: {
    PageTitle,
    SalesToolsBar,
    SalesTable,
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

</style>