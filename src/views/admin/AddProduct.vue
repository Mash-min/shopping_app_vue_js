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
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item" 
                      v-bind:class="{ 'text-muted fw-bolder' : breadcrumbs.productDetails == true }">
                      Details
                    </li>
                    <li class="breadcrumb-item"
                      v-bind:class="{ 'text-muted fw-bolder' : breadcrumbs.productImages == true }">
                      Images
                    </li>
                    <li class="breadcrumb-item"
                      v-bind:class="{ 'text-muted fw-bolder' : breadcrumbs.productCategory == true }">
                      Categories & Tags
                    </li>
                    <li class="breadcrumb-item"
                      v-bind:class="{ 'text-muted fw-bolder' : breadcrumbs.productPreview == true }">
                      Preview
                    </li>
                  </ol>
                </nav>
                <AddProductForm 
                  v-show="breadcrumbs.productDetails"
                  v-on:emitProductDetails="submitProductDetails"
                  v-bind:product="product"/>
                <AddProductImage
                  v-show="breadcrumbs.productImages"
                  v-on:emitProductImages="submitProductImages"
                  v-on:emitBackToDetails="backToDetails"/>
                <AddProductCategory
                  v-show="breadcrumbs.productCategory"
                  v-on:emitProductCategories="submitProductCategories"
                  v-on:emitBackToImages="backToImages"/>
                <PreviewProduct
                  v-show="breadcrumbs.productPreview"
                  v-on:backToCategories="backToCategories"
                  v-on:emitSaveProduct="saveProduct"
                  v-bind:product="product"
                  v-bind:productImages="productImages"/>
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
  import AddProductForm from '../../components/Admin/Forms/AddProductForm'
  import AddProductImage from '../../components/Admin/Forms/AddProductImage'
  import AddProductCategory from '../../components/Admin/Forms/AddProductCategory'
  import PreviewProduct from '../../components/Admin/Forms/PreviewProduct'
  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'AddProduct',
    components : {
      Navbar,
      OffCanvas,
      SideBar,
      OffCanvasHeader,
      AddProductForm,
      AddProductImage,
      PreviewProduct,
      AddProductCategory
    },
    data() {
      return {
        product: {
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
        productImages: [],
        breadcrumbs: {
          productDetails: true,
          productImages: false,
          productCategory:false,
          productPreview: false,
        },
        selectedCategories: []
      }
    },
    mounted() {
      console.clear()
    },
    methods: {
      saveProduct() {
        console.log({
          product: this.product,
          images: this.productImages,
          categories: this.selectedCategories
        })
        this.showLoader("Adding Product")
        axios.post(`${this.$appUrl}/api/products`, this.product)
        .then(res => {
          console.log(res)
          this.productId = res.data.product.id
          this.product.name = ''
          this.product.price = ''
          this.product.description = ''
          this.product.shipping_fee = ''
          this.product.discount = ''
          this.product.category = ''
          this.product.stock = ''
          this.product.refund = ''
          this.product.warranty = false
          Swal.fire("Product Successfuly added")
          this.uploadImage()
          this.saveProductCategories()
          this.backToDetails()
        })
        .catch(err => {
          Swal.fire({
            title: err.response.data.message
          })
          console.log(err.response)
        })
      },

      uploadImage() {
        let formData = new FormData()
        this.productImages.forEach(images => {
          formData.append('image[]', images)
        })
        formData.append('product_id', this.productId)
        axios.post(`${this.$appUrl}/api/product-images`, formData)
        .then(res => {
          console.log(res)
          Swal.fire("Product Images uploaded")
          this.$refs.inputFile.value = null
        })
        .catch(err => {
          console.log(err)
        })
      },

      saveProductCategories() {
        axios.post(`${this.$appUrl}/api/product-categories`, {
          product_id: this.productId,
          slug: this.selectedCategories
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.response)
        })
      },

      submitProductDetails(product) {
        console.log(product)
        this.product = product
        this.breadcrumbs.productDetails = false
        this.breadcrumbs.productImages = true
      },

      submitProductImages(productImages) {
        this.productImages = productImages
        this.breadcrumbs.productCategory = true
        this.breadcrumbs.productImages = false
      },

      submitProductCategories(categories) {
        this.selectedCategories = categories
        this.breadcrumbs.productCategory = false
        this.breadcrumbs.productPreview = true
      },

      backToDetails() {
        this.breadcrumbs.productDetails = true
        this.breadcrumbs.productImages = false
        this.breadcrumbs.productPreview = false
      },

      backToCategories() {
        this.breadcrumbs.productCategory = true
        this.breadcrumbs.productPreview = false
      },

      backToImages() {
        this.breadcrumbs.productCategory = false
        this.breadcrumbs.productImages = true
      }

    }
  }
</script>