<template>
  <div>
    <Banner/>
    <Navbar/>

    <div class="container mb-5">
        <div class="products-header d-flex justify-content-between mb-3">
            <h3>Products</h3>
        </div>
        <div class="row">
            <Product
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:product="product"
            />
            <div class="col-md-12">
                <div class="d-grid gap-2 col-4 offset-4" v-if="showLoadMoreButton">
                    <button class="btn btn-primary btn-sm" type="button" v-on:click="loadMoreProducts()">Load more product</button>
                </div>
            </div>
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
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      nextProductUrl: '',
      showLoadMoreButton: true
    }
  },
  components: {
    Banner,
    Navbar,
    Footer,
    Product
  },
  created() {
    this.getProducts();
  },
  methods : {
    getProducts() {
      Swal.fire({
        text: 'Loading...',
        showConfirmButton: false
      })
      axios.get('http://localhost:8000/api/products').
      then(res => {
        this.products = res.data.products.data
        this.nextProductUrl = res.data.products.next_page_url
        console.log(res.data)
        console.log(this.nextProductUrl)
        Swal.close()
      })
    },
    
    loadMoreProducts() {
      if(this.nextProductUrl != null) {
        Swal.fire({
          text: 'Loading...',
          showConfirmButton: false
        })
        axios.get(this.nextProductUrl).
        then(res => {
          console.log(res.data)
          this.nextProductUrl = res.data.products.next_page_url
          for(var x in res.data.products.data) {
            this.products.push(res.data.products.data[x])
          }
          Swal.close()
        })
      }else {
        this.showLoadMoreButton = false
        Swal.fire({
          text: 'All products are loaded'
        })
      }
    }
  }
}
</script>