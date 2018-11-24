<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <input ref="name" type="text" placeholder="Nome"/> 
        <input type="number" placeholder="Código de barras"/>
        <input type="text" placeholder="Fabricante"/>
        <input type="number" step="0.01" placeholder="Preço"/>
        <select class="select-field">
          <option selected disabled hidden>Selecione a categoria</option>
          <option value="medicamento">Medicamentos</option>
          <option value="higiene">Higiene pessoal</option>
          <option value="cosmetico">Cosméticos</option>
          <option value="alimento">Alimentos</option>
        </select>
        <div class="btn-group">
          <button @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button @click="registerProduct()" class="btn-confirm">Cadastrar produto</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  methods: {
    registerProduct () {
      alert('Cadastrado com sucesso')
      this.closeForm()
    }
  },
  mounted () {
    this.$refs.name.focus()
  }
}
</script>

<style lang="scss" scoped>
.modal {
  font-family: Helvetica, Arial, sans-serif;
  --principal-color: #06b1d3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity .3s ease;
  .modal-content {
    transition: all .3s ease;
    background-color: #fff;
    width: 35vw;
    padding: 1.5rem 3rem;
    border-top: .6rem solid var(--principal-color);
    box-shadow: 0 0 1rem #666;
  }
}
form {
  display: flex;
  flex-direction: column;
  button, input, select {
    border: none;
    outline: none;
    background: none;
    font-size: 1rem;
  }
  input, select {
    color: #444;
    margin: 1rem 0;
    border-bottom: 1px solid #ddd;
    &:focus {
      border-bottom: 2px solid #62dcf5;
    }
  }
  input {
    padding: .4rem 1rem;
  }
  select {
    padding: .4rem .7rem;
  }
  .btn-group {
    margin-top: 2rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: flex-end;
    .btn-confirm {
      box-shadow: 0 0 1rem #bbb;
      background: var(--principal-color);
      padding: .5rem 1.2rem;
      color: #fff;
      transition: background .3s;
      cursor: pointer;
      &:hover, &:focus {
        background: #2fd1f1;
      }
    }
    .btn-cancel {
      color: #999;
      margin-right: 1.5rem;
      cursor: pointer;
      &:hover, &:focus {
        text-decoration: underline;
      }
    }
  }
}
</style>
