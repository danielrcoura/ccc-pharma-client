<template>
  <div class='navbar'>
    <img src='../../assets/logo-admin.svg' alt=''>
    <nav>
      <ul>
        <a href='#'><li>Dashboard</li></a>
        <router-link to='/admin/manage/products'>
          <a href='#'><li>Produtos</li></a>
        </router-link>
        <router-link to='/admin/manage/lots'>
          <a href='#'><li>Lotes</li></a>
        </router-link>
        <a href='#'><li>Vendas</li></a>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 3px 5px #ccc;
  background: #06b1d3;
  ul {
    list-style: none;
    color: #fff;
    a{
      color: inherit;
    }
    li {
      display: inline-block;
      padding: 1rem;
    }
  }
}
</style>
