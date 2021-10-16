<template>
  <div class="p-1">
    <div class="d-flex justify-content-end p-1">
      <button class="btn btn-outline-danger btn-sm">Delete selected</button>
    </div>
    <table class="table table-hover table-sm">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Product Name</th>
          <th scope="col">Product ID</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Shipping Fee</th>
          <th scope="col">Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow
        v-for="product in products"
        :key="product.id"
        v-bind:product="product"
        @emitFindProduct="findProduct"
        @emitDeleteProduct="deleteProduct"/>
      </tbody>
    </table>

    <ProductEditForm
      v-bind:editProduct="newProduct"
      v-on:emitUpdateProduct="updateProduct"/>

    <!-- <div class="d-grid col-4 offset-4">
      <button class="btn btn-sm btn-outline-dark" v-on:click="loadProducts(productUrl)" v-if="productUrl !== null">
        Load more
      </button>
    </div> -->
    <div class="d-grid col-4 offset-4">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item" 
            v-for="link in links" 
            :key="link.id" 
            v-bind:class="{ 'disabled' : link.url == null , 'active' : link.active == true}">
            <a class="page-link" @click="loadProducts(link.url)" href="#">
              <span v-if="link.label == '&laquo; Previous' "><i class="fa fa-chevron-left"></i></span>
              <span v-else-if="link.label == 'Next &raquo;' "><i class="fa fa-chevron-right"></i></span>
              <span v-else>{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import ProductRow from './ProductRow'
  import ProductEditForm from './ProductEditForm'
  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'ProductTable',
    components: {
      ProductRow,
      ProductEditForm
    },
    data() {
      return {
        products: [],
        newProduct: [],
        links: [],
        productUrl: `${this.$appUrl}/api/products/paginate/10`,
        deleteSelected: []
      }
    },
    mounted() {
      console.clear()
      this.loadProducts(this.productUrl);
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
      
      findProduct(slug) {
        axios.get(`${this.$appUrl}/api/products/${slug}`)
        .then(res => {
          this.newProduct = res.data.product
        })
        .catch(err => {
          console.log(err)
        })
      },
      
      deleteProduct(slug) {
        Swal.fire({
          title: 'Are you sure?',
          text: "The selected product will be deleted.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0d6efd',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${this.$appUrl}/api/products/${slug}`)
            .then(res => {
              Swal.fire({ title: res.data.message,  icon: 'success'})
              this.products = this.products.filter(product => {
                return product.slug != slug
              })
            })
            .catch(err => {
              console.log(err.response)
            })
          }
        })
      },

      updateProduct(data) {
        let updatedData = data;
        axios.put(`${this.$appUrl}/api/products/${data.id}`, updatedData)
        .then(res => {
          Swal.fire("Product Updated");
          this.$emit('updateProduct', res.data.product)
          let productIndex = this.products.findIndex(product => product.slug == data.slug)
          this.products[productIndex] = updatedData
        })
        .catch(err => {
          console.log(err.response)
        })
      }

    }
  }
</script>