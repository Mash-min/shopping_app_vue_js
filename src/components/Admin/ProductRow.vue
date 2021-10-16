<template>
  <tr>
    <td>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checkedProducts" v-bind:value="product.slug">
      </div>
    </td>
    <td>{{ product.name }}</td>
    <th>{{ product.slug }}</th>
    <td>PHP {{ product.price }}</td>
    <td>{{ product.stock }} pcs</td>
    <td>PHP {{ product.shipping_fee }}</td>
    <td>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" v-bind:checked="true">
      </div>
    </td>
    <td>
      <button class="btn btn-sm btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="emitFindProduct(product.slug)">
        <i class="fa fa-pencil"></i>
      </button>
      <button class="btn btn-sm btn-outline-danger ms-1" @click="emitDeleteProduct(product.slug)">
        <i class="fa fa-trash"></i>
      </button>
      <button class="btn btn-sm btn-outline-warning ms-1" @click="emitDeleteProduct(product.slug)">
        <i class="fa fa-times"></i>
      </button>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'ProductRow',
    props: ['product'],
    data() {
      return {
        isActive: true,
        checkedProducts: []
      }
    },
    methods: {
      emitFindProduct(product_slug) {
        this.$emit('emitFindProduct', product_slug)
      },

      emitDeleteProduct(product_slug) {
        this.$emit('emitDeleteProduct', product_slug)
      },

      checkProduct() {
        console.log(this.checkedProducts)
      }
    }
  }
</script>