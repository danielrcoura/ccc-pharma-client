<template>
  <div>
    <navbar class="navbar"/>
    <div class="login">
      <div class="login-box">
        <login :admin="true" @success="fetchData()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Navbar from '@/components/client/Navbar'
import { mapActions } from 'vuex'

export default {
  name: 'LoginAdmin',
  data () {
    return {
      inSingUp: false
    }
  },
  components: {
    Login,
    Navbar
  },
  methods: {
    ...mapActions(['getProdutos', 'getLotes']),
    fetchData () {
      this.getProdutos()
      this.getLotes()
      this.$router.push('/admin/manage')
    }
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
    perspective: 600px;
    background: #fff;
    box-shadow: 0 2px 5px #bbb;
    padding: 2rem 2.5rem 2rem 2.5rem;
  }
}
</style>
