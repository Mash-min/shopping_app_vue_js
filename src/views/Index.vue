<template>
  <div>
    <Banner/>
    <Navbar/>
    <Cover/>
    <div class="container mb-5">
        <div class="products-header d-flex justify-content-between mb-3">
          <h3>Products</h3>
          <a href="/products" class="btn btn-outline-primary">View all products</a>
        </div>
        <div class="row">
          <Product
            v-for="product in products"
            :key="product.id"
            v-bind:product='product'
          />
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/layouts/Banner'
import Navbar from '../components/layouts/Navbar'
import Cover from '../components/layouts/Cover'
import Footer from '../components/layouts/Footer'
import Product from '../components/Products/ProductItem'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Index',
  components: {
    Banner,
    Navbar,
    Cover,
    Footer,
    Product
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts();
  },
  methods : {
    getProducts() {
      this.showLoader("Loading")
      axios.get(`${this.$appUrl}/api/products/paginate/8/status=active`).
      then(res => {
        this.products = res.data.products.data
        console.log(res.data.products.data)
        Swal.close()
      })
      .catch(err => {
        console.log(err)
        Swal.fire({ title: err, icon: 'error'})
      })
    }
  }
}
</script>