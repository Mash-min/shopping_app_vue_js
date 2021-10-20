<template>
  <button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="emitUpdateProduct">
    <i class="fa fa-pencil"></i>
  </button>
</template>

<script>
  export default {
    name: 'EditButton' ,
    methods: {
      emitUpdateProduct() {
        this.$emit('emitUpdateProduct');
      }
    }
  }
</script>