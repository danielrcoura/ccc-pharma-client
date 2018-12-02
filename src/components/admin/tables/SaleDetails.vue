<template>
  <div class="modal">
    <div class="modal-content">
      <button @click="$emit('close')">fechar</button> 
      <div class="scroll">
        <table class="table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody v-for="(produto, index) in venda.produtos" :key="index">
            <tr>
              <td>{{produto.codigo}}</td>
              <td>{{produto.nome}}</td>
              <td>{{produto.preco}}</td>
              <td>{{produto.quantidade}}</td>
              <td>{{produto.subTotal}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>--</td>
              <td>--</td>
              <td>{{ venda.quantidadeItens }}</td>
              <td>{{ venda.valorTotal }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    <div>
      
    </div>   
    </div>
  </div>
</template>

<script>
import icons from 'glyphicons'

export default {
  data() {
    return {
      icons
    }
  }, 
  name: 'SaleDetails',
  props: {
    venda: Object
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/forms.scss';
@import 'src/assets/css/tables.scss';

.modal{
  .modal-content {
  width: 70vw;
}

.scroll{
  max-height: 60vh;
}


table tfoot {
    border-top-style: double;
    td{
      font-weight: bold;
    }
}
}
</style>
