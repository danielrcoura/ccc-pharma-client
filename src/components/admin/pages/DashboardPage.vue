<template>
  <div>
    <page-title title="Dashboard"/>
    <div class="dashboard">
      <div class="receita">
        <header>Receita Arrecadada</header>
        <div class="content">
          R$ 19.000,00
        </div>
      </div>
      <div class="general-information">
        <header>Informações Gerais</header>
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
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'

export default {
  name: 'DashboardPage',
  components: {
    PageTitle
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  & > * {
    box-shadow: 0 0 10px #ccc;
    header {
      padding: .3rem 1rem;
      background: #23aac5;
      font-size: 1.1rem;
      color: #fff;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
}
.receita {
  .content {
    padding: 1rem;
    font-size: 2rem;
    color: #14d182;
    text-align: center;
  }
}
.notifications {
  grid-column: 3/4;
  grid-row: 1/3;
}
.vendas {
  grid-column: 1/3;
}
</style>
