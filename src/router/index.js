import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
import ProductsPage from '@/components/admin/pages/ProductsPage'
import LotsPage from '@/components/admin/pages/LotsPage'
import SalesPage from '@/components/admin/pages/SalesPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Produtos',
      component: ProdutosCliente
    },
    {
      path: '/admin/manage',
      name: 'Manage',
      component: Manage,
      children: [
        { path: 'products', component: ProductsPage },
        { path: 'lots', component: LotsPage },
        { path: 'sales', component: SalesPage }
      ]
    }
  ]
})
