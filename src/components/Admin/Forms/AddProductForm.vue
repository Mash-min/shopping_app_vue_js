<template>
  <form @submit.prevent="emitProductDetails" class="mb-">
    <div class="form-group mb-3">
      <label for="product-name">Name</label>
      <input type="text" class="form-control" placeholder="Enter product name" 
        v-model="product.name"
        v-bind:class="{ 'is-invalid' : error.name.isInvalid == true , 'is-valid' : error.name.validated == true }">
        <div class="invalid-feedback" v-show="error.name.isInvalid">
          Product name is required
        </div>
    </div>
    <div class="form-group mb-3">
      <label for="product-description">Description</label>
      <Editor
      v-model="product.description"
      v-bind:class="{ 'is-invalid' : error.description.isInvalid == true , 'is-valid' : error.description.validated == true }"
      :init="{
        height: 400,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }"/>
    </div>
    <div class="d-flex">
      <div class="form-group mb-3 col-4 p-1">
        <label for="product-price">Price</label>
        <input type="number" class="form-control" placeholder="Enter product price" 
          v-model="product.price"
          v-bind:class="{ 'is-invalid' : error.price.isInvalid == true , 'is-valid' : error.price.validated == true }">
        <div class="invalid-feedback" v-show="error.price.isInvalid">
          Product price is required
        </div>
      </div>
      <div class="form-group mb-3 col-4 p-1">
        <label for="product-price">Discount</label>
        <input type="number" class="form-control" placeholder="Enter product discount" 
          v-model="product.discount"
          v-bind:class="{ 'is-invalid' : error.discount.isInvalid == true , 'is-valid' : error.discount.validated == true }">
        <div class="invalid-feedback" v-show="error.discount.isInvalid">
          Product discount is required
        </div>
      </div>
      <div class="form-group mb-3 col-4 p-1">
        <label for="inputState">Category</label>
        <select class="form-control" aria-label="Default select example" 
          v-model="product.category"
          v-bind:class="{ 'is-invalid' : error.category.isInvalid == true , 'is-valid' : error.category.validated == true }">
          <option selected disabled>Select product category</option>
          <option 
          v-for="category in categories" 
          :key="category.id" 
          v-bind:value="category.category">{{ category.category }}</option>
        </select>
        <div class="invalid-feedback" v-show="error.discount.isInvalid">
          Product category is required
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="form-group mb-3 col-4 p-1">
        <label for="product-stock">Stock</label>
        <input type="number" class="form-control" placeholder="Enter product stock" 
          v-model="product.stock"
          v-bind:class="{ 'is-invalid' : error.stock.isInvalid == true , 'is-valid' : error.stock.validated == true }">
        <div class="invalid-feedback" v-show="error.stock.isInvalid">
          Product stock is required
        </div>
      </div>
      <div class="form-group mb-3 col-4 p-1">
        <label for="shipping-fee">Shipping fee</label>
        <input type="number" class="form-control" placeholder="Enter shipping fee" 
          v-model="product.shipping_fee"
          v-bind:class="{ 'is-invalid' : error.shipping_fee.isInvalid == true , 'is-valid' : error.shipping_fee.validated == true }">
        <div class="invalid-feedback" v-show="error.shipping_fee.isInvalid">
          Product shipping fee is required
        </div>
      </div>
      <div class="form-group mb-3 col-4 p-1">
        <label for="product-stock">Days to refund</label>
        <input type="number" class="form-control" placeholder="Enter days to refund" 
          v-model="product.refund"
          v-bind:class="{ 'is-invalid' : error.refund.isInvalid == true , 'is-valid' : error.refund.validated == true }">
        <div class="invalid-feedback" v-show="error.refund.isInvalid">
          Product refund is required
        </div>
      </div>
    </div>
    <div class="form-group mb-3 col-6 p-1">
      <input class="form-check-input" type="checkbox" v-model="product.warranty"> Allow product warranty?
    </div>
    <div class="d-flex justify-content-end">
      <div class="d-grid col-4">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </div>
  </form>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue'
  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: "AddProductForm",
    props: ['product'],
    data() {
      return {
        categories: [],
        errors: [],
        error: {
          name: {
            validated: false,
            isInvalid: false
          },
          description: {
            validated: false,
            isInvalid: false
          },
          price: {
            validated: false,
            isInvalid: false
          },
          discount: {
            validated: false,
            isInvalid: false
          },
          category: {
            validated: false,
            isInvalid: false
          },
          stock: {
            validated: false,
            isInvalid: false
          },
          shipping_fee: {
            validated: false,
            isInvalid: false
          },
          refund: {
            validated: false,
            isInvalid: false
          }
        }
      }
    },
    components: {
      Editor
    },
    mounted() {
      this.getCategories()
    },
    methods: {
      emitProductDetails() {
        this.errors = []
        this.error.name.isInvalid = false
        this.error.name.validated = true
        this.error.description.isInvalid = false
        this.error.description.validated = true
        this.error.price.isInvalid = false
        this.error.price.validated = true
        this.error.discount.isInvalid = false
        this.error.discount.validated = true
        this.error.category.isInvalid = false
        this.error.category.validated = true
        this.error.stock.isInvalid = false
        this.error.stock.validated = true
        this.error.shipping_fee.isInvalid = false
        this.error.shipping_fee.validated = true
        this.error.refund.isInvalid = false
        this.error.refund.validated = true

        if(!this.product.name) {
          this.errors.push('Product name is required')
          this.error.name.isInvalid = true
        }

        if(!this.product.description) {
          this.errors.push('Product description is required')
          this.error.description.isInvalid = true
        }

        if(!this.product.price) {
          this.errors.push('Product price is required')
          this.error.price.isInvalid = true
        }
        
        if(!this.product.discount) {
          this.errors.push('Product discount is required')
          this.error.discount.isInvalid = true
        }
        
        if(!this.product.category) {
          this.errors.push('Product category is required')
          this.error.category.isInvalid = true
        }

        if(!this.product.stock) {
          this.errors.push('Product stock is required')
          this.error.stock.isInvalid = true
        }
        
        if(!this.product.shipping_fee) {
          this.errors.push('Product shipping fee is required')
          this.error.shipping_fee.isInvalid = true
        }

        if(!this.product.refund) {
          this.errors.push('Product refund is required')
          this.error.refund.isInvalid = true
        }
        // this.errors = []
        if(!this.errors.length) {
          this.$emit('emitProductDetails', this.product)
        }
        console.log(this.errors)
      },

      getCategories() {
        this.showLoader("Loading")
        axios.get(`${this.$appUrl}/api/categories/paginate=10`)
        .then(res => {
          this.categories = res.data.categories.data
          Swal.close()
        })
        .catch(err => {
          console.log(err)
        }) 
      }

    } 
  }
</script>