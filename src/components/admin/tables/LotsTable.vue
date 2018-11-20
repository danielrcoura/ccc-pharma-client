<template>
  <div>
    <button class="btn-cadastrar" @click="lotForm()"><span class="icon">{{icons.plus}}</span>  Novo</button>
    <lots-form/>
    <items-table :titles="headTable" :data="lotes"/>
  </div>
</template>

<script>
import LotsForm from '@/components/admin/forms/LotsForm'
import ItemsTable from '@/components/admin/ItemsTable'
import icons from 'glyphicons'

export default {
  name: 'LotsTable',
  data () {
    return {
      icons,
      headTable: [
        { label: 'Produto', property: 'produto' },
        { label: 'Quantidade', property: 'quantidade' },
        { label: 'Validade', property: 'dataValidade' }
      ],
      lotes: [
        {
          produto: 'Paracetamol',
          quantidade: 15,
          dataValidade: '12/09/2020'
        },
        {
          produto: 'Buscopan',
          quantidade: 30,
          dataValidade: '11/04/2020'
        },
        {
          produto: 'Benegrip',
          quantidade: 10,
          dataValidade: '05/10/2020'
        }
      ]
    }
  },
  components: {
    LotsForm,
    ItemsTable
  },
  methods: {
    lotForm () {
      var form = document.getElementById('lotForm')
      form.style.display = 'block'
    }
  }
}
</script>

<style lang='scss' scoped>
.btn-cadastrar {
  background-color: #fff;
  border: none;
  box-shadow: 0 1px 7px #aaa;
  border-radius: 24px;
  padding: .8rem 1.2rem;
  margin: 2rem 0 1rem 0;
  color: #888;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
.icon {
  margin-right: .7rem;
  color: #55b42f;
  font-size: 1rem;
}
</style>
