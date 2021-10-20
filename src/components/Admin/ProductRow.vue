<template>
  <tr>
    <td>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checkedProduct" v-bind:value="product.slug" @change="emitCheckProduct(product.slug)">
      </div>
    </td>
    <td>{{ product.name }}</td>
    <td>₱ {{ product.price }}.00</td>
    <td>₱ {{ product.shipping_fee }}.00</td>
    <td>{{ product.discount }}%</td>
    <td>{{ product.stock }} pcs</td>
    <td>{{ product.slug }}</td>
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
        checkedProduct: ''
      }
    },
    methods: {
      emitFindProduct(product_slug) {
        this.$emit('emitFindProduct', product_slug)
      },

      emitDeleteProduct(product_slug) {
        this.$emit('emitDeleteProduct', product_slug)
      },

      emitCheckProduct(product_slug) {
        this.$emit('emitCheckProduct', product_slug)
      }
    }
  }
</script>