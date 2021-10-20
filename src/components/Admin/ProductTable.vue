<template>
  <div class="p-1">
    <div class="d-flex justify-content-end p-1">
      <button class="btn btn-outline-danger btn-sm" @click="deleteSelectedProducts">Delete selected</button>
    </div>
    <table class="table table-hover table-sm text-center">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Shipping Fee</th>
          <th scope="col">Discount</th>
          <th scope="col">Stock</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="selectedProduct" v-bind:value="product.slug">
            </div>
          </td>
          <td>{{ product.name }}</td>
          <td>₱ {{ product.price }}.00</td>
          <td>₱ {{ product.shipping_fee }}.00</td>
          <td>{{ product.discount }}%</td>
          <td>{{ product.stock }} pcs</td>
          <td>
            <EditButton 
              v-on:emitUpdateProduct="findProduct(product.slug)"
              v-show="hasEditButton"/>
            <button class="btn btn-sm btn-outline-danger ms-1" 
              @click="deleteProduct(product.slug)"
              v-show="hasDeleteButton">
              <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-sm btn-outline-dark ms-1" 
              v-show="hasArchiveButton"
              @click="archiveProduct(product.slug)">
              archive
            </button>
            <RestoreButton 
              v-on:emitRestoreProduct="restoreProduct(product.slug)"
              v-show="hasRestoreButton"/>
          </td>
        </tr>
      </tbody>
    </table>
    
    <EditForm 
      v-bind:editProduct="productFound"
      v-on:emitEditedProduct="updateProduct"/>
    
  </div>
</template>

<script>
  import EditForm from './Buttons/EditForm'
  import EditButton from './Buttons/EditButton'
  import RestoreButton from './Buttons/RestoreButton'
  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'ProductTable',
    props: {
      'editButton' : String,
      'deleteButton': String,
      'archiveButton' : String,
      'products' : Array,
      'links' : Array,
      hasDeleteButton: Boolean,
      hasEditButton: Boolean,
      hasArchiveButton: Boolean,
      hasRestoreButton: Boolean
    },
    components: {
      EditForm,
      EditButton,
      RestoreButton
    },
    data() {
      return {
        selectedProduct: [],
        productFound: []
      }
    },
    mounted() {
      console.clear()
    },
    methods: {
      findProduct(slug) {
        axios.get(`${this.$appUrl}/api/products/${slug}`)
        .then(res => {
          this.productFound = res.data.product
          console.log(this.productFound)
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
              let objIndex = this.products.findIndex(product => product.slug === slug)
              this.$delete(this.products, objIndex)
            })
            .catch(err => {
              console.log(err.response)
            })
          }
        })
      },

      deleteSelectedProducts() {
        if(this.selectedProduct.length > 0) {
          Swal.fire({
            title: 'Are you sure?',
            text: "The selected products will be deleted.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
          }).then(result => {
            if(result.isConfirmed) {
              this.showLoader("Deleting products")
              this.selectedProduct.forEach(slug => {
                axios.delete(`${this.$appUrl}/api/products/${slug}`)
                .then(() => {
                  let objIndex = this.products.findIndex(product => product.slug === slug)
                  this.$delete(this.products, objIndex)
                  Swal.fire({ title: "All selected products are deleted", icon: 'success' })
                })
                .catch(err => {
                  console.log(err.response)
                })
              })
            }
          })
          // ================ SWAL ==============
        }
      },

      updateProduct(product) {
        console.log(product)
        axios.put(`${this.$appUrl}/api/products/${product.slug}`, product)
        .then(res => {
          let objIndex = this.products.findIndex(product => product.slug === res.data.product.slug)
          this.products[objIndex] = res.data.product
          Swal.fire({ title: "Product updated", icon: 'success' })
          console.log(this.products[objIndex])
        })
        .catch(err => {
          console.log(err.response)
        })
      },

      archiveProduct(slug) {
        Swal.fire({
          title: 'Are you sure?',
          text: "The selected product will be archived.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0d6efd',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, archive it'
        }).then(result => {
          if(result.isConfirmed) {
            axios.put(`${this.$appUrl}/api/products/archive/${slug}`, {})
            .then(res => {
              console.log(res)
              Swal.fire({ title: "Product archived" , icon: 'success'})
              let objIndex = this.products.findIndex(product => product.slug == slug)
              this.$delete(this.products, objIndex)
            })
            .catch(err => console.log(err.response))
          }
        })
      },

      restoreProduct(slug) {
        Swal.fire({
          title: 'Are you sure?',
          text: "The selected product will be archived.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0d6efd',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, archive it'
        }).then(result => {
          if(result.isConfirmed) {
            axios.put(`${this.$appUrl}/api/products/restore/${slug}`)
            .then(res => {
              console.log(res)
              let objIndex = this.products.findIndex(product => product.slug == slug)
              this.$delete(this.products, objIndex);
              Swal.fire({ title: "Product Restored", icon: 'success'})
            })
            .catch(err => Swal.fire({ title: err.response.message, icon: 'error' }))
          }
        })
      }

    }
  }
</script>