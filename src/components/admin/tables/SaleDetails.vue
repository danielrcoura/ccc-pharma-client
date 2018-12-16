<template>
  <div class="modal">
    <div class="modal-content">
      <div class="container-table">
        <div class="sale-products">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(produto, index) in venda.produtos" :key="index">
                <td>{{produto.codigo}}</td>
                <td>{{produto.nome}}</td>
                <td>{{produto.preco}}</td>
                <td>{{produto.quantidade}}</td>
                <td>{{produto.subTotal.toFixed(2)}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="footer">
          <div class="flex">
            <div class="total">Quantidade de itens <span>{{venda.quantidadeItens}}</span></div>
            <div class="total">Total <span>R$ {{venda.valorTotal}}</span></div>
          </div>
          <form>
            <div class="btn-group">
              <button @click="$emit('close')" class="btn-cancel">Fechar</button>
            </div>
          </form>
        </div>
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

.modal-content {
  width: 60vw;
}

.container-table {
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    .flex {
      display: flex;
      .total {
        text-align: right;
        color: #777;
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        span {
          margin-left: 2rem;
          color: #36d050;
          font-size: 1.5rem;
        }
      }
    }
  }
}

.sale-products {
  overflow-y: auto;
  max-height: 55vh;
}

table {
  max-height: 80%;
  overflow-x: auto;
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  margin-top: .1rem;
  thead {
    border-bottom: 1px solid #ddd;
    th {
      text-align: left;
      color: #999;
      text-align: center;
      padding: .7rem 1rem;
    }
  }
  td {
    text-align: left;
    color: #777;
    text-align: center;
    padding: .6rem;
  }
  tr {
    border-bottom: 1px solid #ddd;
  }
  tfoot tr td {
    border-bottom: none;
    &:last-child {
      color: #444;
      font-size: 1.5rem;
    }
  }
}

.btn-cancel {
  margin-right: 0 !important;
}

</style>
