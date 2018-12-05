<template>
  <div class='navbar'>
    <img src='../../assets/logo-admin.svg' alt=''>
    <nav>
      <ul>
        <router-link to='/admin/manage/dashboard'>
          <li @click="active = 'Dashboard'" :class="{active: active === 'Dashboard'}">Dashboard</li>
        </router-link>
        <router-link to='/admin/manage/produtos'>
          <li @click="active = 'Produtos'" :class="{active: active === 'Produtos'}">Produtos</li>
        </router-link>
        <router-link to='/admin/manage/estoque'>
          <li @click="active = 'Estoque'" :class="{active: active === 'Estoque'}">Estoque</li>
        </router-link>
        <li @click="active = 'Vendas'" :class="{active: active === 'Vendas'}">Vendas</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: this.$router.currentRoute.name
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
