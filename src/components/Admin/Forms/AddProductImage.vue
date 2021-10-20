<template>
  <div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupFile01"><i class="fa fa-image"></i></label>
      <input type="file" class="form-control" id="inputGroupFile01" v-on:change="onFileChange" multiple ref="inputFile">
    </div>
    <div class="d-flex justify-content-between">
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="emitBackToDetails">Back</button>
      </div>
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="emitProductImages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddProductImage',
    data() {
      return {
        productImages: []
      }
    },
    methods: {
      emitProductImages() {
        this.$emit('emitProductImages', this.productImages)
      },
      
      onFileChange(e) {
        e.target.files.forEach(file => {
          this.productImages.push(file)
        })
        console.log(this.productImages)
      },

      emitBackToDetails() {
        this.$emit('emitBackToDetails')
      },
      
    } 
  }
</script>