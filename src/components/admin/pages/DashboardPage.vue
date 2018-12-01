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
      <div class="estoque">
        <header>Informações de Estoque</header>
        <div class="content">
          <div>Nº de lotes: 30</div>
          <div>Nº de itens: 3000</div>
        </div>
      </div>
      <div class="notificacoes">
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
    box-shadow: 0 0 10px #ccc;
    border-radius: 5px;
    header {
      padding: .5rem 1rem;
      margin-bottom: 0rem;
      background: #fff;
      font-size: 1.1rem;
      color: #469fb6;
    }
  }
}
.receita {
  .valor {
    padding: .5rem 1rem;
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
.estoque {
  .content {
    color: #666;
    text-align: center;
    margin: 0 5rem;
    & > * {
      padding: .5rem;
    }
    & > div:first-child {
      border-bottom: 1px solid #e1e1e1;
    }
  }
}
.notificacoes {
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
