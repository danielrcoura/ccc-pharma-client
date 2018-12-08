import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
import ProductsPage from '@/components/admin/pages/ProductsPage'
import LotsPage from '@/components/admin/pages/LotsPage'
import DashboardPage from '@/components/admin/pages/DashboardPage'
import LoginClient from '@/views/LoginClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClientPage',
      component: ProdutosCliente
    },
    {
      path: '/login',
      name: 'LoginClient',
      component: LoginClient
    },
    {
      path: '/admin/manage',
      name: 'Manage',
      component: Manage,
      redirect: '/admin/manage/dashboard',
      children: [
        { path: 'produtos', name: 'Produtos', component: ProductsPage },
        { path: 'estoque', name: 'Estoque', component: LotsPage },
        { path: 'dashboard', name: 'Dashboard', component: DashboardPage }
      ]
    }
  ]
})
