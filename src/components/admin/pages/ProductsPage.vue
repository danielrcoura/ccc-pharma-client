<template>
  <div>
    <page-title title="Produtos"/>
    <tools-bar @create="showForm = true"/>
    <products-table/>
    <transition name="modal">
      <product-form  @close="showForm = false" v-if="showForm"/>
    </transition>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import PageTitle from '@/components/admin/PageTitle'
import ProductsTable from '@/components/admin/tables/ProductsTable'
import ToolsBar from '@/components/admin/toolsbar/ProdToolsBar'

export default {
  name: 'ProductsPage',
  data () {
    return {
      showForm: false
    }
  },
  components: {
    ProductForm,
    PageTitle,
    ProductsTable,
    ToolsBar
  }
}
</script>

<style lang='scss' scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

</style>
