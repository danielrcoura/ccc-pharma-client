 <template>
  <div class="manage">
    <header>
      <navbar/>
    </header>
    <main>
      <form-product/>
      <button class="btn-cadastrar" @click="mostrarFormCadastrar()"><span class="icon">{{icons.plus}}</span>  Novo</button>
      <products-table/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/admin/Navbar'
import FormProduct from '@/components/admin/FormProduct'
import ProductsTable from '@/components/admin/ProductsTable'
import icons from 'glyphicons'

export default {
  name: 'Manage',
  data () {
    return {
      icons
    }
  },
  components: {
    FormProduct,
    ProductsTable,
    Navbar
  },
  methods: {
    mostrarFormCadastrar () {
      var modal = document.getElementById('modal')
      modal.style.display = 'block'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

.manage {
  font-family: 'Nunito', sans-serif;
  --principal-color: #06b1d3;
  --normal-size: 15px;
}

.btn-cadastrar {
  background-color: #fff;
  border: none;
  box-shadow: 0 1px 7px #aaa;
  border-radius: 24px;
  padding: .8rem 1.2rem;
  margin: 2rem 0 1rem 0;
  color: #888;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.icon {
  margin-right: .7rem;
  color: #55b42f;
  font-size: 1rem;
}

main {
  width: 80%;
  margin: auto;
}
</style>
