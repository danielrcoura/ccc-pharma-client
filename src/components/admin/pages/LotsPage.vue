<template>
  <div>
    <page-title title="Lotes"/>
    <tools-bar @create="showForm = true"/>
    <lots-table/>
    <transition name="modal">
      <lot-form :lote="{}" @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import PageTitle from '@/components/admin/PageTitle'
import LotsTable from '@/components/admin/tables/LotsTable'
import ToolsBar from '@/components/admin/toolsbar/LotsToolsBar'

export default {
  name: 'LotsPage',
  data () {
    return {
      showForm: false
    }
  },
  components: {
    LotForm,
    PageTitle,
    LotsTable,
    ToolsBar
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

</style>
