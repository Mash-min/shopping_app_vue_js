<template>
  <div>
    <Banner/>
    <Navbar/>

    <div class="container mb-5">
        <div class="products-header d-flex justify-content-between mb-3">
            <h3 id="header">Products</h3>
        </div>
        <div class="row">
            <Product
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:product="product"
            />
            <ProductPagination
              v-bind:links="links"
              v-on:emitProductUrl="getProducts"/>

        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/layouts/Banner'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import Product from '../components/Products/ProductItem'
import ProductPagination from '../components/Admin/ProductPagination'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      links: [],
      productUrl: `${this.$appUrl}/api/products/paginate/8/status=active`
    }
  },
  components: {
    Banner,
    Navbar,
    Footer,
    Product,
    ProductPagination
  },
  created() {
    this.getProducts(this.productUrl);
  },
  methods : {
    getProducts(url) {
      this.showLoader()
      axios.get(url).
      then(res => {
        console.log(res.data)
        this.links = res.data.products.links
        this.products = res.data.products.data
        this.nextProductUrl = res.data.products.next_page_url
        Swal.close()
      })
    },

  }
}
</script>