<template>
  <div class="d-flex">
    <div v-if="authenticated" class="d-flex col-12">
      <div v-if="!alreadyInCart" class="d-grid gap-2 col-6 p-1">
        <button class="btn btn-outline-primary btn-sm " type="button" v-on:click="addToCart(product_id)">Add to Cart</button>
      </div>
      <div v-if="!alreadyInCart" class="d-grid gap-2 col-6 p-1">
        <button class="btn btn-outline-dark btn-sm" type="button">Buy Product</button>
      </div>
      <div v-else class="d-grid gap-2 col-12 p-1">
        <button class="btn btn-outline-dark btn-sm" type="button">Remove to Cart</button>
      </div>
    </div>
    <div v-else class="d-grid gap-2 col-12 p-1">
      <a href="/login" class="btn btn-outline-dark btn-sm" type="button">Login to you account</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'ProductButton',
    props: ['product_id'],
    data() {
      return  {
        authenticated: true,
        alreadyInCart: false,
        userId: 1
      }
    },
    mounted() {
      
    },
    methods: {
      addToCart(id) {
        console.log(this.product_id)
        Swal.fire({
          text: 'Loading...',
          showConfirmButton: false
        })
        let data = {
          user_id: this.userId,
          product_id: id
        }
        axios.post(`${this.$appUrl}/api/carts`, data).
        then(res => {
          Swal.close()
          console.log(res)
        }).
        catch(err => {
        Swal.fire({
          text: err.response.data.message,
          showConfirmButton: false
        })
          console.log(err.response)
        })
      }
    }
  }
</script>