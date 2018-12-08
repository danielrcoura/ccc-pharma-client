<template>
  <form>
    <img src="../assets/logo-short.svg" alt="Logo do sistema" class="logo">
    <input ref="email" type="email" placeholder="email">
    <input type="password" placeholder="senha">
    <button>Entrar</button>
    <div v-if="!admin" class="singup" @click="$emit('singup')">Criar conta</div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  props: {
    admin: Boolean
  },
  mounted () {
    this.$refs.email.focus()
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
      border: 1px solid #62dcf5;
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
</style>
