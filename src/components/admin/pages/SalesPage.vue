<template>
  <div>
    <page-title title="Vendas"/>
    <sales-tools-bar @create="showForm = true"/>
    <sales-table/>
    <transition name="modal">
      <sale-form @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'
import SalesTable from '@/components/admin/tables/SalesTable'
import SalesToolsBar from '@/components/admin/toolsbar/SalesToolsBar'
import SaleForm from '@/components/admin/forms/SaleForm'

export default {
  name: 'SalesPage',
  data () {
    return {
      showForm: false
    }
  },
  components: {
    PageTitle,
    SalesToolsBar,
    SalesTable,
    SaleForm
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

</style>