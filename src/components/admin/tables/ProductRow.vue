<template>
  <tr>
    <td>{{ produto.codigo }}</td>
    <td>{{ produto.nome }}</td>
    <td>{{ produto.fabricante }}</td>
    <td>{{ produto.categoria }}</td>
    <td>{{ produto.preco }}</td>
    <td class="small"><span class="icon clickable" @click="showForm = true">{{icons.memo}}</span></td>
    <td class="small"><span class="icon clickable cross" @click="removeRow(index)">{{icons.cross}}</span></td>
    <transition name="modal">
      <product-form :produto="produto" @close="showForm = false" v-if="showForm"/>
    </transition>
  </tr>
</template>

<script>
import ProductForm from '@/components/admin/forms/ProductForm'
import icons from 'glyphicons'

export default {
  name: 'ProductRow',
  data () {
    return {
      icons,
      showForm: false
    }
  },
  props: {
    produto: Object
  },
  components: {
    ProductForm
  }
}
</script>

<style lang="scss" scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}
.icon {
  margin-right: .7rem;
  color: #247e00;
  font-size: 1rem;
}

.small {
  width: 3%;
}
.cross {
  color: #dd1818;
  font-size: 18px;
  font-weight: bold;
}
td {
  color: #5a9cb6;
  padding: 1rem 0;
  cursor: default;
}
.clickable {
  cursor: pointer;
}
</style>
