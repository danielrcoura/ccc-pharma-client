<template>
  <div id="lotForm" class="modal">
    <div class="modal-content">
      <div class="form-cadastro">
        <form>
          <fieldset>
            <legend>Dados do lote</legend>
            <label>Preencha os dados a seguir para cadastrar um novo lote:</label>
            <label for="nome">
              <span>Produto <span class="required">*</span></span>
              <input type="text" id="nome" class="input-field" name="nome" value=""/>
            </label>
            <label for="validade">
              <span>Data de validade <span class="required">*</span></span>
              <input type="date" id="validade" class="input-field" name="validade" value=""/>
            </label>
            <label for="qtdItens">
              <span>Quantidade de itens <span class="required">*</span></span>
              <input type="number" id="quantidade" class="input-field" name="qtdItens" value=""/>
            </label>
            <button @click="registerLot()" class="btn-confirm">Adicionar</button>
            <p @click="closeForm()" class="btn-cancel">Cancelar</p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotsForm',
  methods: {
    registerLot () {
      alert('Cadastrado com sucesso')
      this.closeForm()
    },
    closeForm () {
      var modal = document.getElementById('lotForm')
      modal.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  font-family: "Nunito", sans-serif;
  --principal-color: #06b1d3;
  font-size: 15px;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% 25%;
  padding: 20px;
  border: 1px solid #888;
}

.form-cadastro {
  max-width: 100%;
  fieldset {
    border-radius: 15px;
    border: 1px solid var(--principal-color);
    padding: 20px;
    float: center;
    align-self: center;
    justify-self: center;
    legend {
      color: var(--principal-color);
      border: 1px solid var(--principal-color);
      border-radius: 5px;
      padding: 10px;
      font-weight: 900;
    }
  }
  label {
    display: block;
    margin-top: 15px;
    & > span {
      float: left;
      width: 30%;
      min-width: 150px;
      color: var(--principal-color);
      font-weight: 600;
    }
  }
}

.form-cadastro input[type="text"],
.form-cadastro input[type="number"],
.form-cadastro input[type="date"] {
  border-radius: 5px;
  border: 1px solid var(--principal-color);
  outline: none;
  background: #fff;
  padding: 5px 10px;
  width: 70%;
  font-family: "Nunito", sans-serif;
  font-size: var(--normal-size);
}

.btn-confirm {
  background: var(--principal-color);
  border: 1px solid var(--principal-color);
  margin-top: 30px;
  padding: 10px 25px;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  color: #fff;
  float: right;
  &:hover, &:focus {
    background: #fff;
    color: var(--principal-color);
  }
}

.btn-cancel {
  color: #999;
  float: right;
  text-decoration: underline;
  margin: 40px 20px 0 0;
  &:hover, &:focus {
    color: black;
    text-decoration: none;
    background: #fff;
    cursor: pointer;
  }
}

.required {
  color: red;
  font-weight: normal;
}
</style>
