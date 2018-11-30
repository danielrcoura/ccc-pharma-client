<template>
  <tr>
    <td>{{ produto.codigo }}</td>
    <td>{{ produto.nome }}</td>
    <td>{{ produto.fabricante }}</td>
    <td>{{ produto.categoria }}</td>
    <td>{{ produto.preco }}</td>
    <td class="small">
      <span class="btn edit" @click="showForm = true">{{ icons.edit }}</span>
      <span class="btn remove">{{ icons.cancel }}</span>
    </td>
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

.small {
  width: 110px;
}
.cross {
  color: #dd1818;
  font-size: 18px;
  font-weight: bold;
}
td {
  color: #777;
  padding: 1rem;
  border-right: 1px solid #ccc;
  cursor: default;
  &:last-child {
    border-right: none;
  }
}

.btn {
  padding: .3rem .5rem;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  &:first-child {
    margin-right: 5px;
  }
}
.edit {
  background: #7cb8d4;
}
.remove {
  background: #d65353;
}
</style>
