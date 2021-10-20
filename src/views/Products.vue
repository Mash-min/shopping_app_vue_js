<template>
  <div>
    <Banner/>
    <Navbar/>
    <div class="container mb-5">
        <div class="">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="fw-bolder">Products</span>
            </li>
            <li class="list-group-item">
              <div class="row">
              <ProductItem
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product"/>
              </div>
            </li>
            <li class="list-group-item">
              <ProductPagination
                v-bind:links="links"
                v-on:emitProductUrl="getProducts"/>
            </li>
          </ul>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/layouts/Banner'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import ProductItem from '../components/Products/ProductItem'
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
    ProductItem,
    ProductPagination
  },
  created() {
    this.getProducts(this.productUrl);
  },
  methods : {
    getProducts(url) {
      this.showLoader("Loading")
      axios.get(url)
      .then(res => {
        console.log(res.data)
        this.links = res.data.products.links
        this.products = res.data.products.data
        this.nextProductUrl = res.data.products.next_page_url
        Swal.close()
      })
      .catch(err => Swal.fire({ title: err, icon: 'error' }))
    },

  }
}
</script>