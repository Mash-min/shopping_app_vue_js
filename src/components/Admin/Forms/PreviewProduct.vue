<template>
  <div>
    <h3>Product Preview</h3>
    <ul class="list-group">
      <li class="list-group-item"><span class="fw-bolder">Name:</span> {{ product.name }}</li>
      <li class="list-group-item"><div v-html="product.description"></div></li>
      <li class="list-group-item">Price: ₱ {{ product.price }}.00</li>
      <li class="list-group-item">Discount: {{ product.discount }}%</li>
      <li class="list-group-item">Category: {{ product.category }}</li>
      <li class="list-group-item">Stock: {{ product.stock }} pcs</li>
      <li class="list-group-item">Shipping Fee: ₱ {{ product.shipping_fee }}.00</li>
      <li class="list-group-item">Days to Refund: {{ product.refund }} day/s</li>
    </ul>
    <div class="d-flex justify-content-between mt-3">
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="backToCategories">Back</button>
      </div>
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="emitSaveProduct">Save Product</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PreviewProduct",
    props: ['product', 'productImages'],
    methods: {
      backToCategories() {
        this.$emit('backToCategories')
      },

      emitSaveProduct() {
        this.$emit('emitSaveProduct')
      }
    }
  }
</script>