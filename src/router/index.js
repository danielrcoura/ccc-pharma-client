import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
import ProductsPage from '@/components/admin/pages/ProductsPage'
import LotsPage from '@/components/admin/pages/LotsPage'
import SalesPage from '@/components/admin/pages/SalesPage'
import DashboardPage from '@/components/admin/pages/DashboardPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClientPage',
      component: ProdutosCliente
    },
    {
      path: '/admin/manage',
      name: 'Manage',
      component: Manage,
      redirect: '/admin/manage/dashboard',
      children: [
        { path: 'produtos', name: 'Produtos', component: ProductsPage },
        { path: 'estoque', name: 'Estoque', component: LotsPage },
        { path: 'dashboard', name: 'Dashboard', component: DashboardPage },
        { path: 'vendas', name: 'Vendas', component: SalesPage }
      ]
    }
  ]
})
