<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <div class="form-cadastro">
        <form>
          <fieldset>
            <legend>Dados do produto</legend>
            <label>Preencha os dados a seguir para cadastrar um novo produto:</label>
            <label for="field1">
              <span>Nome <span class="required">*</span></span>
              <input type="text" class="input-field" name="nome" value=""/>
            </label>
            <label for="field2">
              <span>Código de barras <span class="required">*</span></span>
              <input type="number" class="input-field" name="codigo" value=""/>
            </label>
            <label for="field3">
              <span>Fabricante <span class="required">*</span></span>
              <input type="text" class="input-field" name="field3" value=""/>
            </label>
            <label for="field4">
              <span>Categoria <span class="required">*</span></span>
              <select name="categorias" class="select-field">
                <option value="medicamento">Medicamentos</option>
                <option value="higiene">Higiene pessoal</option>
                <option value="comestico">Cosméticos</option>
                <option value="alimento">Alimentos</option>
              </select>
            </label>
            <label for="field5">
              <span>Disponível em estoque? </span>
              <input type="radio" name="disponivel" value="sim" checked>Sim
              <input type="radio" name="disponivel" value="nao">Não
            </label>
            <button @click="cadastrarProduto()" class="btn-confirmar">Adicionar</button>
            <p @click="fecharModal()" class="cancel">Cancelar</p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormProduct',
  methods: {
    cadastrarProduto () {
      alert('Cadastrado com sucesso')
    },

    fecharModal () {
      var modal = document.getElementById('modal')
      modal.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  font-family: "Nunito", sans-serif;
  --principal-color: #06b1d3;
  --light-blue: #d2eff4;
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
    margin-bottom: 10px;
    & > span {
      float: left;
      width: 170px;
      color: var(--principal-color);
      font-weight: 600;
    }
  }
}

.form-cadastro input[type="text"],
.form-cadastro input[type="number"],
.form-cadastro select {
  border-radius: 5px;
  border: 1px solid var(--principal-color);
  outline: none;
  background: #fff;
  padding: 5px 10px;
  width: 100%;
}

.form-cadastro input[type="radio"] {
  margin: 0 10px;
}

.btn-confirmar {
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

.cancel {
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
