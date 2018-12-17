<template>
  <div>
    <navbar class="navbar"/>
    <div class="login">
      <div class="login-box">
        <div class="card" :class="{'is-flipped': inSingUp}">
          <login class="card-face"
          :successSingUp="successSingUp"
          @success="redirect()"
          @singup="inSingUp = true"
          v-if="!inSingUp"/>
          <sing-up class="card-face back"
          @login="inSingUp = false" @success="inSingUp = false; successSingUp = true"
          v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Navbar from '@/components/client/Navbar'
import SingUp from '@/components/SingUp'

export default {
  name: 'LoginClient',
  data () {
    return {
      successSingUp: false,
      inSingUp: false
    }
  },
  methods: {
    redirect () {
      this.$router.push('/')
    }
  },
  components: {
    Login,
    Navbar,
    SingUp
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
    width: 320px;
    height: 320px;
    perspective: 600px;
    .card {
      background: #fff;
      box-shadow: 0 2px 5px #bbb;
      width: 100%;
      height: 100%;
      position: relative;
      transition: transform 1s;
      transform-style: preserve-3d;
      transform-origin: center right;
      .card-face {
        padding: 2rem 2.5rem .7rem 2.5rem;
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
      }
      .back {
        transform: rotateY(180deg);
      }
    }
    .card.is-flipped {
      transform: translateX(-100%) rotateY(-180deg);
    }
  }
}
</style>
