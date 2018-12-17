<template>
  <form @submit.prevent="login()">
    <div v-if="loginFail" class="login-fail">Usuário ou senha incorretos</div>
    <div v-else-if="successSingUp" class="singup-success">Cadastro realizado!</div>
    <img src="../assets/logo-short.svg" alt="Logo do sistema" class="logo">
    <input ref="username" type="username" v-model="user.username" placeholder="username" required>
    <input type="password" v-model="user.password" placeholder="senha" required>
    <button type="submit" :disabled="!btnEnable" :class="{disabled: !btnEnable}">Entrar</button>
    <div v-if="!admin" class="singup" @click="$emit('singup')">Criar conta</div>
  </form>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'Login',
  data () {
    return {
      btnEnable: true,
      loginFail: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  props: {
    successSingUp: Boolean,
    admin: Boolean
  },
  methods: {
    login () {
      this.btnEnable = false
      axios.post('/login', this.user)
        .then(res => {
          const token = res.headers.authorization.split(' ')[1]
          localStorage.cccToken = token
          this.$emit('success')
        })
        .catch(() => {
          this.btnEnable = true
          this.loginFail = true
        })
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  input, button {
    border: none;
    background: none;
    font-size: .9rem;
    outline: none;
  }
  input {
    border: 1px solid #ccc;
    padding: .6rem 1rem;
    margin-bottom: 5px;
    color: #333;
    &:focus {
      border: 1px solid s#62dcf5;
    }
  }
  button {
    box-shadow: 0 0 1rem #bbb;
    margin-top: .5rem;
    background: #06b1d3;
    padding: .6rem 1.2rem;
    color: #fff;
    transition: background .3s;
    cursor: pointer;
    &:hover, &:focus {
      background: #2fd1f1;
    }
    &.disabled {
      background: #999;
      box-shadow: none;
    }
  }
}
.logo {
  margin-bottom: 2rem;
  width: 70px;
  align-self: center;
}
.singup {
  color: #06b1d3;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1.2rem;
}
.singup-success, .login-fail {
  font-size: 1.2rem;
  text-align: center;
  color: #35b846;
  position: absolute;
  top: -50px;
  width: 70%;
}
.login-fail {
  color: #b83535;
}
</style>
