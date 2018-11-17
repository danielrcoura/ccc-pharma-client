import Vue from 'vue'
import Router from 'vue-router'
import ProdutosCliente from '@/views/ProdutosCliente'
import Manage from '@/views/admin/Manage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Produtos',
      name: 'Produtos',
      component: ProdutosCliente
    },
    {
      path: '/admin/Manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
