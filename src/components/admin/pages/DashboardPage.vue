<template>
  <div>
    <page-title title="Dashboard"/>
    <div class="dashboard">
      <div class="receita">
        <header>Receita Arrecadada</header>
        <div class="content">
        <div class="valor">R$ 19.000,00</div>
        <div class="descricao">A média mensal é R$ 29.000,00</div>
        </div>
      </div>
      <div class="general-information">
        <header>Informações de Estoque</header>
        <table>
          <tr>
            <td>Nº de lotes</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Nº de itens</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Nº de lotes</td>
            <td>30</td>
          </tr>
        </table>
      </div>
      <div class="notifications">
        <header>Notificações</header>
      </div>
      <div class="vendas">
        <header>Registro de Vendas</header>
        <vendas-graphic/>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'
import VendasGraphic from '@/components/admin/VendasGraphic'

export default {
  name: 'DashboardPage',
  components: {
    PageTitle,
    VendasGraphic
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 2rem;
  & > * {
    box-shadow: 0 0 10px #bbb;
    border-radius: 7px;
    header {
      padding: .3rem 1rem;
      background: #11b1d4;
      font-size: 1.1rem;
      color: #fff;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
  }
}
.receita {
  .valor {
    padding: 1rem;
    padding-bottom: .3rem;
    font-size: 2rem;
    color: #13c078;
    text-align: center;
  }
  .descricao {
    color: #bbb;
    text-align: center;
    margin-bottom: 1rem;
  }
}
.notifications {
  grid-column: 3/4;
  grid-row: 1/3;
}
.vendas {
  grid-column: 1/3;
  & > header + * {
    padding: .5rem 0;
  }
}
</style>
