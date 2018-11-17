 <template>
  <div class='manage'>
    <header>
      <navbar/>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/admin/Navbar'
import icons from 'glyphicons'

export default {
  name: 'Manage',
  data () {
    return {
      icons
    }
  },
  components: {
    Navbar
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

.manage {
  font-family: 'Nunito', sans-serif;
  --principal-color: #06b1d3;
  --normal-size: 15px;
}

main {
  width: 80%;
  margin: auto;
}
</style>
