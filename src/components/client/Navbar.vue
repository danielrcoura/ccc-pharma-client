<template>
  <div class="navbar">
    <router-link to='/'><img src="../../assets/logo.svg" alt="" class="logo"></router-link>
    <nav v-if="inLoginPage">
      <router-link class="admin" to='/admin/login'>Acessar como administrador</router-link>
      <router-link to='/login'><button>Login</button></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    inLoginPage () {
      return !this.$router.currentRoute.name.match('Login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: .7rem 2rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px #ccc;
  margin-bottom: 3rem;
  background: #fff;
}
nav button {
  padding: .5rem 2rem;
  border: 2px solid #06b1d3;
  background: #fff;
  color: #06b1d3;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.admin {
  text-decoration: none;
  margin-right: 1.3rem;
  color: #bbb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
