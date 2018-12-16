<template>
  <div class="faltantes-list">
    <div class="title">Produtos indisponíveis</div>
    <ul>
      <li v-for="produto in faltantes" :key="produto.id">
        <span>{{ produto.nome }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import LotForm from '@/components/admin/forms/LotForm'
import estoque from '@/models/estoque'
import icons from 'glyphicons'
import { mapState } from 'vuex'

export default {
  name: 'FaltantesList',
  data () {
    return {
      icons,
      showForm: false,
      formData: {}
    }
  },
  computed: {
    ...mapState(['lotes', 'produtos']),
    faltantes () {
      return estoque.getProdutosIndisponiveis(this.lotes, this.produtos)
    }
  },
  components: {
    LotForm
  }
}
</script>

<style lang="scss" scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

.faltantes-list {
  box-shadow: 0 2px 10px #aaa;
  & > * {
    padding: 0 1rem;
  }
}
.title {
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0;
  margin-bottom: .2rem;
  color: #777;
  text-align: center;
}
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1rem 6px;
  border-top: 1px solid #ddd;
  color: #777;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
}
</style>
