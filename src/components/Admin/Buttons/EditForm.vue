<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <form @submit.prevent="emitEditedProduct">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex row">
              <div class="col-md-12 p-1">
                <label class="text-muted mb-1">Product name:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-pencil"></i></span>
                  <input type="text" class="form-control" v-model="editProduct.name">
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Product price:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">₱</span>
                  <input type="number" class="form-control" v-model="editProduct.price">
                </div>
              </div>
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Shipping fee:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">₱</span>
                  <input type="number" class="form-control" v-model="editProduct.shipping_fee">
                </div>
              </div>
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Product stock:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-list"></i></span>
                  <input type="number" class="form-control" v-model="editProduct.stock">
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Days of refund:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar"></i></span>
                  <input type="number" class="form-control" v-model="editProduct.refund">
                </div>
              </div>
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Product discount:</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">%</span>
                  <input type="number" class="form-control" v-model="editProduct.discount">
                </div>
              </div>
              <div class="col-md-4 p-1">
                <label class="text-muted mb-1">Product category:</label>
                <div class="input-group mb-3">
                  <select class="form-select" aria-label="Default select example" v-model="editProduct.category">
                    <option selected disabled>Select product category</option>
                    <option 
                      v-bind:value="category.category" 
                      v-for="category in categories" 
                      :key="category.id">
                      {{ category.category }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div class="mb-1">
                <label class="text-muted mb-1">Product description:</label>
                <textarea class="form-control" rows="3" v-model="editProduct.description"></textarea>
              </div>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" v-model="editProduct.warranty">
              <label class="form-check-label fw-bolder">
                Allow product warranty?
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-sm"><i class="fa fa-camera"></i></button>
            <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-outline-primary btn-sm">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'EditForm' ,
    props: [
      'editProduct'
    ],
    data() {
      return {
        categories: []
      }
    },
    mounted() {
      axios.get(`${this.$appUrl}/api/categories/`)
      .then(res => {
        this.categories = res.data.categories.data
      })
      .catch(err => {
        console.log(err.respone)
      })
    },
    methods: {
      emitEditedProduct() {
        this.$emit('emitEditedProduct', this.editProduct)
      }
    }
  }
</script>