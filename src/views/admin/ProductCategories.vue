<template>
  <div>
    <Navbar/>
    <OffCanvas/>
    <div id="profile" class="">
      <div class="row">
        <SideBar/>
        <div class="col-lg-9 mb-5">
          <OffCanvasHeader 
            v-bind="{ title: 'Product Categories' }"/>
          <div class="dashboard-container">
            <div class="row p-3">
              <CategoryList 
                v-bind:categories="categories"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============ PROFILE =========== -->
  </div>
</template>

<script>
  import Navbar from '../../components/Admin/Navbar'
  import OffCanvas from '../../components/Admin/OffCanvas'
  import OffCanvasHeader from '../../components/Admin/OffCanvasHeader.vue'
  import SideBar from '../../components/Admin/SideBar'
  import CategoryList from '../../components/Admin/Categories/CategoryList'
  import axios from 'axios'

  export default {
    name: 'ProductCategories',
    components : {
      Navbar,
      OffCanvas,
      SideBar,
      OffCanvasHeader,
      CategoryList
    },
    data() {
      return {
        categories: []
      }
    },
    mounted() {
      this.loadCategories()
    },
    methods: {
      loadCategories() {
        axios.get(`${this.$appUrl}/api/categories/paginate=10`)
        .then(res => {
          this.categories = res.data.categories.data
          console.log(this.categories)
        })
        .catch(err => {
          console.log(err.response)
        })
      }
    }
  }
</script>