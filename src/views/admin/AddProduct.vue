<template>
  <div>
    <Navbar/>
    <OffCanvas/>
    <div id="profile" class="">
      <div class="row">
        <SideBar/>
        <div class="col-lg-9 mb-5">
          <OffCanvasHeader 
            v-bind="{ title: 'Add Product' }"/>
          <hr>
          <div class="dashboard-container">
            <div class="row">
              <div class="product-form-container p-3">
                <form v-on:submit.prevent="addProduct">
                  <div class="form-group mb-3">
                    <label for="product-name">Name</label>
                    <input type="text" class="form-control" placeholder="Enter product name" v-model="product.name">
                  </div>
                  <div class="form-group mb-3">
                    <label for="product-description">Description</label>
                    <Editor
                    v-model="product.description"
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
                      <input type="number" class="form-control" placeholder="Enter product price" v-model="product.price">
                    </div>
                    <div class="form-group mb-3 col-4 p-1">
                      <label for="product-price">Discount</label>
                      <input type="number" class="form-control" placeholder="Enter product discount" v-model="product.discount">
                    </div>
                    <div class="form-group mb-3 col-4 p-1">
                      <label for="inputState">Category</label>
                      <select class="form-control" aria-label="Default select example" v-model="product.category">
                        <option 
                        v-for="category in categories" 
                        :key="category.id" 
                        v-bind:value="category.category">{{ category.category }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="form-group mb-3 col-4 p-1">
                      <label for="product-stock">Stock</label>
                      <input type="number" class="form-control" placeholder="Enter product stock" v-model="product.stock">
                    </div>
                    <div class="form-group mb-3 col-4 p-1">
                      <label for="shipping-fee">Shipping fee</label>
                      <input type="number" class="form-control" placeholder="Enter shipping fee" v-model="product.shipping_fee">
                    </div>
                    <div class="form-group mb-3 col-4 p-1">
                      <label for="product-stock">Days to refund</label>
                      <input type="number" class="form-control" placeholder="Enter days to refund" v-model="product.refund">
                    </div>
                  </div>
                  <div class="form-group mb-3 col-6 p-1">
                    <input class="form-check-input" type="checkbox" v-model="product.warranty"> Allow product warranty?
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01"><i class="fa fa-image"></i></label>
                    <input type="file" class="form-control" id="inputGroupFile01" v-on:change="onFileChange" multiple>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-end">
                    <div class="d-grid col-4">
                      <button type="submit" class="btn btn-outline-primary">Add product</button>
                    </div>
                  </div>
                </form>
              </div>
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
  import OffCanvasHeader from '../../components/Admin/OffCanvasHeader'
  import axios from 'axios'
  import Swal from 'sweetalert2'
  import Editor from '@tinymce/tinymce-vue'

  export default {
    name: 'AddProduct',
    components : {
      Navbar,
      OffCanvas,
      SideBar,
      OffCanvasHeader,
      Editor
    },
    data() {
      return {
        product : {
          name: '',
          description: '',
          price: '',
          discount: '',
          category: '',
          stock: '',
          shipping_fee: '',
          refund: '',
          warranty: false
        },
        productId: '',
        productImage: [],
        categories: []
      }
    },
    mounted() {
      console.clear()
      this.getCategories()
    },
    methods: {
      addProduct() {
        this.showLoader("Adding product")
        axios.post(`${this.$appUrl}/api/products`, this.product)
        .then(res => {
          this.productId = res.data.product.id
          Swal.fire({
            title: "Product Added",
            icon: 'success'
          })
          if(this.productImage.length > 0) {
            this.uploadProductImage()
          }
        })
        .catch(err => {
          console.log(err.response)
          Swal.fire({
            text: err.response.data.message,
            icon: 'error'
          })
        })
      },
      // ============ addProduct ==========
      getCategories() {
        axios.get(`${this.$appUrl}/api/categories`)
        .then(res => {
          this.categories = res.data.categories.data
        })
        .catch(err => {
          console.log(err)
        }) 
      },
      // ============= getCategories ==============
      onFileChange(e) {
        for(var x in e.target.files) {
          this.productImage.push(e.target.files[x])
        }
      },
      // ================ onFileChage ===========
      uploadProductImage() {
        this.showLoader("Uploading Image")
        let formData = new FormData()
        for(var x in this.productImage) {
          formData.append('image[]', this.productImage[x])
        }
        formData.append('product_id', this.productId)
        axios.post(`${this.$appUrl}/api/product-images`, formData)
        .then(res => {
          Swal.fire({
            title: "Product Added",
            icon: 'success'
          })
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
      }
      // ================ uploadProductImage =================
    }
  }
</script>