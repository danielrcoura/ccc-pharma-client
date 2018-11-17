import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
import ProductsTable from '@/components/admin/tables/ProductsTable'
import LotsTable from '@/components/admin/tables/LotsTable'
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
        { path: 'products', component: ProductsTable },
        { path: 'lots', component: LotsTable }
      ]
    }
  ]
})
