import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
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
      component: Manage
    }
  ]
})
