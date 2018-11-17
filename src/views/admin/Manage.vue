 <template>
  <div class="manage">
    <header>
      <navbar/>
    </header>
    <main>
      <div class="tools-bar">
        <button class="btn-cadastrar" @click="productForm()"><span class="icon">{{icons.plus}}</span>  Novo</button>
        <product-form/>
        <search-bar/>
      </div>
      <products-table/>
      <br>
      <button class="btn-cadastrar" @click="lotForm()"><span class="icon">{{icons.plus}}</span>  Novo</button>
      <lots-form/>
      <lots-table/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/admin/Navbar'
import ProductForm from '@/components/admin/forms/ProductForm'
import ProductsTable from '@/components/admin/tables/ProductsTable'
import LotsForm from '@/components/admin/forms/LotsForm'
import LotsTable from '@/components/admin/tables/LotsTable'
import SearchBar from '@/components/admin/SearchBar'
import icons from 'glyphicons'

export default {
  name: 'Manage',
  data () {
    return {
      icons
    }
  },
  components: {
    ProductForm,
    ProductsTable,
    LotsForm,
    LotsTable,
    Navbar,
    SearchBar
  },
  methods: {
    productForm () {
      var form = document.getElementById('productForm')
      form.style.display = 'block'
    },
    lotForm () {
      var form = document.getElementById('lotForm')
      form.style.display = 'block'
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
  color: #888;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-right: 3rem;
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
.tools-bar {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}
</style>
