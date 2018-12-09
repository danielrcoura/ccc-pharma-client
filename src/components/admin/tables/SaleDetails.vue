<template>
  <div class="modal">
    <div class="modal-content">
      <div class="close-button" ><span @click="$emit('close')">X</span></div>
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

export default {
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

.close-button {
  text-align: right;
  margin-bottom: 20px;
  span {
    cursor: pointer;
    display: inline;
    background-color: #da6767;
    color: white;
    padding: 10px;
    border-radius: 5px;
    &:hover{
      background-color: #d65353;

    }
  }
}
</style>
