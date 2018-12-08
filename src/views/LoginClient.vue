<template>
  <div>
    <navbar class="navbar"/>
    <div class="login">
      <div class="login-box">
        <login/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Navbar from '@/components/client/Navbar'

export default {
  name: 'LoginClient',
  components: {
    Login,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.login {
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-box {
    padding: 2rem 2.5rem 3rem 2.5rem;
    background: #fff;
    box-shadow: 0 2px 5px #ccc;
  }
}
</style>
