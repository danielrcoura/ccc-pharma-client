<template>
  <form @submit.prevent="cadastrar()">
    <div class="title">Cadastre-se</div>
    <label for="username">Nome de usuário</label>
    <input ref="username" id="username" type="text" v-model="user.username" placeholder="usuario123" required>
    <label for="password">Senha</label>
    <input id="password" type="password" v-model="user.password" placeholder="password123" required>
    <button type="submit" :disabled="!btnEnable" :class="{disabled: !btnEnable}">Cadastrar</button>
    <div class="singup" @click="$emit('login')">Voltar para login</div>
  </form>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'SingUp',
  data () {
    return {
      btnEnable: true,
      user: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    this.$refs.username.focus()
  },
  methods: {
    cadastrar () {
      this.btnEnable = false
      axios.post('/usuarios/', this.user)
        .then(res => {
          this.$emit('success')
        })
        .catch(err => {
          this.btnEnable = true
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  label {
    font-size: .8rem;
    color: #888;
    margin-bottom: 5px;
  }
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
      border: 1px solid #62dcf5;
    }
  }
  button {
    box-shadow: 0 0 1rem #bbb;
    margin-top: 1rem;
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
.title {
  font-size: 1.6rem;
  color: #06b1d3;
  margin-bottom: 1.6rem;
}
*::-webkit-input-placeholder {
  color: #ccc;
}
*::-moz-placeholder {
  color: #ccc;
}
*:-ms-input-placeholder {
  color: #ccc;
}
*:-moz-placeholder {
  color: #ccc;
}
</style>
