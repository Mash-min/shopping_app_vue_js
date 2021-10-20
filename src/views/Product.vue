<template>
  <div>
    <Banner/>
    <Navbar/>
    <div class="container">
      <div class="row mb-5">
        <div class="product-image-container col-lg-6 mb-3">
          <img id="image" 
            v-if="images.length != 0" 
            v-bind:src="`http://localhost:8000/storage/images/products/${product.slug}/${images[0].image}`">
        </div>
        <div class="product-description col-lg-6 mb-3">
          <div class="col-md-12 mb-3">
            <button type="button" class="btn btn-outline-success btn-sm ms-1"
            v-for="category in product.categories" :key="category.id">
            {{ category.category.category }}
            </button>
          </div>
          <p class="product-name">{{ product.name }}</p>
          <div class="product-ratings">
            <i class="fa fa-star "></i>
            <i class="fa fa-star "></i>
            <i class="fa fa-star "></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            (130 ratings)
          </div>
          <p class="product-price fw-bolder">₱ {{ product.price }}.00</p>
          <div class="discounted d-flex justify-content-between mb-2">
            <div class="d-flex">
              <p class="product-discounted-price text-muted text-decoration-line-through">₱ 150.00</p>
              <span class="text-muted mx-2">- {{ product.discount }}%</span>
            </div>
          </div>
          <div class="d-grid">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-dark btn-sm">Add to cart <i class="fa fa-shopping-cart"></i></button>
              <button type="button" class="btn btn-outline-dark btn-sm"><i class="fa fa-heart-o"></i></button>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mb-3 p-2">
          <ul class="list-group">
            <li class="list-group-item">
              <small class="text-muted">Standard Delivery:</small>
              <div class="d-flex justify-content-between">
                <small class="text-muted">5 - 7 days</small>
                <p class="fw-bolder">₱ {{ product.shipping_fee }}.00</p>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <small class="text-muted">Stock Available: </small>
                <p class="fw-bolder">{{ product.stock }} pcs</p>
              </div>
            </li>
            <li class="list-group-item">
              <small class="text-muted">Warranty / Return :</small><br>
              <div class="d-flex justify-content-between">
                <template>
                  <small v-if="product.warranty" class="text-muted">Warranty not available</small>
                  <small v-else class="text-muted">Warranty not available</small>
                </template>
                <span class="fw-bolder">{{ product.refund }} Days Refund</span>
              </div>
            </li>
            <li class="list-group-item product-details">
              <small class="text-muted">Product details:</small>
              <div v-html="product.description"/>
            </li>
            <li class="list-group-item product-details">
              <small class="text-muted">Tags:</small><br>
              <a href="" class="btn btn-sm btn-outline-dark ms-1 mb-1"
                v-for="tag in product.tags" :key="tag.id">
                <i class="fa fa-tag"></i> {{ tag.tag }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ============ Product =========== -->
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-12">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="fw-bolder">Reviews and Ratings / Sample Product 1</span>
            </li>
            <li class="list-group-item d-flex justify-content-around">
              <div class="product-rate-container">
                <span class="product-rate">
                  4.5/5
                </span>
                <br>
                <span>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </span> <br>
                <span>145 ratings</span>
              </div>
              <div class="product-stars-count">
                <div class="5-star">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                  - 125
                </div>
                <div class="5-star">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                  </span>
                  - 132
                </div>
                <div class="5-star">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                  </span>
                  - 331
                </div>
                <div class="5-star">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                  </span>
                  - 32
                </div>
                <div class="5-star">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                  </span>
                  - 800
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <span class="fw-bolder">Product Reviews</span>
            </li>
            <li class="list-group-item">
              <ul class="list-group">
                <ReviewItem
                  v-for="review in reviews"
                  :key="review.id"
                />
              </ul>
            </li>
            <li class="list-group-item">
              <div class="d-grid col-4 offset-4">
                <button class="btn btn-sm btn-outline-dark">
                  Load more
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ============ Product-reviews =========== -->
    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/layouts/Banner'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import ReviewItem from '../components/Products/ReviewItem'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Product',
  data() {
    return {
      product: [],
      images: [],
      reviews: [
        {id: 1},
        {id: 2},    
        {id: 3},
        {id: 4},
        {id: 5},
      ]
    }
  },
  components: {
    Banner,
    Navbar,
    Footer,
    ReviewItem,
  },
  mounted() {
    this.showLoader("Loading")
    axios.get(`http://localhost:8000/api/products/${ this.$route.params.id}`).
    then(res => {
      if(res.data.product == null) {
        Swal.fire({
          title: "Product not found",
          icon: 'error'
        })
      }else {
        console.log(res.data)
        Swal.close()
        this.product = res.data.product
        this.images = res.data.product.images
      }
    }).
    catch(err => {
      console.log(err)
    })
  },
}
</script>