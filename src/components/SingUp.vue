<template>
  <form>
    <div class="title">Cadastre-se</div>
    <label for="email">Email</label>
    <input ref="email" id="email" type="email" placeholder="user@email.com">
    <label for="senha">Senha</label>
    <input id="senha" type="password" placeholder="senha123">
    <button>Cadastrar</button>
    <div class="singup" @click="$emit('login')">Voltar para login</div>
  </form>
</template>

<script>
export default {
  name: 'SingUp',
  mounted () {
    this.$refs.email.focus()
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
