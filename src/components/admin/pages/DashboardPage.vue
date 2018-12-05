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
        <notification-container/>
      </div>
      <div class="vendas">
        <header>Registro de Vendas</header>
        <vendas-graphic class="graphic"/>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/admin/PageTitle'
import VendasGraphic from '@/components/admin/VendasGraphic'
import NotificationContainer from '@/components/admin/NotificationContainer'

export default {
  name: 'DashboardPage',
  components: {
    PageTitle,
    VendasGraphic,
    NotificationContainer
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.dashboard {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-gap: 2rem;
  & > * {
    box-shadow: 0 0 10px #ccc;
    border-radius: 0px;
    header {
      padding: .5rem 1rem;
      margin-bottom: .5rem;
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
    animation: fade .5s 1;
  }
  .descricao {
    color: #bbb;
    text-align: center;
    margin-bottom: 1rem;
    animation: fade .5s 1;
  }
}
.estoque {
  .content {
    align-items: center;
    color: #666;
    text-align: center;
    margin: 0 5rem;
    animation: fade .5s 1;
    & > * {
      padding: .5rem;
      &:first-child {
        border-bottom: 1px solid #e1e1e1;
      }
    }
  }
}
.notificacoes {
  grid-column: 3/4;
  grid-row: 1/3;
  max-height: 69vh;
  overflow: auto;
  & > div {
    margin: 0 .5rem;
  }
}
.vendas {
  grid-column: 1/3;
  .graphic {
    padding: .5rem 0;
  }
}
</style>
