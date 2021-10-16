<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <form @submit.prevent="emitUpdateProduct">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit {{ editProduct.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">Edit name</label>
              <input type="text" class="form-control" placeholder="Edit product name" v-model="editProduct.name">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Edit description</label>
              <Editor
                v-model="editProduct.description"
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
              <div class="mb-3 col-6 p-1">
                <label for="price" class="form-label">Edit price</label>
                <input type="number" class="form-control" placeholder="Edit product price" v-model="editProduct.price">
              </div>
              <div class="mb-3 col-6 p-1">
                <label for="discount" class="form-label">Edit discount</label>
                <input type="number" class="form-control" placeholder="Edit product discount" v-model="editProduct.discount">
              </div>
            </div>
            <div class="d-flex">
              <div class="mb-3 col-6 p-1">
                <label for="stocl" class="form-label">Edit stock</label>
                <input type="number" class="form-control" placeholder="Edit product stock" v-model="editProduct.stock">
              </div>
              <div class="mb-3 col-6 p-1">
                <label for="shipping_fee" class="form-label">Edit shipping fee</label>
                <input type="number" class="form-control" placeholder="Edit product shipping fee" v-model="editProduct.shipping_fee">
              </div>
            </div>
            <div class="d-flex">
              <div class="mb-3 col-6 p-1">
                <label for="category" class="form-label">Edit Category</label>
                <select class="form-select" aria-label="Default select example" v-model="editProduct.category">
                  <option value="Product Category 1">Product Category 1</option>
                  <option value="Product Category 2">Product Category 2</option>
                  <option value="Product Category 3">Product Category 3</option>
                  <option value="Product Category 4">Product Category 4</option>
                  <option value="Product Category 5">Product Category 5</option>
                </select>
              </div>
              <div class="mb-3 col-6 p-1">
                <label for="refund" class="form-label">Edit days of refund</label>
                <input type="number" class="form-control" placeholder="Edit days of refund" v-model="editProduct.refund">
              </div>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="editProduct.warranty">
              <label class="form-check-label fw-bolder" for="flexCheckIndeterminate">
                Allow product warranty?
              </label>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <span>
              <button class="btn btn-outline-dark btn-sm">Edit images</button>
            </span>
            <span>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary btn-sm ms-1">Save changes</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue'

  export default {
    name: 'ProductEditForm',
    props: ['editProduct'],
    components: {
      Editor
    },
    methods: {
      emitUpdateProduct() {
        this.$emit('emitUpdateProduct', this.editProduct)
      }
    }
  }
</script>