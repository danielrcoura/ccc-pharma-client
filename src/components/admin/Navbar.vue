<template>
  <div class='navbar'>
    <img src='../../assets/logo-admin.svg' alt=''>
    <nav>
      <ul>
        <li @click="active = 'dashboard'" :class="{active: active === 'dashboard'}">Dashboard</li>
        <router-link to='/admin/manage/products'>
          <li @click="active = 'produtos'" :class="{active: active === 'produtos'}">Produtos</li>
        </router-link>
        <router-link to='/admin/manage/lots'>
          <li @click="active = 'estoque'" :class="{active: active === 'estoque'}">Estoque</li>
        </router-link>
        <li @click="active = 'vendas'" :class="{active: active === 'vendas'}">Vendas</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: 'dashboard'
    }
  }
}
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 3px 5px #ccc;
  background-image: linear-gradient(90deg, #4fc5dd, #06b1d3, #4fc5dd);
  ul {
    list-style: none;
    color: #fff;
    a{
      color: inherit;
    }
    li {
      display: inline-block;
      padding: 1rem;
      cursor: pointer;
    }
  }
}
.active {
  background: #fff;
  color: #0395b3;
}
</style>
