 <template>
  <div>
    <header>
      <navbar/>
    </header>
    <form-product/>
    <button class="btn-cadastrar" @click="mostrarFormCadastrar()">{{icons.plus}} Adicionar produto</button>
    <products-table/>
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

div {
  font-family: 'Nunito', sans-serif;
  --principal-color: #06b1d3;
  --normal-size: 15px;
}
.btn-cadastrar {
  background-color: #00ff00;
  border: 1px solid #00ff00;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 30px 0 30px 30px;
  font-family: 'Nunito', sans-serif;
  font-size: var(--normal-size);
}
</style>
