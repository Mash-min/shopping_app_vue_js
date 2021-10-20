<template>
  <div>
    <Navbar/>
    <OffCanvas/>
    <div id="profile" class="">
      <div class="row">
        <SideBar/>
        <div class="col-lg-9 mb-5">
          <OffCanvasHeader 
            v-bind="{ title: 'Product Archive' }"/>
          <div class="d-grid p-2">
            <input type="text" class="form-control" placeholder="Search product">
          </div>
          <div class="dashboard-container">
            <div class="row">
              <ProductTable 
                v-bind:products="products"
                v-bind:hasDeleteButton="true"
                v-bind:hasEditButton="false"
                v-bind:hasArchiveButton="false"
                v-bind:hasRestoreButton="true"/>
              <ProductPagination 
                v-bind:links="links"
                v-on:emitProductUrl="loadProducts"/>
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
  import SideBar from '../../components/Admin/SideBar'
  import ProductTable from '../../components/Admin/ProductTable'
  import OffCanvasHeader from '../../components/Admin/OffCanvasHeader'
  import ProductPagination from '../../components/Admin/ProductPagination'
  import Swal from 'sweetalert2'
  import axios from 'axios'

  export default {
    name: 'ProductList',
    components : {
      Navbar,
      OffCanvas,
      SideBar,
      ProductTable,
      OffCanvasHeader,
      ProductPagination
    },
    data() {
      return {
        products: [],
        productUrl: `${this.$appUrl}/api/products/paginate/10/status=archived`,
        links: []
      }
    },
    mounted() {
      this.loadProducts(this.productUrl)
    },
    methods: {
      loadProducts(url) {
        this.showLoader("Loading")
        axios.get(url)
        .then(res => {
          console.log(res.data)
          this.products = res.data.products.data
          this.links = res.data.products.links
          this.productUrl = res.data.products.next_page_url
          Swal.close()
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            title: err,
            icon: 'error'
          })
        })
      }, 
    }
  }
</script>