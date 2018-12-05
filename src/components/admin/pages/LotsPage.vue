<template>
  <div>
    <page-title title="Estoque"/>
    <div class="grid">
      <div>
        <lots-tools-bar @changeFilter="selectedFilter" @create="showForm = true"/>
        <lots-table :currentFilter="currentFilter"/>
      </div>
      <faltantes-list/>
    </div>
    <transition name="modal">
      <lot-form :lote="{}" @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import PageTitle from '@/components/admin/PageTitle'
import LotsTable from '@/components/admin/tables/LotsTable'
import LotsToolsBar from '@/components/admin/toolsbar/LotsToolsBar'
import FaltantesList from '@/components/admin/FaltantesList'

export default {
  name: 'LotsPage',
  data () {
    return {
      showForm: false,
      currentFilter: 'nenhum'
    }
  },
  methods: {
    selectedFilter (filterName) {
      this.currentFilter = filterName
    }
  },
  components: {
    LotForm,
    PageTitle,
    LotsTable,
    LotsToolsBar,
    FaltantesList
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 1rem;
}
</style>
